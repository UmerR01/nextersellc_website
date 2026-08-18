import Image from "next/image";
import styles from "./BlogArticleHero.module.css";

const TITLE = "How to modernize legacy systems with custom AI";
const CATEGORIES = [
  { label: "AI", slug: "ai" },
  { label: "Enterprise", slug: "enterprise" },
];

export default function BlogArticleHero() {
  return (
    <>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <span>{TITLE}</span>
      </nav>

      <div className={styles.categories}>
        {CATEGORIES.map((cat) => (
          <div key={cat.slug} className={styles.category}>
            <a href={`/blog?category=${cat.slug}`}>{cat.label}</a>
          </div>
        ))}
      </div>

      <div className={styles.titleSection}>
        <h1 className={styles.title}>{TITLE}</h1>

        <div className={styles.authorInfo}>
          <div className={styles.authorInfoInitials}>
            <div className={styles.author}>
              <div className={styles.authorPhoto}>
                <Image src="/blog/08_kirill-96x96.jpg" alt="Kirill Funtikov" width={48} height={48} />
              </div>
              <div className={styles.authorData}>
                <div className={styles.authorName}>Kirill Funtikov</div>
                <span className={styles.jobTitle}>R&amp;D Lead</span>
              </div>
            </div>
          </div>
          <div className={styles.authorInfoDate}>
            <p className={styles.metaLine}>
              <span>26 mins</span>
              <span className={styles.separator}>|</span>
              <time dateTime="2026-06-24">June 24, 2026</time>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.thumbnail}>
        <Image
          src="/blog/08_How-to-modernize-legacy-systems-with-custom-AI.svg"
          alt="Legacy modernization with custom AI cover illustration"
          width={1600}
          height={900}
          priority
        />
      </div>
    </>
  );
}
