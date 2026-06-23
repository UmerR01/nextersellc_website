import styles from "./ARPath.module.css";

const STEPS = [
  { num: "1", label: "14-day AI readiness assessment" },
  { num: "2", label: "Foundation work, if needed" },
  { num: "3", label: "4-week proof-of-concept" },
  { num: "4", label: "Production rollout" },
];

export default function ARPath() {
  return (
    <section className={styles.section} id="path">
      <div className="container">
        <h2 className={styles.title}>
          <span>Path</span> from assessment to deployment
        </h2>
        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <div key={s.num} className={styles.step}>
              {i > 0 && <div className={styles.connector} />}
              <div className={styles.circle}>{s.num}</div>
              <p className={styles.label}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
