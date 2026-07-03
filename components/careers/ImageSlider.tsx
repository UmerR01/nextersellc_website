"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "swiper/css";
import styles from "./ImageSlider.module.css";

const PHOTOS = [
  { src: "/careers/01_careers-photo-1.jpg", alt: "Nexterse LLC team photo 1" },
  { src: "/careers/01_careers-photo-2.jpg", alt: "Nexterse LLC team photo 2" },
  { src: "/careers/01_careers-photo-3.jpg", alt: "Nexterse LLC team photo 3" },
  { src: "/careers/01_careers-photo-4.jpg", alt: "Nexterse LLC team photo 4" },
  { src: "/careers/01_careers-photo-5.jpg", alt: "Nexterse LLC team photo 5" },
  { src: "/careers/01_careers-photo-6.jpg", alt: "Nexterse LLC team photo 6" },
  { src: "/careers/01_careers-photo-7.jpg", alt: "Nexterse LLC team photo 7" },
  { src: "/careers/01_careers-photo-8.jpg", alt: "Nexterse LLC team photo 8" },
  { src: "/careers/01_careers-photo-9.jpg", alt: "Nexterse LLC team photo 9" },
  { src: "/careers/01_careers-photo-10.jpg", alt: "Nexterse LLC team photo 10" },
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
