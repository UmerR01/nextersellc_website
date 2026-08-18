import Link from "next/link";
import styles from "@/components/engagement/EngCrosslinksBlock.module.css";

// SDLC-specific links rendered with the shared engagement crosslinks UI.
const links = [
  { text: "Our software development ", last: "services", href: "/services/custom-software-development" },
  { text: "ADLC for AI-powered ", last: "systems", href: "/adlc" },
  { text: "More about ", last: "Nexterse LLC", href: "/about-us" },
];

export default function SdlcCrosslinks() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.colTitle}>More about Nexterse LLC</div>
            <div className={styles.list}>
              {links.map((link) => (
                <div key={link.href} className={styles.item}>
                  <Link href={link.href} className={styles.itemLink}>
                    {link.text}
                    <span className={styles.itemLinkLast}>
                      {link.last}
                      <span className={styles.linkArrow} aria-hidden />
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
