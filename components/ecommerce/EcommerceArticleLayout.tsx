"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "./EcommerceArticleLayout.module.css";

const CONTENTS = [
  { href: "#ecom-why", label: "Why choose us" },
  { href: "#ecom-services", label: "Services" },
  { href: "#ecom-platforms", label: "Platforms" },
  { href: "#ecom-solutions", label: "Solutions" },
  { href: "#ecom-cases", label: "Case studies" },
  { href: "#ecom-process", label: "Process" },
  { href: "#ecom-cost", label: "Cost factors" },
  { href: "#ecom-faq", label: "FAQ" },
];

export default function EcommerceArticleLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("ecom-why");

  useEffect(() => {
    const sections = CONTENTS
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const update = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "ecom-why";
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
      <aside className={styles.navigation} aria-label="eCommerce page contents">
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
