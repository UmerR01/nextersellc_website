import styles from "./CompanyHistory.module.css";

const MILESTONES = [
  {
    year: "2020",
    title: "Nexterse LLC founded",
    text: "Original focus: custom software development and testing services.",
  },
  {
    year: "2021",
    title: "Full-cycle development",
    text: "The team expands; we begin taking projects from discovery through launch.",
  },
  {
    year: "2022",
    title: "100+ projects delivered",
  },
  {
    year: "2023",
    title: "Tech stack expanded to Python, Java, and .NET",
    text: "First experiments with AI-assisted development.",
  },
  {
    year: "2024",
    title: "Officially ISO-certified",
    text: "ISO 9001 and ISO/IEC 27001. 200+ projects delivered.",
  },
  {
    year: "2025+",
    title: "Dual-engine company with the proprietary Agentic Development Lifecycle (ADLC).",
    text: "300+ projects delivered, with agentic AI systems now running in production.",
  },
];

export default function CompanyHistory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Nexterse LLC history</span>
        </h2>
        <div className={styles.timeline}>
          {MILESTONES.map((m) => (
            <div key={m.year} className={styles.milestone}>
              <div className={styles.year}>{m.year}</div>
              <p className={styles.milestoneTitle}>{m.title}</p>
              {m.text && <p className={styles.milestoneText}>{m.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
