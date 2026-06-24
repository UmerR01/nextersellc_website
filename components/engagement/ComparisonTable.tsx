import styles from "./ComparisonTable.module.css";

const FEATURES = [
  "Applicable for pilot projects and initial phases (Phase 0)",
  "For projects requiring specific expertise (domain/product experience)",
  "Detailed specifications required before start",
  "Minimal contract duration",
  "Final total price guaranteed before start",
  "Lowest hourly rates",
  "Tends to give the lowest overall cost",
  "Invoicing interval",
  "Customer controls team member assignments",
  "Permitted requirement changes after start",
  "Multiple projects covered under one contract",
];

const COLS = [
  {
    label: "Fixed Price (FP)",
    data: ["Yes", "Yes", "Yes", "Any (no minimum)", "Yes", "No", "No", "Every milestone", "No", "Minimal (contract amendments only)", "Limited"],
  },
  {
    label: "Time & Materials (T&M)",
    data: ["Yes", "No", "No", "1 calendar month", "No", "No", "Yes (for a single project)", "Monthly (or per sprint)", "No", "Any (unlimited)", "Yes"],
  },
  {
    label: "T&M + Cap",
    data: ["Yes", "No", "No", "1 calendar month", "Yes", "No", "Yes (for a single project)", "Monthly (or per sprint)", "No", "Some (limited)", "Limited"],
  },
  {
    label: "Dedicated Team (DT)",
    data: ["No", "Yes", "No", "3 calendar months", "No", "Yes", "Yes (for long-term projects)", "Monthly", "Yes", "Any (unlimited)", "Yes"],
  },
];

export default function ComparisonTable() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <table className={styles.tableDesktop}>
          <thead>
            <tr>
              <th scope="col">Feature or limitation</th>
              {COLS.map((c) => <th key={c.label} scope="col">{c.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((feat, fi) => (
              <tr key={fi}>
                <td>{feat}</td>
                {COLS.map((c) => <td key={c.label}>{c.data[fi]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.tableMobile}>
          <div className={styles.mobileCol}>
            <div className={styles.mobileColTitle}>Feature or limitation</div>
            <div className={styles.mobileColData}>
              {FEATURES.map((f, i) => <div key={i} className={styles.mobileCell}>{f}</div>)}
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.label} className={styles.mobileCol}>
              <div className={styles.mobileColTitle}>{c.label}</div>
              <div className={styles.mobileColData}>
                {c.data.map((d, i) => <div key={i} className={styles.mobileCell}>{d}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
