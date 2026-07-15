import Image from "next/image";
import styles from "./ComplianceBadgesRow.module.css";

const BADGES = [
  { src: "/services-page/05_pci.svg", alt: "PCI badge", width: 66, height: 64 },
  { src: "/services-page/05_owasp.svg", alt: "OWASP badge", width: 98, height: 64 },
  { src: "/services-page/05_iso.svg", alt: "ISO compliance badge", width: 66, height: 64 },
  { src: "/services-page/05_hipaa.svg", alt: "HIPAA badge", width: 98, height: 64 },
  { src: "/services-page/05_gdpr.svg", alt: "GDPR badge", width: 66, height: 64 },
  { src: "/services-page/05_fisma.svg", alt: "FISMA compliance badge", width: 98, height: 64 },
];

export default function ComplianceBadgesRow() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.badges}>
          {BADGES.map((b) => (
            <div key={b.alt} className={styles.badge}>
              <Image src={b.src} alt={b.alt} width={b.width} height={b.height} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
