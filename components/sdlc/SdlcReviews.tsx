"use client";

import TeamReviewSlider, { type TeamReview } from "@/components/team/TeamReviewSlider";

type Review = {
  texts: string[];
  name: string;
  position: string;
  photo?: { src: string; width: number; height: number };
  logo?: { src: string; width: number; height: number };
};

const reviews: Review[] = [
  {
    texts: [
      "Nexterse is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality.",
      "Important, they help you think with the business logic of your application and they don't blindly follow what you are saying. Which is super important. Overall, great skills, good communication, and happy with the results so far.",
    ],
    name: "Domien Van Eynde",
    position: "Team Lead, Daiokan.com",
    photo: { src: "/sdlc/01_photo2.png", width: 144, height: 144 },
  },
  {
    texts: [
      "The system has produced a significant competitive advantage in the industry thanks to Nexterse's well-thought opinions.",
      "They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    ],
    name: "Alexander McCaig",
    position: "Co-Founder & CEO, Tartle",
    photo: { src: "/sdlc/01_photo.png", width: 144, height: 144 },
  },
  {
    texts: [
      "I was impressed by Nexterse's prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies.",
      "Also, their communication skills were great; it never felt like a long-distance project. It felt like Nexterse was working next door because their project manager was always keeping me updated.",
    ],
    name: "Benjamin Dorsinvil",
    position: "Founder, SellBig",
    photo: { src: "/sdlc/12_5cc8378b669af259c74ec736_b_dorsinvil-2-1-1.jpg", width: 288, height: 288 },
  },
  {
    texts: [
      "We tried another company that one of our partners had used but they didn't work out. I feel that Nexterse does a better investigation of what we're asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    ],
    name: "Damian Gevertz",
    position: "Founder & CEO, Widgety",
    photo: { src: "/sdlc/01_photo6.png", width: 144, height: 144 },
  },
  {
    texts: [
      "Together with the team, we have turned the MVP version of the service into a modern full-featured platform for online marketers. We are very satisfied with the work the Nexterse team has performed, and we would like to highlight the high level of technical expertise, coherence and efficiency of communication and flexibility in work.",
      "We can confidently say that Nexterse has put all our ideas into practice.",
    ],
    name: "Katerina Bromberg",
    position: "Co-Founder, MyMediAds.com",
    photo: { src: "/sdlc/01_photo7.png", width: 144, height: 144 },
  },
  {
    texts: [
      "Nexterse succeeded in building a more manageable solution that is much easier to maintain.",
    ],
    name: "Yevgeniy Rozenblat",
    position: "Program Manager, TL Nika",
    photo: { src: "/sdlc/01_photo3.png", width: 144, height: 144 },
  },
  {
    texts: [
      "Thanks to Nexterse's can-do attitude, amazing work ethic, and willingness to tackle clients' problems as their own, they've become an integral part of our team.",
      "We are completely satisfied with the results of our cooperation and will be happy to recommend Nexterse as a reliable and competent partner for development of web-based solutions.",
    ],
    name: "Yury Haverman",
    position: "Founder, BoxForward",
    logo: { src: "/sdlc/01_logo.svg", width: 300, height: 126 },
  },
  {
    texts: [
      "From the early stages of the project, Nexterse demonstrated a proactive attitude, actively seeking opportunities to enhance the solution and anticipate our needs.",
    ],
    name: "Dave Alce",
    position: "COO",
    logo: { src: "/sdlc/08_protech_solutions_inc_logo.jpg", width: 200, height: 200 },
  },
  {
    texts: [
      "We brought in Nexterse to help us reduce unexpected turbine failures, and the result met our expectations.",
    ],
    name: "Markus Keller",
    position: "Head of Operations",
    photo: { src: "/sdlc/01_Markus-Keller-300x300.png", width: 300, height: 300 },
  },
  {
    texts: [
      "Working with Nexterse has been an outstanding experience. Their team is not only highly skilled but also incredibly responsive, collaborative, and committed to delivering quality results. I can't recommend them enough! Thank you team Nexterse for bringing my vision to life.",
    ],
    name: "Julie Crawford",
    position: "Founder",
    photo: { src: "/sdlc/08_Julia-C-300x300.jpg", width: 300, height: 300 },
  },
  {
    texts: [
      "We've been working with Nexterse for a few years, starting from the initial monitoring system, so they already understood our environment quite well. At the same time, they still managed to surprise us with their professionalism.",
    ],
    name: "Alex Phelps",
    position: "CEO",
    photo: { src: "/sdlc/05_Alex-Phelps.png", width: 144, height: 144 },
  },
  {
    texts: [
      "We'd like to sincerely thank Nexterse for the work they've done on our maintenance system. At one point, our maintenance efforts became inefficient – long downtimes and rising repair costs became the norm.",
    ],
    name: "Dillon Christensen",
    position: "CEO",
    photo: { src: "/sdlc/05_Dillon-Christensen.png", width: 144, height: 144 },
  },
  {
    texts: [
      "We had already invested in AI, but the output was unclear. There were multiple initiatives across the company, each showing some promise, but no clear way to evaluate them or connect them to business outcomes.",
    ],
    name: "Erica Lindsay",
    position: "Manager",
    photo: { src: "/sdlc/05_Erica-Lindsay.png", width: 144, height: 144 },
  },
];

export default function SdlcReviews() {
  const sliderReviews: TeamReview[] = reviews.map((review) => ({
    text: review.texts.join(" "),
    name: review.name,
    position: review.position,
    photo: review.photo?.src,
    logo: review.logo?.src,
  }));

  return (
    <TeamReviewSlider
      reviews={sliderReviews}
      linkLabel="All Reviews"
      linkHref="/testimonials"
    />
  );
}
