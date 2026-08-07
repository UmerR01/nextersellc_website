import styles from "./ESDDownloadCTA.module.css";

export default function ESDDownloadCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textCol}>
            <h2 className={styles.title}>Your next competitive advantage starts now</h2>
            <p className={styles.desc}>Start your custom AI enterprise software journey.</p>
          </div>
          <div className={styles.btnCol}>
            <a href="#get-modal-popup" className={`btn btn-accent ${styles.btn}`}>
              Plan your enterprise software project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
