import styles from "./AipocLogos.module.css";

const LOGOS = Array.from({ length: 24 }, (_, i) => ({
  src: `/logo_new/${i + 1}.svg`,
  alt: `Client logo ${i + 1}`,
  width: 120,
  height: 120,
}));

export default function AipocLogos() {
  return (
    <section className={styles.section}>
      <div className={styles.overflow}>
        <div className={styles.marquee}>
          <Track />
          <Track ariaHidden />
        </div>
      </div>
    </section>
  );
}

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className={styles.track} aria-hidden={ariaHidden}>
      {LOGOS.map((logo, i) => (
        <div key={`${logo.src}-${i}`} className={styles.item}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={styles.logo} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
