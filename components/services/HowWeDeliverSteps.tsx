import styles from "./HowWeDeliverSteps.module.css";

const STEPS = [
  {
    num: "1",
    title: "Business and technical alignment",
    text: "Every engagement starts with a clear understanding of the business goal, target users, operational context, and technical constraints. We define what the system should achieve, how it should support the business, and which architectural decisions will shape delivery.\n\nAt this stage, we clarify requirements, review existing systems, identify integration points, and prepare the initial delivery direction. This gives the project a practical foundation before development begins.",
  },
  {
    num: "2",
    title: "Architecture and delivery roadmap",
    text: "The solution architecture defines how the product will work, scale, integrate, and evolve. We plan the core system components, data flows, user roles, security requirements, and infrastructure approach.\n\nYou receive a delivery roadmap that connects product scope, engineering priorities, team composition, budget assumptions, and release planning. Every major decision has a clear business and technical reason behind it.",
  },
  {
    num: "3",
    title: "AI-assisted engineering under senior supervision",
    text: "AI assistants support selected engineering tasks, documentation, code analysis, test preparation, and development acceleration. Senior engineers remain responsible for architecture, implementation quality, code review, security decisions, and final delivery standards.\n\nThis gives the team a structured way to use AI while keeping technical ownership clear at every stage of the project.",
  },
  {
    num: "4",
    title: "Development, validation, and release",
    text: "Development moves through planned iterations with regular reviews, demos, testing, and delivery checkpoints. Each release candidate is validated against functional requirements, acceptance criteria, integration behavior, performance expectations, and user experience.\n\nFor AI-powered systems, validation also covers output quality, retrieval behavior, model responses, data boundaries, and workflow reliability where relevant.",
  },
  {
    num: "5",
    title: "Post-launch support and product evolution",
    text: "After launch, we support the product through monitoring, maintenance, improvements, and roadmap-based development. The system continues to evolve with business needs, user feedback, new integrations, and future product goals.\n\nThis keeps the software aligned with the company's operations after the first release and gives leadership a stable engineering partner for long-term growth.",
  },
];

export default function HowWeDeliverSteps() {
  return (
    <section id="svc-process" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            <span className={styles.accent}>How</span> we deliver
          </h2>
          <p className={styles.description}>
            We deliver software through a structured engineering process that combines senior technical ownership, clear delivery stages, and controlled use of AI-assisted development. The Agentic Software Development Lifecycle gives every project a defined path from business goals and architecture to implementation, validation, release, and long-term product evolution.
          </p>
          <div className={styles.steps}>
            {STEPS.map((step) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNumber}>
                  <span>{step.num}</span>
                </div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  {step.text.split("\n\n").map((para, i) => (
                    <p key={i} className={styles.stepText}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
