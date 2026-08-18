"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AchievementsSlider.module.css";

const BADGES = [
  { src: "/badges_fix/badge-goodfirms.svg", alt: "GoodFirms Top Software Development Company" },
  { src: "/badges_fix/badge-tda.svg", alt: "TDA badge" },
  { src: "/badges_fix/badge-aws.svg", alt: "AWS Standard Consulting Partner" },
  { src: "/badges_fix/badge-responsive-design.svg", alt: "Aciety Responsive Design Development Top 10% 2025" },
  { src: "/badges_fix/badge-ml-dev.svg", alt: "Aciety Machine Learning Development Top 10% 2024" },
  { src: "/badges_fix/badge-bi-services.svg", alt: "Aciety Business Intelligence Services 2024" },
  { src: "/badges_fix/badge-custom-web.svg", alt: "Aciety Custom Web Design Development 2025" },
  { src: "/badges_fix/badge-data-migration.svg", alt: "Aciety Data Migration Services 2025" },
  { src: "/badges_fix/badge-data-mining.svg", alt: "Aciety Data Mining Development 2024" },
  { src: "/badges_fix/badge-mobile-soft.svg", alt: "Aciety Mobile Software Development 2025" },
  { src: "/badges_fix/badge-google-analytics.svg", alt: "Aciety Google Analytics Development 2025" },
];

export default function AchievementsSlider() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(6);
  const maxIndex = Math.max(0, BADGES.length - visible);

  useEffect(() => {
    const updateVisible = () => setVisible(window.innerWidth <= 1024 ? 4 : 6);
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const previous = () => setIndex((current) => Math.max(0, current - 1));
  const next = () => setIndex((current) => Math.min(maxIndex, current + 1));
  const previousDisabled = index === 0;
  const nextDisabled = index >= maxIndex;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleAccent}>Awards</span> &amp; Recognitions
        </h2>

        <div className={styles.achievementsWrap}>
          <div className={styles.sliderOuter}>
            <div
              className={styles.track}
              style={{
                "--visible": visible,
                transform: `translateX(calc(-${index} * (100% / ${visible})))`,
              } as React.CSSProperties}
            >
              {BADGES.map((badge, i) => (
                <div key={i} className={styles.slide}>
                  <div className={styles.slideWrapper}>
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={120}
                      height={110}
                      className={styles.badgeImage}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.navPrev} ${previousDisabled ? styles.navDisabled : ""}`}
            aria-label="Previous badges"
            type="button"
            onClick={previous}
            disabled={previousDisabled}
          />
          <button
            className={`${styles.navNext} ${nextDisabled ? styles.navDisabled : ""}`}
            aria-label="Next badges"
            type="button"
            onClick={next}
            disabled={nextDisabled}
          />
        </div>
      </div>
    </section>
  );
}
