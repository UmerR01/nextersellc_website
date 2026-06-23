import styles from "./ARChecklist.module.css";

export default function ARChecklist() {
  return (
    <section className={styles.section} id="checklist">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <h2 className={styles.title}>AI Readiness Checklist</h2>
          <p className={styles.desc}>Partner with reliable AI experts to build your software.</p>
        </div>
        <div className={styles.right}>
          <a href="#contact" className="btn btn-accent">
            Book your AI readiness assessment
          </a>
        </div>
      </div>
    </section>
  );
}
