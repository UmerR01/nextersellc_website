"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { resolveReviews, toPlainText, type ReviewSelectionProps } from "@/components/testimonials/reviewsData";
import styles from "./TeamReviewSlider.module.css";

export interface TeamReview {
  text: string;
  logo?: string;
  photo?: string;
  name: string;
  position: string;
}

export default function TeamReviewSlider({
  reviews,
  linkLabel = "Read Clients' testimonials",
  linkHref = "/testimonials",
  ...selection
}: {
  reviews?: TeamReview[];
  linkLabel?: string;
  linkHref?: string;
} & ReviewSelectionProps = {}) {
  const REVIEWS: TeamReview[] =
    reviews ??
    resolveReviews(selection).map((r) => ({
      text: toPlainText(r.text),
      photo: r.photo,
      logo: r.logo,
      name: r.name,
      position: r.position,
    }));
  const swiperRef = useRef<SwiperRef>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncNavigation = (swiper: { isBeginning: boolean; isEnd: boolean }) => {
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
          onSwiper={syncNavigation}
          onSlideChange={syncNavigation}
          className={styles.swiper}
        >
          {REVIEWS.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.slide}>
                {/* Right column: author */}
                <div className={styles.rightContent}>
                  <div className={styles.authorMedia}>
                    {review.logo ? (
                      <Image
                        src={review.logo}
                        alt={review.name}
                        width={172}
                        height={72}
                        className={styles.authorLogo}
                      />
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
                  <p className={styles.authorPosition}>{review.position}</p>
                </div>

                {/* Left column: quote */}
                <div className={styles.leftContent}>
                  <div className={styles.quoteIcon} aria-hidden="true">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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

        {/* Bottom navigation */}
        <div className={styles.bottomNav}>
          <div className={styles.navButtons}>
            <button
              className={`${styles.navBtn} ${styles.navPrev}`}
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              aria-label="Previous review"
              disabled={atStart}
            >
              <span className={styles.arrowBox} aria-hidden="true" />
            </button>
            <button
              className={`${styles.navBtn} ${styles.navNext}`}
              onClick={() => swiperRef.current?.swiper.slideNext()}
              aria-label="Next review"
              disabled={atEnd}
            >
              <span className={styles.arrowBox} aria-hidden="true" />
            </button>
          </div>
          <Link href={linkHref} className={styles.testimonialsLink}>
            {linkLabel}
            <span className={styles.linkArrow} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
