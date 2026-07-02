import styles from "./CSDownloadCTA.module.css";

export default function CSDownloadCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Ready to start your software product development?
            </h2>
            <p className={styles.desc}>
              Drop us a line and get a free analysis and time estimation.
            </p>
          </div>
          <div className={styles.action}>
            <a href="#get-modal-popup" className={styles.button}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
