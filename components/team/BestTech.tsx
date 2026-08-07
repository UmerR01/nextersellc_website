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
    href: "/services/ai-software-development",
  },
  {
    icon: "/esd/04_Cloud-based-predictive-analytics-platforms-03.svg",
    iconAlt: "Cloud",
    title: "Cloud development",
    body: "We design and build scalable cloud architectures, migrations, and managed infrastructure on AWS, Azure, and Google Cloud, covering everything from containerization to cost optimization and ongoing DevOps support.",
    linkLabel: "Cloud development",
    href: "/services/cloud-development",
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
