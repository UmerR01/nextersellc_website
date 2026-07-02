import Image from "next/image";
import styles from "./TeamLogos.module.css";

const LOGOS = [
  { src: "/team/12_5eddeb6e88219c06bfb152bb_lpsolution-01-1.svg", alt: "LPS Solution", w: 117, h: 38 },
  { src: "/team/12_5ecce35506c123c4936b0303_dexai-logo-1.svg", alt: "Dexai", w: 73, h: 38 },
  { src: "/team/12_5ecba50d2b50b63a7a1871ad_beiersdorf-logo-1.svg", alt: "Beiersdorf", w: 126, h: 38 },
  { src: "/team/12_5c98e3297e3bc92bd580af14_toyota_l-1.svg", alt: "Toyota", w: 124, h: 38 },
  { src: "/team/12_5c98e3296929120ac2bc4d54_boxfwd_l-1.svg", alt: "BoxFwd", w: 120, h: 38 },
  { src: "/team/12_5c98e329692912146fbc4d57_mymediads_l-1.svg", alt: "MyMediAds", w: 157, h: 38 },
  { src: "/team/12_5eccf3b5f1e74b57395c8397_daiokan-logo-1.svg", alt: "Daiokan", w: 115, h: 38 },
  { src: "/team/01_ClimeCo.svg", alt: "ClimeCo", w: 210, h: 38 },
  { src: "/team/01_TL-Nika.svg", alt: "TL Nika", w: 97, h: 38 },
  { src: "/team/01_Tartle.svg", alt: "Tartle", w: 150, h: 38 },
  { src: "/team/10_SMI_Logo-1-2-2.svg", alt: "SMI", w: 91, h: 38 },
];

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul className={styles.track} aria-hidden={ariaHidden}>
      {LOGOS.map((logo, i) => (
        <li key={`${logo.alt}-${i}`} className={styles.item}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={logo.h}
            className={styles.logo}
          />
        </li>
      ))}
    </ul>
  );
}

export default function TeamLogos() {
  return (
    <section className={styles.section} aria-label="Trusted by">
      <div className={styles.marquee}>
        <Track />
        <Track ariaHidden />
      </div>
    </section>
  );
}
