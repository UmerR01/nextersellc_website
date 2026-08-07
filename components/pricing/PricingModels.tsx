"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./PricingModels.module.css";

const MODELS = [
  {
    icon: "/pricing/02_Fixed-Budget-2.svg",
    title: "Fixed Budget",
    text: "The Fixed Budget model is one of the most popular pricing options. It builds upon the Time & Material model, the only difference being a commitment to deliver a complete and logically structured solution within an agreed budget. The contract typically includes:",
    bullets: [
      <><strong>fixed budget</strong> with the hourly rate mentioned;</>,
      <><strong>unfixed scope</strong>, with a commitment to deliver the complete solution within the budget.</>,
    ],
  },
  {
    icon: "/pricing/02_Fixed-cost.svg",
    title: "Fixed Price",
    text: "The Fixed Price model operates on a predefined sum specified in the contract, paid in parts as agreed. This model offers high predictability as the developers commit to delivering a specific scope within a specific budget. However, it is also the least flexible, as the scope cannot be altered once development begins. The contract typically includes:",
    bullets: [
      <><strong>fixed budget</strong> without hourly rates mentioned;</>,
      <><strong>fixed scope</strong>, described in detail to avoid misunderstandings during acceptance.</>,
    ],
  },
  {
    icon: "/pricing/02_Time-Material.svg",
    title: "Time & Material",
    text: "The Time & Material engagement model involves monthly billing based on the actual development efforts from the previous month (person-hours worked). The contract typically includes:",
    bullets: [
      <><strong>unfixed budget</strong> with only the hourly rate specified;</>,
      <><strong>unfixed scope</strong> of work.</>,
    ],
  },
  {
    icon: "/pricing/02_Dedicated-team-2-1.svg",
    title: "Dedicated Team",
    text: "The Dedicated Team model provides specialists who fully dedicate their efforts to a project. This model allows the Client to directly manage the team, assign tasks, monitor progress, and receive reports. Billing is based on the specialists' monthly salaries. The contract typically includes:",
    bullets: [
      <><strong>fixed budget</strong> based on the specialists' monthly salaries and the number of specialists involved;</>,
      <><strong>unfixed scope</strong>, managed entirely by the Client.</>,
    ],
  },
];

export default function PricingModels() {
  const [activeModel, setActiveModel] = useState(0);
  const model = MODELS[activeModel];

  return (
    <section id="pricing-models" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Pricing <span className={styles.accent}>models</span> we offer
        </h2>
        <div className={styles.summaryRow} role="tablist" aria-label="Pricing models">
          {MODELS.map((m, index) => (
            <button
              key={m.title}
              type="button"
              role="tab"
              aria-selected={activeModel === index}
              className={`${styles.summaryItem} ${activeModel === index ? styles.summaryItemActive : ""}`}
              onClick={() => setActiveModel(index)}
            >
              <Image src={m.icon} alt="" width={56} height={56} />
              <span>{m.title}</span>
            </button>
          ))}
        </div>
        <div className={styles.panel} role="tabpanel">
          <h3 className={styles.panelTitle}>{model.title}</h3>
          <p className={styles.panelText}>{model.text}</p>
          <ul className={styles.panelBullets}>
            {model.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <a href="/engagement-models-process" className={styles.panelLink}>
            Compare our engagement models
            <span className={styles.linkArrow} />
          </a>
        </div>
      </div>
    </section>
  );
}