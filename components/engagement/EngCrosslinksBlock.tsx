import Link from "next/link";
import styles from "./EngCrosslinksBlock.module.css";

const LINKS = [
  { text: "Explore all our ", last: "services", href: "/services" },
  { text: "See our ", last: "pricing", href: "/pricing" },
  { text: "Our development ", last: "lifecycle", href: "/sdlc" },
  { text: "Engagement models ", last: "FAQ", href: "/faq" },
  { text: "About Nexterse LLC ", last: "team", href: "/about-us" },
];

export default function EngCrosslinksBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.colTitle}>More about Nexterse LLC</div>
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
