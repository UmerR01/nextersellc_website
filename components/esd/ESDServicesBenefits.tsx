import styles from "./ESDServicesBenefits.module.css";

const BENEFITS = [
  {
    icon: "/esd/05_Forecasting-and-decision-making-01.svg",
    title: "Forecasting and decision making",
    desc: "We give management timely data for planning and decisions. Where it helps, we strengthen these systems with AI and machine learning for forecasting, anomaly detection, and pattern analysis.",
  },
  {
    icon: "/esd/05_Business-processes-automation-01.svg",
    title: "Business processes automation",
    desc: "We automate business operations, including payment flows, manufacturing processes, and internal workflows. For businesses that use connected devices, we also apply AI to track events and automate steps across the operation.",
  },
  {
    icon: "/esd/05_Data-centralization-integration-03.svg",
    title: "Data centralization & integration",
    desc: "We connect departments, teams, and business systems so data moves more consistently across the organization. That improves coordination, visibility, and process efficiency.",
  },
  {
    icon: "/esd/05_Improved-data-safety-security-01.svg",
    title: "Improved data safety & security",
    desc: "We help protect enterprise data through centralized access control, consistent security policies, and controlled user permissions across the system.",
  },
  {
    icon: "/esd/05_Collaboration-management-04.svg",
    title: "Collaboration management",
    desc: "We build tools that support coordination across teams and business units, including project-management systems, video-conferencing tools, messaging platforms, and other internal collaboration software.",
  },
  {
    icon: "/esd/05_ERP-systems-optimization-02.svg",
    title: "ERP systems optimization",
    desc: "We help clients simplify business processes across manufacturing, procurement, services, sales, finance, and HR by building ERP systems that are customizable, scalable, secure, and aligned with how the business actually operates.",
  },
];

export default function ESDServicesBenefits() {
  return (
    <section id="benefits-custom-enterprise-software" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Benefits</span> custom enterprise software
        </h2>
        <p className={styles.intro}>
          Through custom enterprise application development, we help clients simplify business processes across
          manufacturing, procurement, services, sales, finance, and HR by building enterprise resource planning (ERP)
          systems that are customizable, scalable, and secure.
        </p>
        <div className={styles.grid}>
          {BENEFITS.map((b, i) => (
            <div key={i} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.icon} alt={b.title} width={56} height={56} className={styles.icon} loading="lazy" />
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
