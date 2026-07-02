import Image from "next/image";
import styles from "./SdlcPhasesGlance.module.css";

export default function SdlcPhasesGlance() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className="container">
          <h2 className={styles.title}>
            Software development lifecycle:{" "}
            <span className={styles.accent}>6 phases</span> at a glance
          </h2>
          <div className={styles.description}>
            <p>
              Every Nexterse project moves through six phases in sequence. Each phase has a defined
              entry point, a set of documented deliverables, and an exit condition that must be met
              before the next phase begins. The sequence is the same across project sizes – scope
              and team composition vary, the structure does not.
            </p>
          </div>
          <div className={styles.imageWrap}>
            <Image
              src="/sdlc/02_Image_developmen_life.svg"
              alt="Software development life-cycle"
              width={980}
              height={503}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
