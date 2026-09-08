import { forwardRef } from "react";
import { HONEYPOT_FIELD_NAME } from "@/lib/honeypot";

export { HONEYPOT_FIELD_NAME };

/**
 * Decoy field for every public form on the site — see lib/honeypot.ts for
 * the server-side half of this check and the reasoning.
 *
 * Hidden via `display: none` on a wrapper — proven necessary the hard way:
 * an earlier version used absolute off-screen positioning (zero size,
 * opacity 0) specifically to stay bot-catching against scripts that skip
 * trivially-hidden fields, but that same "technically still a normal
 * visible text input" quality is exactly what got it autofilled with a
 * real user's own email address in production testing (their browser
 * cascade-filled every text input in the form once the real email field
 * matched). A false positive here isn't cosmetic — it silently discards a
 * genuine submission with no error shown (see lib/honeypot.ts) — so
 * autofill-safety wins over catching the small slice of bots that
 * specifically special-case display:none. `tabIndex={-1}` + `aria-hidden`
 * are kept as defense-in-depth, not the primary defense.
 *
 * This used to also carry a second, server-signed timing-token field
 * (lib/formToken.ts) as a submission-speed anti-spam layer. Removed once
 * Cloudflare Turnstile (components/Turnstile.tsx) went live — Turnstile
 * subsumes it: it can't be solved without a real browser actually taking
 * real time, which is strictly stronger proof than trusting elapsed time
 * against a signed timestamp. See track/form-spam-honeypot-fix.md.
 *
 * Usage: render `<Honeypot ref={honeypotRef} />` inside the form, then read
 * `honeypotRef.current?.value` when building the submission payload
 * (FormData field or JSON key, under HONEYPOT_FIELD_NAME) — matches how
 * these forms already read file inputs, no controlled-state needed.
 */
const Honeypot = forwardRef<HTMLInputElement>((_props, ref) => (
  <div style={{ display: "none" }} aria-hidden="true">
    <input
      ref={ref}
      type="text"
      name={HONEYPOT_FIELD_NAME}
      tabIndex={-1}
      autoComplete="off"
    />
  </div>
));

Honeypot.displayName = "Honeypot";

export default Honeypot;
