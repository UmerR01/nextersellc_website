"use client";

import { useState } from "react";
import styles from "./WhitepaperSubscribe.module.css";
import { isValidName, isValidEmail, VALIDATION_MESSAGES } from "@/lib/formValidation";

export default function WhitepaperSubscribe() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", agree: false });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; agree?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!form.name.trim()) nextErrors.name = VALIDATION_MESSAGES.required;
    else if (!isValidName(form.name)) nextErrors.name = VALIDATION_MESSAGES.name;
    if (!form.email.trim()) nextErrors.email = VALIDATION_MESSAGES.required;
    else if (!isValidEmail(form.email)) nextErrors.email = VALIDATION_MESSAGES.email;
    if (!form.agree) nextErrors.agree = VALIDATION_MESSAGES.checkbox;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/whitepaper-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {!submitted ? (
          <div className={styles.formState}>
            <div className={styles.left}>
              <div className={styles.heading}>
                <span className={styles.accent}>Subscribe</span> for updates
              </div>
              <div className={styles.subtext}>
                Get fresh whitepapers to your inbox every two weeks.
              </div>
            </div>

            <div className={styles.right}>
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <label className={styles.field}>
                  <span className={styles.label}>Full name*</span>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => { setForm((f) => ({ ...f, name: e.target.value })); setErrors((p) => ({ ...p, name: undefined })); }}
                  />
                  {errors.name && <span className={styles.fieldErrorText}>{errors.name}</span>}
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>Email*</span>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setErrors((p) => ({ ...p, email: undefined })); }}
                  />
                  {errors.email && <span className={styles.fieldErrorText}>{errors.email}</span>}
                </label>

                <div className={styles.bottomRow}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={(e) => { setForm((f) => ({ ...f, agree: e.target.checked })); setErrors((p) => ({ ...p, agree: undefined })); }}
                    />
                    <span>
                      Agree with <a href="/privacy-policy">Privacy Policy</a>
                    </span>
                  </label>
                  <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
                    {status === "loading" ? "Subscribing…" : "Subscribe"}
                  </button>
                </div>
                {errors.agree && <p className={styles.fieldErrorText}>{errors.agree}</p>}
                {status === "error" && (
                  <p style={{ color: "#ff415c", fontSize: 14, marginTop: 8 }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        ) : (
          <div className={styles.thankYou}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M69.9989 36.4774V39.3031C69.9951 45.9264 67.8504 52.3711 63.8847 57.6759C59.919 62.9807 54.3447 66.8615 47.9932 68.7394C41.6417 70.6173 34.8533 70.3918 28.6405 68.0965C22.4276 65.8012 17.1232 61.559 13.5183 56.0027C9.91334 50.4464 8.2011 43.8736 8.63689 37.2647C9.07268 30.6557 11.6332 24.3647 15.9365 19.3299C20.2397 14.295 26.0553 10.7861 32.5157 9.32646C38.9762 7.86681 45.7354 8.53462 51.7853 11.2303" stroke="#112244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M71.389 12.5088L38.6679 45.2626L28.8516 35.4463" stroke="#112244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className={styles.thankYouTitle}>Thank You!</div>
          </div>
        )}
      </div>
    </section>
  );
}
