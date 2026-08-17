import styles from "./DownloadCTA.module.css";

export default function DownloadCTA() {
  return (
    <div className={styles.outer}>
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.title}>Talk through your options</h2>
            <div className={styles.description}>
              <p>Not sure which model fits your project? Talk to our engagement specialist for a recommendation based on your scope, budget, and timeline.</p>
            </div>
          </div>
          <div className={styles.right}>
            <a href="#get-modal-popup" className={`btn btn-accent ${styles.btn}`}>
              Schedule a 30-minute discovery call
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
