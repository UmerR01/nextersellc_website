"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
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

const DEFAULT_REVIEWS: Review[] = [
  {
    quote: "From the early stages of the project, Nexterse LLC demonstrated a proactive attitude, actively seeking opportunities to enhance the solution and anticipate our needs. They consistently took the initiative to address any potential issues, provide timely updates, and offer solutions to challenges that arose during development. This proactiveness greatly contributed to the project's success and exceeded our expectations.",
    logo: "/services-page/08_protech_solutions_inc_logo.jpg",
    logoAlt: "Protech Solutions Inc logo",
    name: "Dave Alce",
    role: "COO",
  },
  {
    quote: "The system has produced a significant competitive advantage in the industry thanks to Nexterse LLC's well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    photo: "/services-page/01_photo.png",
    photoAlt: "Alexander McCaig",
    name: "Alexander McCaig",
    role: "Co-Founder & CEO, Tartle",
  },
  {
    quote: "Nectarin LLC aimed to develop a complex Ruby on Rails-based platform, which would be closely integrated with such systems as Google AdWords, Yandex Direct and Google Analytics.",
    photo: "/services-page/01_photo12.png",
    photoAlt: "Andrey Kubka",
    name: "Andrey Kubka",
    role: "Product Technology Manager, Mediatron",
  },
  {
    quote: "I was impressed by Nexterse LLC's prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies. Also, their communication skills were great; it never felt like a long-distance project. It felt like Nexterse LLC was working next door because their project manager was always keeping me updated.",
    photo: "/services-page/12_5cc8378b669af259c74ec736_b_dorsinvil-2-1-1.jpg",
    photoAlt: "Benjamin Dorsinvil",
    name: "Benjamin Dorsinvil",
    role: "Founder, SellBig",
  },
  {
    quote: "We tried another company that one of our partners had used but they didn't work out. I feel that Nexterse LLC does a better investigation of what we're asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    photo: "/services-page/01_photo6.png",
    photoAlt: "Damian Gevertz",
    name: "Damian Gevertz",
    role: "Founder & CEO, Widgety",
  },
  {
    quote: "Nexterse LLC is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality. Importantly, they help you think with the business logic of your application and they don't blindly follow what you are saying. Which is super important. Overall, great skills, good communication, and happy with the results so far.",
    photo: "/services-page/01_photo2.png",
    photoAlt: "Domien Van Eynde",
    name: "Domien Van Eynde",
    role: "Team Lead, Daiokan.com",
  },
  {
    quote: "Together with the team, we have turned the MVP version of the service into a modern full-featured platform for online marketers. We are very satisfied with the work the Nexterse LLC team has performed, and we would like to highlight the high level of technical expertise, coherence and efficiency of communication and flexibility in work. We can confidently say that Nexterse LLC has put all our ideas into practice.",
    photo: "/services-page/01_photo7.png",
    photoAlt: "Katerina Bromberg",
    name: "Katerina Bromberg",
    role: "Co-Founder, MyMediAds.com",
  },
  {
    quote: "We are absolutely convinced that cooperation between companies is only successful when based on effective teamwork. But the teams may vary on the degree of their cohesion.",
    photo: "/services-page/01_photo10.png",
    photoAlt: "Maria Duyunova",
    name: "Maria Duyunova",
    role: "Director, Simplimagine LLC",
  },
  {
    quote: "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with.",
    photo: "/services-page/01_photo11.png",
    photoAlt: "Michael Karbushev",
    name: "Michael Karbushev",
    role: "Senior Director of Engineering, Evolv",
  },
  {
    quote: "Rivalfox had the pleasure to work with Nexterse LLC in building out core portions of our product, and the results really couldn't have been better. Nexterse LLC provided us with engineering expertise, enthusiasm and great people that were focused on creating quality features quickly.",
    photo: "/services-page/01_photo5.png",
    photoAlt: "Paul S. Chun",
    name: "Paul S. Chun",
    role: "CTO, Rivalfox GmbH",
  },
  {
    quote: "We'd like to thank Nexterse LLC for the exceptional technical services provided for our business. It should be noted that we started our project's development with another team, but the communication and the development process in general were not transparent and on schedule. It resulted in a low-quality final product.",
    logo: "/services-page/01_logo-1.svg",
    logoAlt: "Hauz logo",
    name: "Pratasevich Ivan",
    role: "Chief Executive Officer, Ivanco-Media LLC",
  },
  {
    quote: "Nexterse LLC succeeded in building a more manageable solution that is much easier to maintain.",
    photo: "/services-page/01_photo3.png",
    photoAlt: "Yevgeniy Rozenblat",
    name: "Yevgeniy Rozenblat",
    role: "Program Manager, TL Nika",
  },
  {
    quote: "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose Nexterse LLC. The company proved itself a reliable provider of IT services.",
    photo: "/services-page/01_photo9.png",
    photoAlt: "Yuriy Semenchuk",
    name: "Yuriy Semenchuk",
    role: "General Director, Business Car",
  },
  {
    quote: "Thanks to Nexterse LLC's can-do attitude, amazing work ethic, and willingness to tackle clients' problems as their own, they've become an integral part of our team. We've been truly impressed with their professionalism and performance and continue to work with the team on developing new applications. We are completely satisfied with the results of our cooperation and will be happy to recommend Nexterse LLC as a reliable and competent partner for development of web-based solutions.",
    logo: "/services-page/01_logo.svg",
    logoAlt: "BoxForward logo",
    name: "Yury Haverman",
    role: "Founder, BoxForward",
  },
  {
    quote: "We've been working with Nexterse LLC for a few years, starting from the initial monitoring system, so they already understood our environment quite well. At the same time, they still managed to surprise us with their professionalism.",
    photo: "/services-page/05_Alex-Phelps.png",
    photoAlt: "Alex Phelps",
    name: "Alex Phelps",
    role: "CEO",
  },
  {
    quote: "We'd like to sincerely thank Nexterse LLC for the work they've done on our maintenance system. At one point, our maintenance efforts became inefficient – long downtimes and rising repair costs became the norm.",
    photo: "/services-page/05_Dillon-Christensen.png",
    photoAlt: "Dillon Christensen",
    name: "Dillon Christensen",
    role: "CEO",
  },
  {
    quote: "We had already invested in AI, but the output was unclear. There were multiple initiatives across the company, each showing some promise, but no clear way to evaluate them or connect them to business outcomes.",
    photo: "/services-page/05_Erica-Lindsay.png",
    photoAlt: "Erica Lindsay",
    name: "Erica Lindsay",
    role: "Manager",
  },
  {
    quote: "Nexterse LLC is flexible, efficient, and extremely good at planning and being proactive. They have also been very proactive in their approach throughout the project, seeking to understand the needs and the reasons behind them before launching into development, which has been helpful for maintaining direction and consistency.",
    photo: "/services-page/08_639b8502f91be05f5bf099be_Paul-276x300.png",
    photoAlt: "Paul Fardoe",
    name: "Paul Fardoe",
    role: "Director",
  },
];

export default function ServicesReviewSlider({ reviews }: { reviews?: Review[] } = {}) {
  const REVIEWS = reviews ?? DEFAULT_REVIEWS;
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
                  <p className={styles.authorName}>{review.name}</p>
                  <p className={styles.authorPosition}>{review.role}</p>
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
