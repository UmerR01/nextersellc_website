"use client";

import { useEffect } from "react";
import styles from "./VettingPage.module.css";

// ─── Funnel steps data ────────────────────────────────────────────────────────
const FUNNEL_STEPS = [
  {
    stepId: 1,
    label: "Job Application",
    svgWidthPct: "70%",
    connectorWidthPct: "15%",
    marginTopRem: 0,
    zIndex: 10,
    icon: "/vetting/07_resume-1.png",
    mobileDesc:
      "Candidates begin their journey by submitting an application that highlights their skills, achievements, and aspirations. This step helps the hiring team identify individuals aligned with the organization's requirements.",
  },
  {
    stepId: 2,
    label: "Online Assessment",
    svgWidthPct: "60%",
    connectorWidthPct: "20%",
    marginTopRem: -1.875,
    zIndex: 9,
    icon: "/vetting/07_online-assessment.png",
    mobileDesc:
      "Applicants undergo a comprehensive aptitude assessment designed to evaluate logical reasoning, analytical thinking, and problem-solving abilities. This step identifies candidates with strong foundational skills.",
  },
  {
    stepId: 3,
    label: "HR Interview",
    svgWidthPct: "50%",
    connectorWidthPct: "25%",
    marginTopRem: -1.875,
    zIndex: 8,
    icon: "/vetting/07_resources-1.png",
    mobileDesc:
      "The HR team conducts in-depth screenings to learn more about the candidates' career goals, work preferences, and cultural compatibility with the organization.",
  },
  {
    stepId: 4,
    label: "Coding Tests",
    svgWidthPct: "40%",
    connectorWidthPct: "30%",
    marginTopRem: -1.3125,
    zIndex: 7,
    icon: "/vetting/07_terminal-1.png",
    mobileDesc:
      "Candidates demonstrate their technical expertise through structured coding challenges. These tests assess programming skills, algorithmic thinking, and the ability to solve practical problems.",
  },
  {
    stepId: 5,
    label: "Technical Interview",
    svgWidthPct: "30%",
    connectorWidthPct: "35%",
    marginTopRem: -1.0625,
    zIndex: 6,
    icon: "/vetting/07_interview-1.png",
    mobileDesc:
      "Experienced engineers engage candidates in detailed technical discussions. These interviews delve into their programming expertise, problem-solving approaches, and readiness to contribute to complex projects.",
  },
  {
    stepId: 6,
    label: "Training Assessment",
    svgWidthPct: "20%",
    connectorWidthPct: "40%",
    marginTopRem: -0.5625,
    zIndex: 5,
    icon: "/vetting/07_training-1.png",
    mobileDesc:
      "To prepare candidates for success, the organization offers specialized training programs tailored to their experience levels.",
  },
  {
    stepId: 7,
    label: "Internship",
    svgWidthPct: "15%",
    connectorWidthPct: "42.5%",
    marginTopRem: -0.4375,
    zIndex: 4,
    icon: "/vetting/07_download-1.png",
    mobileDesc:
      "Through this meticulous process, candidates transform into top-tier developers equipped to tackle challenging projects and deliver exceptional results.",
  },
];

