import Image from "next/image";
import styles from "./PricingEstimationImage.module.css";

export default function PricingEstimationImage() {
  return (
    <section id="pricing-estimation" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          <span className={styles.accent}>Estimation</span> process at Nexterse LLC
        </h2>
        <div className={styles.imageWrap}>
          <Image
            src="/pricing/02_Steps-in-estimation-process.jpg"
            alt="Estimation Process"
            width={1560}
            height={1159}
          />
        </div>
      </div>
    </section>
  );
}
