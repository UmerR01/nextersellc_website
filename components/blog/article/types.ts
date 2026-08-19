// Shared data schema for the blog article template. A "blog article" is pure
// data (this shape) — BlogArticleTemplate.tsx turns it into the page. Adding
// a new blog post never means touching a template component, only adding a
// new file that exports one of these objects. See track/blog-template-guide.md
// for the full walkthrough.

// A run of text within a paragraph/list item. No `href` field exists anywhere
// in this schema on purpose — it is structurally impossible to add a working
// link inside article content. `highlight` is the only "make this stand out"
// tool content authors have.
export interface RichSpan {
  text: string;
  bold?: boolean;
  italic?: boolean;
  highlight?: boolean;
}

export type RichText = RichSpan[];

export type ContentBlock =
  | { type: "heading"; level: 2 | 3 | 4; id?: string; text: string }
  | { type: "paragraph"; text: RichText }
  // The "underline more detail" callout paragraph: a bold+underlined lead
  // term/phrase followed by the rest of the sentence in normal body text.
  | { type: "detail"; lead: string; text: RichText }
  // Bulleted list rendered with the accent tick-mark icon instead of a dot.
  | { type: "tick-list"; items: RichText[] }
  // Ordered list rendered with visible numbers (1, 2, 3…).
  | { type: "numbered-list"; items: RichText[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "divider" };

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogArticleData {
  /** URL slug — the page renders at /blog/{slug} */
  slug: string;
  /** id of the matching entry in components/blog/blogData.ts, for the
   *  "You might also like" rail (that file is the /blog listing's source of
   *  truth for card metadata; this template reuses it rather than duplicating
   *  title/image/category data twice). */
  relatedId: string;

  title: string;
  metaDescription: string;
  categories: { label: string; slug: string }[];
  readTime: string;
  /** Human-readable date shown on the page, e.g. "June 24, 2026" */
  dateDisplay: string;
  /** Machine date for <time datetime>, e.g. "2026-06-24" */
  dateISO: string;

  heroImage: { src: string; alt: string; width: number; height: number };

  /** Sidebar "Contents" links — must match the `id`s used on your `heading` blocks. */
  contents: { href: string; label: string }[];

  body: ContentBlock[];
  faq: FaqItem[];
  summary: RichText;
  /** Keyword pills shown under the Summary. Not clickable — see the no-links rule. */
  tags: string[];
}
