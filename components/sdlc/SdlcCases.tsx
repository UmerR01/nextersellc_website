"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./SdlcCases.module.css";

const cases = [
  {
    href: "https://sumatosoft.com/portfolio/dexai",
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    logo: { src: "/sdlc/12_nika_logo.svg", alt: "Nika logo", width: 135, height: 58 },
    tech: "Traditional tech stack",
    title: "Dexai Robotics: graphical user interface for robot operation",
    desc: "A GUI that freed Dexai Robotics' restaurant staff from engineer dependency – cutting robot setup time per shift by ~65% and reducing interaction errors by ~50% through real-time visual state monitoring and offline operation.",
    tags: ["Startups"],
    imgRight: { src: "/sdlc/02_Frame-1787-1.png", alt: "Screenshot Dexai", width: 644, height: 442 },
    imgLeft: { src: "/sdlc/02_Graphical-user-interface-for-robot-operation-2.png", alt: "Screenshot Dexai", width: 1392, height: 980 },
  },
  {
    href: "https://sumatosoft.com/portfolio/fridge-sensors",
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    tech: "Traditional tech stack",
    title: "Fridge sensors – smart monitoring application development",
    desc: "A smart monitoring platform for HoReCa venues that reduced refrigerator-related food spoilage by ~25% and cut emergency maintenance calls by ~40% through real-time anomaly detection and HACCP-compliant automated temperature logging.",
    tags: ["AI inside"],
    imgRight: { src: "/sdlc/02_fridge-sensors-home-page-perspective-1.png", alt: "Fridge Sensors", width: 696, height: 596 },
    imgLeft: { src: "/sdlc/02_fridge-sensors-home-page-perspectiver-1.png", alt: "Fridge Sensors", width: 696, height: 596 },
  },
  {
    href: "https://sumatosoft.com/portfolio/tartle-big-data-trading-platform",
    bg: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    tech: "Traditional tech stack",
    title: "Tartle – big data trading platform that cut transaction costs by 35%",
    desc: "Blockchain marketplace enabling anonymous peer-to-peer big data trading – 40% faster deal closure and direct buyer-seller connections without intermediaries, for a US-based big data startup",
    tags: ["Startups"],
    imgRight: { src: "/sdlc/02_tartle-dashboard-screenshot-1.png", alt: "Tartle Dashboard", width: 696, height: 596 },
    imgLeft: { src: "/sdlc/02_Frame-tartle-dashboard-screenshotr.png", alt: "Tartle Dashboard", width: 696, height: 596 },
  },
  {
    href: "https://sumatosoft.com/portfolio/ai-ml-route-optimization-for-a-freight-delivery-service",
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    tech: "AI-powered stack",
    title: "AI/ML route optimization for a freight delivery service",
    desc: "Lifted on-time delivery to 98% – without expanding the fleet. An AI/ML platform that plans and reoptimizes B2B/B2C routes in real time with traffic, weather, and capacity constraints, cutting last-mile costs by 22%.",
    tags: ["AI inside", "Enterprise"],
    imgRight: { src: "/sdlc/10_Cover-1-1.png", alt: "AI/ML route optimization", width: 1392, height: 980 },
    imgLeft: { src: "/sdlc/10_Cover-1-2.png", alt: "AI/ML route optimization", width: 1392, height: 980 },
  },
  {
    href: "https://sumatosoft.com/portfolio/ai-readiness-assessment-for-insurance-company",
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    tech: "AI-powered stack",
    title: "AI readiness assessment for an insurance company",
    desc: "An AI readiness assessment for a European insurance group that identified up to 35% projected cost reduction in claims processing, with two use cases launched in a pilot across three business units.",
    tags: ["AI inside", "Enterprise"],
    imgRight: { src: "/sdlc/04_Cover-right-1-1.png", alt: "AI readiness assessment", width: 696, height: 490 },
    imgLeft: { src: "/sdlc/04_Cover-1-1.png", alt: "AI readiness assessment", width: 1400, height: 960 },
  },
  {
    href: "https://sumatosoft.com/portfolio/ai-powered-predictive-maintenance-for-a-large-industrial-manufacturer",
    bg: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    tech: "AI-powered stack",
    title: "AI-powered predictive maintenance for a large industrial manufacturer",
    desc: "An AI upgrade that cut unplanned downtime by 50% within 8 months, adding explainable ML and context analysis to the existing monitoring platform.",
    tags: ["AI inside", "Enterprise"],
    imgRight: { src: "/sdlc/11_Cover-1-1.png", alt: "Predictive maintenance", width: 696, height: 490 },
    imgLeft: { src: "/sdlc/11_Cover-1-2.png", alt: "Predictive maintenance", width: 696, height: 490 },
  },
];

export default function SdlcCases() {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          SDLC <span className={styles.accent}>in practice</span>: selected projects
        </h2>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop
          className={styles.swiper}
        >
          {cases.map((c, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <a
                href={c.href}
                className={styles.card}
                style={{ background: c.bg }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.cardWrapper}>
                  <div className={styles.cardContent}>
                    {c.logo && (
                      <div className={styles.logoWrap}>
                        <Image src={c.logo.src} alt={c.logo.alt} width={c.logo.width} height={c.logo.height} className={styles.logo} />
                      </div>
                    )}
                    <div className={styles.techBadge}>{c.tech}</div>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <p className={styles.cardDesc}>{c.desc}</p>
                    <div className={styles.tags}>
                      {c.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.cardImages}>
                    <div className={styles.imgRight}>
                      <Image src={c.imgRight.src} alt={c.imgRight.alt} width={c.imgRight.width} height={c.imgRight.height} />
                    </div>
                    <div className={styles.imgLeft}>
                      <Image src={c.imgLeft.src} alt={c.imgLeft.alt} width={c.imgLeft.width} height={c.imgLeft.height} />
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.nav}>
          <button
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            aria-label="Previous case"
            type="button"
          />
          <button
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={() => swiperRef.current?.swiper.slideNext()}
            aria-label="Next case"
            type="button"
          />
        </div>
        <div className={styles.viewAll}>
          <a href="/cases" className={styles.viewAllLink}>
            View all cases
            <span className={styles.arrow}>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.94319e-08 8.59L3.59 5L-3.53625e-07 1.41L1 0.5L5.5 5L1 9.5L7.94319e-08 8.59Z" fill="currentColor"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
