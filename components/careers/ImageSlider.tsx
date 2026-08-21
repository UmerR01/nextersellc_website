"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "swiper/css";
import styles from "./ImageSlider.module.css";

const PHOTOS = [
  { src: "/careers/about-office.jpg", alt: "Nexterse LLC office" },
  { src: "/careers/about-team1.jpg", alt: "Nexterse LLC team photo" },
  { src: "/careers/about-laptop.jpg", alt: "Nexterse LLC workspace" },
  { src: "/careers/about-team2.jpg", alt: "Nexterse LLC team photo" },
  { src: "/careers/about-office2.jpg", alt: "Nexterse LLC office space" },
  { src: "/careers/about-team3.jpg", alt: "Nexterse LLC team photo" },
  { src: "/careers/about-laptop2.jpg", alt: "Nexterse LLC workspace" },
  { src: "/careers/about-team4.jpg", alt: "Nexterse LLC team photo" },
  { src: "/careers/about-team5.jpg", alt: "Nexterse LLC team photo" },
];

export default function ImageSlider() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let swiperInstance: { destroy: () => void } | null = null;
    let cancelled = false;

    Promise.all([import("swiper"), import("swiper/modules")])
        .then(([{ default: Swiper }, { Autoplay, FreeMode }]) => {
          if (cancelled) return;
          const slider = section.querySelector<HTMLElement>(".careers-img-swiper");
          if (!slider) return;
          swiperInstance = new Swiper(
            slider,
            {
              modules: [Autoplay, FreeMode],
              slidesPerView: 3,
              centeredSlides: true,
              centerInsufficientSlides: true,
              spaceBetween: 20,
              loop: true,
              speed: 8000,
              allowTouchMove: false,
              autoplay: {
                disableOnInteraction: false,
                delay: 0,
              },
              breakpoints: {
                320: {
                  slidesPerView: 1.35,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2.25,
                  spaceBetween: 20,
                },
                1025: {
                  slidesPerView: 3,
                },
              },
            }
          );
        });

    return () => {
      cancelled = true;
      swiperInstance?.destroy();
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`swiper careers-img-swiper ${styles.swiperContainer}`}>
        <div className="swiper-wrapper">
          {PHOTOS.map((photo, i) => (
            <div key={i} className={`swiper-slide ${styles.slide}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={560}
                height={373}
                className={styles.slideImg}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
