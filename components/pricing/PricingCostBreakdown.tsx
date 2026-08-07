import styles from "./PricingCostBreakdown.module.css";

const STEPS = [
  {
    title: "Requirements elicitation and project planning",
    budgetShare: "15%",
    weight: "40%",
    intro: "This cost covers different activities of the development team, including:",
    bullets: [
      "stakeholder interviews and workshops to elicit and document requirements;",
      "identification of business goals, technical needs, and potential risks;",
      "creating project roadmaps and timelines and calculating exact development budgets;",
      "setting up communication channels and project management tools.",
    ],
  },
  {
    title: "Architecture and UI/UX design",
    budgetShare: "10%",
    weight: "25%",
    intro: "We work on creating a technical structure and user-friendly designs:",
    bullets: [
      "our experts design the system architecture and choose the appropriate technologies;",
      "we craft mockups, wireframes, and interactive prototypes;",
      "we analyze competitors and user behavior to ensure the product stands out;",
      "we refine designs based on the Client's feedback every step of the way.",
    ],
  },
  {
    title: "Coding",
    budgetShare: "55%",
    weight: "15%",
    intro: "Coding represents the most significant share of the total cost, as it requires the majority of effort and time. Activities in this phase include:",
    bullets: [
      "transforming requirements and designs into functional software;",
      "the Tech Lead ensures code quality and monitors the team;",
      "the project manager tracks progress, handles risks, and keeps the Client informed on the project's health;",
      "regular biweekly demos.",
    ],
  },
  {
    title: "Quality Assurance",
    budgetShare: "15%",
    weight: "15%",
    intro: "The level of quality assurance is agreed upon at the beginning of the project and may include various testing methods and techniques to ensure product quality. Paid activities in this component include:",
    bullets: [
      "verifying functionality, performance, usability, and identifying edge cases;",
      "running regression, performance, and security tests with scripts for consistency and efficiency;",
      "conducting accessibility, compatibility, load, and security tests;",
      "ensuring features align with requirements and acceptance criteria.",
    ],
  },
  {
    title: "Support and maintenance",
    budgetShare: "~15% of the project development cost yearly",
    weight: "5%",
    intro: "Support and maintenance costs go beyond the standard software development lifecycle, and these efforts focus on ensuring the product's long-term stability and growth. Activities here include:",
    bullets: [
      "monitoring product performance and addressing bugs.",
      "updating libraries and technologies.",
      "new feature development.",
    ],
  },
];

export default function PricingCostBreakdown() {
  return (
    <section id="pricing-cost-breakdown" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Key <span className={styles.accent}>cost components</span> of software development
        </h2>
        <div className={styles.stepsGrid}>
          {STEPS.map((step, i) => (
            <div key={step.title} className={styles.step}>
              <div className={styles.stepNum}>{i + 1}</div>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepMeta}><strong>Budget share</strong>: {step.budgetShare}</p>
                <p className={styles.stepMeta}><strong>Weight in achieving project goals</strong>: {step.weight}</p>
                <p className={styles.stepIntro}>{step.intro}</p>
                <ul className={styles.stepBullets}>
                  {step.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
