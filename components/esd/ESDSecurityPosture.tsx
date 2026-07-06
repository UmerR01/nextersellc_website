import styles from "./ESDSecurityPosture.module.css";

const ITEMS = [
  {
    icon: "/esd/05_Identity-and-access-control-02.svg",
    title: "Identity and access control",
    desc: "We tie AI access to the same identity and permission model the rest of the enterprise system uses. The platform checks user rights before retrieval, limits what the model can reach, restricts which tools it can call, and holds tenant boundaries.",
  },
  {
    icon: "/esd/05_Prompt-and-tool-security-02.svg",
    title: "Prompt and tool security",
    desc: "We put policy enforcement between user input, retrieval, and every downstream action. This layer filters unsafe instructions, blocks prompt-injection patterns, constrains tool execution, validates outputs before they reach other systems, and sends higher-risk actions to human review.",
  },
  {
    icon: "/esd/05_Data-integrity-and-retrieval-security-03.svg",
    title: "Data integrity and retrieval security",
    desc: "We protect the data layer that feeds AI features. That includes source validation, document-provenance checks, indexing controls, poisoning detection, and isolation between retrieval services and core records, so untrusted content can't shape model behavior unchecked.",
  },
  {
    icon: "/esd/05_Model-runtime-and-network-boundaries-02.svg",
    title: "Model runtime and network boundaries",
    desc: "We keep model services, vector stores, and core systems in controlled network segments, with private connectivity where it's required. Write actions don't pass straight from the model to the database. They move through governed APIs, business rules, approval logic, and audit logs.",
  },
  {
    icon: "/esd/05_Secure-delivery-and-observability-03.svg",
    title: "Secure delivery and observability",
    desc: "We build security controls into the delivery pipelines and runtime monitoring. We log prompts, retrieved sources, model responses, tool calls, and permission decisions, so teams can investigate failures, review system behavior, and meet audit requirements.",
  },
  {
    icon: "/esd/05_Security-baseline-01.svg",
    title: "Security baseline",
    desc: "Alongside the AI-specific controls, we still apply the standard protections enterprise software requires: encryption in transit and at rest, secret management, secure continuous integration and delivery (CI/CD), backup policies, and operational monitoring.",
  },
];

export default function ESDSecurityPosture() {
  return (
    <section id="ai-first-security-posture" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>AI-first security posture</h2>
        <p className={styles.intro}>
          Enterprise systems usually have perimeter security already. The harder problem starts when AI touches internal
          data, retrieval pipelines, tool access, and business actions. We design AI-enabled systems with controls for
          prompt injection, data and model poisoning, sensitive-information disclosure, excessive agency, and unbounded
          consumption, on top of the baseline requirements for encryption, access control, logging, and recovery.
        </p>
        <div className={styles.grid}>
          {ITEMS.map((item, i) => (
            <div key={i} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icon} alt={item.title} width={56} height={56} className={styles.icon} loading="lazy" />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
