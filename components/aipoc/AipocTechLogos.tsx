import styles from "./AipocLogos.module.css";

const LOGOS = [
  { src: "/aipoc-development/03_anthropic-2.svg", alt: "Anthropic", width: 258, height: 56 },
  { src: "/aipoc-development/03_AutoGen-2.svg", alt: "AutoGen", width: 191, height: 56 },
  { src: "/aipoc-development/03_AWS-Bedrock-2.svg", alt: "AWS Bedrock", width: 237, height: 56 },
  { src: "/aipoc-development/03_Azure-OpenAI-3.svg", alt: "Azure OpenAI", width: 136, height: 56 },
  { src: "/aipoc-development/03_LangChain-new-logo.svg", alt: "LangChain", width: 243, height: 56 },
  { src: "/aipoc-development/03_LlamaIndex-1.svg", alt: "LlamaIndex", width: 287, height: 56 },
  { src: "/aipoc-development/03_Meta-Llama-1.svg", alt: "Meta Llama", width: 199, height: 56 },
  { src: "/aipoc-development/03_pgvector-1.svg", alt: "pgvector", width: 166, height: 56 },
  { src: "/aipoc-development/03_Pinecone-1.svg", alt: "Pinecone", width: 275, height: 56 },
  { src: "/aipoc-development/03_qdrant-1.svg", alt: "Qdrant", width: 153, height: 56 },
  { src: "/aipoc-development/03_Weaviate-1.svg", alt: "Weaviate", width: 248, height: 56 },
];

export default function AipocTechLogos() {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <section className={styles.section}>
      <div className={styles.overflow}>
        <div className={styles.marquee}>
          {doubled.map((logo, i) => (
            <div key={i} className={styles.item}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={styles.logo} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
