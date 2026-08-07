import Image from "next/image";
import styles from "./ARStakeholders.module.css";

const CARDS = [
  {
    title: "Data for retrieval",
    desc: "Whether your documents, wikis, and records are clean, current, and permissioned enough for a RAG system to trust.",
    icon: "/ai-readiness/imgs/03_Technical-fit.svg",
  },
  {
    title: "Guardrails",
    desc: "Whether you have the access controls and grounding to stop a model leaking data or inventing answers.",
    icon: "/ai-readiness/imgs/03_Security-and-compliance-01.svg",
  },
  {
    title: "Token economics",
    desc: "Projected monthly cost at your expected usage, so a pilot does not turn into an open-ended bill.",
    icon: "/ai-readiness/imgs/03_Budget-clarity-02.svg",
  },
  {
    title: "Use-case fit",
    desc: "Whether a copilot, a RAG assistant, or an agent is the right pattern, or whether classical ML solves it for less.",
    icon: "/ai-readiness/imgs/03_Operational-value-02.svg",
  },
];

export default function ARStakeholders() {
  return (
    <section className={styles.section} id="stakeholders">
      <div className="container">
        <h2 className={styles.title}>Are you ready for generative AI?</h2>
        <p className={styles.desc}>
          Generative AI has its own readiness bar, separate from classical AI and ML. A model that
          reasons over your documents needs clean, permissioned, well-structured content to retrieve
          from. It needs guardrails against hallucination and data leakage. And it needs a cost
          model, because token usage grows with every user. Our Gen AI readiness assessment checks
          four things on top of the core audit:
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
