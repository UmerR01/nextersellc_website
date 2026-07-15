"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "./PredictiveArticleLayout.module.css";

const CONTENTS = [
  { href: "#pdm-challenges", label: "Challenges" },
  { href: "#pdm-cases", label: "Case studies" },
  { href: "#pdm-faq", label: "FAQ" },
  { href: "#pdm-digital-twins", label: "Digital twins" },
  { href: "#pdm-tech-stack", label: "Tech stack" },
  { href: "#pdm-process", label: "Process" },
  { href: "#pdm-security", label: "Security and data control" },
  { href: "#pdm-why", label: "Why Nexterse LLC" },
];

export default function PredictiveArticleLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("pdm-challenges");

  useEffect(() => {
    const sections = CONTENTS
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const update = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "pdm-challenges";
      sections.forEach((el) => {
        if (el.getBoundingClientRect().top <= marker) current = el.id;
      });
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(href.slice(1));
  };

  return (
    <div className={styles.articleContent}>
      <div className={styles.articleBody}>{children}</div>
      <aside className={styles.navigation} aria-label="Predictive maintenance page contents">
        <div className={styles.navigationCard}>
          <h2>Contents</h2>
          <nav>
            {CONTENTS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeId === item.href.slice(1) ? styles.active : undefined}
                onClick={(e) => navigateTo(e, item.href)}
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
