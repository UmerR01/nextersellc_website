import Link from "next/link";
import styles from "@/components/engagement/EngCrosslinksBlock.module.css";

const LINKS = [
  { text: "AI consulting ", last: "services", href: "/ai-consulting" },
  { text: "Agentic Development Lifecycle ", last: "(ADLC)", href: "/adlc" },
  { text: "AI integration", last: "", href: "/services/ai-integration" },
  { text: "About Nexterse LLC AI ", last: "expertise", href: "/team" },
];

export default function ARMoreAbout() {
  return (
    <section className={`${styles.section} ${styles.aiReadinessSection}`} id="more-about">
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.colTitle}>More about Nexterse LLC AI services</div>
            <div className={styles.list}>
              {LINKS.map((l, i) => (
                <div key={i} className={styles.item}>
                  <Link href={l.href} className={styles.itemLink}>
                    {l.text}
                    <span className={styles.itemLinkLast}>
                      {l.last}
                      <span className={styles.linkArrow} />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

