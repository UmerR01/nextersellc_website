"use client";
import { useState, useEffect } from "react";
import styles from "./ARTableOfContents.module.css";

const ITEMS = [
  { id: "foundation",  label: "Things to check" },
  { id: "deliverables", label: "Audit scope" },
  { id: "architecture", label: "AI-ready architecture" },
  { id: "timeline",    label: "Timeline" },
  { id: "deliverables2", label: "Deliverables" },
  { id: "recent-cases", label: "Recent AI cases" },
  { id: "faq",         label: "FAQ" },
  { id: "use-cases",   label: "Use cases" },
  { id: "path",        label: "From assessment" },
];

export default function ARTableOfContents() {
  const [active, setActive] = useState("foundation");

  useEffect(() => {
    const ids = ITEMS.map((i) => i.id);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
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
