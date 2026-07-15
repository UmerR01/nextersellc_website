import Image from "next/image";
import styles from "./ChallengesBlock.module.css";

const ITEMS = [
  {
    icon: "/services-page/04_Integration-into-operational-workflows-02.svg",
    title: "Manual workflows slow execution",
    text: "We develop software that turns repeated manual work into structured digital workflows. Approvals, task handoffs, reporting, document processing, and internal operations become easier to track, manage, and improve across teams.",
  },
  {
    icon: "/services-page/04_Legacy-code-02.svg",
    title: "Legacy systems limit growth",
    text: "We modernize legacy software so companies can extend core systems, improve performance, connect new tools, and support new business processes without replacing everything at once.",
  },
  {
    icon: "/services-page/04_Coordinated-system-architecture-04.svg",
    title: "Disconnected systems reduce visibility",
    text: "We build integrations that connect CRM, ERP, analytics, IoT, financial, and operational platforms into a unified software environment. Leadership gets cleaner data, clearer reporting, and stronger control over business performance.",
  },
  {
    icon: "/services-page/05_Business-processes-automation-01.svg",
    title: "Generic tools force process compromises",
    text: "We develop custom applications that match how your company actually works. You get systems designed around your workflows, users, and long-term product roadmap.",
  },
];

export default function ChallengesBlock() {
  return (
    <section id="svc-challenges" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            Business <span className={styles.accent}>challenges</span> we solve
          </h2>
          <p className={styles.description}>
            As companies grow, software starts to define how fast teams can move, how clearly leaders see the business, and how much control the company has over its operations. Our custom software development services help replace operational friction with systems built around your workflows, data, and growth plans.
          </p>
          <div className={styles.grid}>
            {ITEMS.map((item) => (
              <div key={item.title} className={styles.card}>
                <div className={styles.icon}>
                  <Image src={item.icon} alt={item.title} width={56} height={56} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
