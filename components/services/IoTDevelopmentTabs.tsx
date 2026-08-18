"use client";

import { useState } from "react";
import styles from "./VerticalTabsBlock.module.css";

const TABS = [
  {
    label: "Predictive maintenance",
    title: "Predictive maintenance software development",
    description: "Our predictive maintenance software development covers systems that analyze equipment and operational data to support maintenance planning based on actual asset behavior. These systems can ingest data from your existing sensors, machines, maintenance logs, and operational software, then organize it into models, dashboards, alerts, and workflow integrations.\n\nThe business value is stronger asset visibility, more data-driven service planning, and better control over equipment reliability. Maintenance teams can prioritize work with clearer context, while leadership can track uptime, utilization, and service efficiency across critical assets.",
    link: "/services/predictive-maintenance",
    linkLabel: "Predictive maintenance development services",
  },
  {
    label: "ML development",
    title: "Machine learning development",
    description: "Our machine learning development work covers models that turn your operational data into anomaly detection, behavior modeling, forecasting, automated alerts, and decision-support dashboards. We build and train models on your existing data sources rather than requiring new hardware or connected devices.\n\nFor the business, this creates a more advanced management layer over day-to-day operations. Teams receive clearer signals from processes and equipment, while leadership gains better visibility into performance, service needs, and operational priorities.",
    link: "/services/ml-development",
    linkLabel: "ML development services",
  },
  {
    label: "AI integration",
    title: "AI integration",
    description: "We integrate AI models and agents directly into the software you already run — ERP, CRM, maintenance, logistics, or analytics platforms — instead of standing up a separate system. The architecture can include data pipelines, model serving, orchestration, dashboards, admin tools, access control, and integrations with the business systems your teams already use.\n\nThe result is a scalable AI foundation for operational visibility, automation, and long-term product evolution, without adding new devices or infrastructure to manage.",
    link: "/services/ai-integration",
    linkLabel: "AI integration services",
  },
  {
    label: "Big data development",
    title: "Big data development for manufacturing",
    description: "We develop big data systems for manufacturing environments where production visibility, equipment performance, quality control, and facility operations need to be connected in one digital layer. These systems can collect data from machines, production lines, warehouses, and enterprise platforms you already operate.\n\nA manufacturing data solution can include machine monitoring, production dashboards, downtime tracking, quality-control data, energy monitoring, maintenance alerts, and integrations with ERP, MES, WMS, or analytics tools. Executives receive a clearer view of throughput, constraints, asset performance, and production efficiency.",
    link: "/services/big-data-development",
    linkLabel: "",
  },
  {
    label: "AI security and compliance",
    title: "AI security and compliance",
    description: "We design AI systems with secure communication, controlled access, encrypted data transfer, infrastructure protection, and governance across models, users, and cloud services. The architecture can include user authentication, role-based access control, secure APIs, encrypted data in transit, protected cloud storage, audit logs, monitoring, and update mechanisms — all governed under our Agentic Development Lifecycle (ADLC).\n\nFor enterprise and regulated environments, this creates a governed foundation for AI-driven operations. Companies can expand model usage, add users, integrate new systems, and introduce further AI capabilities within a controlled technical architecture.",
    link: "/adlc",
    linkLabel: "AI governance under ADLC",
  },
];

export default function IoTDevelopmentTabs() {
  const [active, setActive] = useState(0);

  return (
    <section id="svc-applied-ai" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            <span className={styles.accent}>Applied AI </span>services
          </h2>
          <p className={styles.description}>
            As an AI development company, we apply AI directly to the data, operations, and enterprise software you already run. Our team builds machine learning models, data pipelines, cloud infrastructure, dashboards, analytics modules, and integrations with business systems.
            With applied AI, existing operations move from monitoring to intelligence. We add machine learning models for anomaly detection, predictive maintenance, operational forecasting, and decision support, so companies can understand operational behavior, improve planning, and manage AI-driven operations with greater confidence.
          </p>

          <div className={`${styles.tabs} ${styles.tabsRight}`}>
            <div className={styles.content}>
              <div className={styles.contentTitle}>{TABS[active].title}</div>
              <div className={styles.contentDesc}>
                {TABS[active].description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              {TABS[active].linkLabel && (
                <div className={styles.contentBottom}>
                  <a href={TABS[active].link} className={styles.contentBtn}>
                    <span>{TABS[active].linkLabel}</span>
                  </a>
                </div>
              )}
            </div>

            <div className={styles.menu}>
              {TABS.map((tab, i) => (
                <button
                  key={tab.label}
                  className={`${styles.menuItem} ${i === active ? styles.menuItemActive : ""}`}
                  onClick={() => setActive(i)}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
