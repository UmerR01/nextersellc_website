"use client";

import { useState } from "react";
import styles from "./VerticalTabsBlock.module.css";

const TABS = [
  {
    label: "AI Readiness Assessment",
    title: "AI Readiness Assessment",
    description: "This assessment evaluates your data, infrastructure, workflows, and business use cases to define where AI can create practical value. The result is a clear implementation roadmap, technical priorities, and the next steps required to move toward production.",
    link: "/ai-readiness-assessment",
    linkLabel: "AI readiness assessment",
  },
  {
    label: "AI PoC Development",
    title: "AI PoC Development",
    description: "AI PoC development validates a selected use case before full-scale implementation. Your team can test feasibility, business value, data quality, integration needs, and user adoption potential within a controlled scope.",
    link: "#get-modal-popup",
    linkLabel: "AI PoC development",
  },
  {
    label: "AI Agent Development",
    title: "AI Agent Development",
    description: "Our AI agent development services create systems that work with tools, business applications, internal data, and multi-step workflows. These agents support research, operations, customer service, reporting, knowledge retrieval, task automation, and decision support.",
    link: "#get-modal-popup",
    linkLabel: "AI agent development",
  },
  {
    label: "RAG Development Services",
    title: "RAG Development Services",
    description: "Our RAG development services connect LLMs with company knowledge, turning internal content into a usable source for search, summarization, and contextual answers. Typical sources include documents, policies, product data, customer information, and operational records.",
    link: "#get-modal-popup",
    linkLabel: "RAG development services",
  },
  {
    label: "LLM Development",
    title: "LLM Development",
    description: "As an LLM development company, Nexterse LLC covers model selection, prompt architecture, private deployment options, evaluation workflows, and integration with existing software environments. The result is a practical LLM layer aligned with business use cases and technical constraints.",
    link: "#get-modal-popup",
    linkLabel: "LLM development services",
  },
  {
    label: "GenAI Development Services",
    title: "GenAI Development Services",
    description: "Our GenAI development services support text, image, structured content, document processing, analytics, and workflow automation. Each application is designed around business use cases, user roles, data access rules, and practical adoption inside the company.",
    link: "#get-modal-popup",
    linkLabel: "GenAI development services",
  },
];

export default function AIDevelopmentTabs() {
  const [active, setActive] = useState(0);

  return (
    <section id="svc-ai" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            <span className={styles.accent}>AI and agentic</span> development services
          </h2>
          <p className={styles.description}>
            Our AI and agentic development services help companies turn internal knowledge, workflows, and operational data into production-ready AI systems. The work covers the full path from readiness assessment and proof-of-concept to AI agents, RAG systems, LLM integrations, and GenAI applications connected to real business processes.
          </p>

          <div className={`${styles.tabs} ${styles.tabsLeft}`}>
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

            <div className={styles.content}>
              <div className={styles.contentTitle}>{TABS[active].title}</div>
              <div className={styles.contentDesc}>{TABS[active].description}</div>
              <div className={styles.contentBottom}>
                <a href={TABS[active].link} className={styles.contentBtn}>
                  <span>{TABS[active].linkLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
