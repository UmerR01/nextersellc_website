"use client";

import styles from "./OnboardPage.module.css";

// ─── Value-prop cards ────────────────────────────────────────────────────────
const VALUE_CARDS = [
  {
    icon: "/onboard/07_code-icon.png",
    title: "Future-Ready Skills",
    desc: "Stay ahead of the curve with our experts who bring cutting-edge knowledge, tools and insights to your business.",
  },
  {
    icon: "/onboard/07_hub.png",
    title: "Seamless Team Integration",
    desc: "Our experts seamlessly integrate into your team, enhancing collaboration and ensuring a smooth, efficient workflow.",
  },
  {
    icon: "/onboard/07_bulb-icon.png",
    title: "Innovative Problem Solving",
    desc: "Our professionals leverage critical thinking and practical experience to deliver creative solutions, giving your business a competitive edge.",
  },
  {
    icon: "/onboard/07_up-arrow-icon.png",
    title: "Scalability Made Simple",
    desc: "Easily adapt to changing business needs with a team that enables your projects to scale seamlessly.",
  },
];

// ─── Client-centric steps ────────────────────────────────────────────────────
const CC_STEPS = [
  {
    icon: "/onboard/07_calendar-1.png",
    title: "Free 30 min consultation",
    desc: "Understand your Requirements, Business and Expectations",
  },
  {
    icon: "/onboard/07_tick-inside-circle.png",
    title: "Project Proposal",
    desc: "Provide detailed timelines, quotes, and CVs as needed.",
  },
  {
    icon: "/onboard/07_edit-text.png",
    title: "Signing SOW & Initial deposit",
    desc: "Execute NDAs and secure a 20% deposit to kickstart the project",
  },
];

// ─── Why-choose-us cards ─────────────────────────────────────────────────────
const WHY_CARDS = [
  {
    title: "Access to top talents",
    desc: "Through our rigorous vetting process, we ensure only skilled professionals capable of delivering exceptional results will work for you.",
  },
  {
    title: "Cutting-edge expertise",
    desc: "Our innovative solutions leverage the latest tools and trends to keep your business ahead in the market.",
  },
  {
    title: "Tailored solutions",
    desc: "We adopt customized approaches that drive business success by aligning our strategies and talent with your business needs.",
  },
  {
    title: "Long-term partnerships",
    desc: "We provide ongoing support to ensure your business has sustained growth and success by building relationships apart from providing talents.",
  },
  {
    title: "Cost-effective collaboration",
    desc: "We help you maximize value while minimizing operational costs by delivering efficient solutions through experts.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function OnboardPage() {
  return (
    <div className={styles.page}>

      {/* ── SECTION 1 — HERO ─────────────────────────────────────────────── */}
      <section
        className={styles.hero}
        style={{ backgroundImage: "url('/onboard/07_business-deal-background-2025-03-09-02-54-44-utc-Large.jpg')" }}
      >
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            {/* Eyebrow */}
            <p className={styles.heroEyebrow}>Our Process</p>

            {/* Divider */}
            <hr className={styles.heroDivider} />

            {/* H1 */}
            <h1 className={styles.heroH1}>Client Onboarding Process</h1>

            {/* Subtitle + CTA */}
            <div className={styles.heroBody}>
              <p className={styles.heroSubtitle}>
                Setting Benchmark for Recruitment Excellence
              </p>
              <a href="/contact-us" className={styles.heroCta}>
                Let&apos;s talk
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — VALUE PROPOSITION CARDS ─────────────────────────── */}
      <section className={styles.section}>
        <div className={`${styles.sectionInner} ${styles.sectionInnerDark} ${styles.sectionInnerRow}`}>
          {/* Heading block */}
          <div className={`${styles.sectionHead} ${styles.sectionHeadRow}`}>
            <span className={styles.sectionEyebrow}>Client Onboarding Process</span>
            <div>
              <h2 className={styles.sectionH2}>
                Building a foundation for a strong and successful partnership.
              </h2>
            </div>
          </div>

          {/* 2×2 cards grid */}
          <div className={`${styles.cardsRow} ${styles.cardsRowRight}`}>
            <div className={styles.cardsGrid}>
              {VALUE_CARDS.map((c) => (
                <div key={c.title} className={styles.card}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.icon} alt="" className={styles.cardIcon} />
                  <div>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <p className={styles.cardDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — CLIENT-CENTRIC ONBOARDING ───────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.ccLayout}>
            {/* Left: heading + description */}
            <div className={styles.ccLeft}>
              <div className={styles.sectionHead}>
                <span className={styles.sectionEyebrow}>Client Onboarding Process</span>
                <div>
                  <h2 className={styles.sectionH2}>Client-Centric Onboarding</h2>
                  <p className={`${styles.sectionDesc} ${styles.sectionDescSpaced}`}>
                    We prioritize understanding your business, goals, and expectations to deliver
                    customized solutions seamlessly. Our client-centric approach ensures a smooth
                    start, setting the foundation for long-term success.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: 3-step list */}
            <div className={styles.ccRight}>
              <div className={styles.stepsList}>
                {CC_STEPS.map((step) => (
                  <div key={step.title} className={styles.stepRow}>
                    <div className={styles.stepSpacer} />
                    <div className={styles.stepCard}>
                      <div className={styles.card}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={step.icon} alt="" className={styles.cardIcon} />
                        <div>
                          <h3 className={styles.cardTitle}>{step.title}</h3>
                          <p className={styles.cardDesc}>{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — WHY CHOOSE US ────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={`${styles.sectionInner} ${styles.sectionInnerRow}`}>
          {/* Heading */}
          <div className={`${styles.sectionHead} ${styles.sectionHeadRow}`}>
            <span className={styles.sectionEyebrow}>Client Onboarding Process</span>
            <div>
              <h2 className={styles.sectionH2}>Why Choose Us?</h2>
            </div>
          </div>

          {/* 2-col grid (5 cards) */}
          <div className={`${styles.cardsRow} ${styles.cardsRowRight}`}>
            <div className={styles.cardsGrid}>
              {WHY_CARDS.map((c) => (
                <div key={c.title} className={styles.card}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/onboard/06_star-300x300.png" alt="" className={styles.cardIcon} />
                  <div>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <p className={styles.cardDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — TRAINING AND SUPPORT ────────────────────────────── */}
      <section className={styles.trainSection}>
        <div className={styles.trainBorder}>
          <div className={styles.trainContent}>
            {/* Full-width image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/onboard/07_business-man-and-woman-shaking-hands-2024-11-03-03-55-40-utc-1.jpg"
              alt="Training and support"
              className={styles.trainImage}
            />

            {/* Text block */}
            <div className={styles.trainText}>
              <p className={styles.trainHeading}>Training and Support…</p>
              <p className={styles.trainBody1}>
                To empower your team, we provide comprehensive training and ongoing support
                tailored to your needs. Our experts are here to guide you every step of the way.
              </p>
              <p className={styles.trainBody2}>
                From assessments to real-world testing, finding the finest talents through
                meticulous multi-stage testing!
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
