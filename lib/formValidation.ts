// Shared client-side field validation used across every lead-gen / application
// form on the site (contact modal, Let's start, contact page, pricing quiz,
// job application, careers apply, whitepaper forms).

// Letters only, allowing single spaces/hyphens/apostrophes between words so
// real full names ("Anne-Marie", "O'Brien", "Mary Jane") still validate.
const NAME_REGEX = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

// WHATWG/HTML5 `type="email"` validation pattern — the de-facto worldwide
// standard used by browsers for email inputs.
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function isValidName(value: string): boolean {
  return NAME_REGEX.test(value.trim());
}

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim());
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
