import styles from "./WhyModelMatters.module.css";

export default function WhyModelMatters() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Why</span> the engagement model matters
        </h2>
        <div className={styles.description}>
          <p>Software development engagement models fall into two broad categories: fixed-scope contracts (Fixed Price) and flexible-scope contracts (Time and Materials, Time and Materials with a cap, and Dedicated Team).</p>
          <p>The right fit depends on how clearly your scope is defined, how much budget flexibility you have, how long the engagement will run, and whether your project involves AI components. Pick the wrong one, and you pay for it in change orders, stalled sprints, or a budget you cannot move where the work actually is.</p>
        </div>
      </div>
    </section>
  );
}
