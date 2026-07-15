import styles from "@/components/esd/ESDCrosslinks.module.css";

const COLS = [
  {
    title: "Key services",
    links: [
      { text: "Custom software development", href: "/services/custom-software-development" },
      { text: "Enterprise software development", href: "/services/enterprise-software-development" },
      { text: "Legacy software modernization", href: "/services/crm-development" },
      { text: "MVP development", href: "/process/mvp" },
      { text: "AI software development", href: "/services/ai-software-development" },
    ],
  },
  {
    title: "Industries",
    links: [
      { text: "Healthcare", href: "/industries/healthcare-software-development" },
      { text: "FinTech", href: "/services/financial-software-development" },
      { text: "Logistics", href: "/industries/logistics-software-development" },
      { text: "EdTech", href: "/industries/elearning-software-development" },
    ],
  },
  {
    title: "Processes",
    links: [
      { text: "How we work", href: "/how-we-work" },
      { text: "Engagement models", href: "/engagement-models" },
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
