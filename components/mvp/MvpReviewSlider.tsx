"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import styles from "./MvpReviewSlider.module.css";

type Review = {
  text: string;
  logo: string | null;
  photo: string | null;
  name: string;
  role: string;
};

const REVIEWS: Review[] = [
  {
    text: "From the early stages of the project, Nexterse LLC demonstrated a proactive attitude, actively seeking opportunities to enhance the solution and anticipate our needs. They consistently took the initiative to address any potential issues, provide timely updates, and offer solutions to challenges that arose during development. This proactiveness greatly contributed to the project's success and exceeded our expectations.",
    logo: "/mvp/08_protech_solutions_inc_logo.jpg",
    photo: null,
    name: "Dave Alce",
    role: "COO",
  },
  {
    text: "Working with Nexterse LLC has been an outstanding experience. Their team is not only highly skilled but also incredibly responsive, collaborative, and committed to delivering quality results. I can't recommend them enough! Thank you team Nexterse for bringing my vision to life.",
    logo: null,
    photo: "/mvp/08_Julia-C-300x300.jpg",
    name: "Julie Crawford",
    role: "Founder",
  },
  {
    text: "The system has produced a significant competitive advantage in the industry thanks to Nexterse LLC's well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    logo: null,
    photo: "/mvp/01_photo.png",
    name: "Alexander McCaig",
    role: "Co-Founder & CEO, Tartle",
  },
  {
    text: "I was impressed by Nexterse LLC's prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies. Also, their communication skills were great; it never felt like a long-distance project. It felt like Nexterse was working next door because their project manager was always keeping me updated.",
    logo: null,
    photo: "/mvp/12_5cc8378b669af259c74ec736_b_dorsinvil-2-1-1.jpg",
    name: "Benjamin Dorsinvil",
    role: "Founder, SellBig",
  },
  {
    text: "We tried another company that one of our partners had used but they didn't work out. I feel that Nexterse LLC does a better investigation of what we're asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    logo: null,
    photo: "/mvp/01_photo6.png",
    name: "Damian Gevertz",
    role: "Founder & CEO, Widgety",
  },
  {
    text: "Nexterse LLC is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality. Important, they help you think with the business logic of your application and they don't blindly follow what you are saying. Which is super important.",
    logo: null,
    photo: "/mvp/01_photo2.png",
    name: "Domien Van Eynde",
    role: "Team Lead, Daiokan.com",
  },
  {
    text: "Together with the team, we have turned the MVP version of the service into a modern full-featured platform for online marketers. We are very satisfied with the work the Nexterse LLC team has performed, and we would like to highlight the high level of technical expertise, coherence and efficiency of communication and flexibility in work.",
    logo: null,
    photo: "/mvp/01_photo7.png",
    name: "Katerina Bromberg",
    role: "Co-Founder, MyMediAds.com",
  },
  {
    text: "We are absolutely convinced that cooperation between companies is only successful when based on effective teamwork. But the teams may vary on the degree of their cohesion.",
    logo: null,
    photo: "/mvp/01_photo10.png",
    name: "Maria Duyunova",
    role: "Director, Simplimagine LLC",
  },
  {
    text: "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions.",
    logo: null,
    photo: "/mvp/01_photo11.png",
    name: "Michael Karbushev",
    role: "Senior Director of Engineering, Evolv",
  },
  {
    text: "Nexterse LLC succeeded in building a more manageable solution that is much easier to maintain.",
    logo: null,
    photo: "/mvp/01_photo3.png",
    name: "Yevgeniy Rozenblat",
    role: "Program Manager, TL Nika",
  },
  {
    text: "Thanks to Nexterse LLC's can-do attitude, amazing work ethic, and willingness to tackle clients' problems as their own, they've become an integral part of our team. We've been truly impressed with their professionalism and performance and continue to work with the team on developing new applications. We are completely satisfied with the results of our cooperation.",
    logo: "/mvp/01_logo.svg",
    photo: null,
    name: "Yury Haverman",
    role: "Founder, BoxForward",
  },
  {
    text: "Nexterse LLC is flexible, efficient, and extremely good at planning and being proactive. They have also been very proactive in their approach throughout the project, seeking to understand the needs and the reasons behind them before launching into development.",
    logo: null,
    photo: "/mvp/08_639b8502f91be05f5bf099be_Paul-276x300.png",
    name: "Paul Fardoe",
    role: "Director",
  },
  {
    text: "We brought in Nexterse LLC to help us reduce unexpected turbine failures, and the result met our expectations.",
    logo: null,
    photo: "/mvp/01_Markus-Keller-300x300.png",
    name: "Markus Keller",
    role: "Head of Operations",
  },
];

export default function MvpReviewSlider() {
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
              className={styles.navBtn}
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              aria-label="Previous"
              disabled={atStart}
            >
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                <path
                  d="M47 12H3M10 5L3 12L10 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={styles.navBtn}
              onClick={() => swiperRef.current?.swiper.slideNext()}
              aria-label="Next"
              disabled={atEnd}
            >
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                <path
                  d="M1 12H45M38 5L45 12L38 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
