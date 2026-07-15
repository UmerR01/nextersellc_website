import styles from "./ServicesCrosslinks.module.css";

const COLS = [
  {
    title: "Key services",
    items: [
      { label: "Custom software development", desc: "End-to-end product engineering for complex business problems", href: "/services/custom-software-development" },
      { label: "IoT development", desc: "Enterprise IoT, AIoT, and connected systems", href: "/services/iot-development" },
      { label: "AI software development", desc: "Agentic AI, RAG, LLM, and ML systems", href: "/services/ai-software-development" },
      { label: "Enterprise software development", desc: "Large-scale platforms and system integrations", href: "/services/enterprise-software-development" },
    ],
  },
  {
    title: "Processes",
    items: [
      { label: "How we work", desc: "Our delivery process and project management approach", href: "/how-we-work" },
      { label: "Engagement models", desc: "Fixed budget, dedicated team, staff augmentation", href: "/engagement-models" },
      { label: "Pricing calculator", desc: "Estimate your software development budget", href: "/pricing" },
      { label: "FAQ", desc: "Common questions about working with Nexterse LLC", href: "/faq" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Guides & templates", desc: "Free resources for software buyers and product teams", href: "/guides" },
      { label: "Software development process", desc: "14-step delivery guide", href: "/blog/software-development-process" },
      { label: "IoT app development costs", desc: "How to budget an IoT engagement", href: "/blog/iot-app-development-costs" },
      { label: "Integrating AI into business", desc: "Practical AI adoption framework", href: "/blog/integrating-ai-into-business" },
    ],
  },
];

export default function ServicesCrosslinks() {
  return (
    <section id="svc-crosslinks" className={styles.section}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            More about <span className={styles.accent}>Nexterse LLC</span>
          </h2>
        </div>
        <div className={styles.grid}>
          {COLS.map((col) => (
            <div key={col.title} className={styles.col}>
              <div className={styles.colTitle}>{col.title}</div>
              <div className={styles.list}>
                {col.items.map((item) => (
                  <div key={item.href} className={styles.item}>
                    <a href={item.href} className={styles.itemLink}>
                      <span className={styles.itemLabel}>
                        {item.label}
                        <span className={styles.itemArrow} aria-hidden="true" />
                      </span>
                      <span className={styles.itemDesc}>{item.desc}</span>
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
