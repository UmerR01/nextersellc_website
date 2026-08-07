"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./InsightsLibrary.module.css";

const PdfIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.50001 12V3.75001C4.50001 3.5511 4.5 3 4.5 3C4.5 3 5.0511 3.00001 5.25001 3.00001H14.25L19.5 8.25001V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M13.793 3V8.25H19.043" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M4.5 18.75H6C6.39782 18.75 6.77936 18.592 7.06066 18.3107C7.34196 18.0294 7.5 17.6478 7.5 17.25C7.5 16.8522 7.34196 16.4706 7.06066 16.1893C6.77936 15.908 6.39782 15.75 6 15.75H4.5V20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M20.25 15.75H17.625V20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M19.875 18.375H17.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M12 20.25C12.5967 20.25 13.169 20.0129 13.591 19.591C14.0129 19.169 14.25 18.5967 14.25 18C14.25 17.4033 14.0129 16.831 13.591 16.409C13.169 15.9871 12.5967 15.75 12 15.75H10.6875V20.25H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

const categories = [
  {
    id: "iot-development",
    label: "IoT development",
    items: [
      {
        variant: "dark" as const,
        title: "Quick playbook: selecting an IoT development partner [pdf]",
        desc: "Get a free playbook that will help you find the right IoT development partner. No email required.",
        href: "https://sumatosoft.com/wp-content/uploads/2025/09/6-Page-Quick-Playbook_-Selecting-an-IoT-Partner.pdf",
      },
      {
        variant: "light" as const,
        title: "AIoT pilot planning template [pdf]",
        desc: "Get a free template that will help you plan your next AIoT solution.",
        href: "https://sumatosoft.com/wp-content/uploads/2025/09/SumatoSoft-AIoT-Pilot-Planning-Template.pdf",
      },
      {
        variant: "dark" as const,
        title: "AIoT suitability self-assessment checklist [pdf]",
        desc: "Get a free checklist that will help you understand AIoT suitability.",
        href: "https://sumatosoft.com/wp-content/uploads/2025/09/SumatoSoft-AIoT-Suitability-Self-Assessment-Checklist-.pdf",
      },
    ],
  },
  {
    id: "ai-development",
    label: "AI development",
    items: [
      {
        variant: "dark" as const,
        title: "Quick playbook: selecting an AI development partner [pdf]",
        desc: "Get a free playbook that will help you find the right AI development partner. No email required.",
        href: "https://sumatosoft.com/wp-content/uploads/2025/09/7-Page-Quick-Playbook_-Selecting-an-AI-Partner.pdf",
      },
    ],
  },
  {
    id: "healthcare-development",
    label: "Healthcare software development",
    items: [
      {
        variant: "dark" as const,
        title: "Healthcare software vendor evaluation checklist",
        desc: "Get a free checklist for healthcare software vendor evaluation. No email required.",
        href: "https://sumatosoft.com/wp-content/uploads/2025/09/SumatoSoft-Healthcare-Software-Vendor-Evaluation-Checklist.pdf",
      },
    ],
  },
];

export default function InsightsLibrary({ afterContent }: { afterContent?: ReactNode }) {
  const [activeId, setActiveId] = useState<string>(categories[0].id);
  const [tocOpen, setTocOpen] = useState(false);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const registerRef = (id: string, el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setTocOpen(false);
  };

  return (
    <div className={styles.articleContent}>
      {/* ── Main content ── */}
      <div className={styles.articleBody}>
        {categories.map((cat) => (
          <div key={cat.id}>
            {/* Category header — .services-block */}
            <section
              id={cat.id}
              ref={(el) => registerRef(cat.id, el)}
              className={styles.servicesBlock}
            >
              <div className={styles.servicesBlockWrapper}>
                <div className="container">
                  <h2 className={styles.servicesBlockTitle}>{cat.label}</h2>
                </div>
              </div>
            </section>

            {/* Download items — .download-company-profile */}
            {cat.items.map((item, i) => (
              <section
                key={i}
                className={`${styles.downloadSection} ${item.variant === "light" ? styles.downloadLight : styles.downloadDark}`}
              >
                {/* Absolute background layer */}
                <div className={styles.downloadBg} />

                <div className="container">
                  <div className={styles.row}>
                    {/* Left — col-md-8 */}
                    <div className={styles.colLeft}>
                      <h2
                        className={`${styles.downloadTitle} ${item.variant === "light" ? styles.titleLight : styles.titleDark}`}
                      >
                        {item.title}
                      </h2>
                      <div className={`${styles.downloadDesc} ${item.variant === "light" ? styles.descLight : styles.descDark}`}>
                        <p>{item.desc}</p>
                      </div>
                    </div>

                    {/* Right — col-xl-3 col-md-4 offset-xl-1 align-self-center justify-content-center */}
                    <div className={styles.colRight}>
                      <div className={styles.downloadBtnWrap}>
                        <span className={styles.downloadBtn}>
                          <PdfIcon />
                          Download
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        ))}
        {afterContent && <div className={styles.afterContent}>{afterContent}</div>}
      </div>

      {/* ── TOC sidebar — .post-navigation ── */}
      <nav className={styles.postNavigation} aria-label="Table of contents">
        <div className={styles.postNavContent}>
          <div className={`${styles.postNavWrapper} ${tocOpen ? styles.postNavOpen : ""}`}>
            <div className={styles.postNavTitle}>
              <div className={styles.desktopHeader}>Contents</div>
              <div
                className={styles.mobileHeader}
                onClick={() => setTocOpen(!tocOpen)}
              >
                <span>Navigate</span>
                <svg
                  width="12" height="8" viewBox="0 0 12 8" fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.tocChevron} ${tocOpen ? styles.tocChevronOpen : ""}`}
                >
                  <path d="M1.41 0L6 4.59L10.59 0L12 1.42L6 7.42L0 1.42L1.41 0Z" fill="currentColor" />
                </svg>
              </div>
              <ul className={`${styles.tocList} ${tocOpen ? "" : styles.tocClosed}`}>
                {categories.map((cat) => (
                  <li key={cat.id} className={styles.tocItem}>
                    <button
                      onClick={() => scrollTo(cat.id)}
                      className={`${styles.tocLink} ${activeId === cat.id ? styles.tocLinkActive : ""}`}
                    >
                      <span>{cat.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
