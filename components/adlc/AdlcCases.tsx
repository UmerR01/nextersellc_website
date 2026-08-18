import Image from "next/image";
import styles from "./AdlcCases.module.css";

const cases = [
  {
    href: "https://sumatosoft.com/portfolio/ai-powered-predictive-maintenance-for-a-large-industrial-manufacturer",
    background: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    tech: "AI-powered stack",
    title: "AI-powered predictive maintenance for a large industrial manufacturer",
    description:
      "An AI upgrade that cut unplanned downtime by 50% within 8 months, adding explainable ML and context analysis to the existing monitoring platform.",
    tags: ["AI inside", "Enterprise"],
    imageRight: { src: "/adlc/11_Cover-1-1.png", alt: "Predictive maintenance case", width: 696, height: 490 },
    imageLeft: { src: "/adlc/11_Cover-1-2.png", alt: "Predictive maintenance case", width: 696, height: 490 },
  },
  {
    href: "https://sumatosoft.com/portfolio/ai-ml-route-optimization-for-a-freight-delivery-service",
    background: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    tech: "AI-powered stack",
    title: "AI/ML route optimization for a freight delivery service",
    description:
      "Lifted on-time delivery to 98% – without expanding the fleet. An AI/ML platform that plans and reoptimizes B2B/B2C routes in real time with traffic, weather, and capacity constraints, cutting last-mile costs by 22%.",
    tags: ["AI inside", "Enterprise"],
    imageRight: { src: "/adlc/10_Cover-1-1.png", alt: "AI/ML route optimization for a freight delivery service", width: 1392, height: 980 },
    imageLeft: { src: "/adlc/10_Cover-1-2.png", alt: "AI/ML route optimization for a freight delivery service", width: 1392, height: 980 },
  },
  {
    href: "https://sumatosoft.com/portfolio/hipaa-compliant-ai-powered-patient-management-platform-for-a-dental-imaging-provider",
    background: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    tech: "AI-powered stack",
    title: "AI patient-flow platform for dental imaging",
    description:
      "A HIPAA-aligned AI platform for a dental imaging provider that reduced wait times by 37%, increased daily throughput by 22%, and lowered no-shows by 29%.",
    tags: ["AI inside", "Enterprise"],
    imageRight: { src: "/adlc/10_Cover-2-1.png", alt: "patient management software", width: 696, height: 490 },
    imageLeft: { src: "/adlc/10_Cover-2-1-1.png", alt: "patient management software", width: 696, height: 490 },
  },
];

export default function AdlcCases() {
  return (
    <section className={styles.section} id="adlc-cases">
      <div className="container">
        <h2 className={styles.sectionTitle}>
          Our recent AI <span style={{ color: "#3CC4E5" }}>works</span>
        </h2>
      </div>
      <div className={styles.casesList}>
        {cases.map((c, i) => (
          <a
            key={c.href}
            rel="dofollow"
            href={c.href}
            className={`${styles.card} ${i % 2 !== 0 ? styles.cardReverse : ""}`}
            style={{ background: c.background }}
          >
            <div className={styles.cardWrapper}>
              <div className={styles.cardContent}>
                <div className={styles.techTag}>
                  <span className={styles.techTagItem}>{c.tech}</span>
                </div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.description}</p>
                <div className={styles.tagCloud}>
                  {c.tags.map((tag) => (
                    <span key={tag} className={styles.tagItem}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.cardImage}>
                <div className={styles.imageRight}>
                  <Image
                    src={c.imageRight.src}
                    alt={c.imageRight.alt}
                    width={c.imageRight.width}
                    height={c.imageRight.height}
                  />
                </div>
                <div className={styles.imageLeft}>
                  <Image
                    src={c.imageLeft.src}
                    alt={c.imageLeft.alt}
                    width={c.imageLeft.width}
                    height={c.imageLeft.height}
                  />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
