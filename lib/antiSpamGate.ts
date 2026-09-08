import type { NextRequest } from "next/server";
import { isHoneypotTriggered } from "./honeypot";
import { looksLikeScriptedBot } from "./botHeaders";

/**
 * The cheap, synchronous anti-spam pre-checks shared by every form route
 * (honeypot + header heuristics), centralized here so the logging that
 * shows *which* check fired lives in one place instead of being repeated
 * seven times with a chance to drift. Turnstile verification (the
 * expensive, async, authoritative check) stays a separate call in each
 * route — see lib/turnstile.ts — since it needs the token value, which is
 * read differently per route (JSON body vs FormData).
 *
 * `route` is just a label for the log line (e.g. "contact", "careers") —
 * doesn't affect behavior.
 */
export function isBlockedByPreCheck(req: NextRequest, honeypotValue: unknown, route: string): boolean {
  if (isHoneypotTriggered(honeypotValue)) {
    console.warn(`[anti-spam:${route}] blocked — honeypot field was filled in`);
    return true;
  }

  if (looksLikeScriptedBot(req)) {
    console.warn(`[anti-spam:${route}] blocked — request looks scripted`, {
      userAgent: req.headers.get("user-agent") || "(none)",
      origin: req.headers.get("origin") || "(none)",
      referer: req.headers.get("referer") || "(none)",
      host: req.headers.get("host") || "(none)",
    });
    return true;
  }

  return false;
}
