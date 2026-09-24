"use client";

import { useEffect, useState } from "react";
import XorrisFeatureCard from "./XorrisFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import styles from "./XorrisMultilingualWireframe.module.css";

// Recreated from the real agent-setup language step
// (components/dashboard/create-agent-wizard/step-voice.tsx): a preferred-
// language choice, an accent dropdown scoped to that language (American/
// British for English; UAE/KSA/Qatar for Arabic — real accent options
// from lib/accents.ts), and the real "Allow language switch" toggle with
// its own description text.
const LANGUAGES = [
  {
    id: "en",
    label: "English",
    flag: "/flags/us.svg",
    accents: ["American Accent", "British Accent"],
    greeting: "Hi, this is Sarah calling from Xorris. Do you have a quick minute?",
  },
  {
    id: "ar",
    label: "Arabic",
    flag: "/flags/ae.svg",
    accents: ["UAE Accent", "KSA Accent", "Qatar Accent"],
    greeting: "مرحباً، معك سارة من إكسوريس. هل لديك دقيقة؟",
  },
];

export default function XorrisMultilingualWireframe() {
  const [lang, setLang] = useState(0);
  const [switchOn, setSwitchOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setLang((l) => (l + 1) % LANGUAGES.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setSwitchOn((s) => !s), 2600);
    return () => clearInterval(id);
  }, []);

  const active = LANGUAGES[lang];

  return (
    <XorrisFeatureCard
      title="Language & Accent"
      cta={
        <span className={styles.cta}>
          <PhosphorIcon name="Translate" />
          Multilingual
        </span>
      }
    >
      <div className={styles.field}>
        <span className={styles.label}>Preferred language</span>
        <div className={styles.langRow}>
          {LANGUAGES.map((l, i) => (
            <span key={l.id} className={`${styles.langPill} ${i === lang ? styles.langPillActive : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.flag} alt="" className={styles.flag} />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Accent</span>
        <div key={active.id} className={styles.select}>
          <span>{active.accents[0]}</span>
          <PhosphorIcon name="CaretDown" className={styles.chevron} />
        </div>
        <p className={styles.hint}>Uses the multilingual speech model and instructs the agent to speak in this accent.</p>
      </div>

      <div className={styles.toggleRow}>
        <div>
          <span className={styles.toggleLabel}>Allow language switch</span>
          <p className={styles.toggleHint}>
            When on, the agent can switch languages if the caller clearly asks.
          </p>
        </div>
        <span className={`${styles.switch} ${switchOn ? styles.switchOn : ""}`}>
          <span className={styles.knob} />
        </span>
      </div>

      <div className={styles.preview}>
        <span className={styles.previewLabel}>Live preview</span>
        <p key={active.id} className={styles.previewText} dir={active.id === "ar" ? "rtl" : "ltr"}>
          {active.greeting}
        </p>
      </div>
    </XorrisFeatureCard>
  );
}
