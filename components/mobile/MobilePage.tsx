"use client";

import CaseCards, { type CaseCard } from "@/components/home/CaseCards";
import ServicesReviewSlider from "@/components/services/ServicesReviewSlider";
import ServicesAchievements from "@/components/services/ServicesAchievements";
import ServicesFaqBlock, { type FaqItem } from "@/components/services/ServicesFaqBlock";
import ServicesBlogSection, { type FeaturedPost, type BlogPost } from "@/components/services/ServicesBlogSection";
import LetsStart from "@/components/home/LetsStart";
import CSLogos from "@/components/custom-software/CSLogos";
import MobileArticleLayout from "./MobileArticleLayout";
import MobileCrosslinks from "./MobileCrosslinks";
import clStyles from "@/components/esd/ESDCrosslinks.module.css";
import styles from "./MobilePage.module.css";

// ─── Cases ────────────────────────────────────────────────────────────────────
const MOBILE_CASES: CaseCard[] = [
  {
    banner: "/mobile-app-development/01_cover-2-1.png",
    name: "Farm Animal IoT",
    title: "Platform for vital farm animals signs monitoring",
    text: "An IoT platform connecting a matchbox-sized farm animal wearable to a real-time visualization and diagnostics dashboard – reducing monitoring setup time by ~55% and eliminating invasive multi-device procedures for veterinary clinics and farms.",
    href: "/portfolio/platform-for-vital-farm-animals-signs-monitoring",
    tags: ["IoT", "Startups"],
  },
  {
    banner: "/mobile-app-development/02_For-preview.png",
    name: "Renting Boats",
    title: "Renting Boats app: making boats booking easy",
    text: "Mobile and web booking service of boat lending and renting that allows users to search and book various types of boats for voyages.",
    href: "/portfolio/renting-boats-mobile-application",
    tags: ["Startups"],
  },
  {
    banner: "/mobile-app-development/09_cover-img-1.png",
    name: "Health Monitoring",
    title: "Adaptive health monitoring app with 20,000+ downloads",
    text: "A mobile health app with 98% user satisfaction and ~65% program completion rate, delivering real-time blood pressure and pulse monitoring through a smart cuff across five wellness program categories.",
    href: "/portfolio/iot-power-mobile-app-for-wellness-programs",
    tags: ["IoT", "Startups"],
  },
  {
    banner: "/mobile-app-development/02_Right-cover.png",
    name: "GLAMZ",
    title: "GLAMZ – platform for beauty professionals",
    text: "A marketplace platform that brought 1,200+ verified beauty professionals and 13K+ registered clients onto one booking ecosystem in Israel — with scheduling, verified reviews, and an integrated e-commerce module.",
    href: "/portfolio/glamz-platform-for-beauty-professionals",
    tags: ["Startups"],
  },
  {
    banner: "/mobile-app-development/01_Cover-1-2.png",
    name: "Selfiest",
    title: "Selfiest – mobile backend development",
    text: "The client launched a selfie-sharing platform with photo ranking, real-time statistics, and moderation fully backed by a scalable server layer; Redis analytics caching delivers photo statistics ~40% faster than a database-only approach.",
    href: "/portfolio/selfiest-backend-app-development",
    tags: ["Startups"],
  },
  {
    banner: "/mobile-app-development/01_Right-3.png",
    name: "Harmony Park",
    title: "MVP development of Q&A and voting service",
    text: "A 2-month MVP delivery covering all 7 planned feature modules – yes/no questions, social sharing, statistics, and time management – shipped on a bi-weekly sprint cadence with investor demos at each stage.",
    href: "/portfolio/qa-service-mvp-development",
    tags: ["Startups"],
  },
  {
    banner: "/mobile-app-development/02_ushopper_solution.png",
    name: "UShopper",
    title: "UShopper – iOS eCommerce platform with Apple Pay",
    text: "~30% lower checkout drop-off with Apple Pay integration; full iOS storefront from kickoff to launch in 1 month.",
    href: "/portfolio/ushopper-mobile-ecommerce-app-development",
    tags: ["Startups"],
  },
];

