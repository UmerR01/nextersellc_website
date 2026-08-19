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
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/services#svc-industries" },
  { label: "Applied AI", href: "/adlc" },
  { label: "Insights", href: "/library" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact-us" },
];
const CONTACTS = [
  { label: "USA: +1 (321) 491-2236", href: "tel:+13214912236" },
  { label: "UAE: +971 58 512 2084", href: "tel:+971585122084" },
  { label: "info@nexterse.com", href: "mailto:info@nexterse.com" },
  { label: "support@nexterse.com", href: "mailto:support@nexterse.com" },
];

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/nextersepakistan/", src: "/side/instagram-svgrepo-com.svg", size: 18 },
  { label: "Facebook", href: "https://www.facebook.com/nexterse/", src: "/side/facebook-svgrepo-com.svg", size: 17.5 },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nexterse/", src: "/side/linkedin-svgrepo-com.svg", size: 13.5 },
  { label: "X", href: "https://x.com/nexterseinfo", src: "/side/icons8-x.svg", size: 15.5 },
];

type MobileNavColumn = {
  title?: string;
  links: { label: string; href: string }[];
};

type MobileNavItem = {
  label: string;
  href?: string;
  columns?: MobileNavColumn[];
  allLink?: { label: string; href: string };
};

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  {
    label: "Applied AI",
    columns: [
      {
        title: "Strategy",
        links: [
          { label: "AI Consulting", href: "/ai-consulting" },
          { label: "AI Readiness Assessment", href: "/ai-readiness-assessment" },
          { label: "AI PoC Development", href: "/services/ai-poc-development" },
        ],
      },
      {
        title: "Development",
        links: [
          { label: "AI Software Development", href: "/services/ai-software-development" },
          { label: "AI Agents Development", href: "/services/ai-agents-development" },
          { label: "RAG Development", href: "/services/rag-development" },
          { label: "LLM Development", href: "/services/llm-development" },
          { label: "GenAI Development", href: "/services/genai-development" },
          { label: "OpenAI Development", href: "/services/openai-development" },
        ],
      },
      {
        title: "Operations",
        links: [
          { label: "AI Integration", href: "/services/ai-integration" },
          { label: "GenAI Integration", href: "/services/genai-integration" },
          { label: "Big Data Development", href: "/services/big-data-development" },
          { label: "ML Development", href: "/services/ml-development" },
        ],
      },
    ],
    allLink: { label: "Applied AI overview", href: "/adlc" },
  },
  {
    label: "Services",
    columns: [
      {
        title: "Key Services",
        links: [
          { label: "Custom Software Development", href: "/services/custom-software-development" },
          { label: "Enterprise Software Development", href: "/services/enterprise-software-development" },
          { label: "Cloud Development", href: "/services/cloud-development" },
          { label: "Predictive Maintenance", href: "/services/predictive-maintenance" },
          { label: "Mobile App Development", href: "/services/mobile-app-development" },
          { label: "Web App Development", href: "/services/web-app-development" },
          { label: "CRM Development", href: "/services/crm-development" },
          { label: "MVP Development", href: "/process/mvp" },
        ],
      },
      {
        title: "Industry Solutions",
        links: [
          { label: "Healthcare", href: "/services/healthcare-development" },
          { label: "Logistics", href: "/services/logistics-development" },
          { label: "Retail & E-Commerce", href: "/services/retail-ecommerce-development" },
          { label: "EdTech", href: "/services/edtech-development" },
          { label: "InsurTech", href: "/services/insurtech-development" },
          { label: "AdTech", href: "/services/adtech-development" },
          { label: "FinTech", href: "/services/financial-development" },
          { label: "PropTech", href: "/services/proptech-development" },
        ],
      },
    ],
    allLink: { label: "All Services", href: "/services" },
  },
  {
    label: "Process",
    columns: [
      {
        links: [
          { label: "Project Onboarding & Delivery", href: "/process/onboard" },
          { label: "Expert Vetting Process", href: "/process/vetting" },
          { label: "Our Development Process", href: "/process/development" },
        ],
      },
    ],
    allLink: { label: "Our Process", href: "/process" },
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "About us",
    columns: [
      {
        links: [
          // { label: "Team", href: "/team#management-team" }, // "Team" dropdown link disabled per request
          { label: "FAQ", href: "/faq" },
          { label: "Testimonials", href: "/testimonials" },
          { label: "Engagement Models", href: "/engagement-models-process" },
          { label: "ADLC", href: "/adlc" },
          { label: "SDLC", href: "/sdlc" },
          { label: "Careers", href: "/careers" },
          { label: "Contact Us", href: "/contact-us" },
        ],
      },
    ],
    allLink: { label: "About us", href: "/about-us" },
  },
  {
    label: "Insights",
    columns: [
      {
        links: [
          { label: "Library", href: "/library" },
          { label: "Whitepapers", href: "/whitepapers" },
          { label: "Blog", href: "/blog" },
        ],
      },
    ],
    allLink: { label: "All Articles", href: "/library" },
  },
];

