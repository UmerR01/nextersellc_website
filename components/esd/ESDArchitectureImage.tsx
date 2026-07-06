import styles from "./ESDArchitectureImage.module.css";

export default function ESDArchitectureImage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/esd/05_Dual-engine-enterprise-architecture.png"
          alt="Dual engine enterprise architecture"
          className={styles.img}
          loading="lazy"
        />
      </div>
    </div>
  );
}
