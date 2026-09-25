"use client";

import type { ReactNode } from "react";
import ScaledFrame from "./ScaledFrame";
import styles from "./XorrisFeatureCard.module.css";

/**
 * Shared shell for the "What you can do with Xorris" feature wireframes
 * (everything except AI Calling, which is its own narrow phone-call card):
 * a wide white dashboard panel matching the real Xorris platform's own
 * panel chrome (white, 1px black/10% border, rounded corners), with a
 * title + optional plum call-to-action in the header row.
 */
export default function XorrisFeatureCard({
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
