import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import LogosMarquee from "@/components/home/LogosMarquee";
import StatsBlock from "@/components/home/StatsBlock";
import Testimonials from "@/components/home/Testimonials";
import Services from "@/components/home/Services";
import Quotes from "@/components/home/Quotes";
import CaseCards from "@/components/home/CaseCards";
import Workflow from "@/components/home/Workflow";
import Certificates from "@/components/home/Certificates";
import Industries from "@/components/home/Industries";
import CoreTech from "@/components/home/CoreTech";
import WhyWork from "@/components/home/WhyWork";
import LetsStart from "@/components/home/LetsStart";
import Faq from "@/components/home/Faq";
import Stories from "@/components/home/Stories";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogosMarquee />
        <StatsBlock />
        <Testimonials />
        <Services />
        <Quotes />
        <CaseCards />
        <Workflow />
        <Certificates />
        <Industries />
        <CoreTech />
        <WhyWork />
        <LetsStart />
        <Faq />
        <Stories />
      </main>
    </>
  );
}
