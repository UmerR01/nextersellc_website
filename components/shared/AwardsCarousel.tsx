"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AwardsCarousel.module.css";

export interface AwardBadge {
  src: string;
  alt: string;
}

const DESKTOP_VISIBLE = 6;
const MOBILE_VISIBLE = 4;

/**
 * Shared badge/award carousel — extracted from the home page's
 * Certificates.tsx (Sumatosoft achievements-block clone), which the user
 * confirmed is the correct reference implementation: arrows sit absolutely
 * outside the track on desktop, and at ≤1024px the layout switches to a
 * .nav row below the badges with the SAME 40×24/37px-tail/10px-head arrow
 * geometry — never scaled down. A separate "AIAwards" copy of this component
 * had its own scaled-down arrow variant for the mobile .nav row
 * (`.arrowBoxSmall`) that didn't proportionally shrink the tail/head
 * together, so the tail visibly overshot the arrowhead at some sizes — see
 * track/awards-carousel-shared-component.md. Reusing this single
 * implementation (rather than each page maintaining its own near-copy)
 * is what keeps that from happening again.
 */
export default function AwardsCarousel({ badges }: { badges: AwardBadge[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(DESKTOP_VISIBLE);
  const maxIndex = Math.max(0, badges.length - visible);

  useEffect(() => {
    const updateVisible = () => {
      setVisible(window.innerWidth <= 1024 ? MOBILE_VISIBLE : DESKTOP_VISIBLE);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const isPrevDisabled = index === 0;
  const isNextDisabled = index >= maxIndex;

  return (
    <>
      <div className={styles.achievements}>
        <button
          className={`${styles.btnPrev} ${isPrevDisabled ? styles.disabled : ""}`}
          onClick={prev}
          aria-label="Previous"
          disabled={isPrevDisabled}
        />

        <div className={styles.sliderOuter}>
          <div
            className={styles.track}
            style={{
              "--visible": visible,
              transform: `translateX(calc(-${index} * (100% / ${visible})))`,
            } as React.CSSProperties}
          >
            {badges.map((badge, i) => (
              <div key={`${badge.src}-${i}`} className={styles.slide}>
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={120}
                  height={120}
                  className={styles.badge}
                  style={{ width: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.btnNext} ${isNextDisabled ? styles.disabled : ""}`}
          onClick={next}
          aria-label="Next"
          disabled={isNextDisabled}
        />
      </div>

      {/* Mobile: nav row below — same-size arrows, just repositioned */}
      <div className={styles.nav}>
        <button
          className={`${styles.btnPrev} ${isPrevDisabled ? styles.disabled : ""}`}
          onClick={prev}
          aria-label="Previous"
          disabled={isPrevDisabled}
        />
        <button
          className={`${styles.btnNext} ${isNextDisabled ? styles.disabled : ""}`}
          onClick={next}
          aria-label="Next"
          disabled={isNextDisabled}
        />
      </div>
    </>
  );
}
