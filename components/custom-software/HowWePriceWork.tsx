import styles from "./HowWePriceWork.module.css";

const CARDS = [
  {
    href: "/engagement-models-process",
    title: "Engagement models",
    desc: "We work under four engagement models: Fixed Price, Time and Materials, T&M with a cap, and a Dedicated Team. Fixed Price suits well-defined scopes; the others suit work that will evolve as you learn. We help you decide early in conversations, rather than after a contract.",
    linkText: "See how each model works in our engagement models",
  },
  {
    href: "/cost-calculator",
    title: "Budget framing",
    desc: "We don’t hide the money question. For most product builds, a one-to-three-week discovery sprint scopes the budget before you commit to the full build.",
    linkText: "You can also size a project yourself with our free project estimate",
  },
];

export default function HowWePriceWork() {
  return (
    <section id="cs-how-we-price" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          How we{" "}
          <span className={styles.accent}>price</span>{" "}
          work
        </h2>
        <div className={styles.grid}>
          {CARDS.map((card) => (
            <a key={card.href} href={card.href} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <span className={styles.cardLink}>
                {card.linkText}
                <svg
                  className={styles.arrow}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
