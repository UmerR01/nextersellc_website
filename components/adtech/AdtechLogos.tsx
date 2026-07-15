import styles from "./AdtechLogos.module.css";

const LOGOS = [
  { src: "/adtech-development/12_5c98e3297e3bc92bd580af14_toyota_l-1.svg", alt: "Toyota logo", width: 124, height: 38 },
  { src: "/adtech-development/12_5ecba50d2b50b63a7a1871ad_beiersdorf-logo-1.svg", alt: "Beiersdorf logo", width: 126, height: 38 },
  { src: "/adtech-development/10_SMI_Logo-1-2-2.svg", alt: "SMI logo", width: 91, height: 38 },
  { src: "/adtech-development/12_5ecce35506c123c4936b0303_dexai-logo-1.svg", alt: "Dexai logo", width: 73, height: 38 },
  { src: "/adtech-development/01_Tartle.svg", alt: "Tartle logo", width: 150, height: 38 },
  { src: "/adtech-development/01_TL-Nika.svg", alt: "TL Nika logo", width: 97, height: 38 },
];

export default function AdtechLogos() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section className={styles.section}>
      <div className={styles.overflow}>
        <div className={styles.marquee}>
          {doubled.map((logo, i) => (
            <div key={i} className={styles.item}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={styles.logo}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
