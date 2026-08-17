import Image from "next/image";
import styles from "./TwoLifecycles.module.css";

const CARDS = [
  {
    href: "/sdlc",
    icon: "/custom-software/03_Traditional-software-01.svg",
    title: "SDLC: Our traditional lifecycle",
    desc: "We apply it to standard builds: web applications, mobile apps, internal tools without ML on top, enterprise platforms, legacy modernization, and non-AI MVPs. The process stays deterministic. Teams are senior-led, and quality runs through familiar QA gates. If your product does not hinge on model-making decisions, this is the path.",
    linkText: "Software development lifecycle (SDLC)",
  },
  {
    href: "/adlc",
    icon: "/custom-software/03_Agentic-workflows-and-autonomous-systems-01.svg",
    title: "ADLC: Our proprietary agentic lifecycle",
    desc: "We apply it to AI-led builds: AI agents, RAG systems, LLM applications, and governed AI deployments. It keeps the standard engineering rigor and adds the gates AI work demands: hallucination control, token modeling, red-teaming, model governance, and evaluation harnesses. If your product's behavior depends on a model, it needs these controls.",
    linkText: "Agentic development lifecycle (ADLC)",
  },
];

export default function TwoLifecycles() {
  return (
    <section id="cs-two-lifecycles" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            Two <span className={styles.accent}>lifecycles</span>, one team
          </h2>
          <p className={styles.desc}>
            A traditional lifecycle handles standard software, where requirements remain static. An agentic lifecycle handles AI-led products, where the model is a moving part that needs its own controls.
          </p>
          <p className={styles.desc}>
            We do not default to AI because it is in the headlines. SDLC is the standard path; ADLC applies when the build is genuinely AI-led. We will tell you which one your project needs, and why.
          </p>
        </div>
        <div className={styles.cards}>
          {CARDS.map((card) => (
            <a key={card.href} href={card.href} className={styles.card}>
              <div className={styles.iconWrap}>
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={72}
                  height={72}
                />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <span className={styles.cardLink}>
                {card.linkText}
                <span className={styles.linkArrow} aria-hidden />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
