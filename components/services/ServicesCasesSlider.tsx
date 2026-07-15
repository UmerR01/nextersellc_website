"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./ServicesCasesSlider.module.css";

type CaseCard = {
  href: string;
  bgGradient: string;
  imgRight: string;
  imgLeft: string;
  imgAlt: string;
  techStack: string;
  title: string;
  desc: string;
  tags: string[];
  logo?: string;
  logoAlt?: string;
};

const CASES: CaseCard[] = [
  {
    href: "/portfolio/dexai",
    bgGradient: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    imgRight: "/services-page/02_Frame-1787-1.png",
    imgLeft: "/services-page/02_Graphical-user-interface-for-robot-operation-2.png",
    imgAlt: "Screenshot Dexai",
    techStack: "Traditional tech stack",
    title: "Dexai Robotics: graphical user interface for robot operation",
    desc: "A GUI that freed Dexai Robotics' restaurant staff from engineer dependency — cutting robot setup time per shift by ~65% and reducing interaction errors by ~50% through real-time visual state monitoring and offline operation.",
    tags: ["IoT", "Startups"],
    logo: "/services-page/12_nika_logo.svg",
    logoAlt: "Nika logo",
  },
  {
    href: "/portfolio/ml-based-predictive-maintenance-for-wind-farm",
    bgGradient: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    imgRight: "/services-page/12_Cover-2-1.png",
    imgLeft: "/services-page/12_Cover-2-2.png",
    imgAlt: "IoT- and ML-based predictive wind farm maintenance",
    techStack: "AI-powered stack",
    title: "IoT and ML predictive maintenance for a 28-turbine wind farm",
    desc: "A German operator runs 28 onshore turbines. Nexterse LLC built a predictive maintenance layer on top of the existing SCADA. Within 12 months, unplanned downtime fell by 38%, and availability rose to 97.7%.",
    tags: ["IoT", "AI inside", "Enterprise"],
  },
  {
    href: "/portfolio/scalex-custom-erp-system-for-automotive-industry",
    bgGradient: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    imgRight: "/services-page/09_inbound_transportation_kanban_board011@2x.png",
    imgLeft: "/services-page/09_inbound_transportation_kanban_board011@2x.png",
    imgAlt: "Car selection dashboard",
    techStack: "Traditional tech stack",
    title: "Toyota custom ERP/CRM system",
    desc: "A custom ERP/CRM for Business Car Group — Russia's largest Toyota and Lexus dealer network — that replaced decade-old disjointed tools with a unified platform, cutting sales cycles by 30% across 20 dealer centers.",
    tags: ["Enterprise"],
  },
  {
    href: "/portfolio/advanced-structural-analysis-web-application",
    bgGradient: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    imgRight: "/services-page/10_Cover-1.png",
    imgLeft: "/services-page/10_Cover-2.png",
    imgAlt: "Dashboard of an Advanced Structural Analysis Web Application",
    techStack: "Traditional tech stack",
    title: "Advanced structural analysis web app for a leading steel distributor",
    desc: "Engineers complete structural analyses ~45% faster with a web platform that integrates the Client's Excel-based calculation logic, delivers real-time Shear, Deflection, and Moment visualization, and centralizes project records for geotechnical teams.",
    tags: ["Enterprise"],
  },
  {
    href: "/portfolio/ai-knowledge-base-development",
    bgGradient: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    imgRight: "/services-page/07_Cover-right-2.png",
    imgLeft: "/services-page/07_Cover-left-2.png",
    imgAlt: "Ethnoverse",
    techStack: "AI-powered stack",
    title: "AI-powered knowledge base for a global rights nonprofit",
    desc: "A Middle Eastern nonprofit working in cultural preservation needed a single searchable repository for fragmented research on ethnic minorities. Nexterse LLC built a multilingual AI platform that now indexes 12,000+ artifacts across 18 countries.",
    tags: ["AI inside", "Enterprise"],
  },
  {
    href: "/portfolio/media-buying-software-development",
    bgGradient: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    imgRight: "/services-page/01_Cover.png",
    imgLeft: "/services-page/01_Cover.png",
    imgAlt: "Media Buying Software Case Cover",
    techStack: "Traditional tech stack",
    title: "A media buying system for a leading US-based advertising agency",
    desc: "50x faster ad operations and data processing cut from hours to under a minute — we replaced a 20-year-old FileMaker system with a custom platform covering 100+ operational workflows.",
    tags: ["Enterprise"],
  },
  {
    href: "/portfolio/event-platform-development",
    bgGradient: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    imgRight: "/services-page/06_Cover-1.png",
    imgLeft: "/services-page/06_Cover-2.png",
    imgAlt: "Event platform for indie organizers",
    techStack: "Traditional tech stack",
    title: "Event platform for indie organizers across Europe",
    desc: "A platform for indie event organizers that drove 8,000+ ticket sales in four months, with 54% of attendees completing post-event feedback — replacing a 4–5 tool workflow with a single dashboard.",
    tags: ["Startups"],
  },
  {
    href: "/portfolio/ai-powered-predictive-maintenance-for-a-large-industrial-manufacturer",
    bgGradient: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    imgRight: "/services-page/11_Cover-1-1.png",
    imgLeft: "/services-page/11_Cover-1-2.png",
    imgAlt: "Predictive maintenance case",
    techStack: "AI-powered stack",
    title: "AI-powered predictive maintenance for a large industrial manufacturer",
    desc: "An AIoT upgrade that cut unplanned downtime by 50% within 8 months, adding explainable ML and context analysis to the existing IoT platform.",
    tags: ["IoT", "AI inside", "Enterprise"],
  },
];

export default function ServicesCasesSlider() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const count = CASES.length;

  const go = (dir: -1 | 1) => setActive((i) => (i + dir + count) % count);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0]?.clientX ?? null; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dist = touchStartX.current - (e.changedTouches[0]?.clientX ?? 0);
    touchStartX.current = null;
    if (Math.abs(dist) >= 50) go(dist > 0 ? 1 : -1);
  };

  const card = CASES[active];

  return (
    <section id="svc-cases" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Our recent <span className={styles.accent}>works</span>
        </h2>

        <div
          className={styles.slider}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <a
            href={card.href}
            className={styles.card}
            style={{ background: card.bgGradient }}
          >
            <div className={styles.cardContent}>
              {card.logo && (
                <div className={styles.cardLogoWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.logo} alt={card.logoAlt ?? ""} className={styles.cardLogo} />
                </div>
              )}
              <div className={styles.cardTech}>{card.techStack}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <div className={styles.cardTags}>
                {card.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
            <div className={styles.cardImages}>
              <div className={styles.cardImageRight}>
                <Image src={card.imgRight} alt={card.imgAlt} fill className={styles.caseImg} sizes="40vw" />
              </div>
              <div className={styles.cardImageLeft}>
                <Image src={card.imgLeft} alt={card.imgAlt} fill className={styles.caseImg} sizes="40vw" />
              </div>
            </div>
          </a>

          <div className={styles.navRow}>
            <div className={styles.pagination}>
              {CASES.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to case ${i + 1}`}
                />
              ))}
            </div>
            <a href="/portfolio" className={styles.allLink}>
              View our case studies
              <span className={styles.allArrow} aria-hidden="true" />
            </a>
            <div className={styles.navButtons}>
              <button className={styles.navBtn} onClick={() => go(-1)} aria-label="Previous case">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className={styles.navBtn} onClick={() => go(1)} aria-label="Next case">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
