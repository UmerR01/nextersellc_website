"use client";
import { useState, useEffect } from "react";
import styles from "./AITableOfContents.module.css";

const ITEMS = [
  { id: "services",      label: "Services",            tracked: true },
  { id: "framework",     label: "Framework",           tracked: true },
  { id: "engagements",   label: "Engagement options",  tracked: true },
  { id: "tech-stack",    label: "Tech stack",          tracked: true },
  { id: "sdlc",          label: "SDLC vs ADLC",        tracked: true },
  { id: "deliverables",  label: "Deliverables",        tracked: true },
  { id: "recent-cases",  label: "Our recent AI cases", tracked: true },
  { id: "maturity",      label: "Check AI maturity",   tracked: true },
  { id: "faq",           label: "FAQ",                 tracked: true },
  { id: "awards",        label: "Awards",              tracked: true },
];

export default function AITableOfContents() {
  const [active, setActive] = useState("services");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ITEMS.filter((i) => i.tracked).forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-10% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className={styles.toc} aria-label="Page contents">
      <p className={styles.heading}>Contents</p>
      <ul className={styles.list}>
        {ITEMS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`${styles.link} ${active === id ? styles.linkActive : ""}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
