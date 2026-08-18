"use client";
import { useEffect, useState } from "react";
import styles from "./ESDAwardsBlock.module.css";

const AWARDS = [
  { src: "/badges_fix/05_top_clutch.co_.net_developers_boston_2026-2.svg", alt: "Clutch 2026 award - Top .NET Developers in Boston" },
  { src: "/badges_fix/06_techreviewer_badge_2026-09.svg", alt: "techreviewer.co 2026 - Top Enterprise Software Development Companies" },
  { src: "/badges_fix/06_techreviewer_badge_2026-10.svg", alt: "techreviewer.co 2026 - Top Legacy Software Modernization Companies" },
  { src: "/badges_fix/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "Goodfirms badge" },
  { src: "/badges_fix/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge" },
];

export default function ESDAwardsBlock() {
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(6);
  const needsNav = AWARDS.length > visible;
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

  const prev = () => setOffset((current) => Math.max(0, current - 1));
  const next = () => setOffset((current) => Math.min(max, current + 1));

  return (
    <section id="awards-recognitions" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Awards</span>&amp; Recognitions
        </h2>
        <div className={`${styles.sliderArea} ${!needsNav ? styles.sliderAreaFull : ""}`}>
          <div className={styles.slider}>
            <div
              className={`${styles.track} ${!needsNav ? styles.trackCentered : ""}`}
              style={{
                "--visible": visible,
                transform: `translateX(calc(-${offset} * ((100% - ${visible - 1} * 40px) / ${visible} + 40px)))`,
              } as React.CSSProperties}
            >
              {AWARDS.map((award) => (
                <div key={award.src} className={styles.slide}>
                  <div className={styles.awardWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={award.src} alt={award.alt} className={styles.awardImg} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {needsNav && (
            <>
              <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prev} disabled={offset === 0} aria-label="Previous">
                <span className={styles.arrowBox} aria-hidden="true" />
              </button>
              <button className={`${styles.navBtn} ${styles.navNext}`} onClick={next} disabled={offset >= max} aria-label="Next">
                <span className={styles.arrowBox} aria-hidden="true" />
              </button>
            </>
          )}
        </div>
        {needsNav && (
          <div className={styles.mobileNav}>
            <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prev} disabled={offset === 0} aria-label="Previous">
              <span className={`${styles.arrowBox} ${styles.arrowBoxSmall}`} aria-hidden="true" />
            </button>
            <button className={`${styles.navBtn} ${styles.navNext}`} onClick={next} disabled={offset >= max} aria-label="Next">
              <span className={`${styles.arrowBox} ${styles.arrowBoxSmall}`} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
