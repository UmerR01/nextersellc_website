import Link from "next/link";
import type { CareerJob } from "@/data/careerJobs";
import JobApplicationForm from "./JobApplicationForm";
import styles from "./JobDetailPage.module.css";

export default function JobDetailPage({ job }: { job: CareerJob }) {
  return (
    <section className={styles.page}>
      <div className={styles.shell}>
        <article className={styles.description}>
          <Link href="/careers" className={styles.backLink} aria-label="Back to careers">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            <span>{job.title}</span>
          </Link>

          <p className={styles.summary}>{job.summary}</p>

          {job.sections.map((section) => (
            <section className={styles.copySection} key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>
                      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className={styles.jobDetails}>
            <h2>Job details</h2>
            <dl>
              <div>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7V5h6v2M4 9h16v10H4V9Zm0 4h16M10 13v2h4v-2" /></svg>
                <dt>Job type</dt>
                <dd>{job.employmentType}</dd>
              </div>
              <div>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18v11H3V7Zm3-3h12v3H6V4Zm6 6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" /></svg>
                <dt>Pay</dt>
                <dd>{job.pay}</dd>
              </div>
              <div>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.1 7-12A7 7 0 1 0 5 9c0 5.9 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>
                <dt>Location</dt>
                <dd>{job.location}</dd>
              </div>
            </dl>
          </section>
        </article>

        <JobApplicationForm jobTitle={job.title} />
      </div>
    </section>
  );
}
