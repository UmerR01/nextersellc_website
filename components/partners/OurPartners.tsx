"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./OurPartners.module.css";

/* ── Row 2: partner cards. Our partners are also our sister companies, so
   this list mirrors SisterCompanies.tsx (same five companies, same
   logos from public/partner/logos/trimmed/). ── */
export type PartnerCard = {
  brand: string;
  industry: string;
  copy: string;
  logo: string;
};

const PARTNERS: PartnerCard[] = [
  {
    brand: "Softwise Solutions",
    industry: "IT Staffing & Consulting",
    copy: "A US IT staffing and consulting firm with over 20 years of experience, placing talent through contract, contract to hire and direct hire roles. Its reach across IT and healthcare employers gives our clients fast access to vetted engineers, while Nexterse adds delivery capacity when a project needs a full team.",
    logo: "/partner/logos/trimmed/soft.png",
  },
  {
    brand: "Tech Trio",
    industry: "IT & Networking Solutions",
    copy: "An IT solutions company delivering networking and infrastructure services across the UAE and Germany. We work together on engagements that pair reliable networks with the software built on top of them, so clients get one accountable team from infrastructure through to application.",
    logo: "/partner/logos/trimmed/tech.png",
  },
  {
    brand: "OrionHub Marketing",
    industry: "Digital Marketing",
    copy: "A Dubai digital marketing agency covering website development, SEO and Google Ads, and creative design and branding. Together we take clients from a strong brand to a fast, high-converting website and a pipeline of qualified, measurable leads.",
    logo: "/partner/logos/trimmed/orion.png",
  },
  {
    brand: "Insure Bazar",
    industry: "UAE Insurance",
    copy: "A UAE insurance brokerage helping customers compare and buy cover for health, car, home, fire, business and travel. We support it with software delivery, so it can keep improving how customers find, compare and buy the right policy.",
    logo: "/partner/logos/trimmed/insure.png",
  },
  {
    brand: "Kodeconsole",
    industry: "Software Development",
    copy: "A software studio working on modern tech stacks, from Next.js and React web apps to React Native and Flutter mobile apps, AI integration, Zoho CRM, APIs, UI/UX design and DevOps. We partner on client builds that need current engineering depth and extra bandwidth.",
    logo: "/partner/logos/trimmed/kode.png",
  },
];

// How long the card-stack's own CSS transition runs (OurPartners.module.css
// .card's `transition: transform 0.5s ...`) — clicks are ignored while a
// transition is still in flight, see the note on `transitioning` below.
const TRANSITION_MS = 500;

export default function OurPartners() {
  const count = PARTNERS.length;
  const [active, setActive] = useState(0);
  const [exitDir, setExitDir] = useState<"left" | "right">("left");
  // Guards against clicking mid-animation: the stack transitions over
  // TRANSITION_MS, and what's visually "peeking" at a given spot during
  // that window is an interpolated in-between position, not any card's
  // real resting spot — clicking then can land on a card other than the
  // one the user visually saw, since visuals are still catching up to
  // state. Ignoring input until the transition settles keeps what's
  // clicked and what's shown in sync.
  const [transitioning, setTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    };
  }, []);

  const focus = (index: number) => {
    if (index === active || transitioning) return;
    // Clicking a card "ahead" of the current one (higher index — the
    // direction every card starts stacked in) sends the outgoing focused
    // card left to make room; clicking one "behind" (an index you've
    // already passed) sends it right instead. See OurPartners.module.css
    // for the stack-position math this pairs with.
    setExitDir(index > active ? "left" : "right");
    setActive(index);
    setTransitioning(true);
    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    transitionTimeout.current = setTimeout(() => setTransitioning(false), TRANSITION_MS);
  };

  const step = (delta: 1 | -1) => {
    focus((active + delta + count) % count);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (endX === undefined) return;
    const dx = touchStartX.current !== null ? endX - (touchStartX.current as number) : 0;
    if (Math.abs(dx) < 40) return;
    step(dx < 0 ? 1 : -1);
  };

  return (
    <section className={styles.section} id="our-partners">
      <div className="container">
        {/* Row 1 — heading left / description right, same flex-row
           settings as home/StatsBlock.tsx */}
        <div className={styles.statsRow}>
          <div className={styles.statsTitleCol}>
            <span className={styles.eyebrow}>Our Partners</span>
            <h2 className={styles.statsTitle}>Partnering with only the best</h2>
          </div>
          <div className={styles.statsCol}>
            <p className={styles.introText}>
              Our partners are also our sister companies. Together we cover IT staffing,
              networking and infrastructure, digital marketing, insurance technology, and modern
              software development. Each partnership is built on real delivery overlap, not just a
              logo on a page.
            </p>
          </div>
        </div>

        {/* Row 2 — the partner card stack */}
        <div
          className={styles.stack}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-roledescription="carousel"
          aria-label="Partner spotlight"
        >
          {PARTNERS.map((p, i) => {
            const rank = (i - active + count) % count;
            const isActive = rank === 0;
            return (
              <article
                key={p.brand}
                className={`${styles.card} ${isActive ? styles.cardActive : ""} ${
                  isActive && exitDir === "left" ? styles.enterFromRight : isActive && exitDir === "right" ? styles.enterFromLeft : ""
                } ${rank >= 2 ? styles.cardDeep : ""}`}
                style={{
                  // Non-active cards fan out behind/right of the focused
                  // one, each rank a little further back and dimmer.
                  ["--rank" as string]: rank,
                  zIndex: count - rank,
                }}
                onClick={() => focus(i)}
                role={isActive ? undefined : "button"}
                tabIndex={isActive ? -1 : 0}
                aria-current={isActive || undefined}
                onKeyDown={(e) => {
                  if (!isActive && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    focus(i);
                  }
                }}
              >
                {/* Only the active card's content actually renders visibly
                   — cards behind it show a plain card surface (background,
                   shadow, rounded corners) with no readable "reflection" of
                   their text bleeding through at reduced opacity. */}
                <div className={styles.cardContent}>
                  {/* Row 1 — logo + number */}
                  <div className={styles.cardHead}>
                    {/* No width/height attributes: those imply a 1:1
                       aspect-ratio hint in the UA stylesheet, which fights
                       the CSS height:auto sizing below whenever a logo's
                       real aspect ratio isn't square. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.logo} alt={p.brand} className={styles.cardLogo} loading="lazy" />
                    <span className={styles.cardNumber}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className={styles.cardDivider} aria-hidden />

                  {/* Row 2 — company name + industry */}
                  <div className={styles.cardSubheads}>
                    <span className={styles.cardSubLeft}>{p.brand}</span>
                    <span className={styles.cardSubRight}>{p.industry}</span>
                  </div>
                  <div className={styles.cardDivider} aria-hidden />

                  {/* Row 3 — copy, no link */}
                  <p className={styles.cardCopy}>{p.copy}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Dots — click target parity with the card stack, useful once
           keyboard/no-hover users reach this section */}
        <div className={styles.dots} role="tablist" aria-label="Select partner">
          {PARTNERS.map((p, i) => (
            <button
              key={p.brand}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={p.brand}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => focus(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
