"use client";

import { useEffect, useRef, useState } from "react";
import Count from "./Count";
import styles from "./SalesHubDashboard.module.css";

const REPLAY_MS = 11000;

const Search = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" />
    <path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Arrow = () => (
  <svg viewBox="0 0 10 10" width="1em" height="1em" fill="none" aria-hidden>
    <path d="M2 8 8 2M3.5 2H8v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const KPIS = [
  { label: "Companies", value: 3, delta: "0", icon: "building" },
  { label: "Products", value: 5, delta: "0", icon: "box" },
  { label: "Total quotes", value: 152, delta: "+1", icon: "doc" },
  { label: "Brokers", value: 9, delta: "0", icon: "hands" },
];

function KpiIcon({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 24 24" className={styles.kpiIcon} aria-hidden>
      {kind === "building" && (
        <>
          <rect x="4" y="2" width="16" height="20" rx="2" fill="#3b82f6" />
          <path d="M8 6h2M12 6h2M8 10h2M12 10h2M8 14h2M12 14h2" stroke="#dbeafe" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
      {kind === "box" && (
        <>
          <path d="M12 3 21 7.5v9L12 21 3 16.5v-9Z" fill="#3b82f6" />
          <path d="M12 12 3 7.5M12 12l9-4.5M12 12v9" stroke="#bfdbfe" strokeWidth="1.3" />
        </>
      )}
      {kind === "doc" && (
        <>
          <path d="M6 2h9l4 4v16H6Z" fill="#3b82f6" />
          <path d="M9 12h6M9 16h6" stroke="#dbeafe" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
      {kind === "hands" && (
        <>
          <path d="M2 10 8 6l5 3 3-2 6 4-4 5-4 1-3-2-3 1Z" fill="#60a5fa" />
          <path d="M7 14l3 3M10 12l3 3" stroke="#dbeafe" strokeWidth="1.4" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

const BARS = [
  { label: "FCP", value: 2448 },
  { label: "FCP - Orient", value: 1071 },
  { label: "Health Plus", value: 936 },
  { label: "MedGross", value: 2646 },
  { label: "Secure Care Plan", value: 936 },
];
const MAX = 3000;
const TICKS = [3000, 2500, 2000, 1500, 1000, 500, 0];

// One wavelength = 200 units; the svg is 3 wavelengths wide and slides one
// wavelength per loop, so the loop is seamless.
const WAVE_A = "M0 50 Q50 10 100 50 T200 50 T300 50 T400 50 T500 50 T600 50 V200 H0 Z";
const WAVE_B = "M0 70 Q50 100 100 70 T200 70 T300 70 T400 70 T500 70 T600 70 V200 H0 Z";
const WAVE_C = "M0 95 Q50 65 100 95 T200 95 T300 95 T400 95 T500 95 T600 95 V200 H0 Z";

/** Animated wireframe of the SalesHub dashboard. Replays every REPLAY_MS while on screen. */
export default function SalesHubDashboard() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [cycle, setCycle] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setCycle((c) => c + 1), REPLAY_MS);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <div ref={rootRef} className={styles.root} aria-hidden>
      {/* keyed so every entrance animation and count-up replays together */}
      <div key={cycle} className={styles.screen}>
        {/* Row 1 */}
        <div className={styles.topbar}>
          <div className={styles.search}>
            <span className={styles.searchIcon}>
              <Search />
            </span>
            <span className={styles.searchText}>Search companies, products, brokers, quotes…</span>
            <span className={styles.caret} />
          </div>
          <div className={styles.userArea}>
            <span className={styles.bell}>
              <svg viewBox="0 0 24 24" aria-hidden>
                <path d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6Zm-2 15a2 2 0 0 0 4 0Z" fill="#3b82f6" />
              </svg>
              <span className={styles.badge}>8</span>
            </span>
            <span className={styles.avatar}>U</span>
            <span className={styles.userText}>
              <span className={styles.userName}>User</span>
              <span className={styles.userMail}>user@gmail.com</span>
            </span>
          </div>
        </div>

        {/* Row 2 */}
        <div className={styles.kpis}>
          {KPIS.map((k, i) => (
            <div key={k.label} className={styles.kpi}>
              <div className={styles.kpiHead}>
                <KpiIcon kind={k.icon} />
                <span className={styles.kpiLabel}>{k.label}</span>
              </div>
              <div className={styles.kpiBody}>
                <span className={styles.kpiValue}>
                  <Count to={k.value} delay={i * 120} />
                </span>
                <span className={styles.delta}>
                  {k.delta}
                  <Arrow />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className={styles.lower}>
          <div className={styles.chartCard}>
            <div className={styles.cardTitle}>Product rate rows</div>
            <div className={styles.cardSub}>Hover a product to see affiliated companies.</div>
            <div className={styles.chart}>
              <div className={styles.yAxis}>
                {TICKS.map((t) => (
                  <span key={t}>{t.toLocaleString("en-US")}</span>
                ))}
              </div>
              <div className={styles.plot}>
                <div className={styles.grid}>
                  {TICKS.map((t) => (
                    <span key={t} />
                  ))}
                </div>
                <div className={styles.bars}>
                  {BARS.map((b, i) => (
                    <div key={b.label} className={styles.barCol}>
                      <div className={styles.barTrack}>
                        <span className={styles.barValue} style={{ bottom: `${(b.value / MAX) * 100}%`, animationDelay: `${0.9 + i * 0.11}s` }}>
                          <Count to={b.value} delay={300 + i * 110} duration={1100} />
                        </span>
                        <span
                          className={styles.bar}
                          style={{ height: `${(b.value / MAX) * 100}%`, animationDelay: `${0.3 + i * 0.11}s` }}
                        />
                      </div>
                      <span className={styles.barLabel}>{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.promo}>
            <div className={styles.waves}>
              <svg className={`${styles.wave} ${styles.waveA}`} viewBox="0 0 600 200" preserveAspectRatio="none">
                <path d={WAVE_A} fill="rgba(29, 91, 240, 0.55)" />
              </svg>
              <svg className={`${styles.wave} ${styles.waveB}`} viewBox="0 0 600 200" preserveAspectRatio="none">
                <path d={WAVE_B} fill="rgba(14, 110, 230, 0.7)" />
              </svg>
              <svg className={`${styles.wave} ${styles.waveC}`} viewBox="0 0 600 200" preserveAspectRatio="none">
                <path d={WAVE_C} fill="rgba(34, 227, 232, 0.9)" />
              </svg>
            </div>
            <div className={styles.promoContent}>
              <span className={styles.newPill}>NEW</span>
              <div className={styles.promoTitle}>We have added new easy quotes!</div>
              <div className={styles.promoText}>
                New templates and workflows designed to help you create quotes faster and improve your business.
              </div>
            </div>
            <span className={styles.promoBtn}>Family Quote</span>
          </div>
        </div>
      </div>
    </div>
  );
}
