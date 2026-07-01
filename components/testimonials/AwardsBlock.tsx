"use client";
import { useState } from "react";
import styles from "./AwardsBlock.module.css";

const AWARDS = [
  { src: "/testimonials/06_RightFirms-1.svg", alt: "RightFirms 2026 — 5-star rated Nexterse profile" },
  { src: "/testimonials/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Artificial Intelligence Company in Boston" },
  { src: "/testimonials/06_top-software-development-companies.svg", alt: "GoodFirms — Top Software Development Company" },
  { src: "/testimonials/06_techreviewer_badge_2026-12.svg", alt: "techreviewer.co 2026 — Top Software Development Companies" },
];

const VISIBLE = 4;

export default function AwardsBlock() {
  const [offset, setOffset] = useState(0);

  const canPrev = offset > 0;
  const canNext = offset + VISIBLE < AWARDS.length;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleBlue}>Awards</span> &amp; Recognitions
        </h2>

        <div className={styles.achievementsWrap}>
          <div className={styles.achievements}>
            <button
              className={`${styles.navBtn} ${styles.navPrev} ${!canPrev ? styles.navDisabled : ""}`}
              onClick={() => setOffset(Math.max(0, offset - 1))}
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </button>

            <div className={styles.slider}>
              <div
                className={styles.track}
                style={{ transform: `translateX(-${offset * (100 / VISIBLE)}%)` }}
              >
                {AWARDS.map((a, i) => (
                  <div key={i} className={styles.slide}>
                    <div className={styles.slideInner}>
                      <img src={a.src} alt={a.alt} className={styles.awardImg} loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className={`${styles.navBtn} ${styles.navNext} ${!canNext ? styles.navDisabled : ""}`}
              onClick={() => setOffset(Math.min(AWARDS.length - VISIBLE, offset + 1))}
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
