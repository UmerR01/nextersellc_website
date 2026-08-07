import styles from "@/components/esd/ESDCrosslinks.module.css";

const COLS = [
  {
    title: "Key services",
    links: [
      { text: "RAG development", href: "/services/rag-development" },
      { text: "AI agents", href: "/services/ai-agents-development" },
      { text: "AI integration", href: "/services/ai-integration" },
    ],
  },
  {
    title: "Processes",
    links: [
      { text: "Pricing", href: "/pricing" },
      { text: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Guides",
    links: [
      { text: "Blog", href: "/blog" },
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
