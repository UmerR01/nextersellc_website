import styles from "./IndustryTable.module.css";

const ROWS = [
  {
    industry: "Healthcare",
    commonModel: "Dedicated Team",
    why: "Continuity for compliance",
    alternative: "T&M with a cap",
    when: "Initial MVP or pilot",
  },
  {
    industry: "Fintech",
    commonModel: "T&M with a cap",
    why: "Regulated features keep evolving",
    alternative: "Fixed Price",
    when: "Specific compliance modules",
  },
  {
    industry: "Logistics and IoT",
    commonModel: "Dedicated Team",
    why: "Multi-year platforms",
    alternative: "Time and Materials",
    when: "New integrations or experiments",
  },
  {
    industry: "Startups and MVPs",
    commonModel: "T&M with a cap",
    why: "Budget protection is critical",
    alternative: "Fixed Price",
    when: "Bounded feasibility build",
  },
  {
    industry: "Enterprise modernization",
    commonModel: "Dedicated Team",
    why: "Long-term ownership",
    alternative: "Mixed",
    when: "Phased, with a Fixed Price discovery",
  },
  {
    industry: "AI and ADLC",
    commonModel: "T&M with a cap",
    why: "Model performance is empirical",
    alternative: "Dedicated Team",
    when: "Ongoing production with retraining",
  },
];

export default function IndustryTable() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Which model each industry tends to use</h2>
        <p className={styles.description}>
          Patterns vary by industry because compliance load, scope stability, and engagement length vary. The matrix shows the model most Clients in each industry start with and the alternative they switch to when the situation calls for it.
        </p>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Industry</th>
                <th>Common model</th>
                <th>Why</th>
                <th>Alternative</th>
                <th>When the alternative applies</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.industry}>
                  <td>{row.industry}</td>
                  <td>{row.commonModel}</td>
                  <td>{row.why}</td>
                  <td>{row.alternative}</td>
                  <td>{row.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
