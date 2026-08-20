import styles from "./WhyTeams.module.css";

const REASONS = [
  {
    heading: "Certified security and quality",
    desc: "We hold ISO 27001 and ISO 9001 certificates, so security and process quality are audited against international standards.",
  },
  {
    heading: "Senior-led teams",
    desc: "About 70% of our engineers are senior who have shipped products before.",
  },
  {
    heading: "Transparent delivery",
    desc: "You get direct access to our Jira and Confluence. You can see the backlog, the active sprint, the progress, and the blockers whenever you want.",
  },
  {
    heading: "Two delivery models",
    desc: "We run both a traditional lifecycle and a proprietary agentic one. Standard builds get SDLC; AI-led builds get ADLC, with gates like hallucination control and red-teaming.",
  },
  {
    heading: "AI and applied-data depth",
    desc: "We have shipped AI-powered platforms processing data from hundreds of operational sources, with AI features running in production.",
  },
];

export default function WhyTeams() {
  return (
    <section id="cs-why-teams" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.accent}>Why</span> teams choose Nexterse LLC
        </h2>
        <div className={styles.cols}>
          <div className={styles.leftCol}>
            <ul className={styles.list}>
              {REASONS.map((reason) => (
                <li key={reason.heading} className={styles.item}>
                  <strong className={styles.itemHeading}>{reason.heading}</strong>
                  <p className={styles.itemDesc}>{reason.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.imageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/services-page/why-client.jpg"
                alt="Why teams choose Nexterse LLC"
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
