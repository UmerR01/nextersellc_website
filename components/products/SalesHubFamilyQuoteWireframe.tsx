"use client";

import { useEffect, useState } from "react";
import SalesHubFeatureCard from "./SalesHubFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./SalesHubFamilyQuoteWireframe.module.css";

// Recreated from the real "Get Quote" flow (family_quote.html): the same
// three quote types (Self / Family / Self + Family — real copy: "Quote
// for yourself only", "Quote for family members only", "Quote for you
// and family members"), the principal-person + added-member cards from
// step 2, and the premium calculation from Overview.md (base + add-ons +
// tax − discount).
const TYPES = [
  { id: "self", label: "Self", desc: "Quote for yourself only", icon: "UsersThree" as const },
  { id: "family", label: "Family", desc: "Quote for family members only", icon: "UsersThree" as const },
  { id: "self_family", label: "Self + Family", desc: "Quote for you and family members", icon: "UsersThree" as const },
];

const MEMBERS = [
  { name: "Ahmed R.", role: "Principal", sub: "Dubai · Employment visa" },
  { name: "Sara R.", role: "Spouse", sub: "Dependent visa" },
  { name: "Zayn R.", role: "Child", sub: "Dependent visa" },
];

export default function SalesHubFamilyQuoteWireframe() {
  const { ref, cycle } = useReplay<HTMLDivElement>();
  const [memberCount, setMemberCount] = useState(0);
  const [premium, setPremium] = useState(0);

  useEffect(() => {
    setMemberCount(0);
    setPremium(0);
  }, [cycle]);

  useEffect(() => {
    if (memberCount >= MEMBERS.length) return;
    const id = setTimeout(() => setMemberCount((c) => c + 1), 500);
    return () => clearTimeout(id);
  }, [memberCount]);

  useEffect(() => {
    if (memberCount < MEMBERS.length) return;
    const target = 4260;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 900);
      setPremium(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [memberCount]);

  return (
    <div ref={ref}>
    <SalesHubFeatureCard key={cycle} title="Get a Quote">
      <div className={styles.typeRow}>
        {TYPES.map((t) => (
          <div key={t.id} className={`${styles.typeCard} ${t.id === "family" ? styles.typeCardActive : ""}`}>
            <PhosphorIcon name={t.icon} className={styles.typeIcon} />
            <span className={styles.typeLabel}>{t.label}</span>
            <span className={styles.typeDesc}>{t.desc}</span>
          </div>
        ))}
      </div>

      <div className={styles.members}>
        {MEMBERS.slice(0, memberCount).map((m, i) => (
          <div
            key={m.name}
            className={`${styles.member} ${m.role === "Principal" ? styles.memberPrincipal : ""}`}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <span className={styles.memberAvatar}>{m.name[0]}</span>
            <span className={styles.memberInfo}>
              <span className={styles.memberName}>{m.name}</span>
              <span className={styles.memberSub}>{m.sub}</span>
            </span>
            <span className={m.role === "Principal" ? styles.roleBadgePrincipal : styles.roleBadge}>{m.role}</span>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <div>
          <span className={styles.summaryLabel}>Quote ID</span>
          <span className={styles.summaryValue}>Q-2026-3841</span>
        </div>
        <div>
          <span className={styles.summaryLabel}>Total Premium</span>
          <span className={styles.summaryPremium}>AED {premium.toLocaleString("en-US")}</span>
        </div>
      </div>
    </SalesHubFeatureCard>
    </div>
  );
}
