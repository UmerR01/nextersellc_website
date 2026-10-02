"use client";

import { useCallback, useEffect, useState, type Ref } from "react";
import styles from "./CaptchaField.module.css";
import { CAPTCHA_ANSWER_FIELD, CAPTCHA_REFRESH_EVENT, CAPTCHA_TOKEN_FIELD, refreshCaptcha } from "@/lib/captchaClient";

export { CAPTCHA_ANSWER_FIELD, CAPTCHA_TOKEN_FIELD };

type CaptchaFieldProps = {
  /** Refs to the two named inputs — read `.value` when building a JSON/manual payload. */
  tokenRef?: Ref<HTMLInputElement>;
  answerRef?: Ref<HTMLInputElement>;
  /**
   * Don't style the code box here — let the host form's own input rules apply
   * so it matches its sibling fields exactly (underline, font, colours, focus).
   * Only adds upper-case + letter-spacing for the typed code. The host's CSS
   * must reach the box: either its generic input rules already do, or pass
   * `className` and add `.thatClass input` to the same selector lists.
   */
  inheritFieldStyle?: boolean;
  /** Extra class on the root element — a hook for the host form's CSS (placement, field rules). */
  className?: string;
};

/**
 * Image CAPTCHA: a small distorted code and a box to type it into (server half:
 * lib/captcha.ts, GET /api/captcha). The image is stacked over the code box in a
 * slim, fixed-width block that the host form positions (e.g. level with
 * "Attach file", right-aligned). There is no refresh icon or hint text: clicking
 * the image fetches a new code.
 *
 * Renders two named inputs, so a form that submits `new FormData(formElement)`
 * picks them up automatically with no refs; forms that build their payload by
 * hand read them through the refs instead.
 *
 * The image is single-use on the server. It reloads itself on mount, when the
 * image is clicked, and whenever refreshCaptcha() fires (formErrors.ts does that
 * after every failed submission).
 */
export default function CaptchaField({ tokenRef, answerRef, inheritFieldStyle = false, className = "" }: CaptchaFieldProps) {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  const [answer, setAnswer] = useState("");
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  const load = useCallback(async () => {
    setState("loading");
    setAnswer("");
    try {
      const res = await fetch("/api/captcha", { cache: "no-store" });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as { token?: string; image?: string };
      if (!data.token || !data.image) throw new Error("bad response");
      setToken(data.token);
      setImage(data.image);
      setState("ready");
    } catch {
      setToken("");
      setImage("");
      setState("error");
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener(CAPTCHA_REFRESH_EVENT, load);
    return () => window.removeEventListener(CAPTCHA_REFRESH_EVENT, load);
  }, [load]);

  return (
    <div className={`${styles.wrap} ${className}`}>
      <button
        type="button"
        className={styles.imageBox}
        onClick={refreshCaptcha}
        disabled={state === "loading"}
        aria-label="Security code image. Activate to get a new code."
        title="Click for a new code"
      >
        {state === "ready" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={styles.image} src={image} alt="" draggable={false} />
        ) : (
          <span className={styles.status} role="status">
            {state === "loading" ? "Loading…" : "Couldn't load — click to retry"}
          </span>
        )}
      </button>
      <input type="hidden" name={CAPTCHA_TOKEN_FIELD} value={token} ref={tokenRef} readOnly />
      <input
        className={inheritFieldStyle ? styles.inheritInput : styles.input}
        type="text"
        name={CAPTCHA_ANSWER_FIELD}
        ref={answerRef}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter the code*"
        aria-label="Enter the code shown in the image"
        autoComplete="off"
        autoCapitalize="characters"
        autoCorrect="off"
        spellCheck={false}
        maxLength={8}
        disabled={state !== "ready"}
      />
    </div>
  );
}
