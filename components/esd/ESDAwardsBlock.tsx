"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import styles from "./ESDAwardsBlock.module.css";

const AWARDS = [
  { src: "/esd/05_top_clutch.co_.net_developers_boston_2026-2.svg", alt: "Clutch 2026 award — Top .NET Developers in Boston" },
  { src: "/esd/06_techreviewer_badge_2026-09.svg", alt: "techreviewer.co 2026 — Top Enterprise Software Development Companies" },
  { src: "/esd/06_techreviewer_badge_2026-10.svg", alt: "techreviewer.co 2026 — Top Legacy Software Modernization Companies" },
  { src: "/esd/03_Badge-1-1.svg", alt: "Top software development company in Massachusetts — goodfirms.co" },
  { src: "/esd/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "Goodfirms badge" },
  { src: "/esd/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge" },
];

export default function ESDAwardsBlock() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="awards-recognitions" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Awards</span>&amp; Recognitions
        </h2>
        <div className={styles.swiperWrap}>
          <button
            className={`${styles.navBtn} ${styles.navPrev}`}
            aria-label="Previous"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
              <path d="M47 12H3M10 5L3 12L10 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation]}
            loop
            speed={500}
            spaceBetween={40}
            slidesPerView={5}
            onSwiper={(sw) => { swiperRef.current = sw; }}
            breakpoints={{
              0:   { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 28 },
              900: { slidesPerView: 6, spaceBetween: 32 },
            }}
            className={styles.swiper}
          >
            {AWARDS.map((award, i) => (
              <SwiperSlide key={i} className={styles.slide}>
                <div className={styles.awardWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={award.src} alt={award.alt} className={styles.awardImg} loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className={`${styles.navBtn} ${styles.navNext}`}
            aria-label="Next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
              <path d="M1 12H45M38 5L45 12L38 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
