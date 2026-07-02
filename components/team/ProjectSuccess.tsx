import Image from "next/image";
import styles from "./ProjectSuccess.module.css";

const FEATURES = [
  {
    icon: "/team/03_Use-case-ROI-discovery-session-02.svg",
    title: "Discovery before build",
    desc: "Every engagement opens with a four-week discovery sprint. At the end, we deliver a fixed-price build proposal with scope, milestones, and trade-offs in writing.",
  },
  {
    icon: "/team/04_Senior-Led-Resource-Planning-02.svg",
    title: "Senior architect from day one",
    desc: "A senior architect runs every project from kickoff through launch. Code review conducted by senior developers and the CTO.",
  },
  {
    icon: "/team/03_Data-exposure-risks-02.svg",
    title: "Comprehensive risk management",
    desc: "We proactively identify, assess, and mitigate risks throughout the project lifecycle, ensuring smooth delivery and minimizing disruptions.",
  },
  {
    icon: "/team/03_Budget-clarity-01.svg",
    title: "Budget control",
    desc: "By accurately scoping and prioritizing features, we ensure efficient resource allocation, delivering maximum value within your budget constraints.",
  },
  {
    icon: "/team/04_Process-Audit-02.svg",
    title: "Responsible approach to deadlines",
    desc: "Our structured processes and proactive change management ensure deadlines are met without sacrificing quality or team wellbeing.",
  },
  {
    icon: "/team/03_Living-knowledge-infrastructure-03.svg",
    title: "Knowledge management",
    desc: "We maintain seamless knowledge sharing and documentation throughout the project, ensuring continuity and enabling efficient onboarding.",
  },
];

export default function ProjectSuccess() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          What we do to guarantee project <span className={styles.accent}>success</span>
        </h2>
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <Image
                src={feature.icon}
                alt={feature.title}
                width={56}
                height={56}
                className={styles.icon}
              />
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
