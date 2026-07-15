import styles from "./AisoftPage.module.css";

type Logo = { src: string; alt: string };

const ROWS: { title: string; logos: Logo[] }[] = [
  {
    title: "Foundational models",
    logos: [
      { src: "/aisoft-development/tech/row1_tool1.svg", alt: "Azure OpenAI" },
      { src: "/aisoft-development/tech/row1_tool2.svg", alt: "AWS Bedrock" },
      { src: "/aisoft-development/tech/row1_tool3.svg", alt: "Anthropic" },
      { src: "/aisoft-development/tech/row1_tool4.svg", alt: "Meta Llama" },
      { src: "/aisoft-development/tech/row1_tool5.svg", alt: "Mistral AI" },
    ],
  },
  {
    title: "Orchestration & Agents",
    logos: [
      { src: "/aisoft-development/tech/row2_tool1.svg", alt: "LangChain" },
      { src: "/aisoft-development/tech/row2_tool2.svg", alt: "LlamaIndex" },
      { src: "/aisoft-development/tech/row2_tool3.svg", alt: "AutoGen" },
      { src: "/aisoft-development/tech/row2_tool4.svg", alt: "CrewAI" },
    ],
  },
  {
    title: "Enterprise memory (vector databases)",
    logos: [
      { src: "/aisoft-development/tech/row3_tool1.svg", alt: "pgvector" },
      { src: "/aisoft-development/tech/row3_tool2.svg", alt: "Qdrant" },
      { src: "/aisoft-development/tech/row3_tool3.svg", alt: "Pinecone" },
      { src: "/aisoft-development/tech/row3_tool4.svg", alt: "Weaviate" },
    ],
  },
  {
    title: "Data processing & Multi-modal",
    logos: [
      { src: "/aisoft-development/tech/row4_tool1.svg", alt: "Apache Spark" },
      { src: "/aisoft-development/tech/row4_tool2.svg", alt: "Databricks" },
      { src: "/aisoft-development/tech/row4_tool3.svg", alt: "Unstructured" },
      { src: "/aisoft-development/tech/row4_tool4.svg", alt: "Whisper" },
    ],
  },
  {
    title: "LLMOps & Evaluation",
    logos: [
      { src: "/aisoft-development/tech/row5_tool1.svg", alt: "LangSmith" },
      { src: "/aisoft-development/tech/row5_tool2.svg", alt: "Ragas" },
      { src: "/aisoft-development/tech/row5_tool3.svg", alt: "Weights & Biases" },
      { src: "/aisoft-development/tech/row5_tool4.svg", alt: "MLflow" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    logos: [
      { src: "/aisoft-development/tech/row6_tool1.svg", alt: "AWS" },
      { src: "/aisoft-development/tech/row6_tool2.svg", alt: "Microsoft Azure" },
      { src: "/aisoft-development/tech/row6_tool3.svg", alt: "Docker" },
      { src: "/aisoft-development/tech/row6_tool4.svg", alt: "Kubernetes" },
    ],
  },
];

export default function AisoftTechStack() {
  return (
    <section id="ai-tech" className={styles.techStackSection}>
      <div className="container">
        <h2 className={styles.techStackTitle}>
          What&rsquo;s in Nexterse LLC&rsquo;s AI <span className={styles.accent}>tech stack?</span>
        </h2>
        <p className={styles.sectionDesc} style={{ textAlign: "left", margin: "18px 0 0", maxWidth: 820 }}>
          Here are just a few tools we use for AI software development. Final choice depends on your specific business goals.
        </p>
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
