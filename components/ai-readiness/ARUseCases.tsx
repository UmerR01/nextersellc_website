import Image from "next/image";
import styles from "./ARUseCases.module.css";

const CASES = [
  {
    icon: "/ai-readiness/imgs/12_Group-101748.svg",
    title: "Security gaps",
    desc: "A company wants to connect a generic AI assistant to internal documentation. During the audit, it turns out the current permissions model would expose salary data, HR files, or legal material far beyond the intended audience. We redesign the access pattern before any model is connected.",
  },
  {
    icon: "/ai-readiness/imgs/03_Token-cost-projection-1.svg",
    title: "Cost inefficiencies",
    desc: "Leadership assumes they need a custom model from scratch. The review shows that a narrower RAG setup, a smaller open model, or fine-tuning on a limited dataset can reach the target much faster and at a fraction of the cost.",
  },
  {
    icon: "/ai-readiness/imgs/03_Secure-by-Architecture-02.svg",
    title: "Architecture blockers",
    desc: "A promising AI use case depends on data that still sits in an old on-premise system with weak integration support. The right move is to modernize data and clean up interfaces before moving on to AI pilot development.",
  },
  {
    icon: "/ai-readiness/imgs/03_Compliance-coverage-02.svg",
    title: "Delivery constraints",
    desc: "A company’s stated needs sound like agentic AI, but the process only requires deterministic workflow software, better search, and tighter routing. We recommend a simpler stack to keep the budget in check.",
  },
];

export default function ARUseCases() {
  return (
    <section className={styles.section} id="use-cases">
      <div className="container">
        <h2 className={styles.title}>
          What we tend to find during AI assessments:{" "}
          <span>use cases</span>
        </h2>
        <div className={styles.grid}>
          {CASES.map((c) => (
            <div key={c.title} className={styles.card}>
              <Image src={c.icon} alt="" width={56} height={56} className={styles.icon} unoptimized />
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
