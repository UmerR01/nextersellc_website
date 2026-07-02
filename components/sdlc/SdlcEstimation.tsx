import Image from "next/image";
import styles from "./SdlcEstimation.module.css";

export default function SdlcEstimation() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className="container">
          <h2 className={styles.title}>
            <span className={styles.accent}>How</span> Nexterse estimates and prices projects
          </h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Image
                  src="/sdlc/06_Estimation-methodology-02.svg"
                  alt="Estimation methodology"
                  width={56}
                  height={56}
                />
              </div>
              <h3 className={styles.cardTitle}>Estimation methodology</h3>
              <div className={styles.cardDesc}>
                <p>
                  Nexterse estimates using a three-point model: each task receives an optimistic,
                  most-likely, and pessimistic figure. Requirements are prioritised with MoSCoW to
                  separate scope that must ship from scope that can flex. Estimates are broken down
                  by module and task, with a risk buffer calculated against the project's complexity
                  and integration footprint. The output is an annotated range – not a single number
                  delivered without explanation.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Image
                  src="/sdlc/06_Pricing-models-03.svg"
                  alt="Pricing models"
                  width={56}
                  height={56}
                />
              </div>
              <h3 className={styles.cardTitle}>Pricing models</h3>
              <div className={styles.cardDesc}>
                <p>
                  Nexterse structures commercial engagements under four models: Fixed Price for
                  projects with well-defined scope; Time &amp; Material for evolving or exploratory
                  work; Time &amp; Material with a budget cap for Clients who need flexibility
                  within a spend ceiling; and Dedicated Team for Clients who need a fully staffed
                  engineering function running under their direction. The right model is selected
                  during Project Analysis, before the contract is signed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
