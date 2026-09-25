"use client";

import Count from "./Count";
import { useReplay } from "./useReplay";
import styles from "./CroquisDashboard.module.css";

// Recreated from the real Croquis AI dashboard (AI_Developer frontend:
// app/dashboard/page.tsx + modules/dashboard/components/*): greeting and
// filters, Storage hero card, Spaces, Team Structure, Uploading Files and
// Storage Access, with the same layout areas, copy, gradients and brand
// colours (#bbdcfd on #010412). Sidebar and top bar are intentionally left
// out. Avatars use initials instead of hot-linked photos.
const TEAM = [
  { name: "Alisa Snow", role: "UX/UI Designer", hue: 200 },
  { name: "Karl Coleman", role: "Motion Designer", hue: 24 },
  { name: "William Cooper", role: "Web Developer", hue: 340 },
  { name: "Erick Snow", role: "UX/UI Designer", hue: 150 },
  { name: "Liza Parker", role: "Web Developer", hue: 268 },
];

const initials = (n: string) =>
  n
    .split(" ")
    .map((w) => w[0])
    .join("");

const ACCESS = [
  { name: "KG Performance Project", files: "125 Files", size: "32.1", people: [0, 1, 2], more: 2 },
  { name: "Content for showreel", files: "68 Files", size: "15.6", people: [1, 2, 3], more: 0 },
  { name: "Photos of team", files: "97 Files", size: "12.4", people: [0, 3, 4], more: 3 },
  { name: "Stock Images", files: "167 Files", size: "46.7", people: [2, 3, 4], more: 5 },
];

function Avatar({ i, className }: { i: number; className?: string }) {
  const t = TEAM[i];
  return (
    <span
      className={`${styles.avatar} ${className ?? ""}`}
      style={{ background: `linear-gradient(135deg, hsl(${t.hue} 70% 62%), hsl(${t.hue + 40} 60% 38%))` }}
    >
      {initials(t.name)}
    </span>
  );
}

