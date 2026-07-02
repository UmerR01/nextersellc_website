import type { ReactNode } from "react";
import styles from "./ModelsBlock.module.css";

interface Col {
  icon?: string;
  alt?: string;
  title?: string;
  content?: ReactNode;
  empty?: boolean;
}

interface ModelData {
  id: string;
  bg: "white" | "light";
  titleHtml: ReactNode;
  description: string;
  cols: Col[];
  twoCol?: boolean;
}

const MODELS: ModelData[] = [
  {
    id: "time-material",
    bg: "white",
    titleHtml: <>Time and Materials</>,
    description:
      "In the Time and Materials model, you pay for the hours worked at an agreed hourly rate. Scope and budget stay flexible while the rate stays fixed in the contract. Our project managers track effort weekly and forecast cost at every stage, so flexibility does not mean losing sight of the total.",
    cols: [
      {
        icon: "/engagement/03_AI-generative-AI-readiness-assessment-01.svg",
        alt: "How it works",
        title: "How it works",
        content: (
          <p>
            You pay for actual hours at the agreed rate, invoiced monthly, with
            detailed timesheets and a sprint demo each cycle.
          </p>
        ),
      },
      {
        icon: "/engagement/06_Security-and-compliance-requirements-01.svg",
        alt: "When it fits best",
        title: "When it fits best",
        content: (
          <p>
            Evolving scope, product development with feature iteration, and
            projects where discovery continues as you build.
          </p>
        ),
      },
      {
        icon: "/engagement/06_Pricing-models-01.svg",
        alt: "Business benefits",
        title: "Business benefits",
        content: (
          <p>
            Maximum flexibility, no penalty for changing direction, transparent
            reporting, and a quick start with little upfront planning.
          </p>
        ),
      },
      {
        icon: "/engagement/03_Data-exposure-risks-02.svg",
        alt: "Risk allocation",
        title: "Risk allocation",
        content: (
          <p>
            We carry delivery and quality risk. You carry scope and budget risk.
            Timeline risk is shared.
          </p>
        ),
      },
      {
        icon: "/engagement/03_Mid-size-businesses.svg",
        alt: "Typical project size",
        title: "Typical project size",
        content: (
          <p>
            $50K to $500K, lasting 3 to 18 months, with a team of 2 to 8.
          </p>
        ),
      },
      {
        icon: "/engagement/06_Team-composition-01.svg",
        alt: "Team composition",
        title: "Team composition",
        content: (
          <p>
            Cross-functional: a project manager plus 2 to 5 developers and QA,
            with roles flexing as the scope evolves.
          </p>
        ),
      },
      { empty: true },
      {
        icon: "/engagement/04_Managing-AI-after-release-via-ADLC-03.svg",
        alt: "SDLC and ADLC fit",
        title: "SDLC and ADLC fit",
        content: (
          <p>
            Strong for traditional software. Strong for AI work such as LLM
            integration, RAG, and iterative model refinement. ADLC is the
            Agentic Development Lifecycle, our process for building governed AI
            systems.
          </p>
        ),
      },
    ],
  },
  {
    id: "tm-cap",
    bg: "white",
    titleHtml: (
      <>
        Time and Materials <span className={styles.blue}>with a cap</span>
      </>
    ),
    description:
      "Time and Materials with a cap retains the flexibility of Time and Materials while adding a guaranteed ceiling on total spend. You still pay for hours and resources, and the contract sets a not-to-exceed limit. The budget is fixed while the scope stays open, which is why it is the model most mid-size projects settle on.",
    cols: [
      {
        icon: "/engagement/03_AI-generative-AI-readiness-assessment-01.svg",
        alt: "How it works",
        title: "How it works",
        content: (
          <p>
            Time-and-materials billing with a pre-agreed ceiling. Above the
            ceiling, we absorb the additional hours, or we renegotiate the scope
            with you first.
          </p>
        ),
      },
      {
        icon: "/engagement/06_Security-and-compliance-requirements-01.svg",
        alt: "When it fits best",
        title: "When it fits best",
        content: (
          <p>
            Mid-size projects with a firm budget and AI MVPs, where the exact
            scope cannot be fixed, but the budget can.
          </p>
        ),
      },
      {
        icon: "/engagement/06_Pricing-models-01.svg",
        alt: "Business benefits",
        title: "Business benefits",
        content: (
          <p>
            Budget protection plus flexibility, and an incentive for us to spend
            the scope efficiently.
          </p>
        ),
      },
      {
        icon: "/engagement/03_Data-exposure-risks-02.svg",
        alt: "Risk allocation",
        title: "Risk allocation",
        content: (
          <p>
            Scope risk is shared. Your budget is capped. We carry the risk of
            overruns beyond the cap.
          </p>
        ),
      },
      {
        icon: "/engagement/03_Mid-size-businesses.svg",
        alt: "Typical project size",
        title: "Typical project size",
        content: (
          <p>
            $100K to $300K, lasting 3 to 9 months, with a team of 3 to 6.
          </p>
        ),
      },
      {
        icon: "/engagement/06_Team-composition-01.svg",
        alt: "Team composition",
        title: "Team composition",
        content: (
          <p>
            Cross-functional, with project management tuned to keep the work
            inside the cap.
          </p>
        ),
      },
      { empty: true },
      {
        icon: "/engagement/04_Managing-AI-after-release-via-ADLC-03.svg",
        alt: "SDLC and ADLC fit",
        title: "SDLC and ADLC fit",
        content: (
          <p>
            Strong for traditional software. Strongest for AI MVPs, where it is
            our primary recommendation.
          </p>
        ),
      },
    ],
  },
  {
    id: "fixed-price",
    bg: "white",
    titleHtml: <>Fixed Price</>,
    description:
      "In a Fixed Price engagement, the scope, schedule, and budget are agreed upon up front and frozen. The price is based on a detailed specification, payments follow defined milestones, and any change runs through a formal change order. We finalize requirements in a discovery phase before the price is set.",
    cols: [
      {
        icon: "/engagement/03_AI-generative-AI-readiness-assessment-01.svg",
        alt: "How it works",
        title: "How it works",
        content: (
          <p>
            A pre-agreed total price for a well-defined scope, with
            milestone-based payments and change orders for anything new.
          </p>
        ),
      },
      {
        icon: "/engagement/06_Security-and-compliance-requirements-01.svg",
        alt: "When it fits best",
        title: "When it fits best",
        content: (
          <p>
            Tightly scoped projects, MVPs with locked specifications, proofs of
            concept, and fixed-functionality builds that run under a few months.
          </p>
        ),
      },
      {
        icon: "/engagement/06_Pricing-models-01.svg",
        alt: "Business benefits",
        title: "Business benefits",
        content: (
          <p>
            Budget certainty, clear deliverables, and minimal management
            overhead once development starts.
          </p>
        ),
      },
      {
        icon: "/engagement/03_Data-exposure-risks-02.svg",
        alt: "Risk allocation",
        title: "Risk allocation",
        content: (
          <p>
            We carry scope, timeline, and budget risk. You carry the risk that
            the requirements were clear enough at the start.
          </p>
        ),
      },
      {
        icon: "/engagement/03_Mid-size-businesses.svg",
        alt: "Typical project size",
        title: "Typical project size",
        content: (
          <p>
            $30K to $150K, lasting 2 to 6 months, with a team of 2 to 4.
          </p>
        ),
      },
      {
        icon: "/engagement/06_Team-composition-01.svg",
        alt: "Team composition",
        title: "Team composition",
        content: (
          <p>
            Lean: a project manager plus 2 to 3 specialists tied to the
            deliverables.
          </p>
        ),
      },
      { empty: true },
      {
        icon: "/engagement/04_Managing-AI-after-release-via-ADLC-03.svg",
        alt: "SDLC and ADLC fit",
        title: "SDLC and ADLC fit",
        content: (
          <p>
            Strong for traditional software. Limited for AI, suitable only for
            bounded proofs of concept with explicit evaluation criteria, and
            discouraged for production AI systems.
          </p>
        ),
      },
    ],
  },
  {
    id: "dedicated-team",
    bg: "white",
    titleHtml: <>Dedicated Team</>,
    description:
      "In the Dedicated Team model, we assemble a cross-functional team that works only on your product and integrates with your in-house engineering. You bill monthly per team member, you set product direction, and the team builds deep knowledge of your system over time.",
    twoCol: true,
    cols: [
      {
        icon: "/engagement/03_AI-generative-AI-readiness-assessment-01.svg",
        alt: "How it works",
        title: "How it works",
        content: (
          <p>
            A dedicated cross-functional team integrated with your engineers,
            billed monthly per member.
          </p>
        ),
      },
      {
        icon: "/engagement/06_Security-and-compliance-requirements-01.svg",
        alt: "When it fits best",
        title: "When it fits best",
        content: (
          <p>
            Long-term product development of six months or more, ongoing
            platforms, and multi-year engagements.
          </p>
        ),
      },
      {
        icon: "/engagement/06_Security-and-compliance-requirements-03.svg",
        alt: "Business benefits",
        title: "Business benefits",
        content: (
          <p>
            Continuity of knowledge, dedicated focus, and a team that builds
            product expertise and scales with you.
          </p>
        ),
      },
      {
        icon: "/engagement/03_Data-exposure-risks-02.svg",
        alt: "Risk allocation",
        title: "Risk allocation",
        content: (
          <p>Shared. We manage the team. You provide product direction.</p>
        ),
      },
      {
        icon: "/engagement/06_Pricing-models-01.svg",
        alt: "Typical project size",
        title: "Typical project size",
        content: (
          <p>
            $200K to $2M+ per year, typically 12 months or longer, with a team
            of 4 to 15.
          </p>
        ),
      },
      {
        icon: "/engagement/06_Team-composition-01.svg",
        alt: "Team composition",
        title: "Team composition",
        content: (
          <p>
            Cross-functional: a project manager plus 3 to 12 developers, QA,
            DevOps, and a designer as needed. Unlike pure staff augmentation,
            which supplies individual contributors only, a Dedicated Team
            includes its own project manager and cross-functional roles.
          </p>
        ),
      },
      {
        icon: "/engagement/05_Fail-safe-OTA-guarantee-02.svg",
        alt: "Replacement guarantee",
        title: "Replacement guarantee",
        content: (
          <p>
            If a team member is not the right fit within the first 7 days, we
            replace them at no additional cost.
          </p>
        ),
      },
      {
        icon: "/engagement/04_Managing-AI-after-release-via-ADLC-03.svg",
        alt: "SDLC and ADLC fit",
        title: "SDLC and ADLC fit",
        content: (
          <p>
            Strong for traditional software. Strongest for ongoing AI products
            that need model maintenance and retraining.
          </p>
        ),
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
            <div className={styles.description}>
              <p>{model.description}</p>
            </div>
            <div className={model.twoCol ? styles.colsTwoCol : styles.cols}>
              {model.cols.map((col, i) =>
                col.empty ? (
                  <div key={i} className={styles.col} aria-hidden="true" />
                ) : (
                  <div key={i} className={styles.col}>
                    <div className={styles.icon}>
                      <img
                        src={col.icon}
                        alt={col.alt}
                        width={56}
                        height={56}
                        loading="lazy"
                      />
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
