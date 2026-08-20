import styles from "./ESDStandards.module.css";

export default function ESDStandards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Enterprise software built on <span className={styles.accent}>standards</span>
        </h2>
        <div className={styles.row}>
          <div className={styles.left}>
            <p className={styles.desc}>
              We build enterprise software around security, compliance, accessibility, and audit requirements from the
              start. Where AI is part of the scope, we apply the same discipline to model access, retrieval, logging,
              and human review. Our delivery is backed by ISO 9001:2015 and ISO/IEC 27001:2022-certified operations, and
              we support projects aligned with the standards and frameworks listed below.
            </p>
            <ul className={styles.list}>
              <li>GDPR</li>
              <li>ISO 9001:2015</li>
              <li>ISO/IEC 27001:2022</li>
              <li>HIPAA</li>
              <li>PCI DSS</li>
              <li>SOC 2</li>
              <li>WCAG</li>
              <li>OWASP</li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.imgWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/esd/esd-standard.jpg"
                alt="Enterprise software built on standards"
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
