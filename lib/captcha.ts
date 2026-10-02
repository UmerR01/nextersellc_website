import crypto from "crypto";
import { NextResponse, type NextRequest } from "next/server";
import { CAPTCHA_ANSWER_FIELD, CAPTCHA_TOKEN_FIELD } from "./captchaClient";

export { CAPTCHA_ANSWER_FIELD, CAPTCHA_TOKEN_FIELD };

/**
 * Self-hosted image CAPTCHA — no third party, no database.
 *
 * How it works:
 *  - GET /api/captcha calls createCaptcha(): picks a random code, draws it as an
 *    SVG, and returns the image plus a signed token. The token carries an HMAC of
 *    the code (keyed with a server-only secret) — NOT the code itself, and the
 *    code can't be recovered from the HMAC without the secret.
 *  - The form sends the token and what the visitor typed; verifyCaptcha()
 *    re-computes the HMAC and compares. Nothing about a challenge is stored.
 *  - The ONLY state is the set of already-used token ids (so a solved image can't
 *    be replayed) and the issue-rate counters. Both are short-lived and live in
 *    memory — correct for a single Node process (`next start` under systemd). If
 *    this ever runs as several processes they no longer share that state; move
 *    `used` and `issueHits` to Redis then, and set CAPTCHA_SECRET so every
 *    process signs with the same key.
 *
 * State is parked on globalThis because Next.js can load this module more than
 * once (per route bundle, and on dev hot-reload) and a plain module-level Map
 * would then silently become several independent maps.
 */

const TTL_MS = 3 * 60 * 1000; // how long a challenge stays solvable
const CODE_LENGTH = 5;
// No 0/O, 1/I/L — the classic look-alikes that make honest users fail.
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

const ISSUE_WINDOW_MS = 10 * 60 * 1000;
const ISSUE_MAX_PER_WINDOW = 40; // images one IP may request per window

type CaptchaState = {
  secret: Buffer;
  bootAt: number;
  used: Map<string, number>; // token id -> expiry
  issueHits: Map<string, { count: number; resetAt: number }>;
  lastPrune: number;
};

const g = globalThis as unknown as { __captchaState?: CaptchaState };
const state: CaptchaState = (g.__captchaState ??= {
  // A random per-process secret is as secure as a configured one for a single
  // process; the only effect of a restart is that in-flight images stop
  // validating (see bootAt check below) and the visitor gets a new one.
  secret: process.env.CAPTCHA_SECRET ? Buffer.from(process.env.CAPTCHA_SECRET) : crypto.randomBytes(32),
  bootAt: Date.now(),
  used: new Map(),
  issueHits: new Map(),
  lastPrune: 0,
});

// ---------------------------------------------------------------------------
// Image generation. Characters are drawn as stroked, jittered, warped paths —
// never as <text> — so the code can't simply be read out of the SVG markup.
// ---------------------------------------------------------------------------

type Pt = [number, number];
type Stroke = Pt[];

/** Points along an ellipse arc. Angles in degrees; 0 = right, 90 = down (SVG y-axis). */
const arc = (cx: number, cy: number, rx: number, ry: number, a0: number, a1: number, n = 12): Stroke =>
  Array.from({ length: n + 1 }, (_, i) => {
    const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180;
    return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)] as Pt;
  });

