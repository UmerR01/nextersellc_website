import Image from "next/image";
import styles from "./AITechStack.module.css";

const ROWS = [
  {
    label: "Foundational models",
    tools: [
      { name: "Azure OpenAI",    logo: "azure-openai" },
      { name: "AWS Bedrock",     logo: "aws-bedrock" },
      { name: "OpenAI GPT-4o",   logo: "openai-gpt4o" },
      { name: "Claude 3.7",      logo: "claude" },
      { name: "Gemini 1.5 Pro",  logo: "gemini" },
    ],
  },
  {
    label: "Orchestration & Agents",
    tools: [
      { name: "LangChain",       logo: "langchain" },
      { name: "LlamaIndex",      logo: "llamaindex" },
      { name: "CrewAI",          logo: "crewai" },
      { name: "AutoGen",         logo: "autogen" },
    ],
  },
  {
    label: "Enterprise memory (vector databases)",
    tools: [
      { name: "Pinecone",        logo: "pinecone" },
      { name: "Weaviate",        logo: "weaviate" },
      { name: "Qdrant",          logo: "qdrant" },
      { name: "Chroma",          logo: "chroma" },
    ],
  },
  {
    label: "Data processing & Multi-modal",
    tools: [
      { name: "Apache Spark",    logo: "apache-spark" },
      { name: "Databricks",      logo: "databricks" },
      { name: "dbt",             logo: "dbt" },
      { name: "Unstructured.io", logo: "unstructured" },
    ],
  },
  {
    label: "LLMOps & Evaluation",
    tools: [
      { name: "MLflow",          logo: "mlflow" },
      { name: "LangSmith",       logo: "langsmith" },
      { name: "Ragas",           logo: "ragas" },
      { name: "TruLens",         logo: "trulens" },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    tools: [
      { name: "AWS",             logo: "aws" },
      { name: "Azure",           logo: "azure" },
      { name: "GCP",             logo: "gcp" },
      { name: "Docker",          logo: "docker" },
    ],
  },
];

export default function AITechStack() {
  return (
    <section className={styles.section} id="tech-stack">
      <div className="container">
        <h2 className={styles.title}>
          AI <span>tech stack</span> we consult about
        </h2>

        <div className={styles.rows}>
          {ROWS.map((row) => (
            <div key={row.label} className={styles.row}>
              <div className={styles.rowLabel}>{row.label}</div>
              <div className={styles.logos}>
                {row.tools.map((t) => (
                  <div key={t.name} className={styles.logoWrap}>
                    <Image
                      src={`/ai-consulting/tech-logos/${t.logo}.svg`}
                      alt={t.name}
                      width={160}
                      height={56}
                      className={styles.logo}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
