import styles from "./AchievementsBlock.module.css";

const ACHIEVEMENTS = [
  { number: "350+", label: "Custom products delivered across 12+ industries" },
  { number: "27+", label: "Clients served across the USA, EU, and beyond" },
  { number: "14+", label: "years of custom software development" },
  { number: "70%", label: "Senior engineers" },
  { number: "70%", label: "Clients return" },
];

export default function AchievementsBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Since 2012, we&apos;ve delivered custom software from Boston and Warsaw.
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.grid}>
              {ACHIEVEMENTS.map((item, i) => (
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