// ─── Section 3: Full-cycle services (3-col, 6 items) ─────────────────────────
const FULL_CYCLE_SERVICES = [
  {
    icon: "/mobile-app-development/03_AI-consulting-03.svg",
    title: "Consulting & Strategy",
    desc: "We define a clear scope, prioritize features that drive value, and build a tailored roadmap, exploring advanced technologies like AI or IoT to match your vision. You'll get a transparent plan that keeps your project on track and ready to compete.",
    linkLabel: "Mobile strategy development",
    href: "/services/business-analysis",
  },
  {
    icon: "/mobile-app-development/04_Response-state-design-03.svg",
    title: "UI/UX Design",
    desc: "We focus on accessibility, smooth navigation, and performance, testing designs with real users to perfect the experience. Whether it's a sleek e-commerce app or a dynamic fitness platform, your app will feel effortless to use, keeping users engaged and loyal.",
    linkLabel: "UI/UX design",
    href: "/services/ui-ux-design",
  },
  {
    icon: "/mobile-app-development/03_AI-development-03.svg",
    title: "Development",
    desc: "Our process adapts to your evolving needs, delivering regular updates for transparency. With expertise in modern frameworks, we've powered apps handling over 100,000 active users without a hitch. Your app will scale seamlessly as your business grows.",
    linkLabel: "Backend for mobile apps",
    href: "/services/back-end-development-services",
  },
  {
    icon: "/mobile-app-development/04_Enterprise-system-integration-02.svg",
    title: "3rd Party Integrations",
    desc: "We seamlessly connect your app to AI tools, payment gateways, social media, cloud storage, analytics, or custom enterprise systems. Our integrations boost features and streamline operations without slowing performance.",
    linkLabel: "AI integration",
    href: "/services/ai-integration",
  },
  {
    icon: "/mobile-app-development/03_Continuous-evaluation-of-output-quality-03.svg",
    title: "Quality Assurance (QA)",
    desc: "We simulate real-world conditions to catch issues early, ensuring a flawless experience. A recent retail app we tested achieved 99.9% uptime post-launch. Your app will deliver consistent, reliable performance that keeps users coming back.",
    linkLabel: "Mobile app QA",
    href: "/services/quality-assurance",
  },
  {
    icon: "/mobile-app-development/04_Validation-and-controlled-deployment-01.svg",
    title: "Deployment & Support",
    desc: "We manage App Store and Google Play submissions, navigating strict guidelines for a smooth rollout. Post-launch, our team provides ongoing updates, monitors performance, and resolves issues quickly.",
    linkLabel: null,
    href: null,
  },
];

// ─── Section 4: SDLC + ADLC (dark, 2-col) ────────────────────────────────────
const SDLC_ITEMS = [
  {
    icon: "/mobile-app-development/04_Full-lifecycle-responsibility-within-one-team-01.svg",
    title: "Mobile app SDLC",
    bullets: [
      "Defines the app architecture, native or cross-platform stack, backend contracts, and release plan",
      "Focuses on app stability, startup speed, battery use, network handling, and device behavior",
      "Covers QA, regression testing, store-readiness checks, analytics, and version releases",
      "Shapes navigation, screen logic, offline states, and permission flows",
    ],
  },
  {
    icon: "/mobile-app-development/04_Managing-AI-after-release-via-ADLC-03.svg",
    title: "Agentic development lifecycle",
    bullets: [
      "Defines the AI architecture, model routing, tool use, retrieval flow, and memory approach",
      "Focuses on output quality, latency handling, grounding, safety policy, and fallback logic",
      "Covers eval sets, prompt revisions, model updates, monitoring, and rollback decisions",
      "Shapes copilot behavior, response format, human review points, and trust signals",
    ],
  },
];

// ─── Section 6: Principles (light bg, 3-col, 6 items) ────────────────────────
const PRINCIPLES = [
  {
    icon: "/mobile-app-development/04_Mobile-and-cross-platform-testing-02.svg",
    title: "Mobile and AI layer designed together",
    desc: "We immediately consider where the model will run, how the app will behave on the device, and how AI features will impact speed, privacy, and UX.",
  },
  {
    icon: "/mobile-app-development/04_Full-lifecycle-responsibility-within-one-team-02.svg",
    title: "SDLC + ADLC",
    desc: "We bridge standard mobile development for the app's stability and ADLC for the quality of model responses, security, evaluations, monitoring, and updates to the AI logic.",
  },
  {
    icon: "/mobile-app-development/03_Human-oversight-for-critical-decisions-02.svg",
    title: "Engineering oversight over AI",
    desc: "We use AI tools where they speed up implementation, but all code, tests, and architectural decisions are reviewed by the team.",
  },
  {
    icon: "/mobile-app-development/03_Retrieval-precision-limitations-01.svg",
    title: "Mobile limitations awareness",
    desc: "We design AI features with battery life, memory, unstable network conditions, background limitations on iOS and Android, and App Store and Google Play requirements in mind.",
  },
  {
    icon: "/mobile-app-development/04_Explainable-model-behavior-02.svg",
    title: "AI behavior testing",
    desc: "We test the model's compliance with product rules, its ability to work with the required data, and its handling of user flow.",
  },
  {
    icon: "/mobile-app-development/04_Transparent-collaboration-and-decision-support-02.svg",
    title: "Post-launch support",
    desc: "After the release, we update the app and the AI layer separately to improve models, prompts, retrieval, and response logic.",
  },
];

// ─── Section 8: On-device AI vs Cloud AI table ────────────────────────────────
const TABLE_ROWS = [
  {
    criteria: "Latency",
    onDevice: "Minimal latency for local tasks. The application doesn't wait for network requests.",
    cloud: "Dependent on connection quality and the response time of the external AI service.",
  },
  {
    criteria: "Privacy",
    onDevice: "Suitable for scenarios where data is best processed on-device without transferring it to the cloud.",
    cloud: "Requires server-side protection: isolation, redaction of sensitive data, storage rules, and access control.",
  },
  {
    criteria: "Capabilities",
    onDevice: "Better suited for classification, scanning, text extraction, short summaries, and other local tasks.",
    cloud: "Better suited for complex reasoning, large retrieval indexes, long context, and heavier generation.",
  },
  {
    criteria: "Offline operation",
    onDevice: "Can work offline if the model and pipeline are hosted on the device.",
    cloud: "Typically limited or unavailable without a network connection.",
  },
  {
    criteria: "AI logic updates",
    onDevice: "Requires consideration of the device and model size, and whether updates are delivered via a mobile release or a model package.",
    cloud: "The model, prompts, and retrieval logic are easier to update centrally on the server side.",
  },
];

