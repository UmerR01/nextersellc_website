"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "../adlc/AdlcArticleLayout.module.css";
import s from "./MvpArticleLayout.module.css";

const CONTENTS = [
  { href: "#mvp-services",     label: "Services" },
  { href: "#mvp-why-mvp",      label: "Why MVP" },
  { href: "#mvp-process",      label: "Process" },
  { href: "#mvp-pipeline",     label: "AI vs traditional MVP" },
  { href: "#mvp-deliverables", label: "Deliverables" },
  { href: "#mvp-cases",        label: "Our recent works" },
  { href: "#mvp-tech-stack",   label: "MVP tech stack for AI products" },
  { href: "#mvp-scale",        label: "From MVP to enterprise scale" },
  { href: "#mvp-faq",          label: "FAQ" },
];

export default function MvpArticleLayout({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("mvp-services");

  useEffect(() => {
    const sections = CONTENTS
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const update = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "mvp-services";
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
      <aside className={`${styles.navigation} ${s.navigation}`} aria-label="MVP page contents">
        {/* Single sticky wrapper so both cards move together */}
        <div className={s.stickyWrapper}>
          {/* Contents card */}
          <div className={s.contentsCard}>
            <h2>Contents</h2>
            <nav>
              {CONTENTS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={activeId === item.href.slice(1) ? s.active : undefined}
                  onClick={(e) => navigateTo(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* "From Concept to Clicks" banner */}
          <div className={s.ctaBanner}>
            <div className={s.ctaBannerBg} aria-hidden="true">
              <svg preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="280" fill="#F8F9FD" />
                <g opacity="0.32" filter="url(#bfp_f0)">
                  <circle cx="340" cy="130" r="120" fill="#FF8FB1" />
                </g>
                <g opacity="0.34" filter="url(#bfp_f1)">
                  <circle cx="260" cy="240" r="160" fill="#7BB8FF" />
                </g>
                <defs>
                  <filter id="bfp_f0" x="140" y="-70" width="400" height="400" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feGaussianBlur stdDeviation="40" />
                  </filter>
                  <filter id="bfp_f1" x="-60" y="0" width="640" height="640" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feGaussianBlur stdDeviation="60" />
                  </filter>
                </defs>
              </svg>
            </div>
            <p className={s.ctaBannerTitle}>From Concept to Clicks – Get Your MVP to Market Fast</p>
            <a href="/contact-us" className={`btn btn-accent ${s.ctaBannerBtn}`}>Schedule a Call</a>
          </div>
        </div>
      </aside>
    </div>
  );
}
