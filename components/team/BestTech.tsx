import Image from "next/image";
import Link from "next/link";
import styles from "./BestTech.module.css";

const CARDS = [
  {
    icon: "/team/06_Intelligent-AI-layer-02.svg",
    iconAlt: "AI",
    title: "AI software development",
    body: "We leverage advanced AI technologies, Machine Learning, and NLP to develop various solutions: chatbots, recommendation engines for personalization, video, speech, image and text recognition software, sales intelligence systems, and more.",
    linkLabel: "AI development",
    href: "#",
  },
  {
    icon: "/team/04_IoT-Integration-02.svg",
    iconAlt: "IoT",
    title: "IoT software development",
    body: "We specialize in IoT software development since 2012 and delivering secure custom IoT solutions covering firmware, cloud, and mobile layers to industrial, commercial, and consumer clients.",
    linkLabel: "IoT development",
    href: "#",
  },
];

export default function BestTech() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Best</span> tech of Nexterse LLC
        </h2>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <Link key={card.title} href={card.href} className={styles.card}>
              <Image
                src={card.icon}
                alt={card.iconAlt}
                width={56}
                height={56}
                className={styles.cardIcon}
              />
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
              <span className={styles.link}>
                {card.linkLabel}
                <span className={styles.arrow} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
