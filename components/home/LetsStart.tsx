"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./LetsStart.module.css";

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

/** Let's start — replicated from Sumato's "lets-start" block: a "what's next"
 *  timeline on the left and an underline-style contact form on the right. */
const STEPS = [
  "Tell us your vision",
  "Expert discovery session",
  "Receive your custom roadmap",
  "Launch your project",
];

export default function LetsStart() {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState("");

  return (
    <section className={styles.section} id="lets-start">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {/* Left: title + timeline */}
          <div className={styles.left}>
            <p className={styles.title}>Let’s start</p>
            <div className={styles.steps}>
              <span className={styles.stepsEyebrow}>What’s next</span>
              {STEPS.map((s, i) => (
                <div key={s} className={styles.step}>
                  {i === STEPS.length - 1 && (
                    <span className={styles.timelineArrow} aria-hidden />
                  )}
                  <span className={styles.stepText}>
                    {i + 1}. {s}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.description}>
              If you have any questions, email us{" "}
              <a href="mailto:hello@nexterse.com">hello@nexterse.com</a>
            </div>
          </div>

          {/* Right: form */}
          <div className={styles.right}>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className={styles.field}>
                <span className={styles.label}>My Name*</span>
                <input type="text" name="name" placeholder="John Smith" required />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Email Address*</span>
                <input type="email" name="email" placeholder="name@company.com" required />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Message*</span>
                <textarea name="message" rows={2} placeholder="Describe your idea" required />
              </label>

              <p className={styles.privacy}>
                When you click Send, Nexterse will process your personal data in accordance
                with our <a href="#">Privacy notice</a> to respond to your enquiry.
              </p>

              <div className={styles.bottom}>
                <label className={styles.attach}>
                  <ClipIcon />
                  {fileName || "Attach file"}
                  <input
                    type="file"
                    hidden
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                  />
                </label>
                <button type="submit" className={styles.send}>
                  {sent ? "Thank you!" : "Send"}
                </button>
              </div>

              <div className={styles.manager}>
                <div className={styles.managerInfo}>
                  <Image
                    src="/cases/woman.jpg"
                    alt="Account manager"
                    width={56}
                    height={56}
                    className={styles.avatar}
                  />
                  <div>
                    <div className={styles.managerName}>Alex Morgan</div>
                    <div className={styles.managerRole}>Account Manager</div>
                  </div>
                </div>
                <a href="#contact" className={styles.book}>
                  <CalendarIcon /> Book a consultation
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
