"use client";

import { useState } from "react";
import styles from "./VerticalTabsBlock.module.css";

const TABS = [
  {
    label: "Enterprise IoT development",
    title: "Enterprise IoT development",
    description: "As a dedicated IoT development company, we build enterprise IoT systems for connected products, industrial assets, facilities, vehicles, equipment, and distributed operations. The architecture can include device onboarding, secure communication, telemetry processing, cloud infrastructure, dashboards, admin tools, access control, and integrations with ERP, CRM, maintenance, logistics, or analytics platforms.\n\nThe result is a scalable IoT foundation for operational visibility, connected services, customer portals, automation, and long-term product evolution. Leadership receives a clearer view of asset performance, while teams work with consistent data across the systems they already use.",
    link: "#get-modal-popup",
    linkLabel: "Enterprise IoT software development",
  },
  {
    label: "AIoT development",
    title: "AIoT development",
    description: "Our AIoT development work covers systems that combine IoT data with machine learning, analytics, and automation. These solutions turn telemetry and operational data into anomaly detection, behavior modeling, predictive maintenance, forecasting, automated alerts, and decision-support dashboards.\n\nFor the business, AIoT creates a more advanced management layer over connected operations. Teams receive clearer signals from equipment and processes, while leadership gains better visibility into performance, service needs, and operational priorities.",
    link: "#get-modal-popup",
    linkLabel: "AIoT software development",
  },
  {
    label: "Predictive maintenance",
    title: "Predictive maintenance software development",
    description: "Our predictive maintenance software development covers systems that analyze equipment data and support maintenance planning based on actual asset behavior. These systems can collect data from sensors, machines, IoT platforms, maintenance logs, and operational software, then organize it into models, dashboards, alerts, and workflow integrations.\n\nThe business value is stronger asset visibility, more data-driven service planning, and better control over equipment reliability. Maintenance teams can prioritize work with clearer context, while leadership can track uptime, utilization, and service efficiency across critical assets.",
    link: "#get-modal-popup",
    linkLabel: "Predictive Maintenance development services",
  },
  {
    label: "IoT for manufacturing",
    title: "IoT for manufacturing",
    description: "We develop IoT systems for manufacturing environments where production visibility, equipment performance, quality control, and facility operations need to be connected in one digital layer. These systems can collect data from machines, sensors, production lines, warehouses, and enterprise platforms.\n\nA manufacturing IoT solution can include machine monitoring, production dashboards, downtime tracking, quality-control data, energy monitoring, maintenance alerts, and integrations with ERP, MES, WMS, or analytics tools. Executives receive a clearer view of throughput, constraints, asset performance, and production efficiency.",
    link: "#get-modal-popup",
    linkLabel: "",
  },
  {
    label: "IoT security and compliance",
    title: "IoT security and compliance",
    description: "We design IoT systems with secure communication, controlled access, encrypted data transfer, infrastructure protection, and governance across devices, users, and cloud services. The architecture can include device authentication, role-based access control, secure APIs, encrypted telemetry, protected cloud storage, audit logs, monitoring, and update mechanisms.\n\nFor enterprise and regulated environments, this creates a governed foundation for connected operations. Companies can expand device networks, add users, integrate new systems, and introduce AI capabilities within a controlled technical architecture.",
    link: "#get-modal-popup",
    linkLabel: "IoT development for manufacturing",
  },
];

export default function IoTDevelopmentTabs() {
  const [active, setActive] = useState(0);

  return (
    <section id="svc-iot" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            <span className={styles.accent}>IoT and AIoT </span>development services
          </h2>
          <p className={styles.description}>
            As an IoT development company, we develop IoT and AIoT systems that connect devices, equipment, facilities, field operations, and enterprise software into one controlled digital environment. Our team builds device firmware, edge applications, data ingestion, cloud infrastructure, dashboards, analytics modules, AI models, and integrations with business systems.
            With AIoT, connected systems move from monitoring to intelligence. We add machine learning models for anomaly detection, predictive maintenance, operational forecasting, and decision support, so companies can understand equipment behavior, improve planning, and manage connected operations with greater confidence.
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
