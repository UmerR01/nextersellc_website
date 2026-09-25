"use client";

import { useEffect, useState } from "react";
import XorrisFeatureCard from "./XorrisFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import styles from "./XorrisVoiceCloningWireframe.module.css";

// Recreated from the real Voice Cloning panel/table
// (components/dashboard/voice-cloning-panel.tsx + voice-clones-table.tsx):
// same "Voice Cloning" header + "Create Voice Clone" button, same table
// columns (Name / Type / Gender / Status), and the same status-pill
// colours (Active = emerald, Processing = plum tint, Failed = red).
const ROWS = [
  { name: "Sarah (Sales)", type: "Cloned", gender: "Female", status: "Active" as const },
  { name: "Omar (Support)", type: "Cloned", gender: "Male", status: "Active" as const },
  { name: "Layla (Recruiting)", type: "Preset", gender: "Female", status: "Processing" as const },
];

const STATUS_CLASS: Record<string, string> = {
  Active: styles.statusActive,
  Processing: styles.statusProcessing,
};

export default function XorrisVoiceCloningWireframe() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 1800);
    return () => clearTimeout(id);
  }, []);

  const rows = ROWS.map((r, i) => (i === 2 && ready ? { ...r, status: "Active" as const } : r));

  return (
    <XorrisFeatureCard
      title="Voice Cloning"
      cta={
        <span className={styles.cta}>
          <PhosphorIcon name="Plus" />
          Create Voice Clone
        </span>
      }
    >
      <div className={styles.table}>
        <div className={styles.headRow}>
          <span>Name</span>
          <span>Type</span>
          <span>Gender</span>
          <span>Status</span>
        </div>
        {rows.map((r, i) => (
          <div key={r.name} className={styles.row} style={{ animationDelay: `${i * 0.12}s` }}>
            <span className={styles.nameCell}>
              <span className={styles.avatar}>{r.name[0]}</span>
              {r.name}
            </span>
            <span className={styles.muted}>{r.type}</span>
            <span className={styles.muted}>{r.gender}</span>
            <span className={`${styles.pill} ${STATUS_CLASS[r.status]}`}>{r.status}</span>
          </div>
        ))}
      </div>

      <div className={styles.waveCard}>
        <span className={styles.waveLabel}>Testing “Sarah (Sales)”</span>
        <div className={styles.wave} aria-hidden>
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.045}s` }} />
          ))}
        </div>
      </div>
    </XorrisFeatureCard>
  );
}
