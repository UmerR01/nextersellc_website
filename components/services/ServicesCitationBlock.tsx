import Image from "next/image";
import styles from "./ServicesCitationBlock.module.css";

export default function ServicesCitationBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <Image
              src="/services-page/12_Yury-Shamrey-300x300.png"
              alt="Yury Shamrei, CEO at Nexterse LLC"
              width={160}
              height={160}
              className={styles.photo}
            />
            <span className={styles.name}>Yury Shamrei</span>
            <span className={styles.position}>CEO</span>
          </div>
          <div className={styles.right}>
            <span className={styles.quoteMark}>&ldquo;&ldquo;</span>
            <blockquote className={styles.quote}>
              We strive to become a technological partner to our Clients, which means a lot to us. It&apos;s about saying no to unfeasible ideas, offering proactive and practical advice, maintaining open and honest communication, and avoiding unrealistic expectations. We help minimize unnecessary costs and stay in touch like a trusted personal assistant, ensuring every decision delivers genuine value.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
