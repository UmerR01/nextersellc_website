import styles from "./CSAchievementsBlock.module.css";

const STATS = [
  { number: "350+", label: "Developed custom solutions" },
  { number: "25+", label: "Countries, including the USA" },
  { number: "3+", label: "Years' Client engagement" },
  { number: "70%", label: "Senior developers" },
  { number: "98%", label: "Satisfaction rate" },
];

export default function CSAchievementsBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              For <span className={styles.accent}>14+ years</span> now we have
              been responsible for your projects and we are proud of it!
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.grid}>
              {STATS.map((item, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.number}>{item.number}</div>
                  <div className={styles.label}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
