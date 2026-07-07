"use client";
import { useState } from "react";
import styles from "./ESDQualityPractices.module.css";

const TABS = [
  {
    label: "Documentation and knowledge transfer",
    title: "Documentation and knowledge transfer",
    desc: "We keep working documentation current throughout the project. That matters for onboarding, collaboration, and knowledge transfer. We use centralized repositories so the whole team can reach the information. For AI projects, we document data sources, access rules, validation logic, and system limitations.",
  },
  {
    label: "Code review",
    title: "Code review",
    desc: "We review code regularly. That keeps the system readable, stable, and secure. We use static analysis and internal development standards, and senior engineers run the reviews. On the AI side, we check model integration, query processing, data-access boundaries, and how the system behaves during failures.",
  },
  {
    label: "Reporting",
    title: "Reporting",
    desc: "Project progress stays transparent. The manager reports regularly on progress, deviations, and risks. We show the work in a demo at the start of each sprint to gather feedback and adjust the plan.",
  },
  {
    label: "Post-launch warranty",
    title: "Post-launch warranty",
    desc: "After release, we stay on the project for the warranty period. We fix defects, update security components, and monitor performance. If you need it, we move the project into long-term support.",
  },
];

export default function ESDQualityPractices() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Desktop tabs — menu left (no title) */}
          <div className={styles.tabsWrap}>
            <div className={styles.menu}>
              {TABS.map((tab, i) => (
                <button
                  key={i}
                  className={`${styles.menuItem} ${active === i ? styles.menuItemActive : ""}`}
                  onClick={() => setActive(i)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className={styles.content}>
              {TABS.map((tab, i) => (
                <div
                  key={i}
                  className={`${styles.panel} ${active === i ? styles.panelActive : ""}`}
                  aria-hidden={active !== i}
                >
                  <h3 className={styles.panelTitle}>{tab.title}</h3>
                  <p className={styles.panelDesc}>{tab.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile accordion */}
          <div className={styles.mobileAccordion}>
            {TABS.map((tab, i) => (
              <details key={i} open={i === 0} className={styles.details}>
                <summary className={styles.summary}>{tab.label}</summary>
                <div className={styles.detailContent}>
                  <p className={styles.panelDesc}>{tab.desc}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
