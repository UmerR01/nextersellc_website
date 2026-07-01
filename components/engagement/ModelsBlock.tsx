import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./ModelsBlock.module.css";

interface Col {
  icon: string;
  alt: string;
  title: string;
  content: ReactNode;
  ctaLink?: string;
}

interface ModelData {
  id: string;
  bg: "white" | "light";
  titleHtml: ReactNode;
  description: ReactNode;
  cols: Col[];
  dark?: boolean;
}

const MODELS: ModelData[] = [
  {
    id: "time-material",
    bg: "light",
    titleHtml: <><span className={styles.blue}>Time</span> &amp; Material model</>,
    description: <p>In the Time and Material model, you pay for the actual work done. Billing is based on tracked man-hours and any materials or tools used. All tasks and efforts to complete them are registered and reported to you every week. The requirements, scope, and budget are not fixed, while the hourly rate is agreed upon in the contract. Even without a fixed scope, our experienced PMs deliver estimates with tight variance and monitor cost forecasts at every stage.</p>,
    cols: [
      {
        icon: "/engagement/01_How-does-it-work_.svg",
        alt: "Gear icon",
        title: "How does it work?",
        content: <p>This model is especially well-suited for Agile methodology. Work is typically organized in short iterations (sprints). No detailed specification is needed to kick off the project; the team estimates tasks on the fly and begins coding quickly. You, as a Client, get a progress report, detailed time/expense logs, and a demo during weekly or bi-weekly meetings. Any features added during the project are simply billed at the agreed-upon hourly rates. The team can be easily scaled up or down depending on the development needs.</p>,
      },
      {
        icon: "/engagement/01_When-is-it-best-used_.svg",
        alt: "Bulb icon",
        title: "When is it best used?",
        content: <ul><li>The T&amp;M model is best suited for projects with unclear or evolving requirements, where providing a detailed specification at the project start is of little value.</li><li>There is no specification, but the project needs to start immediately and move quickly.</li><li>A long-term cooperation with the Service provider is planned.</li><li>There are no strict deadlines.</li></ul>,
      },
      {
        icon: "/engagement/01_Business-benefits.svg",
        alt: "Graph icon",
        title: "Business benefits",
        content: <ul><li><strong>Flexibility &amp; control</strong> – scope, feature priorities, and even team size can be changed at any time. You decide the project direction each sprint.</li><li><strong>Full transparency</strong> – you get a detailed breakdown of tasks and efforts spent, a clear roadmap, and regular updates on the project progress. You know the current efforts, path traveled, and the next step.</li><li><strong>Quick start</strong> – little upfront planning is needed without a long requirements phase.</li><li><strong>Cost efficiency</strong> – you pay only for completed work. In many cases, this can yield a lower total cost than a fixed-price bid.</li></ul>,
        ctaLink: "/contact",
      },
    ],
  },
  {
    id: "fixed-price",
    bg: "white",
    titleHtml: <><span className={styles.blue}>Fixed </span>price model</>,
    description: <p>In a Fixed-Price engagement, the project scope, schedule, and budget are agreed upon upfront. The budget is based on a detailed specification and frozen for the whole project. All payments within this model are made on pre-defined milestones. As the first step of cooperation, we finalize all requirements during a Discovery phase.</p>,
    cols: [
      {
        icon: "/engagement/01_How-does-it-work_.svg",
        alt: "Gear icon",
        title: "How does it work?",
        content: <p>Once we get the full specification, our development team estimates all tasks, locking the total cost and deliverables. Once a contract is signed, the development phase begins strictly according to the plan. No additional functionality can be added to the scope without cost re-estimation. Even feature replacement requires a price revision. In short, the fixed-price model runs like a &quot;closed box&quot; without any flexibility for changes.</p>,
      },
      {
        icon: "/engagement/01_When-is-it-best-used_.svg",
        alt: "Bulb icon",
        title: "When is it best used?",
        content: <ul><li>Well-defined requirements, when the project specification is clearly defined and is unlikely to be altered before the release.</li><li>Short, straightforward projects that last under a few months, and the detailed functionality description can be prepared from the start.</li><li>Projects with strict budget requirements, like projects funded by grants or with a non-exceedable budget.</li><li>Proof of concept (PoC) development, code audits, or one-time tasks with clear boundaries.</li></ul>,
      },
      {
        icon: "/engagement/01_Business-benefits.svg",
        alt: "Graph icon",
        title: "Business benefits",
        content: <ul><li><strong>Predictable budget</strong> – you know the total cost upfront with guarantee to get the final product without exceeding the budget.</li><li><strong>Minimal surprises</strong> – the price can&apos;t be changed, nor can the scope. You will get exactly what you agreed upon at the beginning.</li><li><strong>Lower management overhead</strong> – once development starts, you can leave all the work to the development team and only return when the product is ready.</li></ul>,
        ctaLink: "/contact",
      },
    ],
  },
  {
    id: "tm-cap",
    bg: "light",
    titleHtml: <>Time &amp; Material (T&amp;M) with<span className={styles.blue}> budget cap</span></>,
    description: <p>Time &amp; Material with a budget cap is a hybrid model combining T&amp;M&apos;s flexibility with a guaranteed maximum spend. You still pay for hours and resources as in standard T&amp;M, but the contract includes an overall cap (often called a &quot;not-to-exceed&quot; limit) on the total cost. The budget is fixed, while the scope remains flexible. This is the most popular engagement strategy nowadays. Often, this model follows a fixed-price discovery or architecture phase and transitions into flexible T&amp;M for development.</p>,
    cols: [
      {
        icon: "/engagement/01_How-does-it-work_.svg",
        alt: "Gear icon",
        title: "How does it work?",
        content: <p>In practice, the T&amp;M+Cap contract and its development approach are structured like a regular T&amp;M contract but with explicit budget controls. The development is divided into sprints and requires your active participation in demos and progress meetings. You pay for the actual effort spent, but with the rule that the sum of all invoices will never exceed the agreed cap. Any altered or new requirements are examined and estimated for their potential impact on the deadline and budget. If we see that the cap is about to be exceeded, we immediately alert you and suggest options for staying within the cap. At that point, you can decide whether to extend the cap (with a change order) or reduce the remaining scope to stay within budget.</p>,
      },
      {
        icon: "/engagement/01_When-is-it-best-used_.svg",
        alt: "Bulb icon",
        title: "When is it best used?",
        content: <ul><li>The project has unclear or dynamic requirements, but you have a strict budget limit.</li><li>The majority of Agile projects.</li><li>MVP with limited budget.</li><li>Support activities and legacy system modernization.</li></ul>,
      },
      {
        icon: "/engagement/01_Business-benefits.svg",
        alt: "Graph icon",
        title: "Business benefits",
        content: <ul><li><strong>Budget certainty</strong> – the project has an upper limit agreed upon from the start.</li><li><strong>Requirements flexibility</strong> – this model provides all the benefits of flexibility for dealing with dynamic and unclear requirements than an ordinary Time and Material model.</li><li><strong>Risk mitigation</strong> – the budget cap protects from runaway costs and encourages the discussion of any changes that might lead to a budget overrun.</li><li><strong>Transparency</strong> – you still get the same detailed reporting as in regular T&amp;M, including weekly demos, hours logged, progress reports, etc.</li></ul>,
        ctaLink: "/contact",
      },
    ],
  },
  {
    id: "dedicated-team",
    bg: "white",
    titleHtml: <>Dedicated <span className={styles.blue}>team</span> model</>,
    description: <p>The Dedicated Team model assembles a full-time team of specialists who work exclusively on your project as if they were your own staff. Billing is based on a fixed monthly fee for those team members.</p>,
    cols: [
      {
        icon: "/engagement/01_How-does-it-work_.svg",
        alt: "Gear icon",
        title: "How does it work?",
        content: <p>You define the roles and expertise needed, and we assemble a team with the most well-suited specialists for your requirements. The team becomes an extension of your in-house staff. You are fully responsible for team management and control. The developers will report directly to you. On our part, we will monitor the quality of the services provided and get involved if necessary.</p>,
      },
      {
        icon: "/engagement/01_When-is-it-best-used_.svg",
        alt: "Bulb icon",
        title: "When is it best used?",
        content: <ul><li>You have in-house specialists who can manage the software development process.</li><li>When you have a substantial project and want ongoing development capacity.</li><li>It&apos;s ideal when project requirements are clear and you need the development team to handle it.</li><li>Great for long-term projects with evolving scope or when your own team lacks certain expertise.</li></ul>,
      },
      {
        icon: "/engagement/01_Business-benefits.svg",
        alt: "Graph icon",
        title: "Business benefits",
        content: <ul><li><strong>Full control &amp; transparency</strong> – a dedicated team becomes a natural extension of your in-house team, giving you complete visibility into progress and budget.</li><li><strong>Quick ramp-up</strong> – it takes less than a week for our specialists to join your team and start bringing value.</li><li><strong>Long-term continuity</strong> – because the team stays consistent, product knowledge is retained and productivity often increases over time. This makes the Dedicated Team model well-suited to longer engagements and ongoing maintenance.</li></ul>,
        ctaLink: "/contact",
      },
    ],
  },
];

