import Image from "next/image";
import { BLOG_POSTS } from "@/components/blog/blogData";
import styles from "./RelatedPosts.module.css";

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z" stroke="#5E6D8E" strokeWidth="1.5" strokeMiterlimit="10" />
    <path d="M8 4.981V8.481L10.333 10.648" stroke="#5E6D8E" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export default function RelatedPosts({ currentId }: { currentId: string }) {
  const posts = BLOG_POSTS.filter((p) => p.id !== currentId).slice(0, 3);

  return (
    <section className={styles.related}>
      <div className="container">
        <h2 className={styles.title}>
          You might also <span>like</span>
        </h2>
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <a href={post.href} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                  />
                </div>
              </a>
              <div className={styles.content}>
                <div className={styles.categories}>
                  {post.categories.map((cat) => (
                    <a key={cat.slug} href={`/blog?category=${cat.slug}`}>
                      {cat.label}
                    </a>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <div className={styles.meta}>
                  <Image src={post.author.photo} alt={post.author.name} width={40} height={40} className={styles.authorPhoto} />
                  <div className={styles.metaText}>
                    <span>{post.author.name}</span>
                    <span className={styles.metaLine}>
                      <ClockIcon />
                      {post.readTime}
                      <span>| {post.date}</span>
                    </span>
                  </div>
                </div>
              </div>
              <a href={post.href} className={styles.absoluteLink} aria-label={post.title} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
