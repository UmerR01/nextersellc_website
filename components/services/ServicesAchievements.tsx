"use client";
import { useEffect, useState } from "react";
import styles from "./ServicesAchievements.module.css";

export type Badge = { src: string; alt: string };

const DEFAULT_BADGES: Badge[] = [
  { src: "/badges_fix/services-page__05_top_clutch.co_python__django_developers_boston_2026-2.svg", alt: "Clutch 2026 — Top Python and Django Developers in Boston" },
  { src: "/badges_fix/edtech-development__06_top-software-development-companies.svg", alt: "GoodFirms — Top Software Development Company" },
  { src: "/badges_fix/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Artificial Intelligence Company in Boston" },
  { src: "/badges_fix/06_techreviewer_badge_2026-12.svg", alt: "techreviewer.co 2026 — Top Software Development Companies" },
  { src: "/badges_fix/06_top-ai-development-companies.svg", alt: "GoodFirms — Top AI Development Company" },
  { src: "/badges_fix/05_top_clutch.co_.net_developers_boston_2026-2.svg", alt: "Clutch 2026 — Top .NET Developers in Boston" },
  { src: "/badges_fix/06_techreviewer_badge_2026-16.svg", alt: "techreviewer.co 2026 — Top AI Integration Companies" },
  { src: "/badges_fix/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "GoodFirms badge" },
  { src: "/badges_fix/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge" },
  { src: "/badges_fix/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS partner badge" },
  { src: "/badges_fix/05_iso.svg", alt: "ISO compliance badge" },
  { src: "/badges_fix/12_Responsive-Design-Development-2025.svg", alt: "Responsive Design Development 2025" },
  { src: "/badges_fix/12_Mobile-Software-Development-2025.svg", alt: "Mobile Software Development 2025" },
];

export default function ServicesAchievements({ badges, description }: { badges?: Badge[]; description?: string } = {}) {
  const BADGES = badges ?? DEFAULT_BADGES;
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(6);
  const needsNav = BADGES.length > visible;
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
    <section id="svc-awards" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Awards</span> &amp; Recognitions
        </h2>
        {description && <p className={styles.description}>{description}</p>}
        <div className={`${styles.sliderArea} ${!needsNav ? styles.sliderAreaFull : ""}`}>
          <div className={styles.slider}>
            <div
              className={`${styles.track} ${!needsNav ? styles.trackCentered : ""}`}
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
