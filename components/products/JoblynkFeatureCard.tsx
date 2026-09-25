"use client";

import type { ReactNode } from "react";
import ScaledFrame from "./ScaledFrame";
import styles from "./JoblynkFeatureCard.module.css";

/**
 * Shared shell for the "What you can do with Joblynk" feature wireframes:
 * a wide white panel matching the recruiter dashboard's own chrome (white,
 * 1px border, rounded corners), with a title + optional blue
 * call-to-action in the header row.
 */
export default function JoblynkFeatureCard({
  title,
  cta,
  children,
}: {
  title: string;
  cta?: ReactNode;
  children: ReactNode;
}) {
  return (
    <ScaledFrame>
      <div className={styles.root} aria-hidden>
        <div className={styles.headRow}>
          <h4 className={styles.title}>{title}</h4>
          {cta}
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </ScaledFrame>
  );
}
