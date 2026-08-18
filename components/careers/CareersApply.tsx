"use client";

import { useRef, useState } from "react";
import styles from "./CareersApply.module.css";

type Status = "idle" | "loading" | "success" | "error";

export default function CareersApply() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  const validate = () => {
    const errs: Record<string, boolean> = {};
    if (!name.trim()) errs.name = true;
    if (!email.trim()) errs.email = true;
    if (!message.trim()) errs.message = true;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      if (file) formData.append("resume", file);
      const res = await fetch("/api/careers", { method: "POST", body: formData });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className={styles.section} id="apply">
        <div className={styles.wrapper}>
          <div className={styles.successState}>
            <svg className={styles.successIcon} width="81" height="80" viewBox="0 0 81 80" fill="none">
              <path d="M70.5 36.48V39.3C70.5 52.42 62.73 64.1 50.8 68.74C38.87 73.38 25.39 70.39 16.54 61.54C7.69 52.69 4.7 39.21 9.34 27.28C13.98 15.35 25.66 7.58 38.78 7.58" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <path d="M71.89 12.51L39.17 45.26L29.35 35.45" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className={styles.successTitle}>Thank you!</div>
            <div className={styles.successSubtitle}>
              Your application has been submitted successfully. We will get in touch with you if something comes up!
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="apply">
      <div className={styles.wrapper}>
        <div className={styles.content}>

          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.titleWrap}>
              <p className={styles.title}>Apply for a job</p>
            </div>
            <div className={styles.description}>
              <p>
                Send us your CV by filling in the form on the right or emailing us at{" "}
                <a href="mailto:hr@nexterse.com" rel="dofollow">hr@nexterse.com</a>.
                We will get in touch with you if something comes up!
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>

              {/* Name */}
              <label className={`${styles.formLabel} ${errors.name ? styles.fieldError : ""}`}>
                <span className={styles.labelText}>Name*</span>
                <span className={styles.inputWrap}>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: false })); }}
                    autoComplete="name"
                  />
                </span>
              </label>

              {/* Email */}
              <label className={`${styles.formLabel} ${errors.email ? styles.fieldError : ""}`}>
                <span className={styles.labelText}>Email*</span>
                <span className={styles.inputWrap}>
                  <input
                    type="email"
                    className={styles.formInput}
                    placeholder="resume@nexterse.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: false })); }}
                    autoComplete="email"
                  />
                </span>
              </label>

              {/* Message */}
              <label className={`${styles.formLabel} ${styles.textareaLabel} ${errors.message ? styles.fieldError : ""}`}>
                <span className={styles.labelText}>Message*</span>
                <span className={styles.inputWrap}>
                  <textarea
                    className={`${styles.formInput} ${styles.formTextarea}`}
                    placeholder="Describe your experience"
                    rows={3}
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: false })); }}
                  />
                </span>
              </label>

              {/* Privacy + file + submit */}
              <div className={styles.privacyMessage}>
                <p className={styles.privacyText}>
                  Please be informed that when you click the Send button Nexterse LLC will process your personal data in accordance with our{" "}
                  <a href="/privacy-policy" rel="dofollow" className={styles.privacyLink}>Privacy & Policy</a>{" "}
                  for the purpose of providing you with appropriate information.
                </p>
                <div className={styles.bottomSection}>
                  <div className={styles.fileUpload}>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className={styles.fileInput}
                      onChange={handleFile}
                      accept=".pdf,.doc,.docx"
                    />
                    <button
                      type="button"
                      className={styles.fileBtn}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <span className={styles.fileBtnIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M17.25 14.92V8.5a5.25 5.25 0 1 0-10.5 0v8.75a3.5 3.5 0 1 0 7 0V8.5a1.75 1.75 0 1 0-3.5 0v7.58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {file ? (
                        <span className={styles.fileName}>{file.name}</span>
                      ) : (
                        <span>Attach file</span>
                      )}
                    </button>
                  </div>
                  <div className={styles.submitWrapper}>
                    <p>
                      <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? <span className={styles.spinner} /> : "Send"}
                      </button>
                    </p>
                    {status === "error" && (
                      <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
                    )}
                  </div>
                </div>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
