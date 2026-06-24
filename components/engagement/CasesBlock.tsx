import styles from "./CasesBlock.module.css";

const CASES = [
  {
    href: "/portfolio/dexai",
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    logo: "/engagement/12_nika_logo.svg",
    logoAlt: "Nika logo",
    tech: "Traditional tech stack",
    title: "Dexai Robotics: graphical user interface for robot operation",
    desc: "A GUI that freed Dexai Robotics' restaurant staff from engineer dependency – cutting robot setup time per shift by ~65% and reducing interaction errors by ~50% through real-time visual state monitoring and offline operation.",
    tags: ["IoT", "Startups"],
    imgRight: "/engagement/02_Frame-1787-1.png",
    imgRightAlt: "Screenshot Dexai",
    imgLeft: "/engagement/02_Graphical-user-interface-for-robot-operation-2.png",
    imgLeftAlt: "Screenshot Dexai",
  },
  {
    href: "/portfolio/fridge-sensors",
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    logo: null,
    logoAlt: "",
    tech: "Traditional tech stack",
    title: "Fridge sensors – internet of things application development",
    desc: "An IoT monitoring platform for HoReCa venues that reduced refrigerator-related food spoilage by ~25% and cut emergency maintenance calls by ~40% through real-time anomaly detection and HACCP-compliant automated temperature logging.",
    tags: ["IoT"],
    imgRight: "/engagement/02_fridge-sensors-home-page-perspective-1.png",
    imgRightAlt: "Fridge Sensors: Home Page Perspective",
    imgLeft: "/engagement/02_fridge-sensors-home-page-perspectiver-1.png",
    imgLeftAlt: "Fridge Sensors: Home Page Perspective",
  },
  {
    href: "/portfolio/tartle",
    bg: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    logo: null,
    logoAlt: "",
    tech: "Traditional tech stack",
    title: "Tartle – big data trading platform that cut transaction costs by 35%",
    desc: "Blockchain marketplace enabling anonymous peer-to-peer big data trading – 40% faster deal closure and direct buyer-seller connections without intermediaries, for a US-based big data startup",
    tags: ["Startups"],
    imgRight: "/engagement/02_tartle-dashboard-screenshot-1.png",
    imgRightAlt: "Tartle: Dashboard Screenshot",
    imgLeft: "/engagement/02_Frame-tartle-dashboard-screenshotr.png",
    imgLeftAlt: "Tartle: Dashboard Screenshot",
  },
];

export default function CasesBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Our recent <span className={styles.blue}>works</span>
        </h2>
        <div className={styles.cases}>
          {CASES.map((c) => (
            <a key={c.href} href={c.href} className={styles.card} style={{ background: c.bg }}>
              <div className={styles.cardWrapper}>
                <div className={styles.cardContent}>
                  {c.logo && (
                    <div className={styles.logoWrapper}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.logo} alt={c.logoAlt} className={styles.logo} width={135} height={58} loading="lazy" />
                    </div>
                  )}
                  <div className={styles.tech}>
                    <span>{c.tech}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <p className={styles.cardDesc}>{c.desc}</p>
                  <div className={styles.tags}>
                    {c.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                </div>
                <div className={styles.cardImages}>
                  <div className={styles.imgRight}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.imgRight} alt={c.imgRightAlt} loading="lazy" />
                  </div>
                  <div className={styles.imgLeft}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.imgLeft} alt={c.imgLeftAlt} loading="lazy" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
