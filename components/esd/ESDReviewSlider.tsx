"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import styles from "./ESDReviewSlider.module.css";

const REVIEWS = [
  {
    text: "The system has produced a significant competitive advantage in the industry thanks to Nexterse LLC's well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    photo: "/esd/01_photo.png",
    name: "Alexander McCaig",
    position: "Co-Founder & CEO, Tartle",
    logo: null,
  },
  {
    text: "Nectarin LLC aimed to develop a complex Ruby on Rails-based platform, which would be closely integrated with such systems as Google AdWords, Yandex Direct and Google Analytics.",
    photo: "/esd/01_photo12.png",
    name: "Andrey Kubka",
    position: "Product Technology Manager, Mediatron",
    logo: null,
  },
  {
    text: "I was impressed by Nexterse LLC's prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies. Also, their communication skills were great; it never felt like a long-distance project. It felt like Nexterse LLC was working next door because their project manager was always keeping me updated.",
    photo: "/esd/12_5cc8378b669af259c74ec736_b_dorsinvil-2-1-1.jpg",
    name: "Benjamin Dorsinvil",
    position: "Founder, SellBig",
    logo: null,
  },
  {
    text: "We tried another company that one of our partners had used but they didn't work out. I feel that Nexterse LLC does a better investigation of what we're asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    photo: "/esd/01_photo6.png",
    name: "Damian Gevertz",
    position: "Founder & CEO, Widgety",
    logo: null,
  },
  {
    text: "Nexterse LLC is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality. Important, they help you think with the business logic of your application and they don't blindly follow what you are saying. Which is super important. Overall, great skills, good communication, and happy with the results so far.",
    photo: "/esd/01_photo2.png",
    name: "Domien Van Eynde",
    position: "Team Lead, Daiokan.com",
    logo: null,
  },
  {
    text: "Together with the team, we have turned the MVP version of the service into a modern full-featured platform for online marketers. We are very satisfied with the work the Nexterse LLC team has performed, and we would like to highlight the high level of technical expertise, coherence and efficiency of communication and flexibility in work. We can confidently say that Nexterse LLC has put all our ideas into practice.",
    photo: "/esd/01_photo7.png",
    name: "Katerina Bromberg",
    position: "Co-Founder, MyMediAds.com",
    logo: null,
  },
  {
    text: "We are absolutely convinced that cooperation between companies is only successful when based on effective teamwork (and Captain Obvious is on our side!). But the teams may vary on the degree of their cohesion.",
    photo: "/esd/01_photo10.png",
    name: "Maria Duyunova",
    position: "Director, Simplimagine LLC",
    logo: null,
  },
  {
    text: "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with.",
    photo: "/esd/01_photo11.png",
    name: "Michael Karbushev",
    position: "Senior Director of Engineering, Evolv",
    logo: null,
  },
  {
    text: "Rivalfox had the pleasure to work with Nexterse LLC in building out core portions of our product, and the results really couldn't have been better. Nexterse LLC provided us with engineering expertise, enthusiasm and great people that were focused on creating quality features quickly.",
    photo: "/esd/01_photo5.png",
    name: "Paul S. Chun",
    position: "CTO, Rivalfox GmbH",
    logo: null,
  },
  {
    text: "We'd like to thank Nexterse LLC for the exceptional technical services provided for our business. It should be noted that we started our project's development with another team, but the communication and the development process in general were not transparent and on schedule. It resulted in a low-quality final product.",
    photo: null,
    name: "Pratasevich Ivan",
    position: "Chief Executive Officer, Ivanco-Media LLC",
    logo: "/esd/01_logo-1.svg",
  },
  {
    text: "Nexterse LLC succeeded in building a more manageable solution that is much easier to maintain.",
    photo: "/esd/01_photo3.png",
    name: "Yevgeniy Rozenblat",
    position: "Program Manager, TL Nika",
    logo: null,
  },
  {
    text: "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose Nexterse LLC. The company proved itself a reliable provider of IT services.",
    photo: "/esd/01_photo9.png",
    name: "Yuriy Semenchuk",
    position: "General Director, Business Car",
    logo: null,
  },
  {
    text: "Thanks to Nexterse LLC's can-do attitude, amazing work ethic, and willingness to tackle clients' problems as their own, they've become an integral part of our team. We've been truly impressed with their professionalism and performance and continue to work with the team on developing new applications. We are completely satisfied with the results of our cooperation and will be happy to recommend Nexterse LLC as a reliable and competent partner for development of web-based solutions.",
    photo: null,
    name: "Yury Haverman",
    position: "Founder, BoxForward",
    logo: "/esd/01_logo.svg",
  },
];

export default function ESDReviewSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={0}
          loop
          onSwiper={(sw) => { swiperRef.current = sw; }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(sw) => {
            if (typeof sw.params.navigation === "object") {
              sw.params.navigation.prevEl = prevRef.current;
              sw.params.navigation.nextEl = nextRef.current;
            }
          }}
          className={styles.swiper}
        >
          {REVIEWS.map((r, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.slideInner}>
                <div className={styles.leftContent}>
                  <blockquote className={styles.reviewText}>&ldquo;{r.text}&rdquo;</blockquote>
                </div>
                <div className={styles.rightContent}>
                  <div className={styles.authorData}>
                    {r.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={r.logo} alt={r.name} className={styles.authorLogo} loading="lazy" />
                    ) : r.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={r.photo} alt={r.name} className={styles.authorPhoto} loading="lazy" />
                    ) : null}
                    <div className={styles.authorText}>
                      <div className={styles.authorName}>{r.name}</div>
                      <div className={styles.authorPosition}>{r.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.bottom}>
          <div className={styles.navWrap}>
            <div ref={prevRef} className={styles.navBtn} onClick={() => swiperRef.current?.slidePrev()}>
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                <path d="M47 12H3M10 5L3 12L10 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div ref={nextRef} className={styles.navBtn} onClick={() => swiperRef.current?.slideNext()}>
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                <path d="M1 12H45M38 5L45 12L38 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <a href="#" className={styles.allReviews}>
            All Reviews <span className={styles.linkArrow} />
          </a>
        </div>
      </div>
    </section>
  );
}
