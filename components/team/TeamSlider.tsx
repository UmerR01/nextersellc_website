"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./TeamSlider.module.css";

const TEAM = [
  { name: "David Logan",              position: "Managing Partner",               img: "/team/11_David_Logan-300x300.png" },
  { name: "Yury Shamrei",             position: "CEO",                            img: "/team/12_Yury-Shamrey-300x300.png" },
  { name: "Kate Merzlova",            position: "Head of Sales and Marketing",    img: "/team/12_Kate-Merzlova-300x300.png" },
  { name: "Irina Baryshnaya",         position: "Head of Production",             img: "/team/01_Frame-101745.png" },
  { name: "Alena Rubanik",            position: "Head of HR",                     img: "/team/08_Alena-Rubanik-300x300.jpg" },
  { name: "Valery Belogrivyi",        position: "Development Lead",               img: "/team/08_valera-300x300.jpg" },
  { name: "Kirill Funtikov",          position: "R&D Lead",                       img: "/team/08_kirill-300x300.jpg" },
  { name: "Anastasiya Rachkovskaya", position: "Project Managers Office Lead",    img: "/team/06_Anastasiya-Rachkovskaya-300x300.jpg" },
  { name: "Karina Novichenko",        position: "Quality Assurance Lead",         img: "/team/08_Karina-Novichenko-300x300.jpg" },
  { name: "Andrei Bahdanovich",       position: "Business Analysis Lead",         img: "/team/08_andrey-300x300.jpg" },
];

export default function TeamSlider() {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className={styles.section} id="management-team">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Management <span className={styles.accent}>team</span>
        </h2>

        <div className={styles.cardsWrapper}>
          {/* Prev button */}
          <button
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            aria-label="Previous slide"
          >
            <span className={styles.arrowBox} aria-hidden="true" />
          </button>

          <Swiper
            ref={swiperRef}
            modules={[Navigation, FreeMode]}
            freeMode={true}
            speed={1000}
            breakpoints={{
              0:    { slidesPerView: 2, spaceBetween: 16 },
              650:  { slidesPerView: 3, spaceBetween: 40 },
              991:  { slidesPerView: 4, spaceBetween: 40 },
              1280: { slidesPerView: 5, spaceBetween: 40 },
            }}
            className={styles.swiper}
          >
            {TEAM.map((member) => (
              <SwiperSlide key={member.name}>
                <div className={styles.card}>
                  <div className={styles.cardImageContainer}>
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={300}
                      height={300}
                      className={styles.cardImage}
                    />
                  </div>
                  <p className={styles.cardName}>{member.name}</p>
                  <p className={styles.cardPosition}>{member.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next button */}
          <button
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={() => swiperRef.current?.swiper.slideNext()}
            aria-label="Next slide"
          >
            <span className={styles.arrowBox} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
