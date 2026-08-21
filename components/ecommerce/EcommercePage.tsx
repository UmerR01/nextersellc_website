"use client";

import { useState } from "react";
import Image from "next/image";
import CaseCards from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";
import ArticleLayout from "@/components/shared/ArticleLayout";
import styles from "./EcommercePage.module.css";

// ─── Why choose (results) ─────────────────────────────────────────────────────
const WHY_POINTS = [
  "We offer strong eCommerce expertise backed by successful projects.",
  "Since 2020, we've implemented over 250 solutions for Clients in 25+ countries.",
  "Nexterse LLC is recognized as one of the top eCommerce developers in the US.",
  "70% of our employees are senior-grade engineers.",
  "Techreviewer ratings note our experience in Shopify development and migrations.",
  "Our Clients include Toyota, Beiersdorf, Cornerstone OnDemand, Dexai Robotics, and other international companies.",
  "We strive to be a long-term technology partner for our Clients.",
];

// ─── Services (6 cards) ───────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: "/ecommerce-development/02_eCommerce-cart.svg",
    title: "Custom eCommerce development from scratch",
    intro: "When standard platforms are no longer sufficient, we do the following for you:",
    bullets: [
      "Identify business goals, budget, time constraints, and the specifics of your market.",
      "Develop the catalog structure, shopping cart, promotional mechanics, taxes, shipping, and user roles.",
      "Create an architecture that enables product development.",
    ],
  },
  {
    icon: "/ecommerce-development/03_Analyze-data.svg",
    title: "Existing eCommerce solution audit",
    intro: "We analyze your current store or marketplace at every level: code, architecture, security, UX, and performance to:",
    bullets: [
      "Identify bottlenecks, technical debt, and security and crash risks.",
      "Prepare a report with specific recommendations and prioritization.",
      "Separately assess where it's more profitable to fix and where it's easier to rewrite a block or module.",
    ],
  },
  {
    icon: "/ecommerce-development/01_Native-mobile-app-development-1.svg",
    title: "Mobile eCommerce applications",
    intro: "We develop mobile applications for iOS and Android for online stores and marketplaces that:",
    bullets: [
      "Facilitate one-handed purchases, quick repeat orders, push notifications, and saved carts.",
      "Have integrations with your existing website or create a unified backend for all channels.",
      "We support store releases and user behavior analytics.",
    ],
  },
  {
    icon: "/ecommerce-development/02_Hardware-prototype-development.svg",
    title: "Redesign and modernization of eCommerce platforms",
    intro: "We update legacy stores to improve conversion and assist marketing with:",
    bullets: [
      "New UX logic for the catalog, filters, search, cards, cart, and checkout.",
      "Backend optimization: queries, cache, integrations, and database operations.",
      "Maintenance of SEO rankings and minimization of the risk of organic traffic decline.",
    ],
  },
  {
    icon: "/ecommerce-development/02_Frontend-Backend-Development.svg",
    title: "eCommerce integrations with internal systems",
    intro: "We connect your online store with your internal systems, payment providers, and delivery services so data stays in sync:",
    bullets: [
      "Synchronization of orders, inventory, prices, and delivery statuses.",
      "Integrations are made fault-tolerant, with logging and clear alerts.",
      "Backup scenarios in case of external service failures.",
    ],
  },
  {
    icon: "/ecommerce-development/02_Human-resource-management.svg",
    title: "Support and development of eCommerce solutions",
    intro: "We provide post-release and post-migration support by:",
    bullets: [
      "Fixing bugs, optimizing performance, and adding functionality in accordance with the agreed-upon backlog.",
      "Assisting marketing with experiments: A/B tests, promotional mechanics, and new storefront options.",
      "We work as a dedicated team or on a fixed-hours basis.",
    ],
  },
];

