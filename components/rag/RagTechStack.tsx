import styles from "./RagPage.module.css";

type Logo = { src: string; alt: string };

const ROWS: { title: string; logos: Logo[] }[] = [
  {
    title: "Foundational models",
    logos: [
      { src: "/rag-development/tech/row1_tool1.svg", alt: "Azure OpenAI" },
      { src: "/rag-development/tech/row1_tool2.svg", alt: "AWS Bedrock" },
      { src: "/rag-development/tech/row1_tool3.svg", alt: "Anthropic" },
      { src: "/rag-development/tech/row1_tool4.svg", alt: "Meta Llama" },
      { src: "/rag-development/tech/row1_tool5.svg", alt: "Mistral AI" },
    ],
  },
  {
    title: "Orchestration & Agents",
    logos: [
      { src: "/rag-development/tech/row2_tool1.svg", alt: "LangChain" },
      { src: "/rag-development/tech/row2_tool2.svg", alt: "LlamaIndex" },
      { src: "/rag-development/tech/row2_tool3.svg", alt: "AutoGen" },
      { src: "/rag-development/tech/row2_tool4.svg", alt: "CrewAI" },
    ],
  },
  {
    title: "Enterprise memory (vector databases)",
    logos: [
      { src: "/rag-development/tech/row3_tool1.svg", alt: "pgvector" },
      { src: "/rag-development/tech/row3_tool2.svg", alt: "Qdrant" },
      { src: "/rag-development/tech/row3_tool3.svg", alt: "Pinecone" },
      { src: "/rag-development/tech/row3_tool4.svg", alt: "Weaviate" },
    ],
  },
  {
    title: "Data processing & Multi-modal",
    logos: [
      { src: "/rag-development/tech/row4_tool1.svg", alt: "Apache Spark" },
      { src: "/rag-development/tech/row4_tool2.svg", alt: "Databricks" },
      { src: "/rag-development/tech/row4_tool3.svg", alt: "Unstructured" },
      { src: "/rag-development/tech/row4_tool4.svg", alt: "Whisper" },
    ],
  },
  {
    title: "LLMOps & Evaluation",
    logos: [
      { src: "/rag-development/tech/row5_tool1.svg", alt: "LangSmith" },
      { src: "/rag-development/tech/row5_tool2.svg", alt: "Ragas" },
      { src: "/rag-development/tech/row5_tool3.svg", alt: "Weights & Biases" },
      { src: "/rag-development/tech/row5_tool4.svg", alt: "MLflow" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    logos: [
      { src: "/rag-development/tech/row6_tool1.svg", alt: "AWS" },
      { src: "/rag-development/tech/row6_tool2.svg", alt: "Microsoft Azure" },
      { src: "/rag-development/tech/row6_tool3.svg", alt: "Docker" },
      { src: "/rag-development/tech/row6_tool4.svg", alt: "Kubernetes" },
    ],
  },
];

export default function RagTechStack() {
  return (
    <section id="rag-tech" className={styles.techStackSection}>
      <div className="container">
        <h2 className={styles.techStackTitle}>
          Enterprise GenAI <span className={styles.accent}>tech stack</span>
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
