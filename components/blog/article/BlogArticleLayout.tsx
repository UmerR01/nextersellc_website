"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import BlogSocialShare from "./BlogSocialShare";
import styles from "./BlogArticleLayout.module.css";

export const CONTENTS = [
  { href: "#h-tl-dr", label: "TL;DR" },
  { href: "#h-why-this-is-worth-getting-right", label: "Why this is worth getting right" },
  {
    href: "#h-the-distinction-most-lists-blur-enablement-vs-migration",
    label: "The distinction most lists blur: enablement vs migration",
  },
  { href: "#h-how-we-evaluated-these-companies", label: "How we evaluated these companies" },
  { href: "#h-the-companies-grouped-by-fit", label: "The companies, grouped by fit" },
  { href: "#h-how-to-vet-a-modernization-partner-yourself", label: "How to vet a modernization partner yourself" },
  {
    href: "#h-when-not-to-modernize-and-when-to-pick-a-big-si-instead",
    label: "When not to modernize — and when to pick a big SI instead",
  },
  { href: "#h-how-we-approach-it-at-sumatosoft", label: "How we approach it at SumatoSoft" },
  { href: "#h-frequently-asked-questions", label: "Frequently asked questions" },
  { href: "#h-summary", label: "Summary" },
];

export default function BlogArticleLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState(CONTENTS[0].href.slice(1));
  const [collapsed, setCollapsed] = useState(false);
  const isMobileRef = useRef<boolean | null>(null);

  useEffect(() => {
    const headings = CONTENTS.map((item) => document.querySelector<HTMLElement>(item.href)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    const updateActive = () => {
      const scrollTop = window.scrollY;
      // Each heading "owns" the scroll range from itself up to the next heading
      // (not just its own text height) — otherwise a few px of smooth-scroll
      // rounding can land just outside a ~40px window and the highlight sticks
      // to whatever was active before.
      headings.forEach((el, i) => {
        const top = el.offsetTop - 110;
        const next = headings[i + 1];
        const bottom = next ? next.offsetTop - 110 : Infinity;
        if (scrollTop >= top && scrollTop < bottom) setActiveId(el.id);
      });
    };

    // Mirrors the reference's one-shot breakpoint flag: only force collapse/expand
    // when crossing 992px, so a manual toggle survives resizes within the same regime.
    const evaluateBreakpoint = () => {
      const isMobile = window.innerWidth <= 992;
      if (isMobileRef.current === null || isMobile !== isMobileRef.current) {
        isMobileRef.current = isMobile;
        setCollapsed(isMobile);
      }
    };

    updateActive();
    evaluateBreakpoint();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    window.addEventListener("resize", evaluateBreakpoint);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
      window.removeEventListener("resize", evaluateBreakpoint);
    };
  }, []);

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    setActiveId(href.slice(1));
    window.scrollTo({ top: target.offsetTop - 100, behavior: "smooth" });
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.primary}>
        <div className={styles.articleBody}>
          {children}
        </div>
      </div>
      <aside className={styles.secondary} aria-label="Article contents">
        <div className={styles.secondaryContentWrapper}>
          <div className={styles.postNavigation}>
            <div className={styles.postNavigationWrapper}>
              <div className={styles.postNavigationTitle}>
                <div>Contents</div>
                <button
                  type="button"
                  className={`${styles.closeButton} ${collapsed ? styles.closed : ""}`}
                  aria-label={collapsed ? "Expand contents" : "Collapse contents"}
                  onClick={() => setCollapsed((c) => !c)}
                >
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M1.41 -7.62939e-08L6 4.59L10.59 -7.62939e-08L12 1.42L6 7.42L0 1.42L1.41 -7.62939e-08Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <ul className={`${styles.tocList} ${collapsed ? styles.closed : ""}`}>
                {CONTENTS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={activeId === item.href.slice(1) ? styles.active : undefined}
                      onClick={(e) => navigateTo(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <BlogSocialShare />
        </div>
      </aside>
    </div>
  );
}
