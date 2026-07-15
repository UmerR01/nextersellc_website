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
            <div className={styles.icon} aria-hidden>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path d="M28 8v7M28 41v7M12 28h7M37 28h7M16.7 16.7l5 5M34.3 34.3l5 5M39.3 16.7l-5 5M21.7 34.3l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                <path d="M28 19.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M28 3.5 33 8l-5 4.5L23 8l5-4.5ZM28 43.5 33 48l-5 4.5L23 48l5-4.5ZM3.5 28 8 23l4.5 5L8 33l-4.5-5ZM43.5 28 48 23l4.5 5L48 33l-4.5-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
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
            <div className={styles.icon} aria-hidden>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path d="M17 16.5 27 8h9a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V19.5c0-1.2.4-2.2 1-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M18 18h8a2 2 0 0 0 2-2V9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M28 22 36 25v6.5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V25l8-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="m24.5 31 2.5 2.5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </div>
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
