"use client";
import { useEffect, useState } from "react";
import styles from "./PricingAwards.module.css";

const AWARDS = [
  { src: "/badges_fix/06_techreviewer_badge_2026-12.svg", alt: "techreviewer.co 2026 — Nexterse LLC listed among Top Software Development Companies" },
  { src: "/badges_fix/edtech-development__06_top-software-development-companies.svg", alt: "GoodFirms badge — Nexterse LLC listed as a Top Software Development Company" },
  { src: "/badges_fix/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "Goodfirms badge icon" },
  { src: "/badges_fix/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge icon" },
  { src: "/badges_fix/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS partner badge icon" },
  { src: "/badges_fix/12_Custom-Web-Design-Development-2025.svg", alt: "Custom Web Design Development 2025" },
  { src: "/badges_fix/12_Mobile-Software-Development-2025.svg", alt: "Mobile Software Development 2025" },
  { src: "/badges_fix/12_Responsive-Design-Development-2025.svg", alt: "Responsive Design Development 2025" },
  { src: "/badges_fix/12_Machine-Learning-Development-2024.svg", alt: "Machine Learning Development 2024" },
  { src: "/badges_fix/12_Business-Intelligence-Services-2024.svg", alt: "Business Intelligence Services 2024" },
];

export default function PricingAwards() {
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
    <section id="pricing-awards" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Awards</span>{" "}&amp; Recognitions
        </h2>
        <div className={styles.sliderArea}>
          <div className={styles.slider}>
            <div
              className={styles.track}
              style={{
                "--visible": visible,
                transform: `translateX(calc(-${offset} * ((100% - ${visible - 1} * 56px) / ${visible} + 56px)))`,
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

