import styles from "./ARHero.module.css";

const POINTS = [
  "AI consulting and feasibility review",
  "Fixed-price engagement available",
  "ISO 27001-certified company",
];

const Check = () => (
  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" d="m20.25 6.75-10.5 10.5L4.5 12" />
  </svg>
);

export default function ARHero() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>&gt;</span>
          <a href="/#applied-ai">Services</a>
          <span>&gt;</span>
          <span>AI Readiness Assessment</span>
        </nav>

        <h1 className={styles.title}>
          <span>AI readiness</span> assessment for secure,<br />
          ROI-backed adoption
        </h1>

        <p className={styles.desc}>
          Nexterse&apos;s fixed-scope AI readiness assessment reviews your data architecture,
          infrastructure, security, and ROI assumptions before you invest in development,
          providing a roadmap for AI adoption.
        </p>

        <div className={styles.points}>
          {POINTS.map((p) => (
            <div key={p} className={styles.point}>
              <Check />
              <span className={styles.pointText}>{p}</span>
            </div>
          ))}
        </div>

        <div className={styles.buttons}>
          <a href="#contact" className="btn btn-accent">Book your AI readiness assessment</a>
        </div>
      </div>
    </section>
  );
}
