/**
 * Names shared by the image CAPTCHA's browser half (components/CaptchaField.tsx)
 * and its server half (lib/captcha.ts). Kept free of any server-only imports
 * so it is safe to bundle for the browser.
 */
export const CAPTCHA_TOKEN_FIELD = "captcha_token";
export const CAPTCHA_ANSWER_FIELD = "captcha_answer";
export const CAPTCHA_REFRESH_EVENT = "captcha:refresh";

/**
 * Asks every <CaptchaField> on the page to fetch a fresh image. A captcha is
 * single-use on the server — it is consumed by ANY submit attempt that reaches
 * the check, right or wrong — so a form must show a new one after a failed
 * submission. lib/formErrors.ts calls this for every non-OK response.
 */
export function refreshCaptcha(): void {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(CAPTCHA_REFRESH_EVENT));
}
