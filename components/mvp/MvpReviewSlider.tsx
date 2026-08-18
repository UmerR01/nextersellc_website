"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import { resolveReviews, toPlainText, type ReviewSelectionProps } from "@/components/testimonials/reviewsData";
import styles from "./MvpReviewSlider.module.css";

export default function MvpReviewSlider(selection: ReviewSelectionProps = {}) {
  const REVIEWS = resolveReviews(selection).map((r) => ({
    text: toPlainText(r.text),
    logo: r.logo ?? null,
    photo: r.photo ?? null,
    name: r.name,
    role: r.position,
  }));
  const swiperRef = useRef<SwiperRef>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncNav = (swiper: { isBeginning: boolean; isEnd: boolean }) => {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          slidesPerView={1}
          speed={600}
          onSwiper={syncNav}
          onSlideChange={syncNav}
          className={styles.swiper}
        >
          {REVIEWS.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.slide}>
                <div className={styles.rightContent}>
                  <div className={styles.authorMedia}>
                    {review.logo ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={review.logo} alt={review.name} className={styles.authorLogo} />
                    ) : review.photo ? (
                      <Image
                        src={review.photo}
                        alt={review.name}
                        width={72}
                        height={72}
                        className={styles.authorPhoto}
                      />
                    ) : null}
                  </div>
                  <p className={styles.authorName}>{review.name}</p>
                  <p className={styles.authorPosition}>{review.role}</p>
                </div>

                <div className={styles.leftContent}>
                  <div className={styles.quoteIcon} aria-hidden="true">
                    <svg width="52" height="52" viewBox="0 0 48 48" fill="none">
                      <path
                        d="M14 22H6C6 16 8 10 14 8V4C4 6 0 14 0 22V38H16V22H14ZM38 22H30C30 16 32 10 38 8V4C28 6 24 14 24 22V38H40V22H38Z"
                        fill="#112244"
                        fillOpacity="0.12"
                      />
                    </svg>
                  </div>
                  <p className={styles.quoteText}>{review.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.bottomNav}>
          <div className={styles.navButtons}>
            <button
              className={`${styles.navBtn} ${styles.navPrev}`}
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              aria-label="Previous"
              disabled={atStart}
            >
              <span className={styles.arrowBox} aria-hidden="true" />
            </button>
            <button
              className={`${styles.navBtn} ${styles.navNext}`}
              onClick={() => swiperRef.current?.swiper.slideNext()}
              aria-label="Next"
              disabled={atEnd}
            >
              <span className={styles.arrowBox} aria-hidden="true" />
            </button>
          </div>
          <a href="/testimonials" className={styles.testimonialsLink}>
            What our clients say
            <span className={styles.linkArrow} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
