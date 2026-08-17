"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "../adlc/AdlcArticleLayout.module.css";

const CONTENTS = [
  { href: "#comprehensive-enterprise-software-services", label: "Services" },
  { href: "#ai-starts-with-data-readiness", label: "AI readiness audit" },
  { href: "#recent-works", label: "Case studies" },
  { href: "#enterprise-solution-built-for-your-industry", label: "Industries" },
  { href: "#enterprise-software-development-approach", label: "Approach" },
  { href: "#our-expertise-in-tools-and-technologies", label: "Key tech stack" },
  { href: "#ai-first-security-posture", label: "AI-first security posture" },
  { href: "#benefits-custom-enterprise-software", label: "Benefits" },
  { href: "#awards-recognitions", label: "Rewards" },
  { href: "#frequently-asked-questions", label: "FAQ" },
];

export default function ESDArticleLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("comprehensive-enterprise-software-services");

  useEffect(() => {
    const sections = CONTENTS
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "comprehensive-enterprise-software-services";

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
      <aside className={styles.navigation} aria-label="Enterprise software development page contents">
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
