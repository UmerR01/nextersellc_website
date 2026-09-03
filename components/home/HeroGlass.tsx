"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./HeroGlass.module.css";

/**
 * Hero — "glass doors" rebuild, modeled on how satvasoftech.com actually builds
 * theirs (see /track for the write-up). Key differences from HeroLegacy:
 *   1. ONE <video> element, always visible — not a sharp copy hidden behind two
 *      extra blurred copies. The "blur" is backdrop-filter (frosted glass) on
 *      the two door panels, which optically blurs the single video sitting
 *      behind them — no second/third video to decode and paint.
 *   2. The scroll-driven open animation is GSAP ScrollTrigger (pin + scrub),
 *      not a manual scroll-listener computing a CSS custom property by hand.
 *   3. gsap.matchMedia() swaps the desktop (doors slide left/right) and mobile
 *      (doors slide up/down) timelines, instead of a hand-rolled isStacked
 *      branch recomputing progress with a magic 0.72 divisor.
 * This should noticeably cut decode/paint cost (1 video instead of 3) and
 * removes the counter-transform math the legacy version needed to keep two
 * duplicated video frames pixel-aligned with the real one across breakpoints.
 */
export default function HeroGlass() {
  useEffect(() => {
    // React Strict Mode (on in dev — see next.config.mjs) synchronously
    // mounts, cleans up, and re-mounts every effect once, as a diagnostic.
    // The cleanup for the FIRST of those two runs fires immediately, before
    // the dynamic imports below have had a chance to resolve — so `ctx` is
    // still null at that point, `ctx?.revert()` is a no-op, and nothing
    // was actually reverted. Without this flag, the FIRST invocation's
    // initGsap() would then go on to finish anyway (the import promises
    // still resolve after cleanup ran), creating a real ScrollTrigger +
    // pin-spacer for an instance nothing will ever revert — a leaked pin
    // sitting alongside the second, "real" instance's own pin, doubling
    // the reserved scroll space. Same failure mode on a genuine fast
    // navigation away from "/" before gsap has finished loading, Strict
    // Mode or not. `cancelled` makes the async setup check, right before
    // it does anything with side effects, whether ITS OWN effect instance
    // has already been cleaned up — and bails out instead of creating
    // anything if so.
    let cancelled = false;
    let ctx: { revert: () => void } | null = null;

    async function initGsap() {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // ── Desktop / tablet: doors slide apart horizontally ──────────────
        mm.add("(min-width: 768px)", () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              scrub: 0.2,
              trigger: "#top",
              start: "top top",
              end: "+=100%",
              pin: true,
              pinSpacing: "margin",
            },
          });
          tl.to("#hero-door-left", { xPercent: -100, ease: "none", duration: 1 }, 0)
            .to("#hero-door-right", { xPercent: 100, ease: "none", duration: 1 }, 0);
        });

        // ── Mobile: doors are stacked top/bottom (full-width, half-height),
        //    but still slide apart sideways, not up/down — the stacked
        //    position is a layout choice, the open direction isn't tied to it.
        mm.add("(max-width: 767px)", () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              scrub: 0.2,
              trigger: "#top",
              start: "top top",
              end: "+=70%",
              pin: true,
              pinSpacing: "margin",
            },
          });
          tl.to("#hero-door-left", { xPercent: -100, ease: "none", duration: 1 }, 0)
            .to("#hero-door-right", { xPercent: 100, ease: "none", duration: 1 }, 0);
        });
      });

      // ScrollTrigger only self-corrects a pin-spacer's height automatically
      // once, on the window "load" event — that's what makes a hard reload
      // always come out right. A client-side route change (Next.js <Link>
      // into "/") never fires "load" again, so whatever scroll position or
      // not-yet-settled layout existed the instant this effect ran gets
      // baked into the pin-spacer's height and stays wrong until something
      // else (a manual scroll, a window resize) happens to force GSAP to
      // recalculate. That stale spacer is the "whole hero section of white
      // space pasted above the hero" — the spacer, not the hero itself, is
      // oversized. Forcing a fresh measurement one frame after setup (once
      // the browser has actually painted the new route) fixes it on every
      // navigation, not just the first hard load.
      requestAnimationFrame(() => {
        if (!cancelled) ScrollTrigger.refresh();
      });
    }

    initGsap();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className={styles.section} id="top">
      <div className={styles.bg} aria-hidden>
        <video
          className={styles.bgVideo}
          src="/hero/nexterse_herov.webm"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.caption} id="hero-caption">
        <div className={styles.captionInner}>
          <span className={styles.kicker}>Nexterse LLC</span>
          <p>Custom software and AI systems engineered to outlast launch.</p>
        </div>
      </div>

      {/* backdropFilter is set inline, not in HeroGlass.module.css — Lightning
          CSS's autoprefixer (Next.js 16 Turbopack) rewrites the property into
          only the legacy -webkit- form, which current Chrome doesn't honor,
          so the blur silently never renders no matter the value (confirmed:
          vercel/next.js#78302). Inline styles bypass that CSS pipeline
          entirely, so this is the one property that has to live here. */}
      <div
        className={`${styles.door} ${styles.doorLeft}`}
        id="hero-door-left"
        style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
      >
        <div className={styles.doorContent}>
          <h1 className={styles.heading}>
            We build
            <br />
            software that drives
            <br />
            business
          </h1>
          <Card
            img="/hero/dev.png"
            title="Custom Software Development"
            desc="Applications engineered for performance, scalability, and reliability, built to solve real business problems."
            cta="Custom Software Development"
            href="/services/custom-software-development"
          />
        </div>
      </div>

      <div
        className={`${styles.door} ${styles.doorRight}`}
        id="hero-door-right"
        style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
      >
        <div className={styles.doorContent}>
          <h1 className={styles.heading}>
            We build
            <br />
            AI that transforms
            <br />
            business
          </h1>
          <Card
            img="/hero/ai.png"
            title="Custom AI Development"
            desc="Intelligent solutions powered by machine learning, generative AI, automation, and AI agents, designed to boost productivity and unlock innovation."
            cta="Custom AI Development"
            href="/services/ai-software-development"
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  img,
  title,
  desc,
  cta,
  href,
}: {
  img: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={img} alt="" width={341} height={223} priority />
      </div>
      <div className={styles.cardTitle}>{title}</div>
      <p className={styles.cardDesc}>{desc}</p>
      <a href={href} className="btn btn-outline">
        {cta}
      </a>
    </div>
  );
}
