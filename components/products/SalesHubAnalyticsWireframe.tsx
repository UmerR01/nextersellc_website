"use client";

import Count from "./Count";
import SalesHubFeatureCard from "./SalesHubFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./SalesHubAnalyticsWireframe.module.css";

// Recreated from the real Follow-up Analytics dashboard
// (followups/analytics.html): the same lead KPIs (Total/Active/
// Converted/Closed Leads), the same call KPIs (Total Calls Made, Calls
// Answered with its answer rate), and the real lead pipeline stages from
// LeadContact.Status — New, Interested, Quoted, Purchased.
const LEAD_KPIS = [
  { label: "Total Leads", value: 486 },
  { label: "Active Leads", value: 214 },
  { label: "Converted Leads", value: 142, sub: "29.2% of total" },
  { label: "Closed Leads", value: 68 },
];

const STAGES = [
  { label: "New", count: 486 },
  { label: "Interested", count: 261 },
  { label: "Quoted", count: 174 },
  { label: "Purchased", count: 142 },
];
const STAGE_MAX = STAGES[0].count;

export default function SalesHubAnalyticsWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>();

  return (
    <div ref={ref}>
      <SalesHubFeatureCard
        key={cycle}
        title="Analytics"
        cta={
          <span className={styles.cta}>
            <PhosphorIcon name="ChartBar" />
            Total Calls Made: 3,874
          </span>
        }
      >
        <div className={styles.kpis}>
          {LEAD_KPIS.map((k, i) => (
            <div key={k.label} className={styles.kpi} style={{ animationDelay: `${i * 0.08}s` }}>
              <span className={styles.kpiLabel}>{k.label}</span>
              <span className={styles.kpiValue}>
                <Count to={k.value} delay={i * 100} duration={900} />
              </span>
              {k.sub && <span className={styles.kpiSub}>{k.sub}</span>}
            </div>
          ))}
        </div>

        <div className={styles.funnel}>
          <span className={styles.funnelLabel}>Conversion by stage</span>
          {STAGES.map((s, i) => (
            <div key={s.label} className={styles.stageRow}>
              <span className={styles.stageName}>{s.label}</span>
              <div className={styles.stageTrack}>
                <span
                  className={styles.stageFill}
                  style={{ width: `${(s.count / STAGE_MAX) * 100}%`, animationDelay: `${0.4 + i * 0.12}s` }}
                />
              </div>
              <span className={styles.stageCount}>
                <Count to={s.count} delay={500 + i * 120} duration={700} />
              </span>
            </div>
          ))}
        </div>
      </SalesHubFeatureCard>
    </div>
  );
}
