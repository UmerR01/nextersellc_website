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
      "The system has produced a significant competitive advantage in the industry thanks to Nexterse's well-thought opinions.",
      "They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    ],
    name: "Alexander McCaig",
    position: "Co-Founder & CEO, Tartle",
    photo: { src: "/adlc/01_photo.png", width: 144, height: 144 },
  },
  {
    texts: [
      "Nectarin LLC aimed to develop a complex Ruby on Rails-based platform, which would be closely integrated with such systems as Google AdWords, Yandex Direct and Google Analytics.",
    ],
    name: "Andrey Kubka",
    position: "Product Technology Manager, Mediatron",
    photo: { src: "/adlc/01_photo12.png", width: 144, height: 144 },
  },
  {
    texts: [
      "I was impressed by Nexterse's prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies.",
      "Also, their communication skills were great; it never felt like a long-distance project. It felt like Nexterse was working next door because their project manager was always keeping me updated. Initially.",
    ],
    name: "Benjamin Dorsinvil",
    position: "Founder, SellBig",
    photo: { src: "/adlc/12_5cc8378b669af259c74ec736_b_dorsinvil-2-1-1.jpg", width: 288, height: 288 },
  },
  {
    texts: [
      "We tried another company that one of our partners had used but they didn't work out. I feel that Nexterse does a better investigation of what we're asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    ],
    name: "Damian Gevertz",
    position: "Founder & CEO, Widgety",
    photo: { src: "/adlc/01_photo6.png", width: 144, height: 144 },
  },
  {
    texts: [
      "Nexterse is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality.",
      "Important, they help you think with the business logic of your application and they don't blindly follow what you are saying. Which is super important. Overall, great skills, good communication, and happy with the results so far.",
    ],
    name: "Domien Van Eynde",
    position: "Team Lead, Daiokan.com",
    photo: { src: "/adlc/01_photo2.png", width: 144, height: 144 },
  },
  {
    texts: [
      "Together with the team, we have turned the MVP version of the service into a modern full-featured platform for online marketers. We are very satisfied with the work the Nexterse team has performed, and we would like to highlight the high level of technical expertise, coherence and efficiency of communication and flexibility in work.",
      "We can confidently say that Nexterse has put all our ideas into practice.",
    ],
    name: "Katerina Bromberg",
    position: "Co-Founder, MyMediAds.com",
    photo: { src: "/adlc/01_photo7.png", width: 144, height: 144 },
  },
  {
    texts: [
      "We are absolutely convinced that cooperation between companies is only successful when based on effective teamwork (and Captain Obvious is on our side!). But the teams may vary on the degree of their cohesion.",
    ],
    name: "Maria Duyunova",
    position: "Director, Simplimagine LLC",
    photo: { src: "/adlc/01_photo10.png", width: 144, height: 144 },
  },
  {
    texts: [
      "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done.",
      "I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with.",
    ],
    name: "Michael Karbushev",
    position: "Senior Director of Engineering, Evolv",
    photo: { src: "/adlc/01_photo11.png", width: 144, height: 144 },
  },
  {
    texts: [
      "Rivalfox had the pleasure to work with Nexterse in building out core portions of our product, and the results really couldn't have been better.",
      "Nexterse provided us with engineering expertise, enthusiasm and great people that were focused on creating quality features quickly.",
    ],
    name: "Paul S. Chun",
    position: "CTO, Rivalfox GmbH",
    photo: { src: "/adlc/01_photo5.png", width: 144, height: 144 },
  },
  {
    texts: [
      "We'd like to thank Nexterse for the exceptional technical services provided for our business. It should be noted that we started our project's development with another team, but the communication and the development process in general were not transparent and on schedule. It resulted in a low-quality final product.",
    ],
    name: "Pratasevich Ivan",
    position: "Chief Executive Officer, Ivanco-Media LLC",
    logo: { src: "/adlc/01_logo-1.svg", width: 300, height: 126 },
  },
  {
    texts: [
      "Nexterse succeeded in building a more manageable solution that is much easier to maintain.",
    ],
    name: "Yevgeniy Rozenblat",
    position: "Program Manager, TL Nika",
    photo: { src: "/adlc/01_photo3.png", width: 144, height: 144 },
  },
  {
    texts: [
      "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose Nexterse. The company proved itself a reliable provider of IT services.",
    ],
    name: "Yuriy Semenchuk",
    position: "General Director, Business Car",
    photo: { src: "/adlc/01_photo9.png", width: 144, height: 144 },
  },
  {
    texts: [
      "Thanks to Nexterse's can-do attitude, amazing work ethic, and willingness to tackle clients' problems as their own, they've become an integral part of our team. We've been truly impressed with their professionalism and performance and continue to work with the team on developing new applications.",
      "We are completely satisfied with the results of our cooperation and will be happy to recommend Nexterse as a reliable and competent partner for development of web-based solutions",
    ],
    name: "Yury Haverman",
    position: "Founder, BoxForward",
    logo: { src: "/adlc/01_logo.svg", width: 300, height: 126 },
  },
];

export default function AdlcReviews() {
  const teamReviews: TeamReview[] = reviews.map((review) => ({
    text: review.texts.join(" "),
    name: review.name,
    position: review.position,
    photo: review.photo?.src,
    logo: review.logo?.src,
  }));

  return (
    <TeamReviewSlider
      reviews={teamReviews}
      linkLabel="All Reviews"
      linkHref="/testimonials"
    />
  );
}
