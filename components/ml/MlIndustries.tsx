import styles from "./MlIndustries.module.css";

const INDUSTRIES = [
  {
    icon: "/ml/03_5da07b812ca4f60c99824fc4_Marketing-Automation-Platforms-300x165.png",
    title: "Finance & fintech",
    desc: "Transaction analysis, risk scoring, and anomaly detection that run inside decision flows in real time, with traceable outputs your compliance team can audit.",
    link: "/services/financial-development",
    linkText: "Fintech software development",
  },
  {
    icon: "/ml/09_pexels-karolina-grabowska-4021766-200x300.jpg",
    title: "Healthcare & life sciences",
    desc: "Models that work with clinical, operational, and patient data to support diagnostics, planning, and resource allocation, inside governed environments built around data privacy.",
    link: "/services/healthcare-development",
    linkText: "Healthcare software development",
  },
  {
    icon: "/ml/01_Transportation-and-logistics-software-benefits-for-business-291x300.jpg",
    title: "Logistics & supply chain",
    desc: "Demand, routing, and inventory models that react to live conditions and feed decisions straight into your logistics operations.",
    link: "/services/logistics-development",
    linkText: "Logistics software development",
  },
  {
    icon: "/big-data/06_image-300x165.png",
    title: "Advertising and media",
    desc: "Campaign performance shifts faster than traditional reporting cycles can capture. Our data systems connect performance signals directly to campaign execution. Targeting, bidding, and segmentation adjust continuously based on live data.",
    link: "/services/adtech-development",
    linkText: "AdTech software development",
  },
];

export default function MlIndustries() {
  return (
    <section id="ml-industries" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Which <span className={styles.accent}>industries</span> do Nexterse LLC&rsquo;s ML services support?
        </h2>
        <p className={styles.subtitle}>We focus on sectors where the data is complex and a wrong prediction has a real cost.</p>
        <div className={styles.grid}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.title} className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{ind.title}</h3>
                <p className={styles.cardDesc}>{ind.desc}</p>
                {ind.link && ind.linkText && (
                  <a href={ind.link} className={styles.cardLink}>
                    {ind.linkText}
                    <span className={styles.linkArrow} />
                  </a>
                )}
              </div>
              <div className={styles.imageWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ind.icon} alt={ind.title} className={styles.image} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}