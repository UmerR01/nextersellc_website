import CaseCards, { type CaseCard } from "@/components/home/CaseCards";
import LetsStart from "@/components/home/LetsStart";
import AdlcBlog, { type AdlcFeaturedPost, type AdlcBlogPost } from "@/components/adlc/AdlcBlog";
import PricingHero from "./PricingHero";
import PricingQuiz from "./PricingQuiz";
import PricingModels from "./PricingModels";
import PricingCostBreakdown from "./PricingCostBreakdown";
import PricingFaq from "./PricingFaq";
import PricingEstimationImage from "./PricingEstimationImage";
import PricingVideo from "./PricingVideo";
import PricingLogos from "./PricingLogos";
import PricingAwards from "./PricingAwards";
import PricingCheckThisOut from "./PricingCheckThisOut";
import PricingReviews from "./PricingReviews";

// ─── Our recent works (8, clone content) ───────────────────────────────────────
const PRICING_CASES: CaseCard[] = [
  {
    banner: "/pricing/07_Cover-right-2.png",
    name: "AI-powered stack",
    title: "AI-powered knowledge base for a global rights nonprofit",
    text: "A Middle Eastern nonprofit working in cultural preservation needed a single searchable repository for fragmented research on ethnic minorities. Nexterse LLC built a multilingual AI platform that now indexes 12,000+ artifacts across 18 countries.",
    href: "/portfolio/ai-knowledge-base-development",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/pricing/02_Frame-1787-1.png",
    name: "Traditional tech stack",
    title: "Dexai Robotics: graphical user interface for robot operation",
    text: "A GUI that freed Dexai Robotics' restaurant staff from engineer dependency – cutting robot setup time per shift by ~65% and reducing interaction errors by ~50% through real-time visual state monitoring and offline operation.",
    href: "/portfolio/dexai",
    tags: ["IoT", "Startups"],
  },
  {
    banner: "/pricing/09_inbound_transportation_kanban_board011@2x.png",
    name: "Traditional tech stack",
    title: "Toyota custom ERP/CRM system",
    text: "A custom ERP/CRM for Business Car Group – Russia's largest Toyota and Lexus dealer network – that replaced decade-old disjointed tools with a unified platform, cutting sales cycles by 30% across 20 dealer centers.",
    href: "/portfolio/scalex-custom-erp-system-for-automotive-industry",
    tags: ["Enterprise"],
  },
  {
    banner: "/pricing/01_Cover.png",
    name: "Traditional tech stack",
    title: "A media buying system for a leading US-based advertising agency",
    text: "50x faster ad operations and data processing cut from hours to under a minute – we replaced a 20-year-old FileMaker system with a custom platform covering 100+ operational workflows.",
    href: "/portfolio/media-buying-software-development",
    tags: ["Enterprise"],
  },
  {
    banner: "/pricing/11_Cover-1-1.png",
    name: "AI-powered stack",
    title: "AI-powered predictive maintenance for a large industrial manufacturer",
    text: "An AIoT upgrade that cut unplanned downtime by 50% within 8 months, adding explainable ML and context analysis to the existing IoT platform.",
    href: "/portfolio/ai-powered-predictive-maintenance-for-a-large-industrial-manufacturer",
    tags: ["IoT", "AI inside", "Enterprise"],
  },
  {
    banner: "/pricing/06_Cover-1.png",
    name: "Traditional tech stack",
    title: "Event platform for indie organizers across Europe",
    text: "A platform for indie event organizers that drove 8,000+ ticket sales in four months, with 54% of attendees completing post-event feedback — replacing a 4–5 tool workflow with a single dashboard.",
    href: "/portfolio/event-platform-development",
    tags: ["Startups"],
  },
  {
    banner: "/pricing/12_Cover-2-1.png",
    name: "AI-powered stack",
    title: "IoT and ML predictive maintenance for a 28-turbine wind farm",
    text: "A German operator runs 28 onshore turbines. Nexterse LLC built a predictive maintenance layer on top of the existing SCADA. Within 12 months, unplanned downtime fell by 38%, and availability rose to 97.7%.",
    href: "/portfolio/ml-based-predictive-maintenance-for-wind-farm",
    tags: ["IoT", "AI inside", "Enterprise"],
  },
  {
    banner: "/pricing/10_Cover-1.png",
    name: "Traditional tech stack",
    title: "Advanced structural analysis web app for a leading steel distributor",
    text: "Engineers complete structural analyses ~45% faster with a web platform that integrates the Client's Excel-based calculation logic, delivers real-time Shear, Deflection, and Moment visualization, and centralizes project records for geotechnical teams.",
    href: "/portfolio/advanced-structural-analysis-web-application",
    tags: ["Enterprise"],
  },
];

// ─── Awesome stories (blog) ──────────────────────────────────────────────────────
const PRICING_BLOG_FEATURED: AdlcFeaturedPost = {
  href: "/blog/ai-development-costs",
  title: "What Affects AI Development Cost in 2026",
  image: "/pricing/05_AI-development-costs-1024x578.jpg",
  imageAlt: "AI development costs",
  readTime: "40 mins",
  date: "March 11, 2026",
};
const PRICING_BLOG_SIDE: AdlcBlogPost[] = [
  { href: "/blog/iot-app-development-costs", title: "Complete Guide: IoT Development Costs Breakdown", readTime: "34 mins", date: "March 7, 2026" },
  { href: "/blog/software-development-process", title: "Complete Guide: Software Development Process in 14 Steps", readTime: "53 mins", date: "November 19, 2025" },
  { href: "/blog/software-development-cost-estimation", title: "Software Development Cost Estimation: Methods, Accuracy & Real Costs", readTime: "19 mins", date: "March 28, 2026" },
];

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingQuiz />
      <PricingModels />

      <div id="pricing-cases">
        <CaseCards heading={<>Our recent <span>works</span></>} cards={PRICING_CASES} windowed />
      </div>

      <PricingReviews />
      <PricingCostBreakdown />
      <PricingFaq />
      <PricingEstimationImage />
      <PricingVideo />
      <PricingLogos />
      <PricingAwards />
      <PricingCheckThisOut />
      <LetsStart />
      <AdlcBlog featured={PRICING_BLOG_FEATURED} sidePosts={PRICING_BLOG_SIDE} />
    </>
  );
}
