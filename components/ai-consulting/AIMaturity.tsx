"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./AIMaturity.module.css";

const LEVELS = [
  {
    icon: "/ai-consulting/imgs/03_Ad-hoc-unstructured-02.svg",
    iconAlt: "Ad-hoc unstructured",
    label: "Level 1: Ad-hoc & unstructured",
    title: "Level 1: Ad-hoc & unstructured",
    body: (
      <>
        <p>
          Employees experiment with public AI tools such as chatbots or code
          assistants without a formal company strategy. AI adoption is
          fragmented, security policies are unclear, and sensitive data may be
          exposed to external services.
        </p>
        <p><b>Typical characteristics:</b></p>
        <ul>
          <li>Shadow AI usage across departments.</li>
          <li>No centralized governance or model policies.</li>
          <li>No secure connection to internal enterprise data.</li>
          <li>Unclear ROI or measurable business impact.</li>
        </ul>
        <p>
          <b>Our consulting efforts:</b> Establish foundational guardrails,
          define an internal AI policy framework, and create a secure
          architecture for enterprise AI usage.
        </p>
      </>
    ),
  },
  {
    icon: "/ai-consulting/imgs/03_Isolated-copilots-04.svg",
    iconAlt: "Isolated copilots",
    label: "Level 2: Isolated copilots",
    title: "Level 2: Isolated copilots",
    body: (
      <>
        <p>
          Organizations begin adopting off-the-shelf AI tools for productivity
          tasks such as document summarization, coding assistance, or customer
          support automation. These tools deliver local improvements but remain
          disconnected from proprietary data and core business systems.
        </p>
        <p><b>Typical characteristics:</b></p>
        <ul>
          <li>AI tools used in individual teams.</li>
          <li>Limited integrations with enterprise platforms.</li>
          <li>No unified AI architecture.</li>
          <li>Minimal governance or lifecycle management.</li>
        </ul>
        <p>
          <b>Our consulting efforts:</b> Assess data readiness and architecture
          for secure AI integration. Identify high-impact use cases where AI
          can connect to internal knowledge and systems.
        </p>
      </>
    ),
  },
  {
    icon: "/ai-consulting/imgs/03_Connected-intelligence-03.svg",
    iconAlt: "Connected intelligence",
    label: "Level 3: Connected intelligence",
    title: "Level 3: Connected intelligence (RAG-driven systems)",
    body: (
      <>
        <p>
          AI systems begin accessing enterprise data securely through
          retrieval-augmented generation (RAG), knowledge bases, and
          structured data pipelines. This stage enables employees to interact
          with company knowledge, documentation, and analytics using natural
          language interfaces.
        </p>
        <p><b>Typical characteristics:</b></p>
        <ul>
          <li>AI connected to internal knowledge bases and databases.</li>
          <li>Secure APIs and controlled data access.</li>
          <li>Operational copilots for research, analytics, and documentation.</li>
          <li>Measurable productivity improvements.</li>
        </ul>
        <p>
          <b>Our consulting efforts:</b> Design scalable AI architecture,
          optimize data pipelines, and identify opportunities to automate
          multi-step workflows.
        </p>
      </>
    ),
  },
  {
    icon: "/ai-consulting/imgs/03_Security-governance-game-plan-03.svg",
    iconAlt: "Governed autonomy",
    label: "Level 4: Governed autonomy",
    title: "Level 4: Governed autonomy (agentic AI systems)",
    body: (
      <>
        <p>
          AI evolves from assistant tools into autonomous systems capable of
          executing complex workflows across multiple platforms. Multi-agent
          architectures coordinate tasks such as document processing,
          operational decision support, and business process automation. Strict
          governance frameworks ensure these systems remain secure, explainable,
          and aligned with business objectives.
        </p>
        <p><b>Typical characteristics:</b></p>
        <ul>
          <li>Autonomous AI agents executing operational workflows.</li>
          <li>Multi-system integrations across enterprise platforms.</li>
          <li>Continuous monitoring, evaluation, and governance.</li>
          <li>Clear ROI and measurable operational impact.</li>
        </ul>
        <p>
          <b>Our consulting efforts:</b> Implement agent orchestration
          architectures, establish lifecycle governance, and scale AI systems
          across the organization.
        </p>
      </>
    ),
  },
];

const MATURITY_IMG = "/ai-consulting/imgs/03_AI-maturity-funnel-1024x973.png";

export default function AIMaturity() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} id="maturity">
      <div className="container">
        <h2 className={styles.title}>
          Check your business <span>AI maturity</span>
        </h2>
        <p className={styles.desc}>
          Organizations progress through several stages before AI becomes a
          reliable operational capability. Early initiatives often begin with
          small experiments. Over time, companies start connecting AI systems
          to internal data and business processes. Eventually, AI becomes
          embedded in workflows and capable of executing complex tasks
          autonomously under strict governance.
        </p>

        {/* Icon tab selector */}
        <div className={styles.tabs}>
          {LEVELS.map((l, i) => (
            <button
              key={l.label}
              className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              <Image
                src={l.icon}
                alt={l.iconAlt}
                width={56}
                height={56}
                className={styles.tabIcon}
              />
              <span className={styles.tabLabel}>{l.label}</span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className={styles.panelWrap}>
          <div className={styles.panel} key={active}>
            <div className={styles.panelLeft}>
              <h3 className={styles.panelTitle}>{LEVELS[active].title}</h3>
              <div className={styles.panelBody}>{LEVELS[active].body}</div>
            </div>
            <div className={styles.panelRight}>
              <div className={styles.imgWrapper}>
                <Image
                  src={MATURITY_IMG}
                  alt="AI maturity funnel"
                  width={428}
                  height={407}
                  className={styles.panelImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