export default function Header({ forceSolid = false, startTransparent = false }: { forceSolid?: boolean; startTransparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState<string | null>(null);
  const [solid, setSolid] = useState(forceSolid && !startTransparent);
  const [modalOpen, setModalOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const solidRef = useRef(forceSolid && !startTransparent);

  useEffect(() => {
    if (forceSolid && !startTransparent) return;
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
      // Sub-pages (no home hero layout): transparent over hero, solid once scrolled past
      if (!aboutEl) {
        const threshold = startTransparent ? window.innerHeight * 0.6 : 10;
        const past = window.scrollY > threshold;
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
  }, [forceSolid, startTransparent]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) setMobileNavOpen(null);
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const openContactModal = () => {
      setModalOpen(true);
      if (window.location.hash === "#get-modal-popup") {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const trigger = target?.closest?.('a[href="#get-modal-popup"]');
      if (!trigger) return;
      event.preventDefault();
      openContactModal();
    };

    const onHashChange = () => {
      if (window.location.hash === "#get-modal-popup") openContactModal();
    };

    document.addEventListener("click", onDocumentClick);
    window.addEventListener("hashchange", onHashChange);
    onHashChange();

    return () => {
      document.removeEventListener("click", onDocumentClick);
      window.removeEventListener("hashchange", onHashChange);
    };
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
                <a href="/adlc" className={dd.link}>
                  Applied AI <Chevron className={dd.chevron} />
                </a>
                <div className={`${dd.panel} ${dd.panelAppliedAI} ${dd.cols3}`}>
                  {[
                    {
                      title: "Strategy",
                      links: [
                        { label: "AI Consulting",           href: "/ai-consulting" },
                        { label: "AI Readiness Assessment", href: "/ai-readiness-assessment" },
                        { label: "AI PoC Development",      href: "/services/ai-poc-development" },
                      ],
                    },
                    {
                      title: "Development",
                      links: [
                        { label: "AI Software Development", href: "/services/ai-software-development" },
                        { label: "AI Agents Development",   href: "/services/ai-agents-development" },
                        { label: "RAG Development",         href: "/services/rag-development" },
                        { label: "LLM Development",         href: "/services/llm-development" },
                        { label: "GenAI Development",       href: "/services/genai-development" },
                        { label: "OpenAI Development",      href: "/services/openai-development" },                      ],
                    },
                    {
                      title: "Operations",
                      links: [
                        { label: "AI Integration",          href: "/services/ai-integration" },
                        { label: "GenAI Integration",       href: "/services/genai-integration" },
                        { label: "Big Data Development",    href: "/services/big-data-development" },
                        { label: "ML Development",          href: "/services/ml-development" },                      ],
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
                <a href="/services" className={dd.link}>
                  Services <Chevron className={dd.chevron} />
                </a>
                <div className={`${dd.panel} ${dd.panelServices} ${dd.cols3}`}>
                  <div className={dd.col}>
                    <p className={dd.colTitle}>Key Services</p>
                    <div className={dd.colLinks}>
                      {[
                        { label: "Custom Software Development", href: "/services/custom-software-development" },
                        { label: "Enterprise Software Development", href: "/services/enterprise-software-development" },
                        { label: "Cloud Development", href: "/services/cloud-development" },
                        { label: "Predictive Maintenance", href: "/services/predictive-maintenance" },
                      ].map((l) => (
                        <a key={l.label} href={l.href} className={dd.colLink}>{l.label}</a>
                      ))}
                    </div>
                    <a href="/services" className={dd.allLink}>All Services</a>
                  </div>
                  <div className={dd.col}>
                    <p className={`${dd.colTitle} ${dd.colTitleSpacer}`} aria-hidden="true">Services</p>
                    <div className={dd.colLinks}>
                      {[
                        { label: "Mobile App Development", href: "/services/mobile-app-development" },
                        { label: "Web App Development", href: "/services/web-app-development" },
                        { label: "CRM Development", href: "/services/crm-development" },
                        { label: "MVP Development", href: "/process/mvp" },
                      ].map((l) => <a key={l.label} href={l.href} className={dd.colLink}>{l.label}</a>)}
                    </div>
                  </div>
                  <div className={dd.col}>
                    <p className={dd.colTitle}>Industry Solutions</p>
                    <div className={dd.colLinks}>
                      {[
                        { label: "Healthcare", href: "/services/healthcare-development" },
                        { label: "Logistics", href: "/services/logistics-development" },
                        { label: "Retail & E-Commerce", href: "/services/retail-ecommerce-development" },
                        { label: "EdTech", href: "/services/edtech-development" },
                        { label: "InsurTech", href: "/services/insurtech-development" },
                        { label: "AdTech", href: "/services/adtech-development" },
                        { label: "FinTech", href: "/services/financial-development" },
                        { label: "PropTech", href: "/services/proptech-development" },
                      ].map((l) => <a key={l.label} href={l.href} className={dd.colLink}>{l.label}</a>)}
                    </div>
                  </div>
                </div>
              </li>

              {/* ── Process — Satva-style mega panel ── */}
              <li className={dd.item}>
                <a href="/process" className={dd.link}>
                  Process <Chevron className={dd.chevron} />
                </a>
                <div className={`${dd.panel} ${dd.panelProcess}`}>
                  {/* Left: tagline + CTA */}
                  <div className={dd.processLeft}>
                    <p className={dd.processTagline}>
                      Working collaboratively with clients to develop outstanding solutions
                    </p>
                    <a href="/process" className={dd.processCtaLink}>
                      Our Process</a>
                  </div>

                  {/* Right: 3 image cards using Next.js Image fill */}
                  <div className={dd.processCards}>
                    {[
                      {
                        label: "Project Onboarding & Delivery",
                        href: "/process/onboard",
                        src: "/cases/team.jpg",
                      },
                      {
                        label: "Expert Vetting Process",
                        href: "/process/vetting",
                        src: "/cases/woman.jpg",
                      },
                      {
                        label: "Our Development Process",
                        href: "/process/development",
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
                <a href="/pricing" className={dd.link}>Pricing</a>
              </li>

              {/* ── About us ── */}
              <li className={dd.item}>
                <a href="/about-us" className={dd.link}>
                  About us <Chevron className={dd.chevron} />
                </a>
                <div className={`${dd.panel} ${dd.panelAbout}`}>
                  <div className={dd.aboutLinks}>
                    <p className={dd.colTitle}>About Us</p>
                    <div className={dd.colLinks}>
                      {[
                        // { label: "Team", href: "/team#management-team" }, // "Team" dropdown link disabled per request
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
                    <a href="/about-us" className={dd.allLink}>About us</a>
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
                        { label: "Blog", href: "/blog" },
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
                      <span>11 mins</span>
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
        <div className={styles.panelTop}>
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

          <a
            href="https://portal.nexterse.com/login/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.portalLink}
            aria-label="Open Nexterse portal"
          >
            <span className={styles.portalLogo} aria-hidden="true" />
          </a>
        </div>


        <nav className={styles.panelNav} aria-label="Menu links">
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

        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {MOBILE_NAV_ITEMS.map((item) => {
            const hasDropdown = Boolean(item.columns?.length);
            const isItemOpen = mobileNavOpen === item.label;
            const itemId = `mobile-nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

            if (!hasDropdown && item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${styles.mobileNavRow} ${styles.mobileNavLink}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <div
                key={item.label}
                className={`${styles.mobileNavItem} ${isItemOpen ? styles.mobileNavItemOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.mobileNavTrigger}
                  aria-expanded={isItemOpen}
                  aria-controls={itemId}
                  onClick={() => setMobileNavOpen(isItemOpen ? null : item.label)}
                >
                  <span>{item.label}</span>
                  <Chevron className={styles.mobileNavChevron} />
                </button>
                {isItemOpen && (
                  <div id={itemId} className={styles.mobileSubnav}>
                    {item.columns?.map((col, index) => (
                      <div key={`${item.label}-${col.title ?? index}`} className={styles.mobileSubCol}>
                        {col.title && <p className={styles.mobileSubTitle}>{col.title}</p>}
                        {col.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className={styles.mobileSubLink}
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ))}
                    {item.allLink && (
                      <a
                        href={item.allLink.href}
                        className={styles.mobileAllLink}
                        onClick={() => setOpen(false)}
                      >
                        {item.allLink.label}
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
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
                <span className={styles.socialIcon} style={{ "--icon-url": `url(${s.src})`, "--icon-size": `${s.size}px` } as React.CSSProperties} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </aside>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
