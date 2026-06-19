import styles from "./StatsBlock.module.css";

/** About / stats — replicated from Sumato's "for-ten-years-block". */
const STATS = [
  { number: "350+", title: "Developed custom solutions" },
  { number: "25+", title: "Countries, including the USA" },
  { number: "3+", title: "Years’ client engagement" },
  { number: "70%", title: "Senior engineers" },
  { number: "98%", title: "Satisfaction rate" },
];

export default function StatsBlock() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.row}>
          <div className={styles.titleCol}>
            <h2 className={styles.title}>
              Engineering you can audit. Code you can scale. Partners you can{" "}
              <span>trust</span>.
            </h2>
          </div>
          <div className={styles.statsCol}>
            <div className={styles.wrapper}>
              {STATS.map((s) => (
                <div key={s.title} className={styles.achievement}>
                  <div className={styles.number}>{s.number}</div>
                  <div className={styles.achTitle}>{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
