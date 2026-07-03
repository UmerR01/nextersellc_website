"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./TeamReviewSlider.module.css";

export interface TeamReview {
  text: string;
  logo?: string;
  photo?: string;
  name: string;
  position: string;
}

const REVIEWS: TeamReview[] = [
  {
    text: "From the early stages of the project, Nexterse LLC demonstrated a proactive attitude, quickly grasping the complexities of our requirements and delivering innovative solutions that exceeded our expectations.",
    logo: "/team/08_protech_solutions_inc_logo.jpg",
    name: "Dave Alce",
    position: "COO",
  },
  {
    text: "Nexterse LLC team is a fast-moving and result-oriented. I am very grateful to them for the ability to adapt to the changing requirements of the project. They were always thinking about how to make the product better for the end user.",
    photo: "/team/01_Markus-Keller-300x300.png",
    name: "Markus Keller",
    position: "Head of Operations",
  },
  {
    text: "The system has produced a significant competitive advantage in the industry thanks to Nexterse LLC's well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    photo: "/team/01_photo.png",
    name: "Alexander McCaig",
    position: "Co-Founder & CEO, Tartle",
  },
  {
    text: "We tried another company that one of our partners had used but they didn't work out. I feel that Nexterse LLC does a better investigation of what we're asking for. They tell us how they plan to do a task and ask if that works for us.",
    photo: "/team/01_photo6.png",
    name: "Damian Gevertz",
    position: "Founder & CEO, Widgety",
  },
  {
    text: "Nexterse LLC is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality. Important, they help you think with the business logic of your application.",
    photo: "/team/01_photo2.png",
    name: "Domien Van Eynde",
    position: "Team Lead, Daiokan.com",
  },
  {
    text: "Rivalfox had the pleasure to work with Nexterse LLC in building out core portions of our product, and the results really couldn't have been better. Nexterse LLC provided us with engineering expertise, enthusiasm and great people.",
    photo: "/team/01_photo5.png",
    name: "Paul S. Chun",
    position: "CTO, Rivalfox GmbH",
  },
  {
    text: "I was impressed by Nexterse LLC's prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies. Also, their communication skills were great; it never felt like a long-distance project.",
    photo: "/team/12_5cc8378b669af259c74ec736_b_dorsinvil-2-1-1.jpg",
    name: "Benjamin Dorsinvil",
    position: "Founder, SellBig",
  },
  {
    text: "Nexterse LLC succeeded in building a more manageable solution that is much easier to maintain.",
    photo: "/team/08_639b8502f91be05f5bf099be_Paul-276x300.png",
    name: "Paul Fardoe",
    position: "Director",
  },
  {
    text: "Working with Nexterse LLC has been an exceptional experience. Their technical expertise and commitment to quality have consistently delivered results that aligned with our vision.",
    photo: "/team/05_Alex-Phelps.png",
    name: "Alex Phelps",
    position: "CEO",
  },
  {
    text: "Nexterse LLC brought both technical depth and creative problem-solving to our project. The team was responsive, collaborative, and delivered on time.",
    photo: "/team/05_Dillon-Christensen.png",
    name: "Dillon Christensen",
    position: "CEO",
  },
  {
    text: "The Nexterse LLC team was professional and knowledgeable throughout our engagement. They provided clear communication and produced exactly what we needed.",
    photo: "/team/05_Erica-Lindsay.png",
    name: "Erica Lindsay",
    position: "Manager",
  },
  {
    text: "Nexterse LLC delivered a comprehensive solution with excellent attention to detail. Their team's expertise was evident from day one, and they guided us through every stage of development.",
    photo: "/team/08_Julia-C-300x300.jpg",
    name: "Julie Crawford",
    position: "Founder",
  },
  {
    text: "Nexterse LLC succeeded in building a more manageable solution that is much easier to maintain.",
    photo: "/team/01_photo3.png",
    name: "Yevgeniy Rozenblat",
    position: "Program Manager, TL Nika",
  },
];

export default function TeamReviewSlider({
  reviews = REVIEWS,
  linkLabel = "Read Clients' testimonials",
  linkHref = "/testimonials",
}: {
  reviews?: TeamReview[];
  linkLabel?: string;
  linkHref?: string;
}) {
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
          {reviews.map((review, idx) => (
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
              className={styles.navBtn}
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              aria-label="Previous review"
              disabled={atStart}
            >
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47 12H3M10 5L3 12L10 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className={styles.navBtn}
              onClick={() => swiperRef.current?.swiper.slideNext()}
              aria-label="Next review"
              disabled={atEnd}
            >
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12H45M38 5L45 12L38 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
