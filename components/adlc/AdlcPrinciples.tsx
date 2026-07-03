import Image from "next/image";
import styles from "./AdlcPrinciples.module.css";

const principles = [
  {
    icon: "/adlc/03_Guardrails-for-actions-and-data-access-03.svg",
    iconAlt: "Guardrails for actions and data access",
    title: "Guardrails for actions and data access",
    description:
      "Defines strict operational boundaries for AI agents, controlling what actions they can perform and which data sources they can access.",
  },
  {
    icon: "/adlc/03_Continuous-evaluation-of-output-quality-03.svg",
    iconAlt: "Continuous evaluation of output quality",
    title: "Continuous evaluation of output quality",
    description:
      "AI systems are continuously tested against evaluation datasets to ensure responses remain accurate, consistent, and aligned with business objectives.",
  },
  {
    icon: "/adlc/03_Red-team-testing-against-adversarial-inputs-02.svg",
    iconAlt: "Red-team testing against adversarial inputs",
    title: "Red-team testing against adversarial inputs",
    description:
      "AI systems are deliberately stress-tested using adversarial prompts and injection attempts to identify vulnerabilities before deployment.",
  },
  {
    icon: "/adlc/03_Monitoring-of-token-usage-01.svg",
    iconAlt: "Monitoring of token usage, cost, and model drift",
    title: "Monitoring of token usage, cost, and model drift",
    description:
      "Operational monitoring tracks token consumption, system performance, and model behavior to maintain predictable operating costs and stable system outputs.",
  },
  {
    icon: "/adlc/03_Human-oversight-for-critical-decisions-02.svg",
    iconAlt: "Human oversight for critical decisions",
    title: "Human oversight for critical decisions",
    description:
      "Human-in-the-loop mechanisms ensure that sensitive or high-impact actions always remain under human supervision.",
  },
];

export default function AdlcPrinciples() {
  return (
    <section className={styles.section} id="adlc-principles">
      <div className="container">
        <h2 className={styles.title}>
          Core <span style={{ color: "#3CC4E5" }}>principles</span> that govern ADLC
        </h2>
        <div className={styles.description}>
          <p>
            We build the Agentic Development Lifecycle on a set of strong engineering principles
            designed to make AI systems reliable, secure, and economically sustainable in real
            production environments. These principles ensure that AI agents operate within clear
            boundaries while maintaining measurable performance and predictable operational costs.
          </p>
        </div>
        <div className={styles.grid}>
          {principles.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.cardIcon}>
                <Image
                  src={item.icon}
                  alt={item.iconAlt}
                  width={56}
                  height={56}
                />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
