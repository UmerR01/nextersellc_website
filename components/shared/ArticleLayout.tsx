"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "./ArticleLayout.module.css";

export type ArticleLayoutContentsItem = { href: string; label: string };

interface ArticleLayoutProps {
  contents: ArticleLayoutContentsItem[];
  ariaLabel: string;
  children: ReactNode;
}

export default function ArticleLayout({ contents, ariaLabel, children }: ArticleLayoutProps) {
  const defaultId = contents[0]?.href.slice(1) ?? "";
  const [activeId, setActiveId] = useState(defaultId);

  useEffect(() => {
    const sections = contents
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const update = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? defaultId;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contents]);

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
      <aside className={styles.navigation} aria-label={ariaLabel}>
        <div className={styles.navigationCard}>
          <h2>Contents</h2>
          <nav>
            {contents.map((item) => (
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
