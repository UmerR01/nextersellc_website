import styles from "./AdlcStartCTA.module.css";

export default function AdlcStartCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.title}>Start your AI journey</h2>
            <div className={styles.description}>
              <p>Partner with AI experts for reliable, high-quality software.</p>
            </div>
          </div>
          <div className={styles.right}>
            <a href="#get-modal-popup" className={`btn btn-accent ${styles.btn}`}>
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