function FileIcon({ ext }: { ext: string }) {
  const id = ext.toLowerCase();
  return (
    <svg viewBox="0 0 100 100" className={styles.fileIcon} aria-hidden>
      <defs>
        <linearGradient id={`${id}-doc`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#263d75" />
          <stop offset="100%" stopColor="#152244" />
        </linearGradient>
        <linearGradient id={`${id}-badge`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3c5691" />
          <stop offset="100%" stopColor="#243965" />
        </linearGradient>
        <linearGradient id={`${id}-fold`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4c6fa1" />
          <stop offset="100%" stopColor="#2c4376" />
        </linearGradient>
      </defs>
      <g transform="translate(2, 0)">
        <path d="M 40,20 L 72,20 L 85,33 L 85,85 L 40,85 Z" fill={`url(#${id}-doc)`} />
        <polygon points="72,20 72,33 85,33" fill={`url(#${id}-fold)`} />
        <rect x="15" y="42" width="45" height="24" rx="5" fill={`url(#${id}-badge)`} />
        <text x="37.5" y="57" fill="#e2e8f0" fontSize="7.5" fontWeight="700" letterSpacing="0.5" textAnchor="middle">
          .{ext}
        </text>
      </g>
    </svg>
  );
}

const Dots = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.dots}>
    <circle cx="12" cy="5" r="1.8" />
    <circle cx="12" cy="12" r="1.8" />
    <circle cx="12" cy="19" r="1.8" />
  </svg>
);

const Caret = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.caret}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Tick = () => (
  <svg viewBox="0 0 24 24" fill="none" className={styles.tick}>
    <circle cx="12" cy="12" r="10" fill="#22c55e" />
    <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export default function CroquisDashboard() {
  const { ref, cycle } = useReplay<HTMLDivElement>();

  return (
    <div ref={ref} className={styles.root} aria-hidden>
      <div key={cycle} className={styles.screen}>
        {/* Greeting */}
        <div className={`${styles.greeting} ${styles.rise}`} style={{ animationDelay: "0s" }}>
          <p className={styles.hello}>Good Morning,</p>
          <h4 className={styles.name}>Georg Johnson</h4>
        </div>

        {/* Filters */}
        <div className={`${styles.filters} ${styles.rise}`} style={{ animationDelay: "0.05s" }}>
          <span className={styles.select}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={styles.selectIcon}>
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <polyline points="8 21 12 17 16 21" />
              <polyline points="7 10 9.5 7.5 12.5 10.5 16 7" />
            </svg>
            Last Week
            <Caret />
          </span>
          <span className={styles.toggle}>
            <span className={styles.toggleOn}>Personal</span>
            <span className={styles.toggleOff}>Team</span>
          </span>
        </div>

        {/* Team */}
        <div className={`${styles.card} ${styles.team} ${styles.rise}`} style={{ animationDelay: "0.25s" }}>
          <h5 className={styles.teamTitle}>Team Structure</h5>
          <ul className={styles.members}>
            {TEAM.map((m, i) => (
              <li key={m.name} className={styles.member}>
                <Avatar i={i} className={styles.avatarLg} />
                <span className={styles.memberText}>
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Storage hero */}
        <div className={`${styles.card} ${styles.storage} ${styles.rise}`} style={{ animationDelay: "0.1s" }}>
          <div className={styles.storageTop}>
            <span className={styles.muted}>Used per month</span>
            <span className={styles.monthSelect}>
              September
              <Caret />
            </span>
          </div>
          <div className={styles.bigRow}>
            <span className={styles.bigNumber}>
              <Count to={650} duration={1400} />
            </span>
            <span className={styles.bigUnit}>GB</span>
          </div>
          <div className={styles.rainbowWrap}>
            <span className={styles.rainbowGlow} />
            <span className={styles.rainbowTrack}>
              <span className={styles.rainbowFill} />
            </span>
          </div>
          <div className={styles.storageFoot}>
            <span>Your Storage</span>
            <span>50GB left</span>
          </div>
        </div>

        {/* Spaces */}
        <div className={`${styles.card} ${styles.spaces} ${styles.rise}`} style={{ animationDelay: "0.15s" }}>
          <div className={styles.spacesHead}>
            <h5 className={styles.cardTitle}>Spaces</h5>
            <span className={styles.addSpace}>
              Add Space
              <Caret />
            </span>
          </div>
          <p className={styles.spacesSub}>Use spaces to sort files by their meaning.</p>
          <div className={styles.spaceGrid}>
            {[
              { name: "Documents", v: [100, 21, 79], kind: "doc" },
              { name: "Personal", v: [256, 56, 200], kind: "person" },
            ].map((s) => (
              <div key={s.name} className={styles.space}>
                <div className={styles.spaceTop}>
                  <span className={styles.spaceLeft}>
                    <span className={`${styles.spaceIcon} ${s.kind === "person" ? styles.spaceIconPerson : ""}`}>
                      {s.kind === "doc" ? (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M4 4C4 2.9 4.9 2 6 2H14L20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4Z" fill="rgba(100,160,255,0.85)" />
                          <path d="M14 2L20 8H14V2Z" fill="rgba(60,120,230,0.7)" />
                          <line x1="8" y1="13" x2="16" y2="13" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3" strokeLinecap="round" />
                          <line x1="8" y1="16" x2="13" y2="16" stroke="rgba(255,255,255,0.35)" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="8" r="3.5" fill="rgba(210,160,255,0.9)" />
                          <path d="M5 20C5 16.7 8.1 14 12 14C15.9 14 19 16.7 19 20" stroke="rgba(210,160,255,0.9)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                        </svg>
                      )}
                    </span>
                    {s.name}
                  </span>
                  <Dots />
                </div>
                <div className={styles.metrics}>
                  {["Total", "Used", "Available"].map((l, i) => (
                    <span key={l} className={styles.metric}>
                      <b>
                        {s.v[i]} <em>GB</em>
                      </b>
                      <i>{l}</i>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Uploading */}
        <div className={`${styles.card} ${styles.upload} ${styles.rise}`} style={{ animationDelay: "0.3s" }}>
          <div className={styles.uploadHead}>
            <h5 className={styles.cardTitle}>Uploading Files</h5>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={styles.close}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className={styles.uploadList}>
            {[
              { ext: "DOC", name: "Project estimate", size: "12.3 Mb", pct: 100 },
              { ext: "PDF", name: "Presentation for...", size: "36.7 Mb", pct: 100 },
              { ext: "XLS", name: "Work invoicing", size: "9.8 Mb", pct: 23 },
            ].map((f, i) => (
              <div key={f.ext} className={styles.uploadItem}>
                <FileIcon ext={f.ext} />
                <div className={styles.uploadInfo}>
                  <div className={styles.uploadName}>
                    <span>{f.name}</span>
                    <span className={styles.muted}>{f.size}</span>
                  </div>
                  <div className={styles.barRow}>
                    <span className={styles.bar}>
                      <span className={styles.barFill} style={{ width: `${f.pct}%`, animationDelay: `${0.5 + i * 0.2}s` }} />
                    </span>
                    {f.pct === 100 ? (
                      <Tick />
                    ) : (
                      <span className={`${styles.muted} ${styles.pct}`}>
                        <Count to={f.pct} delay={900} duration={900} />%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.status}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.statusIcon}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span className={styles.statusLabel}>Uploading</span>
              <span className={styles.statusBar}>
                <span className={styles.barFill} style={{ width: "73%", animationDelay: "0.9s" }} />
              </span>
              <span className={styles.statusPct}>
                <Count to={73} delay={900} duration={1100} />%
              </span>
            </div>
          </div>
        </div>

        {/* Storage access */}
        <div className={`${styles.card} ${styles.access} ${styles.rise}`} style={{ animationDelay: "0.35s" }}>
          <h5 className={styles.cardTitle}>Storage Access</h5>
          <p className={styles.accessSub}>
            You can grant access to all files in your space to anyone, as well as allow them to download and edit the files.
          </p>
          <div className={styles.accessRows}>
            {ACCESS.map((a) => (
              <div key={a.name} className={styles.accessRow}>
                <span className={styles.accessName}>{a.name}</span>
                <span className={styles.accessCell}>{a.files}</span>
                <span className={styles.accessCell}>{a.size} GB</span>
                <span className={styles.stack}>
                  {a.people.map((p) => (
                    <Avatar key={p} i={p} />
                  ))}
                  {a.more > 0 && <span className={`${styles.avatar} ${styles.more}`}>+{a.more}</span>}
                </span>
                <span className={styles.share}>Share access</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
