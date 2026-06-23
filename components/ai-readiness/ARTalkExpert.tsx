import styles from "./ARTalkExpert.module.css";

export default function ARTalkExpert() {
  return (
    <section className={styles.section} id="talk-expert">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <h2 className={styles.title}>Talk to our AI Expert</h2>
          <p className={styles.desc}>Get personalized advice for your AI project needs.</p>
        </div>
        <div className={styles.right}>
          <a href="#contact" className="btn btn-accent">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
