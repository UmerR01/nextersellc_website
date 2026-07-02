"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TeamAwards.module.css";

const AWARDS = [
  "/team/12_5ca49c9f6cb37e49a79e1163_changed.svg",
  "/team/05_iso.svg",
  "/team/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg",
  "/team/05_top_clutch.co_generative_ai_company_boston_2026-2.svg",
  "/team/05_top_clutch.co_machine_learning_company_boston_2026-2.svg",
  "/team/03_Badge-1-1.svg",
  "/team/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg",
  "/team/12_Responsive-Design-Development-2025.svg",
  "/team/12_Business-Intelligence-Services-2024.svg",
  "/team/12_Mobile-Software-Development-2025.svg",
  "/team/12_IoT-Services-2025.svg",
  "/team/12_Custom-Web-Design-Development-2025.svg",
  "/team/05_top_clutch.co_voice_and_speech_recognition_company_boston_2026-2.svg",
  "/team/05_top_clutch.co_robotics_company_boston_2026-2.svg",
  "/team/05_top_clutch.co_iot_company_boston_2026-2.svg",
  "/team/05_top_clutch.co_iot_company_providence_2026-2.svg",
  "/team/05_top_clutch.co_software_developers_medical_boston-2.svg",
  "/team/06_top-ai-development-companies.svg",
  "/team/06_top-software-development-companies.svg",
  "/team/06_top-website-development-companies.svg",
  "/team/06_RightFirms-1.svg",
  "/team/06_techreviewer_badge_2026-01.svg",
  "/team/06_techreviewer_badge_2026-02.svg",
  "/team/06_techreviewer_badge_2026-03.svg",
  "/team/06_techreviewer_badge_2026-05.svg",
  "/team/06_techreviewer_badge_2026-06.svg",
  "/team/06_techreviewer_badge_2026-07.svg",
  "/team/06_techreviewer_badge_2026-08.svg",
  "/team/06_techreviewer_badge_2026-09.svg",
  "/team/06_techreviewer_badge_2026-10.svg",
  "/team/06_techreviewer_badge_2026-11.svg",
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
          />

          <div className={styles.swiper}>
            <div
              className={styles.track}
              style={{
                "--visible": visible,
                transform: `translateX(calc(-${index} * (100% / ${visible})))`,
              } as React.CSSProperties}
            >
            {AWARDS.map((src, idx) => (
              <div key={idx} className={styles.slide}>
                <Image
                  src={src}
                  alt={`Award ${idx + 1}`}
                  width={140}
                  height={120}
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
          />
        </div>

        <div className={styles.mobileNav}>
          <button
            className={`${styles.navBtn} ${styles.navPrev} ${previousDisabled ? styles.navDisabled : ""}`}
            onClick={previous}
            aria-label="Previous award"
            disabled={previousDisabled}
          />
          <button
            className={`${styles.navBtn} ${styles.navNext} ${nextDisabled ? styles.navDisabled : ""}`}
            onClick={next}
            aria-label="Next award"
            disabled={nextDisabled}
          />
        </div>
      </div>
    </section>
  );
}
