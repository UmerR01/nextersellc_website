"use client";

import { useEffect, useState } from "react";
import XorrisFeatureCard from "./XorrisFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import styles from "./XorrisCallingWireframe.module.css";

// Recreated from the real Xorris dialer's "ongoing call" screen
// (components/dashboard/dialer-active-call.tsx in the Xorris frontend):
// same outgoing-call badge, same phone/duration line, the same 6 controls
// in a 3-column grid (Mute, Hold, Transfer, Recording, Dialpad,
// Voicemail), the same 72px red circular hangup button, and the same
// Phosphor icon set the real screen uses (see phosphorPaths.tsx). Sits in
// the same XorrisFeatureCard shell as the other 5 features so every
// wireframe shares one outer size instead of this one floating as a
// small phone card in a mostly empty frame.
const CONTROLS = [
  { id: "mute", label: "Mute", icon: "MicrophoneSlash" as const },
  { id: "hold", label: "Hold", icon: "Pause" as const },
  { id: "transfer", label: "Transfer", icon: "ArrowRight" as const },
  { id: "recording", label: "Recording", icon: "CircleFill" as const, pulse: true },
  { id: "dialpad", label: "Dialpad", icon: "GridFour" as const },
  { id: "voicemail", label: "Voicemail", icon: "CassetteTape" as const },
];

export default function XorrisCallingWireframe() {
  const [elapsed, setElapsed] = useState(14);

  useEffect(() => {
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const ss = String(elapsed % 60).padStart(2, "0");

  return (
    <XorrisFeatureCard title="Ongoing Call" cta={<span className={styles.headerTime}>Sep 21, 2026 4:12 PM</span>}>
      <div className={styles.panel}>
        <div className={styles.contactRow}>
          <span className={styles.outBadge}>
            <PhosphorIcon name="ArrowUpRight" />
          </span>
          <span className={styles.contactName}>AI Agent: Sarah</span>
          <span className={styles.status}>
            <span className={styles.statusDot} />
            Ongoing
          </span>
        </div>
        <p className={styles.viaLine}>Outgoing via Xorris Line</p>
        <div className={styles.numberRow}>
          <span>+1 (415) 555-0199</span>
          <span className={styles.dash}>–</span>
          <span className={styles.timer}>
            {mm}:{ss}
          </span>
        </div>

        <div className={styles.spacer} />

        <div className={styles.controls}>
          {CONTROLS.map((c) => (
            <div key={c.id} className={styles.control}>
              <span className={`${styles.controlIcon} ${c.pulse ? styles.controlPulse : ""}`}>
                <PhosphorIcon name={c.icon} />
              </span>
              <span className={styles.controlLabel}>{c.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.hangupRow}>
          <span className={styles.hangup}>
            <PhosphorIcon name="PhoneX" />
          </span>
        </div>
      </div>
    </XorrisFeatureCard>
  );
}
