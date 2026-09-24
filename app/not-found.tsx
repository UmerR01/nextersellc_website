import type { Metadata } from "next";
import Header from "@/components/Header";
import styles from "./not-found.module.css";

// Next.js renders this for any unmatched route (and wherever notFound() is
// called, e.g. app/blog/[slug]/page.tsx) with a real 404 status — a
// deliberate choice over auto-redirecting to "/", which Google flags as a
// "soft 404" and which silently hides a bad link's actual behavior from
// visitors and analytics alike. See track/not-found-page.md.
export const metadata: Metadata = {
  title: "Page not found | Nexterse LLC",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header forceSolid />
      <main className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>We couldn&rsquo;t find that page</h1>
          <p className={styles.desc}>
            The link may be outdated, or the page may have moved. Let&rsquo;s get you back on track.
          </p>
          <div className={styles.actions}>
            <a href="/" className="btn btn-accent">Back to homepage</a>
            <a href="/contact-us" className={styles.secondaryLink}>Contact us</a>
          </div>
        </div>
      </main>
    </>
  );
}