// A tiny stroke font on a 4-wide x 6-tall grid (y grows downward).
const GLYPHS: Record<string, Stroke[]> = {
  A: [[[0, 6], [2, 0], [4, 6]], [[0.8, 4], [3.2, 4]]],
  B: [[[0, 0], [0, 6]], [[0, 0], [2.5, 0], ...arc(2.5, 1.5, 1.5, 1.5, -90, 90), [0, 3]], [[0, 3], [2.7, 3], ...arc(2.7, 4.5, 1.3, 1.5, -90, 90), [0, 6]]],
  C: [arc(2, 3, 2, 3, -45, -315, 16)],
  D: [[[0, 0], [0, 6]], [[0, 0], [1.5, 0], ...arc(1.5, 3, 2.5, 3, -90, 90, 14), [0, 6]]],
  E: [[[4, 0], [0, 0], [0, 6], [4, 6]], [[0, 3], [3, 3]]],
  F: [[[4, 0], [0, 0], [0, 6]], [[0, 3], [3, 3]]],
  G: [[...arc(2, 3, 2, 3, -45, -360, 18), [2.2, 3]]],
  H: [[[0, 0], [0, 6]], [[4, 0], [4, 6]], [[0, 3], [4, 3]]],
  J: [[[4, 0], [4, 4.2], ...arc(2.2, 4.2, 1.8, 1.8, 0, 180, 8)]],
  K: [[[0, 0], [0, 6]], [[4, 0], [0, 3.5]], [[1.2, 2.6], [4, 6]]],
  M: [[[0, 6], [0, 0], [2, 3.5], [4, 0], [4, 6]]],
  N: [[[0, 6], [0, 0], [4, 6], [4, 0]]],
  P: [[[0, 6], [0, 0], [2.5, 0], ...arc(2.5, 1.7, 1.5, 1.7, -90, 90), [0, 3.4]]],
  Q: [arc(2, 3, 2, 3, 0, 360, 20), [[2.4, 4.4], [4, 6.2]]],
  R: [[[0, 6], [0, 0], [2.5, 0], ...arc(2.5, 1.7, 1.5, 1.7, -90, 90), [0, 3.4]], [[2, 3.4], [4, 6]]],
  S: [[...arc(2, 1.5, 2, 1.5, -30, -270, 12), ...arc(2, 4.5, 2, 1.5, -90, 200, 14)]],
  T: [[[0, 0], [4, 0]], [[2, 0], [2, 6]]],
  U: [[[0, 0], [0, 3.6], ...arc(2, 3.6, 2, 2.4, 180, 0, 12), [4, 0]]],
  V: [[[0, 0], [2, 6], [4, 0]]],
  W: [[[0, 0], [1, 6], [2, 2.5], [3, 6], [4, 0]]],
  X: [[[0, 0], [4, 6]], [[4, 0], [0, 6]]],
  Y: [[[0, 0], [2, 3]], [[4, 0], [2, 3], [2, 6]]],
  Z: [[[0, 0], [4, 0], [0, 6], [4, 6]]],
  "2": [[...arc(2, 1.8, 1.9, 1.8, -200, 20, 12), [0, 6], [4, 6]]],
  "3": [[...arc(2, 1.5, 1.8, 1.5, -160, 90, 12), ...arc(2, 4.5, 2, 1.5, -90, 160, 14)]],
  "4": [[[3, 6], [3, 0], [0, 4.2], [4, 4.2]]],
  "5": [[[3.7, 0], [0.5, 0], [0.3, 2.7]], [[0.3, 2.7], ...arc(2, 4.1, 2, 1.9, -125, 150, 16)]],
  "6": [[[3.5, 0.2], [2.2, 0], [1, 0.9], [0.2, 2.6], [0, 4]], arc(2, 4, 2, 2, 0, 360, 20)],
  "7": [[[0, 0], [4, 0], [1.6, 6]]],
  "8": [arc(2, 1.5, 1.6, 1.5, 0, 360, 16), arc(2, 4.4, 2, 1.6, 0, 360, 18)],
  "9": [arc(2, 2, 2, 2, 0, 360, 20), [[4, 2], [3.6, 4.2], [2.4, 5.7], [0.6, 6]]],
};

/** Uniform random float in [min, max) from the OS CSPRNG. */
const rnd = (min: number, max: number) => min + (crypto.randomBytes(4).readUInt32BE() / 0x100000000) * (max - min);

/** Split long segments so the later wave distortion can actually bend them. */
function densify(stroke: Stroke, maxLen = 0.6): Stroke {
  const out: Stroke = [stroke[0]!];
  for (let i = 1; i < stroke.length; i++) {
    const [x0, y0] = stroke[i - 1]!;
    const [x1, y1] = stroke[i]!;
    const steps = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / maxLen));
    for (let s = 1; s <= steps; s++) out.push([x0 + ((x1 - x0) * s) / steps, y0 + ((y1 - y0) * s) / steps]);
  }
  return out;
}

