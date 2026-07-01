import type { Metadata } from "next";
import Header from "@/components/Header";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import ReviewsGrid from "@/components/testimonials/ReviewsGrid";
import AwardsBlock from "@/components/testimonials/AwardsBlock";
import LetsStart from "@/components/home/LetsStart";
import CrosslinksBlock from "@/components/testimonials/CrosslinksBlock";

export const metadata: Metadata = {
  title: "Client Testimonials | Nexterse",
  description:
    "See what our clients say about working with Nexterse. Read verified reviews and testimonials from 350+ delivered projects across 20+ industries.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <TestimonialsHero />
      <ReviewsGrid />
      <AwardsBlock />
      <LetsStart variant="testimonials" />
      <CrosslinksBlock />
    </>
  );
}
