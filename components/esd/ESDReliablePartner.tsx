import styles from "./ESDReliablePartner.module.css";

export default function ESDReliablePartner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          What makes Nexterse LLC <span className={styles.accent}>a reliable partner</span>
        </h2>
        <div className={styles.row}>
          <div className={styles.left}>
            <ul className={styles.list}>
              <li>We have delivered software in 25+ countries and across multiple business domains.</li>
              <li>We focus on long-term cooperation with average client engagement running 3+ years.</li>
              <li>We work transparently and keep delivery visible.</li>
              <li>
                When AI is part of the system, we add ADLC controls to the delivery process: standard enterprise
                software follows established engineering and QA practices.
              </li>
            </ul>
            <p className={styles.extra}>
              For the AI scope, we extend that process with ADLC so that architecture, evaluation, cost control, access
              governance, and production behavior are handled in a structured way.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.imgWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/esd/12_Business-analysis-services-results-1024x846.jpg"
                alt="Business analysis specialist working"
                className={styles.img}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
