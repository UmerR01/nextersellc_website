import styles from "./ComparisonTable.module.css";

const ROWS = [
  { factor: "Scope", fp: "Flexible", tm: "Flexible", tmCap: "Flexible", dt: "Flexible" },
  { factor: "Budget", fp: "Variable", tm: "Capped", tmCap: "Fixed", dt: "Monthly per member" },
  { factor: "Best for", fp: "Evolving products", tm: "Mid-size, firm budget", tmCap: "Bounded, specified work", dt: "Long-term ownership" },
  { factor: "Typical size", fp: "$50K – $500K", tm: "$100K – $300K", tmCap: "$30K – $150K", dt: "$200K – $2M+/yr" },
  { factor: "Typical duration", fp: "3 – 18 months", tm: "3 – 9 months", tmCap: "2 – 6 months", dt: "12 months+" },
  { factor: "Who manages the team", fp: "Nexterse LLC", tm: "Nexterse LLC", tmCap: "Nexterse LLC", dt: "Client direction, Nexterse LLC delivery" },
  { factor: "SDLC project fit", fp: "Strong", tm: "Strong", tmCap: "Strong", dt: "Strong" },
  { factor: "ADLC (AI) project fit", fp: "Strong", tm: "Strongest", tmCap: "Limited, bounded PoCs only", dt: "Strongest for ongoing" },
];

export default function ComparisonTable() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Compare the four models</h2>
        <p className={styles.description}>
          The table sets the four models side by side on the factors buyers weigh most. Column order matches the rest of the page: Time and Materials, Time and Materials with a cap, Fixed Price, Dedicated Team.
        </p>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Factor</th>
                <th>Fixed Price</th>
                <th>Time and Materials</th>
                <th>T&M with a cap</th>
                <th>Dedicated Team</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.factor}>
                  <td>{row.factor}</td>
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
