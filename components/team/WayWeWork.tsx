import Image from "next/image";
import styles from "./WayWeWork.module.css";

const ITEMS = [
  {
    icon: "/team/05_Security-and-compliance-02.svg",
    title: "Security and quality",
    desc: "ISO 27001-aligned data handling. ISO 9001 quality management. GDPR-aligned EU residency options. Every process maps to a control.",
  },
  {
    icon: "/team/05_Transparency-01.svg",
    title: "Transparency by default",
    desc: "Jira and Confluence access from day one; weekly demos; timesheet reports on request. You always know what's happening and why.",
  },
  {
    icon: "/team/03_Protected-data-icon-01.svg",
    title: "IP rights protection",
    desc: "Our standard contract grants the Client full IP ownership on completion and final payment. NDA by default.",
  },
  {
    icon: "/team/03_Budget-clarity-02.svg",
    title: "Honest scope, honest budget",
    desc: "We price and scope the discovery sprint before the build. We name the trade-offs in writing. No surprises, no scope creep by stealth.",
  },
];

export default function WayWeWork() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          The way <span className={styles.accent}>we work</span>
        </h2>
        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.icon}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
