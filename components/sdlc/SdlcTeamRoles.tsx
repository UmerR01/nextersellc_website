import Image from "next/image";
import styles from "./SdlcTeamRoles.module.css";

export default function SdlcTeamRoles() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className="container">
          <h2 className={styles.title}>
            <span className={styles.accent}>Software development team roles:</span>{" "}
            who works at each phase
          </h2>
          <div className={styles.imageWrap}>
            <Image
              src="/sdlc/06_table-png.png"
              alt="Software development team roles table"
              width={1580}
              height={912}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
