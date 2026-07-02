"use client";

import { useState } from "react";
import styles from "./SdlcCrosslinks.module.css";

const links = [
  { label: "Our software development services", href: "/services" },
  { label: "ADLC for AI-powered systems", href: "/adlc" },
  { label: "Lifecycle in action – case studies", href: "/cases" },
];

const ArrowIcon = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M7.94319e-08 8.59L3.59 5L-3.53625e-07 1.41L1 0.5L5.5 5L1 9.5L7.94319e-08 8.59Z" fill="currentColor" />
  </svg>
);

const ChevronUp = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M4.41 10.5L8 6.91L11.59 10.5L12.5 9.5L8 5L3.5 9.5L4.41 10.5Z" fill="currentColor" />
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M11.59 6.5L8 10.09L4.41 6.5L3.5 7.5L8 12L12.5 7.5L11.59 6.5Z" fill="currentColor" />
  </svg>
);

export default function SdlcCrosslinks() {
  const [hidden, setHidden] = useState(false);

  return (
    <section className={`${styles.section} ${hidden ? styles.hidden : ""}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.colTitle}>More about Nexterse</div>
            <div className={styles.list}>
              {links.map((link) => (
                <div key={link.href} className={styles.item}>
                  <a href={link.href} className={styles.link}>
                    {link.label.includes("–") ? (
                      <>
                        {link.label.split("–")[0].trim()} &ndash;{" "}
                        <span className={styles.linkLast}>
                          {link.label.split("–")[1].trim()}
                          <span className={styles.linkAfter}>
                            <ArrowIcon />
                          </span>
                        </span>
                      </>
                    ) : link.label.split(" ").length > 3 ? (
                      <>
                        {link.label.split(" ").slice(0, -1).join(" ")}{" "}
                        <span className={styles.linkLast}>
                          {link.label.split(" ").at(-1)}
                          <span className={styles.linkAfter}>
                            <ArrowIcon />
                          </span>
                        </span>
                      </>
                    ) : (
                      <>
                        {link.label}
                        <span className={styles.linkAfter}>
                          <ArrowIcon />
                        </span>
                      </>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.toggleWrap}>
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setHidden(!hidden)}
          >
            <span>{hidden ? "Show links" : "Hide links"}</span>
            {hidden ? <ChevronDown /> : <ChevronUp />}
          </button>
        </div>
      </div>
    </section>
  );
}
