import styles from "./ARTimeline.module.css";

const STEPS = [
  {
    num: "1",
    title: "Week 1. Discovery and technical deep dive",
    desc: "We start with an NDA and a structured kickoff. Then we interview stakeholders across technology, operations, and business ownership to define the target problem and its boundaries. After that, our team runs a read-only review of your systems, data sources, integrations, and cloud setup.",
  },
  {
    num: "2",
    title: "Week 2. Security mapping and blueprinting",
    desc: "We define the likely solution path, identify technical blockers, model the security boundary, and estimate cost. By the end of the second week, you receive an explicit recommendation: proceed to pilot, fix your foundation first, or solve the problem with deterministic software instead of AI.",
  },
];

export default function ARTimeline() {
  return (
    <section className={styles.section} id="timeline">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Our <span>2-week</span> audit timeline
          </h2>
        </div>
        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div key={step.num} className={`${styles.step} ${i < STEPS.length - 1 ? styles.stepWithLine : ""}`}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <div className={styles.stepDesc}>
                  <p>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
