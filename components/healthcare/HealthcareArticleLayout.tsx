"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "./HealthcareArticleLayout.module.css";

const CONTENTS = [
  { href: "#hc-processes", label: "Processes we automate" },
  { href: "#hc-services", label: "Services" },
  { href: "#hc-cases", label: "Case studies & reviews" },
  { href: "#hc-process", label: "Process" },
  { href: "#hc-faq-video", label: "FAQ Video" },
  { href: "#hc-faq", label: "FAQ" },
];

export default function HealthcareArticleLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("hc-processes");

  useEffect(() => {
    const sections = CONTENTS
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const update = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "hc-processes";
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
      <aside className={styles.navigation} aria-label="Healthcare page contents">
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
