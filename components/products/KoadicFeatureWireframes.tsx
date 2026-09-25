"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import KoadicFeatureCard from "./KoadicFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./KoadicFeatureWireframes.module.css";

// Six Koadic feature wireframes. Each runs one scripted timeline driven by
// a millisecond clock `t`, and replays while on screen. Every flow starts
// with a prompt typed letter by letter, an Enter press, then the design.

function useClock(totalMs: number) {
  const { ref, cycle } = useReplay<HTMLDivElement>(totalMs + 2500);
  const [t, setT] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setT(totalMs);
      return;
    }
    setT(0);
    const start = performance.now();
    let raf = 0;
    const tick = () => {
      const v = performance.now() - start;
      setT(Math.min(v, totalMs));
      if (v < totalMs) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cycle, totalMs]);
  return { ref, cycle, t };
}

const typed = (text: string, t: number, start: number, speed = 45) =>
  text.slice(0, Math.max(0, Math.min(text.length, Math.floor((t - start) / speed))));

const between = (t: number, a: number, b: number) => t >= a && t < b;

const Show = ({ when, children, className = "", style }: { when: boolean; children?: ReactNode; className?: string; style?: CSSProperties }) => (
  <div className={`${styles.show} ${when ? styles.shown : ""} ${className}`} style={style}>
    {children}
  </div>
);

/** Prompt bar: text types in, then an Enter press and a "Generating" state. */
function Prompt({ text, pressedAt, t, busyUntil }: { text: string; pressedAt: number; t: number; busyUntil: number }) {
  const pressed = between(t, pressedAt, pressedAt + 350);
  const busy = between(t, pressedAt, busyUntil);
  return (
    <div className={styles.prompt}>
      <span className={styles.ptext}>
        {text}
        <i className={styles.caret} />
      </span>
      <span className={`${styles.enter} ${pressed ? styles.enterOn : ""} ${busy ? styles.enterBusy : ""}`}>{busy ? "Generating..." : "Enter ↵"}</span>
    </div>
  );
}

const TONES = [
  ["#f472b6", "#7c2d5f"],
  ["#fbbf24", "#9a3412"],
  ["#60a5fa", "#1e3a8a"],
  ["#a78bfa", "#4c1d95"],
];

/** A small stylised poster with real headline text. */
function Poster({ tone, head, sub }: { tone: number; head: string; sub: string }) {
  return (
    <span className={styles.poster} style={{ background: `linear-gradient(160deg, ${TONES[tone][0]}, ${TONES[tone][1]})` }}>
      <i className={styles.posterShape} style={{ top: `${10 + tone * 4}%`, right: `${10 + (tone % 2) * 12}%` }} />
      <b>{head}</b>
      <em>{sub}</em>
    </span>
  );
}

/* 1. Poster and Social Media ──────────────────────────────────── */
const SIZES = ["Square", "Story", "Banner"] as const;

export function KoadicPosterWireframe() {
  const { ref, cycle, t } = useClock(9200);
  const prompt = typed("Summer sale poster, bold and playful", t, 300);
  const size = t >= 7600 ? 2 : t >= 5600 ? 1 : 0;
  const swapping = between(t, 5600, 6000) || between(t, 7600, 8000);
  const loading = between(t, 2450, 3300);
  return (
    <div ref={ref}>
      <KoadicFeatureCard key={cycle} title="Poster and Social Media" cta={<span className={styles.cta}>{t >= 3300 ? "4 options" : "Prompt"}</span>}>
        <Prompt text={prompt} pressedAt={2100} busyUntil={3300} t={t} />
        <div className={`${styles.postGrid} ${styles[`size${size}`]} ${swapping ? styles.swapping : ""}`}>
          {TONES.map((_, i) => (
            <div key={i} className={`${styles.variant} ${t >= 4300 && i === 1 ? styles.picked : ""}`}>
              {loading && <span className={styles.skeleton} style={{ animationDelay: `${i * 0.12}s` }} />}
              {t >= 3300 + i * 120 && (
                <Poster tone={i} head={["SUMMER SALE", "SUMMER SALE", "Big Summer Sale", "SALE"][i]} sub={["Up to 50% off", "This week only", "Save up to 50%", "Summer"][i]} />
              )}
            </div>
          ))}
        </div>
        <Show when={t >= 4300} className={styles.sizes}>
          {SIZES.map((s, i) => (
            <span key={s} className={`${styles.chip} ${size === i ? styles.chipOn : ""} ${(i === 1 && between(t, 5400, 5600)) || (i === 2 && between(t, 7400, 7600)) ? styles.chipPress : ""}`}>
              {s}
            </span>
          ))}
          <em>{size === 0 ? "1080 x 1080" : size === 1 ? "1080 x 1920" : "1920 x 1080"}</em>
        </Show>
      </KoadicFeatureCard>
    </div>
  );
}

