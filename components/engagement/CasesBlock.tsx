"use client";
import { useState } from "react";
import styles from "./CasesBlock.module.css";

const CASES = [
  {
    href: "/portfolio/dexai",
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    logo: "/engagement/12_nika_logo.svg",
    logoAlt: "Nika logo",
    tech: "Traditional tech stack",
    title: "Dexai Robotics: graphical user interface for robot operation",
    desc: "A GUI that freed Dexai Robotics' restaurant staff from engineer dependency – cutting robot setup time per shift by ~65% and reducing interaction errors by ~50% through real-time visual state monitoring and offline operation.",
    tags: ["IoT", "Startups"],
    imgRight: "/engagement/02_Frame-1787-1.png",
    imgRightAlt: "Screenshot Dexai",
    imgLeft: "/engagement/02_Graphical-user-interface-for-robot-operation-2.png",
    imgLeftAlt: "Screenshot Dexai",
  },
  {
    href: "/portfolio/ai-integration-fintech",
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    logo: null,
    logoAlt: "",
    tech: "AI-powered stack",
    title: "AI integration of anti-fraud and underwriting for a fintech firm",
    desc: "A fintech company needed to integrate AI scoring into its application and transaction workflow. Nexterse LLC linked risk sources, a feature store, and a decision engine to speed up decisions and improve the quality of anti-fraud controls.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/engagement/05_tablet-cover-right.png",
    imgRightAlt: "tablet-cover-right",
    imgLeft: "/engagement/05_tablet-cover-left.png",
    imgLeftAlt: "tablet-cover-left",
  },
  {
    href: "/portfolio/ai-readiness-assessment-for-insurance-company",
    bg: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    logo: null,
    logoAlt: "",
    tech: "AI-powered stack",
    title: "AI readiness assessment for an insurance company",
    desc: "An AI readiness assessment for a European insurance group that identified up to 35% projected cost reduction in claims processing, with two use cases launched in a pilot across three business units.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/engagement/04_Cover-right-1-1.png",
    imgRightAlt: "Insurance AI cover",
    imgLeft: "/engagement/04_Cover-1-1.png",
    imgLeftAlt: "Insurance AI cover",
  },
  {
    href: "/portfolio/rag-based-knowledge-platform",
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    logo: null,
    logoAlt: "",
    tech: "AI-powered stack",
    title: "RAG-based knowledge platform for a commercial real estate operator",
    desc: "An internal RAG platform that cut operational retrieval time by 45% across 18 commercial properties. It unifies lease, vendor, maintenance, and compliance documentation into one retrieval layer with citation-based answers and role-based access.",
    tags: ["AI inside", "Enterprise"],
    imgRight: "/engagement/04_Cover-1.png",
    imgRightAlt: "RAG development",
    imgLeft: "/engagement/04_Cover-right-1.png",
    imgLeftAlt: "RAG development",
  },
];

export default function CasesBlock() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? CASES.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === CASES.length - 1 ? 0 : c + 1));

  const c = CASES[current];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Our recent <span className={styles.blue}>works</span>
        </h2>
        <div className={styles.sliderWrapper}>
          <a href={c.href} className={styles.card} style={{ background: c.bg }}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardContent}>
                {c.logo && (
                  <div className={styles.logoWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.logo} alt={c.logoAlt} className={styles.logo} width={135} height={58} loading="lazy" />
                  </div>
                )}
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
                  <img src={c.imgRight} alt={c.imgRightAlt} loading="lazy" />
                </div>
                <div className={styles.imgLeft}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.imgLeft} alt={c.imgLeftAlt} loading="lazy" />
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
