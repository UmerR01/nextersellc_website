import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogosMarquee from "@/components/LogosMarquee";
import StatsBlock from "@/components/StatsBlock";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Quotes from "@/components/Quotes";
import CaseCards from "@/components/CaseCards";
import Workflow from "@/components/Workflow";
import Certificates from "@/components/Certificates";
import Industries from "@/components/Industries";
import CoreTech from "@/components/CoreTech";
import WhyWork from "@/components/WhyWork";
import LetsStart from "@/components/LetsStart";
import Faq from "@/components/Faq";
import Stories from "@/components/Stories";

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
