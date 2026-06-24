import styles from "./ARMoreAbout.module.css";

const LINKS = [
  { label: "AI consulting services", href: "/ai-consulting" },
  { label: "Agentic Development Lifecycle (ADLC)", href: "#" },
  { label: "AI development cost factors", href: "#" },
  { label: "About Nexterse AI expertise", href: "/about" },
];

export default function ARMoreAbout() {
  return (
    <section className={styles.section} id="more-about">
      <div className="container">
        <h2 className={styles.title}>More about Nexterse AI services</h2>
        <ul className={styles.list}>
          {LINKS.map((l) => (
            <li key={l.label} className={styles.item}>
              <a href={l.href} className={styles.link}>
                {l.label}
                <span className={styles.arrow}>&rsaquo;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
