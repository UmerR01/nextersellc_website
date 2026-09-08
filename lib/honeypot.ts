/**
 * Server-side half of the honeypot anti-spam check (client half:
 * components/Honeypot.tsx). Every public form on the site renders a
 * decoy input under this name that's visually hidden and taken out of
 * the tab/screen-reader order — a real person filling in the visible
 * form never touches it, so a non-empty value here means whatever sent
 * the request wasn't a person using the actual UI (most bots either
 * fill in every field they can see in the raw HTML, or are scripted
 * against the API directly with a guessed/duplicated field set).
 *
 * This does not catch a targeted attacker who read this file — it
 * catches the common case: scripts that blindly fill every input on a
 * scraped form, or that just re-post a previously captured payload
 * verbatim. Pair with rate limiting for anything more determined.
 *
 * Field name deliberately has no dictionary-word meaning ("company",
 * "site", "website", "url", etc.) — a semantically obvious name is
 * exactly what third-party browser password managers/autofill
 * extensions pattern-match against, and those routinely ignore a page's
 * own `autocomplete="off"`. A false positive here isn't cosmetic: it
 * silently returns the same success response as a real submission (by
 * design, so a bot gets no signal) while quietly never sending the
 * mail — a genuine submitter would see no error and nothing wrong, just
 * no email ever arrives. Keep it abstract if this ever gets renamed.
 */
export const HONEYPOT_FIELD_NAME = "hp_x7q";

/** True if the honeypot decoy field was filled in. */
export function isHoneypotTriggered(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

// A second anti-spam layer used to live here too: a submission-timing
// check (first a raw client timestamp, later a server-signed token in
// lib/formToken.ts). Removed once Cloudflare Turnstile (lib/turnstile.ts)
// went live — Turnstile subsumes it, since a script can't solve it without
// a real browser actually taking real time, which is strictly stronger
// proof than trusting elapsed time. See track/form-spam-honeypot-fix.md.
