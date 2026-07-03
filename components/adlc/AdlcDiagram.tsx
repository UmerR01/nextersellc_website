import Image from "next/image";
import styles from "./AdlcDiagram.module.css";

export default function AdlcDiagram() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.imageWrap}>
            <Image
              src="/adlc/03_7-phases-of-ADLC.png"
              alt="7 phases of ADLC"
              width={1560}
              height={1596}
              className={styles.image}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
