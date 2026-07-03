import Image from "next/image";
import styles from "./CompanyHistory.module.css";

export default function CompanyHistory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Nexterse LLC history</span>
        </h2>
        <div className={styles.imageWrap}>
          <Image
            src="/team/06_Our-history-1.jpg"
            alt="Our history"
            width={1560}
            height={950}
            className={styles.historyImage}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
