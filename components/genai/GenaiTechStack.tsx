import styles from "./GenaiPage.module.css";

const ROWS: { title: string; count: number }[] = [
  { title: "Foundational models", count: 5 },
  { title: "Orchestration and agent frameworks", count: 4 },
  { title: "Memory layer – vector databases", count: 4 },
  { title: "LLMOps and evaluation frameworks", count: 4 },
];

// Intrinsic pixel dimensions for /genai-development/tech/row{r}_tool{t}.svg, indexed [row-1][tool-1]
const TECH_LOGO_DIMS: { width: number; height: number }[][] = [
  [
    { width: 258, height: 56 },
    { width: 237, height: 56 },
    { width: 258, height: 56 },
    { width: 195, height: 56 },
    { width: 265, height: 56 },
  ],
  [
    { width: 170, height: 56 },
    { width: 287, height: 56 },
    { width: 191, height: 56 },
    { width: 155, height: 56 },
  ],
  [
    { width: 275, height: 56 },
    { width: 248, height: 56 },
    { width: 177, height: 56 },
    { width: 165, height: 56 },
  ],
  [
    { width: 247, height: 56 },
    { width: 329, height: 56 },
    { width: 242, height: 56 },
    { width: 165, height: 56 },
  ],
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
                    width={TECH_LOGO_DIMS[ri][i].width}
                    height={TECH_LOGO_DIMS[ri][i].height}
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
