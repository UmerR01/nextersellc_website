"use client";
import { useState, useEffect } from "react";
import styles from "./ESDTableOfContents.module.css";

const TOC_ITEMS = [
  { label: "Services", id: "comprehensive-enterprise-software-services" },
  { label: "AI readiness audit", id: "ai-starts-with-data-readiness" },
  { label: "Case studies", id: "recent-works" },
  { label: "Industries", id: "enterprise-solution-built-for-your-industry" },
  { label: "Free guide [pdf]", id: "quick-playbook-selecting-an-enterprise-development-partner-pdf" },
  { label: "Approach", id: "enterprise-software-development-approach" },
  { label: "Key tech stack", id: "our-expertise-in-tools-and-technologies" },
  { label: "AI-first security posture", id: "ai-first-security-posture" },
  { label: "Benefits", id: "benefits-custom-enterprise-software" },
  { label: "Rewards", id: "awards-recognitions" },
  { label: "FAQ", id: "frequently-asked-questions" },
];

export default function ESDTableOfContents() {
  const [activeId, setActiveId] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  if (!visible) return null;

  return (
    <div className={`${styles.nav} ${mobileOpen ? styles.navOpen : ""}`}>
      <div className={styles.content}>
        <div className={styles.desktopHeader}>Contents</div>
        <button
          className={styles.mobileHeader}
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
        >
          <span>Navigate</span>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            style={{ transform: mobileOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
          >
            <path d="M1.41 0L6 4.59L10.59 0L12 1.42L6 7.42L0 1.42L1.41 0Z" fill="currentColor" />
          </svg>
        </button>
        <ul className={`${styles.list} ${mobileOpen ? styles.listOpen : ""}`}>
          {TOC_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`${styles.link} ${activeId === item.id ? styles.linkActive : ""}`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