// ─── Description panel cards ──────────────────────────────────────────────────
const DESC_CARDS = [
  {
    stepId: 1,
    zIndex: 1,
    topOffset: 0,
    icon: "/vetting/07_resume-1.png",
    title: "Job Application",
    text: "Candidates begin their journey by submitting an application that highlights their skills, achievements, and aspirations. This step helps the hiring team identify individuals aligned with the organization's requirements.",
  },
  {
    stepId: 2,
    zIndex: 2,
    topOffset: 5,
    icon: "/vetting/07_online-assessment.png",
    title: "Online Assessment",
    text: "Applicants undergo a comprehensive aptitude assessment designed to evaluate logical reasoning, analytical thinking, and problem-solving abilities. This step identifies candidates with strong foundational skills.",
  },
  {
    stepId: 3,
    zIndex: 3,
    topOffset: 10,
    icon: "/vetting/07_resources-1.png",
    title: "HR Interview",
    text: "The HR team conducts in-depth screenings to learn more about the candidates' career goals, work preferences, and cultural compatibility with the organization.",
  },
  {
    stepId: 4,
    zIndex: 4,
    topOffset: 15,
    icon: "/vetting/07_terminal-1.png",
    title: "Coding Tests",
    text: "Candidates demonstrate their technical expertise through structured coding challenges. These tests assess programming skills, algorithmic thinking, and the ability to solve practical problems.",
  },
  {
    stepId: 5,
    zIndex: 5,
    topOffset: 20,
    icon: "/vetting/07_interview-1.png",
    title: "Technical Interview",
    text: "Experienced engineers engage candidates in detailed technical discussions. These interviews delve into their programming expertise, problem-solving approaches, and readiness to contribute to complex projects.",
  },
  {
    stepId: 6,
    zIndex: 6,
    topOffset: 25,
    icon: "/vetting/07_training-1.png",
    title: "Training Assessment",
    text: "To prepare candidates for success, the organization offers specialized training programs tailored to their experience levels. Fresh Graduates: An intensive 6-month Bootcamp builds a strong foundation in modern technologies and best practices. Junior Developers: A 6-month live project training phase provides hands-on experience in real-world problem-solving.",
  },
  {
    stepId: 7,
    zIndex: 7,
    topOffset: 30,
    icon: "/vetting/07_download-1.png",
    title: "Internship",
    text: "Through this meticulous process, candidates transform into top-tier developers equipped to tackle challenging projects and deliver exceptional results.",
  },
];

// ─── Value-prop cards (Section 2) ─────────────────────────────────────────────
const VALUE_CARDS = [
  {
    icon: "/vetting/07_code-icon.png",
    title: "Future-Ready Skills",
    desc: "Our experts bring the latest knowledge and tools to your business which will help you stay ahead of the curve.",
  },
  {
    icon: "/vetting/07_hub.png",
    title: "Seamless Team Integration",
    desc: "Our vetted experts will quickly align with your team, adding value to your operations and ensuring smooth workflow.",
  },
  {
    icon: "/vetting/07_bulb-icon.png",
    title: "Innovative Problem Solving",
    desc: "Our experts will deliver creative solutions by leveraging critical thinking and practical experience to let your business have a competitive edge.",
  },
  {
    icon: "/vetting/07_up-arrow-icon.png",
    title: "Scalability Made Simple",
    desc: "Our team is capable of easily adapting to your changing needs, letting your business to seamlessly scale projects.",
  },
];

