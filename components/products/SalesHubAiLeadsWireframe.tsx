"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SalesHubFeatureCard from "./SalesHubFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./SalesHubAiLeadsWireframe.module.css";

// Recreated from the real Integrations page (integrations.html): the
// Xorris integration card with its real description text, an on/off
// toggle, a modal showing call status and an assigned agent number per
// language — plus the real daily calling rule copy from leads/list.html
// ("call {amount_per_day} leads from {status} at {time}").
const QUEUE = [
  { name: "Fatima A.", status: "Queued" as const },
  { name: "Omar K.", status: "In Progress" as const },
  { name: "Layla S.", status: "Completed" as const },
];

const STATUS_CLASS: Record<string, string> = {
  Queued: styles.statusQueued,
  "In Progress": styles.statusProgress,
  Completed: styles.statusDone,
};

export default function SalesHubAiLeadsWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>();
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(false);
    const id = setTimeout(() => setOn(true), 900);
    return () => clearTimeout(id);
  }, [cycle]);

  return (
    <div ref={ref}>
      <SalesHubFeatureCard key={cycle} title="Integrations">
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <span className={styles.logoWrap}>
              <Image src="/products/xorris/logo.png" alt="Xorris" width={72} height={24} className={styles.logo} />
            </span>
            <span className={`${styles.toggle} ${on ? styles.toggleOn : ""}`}>
              <span className={styles.knob} />
            </span>
          </div>
          <p className={styles.desc}>
            Xorris is an AI-powered call agent that listens to your queries and provides you assistance in
            real time, automating outbound calls to your leads 24/7.
          </p>
          <div className={styles.statusRow}>
            <span className={styles.statusLabel}>Status</span>
            <span className={`${styles.statusValue} ${on ? styles.statusValueOn : ""}`}>{on ? "On" : "Off"}</span>
          </div>
          <div className={styles.statusRow}>
            <span className={styles.statusLabel}>Agent Number (English)</span>
            <span className={styles.statusMono}>+1 (415) 555-0199</span>
          </div>
          <div className={styles.statusRow}>
            <span className={styles.statusLabel}>Agent Number (Arabic)</span>
            <span className={styles.statusMono}>+971 4 555 0132</span>
          </div>
        </div>

        <div className={styles.ruleRow}>
          <PhosphorIcon name="PhoneCall" className={styles.ruleIcon} />
          Daily rule: call 25 leads from <b>New</b> at <b>9:00 AM</b>
        </div>

        <div className={styles.queue}>
          {QUEUE.map((q, i) => (
            <div key={q.name} className={styles.queueRow} style={{ animationDelay: `${1.2 + i * 0.15}s` }}>
              <span className={styles.queueAvatar}>{q.name[0]}</span>
              {q.name}
              <span className={`${styles.queueBadge} ${STATUS_CLASS[q.status]}`}>{q.status}</span>
            </div>
          ))}
        </div>
      </SalesHubFeatureCard>
    </div>
  );
}
