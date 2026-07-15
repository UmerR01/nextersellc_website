import styles from "./GenaiPage.module.css";

const ROWS: { title: string; count: number }[] = [
  { title: "Foundational models", count: 5 },
  { title: "Orchestration and agent frameworks", count: 4 },
  { title: "Memory layer – vector databases", count: 4 },
  { title: "LLMOps and evaluation frameworks", count: 4 },
];

export default function GenaiTechStack() {
  return (
    <section id="genai-tech" className={styles.techStackSection}>
      <div className="container">
        <h2 className={styles.techStackTitle}>
          What&rsquo;s in Nexterse LLC&rsquo;s generative AI <span className={styles.accent}>tech stack?</span>
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
                    src={`/genai-development/tech/row${ri + 1}_tool${i + 1}.svg`}
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
