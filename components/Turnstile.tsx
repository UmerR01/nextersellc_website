"use client";

import { useEffect, useRef, useState, type Ref } from "react";
import { TURNSTILE_FIELD_NAME } from "@/lib/turnstile";

export { TURNSTILE_FIELD_NAME };

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let scriptLoadPromise: Promise<void> | null = null;
function loadTurnstileScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (!scriptLoadPromise) {
    scriptLoadPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Turnstile script"));
      document.head.appendChild(script);
    });
  }
  return scriptLoadPromise;
}

type TurnstileWidgetProps = {
  /** Ref to the token field — read `.current?.value` under TURNSTILE_FIELD_NAME. */
  tokenRef?: Ref<HTMLInputElement>;
};

/**
 * Cloudflare Turnstile widget — the real anti-bot check (see
 * lib/turnstile.ts for the server-side verification and
 * track/form-spam-honeypot-fix.md for why: unlike the honeypot/timing
 * token, a script can't fake a pass here, because it never executes the
 * browser JS Cloudflare uses to issue one).
 *
 * Unlike Honeypot.tsx, this widget is NOT hidden — Cloudflare's terms
 * require the badge/checkbox to stay visible when shown, and
 * `appearance: "interaction-only"` below already keeps it fully collapsed
 * (zero layout height) for the common case where no visible challenge is
 * needed, only expanding if Cloudflare decides an interactive check is
 * required.
 *
 * No-ops cleanly (renders nothing, contributes an empty token) if
 * NEXT_PUBLIC_TURNSTILE_SITE_KEY isn't set yet — see .env.local.
 *
 * Usage: render `<TurnstileWidget tokenRef={turnstileRef} />` inside the
 * form, then read `turnstileRef.current?.value` under TURNSTILE_FIELD_NAME
 * when building the submission payload — same convention as
 * components/Honeypot.tsx. A form that submits via
 * `new FormData(formElement)` needs no ref at all.
 */
export default function TurnstileWidget({ tokenRef }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!SITE_KEY || !containerRef.current) return;
    let cancelled = false;

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          appearance: "interaction-only",
          callback: (t: string) => setToken(t),
          "expired-callback": () => setToken(""),
          "error-callback": () => setToken(""),
        });
      })
      .catch(() => {
        // Script failed to load (offline, blocked) — token just stays
        // empty, server treats that the same as a missing token.
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // widget already gone — nothing to clean up
        }
      }
    };
  }, []);

  return (
    <div>
      <div ref={containerRef} />
      <input ref={tokenRef} type="hidden" name={TURNSTILE_FIELD_NAME} value={token} readOnly />
    </div>
  );
}
