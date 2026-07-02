import styles from "./CrosslinksBlock.module.css";

const LINKS = [
  { prefix: "About ", last: "Nexterse LLC", href: "/team" },
  { prefix: "Company ", last: "FAQ", href: "/faq" },
  { prefix: "Our engineering ", last: "blog", href: "/blog" },
  { prefix: "Projects you could be working ", last: "on", href: "/case-studies" },
];

export default function CrosslinksBlock() {
  return (
    <section className={`${styles.section} ${styles.sectionLight}`}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>More about Nexterse LLC</h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.colTitle}>Details</div>
            <div className={styles.list}>
              {LINKS.map((link, i) => (
                <div key={i} className={styles.item}>
                  <a rel="dofollow" href={link.href} className={styles.linkPrimary}>
                    {link.prefix}
                    <span className={styles.linkPrimaryLast}>
                      {link.last}<span className={styles.linkPrimaryAfter}></span>
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
