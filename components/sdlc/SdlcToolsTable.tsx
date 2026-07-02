import styles from "./SdlcToolsTable.module.css";

const rows = [
  { category: "Project management", tools: "Jira (or similar like Trello, Notion, etc)", role: "Sprint planning, backlog, bug tracking, release management" },
  { category: "Documentation", tools: "Confluence", role: "Specifications, runbooks, architecture records, decision logs" },
  { category: "Version control", tools: "GitHub / GitLab", role: "Source code repository, pull requests, code review workflow" },
  { category: "CI/CD", tools: "GitLab CI / GitHub Actions", role: "Automated build, test, and deployment pipelines" },
  { category: "Design", tools: "Figma", role: "UI/UX wireframes, interactive prototypes, design system" },
  { category: "Code quality", tools: "SonarQube", role: "Static analysis, security scanning, test coverage tracking" },
  { category: "Testing", tools: "Selenium, Postman, Jest", role: "Functional, API, and unit test automation" },
  { category: "Cloud", tools: "AWS / Azure / GCP", role: "Hosting, managed services, infrastructure provisioning" },
];

export default function SdlcToolsTable() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className="container">
          <h2 className={styles.title}>
            Engineering and delivery{" "}
            <span className={styles.accent}>tools</span>: the production stack across all phases
          </h2>
          <div className={styles.description}>
            <p>
              The tools below represent Nexterse&apos;s typical production stack. Specific selections
              are adjusted per project based on Client infrastructure, team composition, and
              technology requirements.
            </p>
          </div>

          {/* Desktop table */}
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Tools samples</th>
                  <th scope="col">Role in delivery</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.category}</strong></td>
                    <td>{row.tools}</td>
                    <td>{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile columns */}
          <div className={styles.tableMobile}>
            {["Category", "Tools samples", "Role in delivery"].map((colTitle, colIdx) => (
              <div key={colIdx} className={styles.mobileCol}>
                <div className={styles.mobileColTitle}>{colTitle}</div>
                <div className={styles.mobileColData}>
                  {rows.map((row, i) => (
                    <div key={i} className={styles.mobileCell}>
                      {colIdx === 0 && <strong>{row.category}</strong>}
                      {colIdx === 1 && <p>{row.tools}</p>}
                      {colIdx === 2 && <p>{row.role}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
