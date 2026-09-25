"use client";

import { useEffect, useState } from "react";
import JoblynkFeatureCard from "./JoblynkFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./JoblynkMultiChannelWireframe.module.css";

// AI Voice, SMS & Email: the call runs first and completes, then the SMS
// and email follow-ups fire in sequence off the back of it.
const CHANNELS = [
  {
    key: "call",
    label: "AI Voice Call",
    icon: "PhoneCall" as const,
    detail: "4m 12s · Screening call",
    queuedLabel: "Initiating call",
    doneLabel: "Completed",
  },
  {
    key: "sms",
    label: "Follow-up SMS",
    icon: "ChatCircleText" as const,
    detail: "“Hi Sarah, thanks for the call. Sending the role details now.”",
    queuedLabel: "Queued",
    doneLabel: "Sent",
  },
  {
    key: "email",
    label: "Follow-up Email",
    icon: "FileText" as const,
    detail: "Interview availability request",
    queuedLabel: "Queued",
    doneLabel: "Sent",
  },
];

export default function JoblynkMultiChannelWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>();
  const [sent, setSent] = useState(0);

  useEffect(() => {
    setSent(0);
  }, [cycle]);

  useEffect(() => {
    if (sent >= CHANNELS.length) return;
    const id = setTimeout(() => setSent((s) => s + 1), 700);
    return () => clearTimeout(id);
  }, [sent]);

  return (
    <div ref={ref}>
      <JoblynkFeatureCard key={cycle} title="AI Voice, SMS &amp; Email">
        <div className={styles.candidateRow}>
          <span className={styles.avatar}>SM</span>
          <span className={styles.candidateBody}>
            <span className={styles.candidateName}>Sarah Mitchell</span>
            <span className={styles.candidateRole}>Senior Backend Engineer &middot; Austin, TX</span>
          </span>
          <span className={styles.badge}>Personalized &middot; Autonomous</span>
        </div>

        <div className={styles.channels}>
          {CHANNELS.map((c, i) => {
            const done = sent > i;
            return (
              <div key={c.key}>
                {i > 0 && <span className={`${styles.connector} ${sent > i - 1 ? styles.connectorDone : ""}`} />}
                <div className={`${styles.channel} ${done ? styles.channelDone : ""}`}>
                  <span className={styles.channelIcon}>
                    <PhosphorIcon name={c.icon} />
                  </span>
                  <span className={styles.channelBody}>
                    <span className={styles.channelLabel}>{c.label}</span>
                    <span className={styles.channelDetail}>{c.detail}</span>
                  </span>
                  <span className={`${styles.status} ${done ? styles.statusSent : ""}`}>
                    {done ? (
                      <>
                        <PhosphorIcon name="CheckCircle" />
                        {c.doneLabel}
                      </>
                    ) : (
                      c.queuedLabel
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.footer}>
          <PhosphorIcon name="CircleFill" className={styles.footerDot} />
          Running 24/7 &mdash; no manual follow-up needed
        </div>
      </JoblynkFeatureCard>
    </div>
  );
}
