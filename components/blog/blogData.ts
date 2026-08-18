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
    href: "#",
    image: "/blog/06_The-AI-Cost-Spiral-7-Hidden-Drivers.jpg",
    imageAlt: "The AI Cost Spiral - 7 Hidden Drivers",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Enterprise", slug: "enterprise" },
      { label: "Guides", slug: "guides" },
    ],
    title: "The AI Cost Reduction Playbook – 9 Mechanisms, 7 Hidden Drivers, and Real-World Case Studies (2026 Edition)",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "32 mins",
    date: "July 1, 2026",
  },
  {
    id: "252495",
    href: "/blog/how-to-modernize-legacy-systems-with-custom-ai",
    image: "/blog/06_Modernization-Stat-Band.svg",
    imageAlt: "Cost + AI-blocker stat band",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Enterprise", slug: "enterprise" },
    ],
    title: "How to modernize legacy systems with custom AI",
    author: { name: "Kirill Funtikov", photo: "/blog/08_kirill-96x96.jpg", href: "#" },
    readTime: "26 mins",
    date: "June 24, 2026",
  },
  {
    id: "3547",
    href: "#",
    image: "/blog/04_Release-Readiness-Framework.svg",
    imageAlt: "Release Readiness Framework",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Guides", slug: "guides" },
      { label: "Development", slug: "development" },
    ],
    title: "How to Deliver Software on Time with Agile and Release Planning in the AI Era",
    author: { name: "Kirill Funtikov", photo: "/blog/08_kirill-96x96.jpg", href: "#" },
    readTime: "18 mins",
    date: "June 22, 2026",
  },
  {
    id: "251926",
    href: "#",
    image: "/blog/06_Pilot-to-Production-Ladder.svg",
    imageAlt: "Pilot-to-Production Ladder",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Enterprise", slug: "enterprise" },
      { label: "Guides", slug: "guides" },
    ],
    title: "From Pilot to Production: Why Enterprise AI Stalls. The Framework to Scale It (2026)",
    author: { name: "Yury Shamrei", photo: "/blog/12_Yury-Shamrey-96x96.png", href: "#" },
    readTime: "31 mins",
    date: "June 16, 2026",
  },
  {
    id: "250436",
    href: "#",
    image: "/blog/06_Forecast-LLM-spend-before-you-build-v2.jpg",
    imageAlt: "Forecast LLM spend before you build",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Guides", slug: "guides" },
    ],
    title: "AI Token Cost Calculation: A Pricing-Independent Framework for Forecasting LLM Spend (2026)",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "33 mins",
    date: "June 10, 2026",
  },
  {
    id: "251002",
    href: "#",
    image: "/blog/06_Research-AI-adoption-success-cases-in-enterprises.jpg",
    imageAlt: "Research AI adoption success cases in enterprises",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Research", slug: "research" },
      { label: "Enterprise", slug: "enterprise" },
    ],
    title: "AI Adoption in Enterprises: 16 Success Cases and the KPIs They Improved in 2026 [Research]",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "39 mins",
    date: "June 8, 2026",
  },
  {
    id: "245049",
    href: "#",
    image: "/blog/05_What-Is-ADLC-Agentic-Development-Lifecycle_.png",
    imageAlt: "What Is ADLC (Agentic Development Lifecycle)",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Guides", slug: "guides" },
    ],
    title: "What Is ADLC? A 2026 Guide to Governing Probabilistic AI Systems",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "34 mins",
    date: "May 12, 2026",
  },
  {
    id: "244119",
    href: "#",
    image: "/blog/04_Research-on-AI-Readiness-How-Companies-Move-from-Pilots-to-Production.png",
    imageAlt: "Research on AI Readiness How Companies Move from Pilots to Production",
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Research", slug: "research" },
    ],
    title: "AI Readiness: How Companies Move from AI Pilots to Production in 2026 [Research]",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "40 mins",
    date: "April 29, 2026",
  },
  {
    id: "68545",
    href: "#",
    image: "/blog/03_24-hour-estimation.jpg",
    imageAlt: "24-hour estimation",
    categories: [
      { label: "Enterprise", slug: "enterprise" },
      { label: "Startups", slug: "startups" },
      { label: "Guides", slug: "guides" },
      { label: "Development", slug: "development" },
    ],
    title: "Software Development Cost Estimation: Methods, Accuracy & Real Costs",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "19 mins",
    date: "March 28, 2026",
  },
  {
    id: "236859",
    href: "#",
    image: "/blog/11_A-Practical-Framework-for-Quantifying-IoT-Return-on-Investment-ROI.png",
    imageAlt: "A Practical Framework for Quantifying AI Return on Investment (ROI)",
    categories: [
      { label: "Research", slug: "research" },
      { label: "AI", slug: "ai" },
      { label: "Enterprise", slug: "enterprise" },
    ],
    title: "AI ROI in 2026: Payback Benchmarks and a Quantification Framework from 36 Deployments [Research]",
    author: { name: "Yury Shamrei", photo: "/blog/12_Yury-Shamrey-96x96.png", href: "#" },
    readTime: "34 mins",
    date: "March 17, 2026",
  },
  {
    id: "972",
    href: "#",
    image: "/blog/03_6061ffdfeab8019f2be1dea0_whitepapers-6000-×-4000px-Google-Chrome_210329192642.png",
    imageAlt: "Programmer coding at desk with dual monitors",
    categories: [{ label: "Development", slug: "development" }],
    title: "Explained by Experts: 18 Types of Software Developers Roles",
    author: { name: "Katerina Merzlova", photo: "/blog/06_Katerina-Merzlova-min-96x96.jpeg", href: "#" },
    readTime: "11 mins",
    date: "March 14, 2026",
  },
  {
    id: "59414",
    href: "#",
    image: "/blog/03_620a29a10fa8775fa6a7293d_thumbnails-website-15-min-1.png",
    imageAlt: 'The neon light "everything is connected"',
    categories: [
      { label: "AI", slug: "ai" },
      { label: "Enterprise", slug: "enterprise" },
      { label: "Development", slug: "development" },
    ],
    title: "The Advantages of Applied AI: Business Benefits in 2026",
    author: { name: "Yury Shamrei", photo: "/blog/12_Yury-Shamrey-96x96.png", href: "#" },
    readTime: "15 mins",
    date: "March 12, 2026",
  },
];

export const CATEGORIES = [
  { label: "All", slug: "" },
  { label: "Research", slug: "research" },
  { label: "AI", slug: "ai" },
  { label: "Enterprise", slug: "enterprise" },
  { label: "Startups", slug: "startups" },
  { label: "Guides", slug: "guides" },
  { label: "Development", slug: "development" },
  { label: "Nexterse LLC", slug: "nexterse" },
];
