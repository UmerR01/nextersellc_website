"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Certificates.module.css";

/** Certificates — exact Sumatosoft achievements-block:
 *  - .container wraps everything
 *  - .achievements has max-width calc(100% - 160px), position relative
 *  - .swiper-button-prev: absolute, right: calc(100% + 40px), top 50%
 *  - .swiper-button-next: absolute, left:  calc(100% + 40px), top 50%
 *  Arrow style: horizontal tail (::before) + rotated arrowhead (::after), colour #ff415c
 */
const BADGES = [
  { src: "/badges/iso.svg",            alt: "ISO compliance badge" },
  { src: "/badges/clutch-ai.svg",      alt: "Clutch Top AI Development Company" },
  { src: "/badges/goodfirms-ai.svg",   alt: "GoodFirms Top AI Development" },
  { src: "/badges/techreviewer-ai.svg",alt: "Techreviewer Top AI Readiness" },
  { src: "/badges/rightfirms.svg",     alt: "RightFirms 5-star rated" },
  { src: "/badges/goodfirms-ma.svg",   alt: "GoodFirms Top Software Dev MA" },
  { src: "/badges/custom-web.svg",     alt: "Custom Web Design Development 2025" },
  { src: "/badges/iot-services.svg",   alt: "IoT Services 2025" },
  { src: "/badges/tr-2025-soft.svg",   alt: "Techreviewer Top Software 2025" },
  { src: "/badges/tr-2025-iot.svg",    alt: "Techreviewer Top IoT 2025" },
  { src: "/badges/techreviewer-soft.svg", alt: "Techreviewer Top AI Software Dev" },
  { src: "/badges/techreviewer-top.svg",  alt: "Techreviewer Top Software Dev" },
  { src: "/badges/goodfirms-soft.svg", alt: "GoodFirms Top Software Dev" },
  { src: "/badges/clutch-iot.svg",     alt: "Clutch Top IoT Company" },
];

const VISIBLE = 6;

export default function Certificates() {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, BADGES.length - VISIBLE);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const isPrevDisabled = index === 0;
  const isNextDisabled = index >= maxIndex;

  return (
    <section className={styles.section} aria-label="Certifications and awards">
      <div className="container">
        {/* achievements-block__achievements:
            position: relative; max-width: calc(100% - 160px); margin: 64px auto 0
            Arrows are absolutely outside this div on both sides */}
        <div className={styles.achievements}>

          {/* swiper-button-prev: absolute right: calc(100% + 40px) top: 50% */}
          <button
            className={`${styles.btnPrev} ${isPrevDisabled ? styles.disabled : ""}`}
            onClick={prev}
            aria-label="Previous"
            disabled={isPrevDisabled}
          />

          {/* Badge slider track */}
          <div className={styles.sliderOuter}>
            <div
              className={styles.track}
              style={{
                transform: `translateX(calc(-${index} * (100% / ${VISIBLE})))`,
              }}
            >
              {BADGES.map((badge, i) => (
                <div key={`${badge.src}-${i}`} className={styles.slide}>
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={120}
                    height={120}
                    className={styles.badge}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* swiper-button-next: absolute left: calc(100% + 40px) top: 50% */}
          <button
            className={`${styles.btnNext} ${isNextDisabled ? styles.disabled : ""}`}
            onClick={next}
            aria-label="Next"
            disabled={isNextDisabled}
          />

        </div>

        {/* Mobile: nav row below */}
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
      </div>
    </section>
  );
}
