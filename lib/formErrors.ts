/**
 * Shared "what do we show the user when a submission fails" helper for
 * every public form. Centralized so this logic (and the fallback string)
 * exists once instead of being copy-pasted into 7 forms — see
 * track/form-spam-honeypot-fix.md's Turnstile-messaging follow-up.
 *
 * The server now distinguishes real reasons a submission gets rejected
 * (see lib/turnstile.ts's TurnstileResult) — a down/slow Cloudflare gets
 * "Our verification service is temporarily unavailable..." instead of
 * being lumped in with "Verification failed", because the first is
 * genuinely not the visitor's fault and "try again in a moment" is
 * actually useful advice there in a way it isn't for a truly bad token.
 * That distinction is wasted if the UI shows the same hardcoded generic
 * string regardless of what the server actually said — this reads the
 * real message off the response body instead.
 */
export const GENERIC_SUBMIT_ERROR = "Something went wrong. Please try again.";

/**
 * Reads a user-facing error message off a failed fetch Response, falling
 * back to GENERIC_SUBMIT_ERROR if the body isn't JSON or has no `error`
 * string (e.g. a proxy/host-level error page instead of our own JSON).
 */
export async function extractErrorMessage(res: Response): Promise<string> {
  try {
    const data = (await res.json()) as { error?: unknown };
    if (typeof data?.error === "string" && data.error.trim()) return data.error;
  } catch {
    // non-JSON body — fall through to the generic message
  }
  return GENERIC_SUBMIT_ERROR;
}
