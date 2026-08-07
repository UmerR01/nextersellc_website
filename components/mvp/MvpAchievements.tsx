"use client";
import { useEffect, useState } from "react";
import styles from "./MvpAchievements.module.css";

const BADGES = [
  { src: "/mvp/06_techreviewer_badge_2026-13.svg", alt: "techreviewer.co 2026 — Top MVP Development Companies" },
  { src: "/mvp/06_top-software-development-companies.svg", alt: "GoodFirms — Top Software Development Company" },
  { src: "/mvp/06_techreviewer_badge_2026-12.svg", alt: "techreviewer.co 2026 — Top Software Development Companies" },
  { src: "/mvp/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "GoodFirms badge" },
  { src: "/mvp/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge" },
  { src: "/mvp/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS partner badge" },
  { src: "/mvp/12_Responsive-Design-Development-2025.svg", alt: "Responsive Design Development 2025" },
  { src: "/mvp/12_Mobile-Software-Development-2025.svg", alt: "Mobile Software Development 2025" },
  { src: "/mvp/12_Machine-Learning-Development-2024.svg", alt: "Machine Learning Development 2024" },
  { src: "/mvp/12_IoT-Services-2025.svg", alt: "IoT Services 2025" },
  { src: "/mvp/12_Data-Mining-Development-2024.svg", alt: "Data Mining Development 2024" },
  { src: "/mvp/12_Data-Migration-Services-2025.svg", alt: "Data Migration Services 2025" },
  { src: "/mvp/12_Branding-Services-2024.svg", alt: "Branding Services 2024" },
];

export default function MvpAchievements() {
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(6);
  const max = Math.max(0, BADGES.length - visible);

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
    <section id="mvp-awards" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Awards</span> &amp; Recognitions
        </h2>
        <p className={styles.desc}>
          Nexterse LLC has been recognized by leading analytics agencies for its transparency, reliability, startup-centric mindset, and consistent ability to deliver value quickly. Our approach combines lean principles with senior-level technical expertise that helps us to provide the best MVP software development services for startups in the field.
        </p>
        <div className={styles.sliderArea}>
          <div className={styles.slider}>
            <div
              className={styles.track}
              style={{
                "--visible": visible,
                transform: `translateX(calc(-${offset} * ((100% - ${visible - 1} * 40px) / ${visible} + 40px)))`,
              } as React.CSSProperties}
            >
              {BADGES.map((b, i) => (
                <div key={i} className={styles.slide}>
                  <div className={styles.awardWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.src} alt={b.alt} className={styles.awardImg} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={prev}
            disabled={offset === 0}
            aria-label="Previous"
          >
            <span className={styles.arrowBox} aria-hidden="true" />
          </button>
          <button
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={next}
            disabled={offset >= max}
            aria-label="Next"
          >
            <span className={styles.arrowBox} aria-hidden="true" />
          </button>
        </div>
        <div className={styles.mobileNav}>
          <button
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={prev}
            disabled={offset === 0}
            aria-label="Previous"
          >
            <span className={`${styles.arrowBox} ${styles.arrowBoxSmall}`} aria-hidden="true" />
          </button>
          <button
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={next}
            disabled={offset >= max}
            aria-label="Next"
          >
            <span className={`${styles.arrowBox} ${styles.arrowBoxSmall}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
