import styles from "@/components/esd/ESDCrosslinks.module.css";

const COLS = [
  {
    title: "Key services",
    links: [
      { text: "RAG development for PoCs", href: "/services/ai-software-development" },
      { text: "AI agents PoC", href: "/services/ai-software-development" },
      { text: "AI integration PoC", href: "/services/ai-software-development" },
      { text: "Business analysis for PoC scoping", href: "/services/custom-software-development" },
    ],
  },
  {
    title: "Processes",
    links: [
      { text: "Pricing", href: "/contact-us" },
      { text: "FAQ", href: "/services" },
    ],
  },
  {
    title: "Guides",
    links: [
      { text: "All useful resources", href: "/library" },
      { text: "AI development costs", href: "/blog/ai-development-costs" },
      { text: "Integrating AI into business", href: "/blog/integrating-ai-into-business" },
    ],
  },
];

export default function AipocCrosslinks() {
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
