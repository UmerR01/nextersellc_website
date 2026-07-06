"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./CSCasesBlock.module.css";

type CaseCard = {
  href: string;
  banner: string;
  maskColor: string;
  name: string;
  title: string;
  text: string;
  tags: string[];
};

const CASES: CaseCard[] = [
  {
    href: "/portfolio/ai-ml-route-optimization",
    banner: "/custom-software/10_Cover-1-1.png",
    maskColor: "rgba(120,0,19,0.72)",
    name: "AI-powered stack",
    title: "AI/ML route optimization for a freight delivery service",
    text: "Lifted on-time delivery to 98% – without expanding the fleet. An AI/ML platform that plans and reoptimizes B2B/B2C routes in real time with traffic, weather, and capacity constraints, cutting last-mile costs by 22%.",
    tags: ["AI inside", "Enterprise", "Route optimization", "Real-time replan", "Cost reduction", "B2B/B2C"],
  },
  {
    href: "/portfolio/smart-integration",
    banner: "/custom-software/02_Smart-Int-Perspl.png",
    maskColor: "rgba(2,16,44,0.78)",
    name: "Traditional tech stack",
    title: "Hotel management system that cut guest check-in time by 35%",
    text: "SaaS hotel management platform for a Saudi HoReCa operator – centralizing property, rate, and guest data across multiple hotels, with automated night audit and a 60% reduction in overnight processing time.",
    tags: ["SaaS", "Startups", "Hospitality", "Multi-property", "Automation", "Night audit"],
  },
  {
    href: "/portfolio/tl-nika",
    banner: "/custom-software/02_TLNIKA5-1.png",
    maskColor: "rgba(54,24,95,0.76)",
    name: "Traditional tech stack",
    title: "Transportation management system",
    text: "A comprehensive solution for companies operating in the logistics industry, covering all the major aspects of transport and cargo management.",
    tags: ["Enterprise", "Logistics", "Cargo", "Fleet management", "Operations", "TMS"],
  },
  {
    href: "/portfolio/media-buying-software-development",
    banner: "/custom-software/01_Cover.png",
    maskColor: "rgba(120,0,19,0.72)",
    name: "Traditional tech stack",
    title: "A media buying system for a leading US-based advertising agency",
    text: "50× faster ad operations and data processing cut from hours to under a minute – we replaced a 20-year-old FileMaker system with a custom platform covering 100+ operational workflows.",
    tags: ["Enterprise", "AdTech", "100+ workflows", "Legacy modernization", "50× faster", "Media buying"],
  },
  {
    href: "/portfolio/advanced-structural-analysis-web-application",
    banner: "/custom-software/10_Cover-1.png",
    maskColor: "rgba(2,16,44,0.78)",
    name: "Traditional tech stack",
    title: "Advanced structural analysis web app for a leading steel distributor",
    text: "Engineers complete structural analyses ~45% faster with a web platform that integrates the Client's Excel-based calculation logic and delivers real-time Shear, Deflection, and Moment visualization.",
    tags: ["Enterprise", "Engineering", "45% faster", "Real-time viz", "Web platform", "Steel industry"],
  },
];

export default function CSCasesBlock() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<-1 | 0 | 1>(0);
  const touchStartX = useRef<number | null>(null);
  const count = CASES.length;

  const go = (dir: -1 | 1) => {
    setDirection(dir);
    setActive((i) => (i + dir + count) % count);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dist = touchStartX.current - (e.changedTouches[0]?.clientX ?? 0);
    touchStartX.current = null;
    if (Math.abs(dist) >= 50) go(dist > 0 ? 1 : -1);
  };

  return (
    <section id="cs-cases" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>
          Our recent <span>case studies</span>
        </h2>

        <div
          className={styles.cards}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-label="Case studies carousel"
        >
          {CASES.map((card, i) => (
            <article
              key={card.href}
              className={`${styles.card} ${i === active ? styles.active : ""} ${
                i === active && direction === 1 ? styles.slideNext :
                i === active && direction === -1 ? styles.slidePrev : ""
              } ${i === (active + 1) % count ? styles.tabletNext : ""}`}
              onClick={() => { if (i !== active) { setDirection(1); setActive(i); } }}
            >
              <Image
                src={card.banner}
                alt={card.title}
                fill
                sizes="(max-width:767px) 100vw, 60vw"
                className={styles.banner}
              />
              <div
                className={styles.mask}
                style={{ "--mask-color": card.maskColor } as React.CSSProperties}
              />

              <div className={styles.name}>{card.name}</div>

              <div className={styles.body}>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.text}>{card.text}</p>
                <a href={card.href} className={styles.viewMore} onClick={(e) => e.stopPropagation()}>
                  View case <span aria-hidden>↗</span>
                </a>
              </div>

              <div className={styles.meta}>
                <ul className={styles.tags}>
                  {card.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className={styles.nav}>
                  <button aria-label="Previous case" onClick={(e) => { e.stopPropagation(); go(-1); }}>←</button>
                  <button aria-label="Next case" onClick={(e) => { e.stopPropagation(); go(1); }}>→</button>
                </div>
              </div>

              <span className={styles.arrow} aria-hidden>↗</span>
            </article>
          ))}
        </div>

        <div className={styles.allRow}>
          <a href="/portfolio" className={styles.allLink}>
            All projects
            <span className={styles.allLinkArrow} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
