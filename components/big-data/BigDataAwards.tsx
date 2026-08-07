"use client";
import { useEffect, useState } from "react";
import styles from "@/components/custom-software/CSAwardsBlock.module.css";

const AWARDS = [
  { src: "/big-data/06_techreviewer_badge_2026-08.svg", alt: "techreviewer.co 2026 — Nexterse LLC listed among Top Big Data Development Companies" },
  { src: "/big-data/06_techreviewer_badge_2026-11.svg", alt: "techreviewer.co 2026 — Nexterse LLC listed among Top Machine Learning Development Companies" },
  { src: "/big-data/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Nexterse LLC listed among Top AI Software Development Companies" },
  { src: "/big-data/03_Badge-1-1.svg", alt: "Top software development company in Massachusetts badge from goodfirms.co" },
  { src: "/big-data/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "Goodfirms badge icon" },
  { src: "/big-data/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge icon" },
  { src: "/big-data/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS partner badge icon" },
  { src: "/big-data/03_Badge-2-2.svg", alt: "Best software development company in Quincy 2023 badge by expertise.com" },
  { src: "/big-data/01_top_clutch.co_software_developers_startup_massachusetts.svg", alt: "Top clutch.co software developers startup Massachusetts" },
  { src: "/big-data/01_top_clutch.co_software_developers_hospitality__leisure_massachusetts.svg", alt: "Top clutch.co software developers hospitality & leisure Massachusetts" },
  { src: "/big-data/01_top_clutch.co_python__django_developers_boston_2024.svg", alt: "Top clutch.co Python & Django developers Boston 2024" },
  { src: "/big-data/01_top_clutch.co_nodejs_developers_boston_2024.svg", alt: "Top clutch.co Node.js developers Boston 2024" },
  { src: "/big-data/01_techreviewer_badge_2025-2.svg", alt: "TR top software developers 2025" },
  { src: "/big-data/01_techreviewer_badge_2025-1.svg", alt: "TR top web developers 2025" },
  { src: "/big-data/01_techreviewer_badge_2024-2.svg", alt: "TR top software developers 2024" },
  { src: "/big-data/01_techreviewer_badge_2024-1.svg", alt: "TR top web developers 2024" },
];

export default function BigDataAwards() {
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
    <section id="bd-awards" className={styles.section}>
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
