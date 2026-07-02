import styles from "./CSAdvancedTech.module.css";

const TECHS = [
  {
    href: "/ai-development",
    icon: "/custom-software/03_AI-development-03.svg",
    title: "AI development",
    description:
      "We help businesses put AI to work where it earns its keep. We train and integrate models, fine-tune on proprietary data, advise on tooling, and ship the result into your systems. Core competencies: model development, predictive analytics, NLP for chatbots and assistants, computer vision, and behavior prediction.",
    linkText: "AI development",
  },
  {
    href: "/big-data-development",
    icon: "/custom-software/06_Big-Data-and-machine-learning-01.svg",
    title: "Big Data development",
    description:
      "We turn large, messy datasets into structured information your team can analyze. We cover the full data lifecycle, from collection and storage through analysis and extraction. Work includes data governance, pipeline development, real-time processing platforms, warehouse and lake design, and data security.",
    linkText: "Big Data services",
  },
  {
    href: "/iot-development",
    icon: "/custom-software/06_Internet-of-Things-and-telematics-systems-02.svg",
    title: "Internet of Things development",
    description:
      "IoT is our core specialization. We build platforms from small systems to networks with hundreds of devices, covering connectivity, cloud infrastructure, integration, and dashboards. Work includes custom IoT builds, real-time data collection, predictive maintenance, smart-manufacturing automation, and fleet tracking.",
    linkText: "Internet of Things development",
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
