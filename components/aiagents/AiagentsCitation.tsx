import Image from "next/image";
import styles from "@/components/custom-software/CSCitationBlock.module.css";

export default function AiagentsCitation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <Image
              src="/ai-agents-development/12_Yury-Shamrey-300x300.png"
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
              Since 2020, AI has gone from an emerging trend into a driving force. What used to be experimental is now essential, reshaping how businesses operate, compete, and grow. At Nexterse LLC we&rsquo;ve leaned into that shift and grown our expertise to help companies put AI to full use.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
