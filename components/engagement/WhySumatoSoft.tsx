import styles from "./WhySumatoSoft.module.css";

const CARDS = [
  {
    title: "Reference calls",
    desc: "Available with current Clients on request for serious engagements.",
  },
  {
    title: "Vendor due diligence packet",
    desc: "Ready to share on NDA.",
  },
  {
    title: "Repeat business",
    desc: "70% of Clients return with another project.",
  },
  {
    title: "Fast NDA",
    desc: "Signed before any information is shared with us.",
  },
  {
    title: "Replacement guarantee",
    desc: "Dedicated Team members are replaced at no cost if they are not the right fit early on.",
  },
  {
    title: "Operational stack",
    desc: "Confluence, Jira, and Slack or Teams, so you have daily visibility from day one.",
  },
];

export default function WhySumatoSoft() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Nexterse LLC for the engagement itself</h2>
        <p className={styles.description}>Beyond the build, these are the things that make the engagement safe to sign.</p>
        <div className={styles.grid}>
          {CARDS.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/engagement/05_Fail-safe-OTA-guarantee-02.svg"
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
