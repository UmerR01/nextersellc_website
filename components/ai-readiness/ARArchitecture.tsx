import styles from "./ARArchitecture.module.css";

const LEFT_ITEMS = [
  "Unstructured PDFs in shared drives",
  "Legacy ERP records with no clean API layer",
  "SaaS tools that do not speak to one another",
  "Access rights that grew over time without discipline",
];

const RIGHT_ITEMS = [
  "Source systems are mapped and prioritized",
  "Data moves through controlled ETL or event pipelines",
  "Sensitive domains are segmented",
  "Content is indexed with explicit ownership and retention rules",
  "Retrieval sits behind role-based access",
  "Model access is routed through a private, policy-controlled layer",
  "Human review stays in the workflow where risk demands it",
];

export default function ARArchitecture() {
  return (
    <section className={styles.section} id="architecture">
      <div className="container">
        <h2 className={styles.title}>
          From disconnected systems to AI-ready <span>architecture</span>
        </h2>
        <div className={styles.cols}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Disconnected systems</h3>
            <ul className={styles.list}>
              {LEFT_ITEMS.map((item) => (
                <li key={item} className={styles.item}>{item}</li>
              ))}
            </ul>
            <p className={styles.colDesc}>
              Teams want to add a copilot or an agent on top of this stack and hope the model will
              sort it out. What happens instead is uneven retrieval, wrong answers, and a serious
              risk of exposing data to the wrong users.
            </p>
          </div>
          <div className={styles.divider} aria-hidden />
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Secure AI-ready blueprint</h3>
            <ul className={styles.list}>
              {RIGHT_ITEMS.map((item) => (
                <li key={item} className={styles.item}>{item}</li>
              ))}
            </ul>
            <p className={styles.colDesc}>
              This is what an AI readiness assessment should produce: a clean path from source data
              to governed output.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
