import styles from "./AiIntegrationPage.module.css";

type Size = { width: number; height: number };

const ROWS: { title: string; sizes: Size[] }[] = [
  {
    title: "AI platforms and models",
    sizes: [
      { width: 180, height: 56 },
      { width: 258, height: 56 },
      { width: 258, height: 56 },
      { width: 237, height: 56 },
      { width: 169, height: 56 },
    ],
  },
  {
    title: "Vector search and retrieval",
    sizes: [
      { width: 165, height: 56 },
      { width: 275, height: 56 },
      { width: 215, height: 56 },
      { width: 248, height: 56 },
      { width: 145, height: 56 },
    ],
  },
  {
    title: "Cloud and deployment",
    sizes: [
      { width: 122, height: 56 },
      { width: 202, height: 56 },
      { width: 230, height: 56 },
      { width: 233, height: 56 },
      { width: 62, height: 56 },
    ],
  },
  {
    title: "Monitoring and operations",
    sizes: [
      { width: 150, height: 56 },
      { width: 232, height: 56 },
      { width: 201, height: 56 },
      { width: 256, height: 56 },
      { width: 123, height: 56 },
    ],
  },
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
                {row.sizes.map((size, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={`/ai-integration/tech/row${ri + 1}_tool${i + 1}.svg`}
                    alt={`${row.title} technology`}
                    className={styles.techLogoImg}
                    width={size.width}
                    height={size.height}
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
