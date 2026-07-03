import styles from "./AdlcAiEcosystem.module.css";

const cards = [
  {
    title: "Discover & Strategize",
    body: (
      <>
        <p>For companies exploring AI opportunities but unsure where to begin.</p>

        <p>
          <strong>AI consulting</strong>
        </p>
        <p>
          We help organizations identify high-impact AI use cases aligned with real business
          objectives. Our experts evaluate workflows, data availability, and operational constraints
          to determine where AI can deliver measurable improvements in efficiency, cost reduction, or
          new revenue streams.
        </p>

        <p>
          <strong>AI / Gen AI readiness assessment</strong>
        </p>
        <p>
          Before launching AI initiatives, companies must ensure their data infrastructure, security
          policies, and internal systems can support AI safely.
        </p>
        <p>Our readiness assessment evaluates:</p>
        <ul>
          <li>Data availability and quality.</li>
          <li>System architecture and integrations.</li>
          <li>Security and compliance posture.</li>
          <li>Potential ROI from AI initiatives.</li>
        </ul>
        <p>The result is a clear AI adoption roadmap with prioritized opportunities.</p>
      </>
    ),
  },
  {
    title: "Build & Customize",
    body: (
      <>
        <p>For organizations ready to develop new AI-powered products or internal tools.</p>

        <p>
          <strong>AI development</strong>
        </p>
        <p>
          We design and build production-ready AI applications that automate complex workflows,
          analyze large datasets, and support data-driven decision-making.
        </p>
        <p>Examples include:</p>
        <ul>
          <li>Predictive analytics platforms.</li>
          <li>Intelligent document processing systems.</li>
          <li>AI-driven operational dashboards.</li>
        </ul>

        <p>
          <strong>Generative AI development</strong>
        </p>
        <p>
          We create custom generative AI solutions capable of generating text, reports, media, and
          structured insights based on enterprise data.
        </p>
        <p>Common solutions include:</p>
        <ul>
          <li>AI copilots for employees.</li>
          <li>Automated report generation.</li>
          <li>AI knowledge assistants for internal documentation.</li>
        </ul>

        <p>
          <strong>LLM development</strong>
        </p>
        <p>
          For highly specialized domains, we design and train custom language models tailored to
          specific industry datasets and operational requirements.
        </p>

        <p>
          <strong>LLM fine-tuning</strong>
        </p>
        <p>
          We adapt open-source models such as Llama or Mistral using proprietary company data,
          improving domain expertise while maintaining full control over sensitive information.
        </p>
      </>
    ),
  },
  {
    title: "Augment & Integrate",
    body: (
      <>
        <p>For companies adding AI capabilities to existing software systems.</p>

        <p>
          <strong>RAG as a Service</strong>
        </p>
        <p>
          Retrieval-Augmented Generation allows AI systems to securely access internal knowledge
          bases and company documents without exposing sensitive data to public models.
        </p>
        <p>This enables solutions such as:</p>
        <ul>
          <li>Enterprise knowledge assistants.</li>
          <li>AI support agents for internal teams.</li>
          <li>Automated document search and summarization.</li>
        </ul>

        <p>
          <strong>AI integration</strong>
        </p>
        <p>
          We embed predictive intelligence into existing enterprise software, enabling systems to
          forecast trends, detect anomalies, and recommend decisions.
        </p>

        <p>
          <strong>Generative AI integration</strong>
        </p>
        <p>
          Conversational interfaces, copilots, and AI assistants can be integrated directly into
          existing products, customer portals, or internal platforms.
        </p>
      </>
    ),
  },
  {
    title: "Govern & Operate",
    body: (
      <>
        <p>
          For organizations running AI systems in production that require reliability, compliance,
          and cost control.
        </p>

        <p>
          <strong>AI model validation</strong>
        </p>
        <p>
          Independent testing ensures AI models meet accuracy, bias control, and regulatory
          compliance requirements before production deployment.
        </p>

        <p>
          <strong>LLMOps</strong>
        </p>
        <p>
          Operational infrastructure for managing language models, including prompt management,
          token cost monitoring, and model routing.
        </p>

        <p>
          <strong>MLOps</strong>
        </p>
        <p>
          CI/CD pipelines and monitoring frameworks that keep machine learning models accurate and
          scalable as data evolves.
        </p>
      </>
    ),
  },
];

export default function AdlcAiEcosystem() {
  return (
    <section className={styles.section} id="adlc-ai-ecosystem">
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Nexterse <span style={{ color: "#3CC4E5" }}>AI ecosystem</span>
          </h2>
          <div className={styles.description}>
            <p>
              Companies adopt AI at different stages of maturity. Some organizations are still
              exploring where AI could create value, while others are ready to build intelligent
              products or integrate AI capabilities into existing platforms. We support the full
              lifecycle of AI adoption from identifying opportunities for AI implementation to
              governing AI at scale.
            </p>
          </div>
          <div className={styles.grid}>
            {cards.map((card) => (
              <div key={card.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.cardBody}>{card.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
