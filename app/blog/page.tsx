import type { Metadata } from "next";
import Header from "@/components/Header";
import BlogPage from "@/components/blog/BlogPage";
import LetsStart from "@/components/home/LetsStart";

const title = "Blog – Valuable Insights | Nexterse LLC";
const description =
  "Read our latest articles on AI, enterprise software development, research, and engineering guides from the Nexterse LLC team.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/blog",
    siteName: "Nexterse LLC",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BlogRoute() {
  return (
    <>
      <Header forceSolid />
      <main>
        <BlogPage />
        <LetsStart />
      </main>
    </>
  );
}
