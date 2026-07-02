import Image from "next/image";
import styles from "./AdlcLogos.module.css";

const LOGOS = [
  { src: "/adlc/12_5c98e3297e3bc92bd580af14_toyota_l-1.svg", alt: "Toyota logo", width: 124, height: 38 },
  { src: "/adlc/10_SMI_Logo-1-2-2.svg", alt: "SMI logo", width: 91, height: 38 },
  { src: "/adlc/12_5ecba50d2b50b63a7a1871ad_beiersdorf-logo-1.svg", alt: "Beiersdorf logo", width: 126, height: 38 },
  { src: "/adlc/12_5ecce35506c123c4936b0303_dexai-logo-1.svg", alt: "Dexai logo", width: 73, height: 38 },
  { src: "/adlc/01_ClimeCo.svg", alt: "ClimeCo", width: 210, height: 38 },
  { src: "/adlc/01_TL-Nika.svg", alt: "TL Nika", width: 97, height: 38 },
];

export default function AdlcLogos() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logosWrapper}>
          {LOGOS.map((logo) => (
            <div key={logo.src} className={styles.logoItem}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
