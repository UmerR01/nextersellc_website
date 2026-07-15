"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "../adlc/AdlcArticleLayout.module.css";

const CONTENTS = [
  { href: "#genai-challenges", label: "Challenges" },
  { href: "#genai-ecosystem", label: "GenAI ecosystem" },
  { href: "#genai-roi", label: "ROI & TCO modeling" },
  { href: "#genai-pilot", label: "Pilot PoC program" },
  { href: "#genai-leakage", label: "Zero data leakage" },
  { href: "#genai-cases", label: "Case studies" },
  { href: "#genai-industries", label: "Industries" },
  { href: "#genai-tech", label: "Tech stack" },
  { href: "#genai-adlc", label: "Agentic lifecycle" },
  { href: "#genai-hallucination", label: "Zero-hallucination systems" },
  { href: "#genai-faq", label: "FAQ" },
];

export default function GenaiArticleLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("genai-challenges");

  useEffect(() => {
    const sections = CONTENTS
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "genai-challenges";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= marker) current = section.id;
      });
      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const navigateTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(href.slice(1));
  };

  return (
    <div className={styles.articleContent}>
      <div className={styles.articleBody}>{children}</div>
      <aside className={styles.navigation} aria-label="GenAI development page contents">
        <div className={styles.navigationCard}>
          <h2>Contents</h2>
          <nav>
            {CONTENTS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeId === item.href.slice(1) ? styles.active : undefined}
                onClick={(event) => navigateTo(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}
