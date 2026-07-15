"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "../adlc/AdlcArticleLayout.module.css";

const CONTENTS = [
  { href: "#ai-tiers", label: "ROI tiers" },
  { href: "#ai-pilot", label: "Pilot program" },
  { href: "#ai-cases", label: "Case studies & reviews" },
  { href: "#ai-guarantees", label: "Our guarantees" },
  { href: "#ai-sdlc", label: "SDLC vs ADLC" },
  { href: "#ai-adlc", label: "Agentic lifecycle" },
  { href: "#ai-security", label: "Security and compliance" },
  { href: "#ai-industries", label: "Industries" },
  { href: "#ai-awards", label: "Awards & recognitions" },
  { href: "#ai-tech", label: "Tech stack" },
  { href: "#ai-privacy", label: "Data privacy" },
  { href: "#ai-faq", label: "FAQ" },
];

export default function AisoftArticleLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("ai-tiers");

  useEffect(() => {
    const sections = CONTENTS
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "ai-tiers";
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
      <aside className={styles.navigation} aria-label="AI software development page contents">
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
