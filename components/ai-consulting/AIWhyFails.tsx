"use client";
import { useState } from "react";
import styles from "./AIWhyFails.module.css";

const TABS = [
  {
    label: "Chasing the hype without a business case",
    body: "Many organizations begin their AI journey by experimenting with tools rather than solving specific business problems. Teams build prototypes, internal chatbots, or automation scripts without clearly defining the operational bottleneck they are trying to remove. Without measurable objectives, projects struggle to move beyond experimentation.",
    how: "Before recommending any technology, we identify the operational bottlenecks where AI can create measurable value. Our consultants model expected ROI, operational impact, and infrastructure costs before development begins. Only after that do we recommend moving to AI PoC development.",
  },
  {
    label: "Building AI on top of fragmented data",
    body: "Artificial intelligence depends on clean, accessible, and well-structured data. In practice, most enterprise data is distributed across legacy systems, spreadsheets, internal databases, and external tools. Without integration and governance, AI systems cannot reliably access or interpret this information. This is why 47% of CEOs report that poor data readiness is the main obstacle preventing AI adoption at scale.",
    how: "Our consulting process begins with a deep audit of your data architecture, APIs, and infrastructure. If your data foundation is not ready for AI, we design a pragmatic modernization roadmap before introducing AI systems.",
  },
  {
    label: "Feeding proprietary data into insecure AI tools",
    body: "Public AI platforms make experimentation easy, but they introduce serious security risks. When employees upload proprietary information into public models, organizations risk exposing intellectual property, customer data, or sensitive internal documents. For regulated industries, these risks can create compliance violations and legal exposure.",
    how: "We design secure AI architectures that protect enterprise data from day one. Our solutions use isolated cloud environments, controlled APIs, and strict governance policies that ensure sensitive information never leaks into public models.",
  },
  {
    label: "Treating AI as a tool instead of a system",
    body: "AI projects often fail because companies treat them like software features rather than operational systems. Production AI requires data pipelines, monitoring systems, model governance, cost management, and human-in-the-loop controls. Without these elements, even successful prototypes become unreliable in production. Analysts estimate 70–85% of AI initiatives fail without structured implementation frameworks.",
    how: "We approach AI as an engineering discipline, not an experiment. Our consulting engagements design the full architecture required to deploy AI safely, predictably, and at enterprise scale — delivering controlled systems with measurable operational improvements.",
  },
];

const Chevron = () => (
  <svg className={styles.summaryChevron} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 9 12 15 6" />
  </svg>
);

export default function AIWhyFails() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          80+% of enterprise <span>AI initiatives</span> never leave the lab
        </h2>
        <p className={styles.desc}>
          Only 25% of AI initiatives deliver their expected return on investment,
          while the majority stall during experimentation or fail during deployment.
          Most failures occur when organizations attempt to deploy AI without
          addressing the operational and architectural realities that underpin it.
          Below are the most common traps that cause AI initiatives to collapse.
        </p>

        {/* Desktop vertical tabs */}
        <div className={styles.tabs}>
          <div className={styles.menu}>
            {TABS.map((t, i) => (
              <button
                key={t.label}
                className={`${styles.menuItem} ${i === active ? styles.menuItemActive : ""}`}
                onClick={() => setActive(i)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className={styles.content}>
            <h3 className={styles.contentTitle}>{TABS[active].label}</h3>
            <p className={styles.contentBody}>{TABS[active].body}</p>
            <p className={styles.contentBody}>{TABS[active].how}</p>
            {/* <div className={styles.contentReality}>
              <span className={styles.realityLabel}>The Nexterse approach</span>
              <p className={styles.contentBody}>{TABS[active].how}</p>
            </div> */}
          </div>
        </div>

        {/* Mobile accordion */}
        <div className={styles.mobileAccordion}>
          {TABS.map((t, i) => (
            <details key={t.label} className={styles.details} open={i === 0}>
              <summary className={styles.summary}>
                {t.label}
                <Chevron />
              </summary>
              <div className={styles.accordionContent}>
                <p className={styles.accordionBody}>{t.body}</p>
                <div className={styles.accordionReality}>
                  <span className={styles.realityLabel}>The Nexterse approach</span>
                  <p className={styles.realityText}>{t.how}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
