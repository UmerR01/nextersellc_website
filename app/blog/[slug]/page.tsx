import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleTemplate from "@/components/blog/article/BlogArticleTemplate";
import { ARTICLES, getArticleBySlug } from "@/components/blog/article/articles";
import { BLOG_POSTS } from "@/components/blog/blogData";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `/blog/${article.slug}`;
  const title = `${article.title} | Nexterse LLC`;

  return {
    title,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description: article.metaDescription,
      url,
      siteName: "Nexterse LLC",
      publishedTime: article.dateISO,
      images: [{ url: article.heroImage.src, width: article.heroImage.width, height: article.heroImage.height, alt: article.heroImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.metaDescription,
      images: [article.heroImage.src],
    },
  };
}

export default async function BlogArticleRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const author = BLOG_POSTS.find((p) => p.id === article.relatedId)?.author;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    image: [article.heroImage.src],
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: author ? { "@type": "Person", name: author.name } : { "@type": "Organization", name: "Nexterse LLC" },
    publisher: {
      "@type": "Organization",
      name: "Nexterse LLC",
      logo: { "@type": "ImageObject", url: "/brand/nexters_logo_blue.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `/blog/${article.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogArticleTemplate article={article} />
    </>
  );
}
