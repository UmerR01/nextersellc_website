import styles from "./ARStakeholders.module.css";

const CARDS = [
  {
    title: "Technical fit",
    desc: "We assess whether your systems, integrations, cloud setup, and access model can support AI without creating architectural debt.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <rect x="8" y="8" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="26" y="8" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="8" y="26" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="26" y="26" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Budget clarity",
    desc: "We estimate the likely cost of the target use case, including infrastructure, model usage, and delivery effort.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M24 12v3m0 18v3M18 21c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2.5-1.5 4.7-3.7 5.6L24 28v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="33" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Operational value",
    desc: "We identify where AI can reduce delays, remove manual work, improve throughput, or where it can be integrated into legacy software.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <path d="M8 36l10-12 8 8 6-8 8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 12v8h-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Security and compliance",
    desc: "We map the controls needed to protect sensitive data and support regulated workflows.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <path d="M24 6L10 12v14c0 9.4 6.2 18.2 14 20.4C31.8 44.2 38 35.4 38 26V12L24 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
    ),
  },
];

export default function ARStakeholders() {
  return (
    <section className={styles.section} id="stakeholders">
      <div className="container">
        <h2 className={styles.title}>
          <span>Answers</span> each stakeholder needs before approving AI use
        </h2>
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
