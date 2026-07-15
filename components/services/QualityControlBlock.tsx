import Image from "next/image";
import styles from "./QualityControlBlock.module.css";

const ITEMS = [
  {
    icon: "/services-page/06_Accurate-and-realistic-cost-estimation-01.svg",
    title: "Accurate and realistic cost estimation",
    text: "We conduct thorough business requirements and user needs analysis to provide precise budget and timeline assessments. The popular fixed-budget cooperation model implies that we commit to the budget we propose.",
  },
  {
    icon: "/services-page/06_Competence-based-selection-of-a-project-team-01.svg",
    title: "Competence-based selection of a project team",
    text: "We assign only those specialists to each role who best fit the project needs in terms of their skills, interests, and expertise.",
  },
  {
    icon: "/services-page/06_Comprehensive-risk-management-02.svg",
    title: "Comprehensive risk management",
    text: "As an essential part of every project, we identify risks and develop a comprehensive mitigation plan. Our project manager continuously monitors risks to ensure they are addressed proactively and effectively.",
  },
  {
    icon: "/services-page/06_Budget-control-01.svg",
    title: "Budget control",
    text: "Our project manager monitors the budget execution on every iteration, ensuring the development goes according to a plan and avoiding unexpected budget overruns.",
  },
  {
    icon: "/services-page/06_Responsible-approach-to-deadlines-01.svg",
    title: "Responsible approach to deadlines",
    text: "With structured processes and effective change management, we consistently meet deadlines without compromising quality or project outcomes.",
  },
  {
    icon: "/services-page/06_Regular-reporting-02.svg",
    title: "Regular reporting",
    text: "Regular weekly calls, biweekly demos, time and project progress reports, identified and fixed bugs tables — we keep the Client informed at every stage.",
  },
];

export default function QualityControlBlock() {
  return (
    <section id="svc-quality" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            <span className={styles.accent}>Quality</span> control practices
          </h2>
          <p className={styles.description}>
            We have established and implemented internal guidelines that set the standards for the quality of our work that guide us in all our software engineering services.
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