// ─── Section 9: Trust, privacy & control (dark, 2-col, 4 items) ──────────────
const TRUST_ITEMS = [
  {
    icon: "/mobile-app-development/04_AI-functions-for-store-reviews-02.svg",
    title: "We prepare AI functions for store reviews",
    desc: "We design mobile AI solutions to meet platform requirements for moderation, user data processing, access controls, and app behavior in sensitive use cases.",
  },
  {
    icon: "/mobile-app-development/04_Data-access-for-permissions-01.svg",
    title: "We explain data access for permissions",
    desc: "If an app requires a camera, microphone, geolocation, or photos, we build clear permission flows so the user can see in advance why access is needed and what exactly will happen after consent.",
  },
  {
    icon: "/mobile-app-development/04_AI-for-existing-mobile-apps-01.svg",
    title: "We add AI to existing mobile apps",
    desc: "If you already have an app written in Swift, Kotlin, or React Native, we can integrate AI functions without a complete rewrite, clean up vulnerable code, and integrate a new AI layer via an API, SDK, and server-side orchestration.",
  },
  {
    icon: "/mobile-app-development/04_Managing-AI-after-release-via-ADLC-02.svg",
    title: "Managing AI after release via ADLC",
    desc: "Our work doesn't end after launch: we monitor response quality, update rules, test new model versions, and modify AI logic separately from the mobile client to ensure the product remains manageable and predictable.",
  },
];

// ─── Section 10: Advanced capabilities (light, 3-col, 6 items) ───────────────
const ADVANCED_CAPS = [
  {
    icon: "/mobile-app-development/04_Geolocation-and-context-aware-flows-03.svg",
    title: "Geolocation and context-aware flows",
    desc: "We integrate GPS, mapping, geofencing, and route logic for location-aware behavior. In AI products, location can also shape recommendations, field workflows, task routing, and context-sensitive assistance.",
  },
  {
    icon: "/mobile-app-development/04_Intelligent-push-notifications-02.svg",
    title: "Intelligent push notifications",
    desc: "Push systems work better when they respond to product events, user state, and timing rules. We build notification flows tied to backend logic, segmentation, and mobile behavior, with AI used to improve message relevance, prioritization, and response handling.",
  },
  {
    icon: "/mobile-app-development/04_Secure-in-app-payments-02.svg",
    title: "Secure in-app payments",
    desc: "We integrate payment gateways, subscriptions, and transactional flows that match the product's security and compliance requirements. When needed, AI can support purchase assistance, payment support flows, and anomaly detection around transaction behavior.",
  },
  {
    icon: "/mobile-app-development/04_Conversational-Voice-AI-03.svg",
    title: "Conversational Voice AI",
    desc: "We build voice interfaces that let users navigate the app, query data, retrieve answers, and complete tasks through natural language. The stack can combine speech recognition, LLM-based reasoning, tool calling, and latency controls designed for mobile use.",
  },
  {
    icon: "/mobile-app-development/04_In-app-agentic-copilots-02.svg",
    title: "In-app agentic copilots",
    desc: "We build in-app copilots that connect to your app's knowledge sources, business logic, and system actions via retrieval, governed APIs, and permission-aware access. These copilots can answer product questions, support users, resolve ticket flows, and perform multi-step actions.",
  },
  {
    icon: "/mobile-app-development/04_On-device-AI-and-edge-computing-03.svg",
    title: "On-device AI and edge computing",
    desc: "We use on-device AI when a product needs offline support and faster response times, including quantized small language models, Core ML pipelines, ML Kit features, and hybrid on-device or cloud execution.",
  },
];

