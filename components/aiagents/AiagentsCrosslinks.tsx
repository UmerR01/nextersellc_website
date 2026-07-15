import styles from "@/components/esd/ESDCrosslinks.module.css";

const COLS = [
  {
    title: "Key AI services",
    links: [
      { text: "AI consulting services", href: "/ai-consulting" },
      { text: "AI readiness assessment", href: "/services/ai-software-development" },
      { text: "AI PoC development", href: "/services/ai-poc-development" },
      { text: "Enterprise RAG development", href: "/services/ai-software-development" },
      { text: "Custom LLM development", href: "/services/ai-software-development" },
      { text: "Gen AI development services", href: "/services/ai-software-development" },
      { text: "AI integration services", href: "/services/ai-software-development" },
      { text: "AIoT development", href: "/services/ai-software-development" },
      { text: "ML development", href: "/services/predictive-analytics" },
      { text: "Big Data development for AI", href: "/services/ai-software-development" },
    ],
  },
  {
    title: "Processes",
    links: [
      { text: "Agentic Development Lifecycle methodology", href: "/adlc" },
      { text: "How we work", href: "/about" },
      { text: "Engagement models", href: "/contact-us" },
      { text: "Pricing", href: "/contact-us" },
      { text: "FAQ", href: "/services" },
    ],
  },
  {
    title: "Guides",
    links: [
      { text: "All useful resources", href: "/library" },
      { text: "What affects AI development cost?", href: "/blog/ai-development-costs" },
      { text: "Integrating AI into business: a complete guide", href: "/blog/integrating-ai-into-business" },
    ],
  },
];

export default function AiagentsCrosslinks() {
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
