"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./EngCrosslinksBlock.module.css";

const LINKS = [
  { text: "Explore all our ", last: "services", href: "/ai-consulting" },
  { text: "See projects delivered with each ", last: "model", href: "/portfolio" },
  { text: "Our development ", last: "lifecycle", href: "/ai-consulting" },
  { text: "Engagement models ", last: "FAQ", href: "/faq" },
  { text: "About Nexterse ", last: "team", href: "/#about" },
];

export default function EngCrosslinksBlock() {
  const [collapsed, setCollapsed] = useState(true);
  const gridRef = useRef<HTMLDivElement>(null);
  const [cutHeight, setCutHeight] = useState<number | null>(null);
  const [fullHeight, setFullHeight] = useState<number | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const full = grid.scrollHeight;
    setFullHeight(full);
    setCutHeight(Math.min(120, full - 1));
  }, []);

  const showToggle = fullHeight !== null && cutHeight !== null && fullHeight > cutHeight + 8;

  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div
          ref={gridRef}
          className={styles.grid}
          style={showToggle ? { maxHeight: collapsed ? `${cutHeight}px` : `${fullHeight}px` } : undefined}
        >
          <div className={styles.col}>
            <div className={styles.colTitle}>More about Nexterse</div>
            <div className={styles.list}>
              {LINKS.map((l, i) => (
                <div key={i} className={styles.item}>
                  <Link href={l.href} className={styles.itemLink}>
                    {l.text}
                    <span className={styles.itemLinkLast}>
                      {l.last}
                      <span className={styles.linkArrow} />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showToggle && (
          <div className={styles.toggleWrap}>
            <button type="button" className={styles.toggle} onClick={() => setCollapsed(!collapsed)}>
              <span>{collapsed ? "Show all links" : "Hide links"}</span>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" style={{ transform: collapsed ? "rotate(180deg)" : "none", transition: "transform 0.25s ease" }}>
                <path d="M4.41 10.5L8 6.91L11.59 10.5L12.5 9.5L8 5L3.5 9.5L4.41 10.5Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
