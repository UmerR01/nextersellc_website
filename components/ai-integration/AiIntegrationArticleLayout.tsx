"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "../adlc/AdlcArticleLayout.module.css";

const CONTENTS = [
  { href: "#aii-services", label: "Services" },
  { href: "#aii-who", label: "Who It's For" },
  { href: "#aii-process", label: "Process" },
  { href: "#aii-adlc", label: "ADLC Methodology" },
  { href: "#aii-benefits", label: "Business benefits" },
  { href: "#aii-cases", label: "Our recent AI cases" },
  { href: "#aii-pilot", label: "AI Pilot First" },
  { href: "#aii-why", label: "Why Nexterse LLC" },
  { href: "#aii-faq", label: "FAQ" },
];

export default function AiIntegrationArticleLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("aii-services");

  useEffect(() => {
    const sections = CONTENTS
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "aii-services";
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
      <aside className={styles.navigation} aria-label="AI Integration page contents">
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
