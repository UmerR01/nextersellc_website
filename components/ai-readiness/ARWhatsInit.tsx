import Image from "next/image";
import styles from "./ARWhatsInit.module.css";

const CARDS = [
  {
    title: "Data architecture and hygiene",
    desc: "We review where your data lives, how it moves, who owns it, and whether it is usable for retrieval, classification, summarization, or agent workflows. This includes databases, SaaS exports, APIs, ETL jobs, metadata quality, and access logic. If a RAG system is the likely fit, we assess whether your environment can support chunking, indexing, embeddings, and retrieval quality.",
    icon: "/ai-readiness/imgs/03_Extensive-Data-Collection-and-Insightful-Analysis.svg",
  },
  {
    title: "Cloud and infrastructure readiness",
    desc: "We check if legacy modernization is needed and possible. That includes cloud maturity, networking, observability, environment separation, secrets handling, logging, and the fit of options such as Azure OpenAI, AWS Bedrock, open-source models, or a hybrid setup.",
    icon: "/ai-readiness/imgs/03_Living-knowledge-infrastructure-02.svg",
  },
  {
    title: "Security and governance",
    desc: "We map the control model around the use case: who can see what, which data is regulated, where human approval must remain in the loop, what logs are needed for audits, which risks are acceptable, and which should block launch. Security and compliance are our core engineering concerns, including ISO 27001 and support for GDPR, HIPAA, SOC 2, and the EU AI Act.",
    icon: "/ai-readiness/imgs/03_Security-and-compliance-02.svg",
  },
  {
    title: "Token economics and ROI",
    desc: "We estimate the cost to build and run the use case. That includes model calls, storage, vector database needs, hosting, monitoring, support effort, and likely growth scenarios. The goal is to see whether the business case holds before development begins.",
    icon: "/ai-readiness/imgs/03_How-we-reduce-token-waste-01.svg",
  },
];

export default function ARWhatsInit() {
  return (
    <section className={styles.section} id="whats-in-it">
      <div className="container">
        <h2 className={styles.title}>What does the AI readiness assessment cover?</h2>
        <p className={styles.desc}>
          Our AI assessment is a technical review of the four conditions that decide whether
          artificial intelligence can work inside your business, and whether its work will pay off.
        </p>
        <div className={styles.grid}>
          {CARDS.map((card) => (
            <div key={card.title} className={styles.card}>
              <Image src={card.icon} alt="" width={56} height={56} className={styles.icon} unoptimized />
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
