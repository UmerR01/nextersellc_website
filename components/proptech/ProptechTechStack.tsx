import styles from "./ProptechTechStack.module.css";

const ROWS: { title: string; tools: string[] }[] = [
  { title: "Backend & platform services", tools: ["tool_1.svg", "tool_2.svg", "tool_3.svg"] },
  { title: "Sensor data & real-time ingestion", tools: ["tool_4.svg", "tool_5.svg"] },
  { title: "Geospatial & mapping", tools: ["tool_6.svg", "tool_7.svg"] },
  { title: "Analytics & data warehouse", tools: ["tool_8.svg", "tool_9.svg", "tool_10.svg"] },
  { title: "AI & valuation models", tools: ["tool_11.svg", "tool_12.svg", "tool_13.svg"] },
];

export default function ProptechTechStack() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Technologies</span> we work with
        </h2>

        <div className={styles.tools}>
          {ROWS.map((row) => (
            <div key={row.title} className={styles.row}>
              <div className={styles.rowTitle}>{row.title}</div>
              <div className={styles.logos}>
                {row.tools.map((tool) => (
                  <div key={tool} className={styles.logo}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/proptech-development/tech/${tool}`}
                      alt={`${row.title} technology`}
                      className={styles.logoImg}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
