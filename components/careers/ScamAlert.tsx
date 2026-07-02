"use client";
import { useState } from "react";
import styles from "./ScamAlert.module.css";

const JOBS = [
  {
    category: "Design",
    title: "Product Designer",
    desc: "We're looking for a mid-level product designer to create intuitive digital experiences for our clients.",
    tags: [
      { label: "100% remote", icon: "location" },
      { label: "Full-time", icon: "clock" },
    ],
    href: "mailto:hr@nexterse.com?subject=Application: Product Designer",
  },
  {
    category: "Management",
    title: "Engineering Manager",
    desc: "We're looking for an experienced engineering manager to lead and grow our development teams.",
    tags: [
      { label: "100% remote", icon: "location" },
      { label: "Full-time", icon: "clock" },
    ],
    href: "mailto:hr@nexterse.com?subject=Application: Engineering Manager",
  },
  {
    category: "Customer Service",
    title: "Customer Success Manager",
    desc: "We're looking for a customer success manager to build long-term relationships with our clients.",
    tags: [
      { label: "100% remote", icon: "location" },
      { label: "Full-time", icon: "clock" },
    ],
    href: "mailto:hr@nexterse.com?subject=Application: Customer Success Manager",
  },
  {
    category: "Development",
    title: "Full-Stack Developer",
    desc: "We're looking for a full-stack developer with strong experience in React, Node.js, and cloud platforms.",
    tags: [
      { label: "100% remote", icon: "location" },
      { label: "Full-time", icon: "clock" },
    ],
    href: "mailto:hr@nexterse.com?subject=Application: Full-Stack Developer",
  },
  {
    category: "Design",
    title: "UI/UX Designer",
    desc: "We're looking for a UI/UX designer to craft seamless and compelling user experiences across platforms.",
    tags: [
      { label: "100% remote", icon: "location" },
      { label: "Full-time", icon: "clock" },
    ],
    href: "mailto:hr@nexterse.com?subject=Application: UI/UX Designer",
  },
  {
    category: "Operations",
    title: "DevOps Engineer",
    desc: "We're looking for a DevOps engineer to manage infrastructure, CI/CD pipelines, and cloud deployments.",
    tags: [
      { label: "100% remote", icon: "location" },
      { label: "Full-time", icon: "clock" },
    ],
    href: "mailto:hr@nexterse.com?subject=Application: DevOps Engineer",
  },
  {
    category: "Development",
    title: "QA Engineer",
    desc: "We're looking for a QA engineer to own quality across our product builds — manual, automated, and performance testing.",
    tags: [
      { label: "100% remote", icon: "location" },
      { label: "Full-time", icon: "clock" },
    ],
    href: "mailto:hr@nexterse.com?subject=Application: QA Engineer",
  },
  {
    category: "Marketing",
    title: "Digital Marketing Specialist",
    desc: "We're looking for a digital marketer to grow our brand through thoughtful, measurable campaigns.",
    tags: [
      { label: "100% remote", icon: "location" },
      { label: "Full-time", icon: "clock" },
    ],
    href: "mailto:hr@nexterse.com?subject=Application: Digital Marketing Specialist",
  },
  {
    category: "Finance",
    title: "Finance Operations Specialist",
    desc: "We're looking for a finance specialist to support reporting, forecasting, and operational planning.",
    tags: [
      { label: "100% remote", icon: "location" },
      { label: "Full-time", icon: "clock" },
    ],
    href: "mailto:hr@nexterse.com?subject=Application: Finance Operations Specialist",
  },
];

const INITIAL_COUNT = 4;
const CATEGORIES = ["View all", "Development", "Design", "Marketing", "Customer Service", "Operations", "Finance", "Management"];

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1C5.067 1 3.5 2.567 3.5 4.5C3.5 7 7 13 7 13C7 13 10.5 7 10.5 4.5C10.5 2.567 8.933 1 7 1Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <circle cx="7" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ScamAlert() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("View all");

  const filteredJobs = activeCategory === "View all"
    ? JOBS
    : JOBS.filter((job) => job.category === activeCategory);
  const visibleJobs = showAll ? filteredJobs : filteredJobs.slice(0, INITIAL_COUNT);

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>Attention Job Seekers: Beware of scams!</h2>
          <div className={styles.descriptions}>
            <p>
              Official communication for job openings at Nexterse LLC will ONLY be conducted through
              our corporate email:{" "}
              <a href="mailto:hr@nexterse.com" rel="dofollow">
                hr@nexterse.com
              </a>
              . Be cautious of alternative email addresses.
            </p>
            <p>
              Nexterse LLC will NEVER request payment for job applications, secure deposits, or visa
              processing.
            </p>
            <p>Don&rsquo;t share personal or financial information.</p>
          </div>

          {/* Jobs listing replaces the image */}
          <div className={styles.jobsWrap}>
            <div className={styles.filters} aria-label="Filter job openings by department">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`${styles.filterButton} ${activeCategory === category ? styles.filterActive : ""}`}
                  onClick={() => selectCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className={styles.jobList}>
              {visibleJobs.map((job, i) => (
                <div key={i} className={styles.jobRow}>
                  <div className={styles.jobLeft}>
                    <div className={styles.jobTitle}>{job.title}</div>
                    <div className={styles.jobDesc}>{job.desc}</div>
                    <div className={styles.tags}>
                      {job.tags.map((tag, j) => (
                        <span key={j} className={styles.tag}>
                          {tag.icon === "location" ? <LocationIcon /> : <ClockIcon />}
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href={job.href} className={styles.applyLink}>
                    Apply <ArrowUpRight />
                  </a>
                </div>
              ))}
            </div>
            {!showAll && filteredJobs.length > INITIAL_COUNT && (
              <div className={styles.viewMoreWrap}>
                <button className={styles.viewMoreBtn} onClick={() => setShowAll(true)}>
                  View more positions
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
