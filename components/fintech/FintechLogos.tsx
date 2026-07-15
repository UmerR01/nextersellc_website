import styles from "./FintechLogos.module.css";

const LOGOS = [
  { src: "/financial-development/12_5c98e3297e3bc92bd580af14_toyota_l-1.svg", alt: "Toyota logo", width: 124, height: 38 },
  { src: "/financial-development/12_5eddeb6e88219c06bfb152bb_lpsolution-01-1.svg", alt: "lpsolution logo", width: 117, height: 38 },
  { src: "/financial-development/12_5eccf3b5f1e74b57395c8397_daiokan-logo-1.svg", alt: "Daiokan logo", width: 115, height: 38 },
  { src: "/financial-development/12_5ecce35506c123c4936b0303_dexai-logo-1.svg", alt: "Dexai logo", width: 73, height: 38 },
  { src: "/financial-development/12_5ecba50d2b50b63a7a1871ad_beiersdorf-logo-1.svg", alt: "Beiersdorf logo", width: 126, height: 38 },
  { src: "/financial-development/12_5c98e329692912146fbc4d57_mymediads_l-1.svg", alt: "Mymediads logo", width: 157, height: 38 },
  { src: "/financial-development/12_5c98e3296929120ac2bc4d54_boxfwd_l-1.svg", alt: "Boxfwd logo", width: 120, height: 38 },
];

export default function FintechLogos() {
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
