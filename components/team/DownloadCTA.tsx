import Link from "next/link";
import styles from "./DownloadCTA.module.css";

export default function DownloadCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2>Need custom software?</h2>
            <p>
              Just drop us a line and get a free consultation from top experts
              in custom software development!
            </p>
          </div>
          <div className={styles.right}>
            <Link href="/contact-us" className={styles.btn}>
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
