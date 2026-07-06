"use client";
import { useState } from "react";
import styles from "./ESDApproach.module.css";

const TABS = [
  {
    label: "Project definition",
    title: "Project definition",
    desc: "We begin by defining the goals, requirements, boundaries, and expected results. We run stakeholder interviews and workshops to clarify business objectives and technical constraints. At this stage, we set success metrics and a roadmap with key milestones.",
    link: null,
    linkText: null,
  },
  {
    label: "Team formation",
    title: "Team formation",
    desc: "Team composition depends on the architecture, project stage, subject area, and integrations. We pick specialists for specific tasks and define who owns what. That cuts communication overhead and helps avoid bottlenecks.",
    link: null,
    linkText: null,
  },
  {
    label: "Cost estimation",
    title: "Cost estimation",
    desc: "We base the estimate on the scope of work, dependencies, and deadlines. We break tasks down across development, design, testing, and analytics. That keeps the budget aligned with the actual scope and the outcome you agreed to.",
    link: null,
    linkText: null,
  },
  {
    label: "Risk management",
    title: "Risk management",
    desc: "We identify risks early and reassess them as the project moves. We track technical, operational, business, and security issues. For AI functions, we also weigh data quality, access restrictions, model-result validation, and failure scenarios.",
    link: null,
    linkText: null,
  },
];

export default function ESDApproach() {
  const [active, setActive] = useState(0);

  return (
    <section id="enterprise-software-development-approach" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Enterprise software development<span className={styles.accent}> approach</span>
          </h2>
          <p className={styles.desc}>
            At Nexterse LLC, we follow a development process proven on highly complex projects. It helps us manage
            scope, budget, quality, and risk at every stage. When a system includes AI components, we add Agentic
            Development Lifecycle (ADLC) controls on top: data-access management, model validation, release planning,
            and post-launch monitoring.
          </p>

          {/* Desktop - menu right */}
          <div className={styles.tabsWrap}>
            <div className={styles.content}>
              {TABS.map((tab, i) => (
                <div
                  key={i}
                  className={`${styles.panel} ${active === i ? styles.panelActive : ""}`}
                  aria-hidden={active !== i}
                >
                  <h3 className={styles.panelTitle}>{tab.title}</h3>
                  <p className={styles.panelDesc}>{tab.desc}</p>
                  {tab.link && tab.linkText && (
                    <a href={tab.link} className={styles.panelBtn}>
                      <span>{tab.linkText}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
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
