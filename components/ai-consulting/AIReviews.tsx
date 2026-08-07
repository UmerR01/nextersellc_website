import ServicesReviewSlider, { type Review } from "@/components/services/ServicesReviewSlider";
import styles from "./AIReviews.module.css";

const AI_REVIEWS: Review[] = [
  {
    quote:
      "The system has produced a significant competitive advantage in the industry thanks to their well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    name: "Alexander McCaig",
    role: "Co-Founder & CEO, Tartle",
    photo: "/ai-consulting/imgs/01_photo.png",
    photoAlt: "Alexander McCaig",
  },
  {
    quote:
      "I was impressed by the prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies. Also, their communication skills were great; it never felt like a long-distance project. Their project manager was always keeping me updated.",
    name: "Benjamin Dorsinvil",
    role: "Founder, SellBig",
    photo: "/ai-consulting/imgs/12_5cc8378b669af259c74ec736_b_dorsinvil-2-1-1.jpg",
    photoAlt: "Benjamin Dorsinvil",
  },
  {
    quote:
      "We brought them in to help us reduce unexpected turbine failures, and the result met our expectations. The team's expertise in IoT and machine learning delivered exactly what we needed to improve operational performance.",
    name: "Markus Keller",
    role: "Head of Operations",
    photo: "/ai-consulting/imgs/01_Markus-Keller-300x300.png",
    photoAlt: "Markus Keller",
  },
  {
    quote:
      "We tried another company that one of our partners had used but they didn't work out. I feel that the team does a better investigation of what we're asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    name: "Damian Gevertz",
    role: "Founder & CEO, Widgety",
    photo: "/ai-consulting/imgs/01_photo6.png",
    photoAlt: "Damian Gevertz",
  },
  {
    quote:
      "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made very good suggestions.",
    name: "Michael Karbushev",
    role: "Senior Director of Engineering, Evolv",
    photo: "/ai-consulting/imgs/01_photo11.png",
    photoAlt: "Michael Karbushev",
  },
  {
    quote:
      "Working with Nexterse LLC has been an outstanding experience. Their team is not only highly skilled but also incredibly responsive, collaborative, and committed to delivering quality results. I can't recommend them enough! Thank you team Nexterse LLC for bringing my vision to life.",
    name: "Julie Crawford",
    role: "Founder",
    photo: "/ai-consulting/imgs/08_Julia-C-300x300.jpg",
    photoAlt: "Julie Crawford",
  },
];

export default function AIReviews() {
  return (
    <div className={styles.reviewSpacing}>
      <ServicesReviewSlider reviews={AI_REVIEWS} />
    </div>
  );
}


