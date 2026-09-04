"use client";

import { useState } from "react";
import styles from "./LetsStart.module.css";
import { isValidName, isValidEmail, VALIDATION_MESSAGES } from "@/lib/formValidation";

function ClipIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.25 14.916V8.5a5.25 5.25 0 1 0-10.5 0v8.75a3.5 3.5 0 1 0 7 0V8.5a1.75 1.75 0 1 0-3.5 0v7.583"
      />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg width="86" height="86" viewBox="0 0 86 86" fill="none" aria-hidden>
      <path
        d="M73 38.2v3.1a30.1 30.1 0 1 1-17.8-27.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74.5 15.2 39.8 50 29.4 39.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4.5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M3 9h18M8 2.5v4M16 2.5v4"
      />
    </svg>
  );
}

const STEPS = [
  "Share your requirements",
  "Analyze them with our experts",
  "Get a detailed pricing",
  "Kick off the project",
];

const LIBRARY_STEPS = [
  "Share your idea",
  "Discuss it with our expert",
  "Get an estimation of a project",
  "Start the project",
];

interface LetsStartProps {
  variant?: "testimonials" | "whitepapers" | "library" | "process";
}

export default function LetsStart({ variant }: LetsStartProps = {}) {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  return (
    <section
      className={`lets-start ${styles.section} ${variant === "library" ? styles.library : ""} ${variant === "process" ? styles.process : ""} ${variant === "whitepapers" ? styles.whitepapers : ""}`}
      id="lets-start"
    >
      <div className={`lets-start-wrapper ${styles.wrapper}`}>
        <div className={`lets-start-content ${styles.content}`}>
          {/* Left: title + content */}
          <div className={`lets-start-left ${styles.left}`}>
            {variant === "library" ? (
              <>
                <p className={`lets-start-title ${styles.title}`}>Let&rsquo;s start your project</p>
                <div className={`lets-start-steps ${styles.steps}`}>
                  <span className={`lets-start-eyebrow ${styles.stepsEyebrow}`}>You are here</span>
                  {LIBRARY_STEPS.map((s, i) => (
                    <div key={s} className={`lets-start-step ${styles.step}`}>
                      {i === LIBRARY_STEPS.length - 1 && (
                        <span className={`lets-start-timeline-arrow ${styles.timelineArrow}`} aria-hidden />
                      )}
                      <span className={`lets-start-step-text ${styles.stepText}`}>
                        {i + 1} {s}
                      </span>
                    </div>
                  ))}
                </div>
                <div className={`lets-start-description ${styles.description}`}>
                  If you have any questions, email us{" "}
                  <a href="mailto:info@nexterse.com">info@nexterse.com</a>
                </div>
              </>
            ) : variant === "testimonials" ? (
              <>
                <p className={`lets-start-title ${styles.title}`}>Become our next happy Client</p>
                <div className={`${styles.description} ${styles.descriptionLarge}`}>
                  Contact us and we&rsquo;ll provide additional case studies for
                  your business domain!
                </div>
              </>
            ) : variant === "whitepapers" ? (
              <>
                <p className={`lets-start-title ${styles.title}`}>Let's start</p>
                <div className={`lets-start-description ${styles.description}`}>
                  If you have any questions, email us{" "}
                  <a href="mailto:info@nexterse.com">info@nexterse.com</a>
                </div>
              </>
            ) : (
              <>
                <p className={`lets-start-title ${styles.title}`}>Let's start</p>
                <div className={`lets-start-steps ${styles.steps}`}>
                  <span className={`lets-start-eyebrow ${styles.stepsEyebrow}`}>What's next</span>
                  {STEPS.map((s, i) => (
                    <div key={s} className={`lets-start-step ${styles.step}`}>
                      {i === STEPS.length - 1 && (
                        <span className={`lets-start-timeline-arrow ${styles.timelineArrow}`} aria-hidden />
                      )}
                      <span className={`lets-start-step-text ${styles.stepText}`}>
                        {i + 1}. {s}
                      </span>
                    </div>
                  ))}
                </div>
                <div className={`lets-start-description ${styles.description}`}>
                  If you have any questions, email us{" "}
                  <a href="mailto:info@nexterse.com">info@nexterse.com</a>
                </div>
              </>
            )}
          </div>

          {/* Right: form */}
          <div className={`lets-start-right ${styles.right}`}>
            {sent ? (
              <div className={styles.success} role="status" aria-live="polite">
                <div className={styles.successIcon}>
                  <SuccessIcon />
                </div>
                <h3 className={styles.successTitle}>Thank you!</h3>
                <p className={styles.successText}>Your form was successfully submitted!</p>
              </div>
            ) : (
            <form
              className={`lets-start-form ${styles.form}`}
              noValidate
              onSubmit={async (e) => {
                e.preventDefault();
                const nextErrors: typeof errors = {};
                if (!name.trim()) nextErrors.name = VALIDATION_MESSAGES.required;
                else if (!isValidName(name)) nextErrors.name = VALIDATION_MESSAGES.name;
                if (!email.trim()) nextErrors.email = VALIDATION_MESSAGES.required;
                else if (!isValidEmail(email)) nextErrors.email = VALIDATION_MESSAGES.email;
                if (!message.trim()) nextErrors.message = VALIDATION_MESSAGES.required;
                setErrors(nextErrors);
                if (Object.keys(nextErrors).length > 0) return;

                setStatus("loading");
                try {
                  const res = await fetch("/api/lets-start", {
                    method: "POST",
                    body: new FormData(e.currentTarget),
                  });
                  if (!res.ok) throw new Error("Request failed");
                  setSent(true);
                  setStatus("idle");
                } catch {
                  setStatus("error");
                }
              }}
            >
              <label className={`lets-start-field ${styles.field}`}>
                <span className={`lets-start-label ${styles.label}`}>My Name*</span>
                <input
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
                  disabled={status === "loading"}
                />
                {errors.name && <span className={styles.fieldErrorText}>{errors.name}</span>}
              </label>
              <label className={`lets-start-field ${styles.field}`}>
                <span className={`lets-start-label ${styles.label}`}>Email Address*</span>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                  disabled={status === "loading"}
                />
                {errors.email && <span className={styles.fieldErrorText}>{errors.email}</span>}
              </label>
              <label className={`lets-start-field ${styles.field}`}>
                <span className={`lets-start-label ${styles.label}`}>Message*</span>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Describe your idea"
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: undefined })); }}
                  disabled={status === "loading"}
                />
                {errors.message && <span className={styles.fieldErrorText}>{errors.message}</span>}
              </label>

              <p className={`lets-start-privacy ${styles.privacy}`}>
                When you click Send, Nexterse LLC will process your personal data in accordance
                with our <a href="/privacy-policy">Privacy & Policy</a> to respond to your enquiry.
              </p>

              <div className={`lets-start-bottom ${styles.bottom}`}>
                <label className={`lets-start-attach ${styles.attach} ${status === "loading" ? styles.attachDisabled : ""}`}>
                  <ClipIcon />
                  {fileName || "Attach file"}
                  <input
                    type="file"
                    name="file"
                    hidden
                    disabled={status === "loading"}
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                  />
                </label>
                <button
                  type="submit"
                  className={`lets-start-send ${styles.send} ${status === "loading" ? styles.sendLoading : ""}`}
                  disabled={status === "loading"}
                  aria-busy={status === "loading"}
                >
                  {status === "loading" ? <span className={styles.spinner} aria-hidden="true" /> : "Send"}
                </button>
              </div>
              {status === "error" && (
                <p className={styles.errorText}>
                  Something went wrong. Please try again.
                </p>
              )}

              <div className={`lets-start-manager ${styles.manager}`}>
                <a href="https://calendly.com/nexterse-meeting-schedule22/30min" target="_blank" rel="noreferrer noopener" className={`lets-start-book ${styles.book}`}>
                  <CalendarIcon /> Book an intro call
                </a>
              </div>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}



