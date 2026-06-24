import styles from "./AIWontForce.module.css";

const TABLE_ROWS = [
  {
    dim: "System Behavior",
    sdlc: "Fully predictable outputs for given inputs",
    adlc: "Outputs may vary based on data, context, and model reasoning",
  },
  {
    dim: "Core Technologies",
    sdlc: "Backend systems, APIs, databases, business logic",
    adlc: "Machine learning models, LLMs, RAG systems, autonomous agents",
  },
  {
    dim: "Data Requirements",
    sdlc: "Structured data for transactions and operations",
    adlc: "Large datasets for training, inference, or knowledge retrieval",
  },
  {
    dim: "Development Focus",
    sdlc: "Engineering reliable systems and workflows",
    adlc: "Building intelligent systems that learn, generate, or optimize",
  },
  {
    dim: "QA Approach",
    sdlc: "Unit testing, integration testing, QA automation",
    adlc: "Model evaluation, prompt testing, safety checks, human-in-the-loop validation",
  },
  {
    dim: "Risk Profile",
    sdlc: "Low operational unpredictability",
    adlc: "Requires guardrails, monitoring, and governance",
  },
];

export default function AIWontForce() {
  return (
    <section className={styles.section} id="sdlc">
      <div className="container">
        <h2 className={styles.title}>
          We won&apos;t force AI{" "}
          <span>if you don&apos;t need it</span>
        </h2>

        <div className={styles.desc}>
          <p>
            Not every business challenge requires machine learning, generative AI, or autonomous agents.
            In many cases, the fastest and safest solution is still well-engineered traditional software.
          </p>
          <p>At Nexterse, we operate as a Dual-Engine engineering firm.</p>
          <p>
            This means we bring together two complementary capabilities and understand exactly when to
            apply each one: Development of traditional software (SDLC) or Development of AI &amp; agentic
            systems (ADLC).
          </p>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Dimension</th>
                <th>Traditional Software Development (SDLC)</th>
                <th>AI / Agentic Development (ADLC)</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row) => (
                <tr key={row.dim}>
                  <td><strong>{row.dim}</strong></td>
                  <td>{row.sdlc}</td>
                  <td>{row.adlc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
