import styles from "./AITalkExperts.module.css";

export default function AITalkExperts() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.title}>Talk to our AI experts</h2>
            <p className={styles.desc}>
              Get personalized advice for your unique project needs.
            </p>
          </div>
          <a href="#get-modal-popup" className={`btn btn-accent ${styles.btn}`}>
            Book a consulting session
          </a>
        </div>
      </div>
    </section>
  );
}

