import { PhosphorIcon } from "@/components/products/phosphorPaths";
import { BusinessIllustration, ProductsIllustration, TechStackIllustration } from "./BenefitIllustrations";
import styles from "./WhyPartner.module.css";

const BIG_CARDS = [
  {
    media: <TechStackIllustration />,
    title: "Modern tech stacks, solved",
    desc: "We build on the best modern and trending technologies, from React and Next.js to Flutter, Python and cloud infrastructure. For every stack we know the problems teams run into, such as performance, scaling and maintainability, and we bring proven solutions. Your clients get a current, well supported build instead of a risky experiment.",
  },
  {
    media: <ProductsIllustration />,
    bleed: true,
    title: "Products ready to use",
    desc: "Partners get easy access to products we have already built: Xorris for AI calling, SalesHub for quoting and Joblynk for recruiting. Offer clients proven software they can start using right away, with no custom build to wait for. It means a faster path to value and a new source of revenue.",
  },
  {
    media: <BusinessIllustration />,
    title: "Build businesses",
    desc: "Deliver expert services that help your clients grow. Build the product, integrate their platforms, launch it, and then optimize, market and scale it with a team that stays involved at every stage. Every engagement you bring us is a business you help build.",
  },
];

const SMALL_CARDS = [
  {
    icon: "ArrowUpRight" as const,
    title: "When you win, we win",
    desc: "Every referral and joint engagement is structured to benefit both sides, not just fill our pipeline. We measure a partnership's success by the outcomes it delivers together, not by volume alone.",
  },
  {
    icon: "GridFour" as const,
    title: "Real technical overlap",
    desc: "This is not a logo swap for a partners page. Before we call it a partnership, we confirm there is genuine overlap between your stack and ours, and that our teams can actually deliver together.",
  },
  {
    icon: "ChatCircleText" as const,
    title: "A dedicated point of contact",
    desc: "One person owns the relationship on our side from day one. You get a direct line to someone who understands your account, instead of chasing a shared inbox for an answer.",
  },
];

export default function WhyPartner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.title}>
            Partner <span className={styles.accent}>Benefits</span>
          </h2>
          <p className={styles.sub}>What you actually get out of partnering with Nexterse LLC.</p>
        </div>

        <div className={styles.bigGrid}>
          {BIG_CARDS.map((c) => (
            <div key={c.title} className={styles.bigCard}>
              <div className={`${styles.bigCardMedia} ${"bleed" in c && c.bleed ? styles.bleed : ""}`}>
                <div className={styles.mediaInner}>{c.media}</div>
              </div>
              <div className={styles.bigCardBody}>
                <h3 className={styles.bigCardTitle}>{c.title}</h3>
                <p className={styles.bigCardDesc}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.divider} />

        <div className={styles.smallGrid}>
          {SMALL_CARDS.map((c) => (
            <div key={c.title} className={styles.smallCard}>
              <PhosphorIcon name={c.icon} className={styles.smallIcon} />
              <h4 className={styles.smallTitle}>{c.title}</h4>
              <p className={styles.smallDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
