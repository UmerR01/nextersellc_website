import Image from "next/image";
import styles from "./AdlcValueCards.module.css";

const cards = [
  {
    icon: "/adlc/03_data-privacy-02.svg",
    iconAlt: "data privacy",
    title: "100% data privacy",
    body: (
      <>
        <p>
          Your data remains fully under your control.
          <br />
          AI systems can be deployed in private cloud environments, isolated
          VPCs, or on-premises environments, ensuring sensitive company
          information never leaves secure boundaries.
        </p>
        <ul>
          <li>integration testing;</li>
          <li>acceptance testing;</li>
          <li>compatibility testing;</li>
          <li>access control testing.</li>
        </ul>
      </>
    ),
  },
  {
    icon: "/adlc/03_Proving-the-ROI-first-02.svg",
    iconAlt: "Proving the ROI first",
    title: "Proving the ROI first",
    body: (
      <>
        <p>
          Before full development begins, the ADLC Simulation &amp; Proof of
          Value phase evaluates the expected business impact of the AI system.
        </p>
        <p>This includes estimating:</p>
        <ul>
          <li>Token consumption and operational cost.</li>
          <li>Expected performance improvements.</li>
          <li>Measurable operational ROI.</li>
        </ul>
        <p>
          This approach allows organizations to validate value before committing
          to large-scale implementation.
        </p>
      </>
    ),
  },
  {
    icon: "/adlc/03_Human-in-the-Loop-Control-01-1.svg",
    iconAlt: "Human-in-the-Loop Control",
    title: "Human-in-the-loop control",
    body: (
      <>
        <p>AI systems should assist people, not replace oversight.</p>
        <p>
          We build human-in-the-loop control mechanisms and administrative
          dashboards that allow teams to monitor AI behavior, approve sensitive
          actions, and intervene when necessary.
        </p>
        <p>
          These controls ensure AI systems remain aligned with business
          policies, regulatory requirements, and operational safety standards.
        </p>
      </>
    ),
  },
];

export default function AdlcValueCards() {
  return (
    <section className={styles.section} id="adlc-value">
      <div className="container">
        <h2 className={styles.title}>
          Built for security, control, and measurable{" "}
          <span style={{ color: "#3CC4E5" }}>value</span>
        </h2>
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
