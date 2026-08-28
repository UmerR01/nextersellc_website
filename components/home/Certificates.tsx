import styles from "./Certificates.module.css";
import AwardsCarousel from "@/components/shared/AwardsCarousel";

const BADGES = [
  { src: "/badges/iso.svg",            alt: "ISO compliance badge" },
  { src: "/badges/clutch-ai.svg",      alt: "Clutch Top AI Development Company" },
  { src: "/badges/goodfirms-ai.svg",   alt: "GoodFirms Top AI Development" },
  { src: "/badges/techreviewer-ai.svg",alt: "Techreviewer Top AI Readiness" },
  { src: "/badges/rightfirms.svg",     alt: "RightFirms 5-star rated" },
  { src: "/badges/goodfirms-ma.svg",   alt: "GoodFirms Top Software Dev Florida" },
  { src: "/badges/custom-web.svg",     alt: "Custom Web Design Development 2025" },
  { src: "/badges/iot-services.svg",   alt: "AI Services 2025" },
  { src: "/badges/tr-2025-soft.svg",   alt: "Techreviewer Top Software 2025" },
  { src: "/badges/tr-2025-iot.svg",    alt: "Techreviewer Top AI 2025" },
  { src: "/badges/techreviewer-soft.svg", alt: "Techreviewer Top AI Software Dev" },
  { src: "/badges/techreviewer-top.svg",  alt: "Techreviewer Top Software Dev" },
  { src: "/badges/goodfirms-soft.svg", alt: "GoodFirms Top Software Dev" },
];

export default function Certificates() {
  return (
    <section className={styles.section} aria-label="Certifications and awards">
      <div className="container">
        <AwardsCarousel badges={BADGES} />
      </div>
    </section>
  );
}
