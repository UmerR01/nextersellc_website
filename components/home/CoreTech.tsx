import styles from "./CoreTech.module.css";

const ROWS: { title: string; logos: string[] }[] = [
  {
    title: "AI foundational models",
    logos: ["r1-1.svg", "r1-2.svg", "r1-3.svg", "r1-4.svg", "r1-5.svg", "r1-6.svg"],
  },
  {
    title: "Orchestration & agent frameworks",
    logos: ["r2-1.svg", "r2-2.svg", "r2-3.svg", "r2-4.svg"],
  },
  {
    title: "Software development",
    // r3-4.svg is the R statistical language logo — removed per design decision
    logos: ["r3-1.svg", "r3-2.svg", "r3-3.svg", "r3-5.svg", "r3-6.svg", "r3-7.svg"],
  },
  {
    title: "Mobile development",
    logos: ["r4-1.svg", "r4-2.svg", "r4-3.svg"],
  },
];

export default function CoreTech() {
  return (
    <section className={styles.section} id="tech">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <span>Core tech stack</span> we work with
        </h2>

        <div className={styles.tools}>
          {ROWS.map((row) => (
            <div key={row.title} className={styles.row}>
              <div className={styles.rowTitle}>{row.title}</div>
              <div className={styles.logos}>
                {row.logos.map((file) => (
                  <div key={file} className={styles.logo}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/tech/${file}`}
                      alt=""
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
