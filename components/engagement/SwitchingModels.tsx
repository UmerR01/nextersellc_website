import styles from "./SwitchingModels.module.css";

const CARDS = [
  {
    title: "Switching mid-engagement",
    desc: "A common pattern runs Fixed Price discovery, then a Time and Materials with a cap MVP, then a Dedicated Team for production.",
  },
  {
    title: "Running models in parallel",
    desc: "A Dedicated Team can own the core platform while a Fixed Price contract delivers a specific, well-scoped feature alongside it.",
  },
  {
    title: "AI phasing",
    desc: "AI products typically start capped during the empirical build phase and move to a Dedicated Team once the system is in production and needs retraining.",
  },
];

export default function SwitchingModels() {
  return (
    <div className={styles.outer}>
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Switching and combining models</h2>
        <p className={styles.description}>
          You are not locked into one model for the life of an engagement. Most long projects move between models as the work changes, and we structure contracts to allow it.
        </p>
        <div className={styles.grid}>
          {CARDS.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/engagement/01_Reports.svg"
                  alt=""
                  width={56}
                  height={56}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
