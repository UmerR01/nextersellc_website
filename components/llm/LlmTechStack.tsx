import styles from "./LlmPage.module.css";

const ROWS: { title: string; count: number }[] = [
  { title: "Programming languages", count: 4 },
  { title: "Databases and vector infrastructure", count: 4 },
  { title: "Models and model providers", count: 10 },
  { title: "Cloud and infrastructure", count: 5 },
  { title: "MLOps and deployment", count: 4 },
];

export default function LlmTechStack() {
  return (
    <section id="llm-tech" className={styles.techStackSection}>
      <div className="container">
        <h2 className={styles.techStackTitle}>
          Technology <span className={styles.accent}>stack</span>
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
                    src={`/llm-development/tech/row${ri + 1}_tool${i + 1}.svg`}
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
