const SECRET = process.env.TURNSTILE_SECRET_KEY ?? "";
const SITE_KEY_CONFIGURED = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

if (!SECRET && process.env.NODE_ENV === "production") {
  console.warn(
    "[turnstile] TURNSTILE_SECRET_KEY is not set — Turnstile verification is " +
      "inactive (allowing everything through it) until it's configured."
  );
}

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// How long to wait on Cloudflare's verify call before giving up. This is
// the one number that trades submission latency against availability risk
// — see the "fail-closed on timeout" note below, and
// track/form-spam-honeypot-fix.md's Turnstile section for the fuller
// discussion. Cloudflare's own docs cite typical siteverify latency well
// under a second; 5s is a generous ceiling, not the expected case.
const VERIFY_TIMEOUT_MS = 5000;

export const TURNSTILE_FIELD_NAME = "cf_turnstile_token";

/**
 * Result of a verification attempt. `reason` only matters when `ok` is
 * false, and exists specifically so a route can tell a genuinely bad
 * token apart from Cloudflare itself being slow/unreachable — those
 * deserve different messages: "verification failed" wrongly implies the
 * visitor did something wrong when Cloudflare is just having a moment,
 * and "try again" is actually good advice for `unavailable` in a way it
 * isn't really for a token that's simply invalid.
 *
 *   - "missing"     no token was submitted at all
 *   - "invalid"     Cloudflare looked at the token and rejected it
 *                    (expired, already used, wrong site key, forged)
 *   - "unavailable" we couldn't get a straight answer from Cloudflare at
 *                    all — network error, timeout, or Cloudflare's own
 *                    5xx/internal-error. Not the visitor's fault.
 */
export type TurnstileResult = { ok: true } | { ok: false; reason: "missing" | "invalid" | "unavailable" };

/**
 * Verifies a Turnstile token with Cloudflare. Unlike the honeypot/timing
 * checks, this is a REQUIRED credential once configured, not an
 * obscurity-based signal — so a missing/invalid/expired token is always
 * treated as invalid (fail closed), the same as a missing required form
 * field. The one exception is `TURNSTILE_SECRET_KEY` itself being unset:
 * that's a deploy-configuration state, not a submission property, and
 * degrades to "check inactive" like the other anti-spam layers do, rather
 * than breaking every form the moment this code ships ahead of the key
 * being set.
 *
 * On a network error, timeout, or Cloudflare-side failure, this fails
 * CLOSED (`ok: false`) — a genuine submission during a Cloudflare outage
 * gets rejected rather than silently let through. That's a deliberate
 * default, not the only reasonable choice; return `{ ok: true }` instead
 * in the `catch` block (and the `!res.ok` branch) below if you'd rather
 * fail open on Cloudflare's own downtime instead of on the requester. The
 * `reason: "unavailable"` distinction exists either way, so routes can
 * show an honest message regardless of which failure mode you pick.
 */
export async function verifyTurnstileToken(token: unknown, remoteIp?: string, route = "unknown"): Promise<TurnstileResult> {
  if (!SECRET) return { ok: true }; // not configured yet — see warning above

  if (typeof token !== "string" || !token) {
    console.warn(`[turnstile:${route}] rejected — no token in the submission (missing or empty)`);
    return { ok: false, reason: "missing" };
  }

  try {
    const body = new URLSearchParams({ secret: SECRET, response: token });
    if (remoteIp) body.set("remoteip", remoteIp);

    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(VERIFY_TIMEOUT_MS),
    });

    if (!res.ok) {
      console.warn(`[turnstile:${route}] Cloudflare unavailable — HTTP ${res.status} from siteverify`);
      return { ok: false, reason: "unavailable" };
    }

    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };

    if (data.success === true) {
      console.log(`[turnstile:${route}] verified OK`);
      return { ok: true };
    }

    // Common error-codes: "missing-input-secret" / "invalid-input-secret"
    // (wrong TURNSTILE_SECRET_KEY), "missing-input-response" (no token),
    // "invalid-input-response" (bad/expired/already-used token),
    // "timeout-or-duplicate" (token reused or too old), "internal-error"
    // (Cloudflare's own side — this one is the "unavailable" case, not a
    // real rejection of the visitor). See
    // https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
    const errorCodes = data["error-codes"] ?? [];
    console.warn(`[turnstile:${route}] rejected — Cloudflare said invalid`, { errorCodes });
    if (errorCodes.includes("internal-error")) {
      return { ok: false, reason: "unavailable" };
    }
    return { ok: false, reason: "invalid" };
  } catch (err) {
    console.warn(`[turnstile:${route}] Cloudflare unavailable — request failed (network error or timeout)`, err);
    return { ok: false, reason: "unavailable" }; // fail-closed — see note above
  }
}

/** True once a site key is present client-side — lets components/Turnstile.tsx no-op cleanly before setup. */
export function isTurnstileConfigured(): boolean {
  return SITE_KEY_CONFIGURED;
}
