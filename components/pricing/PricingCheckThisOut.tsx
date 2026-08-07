import styles from "./PricingCheckThisOut.module.css";

const LINKS = [
  { text: "Pricing and cost FAQ", href: "/faq" },
  { text: "A closer look at who we are", href: "/about" },
  { text: "AI development cost factors", href: "/services/ai-software-development" },
  { text: "Need help? Talk to our team", href: "/contact-us" },
];

export default function PricingCheckThisOut() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.panel}>
          <h2 className={styles.title}>
            Check this out if you want<br />to understand us better
          </h2>
          <div className={styles.list}>
            {LINKS.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className={styles.link}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span>{link.text}</span>
                <span className={styles.linkArrow} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
