import styles from "./ContractingProcess.module.css";

const STEPS = [
  {
    number: 1,
    title: "NDA",
    desc: "We sign within 24 hours after your request, so technical discussion can start quickly.",
  },
  {
    number: 2,
    title: "Discovery",
    desc: "Two to four weeks for Fixed Price and Time and Materials with a cap on engagements, and we can bypass it for established Clients.",
  },
  {
    number: 3,
    title: "Master Services Agreement",
    desc: "The MSA sets the overall terms, governed under Massachusetts law.",
  },
  {
    number: 4,
    title: "Statement of Work",
    desc: "The SOW fixes scope, timeline, and budget for the specific project.",
  },
  {
    number: 5,
    title: "Kickoff",
    desc: "The team starts with the first sprint demo within 2 weeks of kickoff.",
  },
  {
    number: 6,
    title: "Liability caps",
    desc: "Negotiated per SOW.",
  },
  {
    number: 7,
    title: "Termination",
    desc: "Standard 30-day notice. IP transfers on full payment per the SOW, and handover includes documentation, deployment scripts, and a knowledge-transfer session.",
  },
  {
    number: 8,
    title: "Vendor due diligence",
    desc: "A pre-packaged due diligence response is available on NDA, including insurance certificates, security certifications, and a sample MSA template.",
  },
];

export default function ContractingProcess() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How contracting works</h2>
          <p className={styles.description}>
            The path from first conversation to first sprint is short and predictable. Each step has a clear owner and a clear artifact, and the list continues into the specific terms a procurement review tends to ask about: insurance, liability, subcontracting, termination, and due diligence.
          </p>
        </div>
        <div className={styles.steps}>
          {STEPS.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNum}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <div className={styles.stepDesc}>
                  <p>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
