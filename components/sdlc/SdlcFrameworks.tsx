"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./SdlcFrameworks.module.css";

const tabs = [
  {
    id: "scrum",
    label: "Scrum",
    description:
      "Nexterse uses Scrum when requirements will evolve and the Client wants regular influence over delivery priorities. Work runs in two-week sprints: each sprint opens with a planning session, runs with daily standups, and closes with a review and retrospective where the Client can adjust the backlog for the next cycle. Scrum suits most custom software projects where the full scope is not locked at the outset and Client feedback shapes what gets built next.",
    image: { src: "/sdlc/12_Scrum-1024x314.png", alt: "Scrum board screen", width: 1024, height: 314 },
  },
  {
    id: "kanban",
    label: "Kanban",
    description:
      "Continuous delivery work – maintenance contracts, support retainers, and feature expansion on live products – runs on Kanban. Work-in-progress limits keep throughput predictable. Tasks move through defined stages and are delivered as they complete, without waiting for a sprint boundary. The Client sees current status at any point through the board. Kanban works best when responsiveness to incoming requests matters more than a fixed release rhythm.",
    image: { src: "/sdlc/12_Kanban-1-1024x274.png", alt: "Kanban board screen", width: 1024, height: 274 },
  },
];

export default function SdlcFrameworks() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Development <span className={styles.accent}>frameworks</span> we follow
            </h2>
            <div className={styles.leftDesc}>
              <p>
                The project's requirements profile, delivery pace, and Client involvement pattern
                determine which methodology runs.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.tabs}>
              <div className={styles.tabBtns}>
                {tabs.map((t, i) => (
                  <button
                    key={t.id}
                    className={`${styles.tabBtn} ${i === activeTab ? styles.tabBtnActive : ""}`}
                    onClick={() => setActiveTab(i)}
                    type="button"
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className={styles.tabContent}>
                <p className={styles.tabDesc}>{tab.description}</p>
                <div className={styles.tabImage}>
                  <Image
                    src={tab.image.src}
                    alt={tab.image.alt}
                    width={tab.image.width}
                    height={tab.image.height}
                    className={styles.tabImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
