import Image from "next/image";
import styles from "./DevelopmentCostBlock.module.css";

const ITEMS = [
  {
    icon: "/services-page/06_Product-scope-01.svg",
    title: "Product scope",
    text: "The number of user roles, workflows, features, screens, and business scenarios defines the core project scope. A focused MVP requires a different delivery setup than a full-scale enterprise platform with multiple departments, permissions, and operational layers.",
  },
  {
    icon: "/services-page/06_Architecture-complexity-01.svg",
    title: "Architecture complexity",
    text: "Custom software can be a standalone application, a SaaS platform, an internal business system, or a complex enterprise environment. Architecture affects development effort, scalability planning, performance requirements, and long-term maintenance.",
  },
  {
    icon: "/services-page/06_Integrations-02.svg",
    title: "Integrations",
    text: "Most business software connects with existing systems such as CRM, ERP, payment providers, analytics tools, data warehouses, or third-party APIs. The number and complexity of integrations influence both engineering effort and testing scope.",
  },
  {
    icon: "/services-page/06_Data-migration-02.svg",
    title: "Data migration",
    text: "Projects that involve legacy systems often require data cleanup, mapping, migration, and validation. This work helps the new system operate with accurate, structured, and usable business data from day one.",
  },
  {
    icon: "/services-page/06_AI-IoT-and-advanced-functionality-03.svg",
    title: "AI and advanced functionality",
    text: "AI agents, RAG systems, predictive analytics, admin dashboards, access management, and real-time data processing require additional architecture, evaluation, and integration work. We define this scope early so the budget reflects the actual system design.",
  },
  {
    icon: "/services-page/06_Security-and-compliance-requirements-02.svg",
    title: "Security and compliance requirements",
    text: "Healthcare, FinTech, enterprise, and data-intensive products often require stronger access control, audit trails, encryption, infrastructure policies, and compliance-ready documentation. These requirements are built into the delivery plan from the start.",
  },
  {
    icon: "/services-page/06_Team-composition-01.svg",
    title: "Team composition",
    text: "The required team depends on the project type. A typical setup may include a business analyst, solution architect, UI/UX designer, developers, QA engineers, DevOps specialist, project manager, and technical lead.",
  },
  {
    icon: "/services-page/06_Timeline-and-delivery-model-02.svg",
    title: "Timeline and delivery model",
    text: "A fixed-budget project, dedicated team, staff augmentation model, or long-term product development partnership affects how the work is planned and billed. We recommend the model that fits your scope, internal capacity, and launch goals.",
  },
  {
    icon: "/services-page/06_Post-launch-support-01.svg",
    title: "Post-launch support",
    text: "Software continues to evolve after release. Support, monitoring, optimization, new feature development, infrastructure updates, and product roadmap execution can be planned as part of the initial engagement or added after launch.",
  },
];

export default function DevelopmentCostBlock() {
  return (
    <section id="svc-cost" className={styles.section}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.container}>
        <h2 className={styles.title}>
          What affects software development <span className={styles.accent}>cost</span>
        </h2>
        <p className={styles.description}>
          Every software project has its own scope, architecture, and delivery path. We estimate development cost based on the business goal, technical complexity, required integrations, and the level of support needed after release.
        </p>
        <p className={styles.description}>
          A clear estimate starts with a short discovery process. We review what you want to build, how the system should work, which users it must support, and what technical requirements will shape the delivery roadmap.
        </p>
        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <div key={item.title} className={styles.item}>
              <div className={styles.icon}>
                <Image src={item.icon} alt={item.title} width={56} height={56} />
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
