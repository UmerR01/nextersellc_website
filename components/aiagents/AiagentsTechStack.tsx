import styles from "./AiagentsPage.module.css";

type Logo = { src: string; alt: string; width: number; height: number };

const ROWS: { title: string; logos: Logo[] }[] = [
  {
    title: "Foundational models",
    logos: [
      { src: "/ai-agents-development/tech/row1_tool1.svg", alt: "Azure OpenAI", width: 194, height: 56 },
      { src: "/ai-agents-development/tech/row1_tool2.svg", alt: "AWS Bedrock", width: 237, height: 56 },
      { src: "/ai-agents-development/tech/row1_tool3.svg", alt: "Anthropic", width: 258, height: 56 },
      { src: "/ai-agents-development/tech/row1_tool4.svg", alt: "Meta Llama", width: 195, height: 56 },
      { src: "/ai-agents-development/tech/row1_tool5.svg", alt: "Mistral AI", width: 265, height: 56 },
    ],
  },
  {
    title: "Orchestration & Agents",
    logos: [
      { src: "/ai-agents-development/tech/row2_tool1.svg", alt: "LangChain", width: 234, height: 56 },
      { src: "/ai-agents-development/tech/row2_tool2.svg", alt: "LlamaIndex", width: 287, height: 56 },
      { src: "/ai-agents-development/tech/row2_tool3.svg", alt: "AutoGen", width: 191, height: 56 },
      { src: "/ai-agents-development/tech/row2_tool4.svg", alt: "CrewAI", width: 155, height: 56 },
    ],
  },
  {
    title: "Enterprise memory (vector databases)",
    logos: [
      { src: "/ai-agents-development/tech/row3_tool1.svg", alt: "pgvector", width: 177, height: 56 },
      { src: "/ai-agents-development/tech/row3_tool2.svg", alt: "Qdrant", width: 165, height: 56 },
      { src: "/ai-agents-development/tech/row3_tool3.svg", alt: "Pinecone", width: 275, height: 56 },
      { src: "/ai-agents-development/tech/row3_tool4.svg", alt: "Weaviate", width: 248, height: 56 },
    ],
  },
  {
    title: "Data processing & Multi-modal",
    logos: [
      { src: "/ai-agents-development/tech/row4_tool1.svg", alt: "Apache Spark", width: 229, height: 56 },
      { src: "/ai-agents-development/tech/row4_tool2.svg", alt: "Databricks", width: 247, height: 56 },
      { src: "/ai-agents-development/tech/row4_tool3.svg", alt: "Unstructured", width: 177, height: 56 },
      { src: "/ai-agents-development/tech/row4_tool4.svg", alt: "Whisper", width: 66, height: 56 },
    ],
  },
  {
    title: "LLMOps & Evaluation",
    logos: [
      { src: "/ai-agents-development/tech/row5_tool1.svg", alt: "LangSmith", width: 242, height: 56 },
      { src: "/ai-agents-development/tech/row5_tool2.svg", alt: "Ragas", width: 165, height: 56 },
      { src: "/ai-agents-development/tech/row5_tool3.svg", alt: "Weights & Biases", width: 329, height: 56 },
      { src: "/ai-agents-development/tech/row5_tool4.svg", alt: "MLflow", width: 247, height: 56 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    logos: [
      { src: "/ai-agents-development/tech/row6_tool1.svg", alt: "AWS", width: 199, height: 56 },
      { src: "/ai-agents-development/tech/row6_tool2.svg", alt: "Microsoft Azure", width: 230, height: 56 },
      { src: "/ai-agents-development/tech/row6_tool3.svg", alt: "Docker", width: 179, height: 56 },
      { src: "/ai-agents-development/tech/row6_tool4.svg", alt: "Kubernetes", width: 62, height: 56 },
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
                  <img key={logo.src} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={styles.techLogoImg} loading="lazy" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
