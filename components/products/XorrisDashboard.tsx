"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Count from "./Count";
import XorrisGlobe, { GLOBE_COUNTRIES } from "./XorrisGlobe";
import styles from "./XorrisDashboard.module.css";

const REPLAY_MS = 11000;

const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);

const PHONE = "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z";

// Sep 1 – Sep 21, same shape as the real dashboard sample
const DAYS = [7, 5, 0, 0, 2, 1, 0, 7, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2];
const Y_TICKS = [8, 6, 4, 2, 0];
const Y_MAX = 8;
const LAST = DAYS.length - 1;

const TOP_COUNTRIES = [...GLOBE_COUNTRIES].sort((a, b) => b.count - a.count).slice(0, 5);
const TOTAL_NUMBERS = GLOBE_COUNTRIES.reduce((s, c) => s + c.count, 0);
const NUMBER_KPIS = [
  { label: "Total Bought", value: TOTAL_NUMBERS, sub: "Purchased numbers", icon: <Icon><path d={PHONE} /></Icon> },
  {
    label: "Active Numbers",
    value: 52,
    sub: "Currently live",
    icon: (
      <Icon>
        <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.4" />
      </Icon>
    ),
  },
  {
    label: "Inactive Numbers",
    value: 7,
    sub: "Released / paused",
    icon: (
      <Icon>
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </Icon>
    ),
  },
];

export default function XorrisDashboard() {
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
      <div className={styles.screen}>
        {/* Row 1 — Call activity */}
        <div key={`chart-${cycle}`} className={styles.panel}>
          <div className={styles.chartHead}>
            <div className={styles.chartTitle}>Call Activity</div>
            <div className={styles.chartTools}>
              <span className={styles.legend}>
                <span className={styles.legendBar} />
                Total Calls
              </span>
              <span className={styles.range}>
                Sep 1, 2026 - Sep 21, 2026
                <svg viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>

          <div className={styles.chart}>
            <div className={styles.yAxis}>
              {Y_TICKS.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className={styles.plot}>
              <div className={styles.grid}>
                {Y_TICKS.map((t) => (
                  <span key={t} />
                ))}
              </div>
              <div className={styles.cols}>
                {DAYS.map((v, i) => (
                  <div key={i} className={styles.col}>
                    <div className={styles.track}>
                      {v > 0 && (
                        <span
                          className={`${styles.bar} ${i === LAST ? styles.barActive : ""}`}
                          style={{ height: `${(v / Y_MAX) * 100}%`, animationDelay: `${0.3 + i * 0.05}s` }}
                        >
                          <span className={styles.dot} />
                          {i === LAST && <span className={styles.stem} />}
                        </span>
                      )}
                    </div>
                    <span className={`${styles.xLabel} ${i === LAST ? styles.xLabelActive : ""}`}>{i + 1} Sept</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 — Global phone numbers */}
        <div className={styles.panel}>
          <div className={styles.chartTitle}>Global Phone Numbers</div>
          <div className={styles.globeSub}>Where your Xorris numbers live</div>
          <div className={styles.globeGrid}>
            <div key={`nums-${cycle}`} className={styles.numbers}>
              <div className={styles.eyebrow}>Top Countries</div>
              <div className={styles.countries}>
                {TOP_COUNTRIES.map((c, i) => (
                  <div key={c.id}>
                    <div className={styles.countryRow}>
                      <span className={styles.countryName}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/products/xorris/flags/${c.id}.svg`} alt="" className={styles.rowFlag} />
                        {c.name}
                      </span>
                      <span className={styles.countryCount}>
                        <Count to={c.count} delay={300 + i * 100} duration={900} />
                      </span>
                    </div>
                    <div className={styles.barTrackH}>
                      <span
                        className={styles.barFill}
                        style={{ width: `${(c.count / TOTAL_NUMBERS) * 100}%`, animationDelay: `${0.3 + i * 0.1}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.miniKpis}>
                {NUMBER_KPIS.map((k, i) => (
                  <div
                    key={k.label}
                    className={`${styles.kpi} ${styles.miniKpi}`}
                    style={{ animationDelay: `${0.6 + i * 0.08}s` }}
                  >
                    <div className={styles.kpiHead}>
                      <span className={styles.kpiLabel}>{k.label}</span>
                    </div>
                    <div className={styles.kpiValue}>
                      <Count to={k.value} delay={700 + i * 100} />
                    </div>
                    <div className={styles.kpiSub}>{k.sub}</div>
                    <span className={styles.kpiIcon}>{k.icon}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.globeBox}>
              <XorrisGlobe />
              <Image src="/products/xorris/chatbot.png" alt="" width={168} height={112} className={styles.bot} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
