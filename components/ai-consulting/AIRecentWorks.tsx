"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./AIRecentWorks.module.css";

const CASES = [
  {
    bg: "linear-gradient(280deg, #780013 -2%, #B31E35 76%)",
    tech: "AI-powered stack",
    title: "AI-powered predictive maintenance for a large industrial manufacturer",
    desc: "An AIoT upgrade that cut unplanned downtime by 50% within 8 months, adding explainable ML and context analysis to the existing IoT platform.",
    tags: ["IoT", "AI inside", "Enterprise"],
    imgRight: "/ai-consulting/imgs/11_Cover-1-1.png",
    imgLeft: "/ai-consulting/imgs/11_Cover-1-2.png",
  },
  {
    bg: "linear-gradient(259deg, #02102C -0.5%, #112244 100%)",
    tech: "AI-powered stack",
    title: "AI/ML route optimization for a freight delivery service",
    desc: "Lifted on-time delivery to 98% — without expanding the fleet. An AI/ML platform that plans and reoptimizes B2B/B2C routes in real time, cutting last-mile costs by 22%.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/ai-consulting/imgs/10_Cover-1-1.png",
    imgLeft: "/ai-consulting/imgs/10_Cover-1-2.png",
  },
  {
    bg: "linear-gradient(281deg, #36185F 2.5%, #7349AC 72%)",
    tech: "AI-powered stack",
    title: "AI-powered knowledge base for a global rights nonprofit",
    desc: "A Middle Eastern nonprofit needed a single searchable repository for fragmented research. SumatoSoft built a multilingual AI platform that now indexes 12,000+ artifacts across 18 countries.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/ai-consulting/imgs/07_Cover-right-2.png",
    imgLeft: "/ai-consulting/imgs/07_Cover-left-2.png",
  },
  {
    bg: "linear-gradient(259deg, #02102C -0.5%, #112244 100%)",
    tech: "AI-powered stack",
    title: "IoT and ML predictive maintenance for a 28-turbine wind farm",
    desc: "A German operator runs 28 onshore turbines. We built a predictive maintenance layer on top of the existing SCADA. Within 12 months, unplanned downtime fell by 38%, and availability rose to 97.7%.",
    tags: ["IoT", "AI inside", "Enterprise"],
    imgRight: "/ai-consulting/imgs/12_Cover-2-1.png",
    imgLeft: "/ai-consulting/imgs/12_Cover-2-2.png",
  },
];

export default function AIRecentWorks() {
  const [active, setActive] = useState(0);
  const n = CASES.length;
  const go = (dir: number) => setActive((i) => (i + dir + n) % n);
  const c = CASES[active];

  return (
    <section className={styles.section} id="recent-cases">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Our recent AI <span>works</span>
          </h2>
          <div className={styles.nav}>
            <button className={styles.navBtn} aria-label="Previous" onClick={() => go(-1)}>←</button>
            <button className={styles.navBtn} aria-label="Next" onClick={() => go(1)}>→</button>
          </div>
        </div>

        <div className={styles.card} style={{ background: c.bg }}>
          <div className={styles.cardContent}>
            <div className={styles.tech}>{c.tech}</div>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardDesc}>{c.desc}</p>
            <div className={styles.tags}>
              {c.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </div>
          <div className={styles.cardImages}>
            <div className={styles.imgRight}>
              <Image src={c.imgRight} alt={c.title} fill sizes="280px" style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.imgLeft}>
              <Image src={c.imgLeft} alt="" fill sizes="280px" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>

        <div className={styles.dots}>
          {CASES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              aria-label={`Case ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
          <a href="#contact" className={styles.allLink}>
            Consulting led to these projects →
          </a>
        </div>
      </div>
    </section>
  );
}
