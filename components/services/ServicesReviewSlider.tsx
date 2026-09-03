"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import { resolveReviews, toPlainText, type Review as CentralReview, type ReviewSelectionProps } from "@/components/testimonials/reviewsData";
import styles from "./ServicesReviewSlider.module.css";

export type Review = {
  quote: string;
  photo?: string;
  logo?: string;
  logoAlt?: string;
  name: string;
  role: string;
  photoAlt?: string;
};

function toSliderReview(r: CentralReview): Review {
  return { quote: toPlainText(r.text), photo: r.photo, logo: r.logo, name: r.name, role: r.position };
}

export default function ServicesReviewSlider({
  reviews,
  ...selection
}: { reviews?: Review[] } & ReviewSelectionProps = {}) {
  const REVIEWS = reviews ?? resolveReviews(selection).map(toSliderReview);
  const swiperRef = useRef<SwiperRef>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncNav = (swiper: { isBeginning: boolean; isEnd: boolean }) => {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  };

  return (
    <section id="svc-reviews" className={styles.section}>
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
                      <img src={review.logo} alt={review.logoAlt ?? ""} className={styles.authorLogo} />
                    ) : review.photo ? (
                      <Image src={review.photo} alt={review.photoAlt ?? review.name} width={72} height={72} className={styles.authorPhoto} />
                    ) : null}
                  </div>
                  <div className={styles.authorInfo}>
                    <p className={styles.authorName}>{review.name}</p>
                    <p className={styles.authorPosition}>{review.role}</p>
                  </div>
                </div>

                <div className={styles.leftContent}>
                  <div className={styles.quoteIcon} aria-hidden="true">
                    <svg width="52" height="52" viewBox="0 0 48 48" fill="none">
                      <path d="M14 22H6C6 16 8 10 14 8V4C4 6 0 14 0 22V38H16V22H14ZM38 22H30C30 16 32 10 38 8V4C28 6 24 14 24 22V38H40V22H38Z" fill="#112244" fillOpacity="0.12" />
                    </svg>
                  </div>
                  <p className={styles.quoteText}>{review.quote}</p>
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
          <Link href="/testimonials" className={styles.testimonialsLink}>
            What our clients say
            <span className={styles.linkArrow} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
