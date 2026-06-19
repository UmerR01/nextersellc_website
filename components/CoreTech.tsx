import styles from "./CoreTech.module.css";

const ROWS = [
  { title: "AI foundational models", count: 6 },
  { title: "Orchestration & agent frameworks", count: 4 },
  { title: "Software development", count: 7 },
  { title: "Mobile development", count: 3 },
];

export default function CoreTech() {
  return (
    <section className={styles.section} id="tech">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <span>Core tech stack</span> we work with
        </h2>

        <div className={styles.tools}>
          {ROWS.map((row, ri) => (
            <div key={row.title} className={styles.row}>
              <div className={styles.rowTitle}>{row.title}</div>
              <div className={styles.logos}>
                {Array.from({ length: row.count }).map((_, i) => (
                  <div key={i} className={styles.logo}>
                    {/* Plain img — lets browser use the SVG's natural dimensions,
                        matching how Sumatosoft uses inline <svg class="tool"> */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/tech/r${ri + 1}-${i + 1}.svg`}
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
