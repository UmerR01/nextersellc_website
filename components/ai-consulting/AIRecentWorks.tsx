import CaseCards, { type CaseCard } from "@/components/home/CaseCards";

const cases: CaseCard[] = [
  {
    banner: "/ai-consulting/imgs/11_Cover-1-1.png",
    name: "IoT · AI · Enterprise",
    title: "AI-powered predictive maintenance for a large industrial manufacturer",
    text: "An AIoT upgrade that cut unplanned downtime by 50% within 8 months, adding explainable ML and context analysis to the existing IoT platform.",
    tags: ["IoT", "AI inside", "Enterprise"],
  },
  {
    banner: "/ai-consulting/imgs/10_Cover-1-1.png",
    name: "AI · Enterprise",
    title: "AI/ML route optimization for a freight delivery service",
    text: "Lifted on-time delivery to 98% — without expanding the fleet. An AI/ML platform that plans and reoptimizes B2B/B2C routes in real time, cutting last-mile costs by 22%.",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/ai-consulting/imgs/07_Cover-right-2.png",
    name: "AI · Nonprofit",
    title: "AI-powered knowledge base for a global rights nonprofit",
    text: "A Middle Eastern nonprofit needed a single searchable repository for fragmented research. Nexterse LLC built a multilingual AI platform that now indexes 12,000+ artifacts across 18 countries.",
    tags: ["AI inside", "Enterprise"],
  },
  {
    banner: "/ai-consulting/imgs/12_Cover-2-1.png",
    name: "IoT · AI · Renewables",
    title: "IoT and ML predictive maintenance for a 28-turbine wind farm",
    text: "A German operator runs 28 onshore turbines. We built a predictive maintenance layer on top of the existing SCADA. Within 12 months, unplanned downtime fell by 38%, and availability rose to 97.7%.",
    tags: ["IoT", "AI inside", "Enterprise"],
  },
];

export default function AIRecentWorks() {
  return (
    <CaseCards
      cards={cases}
      heading={<>Our recent AI <span>works</span></>}
    />
  );
}
