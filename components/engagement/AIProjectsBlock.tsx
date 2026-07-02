import styles from "./AIProjectsBlock.module.css";

const LIST_ITEMS = [
  {
    label: "LLM integration",
    text: "Time and Materials or Time and Materials with a cap. Scope firms up quickly once prompts and guardrails are set.",
  },
  {
    label: "RAG systems",
    text: "Time and Materials with a cap. Retrieval quality is tuned empirically against your data.",
  },
  {
    label: "Custom ML models",
    text: "Time and Materials with a cap. Performance depends on data and iteration, not on a spec.",
  },
  {
    label: "AI agents",
    text: "Time and Materials with a cap, moving to a Dedicated Team for production. Agent behavior needs governance and continuous evaluation.",
  },
  {
    label: "AI proof of concept",
    text: "Fixed Price is acceptable when the evaluation criteria are explicit and the scope is bounded.",
  },
];

export default function AIProjectsBlock() {
  return (
    <div className={styles.outer}>
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Engagement models for AI projects</h2>
        <p className={styles.paragraph}>
          AI projects behave differently from traditional builds, so the engagement model has to behave differently, too. Traditional software follows the SDLC, where requirements can be specified, and a fixed price can be held. AI work follows the ADLC, the Agentic Development Lifecycle, where model performance is discovered through evaluation rather than declared upfront. That difference changes which model fits.
        </p>
        <p className={styles.paragraph}>
          For AI work, Time and Materials with a cap is the primary recommendation: it protects the budget while leaving room for the empirical loop of testing, measuring, and refining. Fixed Price is discouraged for production AI because no specification can promise a quality bar that only evaluation can establish. A Dedicated Team becomes the strongest fit once an AI product is live and needs ongoing model maintenance and retraining. A common path runs through three phases: a Fixed Price discovery to define the problem, a Time and Materials with a cap MVP to build and evaluate, then a Dedicated Team for production and ongoing model care.
        </p>
        <div className={styles.row}>
          <div className={styles.leftCol}>
            <p className={styles.introText}>The fit also depends on the kind of AI you are building:</p>
            <ul className={styles.list}>
              {LIST_ITEMS.map((item) => (
                <li key={item.label} className={styles.listItem}>
                  <span className={styles.check}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8.5L6.5 12L13 5" stroke="#3CC4E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className={styles.listBody}>
                    <strong className={styles.listLabel}>{item.label}</strong>
                    <span className={styles.listText}>{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.imageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/engagement/03_pexels-fauxels-3184653-683x1024-2.jpg"
                alt="AI project engagement"
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
