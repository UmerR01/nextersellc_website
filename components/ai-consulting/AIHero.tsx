import styles from "./AIHero.module.css";

const POINTS = [
  "A clear roadmap from AI strategy to production",
  "Predictable ROI from AI initiatives",
  "Secure architecture for GenAI and data",
];

const Check = () => (
  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" d="m20.25 6.75-10.5 10.5L4.5 12" />
  </svg>
);

export default function AIHero() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>&gt;</span>
          <a href="/#applied-ai">Services</a>
          <span>&gt;</span>
          <span>AI Consulting</span>
        </nav>

        <h1 className={styles.title}>
          <span>AI strategy</span> without the hype.<br />
          Innovation with measurable ROI.
        </h1>

        <p className={styles.desc}>
          Stop guessing how AI fits into your business. Nexterse&apos;s AI consulting
          services help organizations identify the highest-ROI opportunities for
          artificial intelligence and design secure, production-ready solutions.
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
          <a href="#contact" className="btn btn-accent">Book AI Discovery Workshop</a>
        </div>
      </div>
    </section>
  );
}
