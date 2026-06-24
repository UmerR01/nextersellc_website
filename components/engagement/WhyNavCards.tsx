import styles from "./WhyNavCards.module.css";

const CARDS = [
  { icon: "/engagement/01_Less-time-or-cost.svg", alt: "Cost icon", title: "Fixed price", id: "fixed-price" },
  { icon: "/engagement/01_Cut-time.svg", alt: "Time icon", title: "Time & Material", id: "time-material" },
  { icon: "/engagement/01_Delivery.svg", alt: "Team icon", title: "Dedicated team", id: "dedicated-team" },
];

export default function WhyNavCards() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.cards}>
          {CARDS.map((card) => (
            <a key={card.id} href={`#${card.id}`} className={styles.card}>
              <div className={styles.cardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.icon} alt={card.alt} className={styles.cardIcon} width={80} height={80} loading="lazy" />
              </div>
              <h2 className={styles.cardTitle}>{card.title}</h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
