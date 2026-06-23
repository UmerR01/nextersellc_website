import Image from "next/image";
import styles from "./Stories.module.css";

/** Awesome stories — pixel-perfect replica of Sumatosoft blog-section:
 *  - White background (#fff), padding 96px 0 40px
 *  - Title "stories" in blue
 *  - Left col: feature post — 56.21% aspect-ratio image, 28px/36px title in black → red on hover
 *  - Right col: 3 text-only posts + "All articles" link, 62px left padding
 *  - Meta: clock SVG + | + date, 16px/#5e6d8e
 */

const FEATURE_POST = {
  title: "From Pilot to Production: Why Enterprise AI Stalls. The Framework to Scale It (2026)",
  image: "/stories/pilot.svg",
  read: "31 mins",
  date: "June 16, 2026",
  href: "#",
};

const SIDE_POSTS = [
  {
    title: "AI Token Cost Calculation: A Pricing-Independent Framework for Forecasting LLM Spend (2026)",
    read: "31 mins",
    date: "June 10, 2026",
    href: "#",
  },
  {
    title: "AI Adoption in Enterprises: 16 Success Cases and the KPIs They Improved in 2026 [Research]",
    read: "39 mins",
    date: "June 8, 2026",
    href: "#",
  },
  {
    title: "What Is ADLC? A 2026 Guide to Governing Probabilistic AI Systems",
    read: "34 mins",
    date: "May 12, 2026",
    href: "#",
  },
];

/** Clock SVG — exact copy from Sumatosoft blog-section__post-read-time */
function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
        stroke="#5E6D8E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M8 4.98108V8.48108L10.3333 10.6477"
        stroke="#5E6D8E"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function PostMeta({ read, date }: { read: string; date: string }) {
  return (
    <div className={styles.meta}>
      <span className={styles.readTime}>
        <ClockIcon />
        {read}
      </span>
      <span className={styles.metaSep}>|</span>
      <span>{date}</span>
    </div>
  );
}

export default function Stories() {
  return (
    <section className={styles.section} id="insights-blog">
      <div className="container">
        {/* "We have awesome stories to tell you" */}
        <h2 className={styles.title}>
          We have awesome{" "}
          <span className={styles.titleAccent}>stories</span> to tell you
        </h2>

        <div className={styles.grid}>
          {/* ─── Left col: feature post with image ─── */}
          <a href={FEATURE_POST.href} className={styles.feature}>
            {/* 56.21% aspect-ratio image container — matches .blog-section__post-image */}
            <div className={styles.featureImage}>
              <div className={styles.featureImageWrapper}>
                <Image
                  src={FEATURE_POST.image}
                  alt={FEATURE_POST.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.featureTitle}>{FEATURE_POST.title}</div>
            <PostMeta read={FEATURE_POST.read} date={FEATURE_POST.date} />
          </a>

          {/* ─── Right col: sidebar text posts ─── */}
          <div className={styles.sidebar}>
            {SIDE_POSTS.map((post) => (
              <a key={post.title} href={post.href} className={styles.sidePost}>
                <div className={styles.sideTitle}>{post.title}</div>
                <PostMeta read={post.read} date={post.date} />
              </a>
            ))}

            <div className={styles.allLinkWrap}>
              <a href="#" className={styles.allLink}>
                All articles ›
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
