import Image from "next/image";
import styles from "./AdlcParadigmShift.module.css";

const cards = [
  {
    icon: "/adlc/03_Traditional-software-02.svg",
    iconAlt: "Traditional software",
    title: "Traditional software: predictable by design",
    body: (
      <>
        <p>
          Web, mobile, and enterprise systems follow fixed logic. If a defined condition occurs, the
          software performs a defined action. That is why traditional products are built through the
          Software Development Lifecycle (SDLC) &ndash; a proven model focused on planning,
          development, testing, deployment, and maintenance.
        </p>
        <p>
          <strong>Best suited for:</strong>
        </p>
        <ul>
          <li>Web and mobile platforms.</li>
          <li>Enterprise applications.</li>
          <li>Legacy software systems.</li>
          <li>Internal business software.</li>
        </ul>
      </>
    ),
  },
  {
    icon: "/adlc/03_Generative-AI-development-03.svg",
    iconAlt: "Generative AI development",
    title: "AI systems: dynamic by nature",
    body: (
      <>
        <p>AI agents and large language models do not only execute predefined rules.</p>
        <p>
          They interpret prompts, retrieve information, generate outputs, and make context-based
          decisions.
        </p>
        <p>
          <strong>That creates new risks:</strong>
        </p>
        <ul>
          <li>Inaccurate responses.</li>
          <li>Unsafe actions.</li>
          <li>Sensitive data exposure.</li>
          <li>Uncontrolled token costs.</li>
        </ul>
        <p>To manage these risks, AI systems require a different lifecycle.</p>
      </>
    ),
  },
];

export default function AdlcParadigmShift() {
  return (
    <section className={styles.section} id="adlc-new-standards">
      <div className={styles.bg} aria-hidden />
      <div className="container">
        <h2 className={styles.title}>
          The paradigm shift: why AI requires a new engineering{" "}
          <span style={{ color: "#3CC4E5" }}>standard</span>
        </h2>
        <div className={styles.description}>
          <p>
            Traditional software and AI systems behave differently. They should not be built the
            same way.
          </p>
        </div>
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardIcon}>
                <Image
                  src={card.icon}
                  alt={card.iconAlt}
                  width={56}
                  height={56}
                />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <div className={styles.cardBody}>{card.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
