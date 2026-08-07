import Image from "next/image";
import styles from "./ARFoundation.module.css";

const CARDS = [
  {
    title: "Protected data",
    desc: "Sensitive information remains limited to authorized users and approved workflows.",
    icon: "/ai-readiness/imgs/03_Protected-data-icon-02.svg",
  },
  {
    title: "Cost visibility",
    desc: "Cloud and token spend are easier to forecast before development starts.",
    icon: "/ai-readiness/imgs/03_Cost-visibility-03.svg",
  },
  {
    title: "Compliance coverage",
    desc: "Security, auditability, and retention requirements are built into the design from the start.",
    icon: "/ai-readiness/imgs/03_Compliance-coverage-01.svg",
  },
  {
    title: "Workflow fit",
    desc: "AI supports the process by adding value rather than sitting atop existing inefficiencies.",
    icon: "/ai-readiness/imgs/03_Workflow-fit-01.svg",
  },
];

export default function ARFoundation() {
  return (
    <section className={styles.section} id="foundation">
      <div className="container">
        <h2 className={styles.title}>Strong AI starts with a ready foundation</h2>
        <p className={styles.desc}>
          Generative AI can improve search, summarization, classification, and workflow automation.
          To do that well, it needs structured data, clear access rules, and an environment that can
          support secure deployment. That is why the AI readiness assessment comes first. Before you
          invest in <a href="/services/ai-software-development">AI software development</a>, a pilot,
          or a broader rollout, it helps to confirm that your data foundation and delivery environment
          can support the outcome you want.
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
