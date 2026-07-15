import styles from "./ARStakeholders.module.css";

const CARDS = [
  {
    title: "Data for retrieval",
    desc: "Whether your documents, wikis, and records are clean, current, and permissioned enough for a RAG system to trust.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
        <path d="M12 31h17M12 37h17M12 43h17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="8" y="28" width="22" height="4" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="8" y="34" width="22" height="4" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="8" y="40" width="22" height="4" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M37 10 47 14v9.5c0 7-4.4 12.6-10 15-5.6-2.4-10-8-10-15V14l10-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="m33 25 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
      </svg>
    ),
  },
  {
    title: "Guardrails",
    desc: "Whether you have the access controls and grounding to stop a model leaking data or inventing answers.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
        <rect x="12" y="23" width="22" height="16" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M17 23v-6a6 6 0 0 1 12 0v6M34 27h7l5-5M34 35h7l5 5M46 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM46 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM43 31h6M49 34a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Token economics",
    desc: "Projected monthly cost at your expected usage, so a pilot does not turn into an open-ended bill.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
        <path d="M28 11v7M28 38v7M18 45a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM28 45a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM38 45a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM18 31v-6a10 10 0 0 1 20 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 18c-2.5 0-4.5 1.5-4.5 3.5S25.5 25 28 25s4.5 1.5 4.5 3.5S30.5 32 28 32M28 18v-3M28 35v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Use-case fit",
    desc: "Whether a copilot, a RAG assistant, or an agent is the right pattern, or whether classical ML solves it for less.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
        <rect x="16" y="13" width="24" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 13.5c.8-3.2 9.2-3.2 10 0M23 30l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
      </svg>
    ),
  },
];

export default function ARStakeholders() {
  return (
    <section className={styles.section} id="stakeholders">
      <div className="container">
        <h2 className={styles.title}>Are you ready for generative AI?</h2>
        <p className={styles.desc}>
          Generative AI has its own readiness bar, separate from classical AI and ML. A model that
          reasons over your documents needs clean, permissioned, well-structured content to retrieve
          from. It needs guardrails against hallucination and data leakage. And it needs a cost
          model, because token usage grows with every user. Our Gen AI readiness assessment checks
          four things on top of the core audit:
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
