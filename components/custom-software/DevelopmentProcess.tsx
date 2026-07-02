import styles from "./DevelopmentProcess.module.css";

const STEPS = [
  {
    number: "01",
    title: "Business analysis",
    desc: "We introduce the team and align on goals, then set up the workspace in Jira and Confluence. Through workshops and calls, we gather requirements, weigh risks, write a mitigation plan, and agree on a roadmap. You begin with milestones everyone signed off on.",
  },
  {
    number: "02",
    title: "Architecture definition",
    desc: "Architecture starts inside business analysis but earns its own attention. Here we set the technical foundation: scalability, security, data flows, integration points, and the tech stack. We choose that stack against your budget and timeline, not against whatever is fashionable this quarter.",
  },
  {
    number: "03",
    title: "UI/UX design",
    desc: "Design runs in parallel with analysis. We start with mood boards and competitor analysis, then map how users behave. From there, we build wireframes, interactive prototypes, detailed UI screens, and a branded component kit. You receive development-ready assets and documented specifications.",
  },
  {
    number: "04",
    title: "Product development",
    desc: "Development runs in two-week sprints. Each sprint, the team writes and reviews code for an agreed set of features while the Tech Lead watches quality and progress. You review completed work at the end of every sprint and steer the next one.",
  },
  {
    number: "05",
    title: "Quality assurance",
    desc: "QA runs through every sprint, not as a final gate. Engineers start with manual testing, then build automated cases in Selenium and TestNG. We cover usability, performance, security, and regression testing, document the results, and close each sprint with a demo of working features.",
  },
  {
    number: "06",
    title: "DevOps",
    desc: "DevOps supports the whole cycle: deployment, scaling, reliability, and release safety. Not every project needs a dedicated DevOps engineer, and we say so when it does not. When it helps, we set up monitoring, environments, backups, disaster recovery, and security hardening.",
  },
  {
    number: "07",
    title: "Maintenance and support",
    desc: "Support is optional and ongoing after launch. We hand over a final report, transfer knowledge, gather the documentation in one place, and run training, so your team can operate the product. We also monitor performance, fix issues early, apply updates, and keep the stack current on security.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section id="cs-process" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Our software product development{" "}
            <span className={styles.accent}>process</span>
          </h2>
          <p className={styles.desc}>
            We provide end-to-end software product development services, growing
            products from initial ideas to fully functional applications. We do
            it through our well-established development processes, talented
            software engineers, and our strong commitment to business success.
          </p>
        </div>

        <div className={styles.grid}>
          {STEPS.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
