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
    text: "The system has produced a significant competitive advantage in the industry thanks to Nexterse LLC's well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    photo: "/ml/01_photo.png",
    logo: null,
    name: "Alexander McCaig",
    position: "Co-Founder & CEO, Tartle",
  },
  {
    text: "I was impressed by Nexterse LLC's prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies. Also, their communication skills were great; it never felt like a long-distance project. It felt like Nexterse LLC was working next door because their project manager was always keeping me updated.",
    photo: "/ml/12_5cc8378b669af259c74ec736_b_dorsinvil-2-1-1.jpg",
    logo: null,
    name: "Benjamin Dorsinvil",
    position: "Founder, SellBig",
  },
  {
    text: "We tried another company that one of our partners had used but they didn't work out. I feel that Nexterse LLC does a better investigation of what we're asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    photo: "/ml/01_photo6.png",
    logo: null,
    name: "Damian Gevertz",
    position: "Founder & CEO, Widgety",
  },
  {
    text: "Nexterse LLC is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality. Important, they help you think with the business logic of your application and they don't blindly follow what you are saying. Which is super important. Overall, great skills, good communication, and happy with the results so far.",
    photo: "/ml/01_photo2.png",
    logo: null,
    name: "Domien Van Eynde",
    position: "Team Lead, Daiokan.com",
  },
  {
    text: "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with.",
    photo: "/ml/01_photo11.png",
    logo: null,
    name: "Michael Karbushev",
    position: "Senior Director of Engineering, Evolv",
  },
  {
    text: "Rivalfox had the pleasure to work with Nexterse LLC in building out core portions of our product, and the results really couldn't have been better. Nexterse LLC provided us with engineering expertise, enthusiasm and great people that were focused on creating quality features quickly.",
    photo: "/ml/01_photo5.png",
    logo: null,
    name: "Paul S. Chun",
    position: "CTO, Rivalfox GmbH",
  },
  {
    text: "Nexterse LLC succeeded in building a more manageable solution that is much easier to maintain.",
    photo: "/ml/01_photo3.png",
    logo: null,
    name: "Yevgeniy Rozenblat",
    position: "Program Manager, TL Nika",
  },
  {
    text: "Thanks to Nexterse LLC's can-do attitude, amazing work ethic, and willingness to tackle clients' problems as their own, they've become an integral part of our team. We've been truly impressed with their professionalism and performance and continue to work with the team on developing new applications.",
    photo: null,
    logo: "/ml/01_logo.svg",
    name: "Yury Haverman",
    position: "Founder, BoxForward",
  },
];

export default function MlReviews() {
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
