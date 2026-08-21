"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "swiper/css";
import styles from "./OfficePhotos.module.css";

const PHOTOS = [
  { src: "/team/about-team1.jpg", alt: "Nexterse LLC team" },
  { src: "/team/about-office.jpg", alt: "Nexterse LLC office" },
  { src: "/team/about-team2.jpg", alt: "Nexterse LLC team" },
  { src: "/team/about-laptop.jpg", alt: "Nexterse LLC workspace" },
  { src: "/team/about-team3.jpg", alt: "Nexterse LLC team" },
  { src: "/team/about-office2.jpg", alt: "Nexterse LLC office space" },
  { src: "/team/about-team4.jpg", alt: "Nexterse LLC team" },
  { src: "/team/about-laptop2.jpg", alt: "Nexterse LLC workspace" },
  { src: "/team/about-team5.jpg", alt: "Nexterse LLC team" },
];

export default function OfficePhotos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let instance: { destroy: () => void } | null = null;
    let cancelled = false;

    Promise.all([import("swiper"), import("swiper/modules")]).then(
      ([{ default: Swiper }, { Autoplay, FreeMode }]) => {
        if (cancelled) return;
        const slider = section.querySelector<HTMLElement>(".office-photo-swiper");
        if (!slider) return;
        instance = new Swiper(slider, {
          modules: [Autoplay, FreeMode],
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 20,
          loop: true,
          speed: 8000,
          allowTouchMove: false,
          freeMode: true,
          autoplay: { delay: 0, disableOnInteraction: false },
          breakpoints: {
            320: { slidesPerView: 1.35, spaceBetween: 16 },
            768: { slidesPerView: 2.25, spaceBetween: 20 },
            1025: { slidesPerView: 3, spaceBetween: 20 },
          },
        });
      }
    );

    return () => {
      cancelled = true;
      instance?.destroy();
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`swiper office-photo-swiper ${styles.swiper}`}>
        <div className="swiper-wrapper">
          {PHOTOS.map((photo, idx) => (
            <div className={`swiper-slide ${styles.slide}`} key={idx}>
              <div className={styles.imageWrap}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1504}
                  height={600}
                  className={styles.slideImg}
                  priority={idx === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
