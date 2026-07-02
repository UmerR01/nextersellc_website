import styles from "./ComplianceBadges.module.css";

const BADGES = [
  { src: "/custom-software/05_pci.svg", alt: "PCI badge icon", width: 66, height: 64 },
  { src: "/custom-software/05_owasp.svg", alt: "OWASP badge icon", width: 98, height: 64 },
  { src: "/custom-software/05_iso.svg", alt: "ISO compliance badge icon", width: 66, height: 64 },
  { src: "/custom-software/05_hipaa.svg", alt: "HIPAA badge icon", width: 98, height: 64 },
  { src: "/custom-software/05_gdpr.svg", alt: "GDPR badge icon", width: 66, height: 64 },
  { src: "/custom-software/05_fisma.svg", alt: "FISMA compliance badge icon", width: 98, height: 64 },
];

export default function ComplianceBadges() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          {BADGES.map((badge) => (
            <div key={badge.src} className={styles.badgeWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                className={styles.badge}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