/* 2. Cultural and Occasion Posts ──────────────────────────────── */
const OCCASIONS = [
  { name: "National Day", head: "Happy National Day", sub: "From all of us at Your Brand", bg: "linear-gradient(160deg, #1e3a8a, #0f172a)" },
  { name: "Festival", head: "Festival Greetings", sub: "Wishing you joy and light", bg: "linear-gradient(160deg, #be185d, #4c1d95)" },
  { name: "Anniversary", head: "10 Years Together", sub: "Thank you for being with us", bg: "linear-gradient(160deg, #b45309, #7c2d12)" },
];

export function KoadicCulturalWireframe() {
  const { ref, cycle, t } = useClock(9200);
  const prompt = typed("National Day greeting for our brand", t, 300);
  const idx = t >= 7200 ? 2 : t >= 5200 ? 1 : 0;
  const swapping = between(t, 5200, 5600) || between(t, 7200, 7600);
  return (
    <div ref={ref}>
      <KoadicFeatureCard key={cycle} title="Cultural and Occasion Posts" cta={<span className={styles.cta}>{t >= 3300 ? "Ready to share" : "Prompt"}</span>}>
        <Prompt text={prompt} pressedAt={2000} busyUntil={3300} t={t} />
        <div className={styles.split}>
          <div className={styles.occasions}>
            <span className={styles.label}>Occasion</span>
            {OCCASIONS.map((o, i) => (
              <Show key={o.name} when={t >= 3300} className={`${styles.occasion} ${i === idx ? styles.occasionOn : ""}`}>
                {o.name}
              </Show>
            ))}
            <Show when={t >= 3800} className={styles.brandRow}>
              <PhosphorIcon name="CheckCircle" />
              Brand colours and logo added
            </Show>
          </div>
          <div className={styles.stage}>
            {t >= 3300 ? (
              <span className={`${styles.occPoster} ${swapping ? styles.swapping : ""}`} style={{ background: OCCASIONS[idx].bg }}>
                <i />
                <i />
                <i />
                <em>{OCCASIONS[idx].head}</em>
                <span>{OCCASIONS[idx].sub}</span>
              </span>
            ) : between(t, 2000, 3300) ? (
              <span className={styles.skeletonBig} />
            ) : null}
          </div>
        </div>
      </KoadicFeatureCard>
    </div>
  );
}

