"use client";
import { useState } from "react";
import styles from "./OurServicesBlock.module.css";

const TABS = [
  {
    icon: "/engagement/06_Pricing-models-02.svg",
    label: "Build in-house",
    title: "Build in-house",
    desc: "Full control and the highest retention of knowledge. You carry the hiring risk, a capacity ceiling, and three to six months to bring on a senior engineer. Long-term cost includes management overhead.",
  },
  {
    icon: "/engagement/06_Product-scope-02.svg",
    label: "Hire freelancers or marketplaces",
    title: "Hire freelancers or marketplaces",
    desc: "Lower hourly rate. Quality varies, coordination falls to you, and there is no guarantee of continuity or built-in team structure.",
  },
  {
    icon: "/engagement/06_Data-ownership-03.svg",
    label: "Outsource to Nexterse LLC",
    title: "Outsource to Nexterse LLC",
    desc: "Process and team continuity with a cross-functional team built around your project. You pay a premium over freelance rates, and in return, you get senior-led delivery and partnerships that commonly run for years. With 70% of our engineers at the senior level, the people making architecture decisions are the ones doing the work.",
  },
];

export default function OurServicesBlock() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Build in-house, hire freelancers, or outsource
        </h2>
        <p className={styles.intro}>
          Before choosing a contract model, most buyers are deciding how to staff the work at all. Outsourcing carries a real premium over a freelance rate, and what you buy with it is a team that stays, a process that holds, and accountability for the result rather than for individual tasks. The honest trade-offs:
        </p>
        <div className={styles.tabBar}>
          {TABS.map((tab, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tab.icon}
                alt=""
                width={56}
                height={56}
                className={styles.tabIcon}
                loading="lazy"
              />
              <span className={styles.tabLabel}>{tab.label}</span>
            </button>
          ))}
        </div>
        <div className={styles.content}>
          <h3 className={styles.contentTitle}>{TABS[active].title}</h3>
          <p className={styles.contentDesc}>{TABS[active].desc}</p>
        </div>
      </div>
    </section>
  );
}