// ─── Platforms (3 horizontal tabs) ────────────────────────────────────────────
const PLATFORM_TABS = [
  {
    icon: "/ecommerce-development/08_customization-1.svg",
    label: "Custom eCommerce solutions",
    title: "Custom eCommerce solutions",
    image: "/ecommerce-development/ecommerce.jpg",
    desc: "We build custom eCommerce solutions using Ruby on Rails, Node.js, React, Vue, and other modern stacks, choosing the right one for each task. A custom approach is justified when non-standard logic, complex integrations, and high loads are required. We carefully consider the cost of ownership to ensure the architecture is not overly complex.",
  },
  {
    icon: "/ecommerce-development/02_Shopify.svg",
    label: "Shopify and Shopify Plus",
    title: "Shopify and Shopify Plus",
    image: "/ecommerce-development/shopify.jpg",
    desc: "Nexterse LLC is one of the top Shopify developers in the US and other regions, according to Techreviewer. We create custom themes, apps, integrations, and migrations from other platforms. Mid-market companies employ us to migrate to Shopify Plus without losing data or SEO. We set up payments, taxes, logistics, and reporting, taking into account business and market requirements.",
  },
  {
    icon: "/ecommerce-development/02_eCommerce-cart.svg",
    label: "More platforms and ecosystems",
    title: "More platforms and ecosystems",
    image: "/ecommerce-development/platform-eco.jpg",
    desc: "We work with BigCommerce, WooCommerce, and a range of less common solutions. Our evaluations are always honest about when it makes sense to improve an existing platform and when it's cheaper to migrate. We integrate eCommerce with Salesforce and other enterprise systems, and we review the overall integration architecture.",
  },
];

// ─── Solutions (6 dark cards) ─────────────────────────────────────────────────
const SOLUTIONS = [
  {
    title: "B2C online stores",
    intro: "Stores for brands and online retailers targeting consumers.",
    bullets: [
      "We focus on search, filters, promotional features, checkout speed, and mobile experience.",
      "We take into account taxes, cross-state shipping, and local market specifics.",
    ],
  },
  {
    title: "B2B portals and wholesale accounts",
    intro: "B2B portals for manufacturers, distributors, and wholesalers.",
    bullets: [
      "We implement account roles, order approvals, customized price lists, and catalogs.",
      "We develop complex pricing models, credit limits, and payment terms.",
      "We create user-friendly interfaces for managers.",
    ],
  },
  {
    title: "Marketplaces for small and medium businesses",
    intro: "Such marketplaces as SellBig, a platform where small businesses sell within the US and internationally.",
    bullets: [
      "We set up seller onboarding, moderation, storefronts, and sales analytics.",
      "We implement chatting between sellers and buyers, returns, disputes, and reports for administrators.",
      "We provide a flexible, manageable catalog, banner areas, and SEO settings for categories and cards.",
    ],
  },
  {
    title: "eCommerce for food delivery and on-demand services",
    intro: "Sous Kitchen is an example of a home-cooked food service that we migrated to a new platform.",
    bullets: [
      "We know how to account for time slots, delivery zones, and kitchen schedules.",
      "We build routing, order statuses, notifications, and bonus programs.",
      "We create dashboards for the kitchen, couriers, and support staff so that all participants can see up-to-date data.",
    ],
  },
  {
    title: "eCommerce within content and service portals",
    intro: "Portals such as Hauz, which is an interior design website where users explore ideas and buy products immediately.",
    bullets: [
      "We can connect content, product catalogs, and service provider selection in a single solution. This approach is suitable for niche media, service marketplaces, and educational platforms.",
      "eCommerce becomes part of the ecosystem, rather than a separate website.",
    ],
  },
  {
    title: "Social commerce and mobile storefronts",
    intro: "Solutions that connect purchases and user social behavior.",
    bullets: [
      "We add feeds, favorites, reviews, collections, and mechanisms for influencer and recommendations.",
      "We consider which triggers and events are essential to track for marketing and product analytics.",
      "We immediately establish a unified user profile between the website and the app.",
    ],
  },
];

// ─── Process (7 steps) ────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    title: "Initial research",
    bullets: [
      "Analysis of stakeholders' needs",
      "Analysis of key eCommerce competitors",
      "Market and customer research for your niche",
    ],
  },
  {
    title: "Discovery phase",
    bullets: [
      "Product vision",
      "Software requirements specification (SRS)",
      "Project roadmap",
      "High-level eCommerce architecture design",
    ],
  },
  {
    title: "eCommerce website design",
    bullets: [
      "Interactive eCommerce prototype",
      "User journey mapping",
      "UI design and motion basics (animations, micro-interactions)",
      "Defining the visual style and tone of the website",
      "Design reviews and feedback from stakeholders",
    ],
  },
  {
    title: "eCommerce website development",
    bullets: [
      "Back-end development",
      "Front-end development",
      "Performance optimization",
      "Integration of APIs and payment providers",
    ],
  },
  {
    title: "Quality assurance",
    bullets: [
      "Functional testing",
      "Non-functional testing (performance, security, usability)",
      "Regression testing",
      "Bug tracking and fixes",
    ],
  },
  {
    title: "Release of the eCommerce website",
    bullets: [
      "Hosting setup and configuration",
      "Migration from staging to production",
      "Final round of testing in production-like conditions",
    ],
  },
  {
    title: "Post-release support",
    bullets: [
      "Changes and improvements to existing features",
      "Design and development of new features",
      "Management of library and framework updates",
    ],
  },
];