/* 3. Landing Pages and Websites ───────────────────────────────── */
export function KoadicWebsiteWireframe() {
  const { ref, cycle, t } = useClock(9400);
  const prompt = t < 5000 ? typed("Design a landing page for a yoga studio", t, 300) : typed("Add a pricing page", t, 5300);
  const pricing = t >= 7300;
  return (
    <div ref={ref}>
      <KoadicFeatureCard key={cycle} title="Landing Pages and Websites" cta={<span className={styles.cta}>{t >= 6900 ? "Multipage site" : "Landing page"}</span>}>
        <Prompt text={prompt} pressedAt={t < 5000 ? 2200 : 6300} busyUntil={t < 5000 ? 2900 : 6900} t={t} />
        <div className={styles.browser}>
          <div className={styles.tabs}>
            <span className={!pricing ? styles.tabOn : ""}>Home</span>
            {t >= 6900 && <span className={`${styles.tabNew} ${pricing ? styles.tabOn : ""}`}>Pricing</span>}
          </div>
          <div className={styles.site}>
            {!pricing ? (
              <>
                <Show when={t >= 2900} className={styles.hero}>
                  <b>Find your calm</b>
                  <em>Yoga classes for every level, in the heart of the city.</em>
                  <span>Book a class</span>
                </Show>
                <Show when={t >= 3500} className={styles.cols}>
                  {["Beginner", "Flow", "Restore"].map((c) => (
                    <i key={c}>{c}</i>
                  ))}
                </Show>
                <Show when={t >= 4100} className={styles.cta2}>
                  <span>Join our first class free</span>
                </Show>
              </>
            ) : (
              <>
                <Show when={pricing} className={styles.priceHead}>
                  <b>Simple pricing</b>
                  <em>Pick the plan that fits your practice.</em>
                </Show>
                <div className={styles.pricing}>
                  {[
                    ["Basic", "$19", false],
                    ["Pro", "$49", true],
                    ["Studio", "$89", false],
                  ].map(([n, p, hot], i) => (
                    <Show key={String(n)} when={t >= 7500 + i * 150} className={`${styles.plan} ${hot ? styles.planHot : ""}`}>
                      <em>{n}</em>
                      <b>{p}</b>
                      <i />
                      <i style={{ width: "60%" }} />
                    </Show>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </KoadicFeatureCard>
    </div>
  );
}

/* 4. Product and UI Design ────────────────────────────────────── */
const NAV = ["Overview", "Projects", "Team", "Settings"];
const KPI = [
  ["Active projects", "24"],
  ["Tasks done", "312"],
  ["On track", "92%"],
];

export function KoadicProductWireframe() {
  const { ref, cycle, t } = useClock(8200);
  const prompt = typed("Design a project dashboard", t, 300);
  const hi = t >= 4700;
  const at = (ms: number) => t >= ms;
  return (
    <div ref={ref}>
      <KoadicFeatureCard key={cycle} title="Product and UI Design" cta={<span className={styles.seg}><span className={!hi ? styles.segOn : ""}>Wireframe</span><span className={hi ? styles.segOn : ""}>UI design</span></span>}>
        <Prompt text={prompt} pressedAt={1750} busyUntil={2400} t={t} />
        <div className={`${styles.app} ${hi ? styles.hi : ""}`}>
          <div className={`${styles.side} ${styles.blk} ${at(2500) ? styles.blkOn : ""}`}>
            <span className={styles.logoBox} />
            {NAV.map((n, i) => (
              <span key={n} className={`${styles.navItem} ${i === 0 ? styles.navActive : ""}`}>
                <i />
                <em>{n}</em>
              </span>
            ))}
          </div>
          <div className={styles.main}>
            <div className={`${styles.top} ${styles.blk} ${at(2800) ? styles.blkOn : ""}`}>
              <b>Overview</b>
              <span className={styles.newBtn}>New project</span>
            </div>
            <div className={styles.kpis}>
              {KPI.map(([l, v], i) => (
                <div key={l} className={`${styles.kpi} ${styles.blk} ${at(3100 + i * 250) ? styles.blkOn : ""}`}>
                  <em>{l}</em>
                  <b>{v}</b>
                </div>
              ))}
            </div>
            <div className={styles.lower}>
              <div className={`${styles.chartCard} ${styles.blk} ${at(3900) ? styles.blkOn : ""}`}>
                <em>Progress this month</em>
                <svg viewBox="0 0 120 50" preserveAspectRatio="none">
                  <path d="M0,40 C15,34 25,42 40,28 C55,14 70,30 85,18 C100,8 110,14 120,6" className={hi ? styles.lineDraw : styles.lineHidden} fill="none" stroke="#eaa6d6" strokeWidth="2" />
                  {[6, 18, 30, 42, 54, 66, 78, 90, 102].map((x, i) => (
                    <rect key={x} x={x} y={50 - (8 + ((i * 7) % 18))} width="6" height={8 + ((i * 7) % 18)} rx="1.5" className={styles.bar} />
                  ))}
                </svg>
              </div>
              <div className={`${styles.listCard} ${styles.blk} ${at(4200) ? styles.blkOn : ""}`}>
                <em>Recent</em>
                {["Website redesign", "Mobile app", "Brand kit"].map((r, i) => (
                  <span key={r} className={styles.li}>
                    <i style={{ "--dot": TONES[i][0] } as CSSProperties} />
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </KoadicFeatureCard>
    </div>
  );
}

/* 5. Logo and Brand Design ────────────────────────────────────── */
const BRAND = [
  ["#eaa6d6", "#c0468a"],
  ["#60a5fa", "#1e3a8a"],
  ["#4ade80", "#166534"],
  ["#fbbf24", "#b45309"],
  ["#a78bfa", "#5b21b6"],
];

export function KoadicLogoWireframe() {
  const { ref, cycle, t } = useClock(9800);
  const prompt = typed("Aurora Coffee: make a logo in a modern gradient style", t, 300);
  const pick = t >= 8000 ? 4 : t >= 6600 ? 3 : t >= 5200 ? 1 : 0;
  const [c1, c2] = BRAND[pick];
  return (
    <div ref={ref}>
      <KoadicFeatureCard key={cycle} title="Logo and Brand Design" cta={<span className={styles.cta}>{t >= 3800 ? "Logo ready" : "Prompt"}</span>}>
        <Prompt text={prompt} pressedAt={2800} busyUntil={3800} t={t} />
        <div className={styles.logoStage}>
          {t >= 2800 && t < 3800 ? (
            <span className={styles.skeletonBig} />
          ) : t >= 3800 ? (
            <div className={styles.logoLockup} style={{ "--c1": c1, "--c2": c2 } as CSSProperties}>
              <span className={styles.mark}>
                <svg viewBox="0 0 48 48">
                  <circle cx="24" cy="26" r="9" fill="#fff" />
                  <path d="M8 34h32" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                  <path d="M14 40h20" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                  <path d="M24 8v5M11 15l3.5 3.5M37 15l-3.5 3.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </span>
              <span className={styles.wordmark}>
                <b>Aurora</b>
                <em>Coffee</em>
              </span>
            </div>
          ) : null}
        </div>
        <Show when={t >= 4400} className={styles.paletteRow}>
          <span className={styles.label}>Brand colour</span>
          {BRAND.map(([a, b], i) => (
            <i key={a} className={`${styles.swatch} ${i === pick ? styles.swatchOn : ""} ${(i === 1 && between(t, 5000, 5200)) || (i === 3 && between(t, 6400, 6600)) || (i === 4 && between(t, 7800, 8000)) ? styles.chipPress : ""}`} style={{ background: `linear-gradient(135deg, ${a}, ${b})` }} />
          ))}
        </Show>
      </KoadicFeatureCard>
    </div>
  );
}

/* 6. Design Editing ───────────────────────────────────────────── */
export function KoadicEditingWireframe() {
  const { ref, cycle, t } = useClock(8000);
  const prompt = t < 3400 ? typed("Make the headline bigger", t, 300) : typed("Change the headline to Winter Sale", t, 3700);
  const big = t >= 1900;
  const winter = t >= 5800;
  const selected = t >= 1550;
  return (
    <div ref={ref}>
      <KoadicFeatureCard key={cycle} title="Design Editing" cta={<span className={styles.cta}>{winter ? "Text changed" : big ? "Size updated" : "Select an element"}</span>}>
        <div className={styles.canvasWrap}>
          <div className={styles.canvas}>
            <span key={winter ? "w" : "s"} className={`${styles.headline} ${selected ? styles.selected : ""} ${big ? styles.headlineBig : ""} ${winter ? styles.flash : ""}`}>
              {winter ? "Winter Sale" : "Summer Sale"}
            </span>
            <span className={styles.sub}>Up to 50% off this week</span>
            <span className={styles.cbtn}>Shop now</span>
          </div>
          <Show when={t >= 6300} className={styles.untouched}>
            <PhosphorIcon name="CheckCircle" />
            Only the headline changed. Everything else is untouched.
          </Show>
        </div>
        <Prompt text={prompt} pressedAt={t < 3400 ? 1550 : 5400} busyUntil={t < 3400 ? 1900 : 5800} t={t} />
      </KoadicFeatureCard>
    </div>
  );
}
