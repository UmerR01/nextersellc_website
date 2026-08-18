"use client";
import { useEffect, useState } from "react";
import styles from "./CSAwardsBlock.module.css";

const AWARDS = [
  { src: "/badges_fix/05_top_clutch.co_python__django_developers_boston_2026-2.svg", alt: "Clutch 2026 Top Python Django Developers Boston" },
  { src: "/badges_fix/06_top-software-development-companies.svg", alt: "GoodFirms Top Software Development Company" },
  { src: "/badges_fix/custom-software__06_techreviewer_badge_2026-12.svg", alt: "TechReviewer 2026 Top Software Development" },
  { src: "/badges_fix/06_techreviewer_badge_2026-13.svg", alt: "TechReviewer 2026 Top MVP Development" },
  { src: "/badges_fix/badge-goodfirms.svg", alt: "Goodfirms badge" },
  { src: "/badges_fix/badge-tda.svg", alt: "TDA badge" },
  { src: "/badges_fix/badge-aws.svg", alt: "AWS partner badge" },
  { src: "/badges_fix/badge-custom-web.svg", alt: "Custom Web Design Development 2025" },
  { src: "/badges_fix/badge-responsive-design.svg", alt: "Responsive Design Development 2025" },
  { src: "/badges_fix/custom-software__12_Data-analysis-development-2024.svg", alt: "Data Analysis Development 2024" },
  { src: "/badges_fix/badge-data-migration.svg", alt: "Data Migration Services 2025" },
];

export default function CSAwardsBlock() {
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
          <span className={styles.accent}>Awards</span> &amp; Recognitions
        </h2>
        <div className={styles.sliderArea}>
          <div className={styles.slider}>
            <div
              className={styles.track}
              style={{
                "--visible": visible,
                transform: `translateX(calc(-${offset} * ((100% - ${visible - 1} * 40px) / ${visible} + 40px)))`,
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
