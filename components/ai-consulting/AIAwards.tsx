import styles from "./AIAwards.module.css";
import AwardsCarousel from "@/components/shared/AwardsCarousel";

const BADGES = [
  { src: "/badges_fix/06_techreviewer_badge_2026-01.svg",                              alt: "Techreviewer 2026 — Top AI Consulting Company" },
  { src: "/badges_fix/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top AI Company Boston" },
  { src: "/badges_fix/06_top-ai-development-companies.svg",                            alt: "GoodFirms — Top AI Development Company" },
  { src: "/badges_fix/06_techreviewer_badge_2026-02.svg",                              alt: "Techreviewer 2026 — Top AI Readiness Assessment" },
  { src: "/badges_fix/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg",                     alt: "GoodFirms badge" },
  { src: "/badges_fix/12_5ca49c9f8ff5ad26d13b6845_TDA.svg",                           alt: "TDA badge" },
  { src: "/badges_fix/12_5ca49c9f6cb37e49a79e1163_changed.svg",                       alt: "AWS Standard Consulting Partner" },
  { src: "/badges_fix/12_Machine-Learning-Development-2024.svg",                       alt: "Machine Learning Development 2024" },
  { src: "/badges_fix/12_Data-Mining-Development-2024.svg",                            alt: "Data Mining Development 2024" },
  { src: "/badges_fix/12_Responsive-Design-Development-2025.svg",                      alt: "Responsive Design Development 2025" },
  { src: "/badges_fix/12_Custom-Web-Design-Development-2025.svg",                      alt: "Custom Web Design Development 2025" },
  { src: "/badges_fix/12_Business-Intelligence-Services-2024.svg",                     alt: "Business Intelligence Services 2024" },
];

export default function AIAwards() {
  return (
    <section className={styles.section} id="awards">
      <div className="container">
        <h2 className={styles.title}>
          <span>Awards</span> &amp; Recognitions
        </h2>
        <p className={styles.desc}>
          Nexterse LLC has been recognized by leading analytics agencies working with the best software
          development companies from all over the world. Our values and partners help us provide the
          best services in the field.
        </p>

        <AwardsCarousel badges={BADGES} />
      </div>
    </section>
  );
}
