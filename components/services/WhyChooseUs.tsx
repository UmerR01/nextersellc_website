import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section id="svc-why-us" className={styles.section}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Why </span>Clients choose Nexterse LLC
        </h2>
        <div className={styles.row}>
          <div className={styles.left}>
            <p className={styles.aboutLabel}>About Nexterse LLC:</p>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <h3 className={styles.listHeading}>Delivery transparency from day one</h3>
                <p className={styles.listText}>
                  You get structured project visibility through Jira, Confluence, milestone reviews, demos, and regular reporting. Scope, progress, priorities, and delivery status stay clear throughout the engagement.
                </p>
              </div>
              <div className={styles.listItem}>
                <h3 className={styles.listHeading}>ISO-certified quality and security processes</h3>
                <p className={styles.listText}>
                  Nexterse LLC works under ISO 27001 and ISO 9001 certifications. These standards support information security, quality management, documentation discipline, and consistent delivery practices.
                </p>
              </div>
              <div className={styles.listItem}>
                <h3 className={styles.listHeading}>Advisory partnership, not task execution</h3>
                <p className={styles.listText}>
                  Our team actively contributes engineering judgment, practical recommendations, and product thinking throughout the project. We help shape the solution around business value, technical feasibility, and long-term product evolution.
                </p>
              </div>
              <div className={styles.listItem}>
                <h3 className={styles.listHeading}>Built for long-term cooperation</h3>
                <p className={styles.listText}>
                  Nexterse LLC's delivery model is designed for companies that need a technology partner beyond the first release. Our Client relationships average 3+ years, and many Clients continue with additional projects after the initial engagement.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imageWrap}>
              <Image
                src="/services-page/why-client.jpg"
                alt="Why clients choose Nexterse LLC"
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
