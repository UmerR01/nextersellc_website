import Image from "next/image";
import styles from "./CSCitationBlock.module.css";

export default function CSCitationBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <Image
              src="/custom-software/12_Yury-Shamrey-300x300.png"
              alt="Yury Shamrei"
              width={160}
              height={160}
              className={styles.photo}
            />
            <span className={styles.name}>Yury Shamrei</span>
            <span className={styles.position}>CEO &amp; Founder</span>
          </div>
          <div className={styles.right}>
            <span className={styles.quoteMark}>&ldquo;&ldquo;</span>
            <blockquote className={styles.quote}>
              Every great product starts with a clear purpose and the right team
              behind it.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