// ─── Benefits cards (Section 4) ───────────────────────────────────────────────
const BENEFITS_CARDS = [
  {
    title: "Access to top talents",
    desc: "Through our rigorous vetting process, we ensure only skilled professionals capable of delivering exceptional results will work for you.",
  },
  {
    title: "Cutting-edge expertise",
    desc: "We build innovative solutions that help businesses stay ahead in the market by keeping updated with the latest tools and trends.",
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

// ─── Shared funnel ellipse SVG ────────────────────────────────────────────────
function FunnelEllipse({ width }: { width: string }) {
  return (
    <svg
      className={styles.funnelSvg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 373 131"
      version="1.1"
      style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 1.5, width, display: "block" }}
    >
      <g transform="matrix(1,0,0,1,-1284.62,-263.911)">
        <g>
          <g transform="matrix(1.18642,0,0,1,410.26,61.7646)">
            <path d="M772.215,267.541C800.954,258.506 844.894,252.726 894.101,252.726C943.308,252.726 987.248,258.506 1015.99,267.541" style={{ fill: "none", stroke: "#3cc4e5", strokeWidth: "0.91px" }} />
          </g>
          <g transform="matrix(1.18642,0,0,1,410.26,61.7646)">
            <path d="M1015.99,267.541C1037.76,274.386 1050.81,283.099 1050.81,292.581" style={{ fill: "none", stroke: "#3cc4e5", strokeWidth: "0.91px" }} />
          </g>
          <g transform="matrix(1.18642,0,0,1,410.26,61.7646)">
            <path d="M1050.81,292.581C1050.81,314.577 980.59,332.436 894.101,332.436C807.612,332.436 737.394,314.577 737.394,292.581" style={{ fill: "none", stroke: "#3cc4e5", strokeWidth: "0.91px" }} />
          </g>
          <g transform="matrix(1.18642,0,0,1,410.26,61.7646)">
            <path d="M737.394,292.581C737.394,283.099 750.442,274.386 772.215,267.541" style={{ fill: "none", stroke: "#3cc4e5", strokeWidth: "0.91px" }} />
          </g>
          <g transform="matrix(1,0,0,1,548.558,0)">
            <path d="M1108.4,304.266L1108.4,354.345" style={{ fill: "none", stroke: "#3cc4e5", strokeWidth: "1px" }} />
          </g>
          <g transform="matrix(1,0,0,1,548.558,0)">
            <path d="M736.56,354.345L736.56,304.266" style={{ fill: "none", stroke: "#3cc4e5", strokeWidth: "1px" }} />
          </g>
          <g transform="matrix(1.18642,0,0,1,410.26,11.6852)">
            <path d="M737.394,292.581C737.394,270.584 807.612,252.726 894.101,252.726C980.59,252.726 1050.81,270.584 1050.81,292.581" style={{ fill: "none", stroke: "#3cc4e5", strokeWidth: "0.91px" }} />
          </g>
          <g transform="matrix(1.18642,0,0,1,410.26,11.6852)">
            <path d="M1050.81,292.581C1050.81,302.062 1037.76,310.775 1015.99,317.62" style={{ fill: "none", stroke: "#3cc4e5", strokeWidth: "0.91px" }} />
          </g>
          <g transform="matrix(1.18642,0,0,1,410.26,11.6852)">
            <path d="M1015.99,317.62C987.248,326.655 943.308,332.436 894.101,332.436C844.894,332.436 800.954,326.655 772.215,317.62" style={{ fill: "none", stroke: "#3cc4e5", strokeWidth: "0.91px" }} />
          </g>
          <g transform="matrix(1.18642,0,0,1,410.26,11.6852)">
            <path d="M772.215,317.62C750.442,310.775 737.394,302.062 737.394,292.581" style={{ fill: "none", stroke: "#3cc4e5", strokeWidth: "0.91px" }} />
          </g>
        </g>
      </g>
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function VettingPage() {
  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    async function initGsap() {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // ── Funnel section: pin + scrub ──────────────────────────────────────
        gsap
          .timeline({
            scrollTrigger: {
              scrub: 0.2,
              trigger: "#funnel",
              start: "top",
              end: "top -500%",
              pin: "#funnel",
              pinSpacing: "margin",
            },
          })
          .fromTo(
            "#funnel-step-1",
            { ease: "none", autoAlpha: 0 },
            { ease: "none", autoAlpha: 1, duration: 2 },
            0
          )
          .fromTo(
            "#funnel-step-2",
            { ease: "none", autoAlpha: 0, yPercent: -20 },
            { ease: "none", autoAlpha: 1, yPercent: 0, duration: 2 },
            2
          )
          .fromTo(
            "#funnel-step-3",
            { ease: "none", autoAlpha: 0, yPercent: -20 },
            { ease: "none", autoAlpha: 1, yPercent: 0, duration: 2 },
            4
          )
          .fromTo(
            "#funnel-step-4",
            { ease: "none", autoAlpha: 0, yPercent: -20 },
            { ease: "none", autoAlpha: 1, yPercent: 0, duration: 2 },
            6
          )
          .fromTo(
            "#funnel-step-5",
            { ease: "none", autoAlpha: 0, yPercent: -20 },
            { ease: "none", autoAlpha: 1, yPercent: 0, duration: 2 },
            8
          )
          .fromTo(
            "#funnel-step-6",
            { ease: "none", autoAlpha: 0, yPercent: -20 },
            { ease: "none", autoAlpha: 1, yPercent: 0, duration: 2 },
            10
          )
          .fromTo(
            "#funnel-step-7",
            { ease: "none", autoAlpha: 0, yPercent: -20 },
            { ease: "none", autoAlpha: 1, yPercent: 0, duration: 2 },
            12
          )
          .fromTo(
            "#description-step-1",
            { ease: "none", yPercent: 100 },
            { ease: "none", yPercent: 0, duration: 2 },
            0
          )
          .fromTo(
            "#description-step-2",
            { ease: "none", yPercent: 100 },
            { ease: "none", yPercent: 0, duration: 2 },
            2
          )
          .fromTo(
            "#description-step-3",
            { ease: "none", autoAlpha: 1, yPercent: 100 },
            { ease: "none", yPercent: 0, duration: 2 },
            4
          )
          .fromTo(
            "#description-step-4",
            { ease: "none", autoAlpha: 1, yPercent: 100 },
            { ease: "none", yPercent: 0, duration: 2 },
            6
          )
          .fromTo(
            "#description-step-5",
            { ease: "none", autoAlpha: 1, yPercent: 100 },
            { ease: "none", yPercent: 0, duration: 2 },
            8
          )
          .fromTo(
            "#description-step-6",
            { ease: "none", autoAlpha: 1, yPercent: 100 },
            { ease: "none", yPercent: 0, duration: 2 },
            10
          )
          .fromTo(
            "#description-step-7",
            { ease: "none", yPercent: 100 },
            { ease: "none", yPercent: 0, duration: 2 },
            12
          );

        // ── Value-prop cards stagger ─────────────────────────────────────────
        gsap
          .timeline({
            scrollTrigger: {
              scrub: false,
              trigger: ".e-value-proposition-card",
              start: "top 85%",
              end: "bottom 15%",
              once: true,
            },
          })
          .fromTo(
            ".e-value-proposition-card",
            { autoAlpha: 0, yPercent: 15 },
            {
              stagger: { from: "start", each: 0.15 },
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.5,
            },
            0
          );

        // ── Benefits cards per-card slide-in ─────────────────────────────────
        const whyCards = gsap.utils.toArray<Element>(".e-why-card");
        whyCards.forEach((item) => {
          const card = (item as HTMLElement).closest(".e-why-card") as Element;
          gsap
            .timeline({
              scrollTrigger: {
                scrub: false,
                trigger: item,
                start: "top 100%",
                end: "bottom 15%",
                once: true,
              },
            })
            .fromTo(
              card,
              { autoAlpha: 0, xPercent: 15, yPercent: 0 },
              { autoAlpha: 1, xPercent: 0, yPercent: 0, duration: 0.5 },
              0
            );
        });
      });
    }

    initGsap();
    return () => ctx?.revert();
  }, []);

  return (
    <div className={styles.page}>

      {/* ── SECTION 1 — HERO ──────────────────────────────────────────────── */}
      <section
        className={styles.hero}
        style={{ backgroundImage: "url('/vetting/07_abotu-us-mission-2.jpg')" }}
      >
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            {/* Eyebrow */}
            <span className={styles.heroEyebrow}>Our Process</span>

            {/* Divider */}
            <hr className={styles.heroDivider} />

            {/* H1 + Body */}
            <div className={styles.heroH1Block}>
              <div>
                <h1 className={styles.heroH1}>Expert Vetting Process</h1>
              </div>
              <div className={styles.heroBody}>
                <div className={styles.heroDesc}>
                  We maintain high hiring standards by meticulously reviewing each
                  candidate&apos;s profile, focusing on their expertise, achievements
                  and experience.
                </div>
                <a href="/contact" className={styles.heroCta}>
                  Let&apos;s talk
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — INTERNAL HIRING / VALUE PROPS ────────────────────── */}
      <section className={styles.section}>
        <div className={`${styles.sectionInner} ${styles.sectionInnerDark} ${styles.sectionInnerRow}`}>
          {/* Heading */}
          <div className={`${styles.sectionHead} ${styles.sectionHeadLeft}`}>
            <span className={styles.eyebrow}>Internal Hiring</span>
            <div>
              <h2 className={styles.sectionH2}>
                Setting Benchmark for Recruitment Excellence
              </h2>
            </div>
          </div>

          {/* 2×2 cards grid */}
          <div className={styles.cardsGridWrap}>
            <div className={`${styles.cardsGrid} ${styles.cardsGridBlur}`}>
              {VALUE_CARDS.map((c) => (
                <div
                  key={c.title}
                  className={`${styles.card} e-value-proposition-card`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.icon} alt="" className={styles.cardIcon} />
                  <div className={styles.cardInner}>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <div className={styles.cardDesc}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — FUNNEL: HOW WE RECRUIT ───────────────────────────── */}
      <section id="funnel-wrapper" className={styles.funnelWrapper}>
        <div id="funnel" className={styles.funnelContainer}>

          {/* Heading */}
          <div className={styles.funnelHead}>
            <span className={styles.eyebrow}>Our Hiring Journey</span>
            <div>
              <h2 className={`${styles.sectionH2} ${styles.sectionH2Center}`}>
                How We Recruit Top Talent
              </h2>
            </div>
          </div>

          {/* Body: steps + description panel */}
          <div id="brxe-lupjon" className={styles.funnelBody}>

            {/* Left: funnel steps */}
            <div id="brxe-rxroiq" className={styles.funnelSteps}>
              {FUNNEL_STEPS.map((step) => (
                <div
                  key={step.stepId}
                  id={`funnel-step-${step.stepId}`}
                  className={styles.funnelStep}
                  style={{
                    marginTop: step.marginTopRem ? `${step.marginTopRem}rem` : undefined,
                    zIndex: step.zIndex,
                  }}
                >
                  {/* SVG + connector */}
                  <div className={styles.funnelSvgCol}>
                    <FunnelEllipse width={step.svgWidthPct} />
                    <hr
                      className={styles.funnelConnector}
                      style={{ width: step.connectorWidthPct }}
                    />
                  </div>

                  {/* Label column */}
                  <div className={styles.funnelLabelCol}>
                    {/* Desktop label */}
                    <h3 className={styles.funnelLabelDesktop}>{step.label}</h3>

                    {/* Mobile card */}
                    <div className={styles.funnelMobileCard}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={step.icon}
                        alt=""
                        className={styles.funnelMobileIcon}
                      />
                      <h3 className={styles.funnelMobileTitle}>{step.label}</h3>
                      <div className={styles.funnelMobileDesc}>
                        {step.mobileDesc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: description card panel (desktop only) */}
            <div id="description-card-wrapper" className={styles.descCardWrap}>
              {DESC_CARDS.map((card) => (
                <div
                  key={card.stepId}
                  id={`description-step-${card.stepId}`}
                  className={styles.descCard}
                  style={{
                    top: card.topOffset > 0 ? `${card.topOffset}px` : undefined,
                    zIndex: card.zIndex,
                  }}
                >
                  <div className={styles.descCardInner}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.icon}
                      alt=""
                      className={styles.descCardIcon}
                    />
                    <div className={styles.descCardInnerText}>
                      <h3 className={styles.descCardTitle}>{card.title}</h3>
                      <div className={styles.descCardText}>{card.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — BENEFITS OF WORKING WITH US ──────────────────────── */}
      <section className={styles.section}>
        <div className={styles.benefitsInner}>
          {/* Heading */}
          <div className={styles.benefitsHead}>
            <span className={styles.eyebrow}>Internal Hiring</span>
            <div className={styles.benefitsH2Block}>
              <h2 className={styles.sectionH2}>Benefits of working with us</h2>
            </div>
          </div>

          {/* 2-col grid */}
          <div className={styles.benefitsCards}>
            <div className={styles.benefitsGrid}>
              {BENEFITS_CARDS.map((c) => (
                <div key={c.title} className={`${styles.card} e-why-card`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/vetting/06_star-300x300.png"
                    alt=""
                    className={styles.cardIcon}
                  />
                  <div className={styles.cardInner}>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <div className={styles.cardDesc}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — PROVEN TO PERFORM ────────────────────────────────── */}
      <section className={styles.provenSection}>
        <div className={styles.provenBorder}>
          <div className={styles.provenContent}>
            {/* Full-width image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/vetting/07_multiracial-colleagues-discussing-while-businesswo-2025-04-05-06-59-09-utc-Large.jpg"
              alt="Proven to perform"
              className={styles.provenImage}
            />

            {/* Text block */}
            <div className={styles.provenText}>
              <h2 className={styles.provenHeading}>Proven to Perform</h2>
              <div>
                <p className={styles.provenBody1}>
                  We take pride in our comprehensive vetting process that lets us
                  identify, hire and train exceptional talents. We help you build a
                  winning team that is ready to meet your business challenges.
                </p>
                <p className={styles.provenBody2}>
                  From assessments to real-world testing, finding the finest talents
                  through meticulous multi-stage testing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
