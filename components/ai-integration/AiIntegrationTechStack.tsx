import styles from "./AiIntegrationPage.module.css";

const ROWS: { title: string; count: number }[] = [
  { title: "AI platforms and models", count: 5 },
  { title: "Vector search and retrieval", count: 5 },
  { title: "Cloud and deployment", count: 5 },
  { title: "Monitoring and operations", count: 5 },
];

export default function AiIntegrationTechStack() {
  return (
    <section id="aii-tech" className={styles.techStackSection}>
      <div className="container">
        <h2 className={styles.techStackTitle}>
          <span className={styles.accent}>Technologies</span> we work with
        </h2>
        <div className={styles.techRows}>
          {ROWS.map((row, ri) => (
            <div key={row.title} className={styles.techRow}>
              <div className={styles.techRowLabel}>{row.title}</div>
              <div className={styles.techLogos}>
                {Array.from({ length: row.count }).map((_, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={`/ai-integration/tech/row${ri + 1}_tool${i + 1}.svg`}
                    alt={`${row.title} technology`}
                    className={styles.techLogoImg}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