const INKS = ["#1b2a4e", "#2b2a6d", "#0f5b78", "#6a1b4d", "#2f4f2f", "#7a3b12"];
const pick = <T,>(arr: readonly T[]) => arr[crypto.randomInt(arr.length)]!;

function renderSvg(code: string): string {
  const W = 200;
  const H = 64;
  const parts: string[] = [];
  parts.push(`<rect width="${W}" height="${H}" fill="#f3f5f8"/>`);

  // background scribbles first, then the glyphs, then more scribbles on top
  const scribble = (width: number) => {
    const c = pick(INKS);
    const p = (): Pt => [rnd(0, W), rnd(0, H)];
    const [a, b, d] = [p(), p(), p()];
    parts.push(
      `<path d="M${a[0].toFixed(1)} ${a[1].toFixed(1)} Q${b[0].toFixed(1)} ${b[1].toFixed(1)} ${d[0].toFixed(1)} ${d[1].toFixed(1)}" stroke="${c}" stroke-width="${width.toFixed(1)}" fill="none" opacity="0.55" stroke-linecap="round"/>`
    );
  };
  for (let i = 0; i < 4; i++) scribble(rnd(1, 1.8));

  const waveAmp = rnd(2.2, 3.6);
  const waveLen = rnd(11, 17);
  const wavePhase = rnd(0, Math.PI * 2);
  const cell = (W - 24) / code.length;

  [...code].forEach((ch, idx) => {
    const strokes = GLYPHS[ch]!;
    const unit = rnd(4.7, 5.7); // px per glyph unit
    const rot = rnd(-0.38, 0.38);
    const shear = rnd(-0.28, 0.28);
    const cx = 12 + cell * idx + cell / 2 + rnd(-3, 3);
    const cy = H / 2 + rnd(-3, 3);
    const width = rnd(2.4, 3.3);
    const ink = pick(INKS);

    const d = strokes
      .map((s) =>
        densify(s)
          .map(([gx, gy], i) => {
            // center on the glyph, jitter, shear, rotate, scale, then warp
            const lx = gx - 2 + rnd(-0.1, 0.1);
            const ly = gy - 3 + rnd(-0.1, 0.1);
            const sx = lx + shear * ly;
            const rx = sx * Math.cos(rot) - ly * Math.sin(rot);
            const ry = sx * Math.sin(rot) + ly * Math.cos(rot);
            const x = cx + rx * unit;
            const y = cy + ry * unit + waveAmp * Math.sin(x / waveLen + wavePhase);
            return `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
          })
          .join("")
      )
      .join("");
    parts.push(`<path d="${d}" stroke="${ink}" stroke-width="${width.toFixed(1)}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`);
  });

  for (let i = 0; i < 4; i++) scribble(rnd(1.2, 2.2));
  for (let i = 0; i < 45; i++) {
    parts.push(`<circle cx="${rnd(0, W).toFixed(1)}" cy="${rnd(0, H).toFixed(1)}" r="${rnd(0.6, 1.5).toFixed(1)}" fill="${pick(INKS)}" opacity="0.5"/>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${parts.join("")}</svg>`;
}

// ---------------------------------------------------------------------------
// Tokens
// ---------------------------------------------------------------------------

const b64url = (buf: Buffer | string) => Buffer.from(buf).toString("base64url");
const hmac = (data: string) => crypto.createHmac("sha256", state.secret).update(data).digest();
const normalize = (answer: string) => answer.trim().toUpperCase();

function safeEqual(a: Buffer, b: Buffer) {
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

/**
 * Builds one challenge. `answer` is returned for the server's own use (and the
 * test harness) — the /api/captcha route must only ever send `token` + `image`.
 */
export function createCaptcha(): { token: string; image: string; answer: string } {
  const answer = Array.from({ length: CODE_LENGTH }, () => ALPHABET[crypto.randomInt(ALPHABET.length)]).join("");
  const id = crypto.randomBytes(12).toString("hex");
  const iat = Date.now();
  const payload = b64url(JSON.stringify({ id, iat, exp: iat + TTL_MS, h: hmac(`a:${id}:${answer}`).toString("hex") }));
  const token = `${payload}.${b64url(hmac(`p:${payload}`))}`;
  const image = `data:image/svg+xml;base64,${Buffer.from(renderSvg(answer)).toString("base64")}`;
  return { token, image, answer };
}

export type CaptchaResult = { ok: true } | { ok: false; reason: "missing" | "malformed" | "expired" | "used" | "wrong" };

function prune(now: number) {
  if (now - state.lastPrune < 30_000) return;
  state.lastPrune = now;
  for (const [id, exp] of state.used) if (exp < now) state.used.delete(id);
  for (const [ip, hit] of state.issueHits) if (hit.resetAt < now) state.issueHits.delete(ip);
}

/**
 * Checks a token + typed answer. A token is consumed by the first attempt that
 * passes the signature/expiry checks — right or wrong — so one image can't be
 * guessed at repeatedly, and a solved one can't be replayed.
 */
export function verifyCaptcha(token: unknown, answer: unknown): CaptchaResult {
  if (typeof token !== "string" || !token || typeof answer !== "string" || !normalize(answer)) {
    return { ok: false, reason: "missing" };
  }

  const [payload, sig] = token.split(".");
  if (!payload || !sig || token.split(".").length !== 2) return { ok: false, reason: "malformed" };
  if (!safeEqual(Buffer.from(sig, "base64url"), hmac(`p:${payload}`))) return { ok: false, reason: "malformed" };

  let data: { id?: unknown; iat?: unknown; exp?: unknown; h?: unknown };
  try {
    data = JSON.parse(Buffer.from(payload, "base64url").toString());
  } catch {
    return { ok: false, reason: "malformed" };
  }
  if (typeof data.id !== "string" || typeof data.iat !== "number" || typeof data.exp !== "number" || typeof data.h !== "string") {
    return { ok: false, reason: "malformed" };
  }

  const now = Date.now();
  prune(now);
  if (data.exp < now || data.iat < state.bootAt) return { ok: false, reason: "expired" };
  if (state.used.has(data.id)) return { ok: false, reason: "used" };
  state.used.set(data.id, data.exp); // consume before comparing the answer

  const expected = Buffer.from(data.h, "hex");
  const actual = hmac(`a:${data.id}:${normalize(answer)}`);
  return safeEqual(expected, actual) ? { ok: true } : { ok: false, reason: "wrong" };
}

/**
 * Route helper: the 400 to return if the captcha is missing/wrong, else null.
 * `captcha: "refresh"` tells the form its image is spent and to show a new one.
 */
export function captchaGuard(token: unknown, answer: unknown, route: string): NextResponse | null {
  const result = verifyCaptcha(token, answer);
  if (result.ok) return null;
  console.warn(`[captcha:${route}] rejected — ${result.reason}`);
  return NextResponse.json(
    {
      error:
        result.reason === "missing"
          ? "Please enter the code shown in the image."
          : "That code didn't match. Please try again with the new image.",
      captcha: "refresh",
    },
    { status: 400 }
  );
}

// ---------------------------------------------------------------------------
// Issue-rate limiting (per client IP) for GET /api/captcha
// ---------------------------------------------------------------------------

/**
 * Best-effort client IP. Prefers X-Real-IP (nginx: `proxy_set_header X-Real-IP
 * $remote_addr`), else the LAST X-Forwarded-For entry (the one nginx appended —
 * the first entry is whatever the client claimed). Both are only trustworthy
 * if nginx sets/overwrites them; confirm that in the site's nginx config.
 */
export function clientIp(req: NextRequest): string {
  const real = req.headers.get("x-real-ip")?.trim();
  if (real) return real;
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",").pop()!.trim();
  return "unknown";
}

/** True if this IP may be issued another image right now. */
export function allowIssue(ip: string): boolean {
  const now = Date.now();
  prune(now);
  const hit = state.issueHits.get(ip);
  if (!hit || hit.resetAt < now) {
    state.issueHits.set(ip, { count: 1, resetAt: now + ISSUE_WINDOW_MS });
    return true;
  }
  hit.count += 1;
  return hit.count <= ISSUE_MAX_PER_WINDOW;
}
