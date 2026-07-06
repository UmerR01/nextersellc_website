import styles from "./ESDServicesBlock.module.css";

const SERVICES = [
  {
    icon: "/esd/03_AI-consulting-02.svg",
    title: "IT consulting",
    description:
      "We help enterprises align technology decisions with business goals and operating constraints over the long term. Our consulting covers architecture, technology selection, integration planning, modernization priorities, and reviewing AI use cases against security requirements, cost, system impact, and support effort.",
    link: null,
    linkText: null,
  },
  {
    icon: "/esd/03_Generative-AI-development-01.svg",
    title: "Custom enterprise software development",
    description:
      "We design and build enterprise software for core business processes, internal operations, complex workflows, and cross-system coordination. Our systems fit into your existing environments and support long-term maintenance. When AI is in scope, we build it into the same architecture and hold it to the same security, permissions, auditability, and change-control rules.",
    link: "/services/custom-software-development",
    linkText: "Custom software product development",
    featured: true,
  },
  {
    icon: "/esd/04_Structured-delivery-with-measurable-progress-02.svg",
    title: "Enterprise knowledge graph",
    description:
      "We connect your enterprise platforms, applications, and data sources into a shared information layer. That includes the pipelines, data preparation, and semantic indexing needed for enterprise search, knowledge retrieval, and AI systems that work across your ERP, CRM, document storage, and other internal tools.",
    link: null,
    linkText: null,
  },
  {
    icon: "/esd/03_Legacy-System-Modernization-Planning.svg",
    title: "Legacy system modernization",
    description:
      "We modernize legacy software by updating the architecture, cutting dependencies on outdated components, improving maintainability, and removing brittle integrations. That work includes refactoring monoliths, defining service boundaries, exposing stable APIs, and rebuilding data flows to support new digital functions and AI use cases.",
    link: "#",
    linkText: "Legacy software modernization",
  },
  {
    icon: "/esd/04_Cloud-based-predictive-analytics-platforms-03.svg",
    title: "Cloud solutions",
    description:
      "We design, migrate, and optimize enterprise cloud environments across private, public, and hybrid infrastructure. Our work covers hosting strategy, system performance, cost control, resilience, and deploying data-intensive or model-based services when the architecture calls for them.",
    link: null,
    linkText: null,
  },
  {
    icon: "/esd/04_Synthetic-test-data-generation-02.svg",
    title: "Data management and BI",
    description:
      "We help enterprises govern their data and use it more effectively through data management and business intelligence (BI) solutions. That includes reporting, analytics, data-quality work, and preparing the data foundations for search, recommendation, forecasting, and decision-support systems.",
    link: "#",
    linkText: "Data Analytics services",
  },
];

export default function ESDServicesBlock() {
  return (
    <section id="comprehensive-enterprise-software-services" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Comprehensive enterprise software <span className={styles.accent}>services</span>
        </h2>
        <p className={styles.description}>
          We provide enterprise software services that run from consulting and modernization to building complex systems.
          Where it&apos;s needed, we also prepare the architecture, data, integration layers, and access models for AI to
          work inside your existing operations.
        </p>
        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <div key={i} className={`${styles.card}${"featured" in s && s.featured ? ` ${styles.cardFeatured}` : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.icon} alt={s.title} width={56} height={56} className={styles.icon} loading="lazy" />
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
              {s.link && s.linkText && (
                <a href={s.link} className={styles.cardLink}>
                  {s.linkText}
                  <span className={styles.linkArrow} aria-hidden />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
