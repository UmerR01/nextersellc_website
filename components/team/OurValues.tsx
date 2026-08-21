import Image from "next/image";
import styles from "./OurValues.module.css";

const VALUES = [
  {
    bold: "Sustainability commitment",
    text: ". Nexterse LLC integrates eco-friendly practices into our operations and software solutions, reducing environmental impact across all projects.",
  },
  {
    bold: "Client-centric approach",
    text: ". We prioritize long-term partnerships built on trust, responsiveness, and delivering results that matter to your business.",
  },
  {
    bold: "Collaborative innovation",
    text: ". Our open and teamwork-driven environment fosters creativity and shared growth between our team and yours.",
  },
  {
    bold: "Agility and adaptability",
    text: ". Nexterse LLC's agile processes ensure swift adaptation to changing requirements without losing momentum or quality.",
  },
  {
    bold: "Integrity and transparency",
    text: ". We foster trust through honest communication, clear reporting, and no hidden costs or surprises.",
  },
  {
    bold: "Security and confidentiality",
    text: ". Stringent data protection measures safeguard your sensitive information throughout and after every engagement.",
  },
  {
    bold: "Continuous improvement",
    text: ". Our relentless pursuit of excellence and innovation drives us to continuously refine our methods and deliver better outcomes.",
  },
  {
    bold: "Cultural sensitivity",
    text: ". We respect and incorporate the cultural diversity of our global client base into our collaborative approach.",
  },
];

export default function OurValues() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Our <span className={styles.accent}>values</span>
        </h2>

        <div className={styles.content}>
          <div className={styles.valuesList}>
            <ul>
              {VALUES.map((item) => (
                <li key={item.bold}>
                  <b>{item.bold}</b>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image
                src="/team/our-values.jpg"
                alt="Our values"
                width={683}
                height={1024}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
