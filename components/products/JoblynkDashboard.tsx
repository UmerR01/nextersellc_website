"use client";

import { useId } from "react";
import Count from "./Count";
import { useReplay } from "./useReplay";
import styles from "./JoblynkDashboard.module.css";

// Recreated from the real, populated Joblynk recruiter dashboard (Naxiora:
// src/app/(main)/dashboardRecruiter.tsx + dashboardRecruiter/components/*):
// banner, 4 KPI cards, Reschedule Requests table next to the RTR Response
// gauge, and the Jobs Over Time line chart next to Monthly Activity. Copy,
// gradients and lucide icon paths are the real ones.
const KPIS = [
  { label: "Total Active Jobs", value: 8, delta: "100%", icon: "briefcase" },
  { label: "Total Applicants", value: 40, delta: "100%", icon: "users" },
  { label: "Interviewed", value: 20, delta: "100%", icon: "userCheck" },
  { label: "Total Requests", value: 4, delta: "0%", icon: "fileText" },
] as const;

const ICONS: Record<string, React.ReactNode> = {
  briefcase: (
    <>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <path d="M16 3.128a4 4 0 0 1 0 7.744" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <circle cx="9" cy="7" r="4" />
    </>
  ),
  userCheck: (
    <>
      <path d="m16 11 2 2 4-4" />
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </>
  ),
  fileText: (
    <>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </>
  ),
};

const REQUESTS = [
  { name: "Owen Davis", email: "seed.candidate10@jobly...", title: "Customer Success Manager", salary: "$105,000 – $130,000" },
  { name: "Mia Ali", email: "seed.candidate7@joblynk...", title: "Technical Recruiter", salary: "$95,000 – $120,000" },
  { name: "Ava Khan", email: "seed.candidate1@joblynk...", title: "Sales Development Rep", salary: "$100,000 – $125,000" },
  { name: "Emma Garcia", email: "seed.candidate4@joblyn...", title: "Senior Backend Engineer", salary: "$70,000 – $95,000" },
];

// Jobs Over Time: 29 daily points (27 Aug to 24 Sept), flat at 0 with a short
// hump around 10 Sept and a rise to 1 that holds until today.
const DAYS = 28;
const BASE_Y = 92;
const yFor = (v: number) => BASE_Y - (v / 8) * 84;
const xFor = (i: number) => (i / DAYS) * 300;
const JOB_POINTS: [number, number][] = [
  [0, 0],
  [13.2, 0],
  [14.1, 1],
  [15.2, 1],
  [16.1, 0],
  [23.2, 0],
  [24.1, 1],
  [28, 1],
].map(([i, v]) => [xFor(i), yFor(v)] as [number, number]);
const JOB_DOTS = [
  [7, 0],
  [17, 0],
  [26, 1],
];
const JOB_LABELS = ["27 Aug", "02 Sept", "08 Sept", "14 Sept", "20 Sept", "24 Sept"];
const GRID = [0, 2, 4, 6, 8];

