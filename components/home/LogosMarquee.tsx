import Image from "next/image";
import styles from "./LogosMarquee.module.css";

/** Client logos — Sumato's continuous, linear-scrolling logo strip. */
const LOGOS = [
  { src: "/logos/toyota.svg", alt: "Toyota", w: 124 },
  { src: "/logos/dexai.svg", alt: "Dexai", w: 73 },
  { src: "/logos/beiersdorf.svg", alt: "Beiersdorf", w: 126 },
  { src: "/logos/smi.svg", alt: "SMI", w: 91 },
  { src: "/logos/climeco.svg", alt: "ClimeCo", w: 132 },
  { src: "/logos/tartle.svg", alt: "Tartle", w: 150 },
  { src: "/logos/tl-nika.svg", alt: "TL Nika", w: 97 },
  { src: "/logos/lpsolution.svg", alt: "LP Solution", w: 117 },
  { src: "/logos/boxfwd.svg", alt: "Boxfwd", w: 120 },
  { src: "/logos/mymediads.svg", alt: "Mymediads", w: 157 },
  { src: "/logos/daiokan.svg", alt: "Daiokan", w: 115 },
];

export default function LogosMarquee() {
  return (
    <section className={styles.section} aria-label="Trusted by">
      <div className={styles.marquee}>
        {/* Two identical tracks create a seamless loop */}
        <Track />
        <Track ariaHidden />
      </div>
    </section>
  );
}

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul className={styles.track} aria-hidden={ariaHidden}>
      {LOGOS.map((logo, i) => (
        <li key={`${logo.alt}-${i}`} className={styles.item}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={38}
            className={styles.logo}
          />
        </li>
      ))}
    </ul>
  );
}
