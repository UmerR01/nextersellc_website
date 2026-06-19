"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import ContactModal from "./ContactModal";

const NAV = [
  { label: "Applied AI", href: "#applied-ai" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About us", href: "#about" },
  { label: "Insights", href: "#insights" },
];

const PANEL_LINKS = [
  { label: "Applied AI", href: "#applied-ai" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About us", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Careers", href: "#careers" },
];

const CONTACTS = [
  { label: "USA: +1 (919) 629-9671", href: "tel:+19196299671" },
  { label: "UK: +44 (0) 20 8731 5255", href: "tel:+442087315255" },
  { label: "hello@nexterse.com", href: "mailto:hello@nexterse.com" },
];

const SOCIAL = [
  { label: "X", href: "https://x.com", icon: "𝕏" },
  { label: "in", href: "https://linkedin.com", icon: "in" },
  { label: "f", href: "https://facebook.com", icon: "f" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Transparent (white text) over the dark hero; solid white once scrolled past it
  useEffect(() => {
    const onScroll = () => {
      const isMobile = window.innerWidth <= 860;
      if (isMobile) {
        setSolid(window.scrollY > 50);
      } else {
        // Doors open completely at 0.2 * window.innerHeight (since wrap height is 120vh)
        setSolid(window.scrollY >= window.innerHeight * 0.2);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock body scroll while the panel is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${solid ? styles.solid : ""}`}>
        <div className={styles.inner}>
          <a href="#top" className={styles.logo} aria-label="Nexterse home">
            <span className={styles.logoMark}>N</span>
            <span className={styles.logoText}>
              Nexterse<span className={styles.dot}>.</span>
            </span>
          </a>

          <nav className={styles.nav}>
            {NAV.map((item) => (
              <a key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.right}>
            <button
              className="btn btn-accent"
              onClick={() => setModalOpen(true)}
            >
              Get in touch
            </button>
            <button
              className={styles.burger}
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ---- Left slide-in panel (imported from Satva off-canvas) ---- */}
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        aria-label="Menu"
        aria-hidden={!open}
      >
        <div className={styles.panelHead}>
          <span className={styles.logoText}>
            Nexterse<span className={styles.dot}>.</span>
          </span>
          <button
            className={styles.close}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className={styles.panelNav}>
          {PANEL_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={styles.panelLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.panelSection}>
          <span className={styles.panelHeading}>Get in touch</span>
          <ul className={styles.contactList}>
            {CONTACTS.map((c) => (
              <li key={c.label}>
                <a href={c.href}>{c.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.panelSection}>
          <span className={styles.panelHeading}>Follow us</span>
          <div className={styles.social}>
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className={styles.socialLink}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <button
          className={`btn btn-accent ${styles.panelCta}`}
          onClick={() => { setOpen(false); setModalOpen(true); }}
        >
          Get in touch
        </button>
      </aside>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
