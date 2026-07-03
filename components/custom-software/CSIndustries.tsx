import styles from "./CSIndustries.module.css";

const INDUSTRIES = [
  {
    icon: "/custom-software/05_Healthcare-and-medical-devices-03.svg",
    title: "Healthcare",
    desc: "HIPAA-enabling platforms for providers and health-tech, from patient systems to clinical data tools.",
  },
  {
    icon: "/custom-software/05_Logistics-and-supply-chain-02.svg",
    title: "Logistics",
    desc: "Transport and cargo management systems that track fleets and tame complex supply chains.",
  },
  {
    icon: "/custom-software/03_Financial-Governance-Built-In-04.svg",
    title: "FinTech",
    desc: "Secure financial software, from trading and payments tooling to data-heavy back-office platforms.",
  },
  {
    icon: "/custom-software/01_Education.svg",
    title: "EdTech",
    desc: "E-learning platforms and tools that hold up under classroom and enterprise load.",
  },
  {
    icon: "/custom-software/01_Ecommerce.svg",
    title: "eCommerce",
    desc: "Custom commerce platforms and integrations that scale with catalog and order volume.",
  },
  {
    icon: "/custom-software/01_Marketing-and-Advertising.svg",
    title: "AdTech",
    desc: "Advertising and marketing-automation platforms built for high-volume data and fast operations.",
  },
];

export default function CSIndustries() {
  return (
    <section id="cs-industries" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.accent}>Industry-specific software</span>{" "}
          product development outsourcing
        </h2>
        <p className={styles.description}>
          We build for the industries where we have shipped the most products
          and keep dedicated practices.
        </p>
        <div className={styles.grid}>
          {INDUSTRIES.map((industry) => (
            <div key={industry.title} className={styles.card}>
              <div className={styles.iconWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={industry.icon}
                  alt={industry.title}
                  width={56}
                  height={56}
                  className={styles.icon}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.cardTitle}>{industry.title}</h3>
              <p className={styles.cardDesc}>{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
