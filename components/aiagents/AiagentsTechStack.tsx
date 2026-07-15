import styles from "./AiagentsPage.module.css";

type Logo = { src: string; alt: string };

const ROWS: { title: string; logos: Logo[] }[] = [
  {
    title: "Foundational models",
    logos: [
      { src: "/ai-agents-development/tech/row1_tool1.svg", alt: "Azure OpenAI" },
      { src: "/ai-agents-development/tech/row1_tool2.svg", alt: "AWS Bedrock" },
      { src: "/ai-agents-development/tech/row1_tool3.svg", alt: "Anthropic" },
      { src: "/ai-agents-development/tech/row1_tool4.svg", alt: "Meta Llama" },
      { src: "/ai-agents-development/tech/row1_tool5.svg", alt: "Mistral AI" },
    ],
  },
  {
    title: "Orchestration & Agents",
    logos: [
      { src: "/ai-agents-development/tech/row2_tool1.svg", alt: "LangChain" },
      { src: "/ai-agents-development/tech/row2_tool2.svg", alt: "LlamaIndex" },
      { src: "/ai-agents-development/tech/row2_tool3.svg", alt: "AutoGen" },
      { src: "/ai-agents-development/tech/row2_tool4.svg", alt: "CrewAI" },
    ],
  },
  {
    title: "Enterprise memory (vector databases)",
    logos: [
      { src: "/ai-agents-development/tech/row3_tool1.svg", alt: "pgvector" },
      { src: "/ai-agents-development/tech/row3_tool2.svg", alt: "Qdrant" },
      { src: "/ai-agents-development/tech/row3_tool3.svg", alt: "Pinecone" },
      { src: "/ai-agents-development/tech/row3_tool4.svg", alt: "Weaviate" },
    ],
  },
  {
    title: "Data processing & Multi-modal",
    logos: [
      { src: "/ai-agents-development/tech/row4_tool1.svg", alt: "Apache Spark" },
      { src: "/ai-agents-development/tech/row4_tool2.svg", alt: "Databricks" },
      { src: "/ai-agents-development/tech/row4_tool3.svg", alt: "Unstructured" },
      { src: "/ai-agents-development/tech/row4_tool4.svg", alt: "Whisper" },
    ],
  },
  {
    title: "LLMOps & Evaluation",
    logos: [
      { src: "/ai-agents-development/tech/row5_tool1.svg", alt: "LangSmith" },
      { src: "/ai-agents-development/tech/row5_tool2.svg", alt: "Ragas" },
      { src: "/ai-agents-development/tech/row5_tool3.svg", alt: "Weights & Biases" },
      { src: "/ai-agents-development/tech/row5_tool4.svg", alt: "MLflow" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    logos: [
      { src: "/ai-agents-development/tech/row6_tool1.svg", alt: "AWS" },
      { src: "/ai-agents-development/tech/row6_tool2.svg", alt: "Microsoft Azure" },
      { src: "/ai-agents-development/tech/row6_tool3.svg", alt: "Docker" },
      { src: "/ai-agents-development/tech/row6_tool4.svg", alt: "Kubernetes" },
    ],
  },
];

export default function AiagentsTechStack() {
  return (
    <section id="ai-tech" className={styles.techStackSection}>
      <div className="container">
        <h2 className={styles.techStackTitle}>
          Some AI <span className={styles.accent}>tech stack</span> we work with
        </h2>
        <div className={styles.techRows}>
          {ROWS.map((row) => (
            <div key={row.title} className={styles.techRow}>
              <div className={styles.techRowLabel}>{row.title}</div>
              <div className={styles.techLogos}>
                {row.logos.map((logo) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={logo.src} src={logo.src} alt={logo.alt} className={styles.techLogoImg} loading="lazy" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
