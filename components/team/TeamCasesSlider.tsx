"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./TeamCasesSlider.module.css";

interface CaseItem {
  bg: string;
  logo?: string;
  tech: string;
  title: string;
  desc: string;
  tags: string[];
  imgRight: string;
  imgLeft: string;
}

const CASES: CaseItem[] = [
  {
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    tech: "AI-powered stack",
    title: "AI readiness assessment for an insurance company",
    desc: "An AI readiness assessment for a European insurance group that identified up to 35% projected cost reduction in claims processing, with two use cases launched in a pilot across three business units.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/team/04_Cover-right-1-1.png",
    imgLeft: "/team/04_Cover-1-1.png",
  },
  {
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    logo: "/team/12_nika_logo.svg",
    tech: "Traditional tech stack",
    title: "Dexai Robotics: graphical user interface for robot operation",
    desc: "A GUI that freed Dexai Robotics' restaurant staff from engineer dependency – cutting robot setup time per shift by ~65% and reducing interaction errors by ~50%.",
    tags: ["Startups"],
    imgRight: "/team/02_Frame-1787-1.png",
    imgLeft: "/team/02_Graphical-user-interface-for-robot-operation-2.png",
  },
  {
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    tech: "Traditional tech stack",
    title: "Toyota: Scalex custom ERP system for automotive industry",
    desc: "A complete ERP/CRM solution for Toyota's regional distributor that reduced manual processing time by ~45% and improved inventory accuracy to 98% across 12 dealership locations.",
    tags: ["Enterprise"],
    imgRight: "/team/09_inbound_transportation_kanban_board011@2x.png",
    imgLeft: "/team/09_inbound_transportation_kanban_board011@2x.png",
  },
  {
    bg: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    tech: "Traditional tech stack",
    title: "Media buying system for digital advertising platform",
    desc: "A programmatic media buying platform that increased campaign efficiency by 40% and reduced media waste by 28% for a US-based digital advertising company.",
    tags: ["Enterprise"],
    imgRight: "/team/01_Cover.png",
    imgLeft: "/team/01_Cover.png",
  },
  {
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    tech: "AI-powered stack",
    title: "AI predictive maintenance for industrial equipment",
    desc: "An AI-powered predictive maintenance system that reduced equipment downtime by 62% and cut unplanned maintenance costs by 45% for a European manufacturing enterprise.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/team/11_Cover-1-1.png",
    imgLeft: "/team/11_Cover-1-2.png",
  },
  {
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    tech: "Traditional tech stack",
    title: "Event management platform for corporate networking",
    desc: "A scalable event management and networking platform that helped 500+ corporate events run smoothly, increasing attendee engagement by 38%.",
    tags: ["Startups"],
    imgRight: "/team/06_Cover-1.png",
    imgLeft: "/team/06_Cover-2.png",
  },
  {
    bg: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    tech: "AI-powered stack",
    title: "Wind farm ML optimization system",
    desc: "A machine learning system for wind farm energy output optimization that increased energy yield by 8.5% and reduced operational costs by 22% across a 120-turbine wind park.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/team/12_Cover-2-1.png",
    imgLeft: "/team/12_Cover-2-2.png",
  },
  {
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    tech: "Traditional tech stack",
    title: "Structural analysis software for engineering firm",
    desc: "Custom structural analysis software that reduced design iteration cycles by 55% and improved calculation accuracy for a leading European civil engineering consultancy.",
    tags: ["Enterprise"],
    imgRight: "/team/10_Cover-1.png",
    imgLeft: "/team/10_Cover-2.png",
  },
];

export default function TeamCasesSlider() {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Our delivered <span className={styles.blue}>projects</span>
        </h2>
      </div>

      <div className={styles.sliderWrapper}>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          speed={600}
          pagination={{
            el: `.${styles.paginationDots}`,
            type: "bullets",
            clickable: true,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bulletActive,
          }}
          className={styles.swiper}
        >
          {CASES.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.card} style={{ background: item.bg }}>
                <div className={styles.cardWrapper}>
                  {/* Left content */}
                  <div className={styles.cardContent}>
                    {item.logo && (
                      <Image
                        src={item.logo}
                        alt="Case logo"
                        width={150}
                        height={48}
                        className={styles.logo}
                      />
                    )}
                    <span className={styles.techBadge}>{item.tech}</span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                    <div className={styles.tags}>
                      {item.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right images */}
                  <div className={styles.cardImages}>
                    <div className={styles.imgRight}>
                      <Image
                        src={item.imgRight}
                        alt={item.title}
                        width={800}
                        height={480}
                        className={styles.caseImg}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay navigation buttons */}
        <button
          className={`${styles.navOverlay} ${styles.navOverlayPrev}`}
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          aria-label="Previous case"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className={`${styles.navOverlay} ${styles.navOverlayNext}`}
          onClick={() => swiperRef.current?.swiper.slideNext()}
          aria-label="Next case"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Pagination row */}
      <div className={styles.container}>
        <div className={styles.pagination}>
          <div className={styles.paginationDots} />
          <Link href="/projects" className={styles.paginationLink}>
            View our delivered projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 6, verticalAlign: "middle" }}>
              <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.66663 4L12.6666 8L8.66663 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
