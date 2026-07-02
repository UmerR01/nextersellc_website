"use client";

import { useState } from "react";
import styles from "./HowWeRunProjects.module.css";

interface Tab {
  label: string;
  content: string;
}

const TABS: Tab[] = [
  {
    label: "Communication",
    content:
      "Slack or Teams for daily contact, Jira for tracking, Confluence for documentation, and Zoom for demos and reviews.",
  },
  {
    label: "Knowledge transfer",
    content:
      "Documentation lives in Confluence, with a knowledge-transfer session at the end of the engagement.",
  },
  {
    label: "Reporting",
    content:
      "Weekly status, a sprint demo every cycle, and a monthly executive summary.",
  },
  {
    label: "Service levels",
    content:
      "We respond within 1 business day during the overlap window.",
  },
  {
    label: "Escalation",
    content:
      "A defined path from project manager to engineering lead to account director.",
  },
  {
    label: "Project management",
    content:
      "A dedicated project manager on larger engagements, and a shared one below that threshold.",
  },
  {
    label: "Time to first value",
    content:
      "The first sprint demo lands within 2 weeks of kickoff.",
  },
];

export default function HowWeRunProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>How we run projects</h2>
        <p className={styles.description}>
          Once the team starts, delivery runs on a fixed operating rhythm. These
          are the elements that keep an engagement visible and predictable.
        </p>

        <div className={styles.desktopLayout}>
          <nav className={styles.menu} aria-label="Project rhythm tabs">
            {TABS.map((tab, i) => (
              <button
                key={tab.label}
                className={`${styles.menuItem} ${i === activeIndex ? styles.menuItemActive : ""}`}
                onClick={() => setActiveIndex(i)}
                aria-selected={i === activeIndex}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className={styles.panel}>
            <h3 className={styles.panelTitle}>{TABS[activeIndex].label}</h3>
            <p className={styles.panelText}>{TABS[activeIndex].content}</p>
          </div>
        </div>

        <div className={styles.mobileLayout}>
          {TABS.map((tab, i) => (
            <details key={tab.label} className={styles.accordion} open={i === 0}>
              <summary className={styles.accordionSummary}>
                {tab.label}
                <span className={styles.chevron} aria-hidden="true" />
              </summary>
              <div className={styles.accordionBody}>
                <p>{tab.content}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
