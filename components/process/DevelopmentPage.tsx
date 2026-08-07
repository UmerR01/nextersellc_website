"use client";

import { useEffect, useRef } from "react";
import styles from "./DevelopmentPage.module.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURE_CARDS = [
  {
    icon: "/development/07_bulb-icon.png",
    title: "We Start by Understanding Your Vision",
    body: "We don't just build what you ask for—we immerse ourselves in your goals to understand the bigger picture. This way, every step we take is aligned with your vision, ensuring that the final solution delivers true value.",
  },
  {
    icon: "/development/07_approve.png",
    title: "Rigorous Quality Assurance",
    body: "Quality is never compromised. From the first line of code to the final product, we follow a strict protocol. Our team ensures that your solution is secure, reliable, and ready for real-world use.",
  },
  {
    icon: "/development/06_press-button-1.png",
    title: "Focused on Your Business Success",
    body: "Our goal is simple: to create solutions that help you thrive. We design custom systems that solve business challenges, support your growth and ensure that we meet your objectives.",
  },
  {
    icon: "/development/07_up-arrow-icon.png",
    title: "Built to Last & Scale",
    body: "We develop solutions with the future in mind. As your business evolves, we ensure your system is flexible and scalable, ready to adapt to changing needs and new opportunities.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Discovery & Planning",
    body: "We start by conducting in-depth industry, technology, and business analysis to ensure we understand your project's core requirements and challenges.",
  },
  {
    title: "Prototype & Design",
    body: "We develop wireframes and clickable prototypes to visualize and refine the product's UI and functionality before development begins.",
  },
  {
    title: "Development & QA",
    body: "Using Agile/Scrum methodology, we deliver your product in iterative sprints (1–3 weeks). This includes sprint planning, software development, review, release, and retrospectives to ensure continuous improvement.",
  },
  {
    title: "Release",
    body: "After final testing, we deploy the product and ensure everything is set up properly, with documentation and support for a smooth launch.",
  },
  {
    title: "Post Release Development",
    body: "After deployment, we provide ongoing support, including security and performance monitoring, along with a mix of development and support services to ensure smooth operation and scalability.",
  },
  {
    title: "Testing",
    body: "After each sprint, we conduct thorough testing to catch and fix any issues, ensuring quality throughout the development process.",
  },
  {
    title: "Implementation",
    body: "We build the product in iterative sprints, coding each feature step by step to ensure alignment with project goals.",
  },
];

const DISCOVERY_CARDS = [
  {
    title: "User-Centric Design",
    body: "Partner with industry-leading professionals, rigorously vetted to ensure top-tier skills and proven experience.",
  },
  {
    title: "Customized Solutions",
    body: "We tailor our services to meet your specific needs, ensuring personalized solutions that drive results.",
  },
  {
    title: "Seamless Collaboration",
    body: "Enjoy smooth communication and project coordination with a dedicated team that values your time and priorities.",
  },
  {
    title: "Time-Saving Processes",
    body: "Our streamlined workflows and expert teams ensure quick turnarounds, so you can focus on growing your business.",
  },
  {
    title: "Reliable Support",
    body: "Our support team is always available to address your concerns and ensure a hassle-free experience.",
  },
];

// ─── Fade-in observer ─────────────────────────────────────────────────────────

function useFadeIn(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function DevelopmentPage() {
  const heroRef = useRef<HTMLElement>(null);
  const sec2Ref = useRef<HTMLElement>(null);
  const sec3Ref = useRef<HTMLElement>(null);
  const sec4Ref = useRef<HTMLElement>(null);

  useFadeIn(heroRef);
  useFadeIn(sec2Ref);
  useFadeIn(sec3Ref);
  useFadeIn(sec4Ref);

  return (
    <div className={styles.page}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className={`${styles.hero} ${styles.fadeIn}`}
        style={{ backgroundImage: "url('/development/hero-bg.jpg')" }}
      >
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Our Process</span>
            <hr className={styles.heroDivider} />
            <div className={styles.heroTextBlock}>
              <h1 className={styles.heroH1}>Our Development Process</h1>
              <div className={styles.heroLeadRow}>
                <p className={styles.heroLead}>Ensuring efficiency for your project</p>
                <a className={`btn btn-accent ${styles.ctaBtn}`} href="#get-modal-popup">
                  Let&apos;s talk&nbsp;<i className="ti-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — BUILT TO LAST ─────────────────────────────────────── */}
      <section
        ref={sec2Ref as React.RefObject<HTMLElement>}
        className={`${styles.section} ${styles.fadeIn}`}
      >
        <div className={`${styles.sectionInner} ${styles.sectionInnerRow}`}>
          {/* Left: heading + description */}
          <div className={styles.colLeft}>
            <span className={styles.eyebrow}>Our Development Process</span>
            <h2 className={styles.sectionH2}>Built to Last, Designed for You</h2>
            <p className={styles.sectionPara}>
              At Nexterse LLC, we take pride in crafting solutions that are built to last. Our
              process is designed to be thorough, clear, and adaptable to your unique needs.
            </p>
          </div>

          {/* Right: 2×2 icon card grid */}
          <div className={styles.colRight}>
            <div className={styles.cardsGrid2}>
              {FEATURE_CARDS.map((c) => (
                <div key={c.title} className={styles.card}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.icon}
                    alt=""
                    className={styles.cardIcon}
                    width={32}
                    height={32}
                  />
                  <div className={styles.cardInner}>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <p className={styles.cardText}>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — ENSURING EFFICIENCY (step timeline) ──────────────── */}
      <section
        ref={sec3Ref as React.RefObject<HTMLElement>}
        className={`${styles.section} ${styles.fadeIn}`}
      >
        <div className={`${styles.sectionInner} ${styles.sectionInnerRow}`}>
          {/* Left: heading */}
          <div className={styles.colLeft}>
            <span className={styles.eyebrow}>Our Development Process</span>
            <h2 className={styles.sectionH2}>Ensuring efficiency for your project</h2>
          </div>

          {/* Right: numbered step timeline */}
          <div className={styles.stepsList}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.title} className={styles.stepRow}>
                <div className={styles.stepDivider} />
                <div className={styles.stepContent}>
                  <div className={styles.card}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/development/06_star-300x300.png"
                      alt=""
                      className={styles.cardIcon}
                      width={32}
                      height={32}
                    />
                    <div className={styles.cardInner}>
                      <h3 className={styles.cardTitle}>{step.title}</h3>
                      <p className={styles.cardText}>{step.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — DISCOVERY & PLANNING (5-card grid) ───────────────── */}
      <section
        ref={sec4Ref as React.RefObject<HTMLElement>}
        className={`${styles.sectionLast} ${styles.fadeIn}`}
      >
        <div className={`${styles.sectionInner} ${styles.sectionInnerRow}`}>
          {/* Left: heading */}
          <div className={styles.colLeft}>
            <span className={styles.eyebrow}>Our Development Process</span>
            <h2 className={styles.sectionH2}>Discovery &amp; Planning</h2>
          </div>

          {/* Right: 2-col 5-card grid */}
          <div className={styles.colRight}>
            <div className={styles.cardsGrid2Discovery}>
              {DISCOVERY_CARDS.map((c) => (
                <div key={c.title} className={styles.card}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/development/06_star-300x300.png"
                    alt=""
                    className={styles.cardIcon}
                    width={32}
                    height={32}
                  />
                  <div className={styles.cardInner}>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <p className={styles.cardText}>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
