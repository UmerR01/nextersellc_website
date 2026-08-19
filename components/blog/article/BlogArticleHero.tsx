import Image from "next/image";
import styles from "./BlogArticleHero.module.css";
import type { BlogArticleData } from "./types";

type Props = Pick<
  BlogArticleData,
  "title" | "categories" | "readTime" | "dateDisplay" | "dateISO" | "heroImage"
>;

export default function BlogArticleHero({ title, categories, readTime, dateDisplay, dateISO, heroImage }: Props) {
  return (
    <>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <span>{title}</span>
      </nav>

      <div className={styles.categories}>
        {categories.map((cat) => (
          <div key={cat.slug} className={styles.category}>
            <a href={`/blog?category=${cat.slug}`}>{cat.label}</a>
          </div>
        ))}
      </div>

      <div className={styles.titleSection}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.metaLine}>
          <span>{readTime}</span>
          <span className={styles.separator}>|</span>
          <time dateTime={dateISO}>{dateDisplay}</time>
        </p>
      </div>

      <div className={styles.thumbnail}>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          priority
        />
      </div>
    </>
  );
}
