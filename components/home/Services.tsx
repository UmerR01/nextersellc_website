"use client";

import { useState } from "react";
import styles from "./Services.module.css";

/**
 * Services — replicated from Sumato's "vertical-tabs-block dark-mode":
 * left vertical tab menu, right content panel (title, description, points,
 * button), on a dark background with red + blue radial glows.
 */
const TABS = [
  {
    title: "Applied AI and GenAI systems",
    description:
      "We engineer governed AI systems. Using our proprietary Agentic Development Lifecycle (ADLC), we design secure, production-ready AI architectures that operate inside enterprise guardrails — with hallucination control, token modeling, red-teaming, and strict access governance.",
    points: [
      "Enterprise RAG systems",
      "Custom copilots & AI assistants",
      "Agentic workflows",
      "LLM fine-tuning & private models",
      "AI readiness & pilot & prove programs",
    ],
    cta: "Custom AI software development services",
  },
  {
    title: "Customer Relationship Management",
    description:
      "We design and build custom CRM platforms and intelligent integrations that give your teams a complete, real-time picture of every customer relationship. From pipeline automation to AI-powered lead scoring and predictive churn analysis, we engineer CRM systems that drive revenue and retention at scale.",
    points: [
      "Custom CRM platform development",
      "CRM integration with existing ERP & data systems",
      "AI-powered lead scoring & sales forecasting",
      "Automated pipeline & customer journey workflows",
      "Customer analytics & retention dashboards",
    ],
    cta: "Custom CRM development",
  },
  {
    title: "AI-powered software development",
    description:
      "We design and build scalable, high-performance software engineered for long-term stability and growth. From MVPs to complex enterprise platforms, we deliver structured architectures, clean codebases, and predictable development timelines — accelerated by our internal AI-augmented engineering.",
    points: [
      "Architecture validation",
      "Code generation and review",
      "Automated testing",
      "Documentation",
      "Refactoring",
    ],
    cta: "AI-powered software product development",
  },
  {
    title: "Enterprise software development",
    description:
      "For companies with complex legacy systems supporting mission-critical operations, we offer strong competencies in modernization services. We bridge 15-year-old legacy systems with modern AI infrastructure through secure APIs and structured data pipelines.",
    points: [
      "Refactoring legacy monoliths into modular architectures",
      "API-first system transformations",
      "Secure cloud migrations",
      "Backend system redesign",
      "High-load platform engineering",
    ],
    cta: "Enterprise software development",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [activeMobile, setActiveMobile] = useState<number | null>(0);
  const tab = TABS[active];

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}> 
        {/* Dark background with red (left) + blue (right) glows */}
        <div className={styles.bg} aria-hidden>
        
        </div>

        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            <span className={styles.blue}>Services</span> we provide
          </h2>
          <p className={styles.description}>
            As an AI software development company, we offer stable, scalable software that
            runs mission-critical operations and governed AI systems that unlock new levels
            of automation and intelligence.
          </p>

          <div className={styles.tabs}>
            {/* Left menu (Desktop only) */}
            <div className={styles.menu} role="tablist" aria-orientation="vertical">
              {TABS.map((t, i) => (
                <button
                  key={t.title}
                  role="tab"
                  aria-selected={i === active}
                  className={`${styles.menuItem} ${i === active ? styles.menuActive : ""}`}
                  onClick={() => setActive(i)}
                >
                  {t.title}
                </button>
              ))}
            </div>

            {/* Right content (Desktop only) */}
            <div className={styles.content} role="tabpanel">
              <h3 className={styles.itemTitle}>{tab.title}</h3>
              <p className={styles.itemDesc}>{tab.description}</p>
              <ul className={styles.points}>
                {tab.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a href="#contact" className={styles.ctaBtn}>
                {tab.cta}
              </a>
            </div>

            {/* Mobile Accordion (Mobile/Tablet only) */}
            <div className={styles.mobileContent}>
              {TABS.map((t, i) => (
                <details key={t.title} open={activeMobile === i}>
                  <summary
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveMobile(activeMobile === i ? null : i);
                    }}
                  >
                    {t.title}
                  </summary>
                  <div className={styles.mobileItemContent}>
                    <p className={styles.itemDesc}>{t.description}</p>
                    <ul className={styles.points}>
                      {t.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    <a href="#contact" className={styles.ctaBtn}>
                      {t.cta}
                    </a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
