"use client";

import XorrisFeatureCard from "./XorrisFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import styles from "./XorrisCampaignsWireframe.module.css";

// Recreated from the real campaigns panel
// (components/dashboard/campaigns-panel.tsx): same "Call Campaigns"
// header, same card fields (Leads, Assigned, Schedule, Created) and the
// same status-badge colours (Running = emerald, Draft = grey,
// Scheduled = amber, Completed = plum tint).
const CAMPAIGNS = [
  {
    name: "Q4 Renewal Outreach",
    status: "Running" as const,
    leads: 342,
    called: 214,
    assigned: "Sarah (AI Agent)",
    schedule: "Mon–Fri, 9am–5pm",
  },
  {
    name: "New Lead Follow-up",
    status: "Scheduled" as const,
    leads: 128,
    called: 0,
    assigned: "Omar (AI Agent)",
    schedule: "Starts Sep 24",
  },
  {
    name: "Support Satisfaction Check",
    status: "Draft" as const,
    leads: 60,
    called: 0,
    assigned: "Unassigned",
    schedule: "Not scheduled",
  },
  {
    name: "Summer Promo Follow-up",
    status: "Completed" as const,
    leads: 210,
    called: 210,
    assigned: "Sarah (AI Agent)",
    schedule: "Ended Aug 30",
  },
];

const STATUS_CLASS: Record<string, string> = {
  Running: styles.statusRunning,
  Scheduled: styles.statusScheduled,
  Draft: styles.statusDraft,
  Completed: styles.statusCompleted,
};

export default function XorrisCampaignsWireframe() {
  return (
    <XorrisFeatureCard
      title="Call Campaigns"
      cta={
        <span className={styles.cta}>
          <PhosphorIcon name="Megaphone" />
          Create Campaign
        </span>
      }
    >
      <div className={styles.list}>
        {CAMPAIGNS.map((c, i) => {
          const pct = c.leads ? Math.round((c.called / c.leads) * 100) : 0;
          return (
            <div key={c.name} className={styles.card} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className={styles.cardTop}>
                <span className={styles.name}>{c.name}</span>
                <span className={`${styles.badge} ${STATUS_CLASS[c.status]}`}>{c.status}</span>
              </div>
              <div className={styles.meta}>
                <span>
                  Leads <b>{c.leads}</b>
                </span>
                <span>
                  Assigned <b>{c.assigned}</b>
                </span>
                <span>
                  Schedule <b>{c.schedule}</b>
                </span>
              </div>
              {c.status === "Running" && (
                <div className={styles.progressRow}>
                  <div className={styles.progressTrack}>
                    <span className={styles.progressFill} style={{ width: `${pct}%` }} />
                  </div>
                  <span className={styles.progressLabel}>
                    {c.called}/{c.leads} called
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        {CAMPAIGNS.reduce((sum, c) => sum + c.leads, 0)} leads across {CAMPAIGNS.length} campaigns
      </div>
    </XorrisFeatureCard>
  );
}
