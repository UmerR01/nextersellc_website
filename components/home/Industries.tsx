"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import styles from "./Industries.module.css";

const INDUSTRIES = [
  { name: "Healthcare", href: "/services/healthcare-development", text: "Modernizing regulated healthcare and life-science systems with secure data platforms, automation, and zero-disruption delivery." },
  { name: "Logistics", href: "/services/logistics-development", text: "Developing data-driven systems that improve supply chain visibility, operational efficiency, and delivery performance." },
  { name: "EdTech", href: "/services/edtech-development", text: "Designing adaptive learning platforms, AI tutoring systems, and intelligent assessment tools that personalize education and improve measurable outcomes." },
  { name: "InsurTech", href: "/services/insurtech-development", text: "Building insurance platforms for policy workflows, claims automation, risk scoring, and customer self-service." },
  { name: "AdTech", href: "/services/adtech-development", text: "Engineering campaign, attribution, data activation, and AI-powered personalization systems for marketing operations." },
  { name: "FinTech", href: "/services/financial-development", text: "Creating secure financial platforms for payments, analytics, reporting, automation, and compliant customer experiences." },
  { name: "PropTech", href: "/services/proptech-development", text: "Building real estate systems for listings, property operations, tenant portals, analytics, and workflow automation." },
  { name: "Retail & E-Commerce", href: "/services/retail-ecommerce-development", text: "Powering commerce, fulfillment, and AI-driven personalization platforms that improve conversion, efficiency, and customer lifetime value at scale." },
];

export default function Industries() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkBounds = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    checkBounds();
    // Also re-check after fonts/images load
    window.addEventListener("resize", checkBounds);
    return () => window.removeEventListener("resize", checkBounds);
  }, [checkBounds]);

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    // Step = first card's rendered width + gap (1.5rem = 24px)
    const firstCard = el.querySelector("a");
    const gap = 24;
    const step = firstCard ? firstCard.offsetWidth + gap : 364;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className={styles.section} id="industries">
      {/* Header: image left, text right — full-width grid */}
      <div className={styles.head}>
        <div className={styles.heroImage}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/cases/si-digital.webp" alt="" className={styles.heroImg} />
        </div>
        <div className={styles.headerText}>
          <span className={styles.eyebrow}>Our Industries</span>
          <h2 className={styles.title}>Industries We Serve</h2>
          <p className={styles.sub}>
            We apply deep engineering expertise across industries to solve
            complex, domain-specific challenges.
          </p>
          <a href="/services#svc-industries" className={styles.exploreLink}>
            Explore All Industries <span className={styles.inlineArrow} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Horizontal card carousel */}
      <div
        className={styles.scroller}
        ref={scrollerRef}
        onScroll={checkBounds}
      >
        <div className={styles.track}>
          {INDUSTRIES.map((ind) => (
            <a key={ind.name} href={ind.href} className={styles.card}>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{ind.name}</h3>
                <p className={styles.cardDesc}>{ind.text}</p>
              </div>
              <span className={styles.cardArrow} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows — no border, plain icon */}
      <div className={styles.navRow}>
        <button
          className={styles.navBtn}
          onClick={() => scroll(-1)}
          disabled={atStart}
          aria-label="Scroll left"
        >
          <span className={`${styles.navArrow} ${styles.navArrowPrev}`} aria-hidden="true" />
        </button>
        <button
          className={styles.navBtn}
          onClick={() => scroll(1)}
          disabled={atEnd}
          aria-label="Scroll right"
        >
          <span className={`${styles.navArrow} ${styles.navArrowNext}`} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
