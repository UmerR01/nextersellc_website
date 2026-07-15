import Image from "next/image";
import styles from "./OurServicesCards.module.css";

const SERVICES = [
  {
    icon: "/services-page/03_Enterprises-01.svg",
    title: "Custom and enterprise software",
    text: "Custom and enterprise software development is built around workflows that standard tools cannot support well enough. This can include internal platforms, customer portals, ERP extensions, reporting systems, automation tools, data-heavy applications, and software for complex operational processes.\n\nThe service comes with business analysis, architecture design, UX/UI, engineering, integration, QA, deployment, and support. For CEOs and founders, the value is direct: software reflects the company's operating model, supports growth, and gives leadership clearer visibility into performance, bottlenecks, and execution.",
    link: "/services/enterprise-software-development",
    linkLabel: "Enterprise software development",
  },
  {
    icon: "/services-page/04_IoT-Integration-02.svg",
    title: "IoT and AIoT development",
    text: "IoT and AIoT development services cover the software layer behind connected operations: device firmware, edge computing, secure data transfer, device management, dashboards, analytics, and operational intelligence. These systems give companies a clearer view of assets, environments, equipment, and field activity.\n\nAIoT development adds machine learning capabilities on top of connected data streams. This makes it possible to support predictive maintenance, anomaly detection, operational forecasting, and smarter decision-making across distributed infrastructure. The result is a managed IoT software ecosystem.",
    link: "/services/iot-development",
    linkLabel: "IoT development services",
  },
  {
    icon: "/services-page/05_AI-agent-development-02.svg",
    title: "AI and agentic development",
    text: "Our AI solutions help companies add intelligence to business workflows without turning AI into a disconnected experiment. The work can include AI agents, RAG-powered knowledge bases, GenAI applications, LLM integrations, machine learning models, and AI functionality embedded into existing products.\n\nThe delivery covers the full path from use-case assessment and proof of concept to architecture, integration, evaluation, deployment, and post-launch improvement. Under the ADLC framework, AI systems are grounded in business logic, connected to reliable data sources, and evaluated before wider rollout.",
    link: "/services/ai-software-development",
    linkLabel: "Explore AI services",
  },
  {
    icon: "/services-page/04_Legacy-code-01.svg",
    title: "Legacy software modernization services",
    text: "Our legacy software modernization services help companies extend the value of existing systems while improving architecture, maintainability, performance, and integration capacity. The work can include refactoring, re-platforming, cloud migration, database modernization, API development, UX redesign, and phased replacement of outdated components.\n\nThe modernization path is selected after reviewing the current system, business priorities, technical constraints, and future product roadmap. This allows the company to keep useful business logic, improve the parts that limit progress, and prepare the platform for new digital, AI, IoT, or analytics capabilities.",
    link: "/services/crm-development",
    linkLabel: "Modernization services",
  },
  {
    icon: "/services-page/03_Product-MVP-Definition-02.svg",
    title: "MVP development",
    text: "Nexterse LLC designs services for founders and product teams that need to move from concept to a usable first product with a clear scope and strong technical foundation. The process includes business analysis, feature prioritization, prototyping, architecture, UX/UI, development, QA, launch preparation, and post-launch improvement.\n\nAs an MVP development company, we shape the product around market validation, investor readiness, and future scalability. The architecture gives the product room to evolve after real user feedback, early traction, and new business requirements.",
    link: "/process/mvp",
    linkLabel: "MVP development",
  },
  {
    icon: "/services-page/04_connected-product-02.svg",
    title: "Software product development",
    text: "Software product development covers the full lifecycle of SaaS platforms, digital products, partner portals, marketplace systems, and revenue-generating applications. The service combines product thinking with engineering execution: product discovery, roadmap planning, architecture, UX/UI, backend and frontend development, QA, DevOps, release management, and continuous improvement.\n\nThis format is suitable when software itself is part of the business model. The product needs to attract users, support monetization, scale reliably, and evolve through planned releases. Nexterse LLC supports both initial product creation and long-term product engineering after launch.",
    link: "/services/custom-software-development",
    linkLabel: "Software product development",
  },
];

export default function OurServicesCards() {
  return (
    <section id="svc-services" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            Our<span className={styles.accent}> services</span>
          </h2>
          <p className={styles.description}>
            Our software development services combine senior engineering, business analysis, architecture design, and long-term delivery ownership. The focus is practical: build software that supports how the company operates, connects with the systems already in use, and remains maintainable as the business grows.
          </p>
          <div className={styles.grid}>
            {SERVICES.map((item) => (
              <a key={item.title} href={item.link} className={styles.card}>
                <div className={styles.icon}>
                  <Image src={item.icon} alt={item.title} width={56} height={56} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.cardText}>
                  {item.text.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <div className={styles.cardLink}>
                  {item.linkLabel}
                  <span className={styles.arrow} aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
