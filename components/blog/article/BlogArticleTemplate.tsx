import Header from "@/components/Header";
import LetsStart from "@/components/home/LetsStart";
import BlogArticleHero from "./BlogArticleHero";
import BlogArticleLayout from "./BlogArticleLayout";
import BlogContentRenderer from "./BlogContentRenderer";
import BlogFAQSection from "./BlogFAQSection";
import BlogSummarySection from "./BlogSummarySection";
import BlogTagsSection from "./BlogTagsSection";
import RelatedPosts from "./RelatedPosts";
import bodyStyles from "./BlogArticleBody.module.css";
import type { BlogArticleData } from "./types";

// The single template every blog post renders through. A new post is just a
// new BlogArticleData object (see track/blog-template-guide.md) — nothing
// here changes per post.
export default function BlogArticleTemplate({ article }: { article: BlogArticleData }) {
  return (
    <>
      <Header forceSolid />
      <main>
        <BlogArticleLayout contents={article.contents}>
          <BlogArticleHero
            title={article.title}
            categories={article.categories}
            readTime={article.readTime}
            dateDisplay={article.dateDisplay}
            dateISO={article.dateISO}
            heroImage={article.heroImage}
          />
          <div className={bodyStyles.body}>
            <BlogContentRenderer blocks={article.body} />
          </div>
          {/* FAQ/Summary/Tags render outside .body on purpose: they're
              distinct page-template sections (not "article body" content)
              with their own dedicated CSS, and .body's generic h2/h3
              selectors would otherwise out-specificity their styling. */}
          <BlogFAQSection items={article.faq} />
          <BlogSummarySection summary={article.summary} />
          <BlogTagsSection tags={article.tags} />
        </BlogArticleLayout>
        <RelatedPosts currentId={article.relatedId} />
        <LetsStart />
      </main>
    </>
  );
}
