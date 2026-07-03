import styles from "./SdlcVsAdlc.module.css";

const sdlcRows = [
  "Requirements are defined and can be documented upfront or in a structured Discovery sprint.",
  "The project requires formal phase approvals – regulated industries, government contracts, enterprise procurement.",
  "Delivery teams are human-led with defined roles per phase.",
  "Predictable timelines and cost controls are a primary constraint.",
];

const adlcRows = [
  "AI agents will perform significant parts of planning, code generation, or testing.",
  "Specifications emerge through agent interaction and evolve during the build.",
  "The project's value proposition depends on autonomous agent execution.",
  "Project output depends on AI agent reasoning, retrieval, or generation – not deterministic rule execution.",
];

export default function SdlcVsAdlc() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className="container">
          <h2 className={styles.title}>
            Nexterse SDLC vs. ADLC: which lifecycle{" "}
            <span className={styles.accent}>fits</span> your project?
          </h2>
          <div className={styles.description}>
            <p>
              Nexterse runs two distinct development lifecycles. The SDLC governs projects where
              human teams execute structured phases with documented requirements and formal sign-offs
              at each gate. The <a href="/adlc">Agentic Software Development Lifecycle</a> (ADLC)
              governs projects where AI agents take active roles in planning, code generation, or
              testing – with different governance requirements, hallucination controls, and
              cost-modeling frameworks as a result. The two lifecycles are not interchangeable, and
              the right one is determined during project scoping.
            </p>
          </div>

          {/* Desktop table */}
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Use SDLC when…</th>
                  <th scope="col">Use ADLC when…</th>
                </tr>
              </thead>
              <tbody>
                {sdlcRows.map((row, i) => (
                  <tr key={i}>
                    <td><p>{row}</p></td>
                    <td><p>{adlcRows[i]}</p></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile columns */}
          <div className={styles.tableMobile}>
            <div className={styles.mobileCol}>
              <div className={styles.mobileColTitle}>Use SDLC when…</div>
              <div className={styles.mobileColData}>
                {sdlcRows.map((row, i) => (
                  <div key={i} className={styles.mobileCell}><p>{row}</p></div>
                ))}
              </div>
            </div>
            <div className={styles.mobileCol}>
              <div className={styles.mobileColTitle}>Use ADLC when…</div>
              <div className={styles.mobileColData}>
                {adlcRows.map((row, i) => (
                  <div key={i} className={styles.mobileCell}><p>{row}</p></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
