import CaseCards from "@/components/home/CaseCards";
import LetsStart from "@/components/home/LetsStart";
import AwesomeStories from "@/components/blog/AwesomeStories";
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
// ─── Awesome stories (blog) ──────────────────────────────────────────────────────
const PRICING_BLOG_FEATURED = {
  href: "/blog/ai-development-costs",
  title: "What Affects AI Development Cost in 2026",
  image: "/pricing/05_AI-development-costs-1024x578.jpg",
  imageAlt: "AI development costs",
  readTime: "40 mins",
  date: "March 11, 2026",
};
const PRICING_BLOG_SIDE = [
  { href: "/blog/ai-app-development-costs", title: "Complete Guide: AI Development Costs Breakdown", readTime: "34 mins", date: "March 7, 2026" },
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
        <CaseCards heading={<>Our recent <span>works</span></>} windowed />
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
      <AwesomeStories />
    </>
  );
}
