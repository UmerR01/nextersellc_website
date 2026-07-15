import styles from "./ServicesDownloadCTA.module.css";

interface Props {
  title: string;
  description?: string;
  variant?: "fintech";
}

export default function ServicesDownloadCTA({ title, description, variant }: Props) {
  const isFintech = variant === "fintech";
  return (
    <section className={`${styles.section} ${isFintech ? styles.fintech : ""}`}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.desc}>{description}</p>}
          </div>
          <div className={styles.right}>
            <a
              href="#get-modal-popup"
              className={isFintech ? `btn btn-accent ${styles.btnFintech}` : styles.btn}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