// ─── Cost factors (5 cards) ───────────────────────────────────────────────────
const COST_FACTORS = [
  {
    title: "Target audience",
    desc: "B2B eCommerce projects usually cost more than B2C stores.",
  },
  {
    title: "Solution type",
    desc: "A marketplace needs more analysis and development than a simple online shop.",
  },
  {
    title: "Scope",
    desc: "The broader the feature set, the higher the cost. Examples: complex search, custom pricing rules, multi-step checkout, loyalty programs.",
  },
  {
    title: "Target platforms",
    desc: "We can build for web, mobile web, cross-platform apps, native apps, and other devices such as wearables. Each extra platform adds design, development, and testing effort.",
  },
  {
    title: "Locations",
    desc: "Costs grow when you add regions, languages, and local payment and tax rules.",
  },
];

// ─── FAQ (from clone) ─────────────────────────────────────────────────────────
const ECOM_FAQ: FaqItem[] = [
  {
    question: "How much does it cost to develop a turnkey eCommerce website or online store?",
    answer: "Simple online stores typically start at $25,000. Complex marketplaces and B2B portals can exceed $1,000,000. We provide a precise estimate after a free assessment of project requirements. The price of eCommerce website development depends on the scope, integrations, and design.",
  },
  {
    question: "How long does it take to develop an eCommerce project from concept to launch?",
    answer: "An online store MVP typically takes three to five months. Large marketplaces with B2B logic can take a year or longer to develop. We provide an approximate timeline for each stage during the pre-sale. The timeframe depends on the scope of features and design, as well as the number of system integrations.",
  },
  {
    question: "Which eCommerce platforms do you work with: Shopify, WooCommerce, or a custom stack?",
    answer: "We work with Shopify, WooCommerce, BigCommerce, and custom solutions. We help you choose the right platform for your budget, workload, and process requirements. If needed, we can offer a custom architecture instead of a ready-made platform.",
  },
  {
    question: "Can you migrate an existing online store to another eCommerce platform?",
    answer: "Yes, we migrate online stores and marketplaces. We transfer customer data, orders, products, and content; preserve the URL structure, SEO settings, order history, and category structure; and evaluate the migration plan and downtime in advance, before work begins.",
  },
  {
    question: "How do you ensure data and online payment security in your online store?",
    answer: "We are ISO 9001 and ISO 27001 certified and adhere to these standards. We use secure coding, data encryption, access control, and regular audits. When working with payments, we take PCI DSS requirements and local laws into account.",
  },
  {
    question: "What is the step-by-step process for developing an eCommerce project at Nexterse LLC?",
    answer: "The process includes research, discovery, design, development, testing, launch, and support. We work in iterations and deliver results at the end of each sprint. The Client is involved in task prioritization, design reviews, requirements refinement, and release acceptance.",
  },
  {
    question: "Do you provide support and development for the eCommerce website after launch?",
    answer: "Yes, we provide long-term support for online stores and marketplaces. We monitor stability, speed, and security and resolve issues before they escalate into incidents. We develop the product, adding features and integrations, improving UX, and increasing conversion rates.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const CONTENTS = [
  { href: "#ecom-why", label: "Why choose us" },
  { href: "#ecom-services", label: "Services" },
  { href: "#ecom-platforms", label: "Platforms" },
  { href: "#ecom-solutions", label: "Solutions" },
  { href: "#ecom-cases", label: "Case studies" },
  { href: "#ecom-process", label: "Process" },
  { href: "#ecom-cost", label: "Cost factors" },
  { href: "#ecom-faq", label: "FAQ" },
];

export default function EcommercePage() {
  const [activePlatformTab, setActivePlatformTab] = useState(0);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBgWrapper} aria-hidden="true">
          <div className={styles.heroBgDesktop}>
            <svg preserveAspectRatio="xMidYMid slice" className={styles.heroBgSvg} width="1920" height="703" viewBox="0 0 1920 703" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1920" height="703" fill="url(#ecom_d_paint0)" />
              <g clipPath="url(#ecom_d_clip0)">
                <rect width="1920" height="703" fill="url(#ecom_d_paint0)" />
                <g opacity="0.08">
                  <path fillRule="evenodd" clipRule="evenodd" d="M-845.628 744.916L-688.82 -101.049L-883.335 -131.999L-1166 744.916L-845.628 744.916ZM-78.6641 352.883L-10.577 744.917L289.163 744.916L150.925 377.643L-78.6641 352.883ZM-588.25 744.917L-466.518 -82.4796L412.996 28.9404L825.646 744.916L544.475 744.916L309.265 237.337L-305.016 183.69L-267.877 744.916L-588.25 744.917Z" fill="#3CC4E5" />
                </g>
                <g opacity="0.08">
                  <path fillRule="evenodd" clipRule="evenodd" d="M874.988 -647.181L1388.56 -730.869L1655.22 -246.923L1928.98 -316.113L1484.69 -947.631L656.166 -844.49L599.943 19.784L892.548 -54.1681L874.988 -647.181ZM1254.33 -550.397L1420.26 -187.351L1127.66 -113.399L1098.77 -529.125L1254.33 -550.397ZM1687.01 -978.365L1877.46 -996.427L2419.14 -439.644L2162.34 -374.741L1687.01 -978.365Z" fill="#3CC4E5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M892.663 -53.7166L1231.16 682.73L1060.64 755.898L600.059 20.2355L892.663 -53.7166ZM1683.65 127.297L1655.34 -246.473L1929.1 -315.663L1887.62 51.6869L1683.65 127.297ZM1127.73 -113.128L1429.9 614.455L2207.46 309.673L2419.08 -439.5L2162.28 -374.597L2064.62 143.284L1515.96 334.075L1420.34 -187.08L1127.73 -113.128Z" fill="#3CC4E5" />
                </g>
                <g filter="url(#ecom_d_f0)">
                  <ellipse cx="960" cy="401.5" rx="590" ry="289.5" fill="url(#ecom_d_paint1)" />
                </g>
                <g opacity="0.32" filter="url(#ecom_d_f1)">
                  <circle cx="2010" cy="205" r="460" fill="#3CC4E5" />
                </g>
                <g opacity="0.32" filter="url(#ecom_d_f2)">
                  <circle cx="19" cy="691" r="460" fill="#3CC4E5" />
                </g>
              </g>
              <defs>
                <filter id="ecom_d_f0" x="70" y="-188" width="1780" height="1179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
                </filter>
                <filter id="ecom_d_f1" x="1050" y="-755" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
                </filter>
                <filter id="ecom_d_f2" x="-941" y="-269" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
                </filter>
                <linearGradient id="ecom_d_paint0" x1="1920" y1="-21.3031" x2="114.684" y2="922.394" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <linearGradient id="ecom_d_paint1" x1="1550" y1="94.4545" x2="323.866" y2="572.726" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <clipPath id="ecom_d_clip0">
                  <rect width="1920" height="703" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.heroBgMobile}>
            <svg preserveAspectRatio="xMidYMid slice" className={styles.heroBgSvg} width="375" height="559" viewBox="0 0 375 559" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#ecom_m_clip0)">
                <rect width="375" height="559" fill="url(#ecom_m_paint0)" />
                <g opacity="0.48" filter="url(#ecom_m_f0)">
                  <circle cx="254" cy="592" r="200" fill="#3CC4E5" />
                </g>
                <g opacity="0.48" filter="url(#ecom_m_f1)">
                  <circle cx="450" cy="464" r="200" fill="#3CC4E5" />
                </g>
                <g opacity="0.04">
                  <path fillRule="evenodd" clipRule="evenodd" d="M494.863 277.841L245.42 299.352L178.085 556.545L42.2216 556.545L175.021 209.568L573.679 160L701.803 556.545L556.587 556.545L494.863 277.841ZM329.311 367.713L294.708 556.633L439.924 556.633L404.386 359.296L329.311 367.713ZM77.0156 219.084L-13.9575 233.113L-201 556.708L-73.5534 556.708L77.0156 219.084Z" fill="url(#ecom_m_paint1)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M556.585 556.774L485.509 940.226L573.677 954.254L701.801 556.774L556.585 556.774ZM208.943 734.474L178.082 556.777L42.2183 556.777L104.877 723.251L208.943 734.474ZM439.928 556.779L384.75 931.813L-13.9071 881.31L-200.949 556.779L-73.5029 556.779L33.1111 786.85L311.546 811.166L294.712 556.779L439.928 556.779Z" fill="url(#ecom_m_paint2)" />
                </g>
              </g>
              <defs>
                <filter id="ecom_m_f0" x="-146" y="192" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
                </filter>
                <filter id="ecom_m_f1" x="50" y="64" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
                </filter>
                <linearGradient id="ecom_m_paint0" x1="375" y1="-16.9394" x2="-66.6674" y2="39.7691" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <linearGradient id="ecom_m_paint1" x1="336.884" y1="360.195" x2="339.506" y2="120.051" gradientUnits="userSpaceOnUse">
                  <stop offset="0.325638" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="ecom_m_paint2" x1="372.84" y1="1019.42" x2="376.294" y2="567.487" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0301665" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="ecom_m_clip0">
                  <rect width="375" height="559" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="container">
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className={styles.breadcrumbSep}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path stroke="rgba(255,255,255,0.5)" strokeLinecap="square" d="m6 4 4 4-4 4" />
                </svg>
              </span>
              <a href="/services">Services</a>
              <span className={styles.breadcrumbSep}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path stroke="rgba(255,255,255,0.5)" strokeLinecap="square" d="m6 4 4 4-4 4" />
                </svg>
              </span>
              <span>eCommerce development services</span>
            </nav>
            <h1 className={styles.heroTitle}>
              Custom <span className={styles.accent}>eCommerce</span> development services
            </h1>
            <p className={styles.heroDesc}>
              Nexterse LLC develops and improves eCommerce platforms for companies that prioritize stable growth and profitability. We handle the complexities: architecture, integrations, performance, security, and post-launch support. You get predictable deadlines, a transparent budget, and a team committed to delivering results.
            </p>
            <ul className={styles.heroPoints}>
              <li>ISO 9001:2015 certification for quality management</li>
              <li>ISO/IEC 27001:2022 for data security</li>
              <li>SOC 2 compliance for security, processing integrity, confidentiality, and privacy</li>
            </ul>
            <div className={styles.heroActions}>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.heroBtn}`}>
                Get in touch
              </a>
              <div className={styles.ratings} aria-label="Clients rate our services five out of five">
                <p className={styles.ratingsLabel}>Clients rate our services</p>
                <div className={styles.ratingsBadge}>
                  <span className={styles.ratingStars} aria-hidden="true">★★★★★</span>
                  <span className={styles.ratingsScore}>5,0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why choose (results) ─────────────────────────────────────────── */}
      <ArticleLayout contents={CONTENTS} ariaLabel="eCommerce page contents">
      <section id="ecom-why" className={styles.ecomWhySection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            <span className={styles.accent}>Why</span> choose Nexterse LLC services
          </h2>
          <div className={styles.resultsRow}>
            <ul className={styles.resultsList}>
              {WHY_POINTS.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <div className={styles.resultsImgCol}>
              <Image
                src="/esd/esd-standard.jpg"
                alt="Why choose Nexterse LLC services"
                width={528}
                height={608}
                className={styles.resultsImg}
              />
            </div>
          </div>
        </div>
      </section>
        {/* ── Services ───────────────────────────────────────────────────── */}
        <section id="ecom-services" className={`${styles.blockWhite} ${styles.ecomServicesSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              eCommerce development <span className={styles.accent}>services</span>
            </h2>
            <div className={styles.ecomServicesGrid}>
              {SERVICES.map((s) => (
                <div key={s.title} className={styles.ecomServiceCard}>
                  <Image src={s.icon} alt={s.title} width={56} height={56} className={styles.ecomServiceIcon} />
                  <h3 className={styles.ecomServiceTitle}>{s.title}</h3>
                  <p className={styles.ecomServiceIntro}>{s.intro}</p>
                  <ul className={styles.ecomBullets}>
                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Build your custom store CTA ────────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.ecommerceGradientCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Build your custom store</h2>
                <p className={styles.inlineCtaDesc}>Launch a high-performing, scalable online store tailored for your brand.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in Touch</a>
            </div>
          </div>
        </div>

        {/* ── Platforms (horizontal tabs) ────────────────────────────────── */}
        <section id="ecom-platforms" className={styles.serviceBlock}>
          <div className="container">
            <h2 className={styles.svcTitle}>
              Platforms and <span className={styles.accent}>technologies</span> we work with
            </h2>
            <div className={styles.tabsWrap}>
              <div className={styles.tabsNav} role="tablist">
                {PLATFORM_TABS.map((tab, i) => (
                  <button
                    key={tab.label}
                    role="tab"
                    aria-selected={activePlatformTab === i}
                    className={`${styles.tabBtn} ${activePlatformTab === i ? styles.tabBtnActive : ""}`}
                    onClick={() => setActivePlatformTab(i)}
                  >
                    <Image src={tab.icon} alt={tab.label} width={40} height={40} className={styles.tabIcon} />
                    {tab.label}
                  </button>
                ))}
              </div>
              {PLATFORM_TABS.map((tab, i) => (
                <div
                  key={tab.label}
                  role="tabpanel"
                  className={activePlatformTab === i ? styles.tabPanelActive : styles.tabPanel}
                >
                  <div className={styles.tabPanelContent}>
                    <h3 className={styles.tabPanelTitle}>{tab.title}</h3>
                    <p className={styles.tabPanelDesc}>{tab.desc}</p>
                  </div>
                  <div className={styles.tabPanelImgWrap}>
                    <Image
                      src={tab.image}
                      alt={tab.title}
                      width={600}
                      height={400}
                      className={styles.tabPanelImg}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Solutions (dark cards) ─────────────────────────────────────── */}
        <section id="ecom-solutions" className={styles.solutionsBlockDark}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              Types of <span className={styles.accent}>eCommerce solutions</span> we work with
            </h2>
            <div className={styles.solutionsGrid}>
              {SOLUTIONS.map((s) => (
                <div key={s.title} className={styles.solutionCard}>
                  <h3 className={styles.solutionCardTitle}>{s.title}</h3>
                  <p className={styles.solutionCardIntro}>{s.intro}</p>
                  <ul className={styles.solutionBullets}>
                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case studies ───────────────────────────────────────────────── */}
        <div id="ecom-cases">
          <CaseCards
            heading={<>Recent <span>software</span> we made</>}
            windowed
          />
        </div>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        <ServicesReviewSlider primary="software" count={6} secondaryCount={1} lead={["Andrew Laffoon"]} />

        {/* ── Process ────────────────────────────────────────────────────── */}
        <section id="ecom-process" className={styles.processBlock}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              Custom eCommerce development <span className={styles.accent}>process</span>
            </h2>
            <p className={styles.sectionDescWhite}>
              We design and develop bug-free eCommerce websites with customer-centered UX/UI to inspire your visitors to buy your products online.
            </p>
            <div className={styles.processGrid}>
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.title} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <div className={styles.processStepBody}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    <ul className={styles.processStepBullets}>
                      {step.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cost factors ───────────────────────────────────────────────── */}
        <section id="ecom-cost" className={styles.blockLight}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Cost</span> factors of custom eCommerce software
            </h2>
            <p className={styles.sectionDesc}>
              The cost of eCommerce website development depends on the project scope, technology, and business goals. Based on our experience, five factors most affect the budget.
            </p>
            <div className={styles.costGrid}>
              {COST_FACTORS.map((c) => (
                <div key={c.title} className={styles.costCard}>
                  <h3 className={styles.costCardTitle}>{c.title}</h3>
                  <p className={styles.costCardDesc}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Schedule a strategy session CTA ────────────────────────────── */}
        <div className={`${styles.inlineCta} ${styles.ecommerceGradientCta}`}>
          <div className="container">
            <div className={styles.inlineCtaInner}>
              <div>
                <h2 className={styles.inlineCtaTitle}>Schedule a strategy session</h2>
                <p className={styles.inlineCtaDesc}>Discuss your revenue goals with our eCommerce experts.</p>
              </div>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.inlineCtaBtn}`}>Get in Touch</a>
            </div>
          </div>
        </div>

        {/* ── Awards & Recognitions ──────────────────────────────────────── */}
        <ServicesAchievements />

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <div id="ecom-faq">
          <ServicesFaqBlock items={ECOM_FAQ} />
        </div>

        {/* ── Let's Start ────────────────────────────────────────────────── */}
        <LetsStart />

        {/* ── Awesome stories (ADLC blog) ────────────────────────────────── */}
        <AwesomeStories category="enterprise" />
      </ArticleLayout>
    </>
  );
}