// ─── Section 12: Industry blueprints (2-col, 6 industries) ───────────────────
const INDUSTRIES = [
  {
    title: "EdTech",
    desc: "Educational apps must maintain the course flow, help maintain the pace, and provide support when needed. We create mobile EdTech products where AI enhances the learning system: they can explain a complex passage, analyze an answer, help with practice, or guide through the material, all within a predetermined structure.",
    linkLabel: "EdTech development",
    href: "/industries/elearning-software-development",
    imgDesktop: "/mobile-app-development/01_Rectangle-2041-143x300.png",
    imgMobile: "/mobile-app-development/01_Rectangle-2041-1-300x132.png",
    imgAlt: "Student with a book",
  },
  {
    title: "eCommerce",
    desc: "We develop eCommerce apps to shorten the path from inquiry to order. AI can take on some of this work: understanding more complex wording, clarifying intent, selecting relevant products, and assisting with selection when the catalog is large or the choice is non-obvious.",
    linkLabel: "Ecommerce development",
    href: "/industries/ecommerce-development",
    imgDesktop: "/mobile-app-development/01_Rectangle-2042-121x300.png",
    imgMobile: "/mobile-app-development/01_Rectangle-2042-1-300x132.png",
    imgAlt: "Pay terminal",
  },
  {
    title: "FinTech",
    desc: "We build fintech mobile apps for banking, payments, investing, and personal finance. AI features can include voice input, grounded account queries, spending summaries, and guided actions tied to user permissions and transaction data.",
    linkLabel: "Fintech mobile apps",
    href: "/services/financial-software-development",
    imgDesktop: "/mobile-app-development/01_Rectangle-2044.png",
    imgMobile: "/mobile-app-development/01_Rectangle-2044-1-300x132.png",
    imgAlt: "Pay terminal with a bank card",
  },
  {
    title: "Healthcare",
    desc: "We build healthcare mobile apps for telemedicine, patient portals, clinical workflows, and remote monitoring. When sensitive data should stay off the cloud, we can run selected AI features on the device so patient inputs are processed locally.",
    linkLabel: "mHealth apps",
    href: "/industries/healthcare-software-development",
    imgDesktop: "/mobile-app-development/01_Rectangle-2045.png",
    imgMobile: "/mobile-app-development/01_Rectangle-2045-1-300x132.png",
    imgAlt: "Microscope with a hand",
  },
  {
    title: "Logistics",
    desc: "In logistics, a mobile app must withstand connection failures, high load, and constant context changes. We design such apps so that key actions are immediately available on the device, and synchronization occurs without unnecessary user interaction. AI is useful here for recalculating routes, prompting the next step, and reducing manual decisions.",
    linkLabel: "Logistics software development",
    href: "/industries/logistics-software-development",
    imgDesktop: "/mobile-app-development/01_Transportation-and-logistics-software-benefits-for-business-291x300.jpg",
    imgMobile: "/mobile-app-development/01_Transportation-and-logistics-software-benefits-for-business-291x300.jpg",
    imgAlt: "Truck parking",
  },
  {
    title: "AdTech & MarTech",
    desc: "We build mobile tools for campaign monitoring, customer engagement, analytics, reporting, and assisted content workflows. AI can help teams analyze signals, surface insights, and support routine actions inside the app.",
    linkLabel: "AdTech software development",
    href: "/industries/advertising-and-marketing-automation-development",
    imgDesktop: "/mobile-app-development/02_digital-marketing-g6e2ae0773_1920-300x200.jpg",
    imgMobile: "/mobile-app-development/02_digital-marketing-g6e2ae0773_1920-300x200.jpg",
    imgAlt: "A digital dashboard",
  },
];

// ─── Section 14: Tech stack (2-col, 6 cards) ─────────────────────────────────
const TECH_STACKS = [
  {
    title: "Mobile engineering",
    items: ["Swift (iOS)", "Kotlin (Android)", "Java (Android SDK)", "React Native", "Flutter", "Kotlin Multiplatform"],
  },
  {
    title: "Web and companion interfaces",
    items: ["ReactJS", "Vue.js", "Angular", "Next.js", "Bootstrap"],
  },
  {
    title: "Backend and integration",
    items: ["Node.js with Express", "Django", "ASP.NET Core / .NET", "Flask", "Spring Boot", "Ruby on Rails"],
  },
  {
    title: "AI and ADLC layer",
    items: ["Core ML", "Apple Foundation Models", "Google ML Kit", "LiteRT", "OpenAI", "Anthropic", "Amazon Bedrock", "Vertex AI", "LangGraph", "LangSmith"],
  },
  {
    title: "Observability and release",
    items: ["Firebase Crashlytics", "GitHub Actions", "GitLab CI/CD", "Jenkins", "Docker", "Kubernetes", "Xcode Cloud", "Bitrise", "Codemagic", "Firebase App Distribution"],
  },
  {
    title: "Cloud and connected platforms",
    items: ["AWS", "Microsoft Azure", "Google Cloud", "AWS IoT Core", "Azure IoT Hub", "Amazon S3"],
  },
];

// ─── Section 18: Advanced tech (dark, 3-col, 6 items, no icons) ──────────────
const ADVANCED_TECH = [
  {
    title: "Internet of Things (IoT)",
    desc: "We connect mobile apps to sensors, gateways, machines, wearables, and smart devices so users can monitor status, receive alerts, send commands, and review device data from one interface. This is useful in smart home products, industrial systems, healthcare devices, and logistics operations where the phone acts as the control point.",
  },
  {
    title: "Augmented reality (AR) & virtual reality (VR)",
    desc: "We build AR and VR features for guided training, product visualization, remote assistance, and immersive learning. On mobile, that can mean overlaying instructions on a camera view, placing products into a physical space before purchase, or using 3D environments for simulation and onboarding.",
  },
  {
    title: "5G technology",
    desc: "We design mobile flows that take advantage of 5G when low latency and higher throughput affect the product experience. That includes live video, remote inspection, media-heavy collaboration, and field workflows that depend on fast sync.",
  },
  {
    title: "Edge computing",
    desc: "We use edge computing when selected workloads should run closer to the user or directly on the device, rather than waiting for repeated cloud round-trips. In mobile apps, this can support faster response times, lower network dependence, and tighter control over sensitive data.",
  },
  {
    title: "Biometric authentication",
    desc: "We integrate face and fingerprint authentication to help users sign in faster and confirm sensitive actions, while the app still relies on secure storage and server-side controls.",
  },
  {
    title: "Wearable and smart device integration",
    desc: "We connect mobile apps with Apple Watch, Wear OS devices, health monitors, fitness trackers, and other companion hardware when users need glanceable data, short interactions, background sync, or quick actions away from the phone.",
  },
];

