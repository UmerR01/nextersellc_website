import Image from "next/image";
import styles from "./ARDeliverables.module.css";

const DELIVERABLES = [
  {
    title: "Executive readiness scorecard",
    desc: "A red, yellow, and green view of your data, infrastructure, security, and ROI readiness.",
  },
  {
    title: "Data remediation plan",
    desc: "A focused document that shows what must change before AI can be deployed with confidence.",
  },
  {
    title: "Target architecture blueprint",
    desc: "A high-level design for the recommended first use case, including model approach, data flow, security boundary, and integration points.",
  },
  {
    title: "Next-step recommendation",
    desc: "One of the following routes: data modernization, fixed-scope pilot, or production build planning.",
  },
];

export default function ARDeliverables() {
  return (
    <section className={styles.section} id="deliverables">
      <div className="container">
        <h2 className={styles.title}>
          No-hidden-agenda guarantee and <span>deliverables</span>
        </h2>
        <div className={styles.intro}>
          <p>
            Many firms that sell AI assessments have only one path to monetization: they need your
            answer to be &ldquo;build AI.&rdquo; That creates pressure to force a use case into the wrong shape.
          </p>
          <p>
            Nexterse works differently. We are a software engineering company with deep AI capability,
            not an AI-only shop. If the review shows that your foundation is weak, we will say so. If
            the target outcome is better served by deterministic software, we will say that too. If the
            right answer is data cleanup, integration work, or architecture modernization before any
            model is introduced, that will be the recommendation.
          </p>
        </div>
        <div className={styles.body}>
          <div className={styles.left}>
            <h3 className={styles.subTitle}>Deliverables: What you receive on day 14</h3>
            <div className={styles.list}>
              {DELIVERABLES.map((d) => (
                <div key={d.title} className={styles.item}>
                  <div className={styles.itemTitle}>{d.title}</div>
                  <p className={styles.itemDesc}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src="/ai-readiness/imgs/03_Development-team-3-683x1024.jpg"
              alt="Development team"
              width={428}
              height={640}
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
