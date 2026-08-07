import styles from "@/components/esd/ESDCrosslinks.module.css";

const COLS = [
  {
    title: "Key services",
    links: [
      { text: "Custom software development", href: "/services/custom-software-development" },
      { text: "Enterprise software development", href: "/services/enterprise-software-development" },
      { text: "CRM development", href: "/services/crm-development" },
      { text: "MVP development", href: "/process/mvp" },
      { text: "AI software development", href: "/services/ai-software-development" },
    ],
  },
  {
    title: "Industries",
    links: [
      { text: "Healthcare", href: "/services/healthcare-development" },
      { text: "FinTech", href: "/services/financial-development" },
      { text: "Logistics", href: "/services/logistics-development" },
      { text: "EdTech", href: "/services/edtech-development" },
    ],
  },
  {
    title: "Processes",
    links: [
      { text: "Engagement models", href: "/engagement-models-process" },
      { text: "Pricing", href: "/pricing" },
    ],
  },
];

export default function MobileCrosslinks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            More about <span className={styles.accent}>Nexterse LLC</span>
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