// ─── Section 19: Why Nexterse (3-col, 6 cards) ───────────────────────────────
const WHY_CARDS = [
  {
    title: "Mobile engineering with AI delivery capability",
    desc: "We build both layers of an AI-powered mobile product: the app itself and the intelligence behind it. Our teams handle mobile architecture, backend integration, and release quality, then apply ADLC to model selection, retrieval flows, evaluation, guardrails, and post-release monitoring.",
  },
  {
    title: "Strong delivery base",
    desc: "Since 2012, we bring years of delivery experience across startups and enterprise projects. Teams are staffed with senior engineers who can work through complex product requirements, legacy constraints, and platform-specific issues without slowing the roadmap.",
  },
  {
    title: "AI-assisted development with engineering control",
    desc: "Our developers use AI coding tools that help speed up implementation, refactoring, and test coverage. The output still goes through code review, QA, security checks, and release validation before it reaches production.",
  },
  {
    title: "Security and quality standards",
    desc: "We work under ISO 27001 and ISO 9001 standards and build mobile products with structured QA, controlled delivery, and secure engineering practices. For regulated products, we also account for requirements such as HIPAA and role-based access controls.",
  },
  {
    title: "Cost-aware architecture choices",
    desc: "We choose native, cross-platform, on-device AI, or cloud AI based on product scope, operating cost, compliance needs, and long-term maintenance.",
  },
  {
    title: "Post-launch support",
    desc: "We support mobile apps after release with updates, monitoring, issue resolution, model iteration, and ongoing improvements to both the product and AI layers.",
  },
];

