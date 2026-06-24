import styles from "./ProjectOrganization.module.css";

const COLS = [
  {
    icon: "/engagement/01_Communication.svg",
    alt: "Communication icon",
    title: "Communication",
    text: "A qualified project manager becomes a liaison between the business and the development team. They are responsible for project planning, management, work coordination, and progress tracking. Communication happens through various channels: email, messengers, phone, and personal meetings.",
  },
  {
    icon: "/engagement/01_Competence-transfer.svg",
    alt: "Competence transfer icon",
    title: "Competence transfer",
    text: "Knowledge transfer is a comprehensive business process ensuring all information about the project is shared among the team, Technical Manager and Scrum Master. We gather our experience in a special formalized knowledge base (Atlassian Confluence) under tech leaders’ supervision.",
  },
  {
    icon: "/engagement/01_Reports.svg",
    alt: "Reports icon",
    title: "Planning and reporting",
    text: "Nexterse undertakes a commitment to regular reporting on the project. The reports depend on the chosen engagement model: real-time 24/7 reporting via Jira Atlassian, monthly, weekly reports, etc. Regular reporting ensures transparency of the development process and provides a clear understanding of the costs at every stage of development.",
  },
];

export default function ProjectOrganization() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <h2 className={styles.title}>
          Effective project <span className={styles.blue}>organization</span>
        </h2>
        <div className={styles.description}>
          <p>We build our development process on principles of transparency, precision, and accountability, ensuring consistent progress and tangible results at every stage of your project.</p>
        </div>
        <div className={styles.cols}>
          {COLS.map((col) => (
            <div key={col.title} className={styles.col}>
              <div className={styles.icon}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={col.icon} alt={col.alt} width={56} height={56} loading="lazy" />
              </div>
              <h3 className={styles.colTitle}>{col.title}</h3>
              <p className={styles.colText}>{col.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
