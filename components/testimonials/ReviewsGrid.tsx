import Link from "next/link";
import { REVIEWS } from "./reviewsData";
import styles from "./ReviewsGrid.module.css";

export default function ReviewsGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.reviews}>
          {REVIEWS.map((r, i) => (
            <div key={i} className={styles.review}>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: r.text }}
              />
              <div className={styles.author}>
                {r.photo && (
                  <img
                    src={r.photo}
                    alt={r.name}
                    className={styles.authorPhoto}
                    loading="lazy"
                    width={144}
                    height={144}
                  />
                )}
                {r.logo && (
                  <img
                    src={r.logo}
                    alt={r.name}
                    className={styles.authorLogo}
                    loading="lazy"
                    width={172}
                    height={72}
                  />
                )}
                <div className={styles.authorData}>
                  <div className={styles.authorName}>{r.name}</div>
                  <div className={styles.authorPosition}>{r.position}</div>
                  {r.caseStudy && (
                    <Link href={r.caseStudy} className={styles.linkPrimary}>
                      View case study
                      <span className={styles.linkArrow} />
                    </Link>
                  )}
                </div>
              </div>
              {r.caseStudy && (
                <Link href={r.caseStudy} className={`${styles.linkPrimary} ${styles.linkMobile}`}>
                  View case study
                  <span className={styles.linkArrow} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
