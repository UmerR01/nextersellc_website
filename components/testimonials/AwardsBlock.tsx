"use client";
import styles from "./AwardsBlock.module.css";

const AWARDS = [
  { src: "/testimonials/06_RightFirms-1.svg", alt: "RightFirms 2026 — 5-star rated Nexterse LLC profile" },
  { src: "/testimonials/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Artificial Intelligence Company in Boston" },
  { src: "/testimonials/06_top-software-development-companies.svg", alt: "GoodFirms — Top Software Development Company" },
  { src: "/testimonials/06_techreviewer_badge_2026-12.svg", alt: "techreviewer.co 2026 — Top Software Development Companies" },
];

export default function AwardsBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleBlue}>Awards</span> &amp; Recognitions
        </h2>
        <div className={styles.row}>
          {AWARDS.map((a, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={a.src} alt={a.alt} className={styles.awardImg} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
