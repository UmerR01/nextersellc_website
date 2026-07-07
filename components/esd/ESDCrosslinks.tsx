import styles from "./ESDCrosslinks.module.css";

const COLS = [
  {
    title: "Related services",
    links: [
      { text: "AI development", href: "#" },
      { text: "Internet of Things development", href: "#" },
      { text: "Enterprise IoT development", href: "#" },
      { text: "Backend development", href: "#" },
      { text: "QA and testing services", href: "#" },
      { text: "Business analysis services", href: "#" },
    ],
  },
  {
    title: "Related Case Studies",
    links: [
      { text: "Toyota ERP development", href: "#" },
      { text: "IoT- and ML-based predictive wind farm maintenance", href: "#" },
      { text: "AI-powered predictive maintenance for a large industrial manufacturer", href: "#" },
      { text: "Predictive maintenance platform for HVAC systems", href: "#" },
    ],
  },
  {
    title: "Guides",
    links: [
      { text: "Integrating IoT into business", href: "#" },
      { text: "Integrating AI into Business: A Complete Guide For 2026", href: "#" },
      { text: "Custom CRM Development: How We Build Enterprise CRMs", href: "#" },
      { text: "Guide to Enterprise IoT Security: Mitigating Risks in a Connected Ecosystem", href: "#" },
      { text: "Impact of Internet of Things on Business and the Economy in 2026", href: "#" },
    ],
  },
];

export default function ESDCrosslinks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            More about our <span className={styles.accent}>enterprise development services</span>
          </h2>
        </div>
        <div className={styles.grid}>
            {COLS.map((col, ci) => (
              <div key={ci} className={styles.col}>
                <div className={styles.colTitle}>{col.title}</div>
                <div className={styles.list}>
                  {col.links.map((link, li) => (
                    <div key={li} className={styles.item}>
                      <a href={link.href} className={styles.link}>
                        {link.text} <span className={styles.linkArrow} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
