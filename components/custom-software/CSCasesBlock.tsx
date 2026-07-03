"use client";
import { useState } from "react";
import styles from "./CSCasesBlock.module.css";

const CASES = [
  {
    href: "/portfolio/ai-ml-route-optimization",
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    tech: "AI-powered stack",
    title: "AI/ML route optimization for a freight delivery service",
    desc: "Lifted on-time delivery to 98% – without expanding the fleet. An AI/ML platform that plans and reoptimizes B2B/B2C routes in real time with traffic, weather, and capacity constraints, cutting last-mile costs by 22%.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/custom-software/10_Cover-1-1.png",
    imgLeft: "/custom-software/10_Cover-1-2.png",
  },
  {
    href: "/portfolio/smart-integration",
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    tech: "Traditional tech stack",
    title: "Hotel management system that cut guest check-in time by 35%",
    desc: "SaaS hotel management platform for a Saudi HoReCa operator – centralizing property, rate, and guest data across multiple hotels, with automated night audit and a 60% reduction in overnight processing time.",
    tags: ["Startups"],
    imgRight: "/custom-software/02_Smart-Int-Perspl.png",
    imgLeft: "/custom-software/02_Smart-Int-Perspr.png",
  },
  {
    href: "/portfolio/tl-nika",
    bg: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    tech: "Traditional tech stack",
    title: "Transportation management system",
    desc: "A comprehensive solution for companies operating in the logistics industry, covering all the major aspects of transport and cargo management.",
    tags: ["Enterprise"],
    imgRight: "/custom-software/02_TLNIKA5-1.png",
    imgLeft: "/custom-software/02_TLNIKA5-1.png",
  },
  {
    href: "/portfolio/media-buying-software-development",
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    tech: "Traditional tech stack",
    title: "A media buying system for a leading US-based advertising agency",
    desc: "50x faster ad operations and data processing cut from hours to under a minute – we replaced a 20-year-old FileMaker system with a custom platform covering 100+ operational workflows.",
    tags: ["Enterprise"],
    imgRight: "/custom-software/01_Cover.png",
    imgLeft: "/custom-software/01_Cover.png",
  },
  {
    href: "/portfolio/advanced-structural-analysis-web-application",
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    tech: "Traditional tech stack",
    title: "Advanced structural analysis web app for a leading steel distributor",
    desc: "Engineers complete structural analyses ~45% faster with a web platform that integrates the Client's Excel-based calculation logic, delivers real-time Shear, Deflection, and Moment visualization, and centralizes project records for geotechnical teams.",
    tags: ["Enterprise"],
    imgRight: "/custom-software/10_Cover-1.png",
    imgLeft: "/custom-software/10_Cover-2.png",
  },
];

export default function CSCasesBlock() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? CASES.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === CASES.length - 1 ? 0 : c + 1));

  const c = CASES[current];

  return (
    <section id="cs-cases" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Our recent <span className={styles.blue}>works</span>
        </h2>
        <div className={styles.sliderWrapper}>
          <a href={c.href} className={styles.card} style={{ background: c.bg }}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardContent}>
                <div className={styles.tech}>
                  <span>{c.tech}</span>
                </div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
                <div className={styles.tags}>
                  {c.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
              <div className={styles.cardImages}>
                <div className={styles.imgRight}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.imgRight} alt={c.title} loading="lazy" />
                </div>
                <div className={styles.imgLeft}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.imgLeft} alt={c.title} loading="lazy" />
                </div>
              </div>
            </div>
          </a>
          <div className={styles.sliderNav}>
            <button className={styles.navPrev} onClick={prev} aria-label="Previous case" />
            <button className={styles.navNext} onClick={next} aria-label="Next case" />
          </div>
        </div>
        <div className={styles.pagination}>
          <div className={styles.dots}>
            {CASES.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to case ${i + 1}`}
              />
            ))}
          </div>
          <a href="/portfolio" className={styles.allLink}>
            All projects
            <span className={styles.allLinkArrow} />
          </a>
        </div>
      </div>
    </section>
  );
}
