import type { NextRequest } from "next/server";

/**
 * Conservative, header-only bot heuristics — deliberately biased toward
 * NOT blocking, so an unusual-but-real client (a privacy browser extension
 * that strips Origin/Referer, a corporate proxy, etc.) is never caught by
 * this alone. Meant to catch a specific, common tier of scripted spam: a
 * script that scraped a form's field names off one page and now blasts the
 * same generic payload at a list of endpoints, without bothering to spoof
 * a realistic User-Agent or a matching Origin per target. That's exactly
 * the class of bot a hidden field or a body token can't catch on its own
 * (see track/form-spam-honeypot-fix.md) — it's a property of the request
 * itself, not something the bot chooses to fill in or omit.
 */

// Known non-browser HTTP client default User-Agent prefixes — no real
// browser ever sends any of these as its own UA.
const SCRIPT_UA_PREFIXES = [
  "python-requests",
  "python-urllib",
  "curl/",
  "Wget/",
  "Go-http-client",
  "axios/",
  "node-fetch",
  "okhttp",
  "Java/",
  "Apache-HttpClient",
  "libwww-perl",
  "PostmanRuntime",
  "insomnia",
  "Scrapy",
  "PycURL",
  "HTTPie",
];

// `.host` (not `.hostname`) — it includes the port, matching the format of
// the incoming `Host` header exactly. Comparing hostname-only against the
// Host header would falsely flag every same-origin request on a non-default
// port (e.g. local dev on :3000) as a mismatch.
function hostOf(url: string | null): string | null {
  if (!url) return null;
  try {
    return new URL(url).host;
  } catch {
    return null;
  }
}

/**
 * True if this request looks like scripted spam based on its headers
 * alone. Routes `||` this alongside the honeypot/token checks.
 */
export function looksLikeScriptedBot(req: NextRequest): boolean {
  const ua = req.headers.get("user-agent") ?? "";
  if (!ua.trim()) return true; // every real browser sends one
  if (SCRIPT_UA_PREFIXES.some((prefix) => ua.startsWith(prefix))) return true;

  // Only block on a HEADER MISMATCH, never on absence — some legitimate
  // browsers/extensions strip Origin/Referer entirely, and under-blocking
  // is the safe direction to err in here.
  const host = req.headers.get("host");
  if (host) {
    const originHost = hostOf(req.headers.get("origin"));
    if (originHost && originHost !== host) return true;
    if (!originHost) {
      const refererHost = hostOf(req.headers.get("referer"));
      if (refererHost && refererHost !== host) return true;
    }
  }

  return false;
}
