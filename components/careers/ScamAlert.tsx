"use client";
import { useEffect, useRef, useState } from "react";
import FilterIcon from "@/components/helpers/FilterIcon";
import SelectDropdown from "@/components/helpers/SelectDropdown";
import { getCareerJobs } from "@/data/careerJobs";
import styles from "./ScamAlert.module.css";

const JOB_LISTING_ORDER = [
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
    href: "/careers/full-stack-developer",
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

const JOB_DETAILS = new Map(getCareerJobs().map((job) => [job.title, job]));
const JOBS = JOB_LISTING_ORDER.map((listing) => {
  const job = JOB_DETAILS.get(listing.title);
  if (!job) return listing;
  return {
    category: job.category,
    title: job.title,
    desc: job.summary,
    tags: [
      { label: job.location, icon: "location" },
      { label: job.employmentType, icon: "clock" },
    ],
    href: `/careers/${job.slug}`,
  };
});

const INITIAL_COUNT = 4;
const TYPES = ["All types", "Remote", "On-site"];
const LOCATIONS = ["All locations", "Lahore", "Islamabad", "Karachi"];
const ROLES = ["All roles", "Development", "Design", "Marketing", "Customer Service", "Operations", "Finance", "Management"];

type JobFilters = {
  type: string;
  location: string;
  role: string;
};

const EMPTY_FILTERS: JobFilters = {
  type: "All types",
  location: "All locations",
  role: "All roles",
};

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
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<JobFilters>(EMPTY_FILTERS);
  const [draftFilters, setDraftFilters] = useState<JobFilters>(EMPTY_FILTERS);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) setFilterOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFilterOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const normalizedSearch = search.trim().toLowerCase();
  const filteredJobs = JOBS.filter((job) => {
    const location = job.tags.find((tag) => tag.icon === "location")?.label ?? "";
    const type = job.tags.find((tag) => tag.icon === "clock")?.label ?? "";
    const matchesSearch = !normalizedSearch || `${job.title} ${job.desc} ${job.category}`.toLowerCase().includes(normalizedSearch);
    const matchesType = filters.type === "All types" || type === filters.type;
    const matchesLocation = filters.location === "All locations" || location === filters.location;
    const matchesRole = filters.role === "All roles" || job.category === filters.role;
    return matchesSearch && matchesType && matchesLocation && matchesRole;
  });
  const visibleJobs = showAll ? filteredJobs : filteredJobs.slice(0, INITIAL_COUNT);
  const activeFilterCount = Object.entries(filters).filter(([key, value]) => value !== EMPTY_FILTERS[key as keyof JobFilters]).length;

  const resetFilters = () => {
    setDraftFilters(EMPTY_FILTERS);
    setFilters(EMPTY_FILTERS);
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
            <div className={styles.searchToolbar}>
              <label className={styles.searchBox}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /></svg>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => { setSearch(event.target.value); setShowAll(false); }}
                  placeholder="Search jobs"
                  aria-label="Search job openings"
                />
              </label>

              <div className={styles.filterControl} ref={filterRef}>
                <button
                  type="button"
                  className={`${styles.filterTrigger} ${filterOpen ? styles.filterTriggerActive : ""}`}
                  onClick={() => { setDraftFilters(filters); setFilterOpen((open) => !open); }}
                  aria-expanded={filterOpen}
                  aria-haspopup="dialog"
                >
                  <FilterIcon />
                  Filter {activeFilterCount > 0 && <span>{activeFilterCount}</span>}
                </button>

                {filterOpen && (
                  <div className={styles.filterPanel} role="dialog" aria-label="Filter job openings">
                    <div className={styles.filterPanelHead}>
                      <strong>Filter jobs</strong>
                      <button type="button" onClick={() => setFilterOpen(false)} aria-label="Close filters">×</button>
                    </div>

                    <div className={styles.filterFields}>
                      <SelectDropdown label="Type" options={TYPES} value={draftFilters.type} onChange={(type) => setDraftFilters((current) => ({ ...current, type }))} />
                      <SelectDropdown label="Location" options={LOCATIONS} value={draftFilters.location} onChange={(location) => setDraftFilters((current) => ({ ...current, location }))} />
                      <SelectDropdown label="Role" options={ROLES} value={draftFilters.role} onChange={(role) => setDraftFilters((current) => ({ ...current, role }))} />
                    </div>

                    <div className={styles.filterActions}>
                      <button type="button" className={styles.resetButton} onClick={resetFilters}>Reset</button>
                      <button
                        type="button"
                        className={styles.applyFilterButton}
                        onClick={() => { setFilters(draftFilters); setShowAll(false); setFilterOpen(false); }}
                      >
                        Apply filters
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
            {filteredJobs.length === 0 && (
              <div className={styles.emptyJobs}>No openings match your search and filters.</div>
            )}
            {!showAll && filteredJobs.length > INITIAL_COUNT && (
              <div className={styles.viewMoreWrap}>
                <button className={`btn btn-outline ${styles.viewMoreBtn}`} onClick={() => setShowAll(true)}>
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
