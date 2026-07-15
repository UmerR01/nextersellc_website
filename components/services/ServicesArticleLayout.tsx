"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "./ServicesArticleLayout.module.css";

const CONTENTS = [
  { href: "#svc-challenges", label: "Challenges" },
  { href: "#svc-services", label: "Services" },
  { href: "#svc-ai", label: "AI development" },
  { href: "#svc-iot", label: "IoT and AIoT development" },
  { href: "#svc-industries", label: "Industries" },
  { href: "#svc-process", label: "Process" },
  { href: "#svc-techstack", label: "Core tech stack" },
  { href: "#svc-quality", label: "Quality control" },
  { href: "#svc-cases", label: "Case studies" },
  { href: "#svc-awards", label: "Awards & recognitions" },
  { href: "#svc-cost", label: "What affects cost" },
  { href: "#svc-faq", label: "FAQ" },
];

export default function ServicesArticleLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("svc-challenges");

  useEffect(() => {
    const sections = CONTENTS
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const update = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "svc-challenges";
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
      <aside className={styles.navigation} aria-label="Services page contents">
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
