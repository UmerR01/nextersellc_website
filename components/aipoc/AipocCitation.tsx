import Image from "next/image";
import styles from "@/components/custom-software/CSCitationBlock.module.css";

export default function AipocCitation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <Image
              src="/aipoc-development/12_Yury-Shamrey-300x300.png"
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
              In AI development, a proof of concept is not an optional stepping stone. It is the filter between a costly hypothesis and a profitable reality. It lets a business fail fast, learn cheaply, and scale only what has proven it works.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