// Horizontal-tangent cubic segments: rounded steps with flat plateaus and no
// overshoot, like the real chart's monotone line.
function smoothPath(points: [number, number][]) {
  let d = `M ${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];
    const mx = (x1 + x2) / 2;
    d += ` C ${mx},${y1} ${mx},${y2} ${x2},${y2}`;
  }
  return d;
}
const JOB_PATH_D = smoothPath(JOB_POINTS);

const BAR_DAYS = 29;
const ACT_LABELS = ["27 Aug", "02 Sept", "08 Sept", "14 Sept", "20 Sept", "24 Sept"];
const ACT_TICKS = [30, 25, 20, 15, 10, 5, 1];

const Lucide = ({ name, className }: { name: string; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {ICONS[name]}
  </svg>
);

export default function JoblynkDashboard() {
  const { ref, cycle } = useReplay<HTMLDivElement>();
  const uid = useId();
  const pathId = `jobs-path-${uid}`;
  const hx = xFor(28);
  const hy = yFor(1);

  return (
    <div ref={ref} className={styles.root} aria-hidden>
      <div key={cycle} className={styles.screen}>
        {/* Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerGlow} />
          <svg className={styles.wave1} viewBox="0 0 720 60" preserveAspectRatio="none">
            <path d="M0,30 C90,50 180,10 270,30 C360,50 450,10 540,30 C630,50 690,20 720,30 L720,60 L0,60 Z" fill="#1A6FD4" opacity="0.4" />
          </svg>
          <svg className={styles.wave2} viewBox="0 0 720 60" preserveAspectRatio="none">
            <path d="M0,38 C120,10 240,50 360,30 C480,10 600,50 720,32 L720,60 L0,60 Z" fill="#ffffff" opacity="0.16" />
          </svg>
          <div className={styles.bannerText}>
            <h4 className={styles.bannerTitle}>Boost Your Hiring Efficiency</h4>
            <p className={styles.bannerSub}>Use AI insights to reduce hiring time and improve candidate quality across all roles.</p>
          </div>
          <span className={styles.newJobBtn}>
            New Job
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </div>

        {/* KPIs */}
        <div className={styles.kpis}>
          {KPIS.map((k, i) => (
            <div key={k.label} className={styles.kpi} style={{ animationDelay: `${i * 0.08}s` }}>
              <span className={styles.kpiIcon}>
                <Lucide name={k.icon} />
              </span>
              <span className={styles.kpiBody}>
                <span className={styles.kpiLabel}>{k.label}</span>
                <span className={styles.kpiRow}>
                  <span className={styles.kpiValue}>
                    <Count to={k.value} delay={i * 100} duration={800} />
                  </span>
                  <span className={`${styles.kpiDelta} ${k.delta === "0%" ? styles.kpiDeltaFlat : ""}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m7 17 10-10M9 7h8v8" />
                    </svg>
                    {k.delta}
                  </span>
                </span>
                <span className={styles.kpiSub}>Up from last month</span>
              </span>
            </div>
          ))}
        </div>

        {/* Reschedule requests + RTR */}
        <div className={styles.midRow}>
          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <span className={styles.panelTitle}>Reschedule Requests</span>
              <span className={styles.viewAll}>View All Requests &rsaquo;</span>
            </div>
            <div className={styles.table}>
              <div className={`${styles.tr} ${styles.th}`}>
                <span>Candidate</span>
                <span>Job Title</span>
                <span>Salary</span>
                <span>Location</span>
                <span className={styles.actionCol}>Action</span>
              </div>
              {REQUESTS.map((r, i) => (
                <div key={r.name} className={`${styles.tr} ${styles.row}`} style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <span className={styles.cand}>
                    <i className={styles.check}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </i>
                    <span>
                      <b>{r.name}</b>
                      <em>{r.email}</em>
                    </span>
                  </span>
                  <b className={styles.jobTitle}>{r.title}</b>
                  <span className={styles.salary}>{r.salary}</span>
                  <span className={styles.loc}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Austin, TX
                  </span>
                  <span className={styles.actions}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.chat}>
                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.4" strokeLinecap="round" className={styles.reject}>
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                    <span className={styles.approve}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Approve
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rtr}>
            <span className={styles.rtrTitle}>RTR Response</span>
            <span className={styles.rtrSub}>Tracks RTR confirmations in progress.</span>
            <div className={styles.gauge}>
              <svg viewBox="0 0 160 160" className={styles.gaugeSvg}>
                <circle cx="80" cy="80" r="80" fill="#fff" />
                <circle cx="80" cy="80" r="56" fill="none" stroke="#EBF5FF" strokeWidth="8" />
                <circle cx="80" cy="80" r="56" fill="none" stroke="#0085FF" strokeWidth="8" strokeLinecap="round" className={styles.gaugeArc} transform="rotate(-90 80 80)" />
              </svg>
              <span className={styles.gaugeText}>
                <b>
                  <Count to={50} delay={200} duration={1000} />%
                </b>
                <i>Efficiency</i>
              </span>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className={styles.bottomRow}>
          <div className={styles.panel}>
            <div className={styles.chartHead}>
              <span className={styles.panelTitle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 7h6v6" />
                  <path d="m22 7-8.5 8.5-5-5L2 17" />
                </svg>
                Jobs Over Time
              </span>
              <span className={styles.chartSub}>Job posts created in the last 30 days.</span>
            </div>
            <div className={styles.chartBox}>
              <div className={styles.plot}>
                {GRID.map((g) => (
                  <span key={g} className={styles.yLabel} style={{ top: `${(yFor(g) / 100) * 100}%` }}>
                    {g}
                  </span>
                ))}
                <svg viewBox="0 0 300 100" preserveAspectRatio="none" className={styles.lineSvg}>
                  {GRID.map((g) => (
                    <line key={g} x1="0" x2="300" y1={yFor(g)} y2={yFor(g)} className={styles.gridLine} />
                  ))}
                  <path id={pathId} d={JOB_PATH_D} className={styles.linePath} fill="none" stroke="#0061a6" strokeWidth="1.6" strokeLinecap="round" />
                  {JOB_DOTS.map(([i, v]) => (
                    <circle key={i} cx={xFor(i)} cy={yFor(v)} r="2" fill="#0061a6" stroke="#fff" strokeWidth="0.8" />
                  ))}
                  <circle cx={hx} cy={hy} r="2.4" className={styles.ping} />
                  <circle cx={hx} cy={hy} r="2.4" fill="#0061a6" stroke="#fff" strokeWidth="0.9" />
                  <circle r="1.6" fill="#5ea6df">
                    <animateMotion dur="5s" repeatCount="indefinite">
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                </svg>
                <span className={styles.tooltip} style={{ left: "100%", top: `${hy}%` }}>
                  Jobs: 1
                </span>
              </div>
              <div className={styles.xAxis}>
                {JOB_LABELS.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.chartHead}>
              <span className={styles.panelTitle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
                Monthly Activity
              </span>
              <span className={styles.chartSub}>Interviews &amp; RTR over the last 30 days</span>
              <span className={styles.legend}>
                <i style={{ background: "#08285c" }} />
                Interviews
                <i style={{ background: "#00a2ff" }} />
                RTR
              </span>
            </div>
            <div className={styles.chartBox}>
              <div className={styles.plot}>
                {ACT_TICKS.map((t) => (
                  <span key={t} className={styles.yLabel} style={{ top: `${8 + ((30 - t) / 29) * 84}%` }}>
                    {t}
                  </span>
                ))}
                <div className={styles.bars}>
                  {Array.from({ length: BAR_DAYS }).map((_, i) => (
                    <span key={i} className={styles.barPair} style={{ animationDelay: `${0.4 + i * 0.015}s` }}>
                      <i className={styles.barA} />
                      <i className={styles.barB} />
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.xAxis}>
                {ACT_LABELS.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
