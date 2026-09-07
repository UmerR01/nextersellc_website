"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TeamAwards.module.css";

// Each badge's width/height is its own real SVG size (read from its
// viewBox) — was a single hardcoded 140x120 forced onto every badge
// regardless of its actual aspect ratio (they range from ~1:1 to tall
// portrait shapes), which is what triggered Next.js's "has either width
// or height modified, but not the other" console warning: the intrinsic
// ratio declared to <Image> never matched what .badge's width:auto;
// height:auto; + max-width/max-height actually rendered.
const AWARDS = [
  { src: "/badges_fix/badge-aws.svg", width: 135, height: 130 },
  { src: "/badges_fix/team__05_iso.svg", width: 66, height: 64 },
  { src: "/badges_fix/engagement__05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", width: 136, height: 147 },
  { src: "/badges_fix/team__05_top_clutch.co_generative_ai_company_boston_2026-2.svg", width: 136, height: 147 },
  { src: "/badges_fix/team__05_top_clutch.co_machine_learning_company_boston_2026-2.svg", width: 136, height: 147 },
  { src: "/badges_fix/badge-goodfirms.svg", width: 144, height: 130 },
  { src: "/badges_fix/badge-responsive-design.svg", width: 116, height: 101 },
  { src: "/badges_fix/badge-bi-services.svg", width: 92, height: 101 },
  { src: "/badges_fix/badge-mobile-soft.svg", width: 116, height: 101 },
  { src: "/badges_fix/badge-custom-web.svg", width: 116, height: 101 },
  { src: "/badges_fix/team__05_top_clutch.co_voice_and_speech_recognition_company_boston_2026-2.svg", width: 136, height: 147 },
  { src: "/badges_fix/team__05_top_clutch.co_robotics_company_boston_2026-2.svg", width: 136, height: 147 },
  { src: "/badges_fix/05_top_clutch.co_software_developers_medical_boston-2.svg", width: 136, height: 147 },
  { src: "/badges_fix/team__06_top-ai-development-companies.svg", width: 140, height: 146 },
  { src: "/badges_fix/06_top-software-development-companies.svg", width: 140, height: 146 },
  { src: "/badges_fix/team__06_top-website-development-companies.svg", width: 140, height: 146 },
  { src: "/badges_fix/06_RightFirms-1.svg", width: 141, height: 147 },
  { src: "/badges_fix/team__06_techreviewer_badge_2026-01.svg", width: 108, height: 147 },
  { src: "/badges_fix/team__06_techreviewer_badge_2026-02.svg", width: 108, height: 147 },
  { src: "/badges_fix/team__06_techreviewer_badge_2026-03.svg", width: 108, height: 147 },
  { src: "/badges_fix/team__06_techreviewer_badge_2026-05.svg", width: 108, height: 147 },
  { src: "/badges_fix/team__06_techreviewer_badge_2026-06.svg", width: 108, height: 147 },
  { src: "/badges_fix/team__06_techreviewer_badge_2026-07.svg", width: 108, height: 147 },
  { src: "/badges_fix/team__06_techreviewer_badge_2026-08.svg", width: 108, height: 147 },
  { src: "/badges_fix/team__06_techreviewer_badge_2026-09.svg", width: 108, height: 147 },
  { src: "/badges_fix/legacy-modernization__06_techreviewer_badge_2026-10.svg", width: 108, height: 147 },
  { src: "/badges_fix/team__06_techreviewer_badge_2026-11.svg", width: 108, height: 147 },
];

export default function TeamAwards() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(6);
  const maxIndex = Math.max(0, AWARDS.length - visible);

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
          <span className={styles.accent}>Awards</span>{" "}&amp; Recognitions
        </h2>

        <div className={styles.swiperWrap}>
          <button
            className={`${styles.navBtn} ${styles.navPrev} ${previousDisabled ? styles.navDisabled : ""}`}
            onClick={previous}
            aria-label="Previous award"
            disabled={previousDisabled}
          >
            <span className={styles.arrowBox} aria-hidden="true" />
          </button>

          <div className={styles.swiper}>
            <div
              className={styles.track}
              style={{
                "--visible": visible,
                transform: `translateX(calc(-${index} * (100% / ${visible})))`,
              } as React.CSSProperties}
            >
            {AWARDS.map((award, idx) => (
              <div key={idx} className={styles.slide}>
                <Image
                  src={award.src}
                  alt={`Award ${idx + 1}`}
                  width={award.width}
                  height={award.height}
                  className={styles.badge}
                />
              </div>
            ))}
            </div>
          </div>

          <button
            className={`${styles.navBtn} ${styles.navNext} ${nextDisabled ? styles.navDisabled : ""}`}
            onClick={next}
            aria-label="Next award"
            disabled={nextDisabled}
          >
            <span className={styles.arrowBox} aria-hidden="true" />
          </button>
        </div>

        <div className={styles.mobileNav}>
          <button
            className={`${styles.navBtn} ${styles.navPrev} ${previousDisabled ? styles.navDisabled : ""}`}
            onClick={previous}
            aria-label="Previous award"
            disabled={previousDisabled}
          >
            <span className={`${styles.arrowBox} ${styles.arrowBoxSmall}`} aria-hidden="true" />
          </button>
          <button
            className={`${styles.navBtn} ${styles.navNext} ${nextDisabled ? styles.navDisabled : ""}`}
            onClick={next}
            aria-label="Next award"
            disabled={nextDisabled}
          >
            <span className={`${styles.arrowBox} ${styles.arrowBoxSmall}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
