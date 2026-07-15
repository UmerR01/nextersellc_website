import styles from "./ServicesIndustries.module.css";

const INDUSTRIES = [
  {
    title: "Healthcare",
    description: "We develop healthcare software designed to operate within HIPAA-regulated environments, support clinical and administrative workflows, and connect patient data across secure systems. Our experience includes patient management platforms, telemedicine solutions, healthcare analytics, AI-assisted diagnostics, and IoT-powered medical applications.",
    linkLabel: "Healthcare software development",
    href: "#get-modal-popup",
  },
  {
    title: "Logistics",
    description: "Our logistics software solutions support route planning, fleet visibility, warehouse coordination, shipment tracking, and operational analytics. Nexterse LLC builds platforms that connect logistics data, automate routine workflows, and give teams a clearer view of transportation, delivery, inventory, and supply chain performance.",
    linkLabel: "Logistics software development",
    href: "#get-modal-popup",
  },
  {
    title: "Fintech",
    description: "We build secure financial software for payments, reporting, wealth management, insurance, compliance workflows, and financial planning. Our fintech development services focus on reliability, data protection, scalable architecture, and smooth integration with internal systems, external providers, and regulatory processes.",
    linkLabel: "FinTech software development",
    href: "#get-modal-popup",
  },
  {
    title: "Edtech",
    description: "We develop EdTech platforms for online learning, course management, student information, corporate training, and digital education products. Our solutions support intuitive learning flows, content delivery, progress tracking, analytics, and integration with the systems that educational organizations already use.",
    linkLabel: "Education software development",
    href: "#get-modal-popup",
  },
  {
    title: "eCommerce",
    description: "We build stronger connections with customers through web and mobile applications with superior shopping experience and 24/7 availability.",
    linkLabel: "eCommerce development",
    href: "#get-modal-popup",
  },
  {
    title: "Adtech",
    description: "Our AdTech software development services cover media buying platforms, campaign management systems, analytics dashboards, reporting tools, and automation software for advertising teams. These solutions help companies manage data-heavy workflows, improve campaign visibility, and coordinate advertising operations from one environment.",
    linkLabel: "MarTech software development",
    href: "#get-modal-popup",
  },
];

export default function ServicesIndustries() {
  return (
    <section id="svc-industries" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Industries</span> we support
        </h2>
        <p className={styles.description}>
          Every industry has its own workflows, regulations, data structures, and operating pace. Our software development services adapt to that context, so the final product fits the way your business sells, serves customers, manages operations, and scales.
        </p>
        <div className={styles.grid}>
          {INDUSTRIES.map((item) => (
            <a key={item.title} href={item.href} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <div className={styles.cardLink}>
                {item.linkLabel}
                <span className={styles.arrow} aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
