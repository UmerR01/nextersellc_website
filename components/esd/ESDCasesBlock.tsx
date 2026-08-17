"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import styles from "./ESDCasesBlock.module.css";

const CASES = [
  {
    href: "#",
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    tech: "AI-powered stack",
    title: "AI/ML route optimization for a freight delivery service",
    desc: "Lifted on-time delivery to 98% – without expanding the fleet. An AI/ML platform that plans and reoptimizes B2B/B2C routes in real time with traffic, weather, and capacity constraints, cutting last-mile costs by 22%.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/esd/10_Cover-1-1.png",
    imgLeft: "/esd/10_Cover-1-2.png",
  },
  {
    href: "#",
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    tech: "AI-powered stack",
    title: "AI patient-flow platform for dental imaging",
    desc: "A HIPAA-aligned AI platform for a dental imaging provider that reduced wait times by 37%, increased daily throughput by 22%, and lowered no-shows by 29%.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/esd/10_Cover-2-1.png",
    imgLeft: "/esd/10_Cover-2-1-1.png",
  },
  {
    href: "#",
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    tech: "Traditional tech stack",
    title: "Toyota custom ERP/CRM system",
    desc: "A custom ERP/CRM for Business Car Group – Russia's largest Toyota and Lexus dealer network – that replaced decade-old disjointed tools with a unified platform, cutting sales cycles by 30% across 20 dealer centers.",
    tags: ["Enterprise"],
    imgRight: "/esd/09_inbound_transportation_kanban_board011@2x.png",
    imgLeft: "/esd/09_inbound_transportation_kanban_board011@2x.png",
  },
  {
    href: "#",
    bg: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    tech: "AI-powered stack",
    title: "AI-powered predictive maintenance for a large industrial manufacturer",
    desc: "An AI upgrade that cut unplanned downtime by 50% within 8 months, adding explainable ML and context analysis to the existing monitoring platform.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/esd/11_Cover-1-1.png",
    imgLeft: "/esd/11_Cover-1-2.png",
  },
  {
    href: "#",
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    tech: "AI-powered stack",
    title: "AI-powered predictive maintenance for a 28-turbine wind farm",
    desc: "A German operator runs 28 onshore turbines. Nexterse LLC built a predictive maintenance layer on top of the existing SCADA. Within 12 months, unplanned downtime fell by 38%, and availability rose to 97.7%.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/esd/12_Cover-2-1.png",
    imgLeft: "/esd/12_Cover-2-2.png",
  },
  {
    href: "#",
    bg: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    tech: "Traditional tech stack",
    title: "Cost management platform development",
    desc: "An equipment charge rate calculation platform that delivered a production-ready MVP within 8 months, validating the business model and enabling the next investor round for a US construction company.",
    tags: ["Enterprise"],
    imgRight: "/esd/04_91374-2.png",
    imgLeft: "/esd/04_91374-2.png",
  },
];

export default function ESDCasesBlock() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="recent-works" className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Recent <span className={styles.accent}>works</span>
        </h2>
        <div className={styles.sliderWrap}>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            loop
            onSwiper={(sw) => {
              swiperRef.current = sw;
            }}
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
            {CASES.map((c, i) => (
              <SwiperSlide key={i} className={styles.slide}>
                <a href={c.href} className={styles.card} style={{ background: c.bg }}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardContent}>
                      <div className={styles.techBadge}>{c.tech}</div>
                      <h3 className={styles.cardTitle}>{c.title}</h3>
                      <p className={styles.cardDesc}>{c.desc}</p>
                      <div className={styles.tags}>
                        {c.tags.map((t) => (
                          <span key={t} className={styles.tag}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.cardImages}>
                      <div className={styles.cardImgRight}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={c.imgRight} alt={c.title} loading="lazy" />
                      </div>
                      <div className={styles.cardImgLeft}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={c.imgLeft} alt={c.title} loading="lazy" />
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.navigation}>
          <div ref={prevRef} className={styles.navBtn} onClick={() => swiperRef.current?.slidePrev()} />
          <div ref={nextRef} className={styles.navBtn} onClick={() => swiperRef.current?.slideNext()} />
        </div>
        <div className={styles.footer}>
          <a href="#" className={styles.allLink}>
            Review all case studies
            <span className={styles.linkArrow} />
          </a>
        </div>
      </div>
    </section>
  );
}
