"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./AIEngagements.module.css";

const ENGAGEMENTS = [
  {
    icon: "/ai-consulting/imgs/03_AI-viability-audit-03.svg",
    iconAlt: "AI viability audit",
    label: "AI viability audit",
    title: "Engagement 1: AI viability audit",
    meta: [
      { label: "Duration", value: "2 weeks" },
      { label: "Format", value: "Fixed-price engagement" },
    ],
    body: (
      <>
        <p>
          Before investing in AI, organizations need to understand whether
          their infrastructure, data architecture, and security model can
          support real AI systems. During the AI Viability Audit, our
          engineers perform a structured technical and operational assessment.
        </p>
        <p><b>What we analyze:</b></p>
        <ul>
          <li>Data architecture and data availability.</li>
          <li>Cloud infrastructure and API readiness.</li>
          <li>Security posture and compliance requirements.</li>
          <li>Existing analytics and automation capabilities.</li>
          <li>Operational bottlenecks where AI may create measurable value.</li>
        </ul>
        <p>
          As a result, you receive an AI readiness assessment report, an
          evaluation of your infrastructure and data architecture, a security
          and compliance risk overview, and an initial list of AI use cases
          relevant to your organization.
        </p>
      </>
    ),
    img: "/ai-consulting/imgs/03_Development-team-2-683x1024.jpg",
    imgAlt: "Development team",
  },
  {
    icon: "/ai-consulting/imgs/03_Use-case-discovery-03.svg",
    iconAlt: "Use case discovery",
    label: "Use-case & ROI discovery session",
    title: "Engagement 2: use-case & ROI discovery session",
    meta: [
      { label: "Duration", value: "3 weeks" },
      { label: "Format", value: "Fixed-price engagement" },
    ],
    body: (
      <>
        <p>
          Once feasibility is confirmed, the next step is identifying where AI
          can generate measurable business value. During this sprint, our
          consultants collaborate with business leaders, product owners, and
          technical teams to discover and prioritize AI opportunities.
        </p>
        <p><b>Activities during the session:</b></p>
        <ul>
          <li>Stakeholder interviews across departments.</li>
          <li>Operational workflow analysis.</li>
          <li>Use-case ideation and feasibility assessment.</li>
          <li>Cost-per-token infrastructure modeling.</li>
          <li>ROI forecasting for prioritized AI initiatives.</li>
        </ul>
        <p>
          You receive a prioritized AI opportunity portfolio, ROI projections
          for the top three AI use cases, an architecture blueprint for the
          recommended solution, and a fixed-scope proposal to build your first
          AI proof of concept.
        </p>
      </>
    ),
    img: "/ai-consulting/imgs/03_Development-team-3-683x1024.jpg",
    imgAlt: "Development team",
  },
  {
    icon: "/ai-consulting/imgs/03_Fractional-chief-AI-officer-03.svg",
    iconAlt: "Fractional Chief AI Officer",
    label: "Fractional Chief AI Officer (CAIO)",
    title: "Engagement 3: fractional chief AI officer (CAIO)",
    meta: [
      { label: "Format", value: "Monthly advisory partnership" },
    ],
    body: (
      <>
        <p>
          Some organizations want to move forward with AI, but do not yet
          require a full-time executive AI leader. Our Fractional CAIO program
          provides ongoing strategic guidance and technical oversight from
          senior AI consultants.
        </p>
        <p><b>Typical responsibilities:</b></p>
        <ul>
          <li>AI strategy and roadmap oversight.</li>
          <li>Vendor and model evaluation.</li>
          <li>Architecture governance and security review.</li>
          <li>AI risk and compliance advisory.</li>
          <li>Executive-level AI education and decision support.</li>
        </ul>
        <p>
          This model allows organizations to build AI capabilities with
          experienced leadership without committing to a full-time executive
          hire.
        </p>
      </>
    ),
    img: "/ai-consulting/imgs/03_Development-team-e1774868240359-963x1024.jpg",
    imgAlt: "Development team",
  },
];

export default function AIEngagements() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} id="engagements">
      <div className="container">
        <h2 className={styles.title}>
          <span>Engagement</span> options available
        </h2>
        <p className={styles.desc}>
          Our consulting engagements are structured as time-boxed programs
          designed to move your organization from uncertainty to a concrete AI
          implementation plan.
        </p>

        {/* Icon tab selector */}
        <div className={styles.tabs}>
          {ENGAGEMENTS.map((e, i) => (
            <button
              key={e.label}
              className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              <Image
                src={e.icon}
                alt={e.iconAlt}
                width={56}
                height={56}
                className={styles.tabIcon}
              />
              <span className={styles.tabLabel}>{e.label}</span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className={styles.panelWrap}>
          <div className={styles.panel} key={active}>
            <div className={styles.panelLeft}>
              <h3 className={styles.panelTitle}>{ENGAGEMENTS[active].title}</h3>
              {ENGAGEMENTS[active].meta.map((m) => (
                <p key={m.label} className={styles.panelMeta}>
                  <b>{m.label}</b>: {m.value}
                </p>
              ))}
              <div className={styles.panelBody}>{ENGAGEMENTS[active].body}</div>
            </div>
            <div className={styles.panelRight}>
              <div className={styles.imgWrapper}>
                <Image
                  src={ENGAGEMENTS[active].img}
                  alt={ENGAGEMENTS[active].imgAlt}
                  width={428}
                  height={640}
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
