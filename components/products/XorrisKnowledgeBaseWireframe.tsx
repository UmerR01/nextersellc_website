"use client";

import { useEffect, useState } from "react";
import XorrisFeatureCard from "./XorrisFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import styles from "./XorrisKnowledgeBaseWireframe.module.css";

// Recreated from the real Knowledge Base panel/table
// (components/dashboard/knowledge-base-panel.tsx + knowledge-base-table.tsx):
// same header and the same columns — Knowledge Base Name, Type, Created
// At, Modified On, Actions.
const ROWS = [
  { name: "Pricing & Plans.pdf", type: "PDF", created: "Sep 2, 2026", modified: "Sep 18, 2026" },
  { name: "Refund Policy.docx", type: "DOC", created: "Aug 21, 2026", modified: "Sep 10, 2026" },
  { name: "Onboarding FAQ", type: "Text", created: "Jul 30, 2026", modified: "Sep 4, 2026" },
  { name: "API Integration Guide", type: "PDF", created: "Jul 12, 2026", modified: "Aug 29, 2026" },
];

export default function XorrisKnowledgeBaseWireframe() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setProgress(100), 300);
    const doneId = setTimeout(() => setDone(true), 1900);
    return () => {
      clearTimeout(id);
      clearTimeout(doneId);
    };
  }, []);

  return (
    <XorrisFeatureCard
      title="Knowledge Base"
      cta={
        <span className={styles.cta}>
          <PhosphorIcon name="Plus" />
          Upload Document
        </span>
      }
    >
      <div className={styles.table}>
        <div className={styles.headRow}>
          <span>Knowledge Base Name</span>
          <span>Type</span>
          <span>Created At</span>
          <span>Modified On</span>
        </div>
        {ROWS.map((r, i) => (
          <div key={r.name} className={styles.row} style={{ animationDelay: `${i * 0.12}s` }}>
            <span className={styles.nameCell}>
              <PhosphorIcon name="FileText" className={styles.fileIcon} />
              {r.name}
            </span>
            <span className={styles.typeTag}>{r.type}</span>
            <span className={styles.muted}>{r.created}</span>
            <span className={styles.muted}>{r.modified}</span>
          </div>
        ))}
        <div className={styles.row}>
          <span className={styles.nameCell}>
            <PhosphorIcon name="FileText" className={styles.fileIcon} />
            Product Handbook.pdf
          </span>
          <div className={styles.uploadTrack}>
            <span className={styles.uploadFill} style={{ width: `${progress}%` }} />
          </div>
          <span className={styles.uploadStatus}>
            {done ? (
              <span className={styles.doneTag}>
                <PhosphorIcon name="CheckCircle" />
                Indexed
              </span>
            ) : (
              "Uploading…"
            )}
          </span>
          <span />
        </div>
      </div>
      <div className={styles.footer}>{ROWS.length + 1} documents · 12.4 MB indexed</div>
    </XorrisFeatureCard>
  );
}
