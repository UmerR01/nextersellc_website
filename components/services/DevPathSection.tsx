"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./DevPathSection.module.css";

const OPTIONS = [
  {
    key: "scratch",
    icon: "/services-page/06_Build-from-scratch-01.svg",
    label: "Build from scratch",
    title: "Build from scratch",
    body: [
      "For companies launching a new product, internal platform, customer portal, SaaS solution, or operational system.",
      "Custom software development from scratch gives your business a system shaped around its workflows, users, data, and growth plans. The result is a product built around your business logic from the start, with clean architecture, full code ownership, and room for future evolution.",
    ],
    points: [
      "Launch a new digital product",
      "Replace manual workflows with a dedicated system",
      "Build a customer-facing platform",
      "Create software around a unique business model",
      "Move from idea to MVP or full-scale product",
    ],
  },
  {
    key: "modernize",
    icon: "/services-page/06_Modernize-an-existing-system-01.svg",
    label: "Modernize an existing system",
    title: "Modernize an existing system",
    body: [
      "For companies with software that still supports the business and needs a stronger technical foundation.",
      "Legacy software modernization extends the value of the existing system through refactoring, re-platforming, cloud migration, UX improvement, architecture redesign, and phased feature replacement. The system becomes easier to maintain, scale, and improve while continuing to support daily operations.",
    ],
    points: [
      "Improve an aging internal platform",
      "Update outdated architecture",
      "Move software to the cloud",
      "Improve performance and usability",
      "Prepare the system for new integrations or AI capabilities",
    ],
  },
  {
    key: "integrate",
    icon: "/services-page/06_Integrate-your-software-ecosystem-01.svg",
    label: "Integrate your software ecosystem",
    title: "Integrate your software ecosystem",
    body: [
      "For companies that already use several systems and need them to work as one connected environment.",
      "Software integration creates reliable data flows and coordinated workflows across ERP, CRM, AI, analytics, billing, logistics, finance, and operational platforms. Leadership gets better visibility, while teams work with consistent, connected information across the business.",
    ],
    points: [
      "Connect business-critical systems",
      "Unify data across departments",
      "Automate cross-system workflows",
      "Improve reporting accuracy",
      "Create a foundation for AI, analytics, or operational dashboards",
    ],
  },
];

export default function DevPathSection() {
  const [active, setActive] = useState(0);
  const current = OPTIONS[active];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Which dev <span className={styles.accent}>path</span> fits your business?
        </h2>
        <div className={styles.description}>
          <p>Every company reaches a different point in its software journey. Some need a new platform built from scratch. Others need to modernize a system that already supports core operations. Some need to connect existing tools into one coordinated environment.</p>
          <p>The right path defines the architecture, scope, budget, and delivery roadmap before development starts. This gives the project a clear technical direction and keeps every decision connected to business goals from day one.</p>
        </div>

        <div className={styles.tabs}>
          {OPTIONS.map((opt, i) => (
            <button
              key={opt.key}
              className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
              type="button"
            >
              <Image src={opt.icon} alt={opt.label} width={40} height={40} className={styles.tabIcon} />
              <span>{opt.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.panel}>
          <div className={styles.panelLeft}>
            <h3 className={styles.panelTitle}>{current.title}</h3>
            {current.body.map((para, i) => (
              <p key={i} className={styles.panelText}>{para}</p>
            ))}
            <p className={styles.bestFit}><strong>Best fit when you need to:</strong></p>
            <ul className={styles.points}>
              {current.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
          <div className={styles.panelRight}>
            <div className={styles.panelImagePlaceholder} />
          </div>
        </div>
      </div>
    </section>
  );
}
