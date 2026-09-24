"use client";

import { useEffect, useState } from "react";
import SalesHubFeatureCard from "./SalesHubFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./SalesHubCallLogsWireframe.module.css";

// Recreated from the real Call Logs pages (call_logs/list.html +
// call_logs/detail.html): the same "Sessions History" table columns
// (Customer, Started, Ended, Duration, Broker), and the same chat-style
// conversation transcript a call log opens into.
const SESSIONS = [
  { customer: "Fatima A.", started: "9:04 AM", duration: "3m 12s", broker: "Yusuf" },
  { customer: "Omar K.", started: "9:21 AM", duration: "1m 48s", broker: "Yusuf" },
  { customer: "Layla S.", started: "9:37 AM", duration: "4m 05s", broker: "Rania" },
];

const TRANSCRIPT = [
  { side: "agent" as const, text: "Hi, this is SalesHub calling about your health insurance enquiry." },
  { side: "lead" as const, text: "Yes, I filled that form yesterday." },
  { side: "agent" as const, text: "Great, can I confirm your visa emirate to pull the right rates?" },
  { side: "lead" as const, text: "Dubai." },
];

export default function SalesHubCallLogsWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    setShown(0);
    const timers = TRANSCRIPT.map((_, i) => setTimeout(() => setShown((s) => Math.max(s, i + 1)), 1500 + i * 500));
    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div ref={ref}>
      <SalesHubFeatureCard key={cycle} title="Call Logs">
        <div className={styles.table}>
          <div className={styles.headRow}>
            <span>Customer</span>
            <span>Started</span>
            <span>Duration</span>
            <span>Broker</span>
          </div>
          {SESSIONS.map((s, i) => (
            <div key={s.customer} className={`${styles.row} ${i === 0 ? styles.rowActive : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className={styles.nameCell}>
                <span className={styles.avatar}>{s.customer[0]}</span>
                {s.customer}
              </span>
              <span className={styles.muted}>{s.started}</span>
              <span className={styles.muted}>{s.duration}</span>
              <span className={styles.muted}>{s.broker}</span>
            </div>
          ))}
        </div>

        <div className={styles.transcriptCard}>
          <div className={styles.transcriptHead}>
            <PhosphorIcon name="ChatCircleText" />
            Transcript: Fatima A.
          </div>
          <div className={styles.transcriptBody}>
            {TRANSCRIPT.slice(0, shown).map((m, i) => (
              <div key={i} className={`${styles.bubble} ${m.side === "agent" ? styles.bubbleAgent : styles.bubbleLead}`}>
                {m.text}
              </div>
            ))}
          </div>
        </div>
      </SalesHubFeatureCard>
    </div>
  );
}