export default function ModelsBlock() {
  return (
    <>
      {MODELS.map((model) => (
        <section
          key={model.id}
          id={model.id}
          className={`${styles.section} ${model.bg === "light" ? styles.light : styles.white}`}
        >
          <div className={styles.container}>
            <h2 className={styles.title}>{model.titleHtml}</h2>
            <div className={styles.description}>{model.description}</div>
            <div className={styles.cols}>
              {model.cols.map((col, i) =>
                col.ctaLink ? (
                  <Link key={i} href={col.ctaLink} className={`${styles.col} ${styles.colLink}`}>
                    <div className={styles.icon}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={col.icon} alt={col.alt} width={56} height={56} loading="lazy" />
                    </div>
                    <h3 className={styles.colTitle}>{col.title}</h3>
                    <div className={styles.colContent}>{col.content}</div>
                    <div className={styles.cta}>
                      Get a quote based on your model
                      <span className={styles.ctaArrow} />
                    </div>
                  </Link>
                ) : (
                  <div key={i} className={styles.col}>
                    <div className={styles.icon}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={col.icon} alt={col.alt} width={56} height={56} loading="lazy" />
                    </div>
                    <h3 className={styles.colTitle}>{col.title}</h3>
                    <div className={styles.colContent}>{col.content}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
