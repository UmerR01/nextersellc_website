import Link from "next/link";
import styles from "./DownloadCTA.module.css";

export default function DownloadCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.title}>Need custom software?</h2>
            <div className={styles.description}>
              <p>Just drop us a line and get a free consultation from top experts in custom software development!</p>
            </div>
          </div>
          <div className={styles.right}>
            <Link href="/contact" className={styles.btn}>
              Discuss your engagement model
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
