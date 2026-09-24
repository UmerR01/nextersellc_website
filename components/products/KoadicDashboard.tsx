"use client";

import Count from "./Count";
import { useReplay } from "./useReplay";
import styles from "./KoadicDashboard.module.css";

// Recreated from the Koadic home dashboard: Overview header, three summary
// cards (Active projects, Library, Quick tip) and the Getting started panel
// with its three steps. Neutrals come from the app's dark theme tokens
// (#0a0a0a background, #fafafa text, #a1a1a1 muted, #262626 border) with
// the pink accent seen in the UI. The tree photo background is recreated as
// a pink glow with drifting particles. The top bar is left out.
const STEPS = [
  { n: "01", title: "Create a project", text: "Name it and we'll spin up a workspace you can open anytime.", icon: "folderPlus" },
  { n: "02", title: "Open the editor", text: "Files on the left, canvas in the middle, chat on the right.", icon: "layout" },
  { n: "03", title: "Brief & iterate", text: "Describe the outcome, then refine with prompts and exports.", icon: "sparkles" },
] as const;

const PARTICLES = [
  [12, 62, 5], [22, 70, 3], [34, 58, 4], [46, 66, 6], [58, 60, 3], [68, 72, 5], [78, 63, 4], [88, 68, 3], [30, 78, 3], [62, 80, 4],
];

const Svg = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const FOLDER = "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z";

const STEP_ICONS: Record<string, React.ReactNode> = {
  folderPlus: (
    <Svg>
      <path d={FOLDER} />
      <path d="M12 10v6" />
      <path d="M9 13h6" />
    </Svg>
  ),
  layout: (
    <Svg>
      <rect width="7" height="18" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </Svg>
  ),
  sparkles: (
    <Svg>
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
      <path d="M20 2v4" />
      <path d="M22 4h-4" />
      <circle cx="4" cy="20" r="2" />
    </Svg>
  ),
};

export default function KoadicDashboard() {
  const { ref, cycle } = useReplay<HTMLDivElement>();
  return (
    <div ref={ref} className={styles.root} aria-hidden>
      <div className={styles.glow} />
      <div className={styles.tree} />
      {PARTICLES.map(([x, y, s], i) => (
        <span key={i} className={styles.particle} style={{ left: `${x}%`, top: `${y}%`, width: s, height: s, animationDelay: `${i * 0.35}s` }} />
      ))}

      <div key={cycle} className={styles.screen}>
        <div className={`${styles.head} ${styles.rise}`}>
          <span className={styles.eyebrow}>Overview</span>
          <h4 className={styles.title}>Welcome back</h4>
          <p className={styles.lede}>
            This is your home base. See what&apos;s going on at a glance, then head to Projects to open folders or start something new.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.rise}`} style={{ animationDelay: "0.1s" }}>
            <span className={styles.mono}>Active projects</span>
            <b className={styles.big}>
              <Count to={10} duration={900} />
            </b>
            <span className={styles.cardText}>In this workspace.</span>
            <span className={styles.link}>
              Open Projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </div>
          <div className={`${styles.card} ${styles.rise}`} style={{ animationDelay: "0.2s" }}>
            <span className={styles.mono}>
              <Svg>
                <path d={FOLDER} />
              </Svg>
              Library
            </span>
            <span className={styles.cardText}>Every project opens as a folder workspace, like a design IDE with AI chat beside your canvas.</span>
            <span className={styles.btn}>Browse folders</span>
          </div>
          <div className={`${styles.card} ${styles.rise}`} style={{ animationDelay: "0.3s" }}>
            <span className={styles.mono}>
              <Svg>
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </Svg>
              Quick tip
            </span>
            <span className={styles.cardText}>Use the prompt panel on the right in the editor to describe layouts, copy, or assets. Iterate without losing context.</span>
          </div>
        </div>

        <div className={`${styles.start} ${styles.rise}`} style={{ animationDelay: "0.4s" }}>
          <span className={styles.eyebrow}>Getting started</span>
          <h5 className={styles.startTitle}>Your workspace, ready to ship.</h5>
          <p className={styles.startText}>Three steps from zero to a first draft, then use Projects whenever you&apos;re ready to create or open a folder.</p>
          <div className={styles.steps}>
            {STEPS.map((s, i) => (
              <div key={s.n} className={styles.step} style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
                <span className={styles.stepIcon}>{STEP_ICONS[s.icon]}</span>
                <span className={styles.stepBody}>
                  <em>Step {i + 1}</em>
                  <b>{s.title}</b>
                  <span>{s.text}</span>
                </span>
                <i className={styles.stepNum}>{s.n}</i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
