"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "../adlc/AdlcArticleLayout.module.css";

const CONTENTS = [
  { href: "#cs-services", label: "Services" },
  { href: "#cs-delivery-models", label: "Delivery models" },
  { href: "#cs-two-lifecycles", label: "Two lifecycles, one team" },
  { href: "#cs-cases", label: "Case studies" },
  { href: "#cs-process", label: "Process" },
  { href: "#cs-advanced-tech", label: "Advanced tech" },
  { href: "#cs-industries", label: "Industries" },
  { href: "#cs-how-we-price", label: "How we price work" },
  { href: "#cs-why-teams", label: "Why Nexterse LLC" },
  { href: "#cs-faq", label: "FAQ" },
];

export default function CSArticleLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("cs-services");

  useEffect(() => {
    const sections = CONTENTS
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "cs-services";

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
      <aside className={styles.navigation} aria-label="Custom software page contents">
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
