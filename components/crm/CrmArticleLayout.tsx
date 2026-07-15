"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "./CrmArticleLayout.module.css";

const CONTENTS = [
  { href: "#services", label: "Services" },
  { href: "#outcomes", label: "Business outcomes" },
  { href: "#challenges", label: "Challenges" },
  { href: "#software-we-modernize", label: "CRM we build" },
  { href: "#case-studies", label: "Case studies" },
  { href: "#risk-management", label: "Risk management" },
  { href: "#cost-of-legacy", label: "Cost of the wrong CRM" },
  { href: "#approach", label: "Approach" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export default function CrmArticleLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("services");

  useEffect(() => {
    const sections = CONTENTS
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const update = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "services";
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
      <aside className={styles.navigation} aria-label="CRM page contents">
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
