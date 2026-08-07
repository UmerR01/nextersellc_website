import styles from "./CSAdvancedTech.module.css";

const TECHS = [
  {
    href: "/adlc",
    icon: "/custom-software/03_AI-development-03.svg",
    title: "AI development",
    description:
      "We help businesses put AI to work where it earns its keep. We train and integrate models, fine-tune on proprietary data, advise on tooling, and ship the result into your systems. Core competencies: model development, predictive analytics, NLP for chatbots and assistants, computer vision, and behavior prediction.",
    linkText: "AI development",
  },
  {
    href: "/services/big-data-development",
    icon: "/custom-software/06_Big-Data-and-machine-learning-01.svg",
    title: "Big Data development",
    description:
      "We turn large, messy datasets into structured information your team can analyze. We cover the full data lifecycle, from collection and storage through analysis and extraction. Work includes data governance, pipeline development, real-time processing platforms, warehouse and lake design, and data security.",
    linkText: "Big Data services",
  },
  {
    href: "/services/ml-development",
    icon: "/ml/04_Model-development-aligned-with-business-metrics-02.svg",
    title: "Machine Learning development",
    description:
      "We build ML systems that hold up in production, not just in a notebook. Work spans model development aligned to business metrics, data pipeline engineering, MLOps for continuous training and monitoring, and integration into your existing operational workflows.",
    linkText: "Machine Learning development",
  },
];

export default function CSAdvancedTech() {
  return (
    <section id="cs-advanced-tech" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.accent}>Advanced</span> tech we bring
        </h2>
        <div className={styles.grid}>
          {TECHS.map((tech) => (
            <a key={tech.href} href={tech.href} className={styles.card}>
              <div className={styles.iconWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.icon}
                  alt={tech.title}
                  width={56}
                  height={56}
                  className={styles.icon}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.cardTitle}>{tech.title}</h3>
              <p className={styles.cardDesc}>{tech.description}</p>
              <span className={styles.cardLink}>
                {tech.linkText}
                <span className={styles.linkArrow} aria-hidden />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
