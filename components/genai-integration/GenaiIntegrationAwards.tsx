"use client";
import { useEffect, useState } from "react";
import styles from "@/components/custom-software/CSAwardsBlock.module.css";

const AWARDS = [
  { src: "/genai-integration/06_techreviewer_badge_2026-16.svg", alt: "techreviewer.co 2026 — Top AI Integration Companies" },
  { src: "/genai-integration/06_techreviewer_badge_2026-15.svg", alt: "techreviewer.co 2026 — Top GenAI Development Companies" },
  { src: "/genai-integration/05_top_clutch.co_generative_ai_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Generative AI Company in Boston" },
  { src: "/genai-integration/06_techreviewer_badge_2026-04.svg", alt: "techreviewer.co 2026 — Top AI Software Development Companies" },
  { src: "/genai-integration/05_top_clutch.co_artificial_intelligence_company_boston_2026-2.svg", alt: "Clutch 2026 — Top Artificial Intelligence Company in Boston" },
  { src: "/genai-integration/06_techreviewer_badge_2026-01.svg", alt: "techreviewer.co 2026 — Top AI Consulting Companies" },
  { src: "/genai-integration/06_techreviewer_badge_2026-02.svg", alt: "techreviewer.co 2026 — Top AI Readiness Assessment Companies" },
  { src: "/genai-integration/06_top-ai-development-companies.svg", alt: "GoodFirms — Top AI Development Company" },
  { src: "/genai-integration/06_techreviewer_badge_2026-03.svg", alt: "techreviewer.co 2026 — Top AI PoC Development Companies" },
  { src: "/genai-integration/06_techreviewer_badge_2026-05.svg", alt: "techreviewer.co 2026 — Top AI Agents Development Companies" },
  { src: "/genai-integration/06_techreviewer_badge_2026-06.svg", alt: "techreviewer.co 2026 — Top RAG Development Companies" },
  { src: "/genai-integration/06_techreviewer_badge_2026-07.svg", alt: "techreviewer.co 2026 — Top LLM Development Companies" },
];

export default function GenaiIntegrationAwards() {
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(6);
  const max = Math.max(0, AWARDS.length - visible);

  useEffect(() => {
    const updateVisible = () => setVisible(window.innerWidth <= 1024 ? 4 : 6);
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    setOffset((current) => Math.min(current, max));
  }, [max]);

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(max, o + 1));

  return (
    <section id="gaii-awards" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Awards</span> &amp; Recognitions
        </h2>
        <div className={styles.sliderArea}>
          <div className={styles.slider}>
            <div
              className={styles.track}
              style={{
                "--visible": visible,
                transform: `translateX(calc(-${offset} * ((100% - ${visible - 1} * 40px) / ${visible} + 40px)))`,
              } as React.CSSProperties}
            >
              {AWARDS.map((a, i) => (
                <div key={i} className={styles.slide}>
                  <div className={styles.awardWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={a.src} alt={a.alt} className={styles.awardImg} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prev} disabled={offset === 0} aria-label="Previous">
            <span className={styles.arrowBox} aria-hidden="true" />
          </button>
          <button className={`${styles.navBtn} ${styles.navNext}`} onClick={next} disabled={offset >= max} aria-label="Next">
            <span className={styles.arrowBox} aria-hidden="true" />
          </button>
        </div>
        <div className={styles.mobileNav}>
          <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prev} disabled={offset === 0} aria-label="Previous">
            <span className={`${styles.arrowBox} ${styles.arrowBoxSmall}`} aria-hidden="true" />
          </button>
          <button className={`${styles.navBtn} ${styles.navNext}`} onClick={next} disabled={offset >= max} aria-label="Next">
            <span className={`${styles.arrowBox} ${styles.arrowBoxSmall}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
