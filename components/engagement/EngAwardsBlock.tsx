"use client";
import { useState } from "react";
import styles from "./EngAwardsBlock.module.css";

const AWARDS = [
  { src: "/engagement/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "Goodfirms badge" },
  { src: "/engagement/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge" },
  { src: "/engagement/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS partner badge" },
  { src: "/engagement/12_Machine-Learning-Development-2024.svg", alt: "Machine Learning Development 2024" },
  { src: "/engagement/12_IoT-Services-2025.svg", alt: "IoT Services 2025" },
  { src: "/engagement/12_Custom-Web-Design-Development-2025.svg", alt: "Custom Web Design Development 2025" },
  { src: "/engagement/01_techreviewer_badge_2025-3.svg", alt: "TR top IoT developers 2025" },
  { src: "/engagement/01_techreviewer_badge_2025-2.svg", alt: "TR top software developers 2025" },
  { src: "/engagement/01_techreviewer_badge_2025-1.svg", alt: "TR top web developers 2025" },
];

const VISIBLE = 5;

export default function EngAwardsBlock() {
  const [offset, setOffset] = useState(0);

  const max = AWARDS.length - VISIBLE;
  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(max, o + 1));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.blue}>Awards</span> &amp; Recognitions
        </h2>
        <div className={styles.slider}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${offset * (100 / VISIBLE)}%)` }}
          >
            {AWARDS.map((a, i) => (
              <div key={i} className={styles.slide}>
                <div className={styles.awardWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.src} alt={a.alt} className={styles.awardImg} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.nav}>
          <button className={styles.navBtn} onClick={prev} disabled={offset === 0} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /></svg>
          </button>
          <button className={styles.navBtn} onClick={next} disabled={offset >= max} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
