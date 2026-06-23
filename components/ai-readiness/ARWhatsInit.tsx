import styles from "./ARWhatsInit.module.css";

const CARDS = [
  {
    title: "Data architecture and hygiene",
    desc: "We review where your data lives, how it moves, who owns it, and whether it is usable for retrieval, classification, summarization, or agent workflows. This includes databases, SaaS exports, APIs, ETL jobs, metadata quality, and access logic. If a RAG system is the likely fit, we assess whether your environment can support chunking, indexing, embeddings, and retrieval quality.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <ellipse cx="24" cy="14" rx="14" ry="6" stroke="var(--color-blue)" strokeWidth="1.5"/>
        <path d="M10 14v10c0 3.3 6.3 6 14 6s14-2.7 14-6V14" stroke="var(--color-blue)" strokeWidth="1.5"/>
        <path d="M10 24v10c0 3.3 6.3 6 14 6s14-2.7 14-6V24" stroke="var(--color-blue)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Cloud and infrastructure readiness",
    desc: "We check if legacy modernization is needed and possible. That includes cloud maturity, networking, observability, environment separation, secrets handling, logging, and the fit of options such as Azure OpenAI, AWS Bedrock, open-source models, or a hybrid setup.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <path d="M34 34H14a10 10 0 110-20 10 10 0 0119.6 3.4A8 8 0 1134 34z" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Security and governance",
    desc: "We map the control model around the use case: who can see what, which data is regulated, where human approval must remain in the loop, what logs are needed for audits, which risks are acceptable, and which should block launch. Security and compliance are our core engineering concerns, including ISO 27001 and support for GDPR, HIPAA, SOC 2, and the EU AI Act.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <path d="M24 4L8 10v14c0 9.4 6.8 18.2 16 20.4C33.2 42.2 40 33.4 40 24V10L24 4z" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 24l4 4 8-8" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
    ),
  },
  {
    title: "Token economics and ROI",
    desc: "We estimate the cost to build and run the use case. That includes model calls, storage, vector database needs, hosting, monitoring, support effort, and likely growth scenarios. The goal is to see whether the business case holds before development begins.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <path d="M24 8v4m0 24v4M12 16l2.8 2.8M33.2 29.2L36 32M8 24h4m24 0h4M12 32l2.8-2.8M33.2 18.8L36 16" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="8" stroke="var(--color-blue)" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function ARWhatsInit() {
  return (
    <section className={styles.section} id="whats-in-it">
      <div className="container">
        <h2 className={styles.title}>
          AI readiness assessment: <span>what&apos;s</span> in it
        </h2>
        <p className={styles.desc}>
          Our AI assessment is a technical review of the four conditions that decide whether
          artificial intelligence can work inside your business and whether its work will be beneficial.
        </p>
        <div className={styles.grid}>
          {CARDS.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.icon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