const MOBILE_AWARDS = [
  { src: "/services-page/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "GoodFirms recognition" },
  { src: "/services-page/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA recognition" },
  { src: "/services-page/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS Partner Network" },
  { src: "/services-page/12_Responsive-Design-Development-2025.svg", alt: "Responsive Design Development 2025" },
  { src: "/services-page/12_Mobile-Software-Development-2025.svg", alt: "Mobile Software Development 2025" },
  { src: "/services-page/12_IoT-Services-2025.svg", alt: "IoT Services 2025" },
];

// ─── FAQ & Blog data ─────────────────────────────────────────────────────────

const MOBILE_FAQ: FaqItem[] = [
  {
    question: "How do you prevent an AI mobile app from draining battery and cellular data?",
    answer: "We reduce unnecessary model calls, compress payloads, cache results, and move selected tasks on device when it makes sense.",
  },
  {
    question: "Can you build a mobile app that uses RAG to search internal company documents securely?",
    answer: "Yes. We route RAG through a secured backend, not directly from the phone, and control access through your existing auth and data rules.",
  },
  {
    question: "How do you handle LLM latency on mobile networks?",
    answer: "We design for unstable networks with streaming responses, fallback states, caching, and request control. The goal is to keep the app responsive while the model works in the background.",
  },
  {
    question: "How do you secure LLM API keys in a mobile app?",
    answer: "We do not store LLM keys in the mobile client. Model calls go through a backend layer where access, limits, and request filtering are controlled.",
  },
  {
    question: "How do you reduce the risk of App Store or Google Play rejection for a Generative AI app?",
    answer: "We account for store requirements, including content moderation, data handling, permission logic, and sensitive use cases.",
  },
  {
    question: "How do you feed real-time mobile data into an LLM without creating huge latency?",
    answer: "We preprocess data on the device and send only the context the model needs. This cuts payload size and helps keep response times under control.",
  },
  {
    question: "Can you build a mobile app where users interact with AI through the camera in real time?",
    answer: "Yes. We connect the camera flow, mobile client, backend, and vision model into one pipeline built for speed and stable UX.",
  },
  {
    question: "How does an in-app copilot remember context if a user closes the app or switches devices?",
    answer: "We store relevant context on the server side and restore it when the user returns.",
  },
  {
    question: "How do you estimate the first phase of an AI mobile project?",
    answer: "We scope the use case, architecture, AI approach, and delivery risks first. If the use case is still unproven, we usually start with a focused pilot.",
  },
];

const MOBILE_BLOG_FEATURED: FeaturedPost = {
  href: "/blog/top-10-mobile-app-development-firms",
  title: "Top Mobile App Development Firms in 2026 [Updated]",
  image: "/mobile-app-development/03_Top-Mobile-App-Development-Companies-1024x578.png",
  imageAlt: "Top Mobile App Development Companies",
  readTime: "29 mins",
  date: "March 1, 2026",
};

const MOBILE_BLOG_SIDE: BlogPost[] = [
  {
    href: "/blog/ux-design-consulting",
    title: "11 Design Tips That Boost User Experience From an Experienced UX Design Consulting Company",
    readTime: "22 mins",
    date: "July 31, 2023",
  },
  {
    href: "/blog/roi-of-custom-software-development",
    title: "How to Calculate the ROI of Custom Software Development: Formulas, TCO, and Benchmarks (2026)",
    readTime: "27 mins",
    date: "February 2, 2026",
  },
  {
    href: "/blog/data-visualization-services",
    title: "Best 10 Companies Providing Data Visualization Services",
    readTime: "29 mins",
    date: "December 30, 2025",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function MobilePage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <span>Mobile app development</span>
            </nav>
            <h1 className={styles.heroTitle}>
              <span className={styles.accent}>AI-powered mobile</span> app development
            </h1>
            <p className={styles.heroDesc}>
              We build iOS, Android, and cross-platform apps that combine mobile product engineering with AI system design.
              As a result, our clients&apos; mobile apps support copilots, LLM-based workflows, and on-device intelligence.
            </p>
            <div className={styles.heroActions}>
              <a href="#get-modal-popup" className={`btn btn-accent ${styles.heroBtn}`}>Get in touch</a>
              <div className={styles.ratings}>
                <p className={styles.ratingsLabel}>Clients rate our services</p>
                <div className={styles.ratingsBadge}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FFAB00" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className={styles.ratingsScore}>5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MobileArticleLayout>

        {/* ── 2. LOGOS ─────────────────────────────────────────────────── */}
        <CSLogos />

        {/* ── 3. FULL-CYCLE SERVICES (light, 3-col) ───────────────────── */}
        <section id="mobile-services" className={`${styles.servBlockLight} ${styles.fullCycleSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Full-cycle</span> mobile app development
            </h2>
            <p className={styles.sectionDesc}>
              We build mobile apps that meet your business goals with precision and care:
            </p>
            <div className={styles.cardsGrid}>
              <div className={styles.cardsRow3}>
                {FULL_CYCLE_SERVICES.map((item) =>
                  item.href ? (
                    <div key={item.title} className={styles.cardCol3}>
                      <a href={item.href} className={styles.serviceCardLink}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.icon} alt="" className={styles.cardIcon} aria-hidden="true" />
                        <span className={styles.cardTitle}>{item.title}</span>
                        <p className={styles.cardDesc}>{item.desc}</p>
                        {item.linkLabel && (
                          <span className={styles.cardLinkText}>{item.linkLabel}</span>
                        )}
                      </a>
                    </div>
                  ) : (
                    <div key={item.title} className={styles.cardCol3}>
                      <div className={styles.serviceCard}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.icon} alt="" className={styles.cardIcon} aria-hidden="true" />
                        <span className={styles.cardTitle}>{item.title}</span>
                        <p className={styles.cardDesc}>{item.desc}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. SDLC + ADLC (dark, 2-col) ───────────────────────────── */}
        <section id="mobile-ai" className={`${styles.servBlockDark} ${styles.bridgeSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              We bridge mobile engineering and <span className={styles.accent}>AI system design</span>
            </h2>
            <p className={styles.sectionDescWhite}>
              We handle both layers. Our software development lifecycle covers the mobile foundation: app architecture,
              platform fit, release stability, and interface performance. Our agentic development lifecycle covers the
              intelligence layer: model selection, prompt and tool design, retrieval flows, guardrails, evaluation, and
              post-launch monitoring.
            </p>
            <div className={styles.cardsRow2}>
              {SDLC_ITEMS.map((item) => (
                <div key={item.title} className={styles.cardCol2}>
                  <div className={styles.serviceCardDark}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.icon} alt="" className={styles.cardIcon} aria-hidden="true" />
                    <span className={styles.cardTitleWhite}>{item.title}</span>
                    <ul className={styles.bulletList}>
                      {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. DOWNLOAD CTA 1 ───────────────────────────────────────── */}
        <section className={styles.downloadCta}>
          <div className="container">
            <div className={styles.ctaRow}>
              <div>
                <h2 className={styles.ctaTitle}>Build Your Custom Mobile App</h2>
                <p className={styles.ctaDesc}>We turn ideas into high-performance iOS, Android, and cross-platform apps users love.</p>
              </div>
              <div>
                <a href="#get-modal-popup" className={`btn btn-accent ${styles.ctaHeaderBtn}`}>Build your mobile app</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. PRINCIPLES (light, 3-col) ────────────────────────────── */}
        <section id="mobile-principles" className={`${styles.servBlockLight} ${styles.principlesSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Our mobile development <span className={styles.accent}>principles</span> and best practices
            </h2>
            <p className={styles.sectionDesc}>
              We established comprehensive guidelines during the past years, combining the best industry practices
              and our internal guidelines to deliver high-quality, user-focused mobile applications.
            </p>
            <div className={styles.cardsGrid}>
              <div className={styles.cardsRow3}>
                {PRINCIPLES.map((item) => (
                  <div key={item.title} className={styles.cardCol3}>
                    <div className={styles.serviceCard}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.icon} alt="" className={styles.cardIcon} aria-hidden="true" />
                      <span className={styles.cardTitle}>{item.title}</span>
                      <p className={styles.cardDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. ON-DEVICE VS CLOUD HEADING ───────────────────────────── */}
        <div className={styles.tableHeadBlock}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              On-device <span className={styles.accent}>AI</span> vs. Cloud AI
            </h2>
            <p className={styles.tableHeadDesc}>
              The choice depends on where the application requires speed, where privacy is important, and how much
              AI logic should be processed in the mobile product.
            </p>
          </div>
        </div>

        {/* ── 8. COMPARISON TABLE ─────────────────────────────────────── */}
        <div className={styles.tableBlock}>
          <div className={styles.tableWrapper} style={{ padding: "0 clamp(1.5rem, 4vw, 3rem)" }}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th>On-device AI</th>
                  <th>Cloud AI</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr key={row.criteria}>
                    <td data-label="Criteria" className={i === 0 ? styles.colStart : undefined} style={{ "--mobile-order": i * 3 + 1 } as React.CSSProperties}>{row.criteria}</td>
                    <td data-label="On-device AI" style={{ "--mobile-order": i * 3 + 2 } as React.CSSProperties}>{row.onDevice}</td>
                    <td data-label="Cloud AI" style={{ "--mobile-order": i * 3 + 3 } as React.CSSProperties}>{row.cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 9. TRUST, PRIVACY & CONTROL (dark, 2-col) ───────────────── */}
        <section className={`${styles.servBlockDark} ${styles.trustSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              <span className={styles.accent}>Trust</span>, privacy, and control in AI-enabled mobile apps
            </h2>
            <p className={styles.sectionDescWhite}>
              For a mobile AI product, data access must be explained, AI behavior must be restricted, and a new layer must be integrated.
            </p>
            <div className={styles.cardsRow2}>
              {TRUST_ITEMS.map((item) => (
                <div key={item.title} className={styles.cardCol2}>
                  <div className={styles.serviceCardDark}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.icon} alt="" className={styles.cardIcon} aria-hidden="true" />
                    <span className={styles.cardTitleWhite}>{item.title}</span>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. ADVANCED CAPABILITIES (light, 3-col) ────────────────── */}
        <section id="mobile-features" className={`${styles.servBlockLight} ${styles.advancedSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Advanced</span> mobile capabilities
            </h2>
            <p className={styles.sectionDesc}>
              We build these capabilities into the product architecture, with the mobile client, backend services,
              and AI layer working as one system.
            </p>
            <div className={styles.cardsGrid}>
              <div className={styles.cardsRow3}>
                {ADVANCED_CAPS.map((item) => (
                  <div key={item.title} className={styles.cardCol3}>
                    <div className={styles.serviceCard}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.icon} alt="" className={styles.cardIcon} aria-hidden="true" />
                      <span className={styles.cardTitle}>{item.title}</span>
                      <p className={styles.cardDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. DOWNLOAD CTA 2 ──────────────────────────────────────── */}
        <section className={styles.downloadCta}>
          <div className="container">
            <div className={styles.ctaRow}>
              <div>
                <h2 className={styles.ctaTitle}>From Idea to App Store Launch</h2>
                <p className={styles.ctaDesc}>We cover the full cycle – from wireframes and code to launch and long-term support.</p>
              </div>
              <div>
                <a href="#get-modal-popup" className={styles.ctaBtn}>Get in touch</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. INDUSTRY BLUEPRINTS (2-col cards) ───────────────────── */}
        <section id="mobile-industries" className={`${styles.industrySection} ${styles.blueprintsSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <span className={styles.accent}>Industry</span>-specific mobile AI blueprints
            </h2>
            <p className={styles.sectionDesc}>
              We build mobile apps with AI features for industries where the product must meet specific requirements
              for data handling, system access, performance, and offline behavior. The architecture depends on the use case.
            </p>
            <div className={styles.industryCards}>
              <div className={styles.industryRow}>
                {INDUSTRIES.map((ind) => (
                  <div key={ind.title} className={styles.industryCol}>
                    <div className={styles.industryCard}>
                      <div className={styles.industryCardData}>
                        <h3 className={styles.industryCardTitle}>{ind.title}</h3>
                        <p className={styles.industryCardDesc}>{ind.desc}</p>
                        <a href={ind.href} className={styles.industryCardLink}>{ind.linkLabel}</a>
                      </div>
                      <div className={styles.industryCardImg}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={ind.imgDesktop} alt={ind.imgAlt} />
                      </div>
                      <div className={styles.industryCardImgMobile}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={ind.imgMobile} alt={ind.imgAlt} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. SLIDE DESK / MORE ABOUT SERVICES ────────────────────── */}
        <div className={styles.slideDeskBlock}>
          <div className="container">
            <div className={styles.slideDeskWrapper}>
              <div>
                <h3 className={styles.slideDeskTitle}>More about our services</h3>
              </div>
              <div className={styles.slideDeskLinks}>
                <a href="/services/custom-software-development" className={clStyles.link}>
                  Custom software product development <span className={clStyles.linkArrow} />
                </a>
                <a href="/services/web-development" className={clStyles.link}>
                  Web development <span className={clStyles.linkArrow} />
                </a>
                <a href="/services/enterprise-software-development" className={clStyles.link}>
                  Enterprise software development <span className={clStyles.linkArrow} />
                </a>
                <a href="/services/ai-software-development" className={clStyles.link}>
                  AI software development <span className={clStyles.linkArrow} />
                </a>
                <a href="/services" className={clStyles.link}>
                  All services <span className={clStyles.linkArrow} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── 14. TECH STACK (2-col cards, list) ──────────────────────── */}
        <section id="mobile-tech-stack" className={`${styles.industrySectionLight} ${styles.techStackSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Our mobile <span className={styles.accent}>tech</span> stack
            </h2>
            <p className={styles.sectionDesc}>
              Technologies we use to build reliable, scalable, and AI-ready mobile products.
            </p>
            <div className={styles.industryCards}>
              <div className={styles.industryRow}>
                {TECH_STACKS.map((stack) => (
                  <div key={stack.title} className={styles.industryCol}>
                    <div className={styles.techCard}>
                      <h3 className={styles.techCardTitle}>{stack.title}</h3>
                      <ul className={styles.techList}>
                        {stack.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 15. CASE STUDIES (CaseCards windowed) ───────────────────── */}
        <div id="mobile-cases" className={styles.casesWrapper}>
          <CaseCards
            cards={MOBILE_CASES}
            heading={<>Check <span>mobile apps</span> we successfully launched</>}
            windowed
          />
        </div>

        {/* ── 16. REVIEW SLIDER ────────────────────────────────────────── */}
        <ServicesReviewSlider />

        {/* ── 17. DOWNLOAD CTA 3 ──────────────────────────────────────── */}
        <section className={styles.downloadCta}>
          <div className="container">
            <div className={styles.ctaRow}>
              <div>
                <h2 className={styles.ctaTitle}>Talk to Nexterse Mobile App Experts</h2>
                <p className={styles.ctaDesc}>Get strategic insights and technical guidance from developers with real-world success.</p>
              </div>
              <div>
                <a href="#get-modal-popup" className={`btn btn-accent ${styles.ctaHeaderBtn}`}>Book free consultation</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 18. ADVANCED TECH (dark, no icons) ──────────────────────── */}
        <section id="mobile-advanced-tech" className={`${styles.servBlockDark} ${styles.advancedTechSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitleWhite}>
              <span className={styles.accent}>Advanced</span> tech in mobile apps
            </h2>
            <p className={styles.sectionDescWhite}>
              We use advanced technologies in mobile products when they improve response time, device-side processing,
              system access, or connected workflows. The point is to support a product requirement that standard mobile
              patterns do not cover.
            </p>
            <div className={styles.cardsGrid}>
              <div className={styles.cardsRow3}>
                {ADVANCED_TECH.map((item) => (
                  <div key={item.title} className={styles.cardCol3}>
                    <div className={styles.serviceCardDark}>
                      <span className={styles.cardTitleWhite}>{item.title}</span>
                      <p className={styles.cardDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 19. WHY NEXTERSE (3-col, centered) ──────────────────────── */}
        <section id="mobile-why" className={styles.whySection}>
          <div className="container">
            <h2 className={styles.whyTitle}>
              <span className={styles.accent}>Why</span> companies choose Nexterse LLC
            </h2>
            <div className={styles.whyCards}>
              <div className={styles.whyRow}>
                {WHY_CARDS.map((card) => (
                  <div key={card.title} className={styles.whyCol}>
                    <div className={styles.whyCard}>
                      <h3 className={styles.whyCardTitle}>{card.title}</h3>
                      <p className={styles.whyCardDesc}>{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 20. AWARDS & RECOGNITIONS ────────────────────────────────── */}
        <ServicesAchievements
          badges={MOBILE_AWARDS}
          description="Nexterse LLC has been recognized by leading analytics agencies from around the world. We deliver value, not just software."
        />

        {/* ── 21. DOWNLOAD CTA 4 ──────────────────────────────────────── */}
        <section className={styles.downloadCta}>
          <div className="container">
            <div className={styles.ctaRow}>
              <div>
                <h2 className={styles.ctaTitle}>Get a Detailed Project Estimate</h2>
                <p className={styles.ctaDesc}>Receive a clear breakdown of cost, timeline, and tech stack tailored to your app concept.</p>
              </div>
              <div>
                <a href="#get-modal-popup" className={`btn btn-accent ${styles.ctaHeaderBtn}`}>Get free quote</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 22. FAQ ──────────────────────────────────────────────────── */}
        <div id="mobile-faq">
          <ServicesFaqBlock items={MOBILE_FAQ} />
        </div>

        {/* ── 23. LET'S START ──────────────────────────────────────────── */}
        <LetsStart />

        {/* ── 24. BLOG ─────────────────────────────────────────────────── */}
        <ServicesBlogSection featured={MOBILE_BLOG_FEATURED} sidePosts={MOBILE_BLOG_SIDE} />

        {/* ── 25. CROSSLINKS ───────────────────────────────────────────── */}
        <MobileCrosslinks />

      </MobileArticleLayout>
    </>
  );
}
