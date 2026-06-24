import styles from "./ARFoundation.module.css";

const CARDS = [
  {
    title: "Protected data",
    desc: "Sensitive information remains limited to authorized users and approved workflows.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <path d="M24 4L8 10v14c0 9.4 6.8 18.2 16 20.4C33.2 42.2 40 33.4 40 24V10L24 4z" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 24l4 4 8-8" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
    ),
  },
  {
    title: "Cost visibility",
    desc: "Cloud and token spend are easier to forecast before development starts.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <circle cx="24" cy="24" r="18" stroke="var(--color-blue)" strokeWidth="1.5"/>
        <path d="M24 14v2m0 16v2M18 24h12" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 20h8v8H20z" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Compliance coverage",
    desc: "Security, auditability, and retention requirements are built into the design from the start.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <rect x="10" y="8" width="28" height="34" rx="2" stroke="var(--color-blue)" strokeWidth="1.5"/>
        <path d="M16 18h16M16 24h16M16 30h10" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 28l3 3-3 3" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
    ),
  },
  {
    title: "Workflow fit",
    desc: "AI supports the process by adding value rather than sitting atop existing inefficiencies.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <rect x="6" y="16" width="10" height="10" rx="1" stroke="var(--color-blue)" strokeWidth="1.5"/>
        <rect x="20" y="10" width="10" height="10" rx="1" stroke="var(--color-blue)" strokeWidth="1.5"/>
        <rect x="20" y="28" width="10" height="10" rx="1" stroke="var(--color-blue)" strokeWidth="1.5"/>
        <rect x="34" y="16" width="10" height="10" rx="1" stroke="var(--color-blue)" strokeWidth="1.5"/>
        <path d="M16 21h4M30 15l4 6M30 33l4-6" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ARFoundation() {
  return (
    <section className={styles.section} id="foundation">
      <div className="container">
        <h2 className={styles.title}>
          Strong AI starts with a ready <span>foundation</span>
        </h2>
        <p className={styles.desc}>
          Generative AI can improve search, summarization, classification, and workflow automation.
          To do that well, it needs structured data, clear access rules, and an environment that can
          support secure deployment. That is why the AI readiness assessment comes first. Before you
          invest in a pilot or a broader rollout, it helps to confirm that your data foundation and
          delivery environment can support the outcome you want.
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
