import styles from "./DeliveryModels.module.css";

const CARDS = [
  {
    title: "Product development outsourcing",
    desc: "Hand us the build, and our team takes it from idea to shipped product. We run the lifecycle for you: business analysis, design, development, QA, and release. This model fits companies without an in-house engineering team, or teams that would rather keep their own people on the core business while we own delivery. You stay in control through weekly demos and full access to the workspace.",
  },
  {
    title: "Staff augmentation",
    desc: "Keep your process and your project lead; we add the engineers, designers, QA specialists, or analysts you are short on. Our people join your stand-ups, work on your board, and ramp on your codebase, for a sprint or for the long haul. This model fits teams that know exactly what they need built and want senior hands fast, without the overhead of a separate vendor relationship.",
  },
];

export default function DeliveryModels() {
  return (
    <section id="cs-delivery-models" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Which delivery <span className={styles.accent}>model</span> fits your build
        </h2>
        <div className={styles.cards}>
          {CARDS.map((card, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
