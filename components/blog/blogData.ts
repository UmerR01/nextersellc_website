export interface BlogPost {
  id: string;
  href: string;
  image: string;
  imageAlt: string;
  categories: { label: string; slug: string }[];
  title: string;
  author: { name: string; photo: string; href: string };
  readTime: string;
  date: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "253023",
    href: "/blog/ai-cost-reduction-playbook",
    image: "/blog/ai-cost-reduction-playbook.jpg",
    imageAlt: "The AI Cost Reduction Playbook",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Enterprise", slug: "enterprise" },
      { label: "Guides", slug: "guides" },
    ],
    title: "The AI Cost Reduction Playbook – 9 Mechanisms, 7 Hidden Drivers, and Real-World Case Studies (2026 Edition)",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "13 mins",
    date: "July 1, 2026",
  },
  {
    id: "252495",
    href: "/blog/how-to-modernize-legacy-systems-with-custom-ai",
    image: "/blog/how-to-modernize-legacy-systems-with-custom-ai.jpg",
    imageAlt: "How to modernize legacy systems with custom AI",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Enterprise", slug: "enterprise" },
    ],
    title: "How to modernize legacy systems with custom AI",
    author: { name: "Kirill Funtikov", photo: "/blog/08_kirill-96x96.jpg", href: "#" },
    readTime: "20 mins",
    date: "June 24, 2026",
  },
  {
    id: "3547",
    href: "/blog/deliver-software-on-time-agile-release-planning-ai-era",
    image: "/blog/deliver-software-on-time-agile-release-planning-ai-era.jpg",
    imageAlt: "How to Deliver Software on Time with Agile and Release Planning in the AI Era",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Guides", slug: "guides" },
      { label: "Development", slug: "development" },
    ],
    title: "How to Deliver Software on Time with Agile and Release Planning in the AI Era",
    author: { name: "Kirill Funtikov", photo: "/blog/08_kirill-96x96.jpg", href: "#" },
    readTime: "10 mins",
    date: "June 22, 2026",
  },
  {
    id: "251926",
    href: "/blog/from-pilot-to-production-why-enterprise-ai-stalls",
    image: "/blog/from-pilot-to-production-why-enterprise-ai-stalls.jpg",
    imageAlt: "From Pilot to Production: Why Enterprise AI Stalls",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Enterprise", slug: "enterprise" },
      { label: "Guides", slug: "guides" },
    ],
    title: "From Pilot to Production: Why Enterprise AI Stalls. The Framework to Scale It (2026)",
    author: { name: "Yury Shamrei", photo: "/blog/12_Yury-Shamrey-96x96.png", href: "#" },
    readTime: "11 mins",
    date: "June 16, 2026",
  },
  {
    id: "250436",
    href: "/blog/ai-token-cost-calculation-framework",
    image: "/blog/ai-token-cost-calculation-framework.jpg",
    imageAlt: "AI Token Cost Calculation Framework",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Guides", slug: "guides" },
    ],
    title: "AI Token Cost Calculation: A Pricing-Independent Framework for Forecasting LLM Spend (2026)",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "10 mins",
    date: "June 10, 2026",
  },
  {
    id: "251002",
    href: "/blog/ai-adoption-enterprises-success-cases-kpis",
    image: "/blog/ai-adoption-enterprises-success-cases-kpis.jpg",
    imageAlt: "AI Adoption in Enterprises: Success Cases and KPIs",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Research", slug: "research" },
      { label: "Enterprise", slug: "enterprise" },
    ],
    title: "AI Adoption in Enterprises: 16 Success Cases and the KPIs They Improved in 2026 [Research]",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "9 mins",
    date: "June 8, 2026",
  },
  {
    id: "245049",
    href: "/blog/what-is-adlc-agentic-development-lifecycle",
    image: "/blog/what-is-adlc-agentic-development-lifecycle.jpg",
    imageAlt: "What Is ADLC? Agentic Development Lifecycle",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Guides", slug: "guides" },
    ],
    title: "What Is ADLC? A 2026 Guide to Governing Probabilistic AI Systems",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "10 mins",
    date: "May 12, 2026",
  },
  {
    id: "244119",
    href: "/blog/ai-readiness-pilots-to-production-research",
    image: "/blog/ai-readiness-pilots-to-production-research.jpg",
    imageAlt: "AI Readiness: How Companies Move from Pilots to Production",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Research", slug: "research" },
    ],
    title: "AI Readiness: How Companies Move from AI Pilots to Production in 2026 [Research]",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "10 mins",
    date: "April 29, 2026",
  },
  {
    id: "68545",
    href: "/blog/software-development-cost-estimation-methods",
    image: "/blog/software-development-cost-estimation-methods.jpg",
    imageAlt: "Software Development Cost Estimation",
    categories: [
      { label: "Enterprise", slug: "enterprise" },
      { label: "Startups", slug: "startups" },
      { label: "Guides", slug: "guides" },
      { label: "Development", slug: "development" },
    ],
    title: "Software Development Cost Estimation: Methods, Accuracy & Real Costs",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "8 mins",
    date: "March 28, 2026",
  },
  {
    id: "236859",
    href: "/blog/ai-roi-2026-payback-benchmarks",
    image: "/blog/ai-roi-2026-payback-benchmarks.jpg",
    imageAlt: "AI ROI in 2026: Payback Benchmarks",
    categories: [
      { label: "Research", slug: "research" },
      { label: "AI", slug: "ai" },
      { label: "Enterprise", slug: "enterprise" },
    ],
    title: "AI ROI in 2026: Payback Benchmarks and a Quantification Framework from 36 Deployments [Research]",
    author: { name: "Yury Shamrei", photo: "/blog/12_Yury-Shamrey-96x96.png", href: "#" },
    readTime: "7 mins",
    date: "March 17, 2026",
  },
  {
    id: "972",
    href: "/blog/types-of-software-developer-roles-explained",
    image: "/blog/18-software-developer-roles.png",
    imageAlt: "Explained by Experts: 18 Types of Software Developers Roles",
    categories: [{ label: "Development", slug: "development" }],
    title: "Explained by Experts: 18 Types of Software Developers Roles",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "10 mins",
    date: "March 14, 2026",
  },
  {
    id: "59414",
    href: "/blog/advantages-of-applied-ai-business-benefits",
    image: "/blog/advantages-of-applied-ai-business-benefits.jpg",
    imageAlt: "The Advantages of Applied AI: Business Benefits",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Enterprise", slug: "enterprise" },
      { label: "Development", slug: "development" },
    ],
    title: "The Advantages of Applied AI: Business Benefits in 2026",
    author: { name: "Yury Shamrei", photo: "/blog/12_Yury-Shamrey-96x96.png", href: "#" },
    readTime: "7 mins",
    date: "March 12, 2026",
  },
];

// Filter tags shown on the blog listing page — derived from the categories
// actually used by a published post, so a category never appears as a
// filter option unless at least one real post has it.
function usedCategories(): { label: string; slug: string }[] {
  const seen = new Map<string, string>();
  for (const post of BLOG_POSTS) {
    for (const cat of post.categories) {
      if (!seen.has(cat.slug)) seen.set(cat.slug, cat.label);
    }
  }
  return Array.from(seen, ([slug, label]) => ({ label, slug }));
}

export const CATEGORIES = [{ label: "All", slug: "" }, ...usedCategories()];
