"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import dd from "./NavDropdown.module.css";
import ContactModal from "./ContactModal";

const Chevron = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="1 3.5 6 8.5 11 3.5" />
  </svg>
);

const PANEL_LINKS = [
  { label: "About", href: "/team" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Applied AI", href: "#applied-ai" },
  { label: "Insights", href: "/library" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const CONTACTS = [
  { label: "USA: +1 (321) 491-2236", href: "tel:+13214912236" },
  { label: "UAE: +971 58 512 2084", href: "tel:+971585122084" },
  { label: "info@nexterse.com", href: "mailto:info@nexterse.com" },
];

const SOCIAL = [
  { label: "X", href: "https://x.com", icon: "𝕏" },
  { label: "f", href: "https://facebook.com", icon: "f" },
  { label: "in", href: "https://linkedin.com", icon: "in" },
];

export default function Header({ forceSolid = false }: { forceSolid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(forceSolid);
  const [modalOpen, setModalOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const solidRef = useRef(forceSolid);

  useEffect(() => {
    if (forceSolid) return;
    const aboutEl = document.getElementById("about");
    const heroEl = document.getElementById("top");
    let frame = 0;

    const COLOR_TRANSITION = "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease";

    const applyTransform = (p: number, withTransition = false) => {
      const el = headerRef.current;
      if (!el) return;
      el.style.transition = withTransition
        ? `${COLOR_TRANSITION}, transform 0.45s cubic-bezier(0.76, 0, 0.24, 1)`
        : COLOR_TRANSITION;
      el.style.transform = `translateY(${-p * 100}%)`;
    };

    const applySolid = (next: boolean) => {
      const changed = next !== solidRef.current;
      if (changed) {
        solidRef.current = next;
        setSolid(next);
      }
      return changed;
    };

    const update = () => {
      frame = 0;
      // Sub-pages (no home hero layout): always visible, solid when scrolled past top
      if (!aboutEl) {
        const past = window.scrollY > 10;
        applySolid(past);
        if (headerRef.current) headerRef.current.style.transform = "";
        return;
      }

      if (window.innerWidth <= 1024) {
        const past = window.scrollY > 50;
        applySolid(past);
        if (headerRef.current) headerRef.current.style.transform = "";
        return;
      }

      // Derive visibility directly from layout on every update. This avoids a
      // stale transitionend callback hiding the header after rapid scrolling.
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const aboutReached = aboutEl.getBoundingClientRect().top <= headerHeight;
      if (aboutReached) {
        const changed = applySolid(true);
        applyTransform(0, changed);
        return;
      }

      applySolid(false);
      const doorDist = heroEl
        ? heroEl.offsetHeight - window.innerHeight
        : window.innerHeight * 0.6;
      const HEADER_SPEED = 1.8;
      const headerDist = doorDist / HEADER_SPEED;
      const p = headerDist > 0 ? Math.min(1, Math.max(0, window.scrollY / headerDist)) : 0;
      applyTransform(p, false);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onPageActive = () => {
      if (document.visibilityState !== "hidden") scheduleUpdate();
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("pageshow", onPageActive);
    window.addEventListener("focus", onPageActive);
    document.addEventListener("visibilitychange", onPageActive);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("pageshow", onPageActive);
      window.removeEventListener("focus", onPageActive);
      document.removeEventListener("visibilitychange", onPageActive);
    };
  }, [forceSolid]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${solid ? styles.solid : ""}`}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="Nexterse LLC home">
            <Image
              src={solid ? "/brand/nexters_logo_blue.png" : "/brand/nexterse_logo.png"}
              alt="Nexterse LLC"
              width={140}
              height={36}
              className={styles.logoImg}
              priority
            />
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navList}>

              {/* ── Applied AI (3 columns) ── */}
              <li className={dd.item}>
                <a href="#applied-ai" className={dd.link}>
                  Applied AI <Chevron className={dd.chevron} />
                </a>
                <div className={`${dd.panel} ${dd.panelAppliedAI} ${dd.cols3}`}>
                  {[
                    {
                      title: "Strategy",
                      links: [
                        { label: "AI Consulting",           href: "/ai-consulting" },
                        { label: "AI Readiness Assessment", href: "/ai-readiness-assessment" },
                        { label: "AI PoC Development",      href: "/ai-consulting#services" },
                      ],
                    },
                    {
                      title: "Development",
                      links: [
                        { label: "AI Software Development", href: "#applied-ai" },
                        { label: "AI Agents Development",   href: "#applied-ai" },
                        { label: "RAG Development",         href: "#applied-ai" },
                        { label: "LLM Development",         href: "#applied-ai" },
                        { label: "GenAI Development",       href: "#applied-ai" },
                        { label: "OpenAI Development",      href: "#applied-ai" },
                        { label: "AIoT Development",        href: "#applied-ai" },
                      ],
                    },
                    {
                      title: "Operations",
                      links: [
                        { label: "AI Integration",          href: "#applied-ai" },
                        { label: "GenAI Integration",       href: "#applied-ai" },
                        { label: "Big Data Development",    href: "#applied-ai" },
                        { label: "ML Development",          href: "#applied-ai" },
                        { label: "AIoT & Data Analytics",   href: "#applied-ai" },
                      ],
                    },
                  ].map((col) => (
                    <div key={col.title} className={dd.col}>
                      <p className={dd.colTitle}>{col.title}</p>
                      <div className={dd.colLinks}>
                        {col.links.map((l) => (
                          <a key={l.label} href={l.href} className={dd.colLink}>{l.label}</a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </li>

              {/* ── Services (3 columns) ── */}
              <li className={dd.item}>
                <a href="#services" className={dd.link}>
                  Services <Chevron className={dd.chevron} />
                </a>
                <div className={`${dd.panel} ${dd.panelServices} ${dd.cols3}`}>
                  <div className={dd.col}>
                    <p className={dd.colTitle}>Key Services</p>
                    <div className={dd.colLinks}>
                      {[
                        { label: "Custom Software Development", href: "/services/custom-software-development" },
                        { label: "Enterprise Software Development", href: "#services" },
                        { label: "CRM Development", href: "#services" },
                        { label: "Legacy Software Modernization", href: "#services" },
                        { label: "MVP Development", href: "#services" },
                      ].map((l) => <a key={l.label} href={l.href} className={dd.colLink}>{l.label}</a>)}
                    </div>
                    <a href="#services" className={dd.allLink}>All Services</a>
                  </div>
                  <div className={dd.col}>
                    <p className={dd.colTitle}>AI & Advanced Tech</p>
                    <div className={dd.colLinks}>
                      {[
                        "AI Software Development",
                        "AI Agents Development",
                        "RAG Development",
                        "LLM Development",
                        "GenAI Development",
                        "AIoT Development",
                        "AI Integration",
                      ].map((l) => <a key={l} href="#services" className={dd.colLink}>{l}</a>)}
                    </div>
                  </div>
                  <div className={dd.col}>
                    <p className={dd.colTitle}>Industry Solutions</p>
                    <div className={dd.colLinks}>
                      {[
                        "Healthcare",
                        "Logistics",
                        "Retail & E-Commerce",
                        "Cybersecurity",
                        "EdTech",
                      ].map((l) => <a key={l} href="#services" className={dd.colLink}>{l}</a>)}
                    </div>
                  </div>
                </div>
              </li>

              {/* ── Process — Satva-style mega panel ── */}
              <li className={dd.item}>
                <a href="#process" className={dd.link}>
                  Process <Chevron className={dd.chevron} />
                </a>
                <div className={`${dd.panel} ${dd.panelProcess}`}>
                  {/* Left: tagline + CTA */}
                  <div className={dd.processLeft}>
                    <p className={dd.processTagline}>
                      Working collaboratively with clients to develop outstanding solutions
                    </p>
                    <a href="#process" className={dd.processCtaLink}>
                      Our Process →
                    </a>
                  </div>

                  {/* Right: 3 image cards using Next.js Image fill */}
                  <div className={dd.processCards}>
                    {[
                      {
                        label: "Project Onboarding & Delivery",
                        href: "#process",
                        src: "/cases/team.jpg",
                      },
                      {
                        label: "Expert Vetting Process",
                        href: "#process",
                        src: "/cases/woman.jpg",
                      },
                      {
                        label: "Our Development Process",
                        href: "#process",
                        src: "/cases/mobile-dev.webp",
                      },
                    ].map((card) => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <a key={card.label} href={card.href} className={dd.processCard}>
                        <img src={card.src} alt="" className={dd.processCardImg} />
                        <div className={dd.processCardLabel}>{card.label}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              {/* ── Pricing (no dropdown) ── */}
              <li className={dd.item}>
                <a href="#pricing" className={dd.link}>Pricing</a>
              </li>

              {/* ── About us ── */}
              <li className={dd.item}>
                <a href="/team" className={dd.link}>
                  About us <Chevron className={dd.chevron} />
                </a>
                <div className={`${dd.panel} ${dd.panelAbout}`}>
                  <div className={dd.aboutLinks}>
                    <p className={dd.colTitle}>About Us</p>
                    <div className={dd.colLinks}>
                      {[
                        { label: "Team", href: "/team#management-team" },
                        { label: "FAQ", href: "/faq" },
                        { label: "Testimonials", href: "/testimonials" },
                        { label: "Engagement Models", href: "/engagement-models-process" },
                        { label: "ADLC", href: "/adlc" },
                        { label: "SDLC", href: "/sdlc" },
                        { label: "Careers", href: "/careers" },
                        { label: "Contact Us", href: "/contact-us" },
                      ].map((l) => (
                        <a key={l.label} href={l.href} className={dd.colLink}>{l.label}</a>
                      ))}
                    </div>
                    <a href="/team" className={dd.allLink}>About us</a>
                  </div>
                  <div className={dd.aboutNumbers}>
                    <p className={dd.colTitle}>Nexterse LLC in numbers</p>
                    <div className={dd.numbersGrid}>
                      {[
                        { v: "350+", l: "Developed custom solutions" },
                        { v: "98%",  l: "Satisfaction rate" },
                        { v: "3+",   l: "Years' Client engagement" },
                        { v: "25+",  l: "Countries, including the USA" },
                        { v: "14+",  l: "Years on the market" },
                        { v: "70%",  l: "Senior engineers" },
                      ].map((n) => (
                        <div key={n.v} className={dd.numberItem}>
                          <div className={dd.numberVal}>{n.v}</div>
                          <div className={dd.numberLabel}>{n.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {/* ── Insights ── */}
              <li className={dd.item}>
                <a href="/library" className={dd.link}>
                  Insights <Chevron className={dd.chevron} />
                </a>
                <div className={`${dd.panel} ${dd.panelInsights}`}>
                  <div className={dd.insightsLinks}>
                    <p className={dd.colTitle}>Insights</p>
                    <div className={dd.colLinks}>
                      {[
                        { label: "Library", href: "/library" },
                        { label: "Whitepapers", href: "/whitepapers" },
                        { label: "Blog", href: "#insights" },
                      ].map((l) => (
                        <a key={l.label} href={l.href} className={dd.colLink}>{l.label}</a>
                      ))}
                    </div>
                    <a href="/library" className={dd.allLink}>All Articles</a>
                  </div>
                  <div className={dd.articleCard}>
                    <p className={dd.articleTitle}>
                      From Pilot to Production: Why Enterprise AI Stalls — and the Framework to Scale It (2026)
                    </p>
                    <div className={dd.articleMeta}>
                      <span>31 mins</span>
                      <span>·</span>
                      <span>June 16</span>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </nav>

          <div className={styles.right}>
            <button
              className={`btn btn-accent ${styles.contactButton}`}
              onClick={() => setModalOpen(true)}
              aria-label="Get in touch"
            >
              <span className={styles.contactButtonText}>Get in touch</span>
              <svg className={styles.contactButtonIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 5h20v14H2z" />
                <path d="m2.8 6 9.2 7.2L21.2 6" />
              </svg>
              <span className={`${styles.contactRipple} ${styles.rippleOne}`} aria-hidden="true" />
              <span className={`${styles.contactRipple} ${styles.rippleTwo}`} aria-hidden="true" />
              <span className={`${styles.contactRipple} ${styles.rippleThree}`} aria-hidden="true" />
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

      {/* ── Backdrop ── */}
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      {/* ── Slide-in panel ── */}
      <aside
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        aria-label="Menu"
        aria-hidden={!open}
      >


        <div className={styles.panelContact}>
          <span className={styles.panelHeading}>Get in touch</span>
          <ul className={styles.contactList}>
            {CONTACTS.map((c) => (
              <li key={c.label}>
                <a href={c.href}>{c.label}</a>
              </li>
            ))}
          </ul>
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
          <span className={styles.panelHeading}>Follow our social</span>
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
      </aside>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
