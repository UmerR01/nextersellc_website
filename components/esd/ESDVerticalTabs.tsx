"use client";
import { useState } from "react";
import styles from "./ESDVerticalTabs.module.css";

const TABS = [
  {
    label: "Workflow automation and orchestration",
    title: "Workflow automation and orchestration",
    desc: "We build systems that route tasks between departments, trigger actions across connected platforms, and handle exceptions according to predefined rules. Processes stay manageable without constant manual intervention, and handoffs between teams don't interrupt approvals.",
    link: null,
    linkText: null,
  },
  {
    label: "Predictive operations",
    title: "Predictive operations",
    desc: "We apply machine learning to forecast demand, flag failure risk, surface anomalies, and help teams step in earlier in operational workflows.",
    link: "#",
    linkText: "Predictive Maintenance services",
  },
  {
    label: "Enterprise copilots",
    title: "Enterprise copilots and decision support",
    desc: "We create internal AI tools that retrieve approved information, summarize case context, recommend next steps, and help employees inside their existing systems.",
    link: "#",
    linkText: "AI integration into enterprise systems",
  },
  {
    label: "Connected operations and IoT",
    title: "Connected operations and IoT",
    desc: "For businesses with equipment, devices, or field assets, we connect operational data to monitoring, alerts, maintenance logic, and service workflows.",
    link: "#",
    linkText: "Enterprise IoT development",
  },
  {
    label: "Digital twins",
    title: "Digital twins and simulation",
    desc: "Where the use case calls for it, we model assets or operating environments in software, so you can test changes, compare scenarios, and plan without disrupting live operations.",
    link: null,
    linkText: null,
  },
  {
    label: "Data platforms and operational analytics",
    title: "Data platforms and operational analytics",
    desc: "We structure data pipelines and analytics layers that support reporting, forecasting, search, and model-backed automation across the enterprise.",
    link: "#",
    linkText: "Data Analytics services",
  },
  {
    label: "Cyber-physical systems",
    title: "Cyber-physical systems",
    desc: "We connect computational algorithms with physical components, building systems where machines and people work together to improve production and service delivery.",
    link: null,
    linkText: null,
  },
];

export default function ESDVerticalTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            <span className={styles.accent}>Autonomous</span> enterprise
          </h2>
          <p className={styles.desc}>
            Companies need systems that take manual work out of long processes and put current data in front of people
            at the moment they decide. We design those systems through process automation, integration, and models, with
            measurable gains in speed, consistency, and response quality.
          </p>

          {/* Desktop tabs */}
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
                  {tab.link && tab.linkText && (
                    <a href={tab.link} className={styles.panelBtn}>
                      <span>{tab.linkText}</span>
                    </a>
                  )}
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
                  {tab.link && tab.linkText && (
                    <a href={tab.link} className={styles.panelBtn}>
                      <span>{tab.linkText}</span>
                    </a>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
