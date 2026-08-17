import styles from "./SlideDesk.module.css";

const LINKS = [
  { label: "Browse all services", href: "/services" },
  { label: "A closer look at who we are", href: "/about-us" },
  { label: "See our work before reaching out", href: "/case-studies" },
  { label: "Read what our Clients say", href: "/testimonials" },
  { label: "Customer reviews on Clutch", href: "https://clutch.co/profile/nexterse#reviews", external: true },
  { label: "Use our cost calculator", href: "/cost-calculator" },
  { label: "FAQ", href: "/faq" },
];

export default function SlideDesk() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.titleCol}>
              <div className={styles.titleWrap}>
                <h3 className={styles.title}>
                  Check this out if you want to know us better
                </h3>
              </div>
            </div>
            <div className={styles.linksCol}>
              <div className={styles.links}>
                {LINKS.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className={styles.link}
                    {...(link.external ? { target: "_blank", rel: "nofollow noreferrer" } : { rel: "dofollow" })}
                  >
                    {link.label}
                    <span className={styles.linkArrow} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
