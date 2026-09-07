// Shared field validation used across every lead-gen / application form on
// the site (contact modal, Let's start, contact page, pricing quiz, job
// application, careers apply, whitepaper forms) — both client-side, for
// live "this looks wrong" UI feedback as someone types, and server-side, in
// every app/api/*/route.ts handler, as the actual enforcement (a request
// that never goes through the page's JS at all skips client checks
// entirely, so the API routes cannot rely on those alone).

// Letters only, allowing single spaces/hyphens/apostrophes between words so
// real full names ("Anne-Marie", "O'Brien", "Mary Jane") still validate.
const NAME_REGEX = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

// WHATWG/HTML5 `type="email"` validation pattern — the de-facto worldwide
// standard used by browsers for email inputs. Deliberately permissive (it's
// tuned to never reject a real address), which also means it lets through
// some shapes that aren't actually valid outside a quoted local-part — see
// the extra checks in isValidEmail() below that tighten those specific
// gaps without touching this pattern itself.
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function isValidName(value: string): boolean {
  return NAME_REGEX.test(value.trim());
}

/**
 * Format-only check — confirms the string is *shaped* like an email
 * address, not that the mailbox exists or that whoever submitted it owns
 * it (that would need a verification-link flow, not a sync check). Layers
 * a few extra rules on top of the base WHATWG pattern, since that pattern
 * alone accepts several shapes that aren't actually valid:
 *   - No RFC 5321 length limits at all (a several-thousand-character local
 *     part or domain passes it as "valid" today).
 *   - Leading/trailing/consecutive dots in the local part
 *     (".john@x.com", "john.@x.com", "john..doe@x.com") — invalid outside
 *     a quoted string, but '.' is just one more allowed character in that
 *     part of the pattern, so these slip through.
 *   - A digits-only or single-character top-level label ("user@x.4",
 *     "user@x.c") — syntactically fine per the pattern, but not a real TLD
 *     shape anything uses in practice.
 */
export function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (!EMAIL_REGEX.test(trimmed)) return false;
  if (trimmed.length > 254) return false;

  const atIndex = trimmed.lastIndexOf("@");
  const localPart = trimmed.slice(0, atIndex);
  const domain = trimmed.slice(atIndex + 1);
  if (localPart.length > 64) return false;
  if (localPart.startsWith(".") || localPart.endsWith(".") || localPart.includes("..")) {
    return false;
  }

  const tld = domain.slice(domain.lastIndexOf(".") + 1);
  if (!/^[a-zA-Z]{2,}$/.test(tld)) return false;

  return true;
}

// E.164-style validation: digits and common phone punctuation only (no
// letters), 7-15 digits total once punctuation is stripped — the ITU E.164
// international length range.
export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (/[a-zA-Z]/.test(trimmed)) return false;
  if (!/^[+0-9()\-.\s]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value.trim());
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function hasHostname(value: string, hostSuffix: string): boolean {
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "http:" && url.protocol !== "https:") return false;
    const host = url.hostname.toLowerCase();
    return host === hostSuffix || host.endsWith(`.${hostSuffix}`);
  } catch {
    return false;
  }
}

export function isValidGithubUrl(value: string): boolean {
  return hasHostname(value, "github.com");
}

export function isValidLinkedinUrl(value: string): boolean {
  return hasHostname(value, "linkedin.com");
}

export const VALIDATION_MESSAGES = {
  required: "This field is required.",
  name: "Only letters are allowed.",
  email: "Please enter a valid email address.",
  phone: "Please enter a valid phone number.",
  url: "Please enter a valid URL.",
  github: "Please enter a valid GitHub URL (e.g. https://github.com/username).",
  linkedin: "Please enter a valid LinkedIn URL (e.g. https://linkedin.com/in/username).",
  checkbox: "Please check this box to continue.",
} as const;
