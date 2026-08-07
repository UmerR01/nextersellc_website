import styles from "./BigDataIndustries.module.css";

const INDUSTRIES = [
  {
    icon: "/big-data/03_620a2a2b1fa0ad11c23614b1_pexels-anna-nekrashevich-6802042-min-300x190.jpg",
    title: "Finance and fintech",
    desc: "Real-time financial operations leave no room for delayed analysis. Our data platforms combine transaction streams, behavioral signals, and historical data into a single decision layer that operates in real time. Risk detection, credit evaluation, and anomaly identification run within the transaction flow, without introducing friction. The result is controlled risk exposure, faster financial decisions, and full visibility across activity.",
    link: "/services/financial-development",
    linkText: "Fintech software development",
  },
  {
    icon: "/big-data/12_IoT-trends-in-healthcare-300x200.jpg",
    title: "Healthcare",
    desc: "Medical and operational data often exist across disconnected systems, limiting their practical use. Our solutions unify these data sources into a structured environment where patient records, device inputs, and operational metrics remain consistent and accessible. This creates a stable foundation for faster coordination and reliable decision-making.",
    link: "/services/healthcare-development",
    linkText: "Healthcare software development",
  },
  {
    icon: "/big-data/02_image_eccomerce-261x300.png",
    title: "Retail and eCommerce",
    desc: "Our systems process user interactions as they happen and immediately apply them to pricing logic, recommendations, and inventory decisions. Data moves directly into execution, without waiting for reporting cycles. This leads to higher conversion rates, improved retention, and better inventory utilization.",
    link: "/services/retail-ecommerce-development",
    linkText: "eCommerce software development",
  },
  {
    icon: "/big-data/01_Transportation-and-logistics-software-benefits-for-business-291x300.jpg",
    title: "Logistics and transportation",
    desc: "Operational efficiency depends on adapting to constantly changing conditions. Our Big Data solutions process live data from routes, fleets, and demand signals, keeping execution aligned with real-world conditions. Planning evolves continuously instead of relying on static models. Our big data development services allow you to reduce inefficiencies, control costs, and maintain consistent delivery performance.",
    link: "/services/logistics-development",
    linkText: "Logistics software development",
  },
  {
    icon: "/big-data/06_image-300x165.png",
    title: "Advertising and media",
    desc: "Campaign performance shifts faster than traditional reporting cycles can capture. Our data systems connect performance signals directly to campaign execution. Targeting, bidding, and segmentation adjust continuously based on live data. Marketing spend becomes measurable, controlled, and responsive to actual results.",
    link: "/services/adtech-development",
    linkText: "AdTech software development",
  },
];

export default function BigDataIndustries() {
  return (
    <section id="bd-industries" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Built</span> for high-volume and regulated environments
        </h2>
        <p className={styles.desc}>
          Big Data becomes critical where operational decisions depend on speed, precision, and scale. Each industry brings its own constraints - regulatory pressure, real-time execution, or high-volume data flows. Our solutions align directly with these conditions and support how your business operates day to day.
        </p>
        <div className={styles.grid}>
          {INDUSTRIES.map((ind, i) => (
            <div key={i} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ind.icon} alt={ind.title} width={56} height={56} className={styles.icon} loading="lazy" />
              <h3 className={styles.cardTitle}>{ind.title}</h3>
              <p className={styles.cardDesc}>{ind.desc}</p>
              {ind.link && ind.linkText && (
                <a href={ind.link} className={styles.cardLink}>
                  {ind.linkText}
                  <span className={styles.linkArrow} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
