"use client";
import { useEffect, useState } from "react";
import styles from "./EngAwardsBlock.module.css";

const AWARDS = [
  { src: "/engagement/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Top Clutch AI Company Boston 2026" },
  { src: "/engagement/06_RightFirms-1.svg", alt: "RightFirms badge" },
  { src: "/engagement/06_techreviewer_badge_2026-12.svg", alt: "TechReviewer badge 2026" },
  { src: "/engagement/05_top_clutch.co_iot_company_providence_2026-2.svg", alt: "Top Clutch IoT Company Providence 2026" },
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

export default function EngAwardsBlock() {
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(6);
  const max = Math.max(0, AWARDS.length - visible);

  useEffect(() => {
    const updateVisible = () => setVisible(window.innerWidth <= 1024 ? 4 : 6);
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    setOffset((current) => Math.min(current, max));
  }, [max]);

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(max, o + 1));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.blue}>Awards</span> &amp; Recognitions
        </h2>
        <div className={styles.sliderArea}>
          <div className={styles.slider}>
            <div
              className={styles.track}
              style={{
                "--visible": visible,
                transform: `translateX(calc(-${offset} * (100% / ${visible})))`,
              } as React.CSSProperties}
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
          <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prev} disabled={offset === 0} aria-label="Previous">
            <span className={styles.arrowBox} aria-hidden="true" />
          </button>
          <button className={`${styles.navBtn} ${styles.navNext}`} onClick={next} disabled={offset >= max} aria-label="Next">
            <span className={styles.arrowBox} aria-hidden="true" />
          </button>
        </div>
        <div className={styles.mobileNav}>
          <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prev} disabled={offset === 0} aria-label="Previous">
            <span className={`${styles.arrowBox} ${styles.arrowBoxSmall}`} aria-hidden="true" />
          </button>
          <button className={`${styles.navBtn} ${styles.navNext}`} onClick={next} disabled={offset >= max} aria-label="Next">
            <span className={`${styles.arrowBox} ${styles.arrowBoxSmall}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
