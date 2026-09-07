import styles from "./LlmPage.module.css";

const ROWS: { title: string; count: number }[] = [
  { title: "Programming languages", count: 4 },
  { title: "Databases and vector infrastructure", count: 4 },
  { title: "Models and model providers", count: 10 },
  { title: "Cloud and infrastructure", count: 5 },
  { title: "MLOps and deployment", count: 4 },
];

// Real intrinsic pixel dimensions for /llm-development/tech/row{row}_tool{n}.svg files.
const DIMS: [number, number][][] = [
  [[137, 56], [90, 56], [56, 56], [56, 56]],
  [[142, 56], [165, 56], [137, 56], [145, 56]],
  [[180, 56], [159, 56], [169, 56], [150, 56], [195, 56], [175, 56], [79, 56], [154, 56], [201, 56], [128, 56]],
  [[202, 56], [122, 56], [230, 56], [179, 56], [62, 56]],
  [[153, 56], [191, 56], [172, 56], [128, 56]],
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
                {Array.from({ length: row.count }).map((_, i) => {
                  const [w, h] = DIMS[ri][i];
                  return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={`/llm-development/tech/row${ri + 1}_tool${i + 1}.svg`}
                      alt={`${row.title} technology`}
                      width={w}
                      height={h}
                      className={styles.techLogoImg}
                      loading="lazy"
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
