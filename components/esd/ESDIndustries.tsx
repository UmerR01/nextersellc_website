import styles from "./ESDIndustries.module.css";

const INDUSTRIES = [
  {
    icon: "/esd/05_Healthcare-and-medical-devices-01.svg",
    title: "Healthcare",
    desc: "We build enterprise systems for telemedicine, patient management, remote monitoring, and clinical data exchange. These solutions connect care processes, meet data-security requirements, and give teams consistent information.",
    link: "/services/healthcare-development",
    linkText: "Healthcare enterprise software",
  },
  {
    icon: "/esd/04_Fixed-price-discovery-01.svg",
    title: "FinTech",
    desc: "We build financial systems for payments, digital wallets, trading operations, and risk management. They include secure transaction frameworks and internal tools, and we add anomaly-detection and monitoring models when they're needed.",
    link: "/services/financial-development",
    linkText: "Fintech enterprise software",
  },
  {
    icon: "/esd/05_Warehousing-and-logistics-01.svg",
    title: "Logistics and transportation",
    desc: "We build systems for fleet management, route planning, supply-chain monitoring, and warehouse coordination. They help reduce delays, balance workloads, and keep related services in sync.",
    link: "/services/logistics-development",
    linkText: "Logistics enterprise software",
  },
  {
    icon: "/esd/05_Manufacturing-01.svg",
    title: "Manufacturing",
    desc: "We build solutions for production management, equipment monitoring, maintenance planning, and performance analysis. We bring in the Internet of Things (IoT) and predictive models to track downtime, line load, and asset health.",
    link: null,
    linkText: null,
  },
  {
    icon: "/esd/05_Food-service-and-cold-chain-monitoring-05.svg",
    title: "Travel and hospitality",
    desc: "We design systems for reservations, facility management, and guest services. They support high-volume operations, connect customer data, and tie processes together across multiple locations.",
    link: null,
    linkText: null,
  },
  {
    icon: "/esd/04_Multi-modal-sensor-fusion-systems-02.svg",
    title: "Telecommunications",
    desc: "We build solutions for customer self-service, billing, service management, and network operations. We use models for request routing, incident handling, and recommendations, which reduces the load on teams.",
    link: null,
    linkText: null,
  },
];

export default function ESDIndustries() {
  return (
    <section id="enterprise-solution-built-for-your-industry" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Enterprise solution built for your<span className={styles.accent}> industry</span>
        </h2>
        <div className={styles.grid}>
          {INDUSTRIES.map((ind, i) => {
            const Tag = ind.link ? "a" : "div";
            return (
              <Tag
                key={i}
                href={ind.link ?? undefined}
                className={`${styles.card}${ind.link ? ` ${styles.cardLinked}` : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ind.icon} alt={ind.title} width={56} height={56} className={styles.icon} loading="lazy" />
                <h3 className={styles.cardTitle}>{ind.title}</h3>
                <p className={styles.cardDesc}>{ind.desc}</p>
                {ind.link && ind.linkText && (
                  <span className={styles.cardLink}>
                    {ind.linkText}
                    <span className={styles.linkArrow} />
                  </span>
                )}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
