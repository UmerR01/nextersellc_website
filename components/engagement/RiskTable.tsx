import styles from "./RiskTable.module.css";

const ROWS = [
  { riskType: "Scope creep", fp: "Nexterse LLC", tm: "Client", tmCap: "Shared", dt: "Client" },
  { riskType: "Budget overrun", fp: "Nexterse LLC", tm: "Client", tmCap: "Client, capped", dt: "Client" },
  { riskType: "Timeline slip", fp: "Nexterse LLC", tm: "Shared", tmCap: "Shared", dt: "Shared" },
  { riskType: "Quality and defects", fp: "Nexterse LLC", tm: "Nexterse LLC", tmCap: "Nexterse LLC", dt: "Nexterse LLC" },
];

export default function RiskTable() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Who carries which risk</h2>
        <p className={styles.description}>
          Procurement reviews think in risk, so here is exactly who carries what under each model. This is the same allocation written into our contracts.
        </p>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Risk type</th>
                <th>Fixed Price</th>
                <th>Time and Materials</th>
                <th>T&M with a cap</th>
                <th>Dedicated Team</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.riskType}>
                  <td>{row.riskType}</td>
                  <td>{row.fp}</td>
                  <td>{row.tm}</td>
                  <td>{row.tmCap}</td>
                  <td>{row.dt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
