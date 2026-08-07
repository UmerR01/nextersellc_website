"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import styles from "@/components/custom-software/CSReviewSlider.module.css";

const REVIEWS = [
  {
    text: "Nexterse LLC is flexible, efficient, and extremely good at planning and being proactive. They have also been very proactive in their approach throughout the project, seeking to understand the needs and the reasons behind them before launching into development, which has been helpful for maintaining direction and consistency, especially because the end client is regularly generating new ideas for added features.",
    photo: "/big-data/08_639b8502f91be05f5bf099be_Paul-276x300.png",
    logo: null,
    name: "Paul Fardoe",
    position: "Director",
  },
  {
    text: "We brought in Nexterse LLC to help us reduce unexpected turbine failures, and the result met our expectations.",
    photo: "/big-data/01_Markus-Keller-300x300.png",
    logo: null,
    name: "Markus Keller",
    position: "Head of Operations",
  },
  {
    text: "We’ve been working with Nexterse LLC for a few years, starting from the initial monitoring system, so they already understood our environment quite well. At the same time, they still managed to surprise us with their professionalism.",
    photo: "/big-data/05_Alex-Phelps.png",
    logo: null,
    name: "Alex Phelps",
    position: "CEO",
  },
  {
    text: "We’d like to sincerely thank Nexterse LLC for the work they’ve done on our maintenance system. At one point, our maintenance efforts became inefficient – long downtimes and rising repair costs became the norm.",
    photo: "/big-data/05_Dillon-Christensen.png",
    logo: null,
    name: "Dillon Christensen",
    position: "CEO",
  },
  {
    text: "We had already invested in AI, but the output was unclear. There were multiple initiatives across the company, each showing some promise, but no clear way to evaluate them or connect them to business outcomes.",
    photo: "/big-data/05_Erica-Lindsay.png",
    logo: null,
    name: "Erica Lindsay",
    position: "Manager",
  },
  {
    text: "Working with Nexterse LLC has been an outstanding experience. Their team is not only highly skilled but also incredibly responsive, collaborative, and committed to delivering quality results. I can’t recommend them enough! Thank you team Nexterse LLC for bringing my vision to life.",
    photo: "/big-data/08_Julia-C-300x300.jpg",
    logo: null,
    name: "Julie Crawford",
    position: "Founder",
  },
  {
    text: "Nexterse LLC is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality. Important, they help you think with the business logic of your application and they don’t blindly follow what you are saying. Which is super important. Overall, great skills, good communication, and happy with the results so far.",
    photo: "/big-data/01_photo2.png",
    logo: null,
    name: "Domien Van Eynde",
    position: "Team Lead, Daiokan.com",
  },
];

export default function BigDataReviews() {
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
                      <Image src={review.logo} alt={review.name} width={172} height={72} className={styles.authorLogo} />
                    ) : review.photo ? (
                      <Image src={review.photo} alt={review.name} width={72} height={72} className={styles.authorPhoto} />
                    ) : null}
                  </div>
                  <p className={styles.authorName}>{review.name}</p>
                  <p className={styles.authorPosition}>{review.position}</p>
                </div>

                <div className={styles.leftContent}>
                  <div className={styles.quoteIcon} aria-hidden="true">
                    <svg width="52" height="52" viewBox="0 0 48 48" fill="none">
                      <path d="M14 22H6C6 16 8 10 14 8V4C4 6 0 14 0 22V38H16V22H14ZM38 22H30C30 16 32 10 38 8V4C28 6 24 14 24 22V38H40V22H38Z" fill="#112244" fillOpacity="0.12" />
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
          <Link href="/testimonials" className={styles.testimonialsLink}>
            Read Clients&rsquo; testimonials
            <span className={styles.linkArrow} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
