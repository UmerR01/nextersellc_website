import Link from "next/link";
import styles from "./CrosslinksBlock.module.css";

const LINKS = [
  { label: "AI software development services", href: "/services/ai-software-development" },
  { label: "Custom Software Services", href: "/services/custom-software-development" },
  { label: "More about Nexterse LLC", href: "/team" },
];

export default function CrosslinksBlock() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.content}>
            <h2 className={styles.title}>More about Nexterse LLC</h2>
            <ul className={styles.list}>
              {LINKS.map((link) => (
                <li key={link.label} className={styles.item}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                    <span className={styles.linkArrow} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

