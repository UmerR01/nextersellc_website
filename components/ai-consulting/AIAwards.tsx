"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./AIAwards.module.css";

const BADGES = [
  { src: "/ai-consulting/imgs/06_techreviewer_badge_2026-01.svg",                              alt: "Techreviewer 2026 — Top AI Consulting Company" },
  { src: "/ai-consulting/imgs/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top AI Company Boston" },
  { src: "/ai-consulting/imgs/06_top-ai-development-companies.svg",                            alt: "GoodFirms — Top AI Development Company" },
  { src: "/ai-consulting/imgs/06_techreviewer_badge_2026-02.svg",                              alt: "Techreviewer 2026 — Top AI Readiness Assessment" },
  { src: "/ai-consulting/imgs/03_Badge-1-1.svg",                                               alt: "Top Software Development Company Massachusetts" },
  { src: "/ai-consulting/imgs/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg",                     alt: "GoodFirms badge" },
  { src: "/ai-consulting/imgs/12_5ca49c9f8ff5ad26d13b6845_TDA.svg",                           alt: "TDA badge" },
  { src: "/ai-consulting/imgs/12_5ca49c9f6cb37e49a79e1163_changed.svg",                       alt: "AWS Standard Consulting Partner" },
  { src: "/ai-consulting/imgs/12_Machine-Learning-Development-2024.svg",                       alt: "Machine Learning Development 2024" },
  { src: "/ai-consulting/imgs/12_IoT-Services-2025.svg",                                       alt: "IoT Services 2025" },
  { src: "/ai-consulting/imgs/12_Data-Mining-Development-2024.svg",                            alt: "Data Mining Development 2024" },
  { src: "/ai-consulting/imgs/12_Responsive-Design-Development-2025.svg",                      alt: "Responsive Design Development 2025" },
  { src: "/ai-consulting/imgs/12_Custom-Web-Design-Development-2025.svg",                      alt: "Custom Web Design Development 2025" },
  { src: "/ai-consulting/imgs/12_Business-Intelligence-Services-2024.svg",                     alt: "Business Intelligence Services 2024" },
];

const VISIBLE = 6;

export default function AIAwards() {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, BADGES.length - VISIBLE);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const isPrevDisabled = index === 0;
  const isNextDisabled = index >= maxIndex;

  return (
    <section className={styles.section} id="awards">
      <div className="container">
        <h2 className={styles.title}>
          <span>Awards</span> &amp; Recognitions
        </h2>
        <p className={styles.desc}>
          Nexterse has been recognized by leading analytics agencies working with the best software
          development companies from all over the world. Our values and partners help us provide the
          best services in the field.
        </p>

        {/* Slider — same structure as Certificates achievements-block */}
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
              style={{ transform: `translateX(calc(-${index} * (100% / ${VISIBLE})))` }}
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

          <button
            className={`${styles.btnNext} ${isNextDisabled ? styles.disabled : ""}`}
            onClick={next}
            aria-label="Next"
            disabled={isNextDisabled}
          />
        </div>

        {/* Mobile nav row */}
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
