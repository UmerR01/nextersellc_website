import type { BlogArticleData, RichSpan, RichText } from "../types";

const b = (text: string): RichSpan => ({ text, bold: true });
const i = (text: string): RichSpan => ({ text, italic: true });
const t = (text: string): RichSpan => ({ text });

export const article: BlogArticleData = {
  slug: "software-development-cost-estimation-methods",
  relatedId: "68545",
  title: "Software Development Cost Estimation: Methods, Accuracy & Real Costs",
  metaDescription:
    "Four estimation methods, their real accuracy ranges, and what actually drives software cost beyond team location — including what AI tooling changes about the math.",
  categories: [
    { label: "Enterprise", slug: "enterprise" },
    { label: "Startups", slug: "startups" },
    { label: "Guides", slug: "guides" },
    { label: "Development", slug: "development" },
  ],
  readTime: "8 mins",
  dateDisplay: "March 28, 2026",
  dateISO: "2026-03-28",
  heroImage: {
    src: "/blog/software-development-cost-estimation-methods.jpg",
    alt: "Software Development Cost Estimation",
    width: 1600,
    height: 900,
  },

  contents: [
    { href: "#h-why-estimates-miss", label: "Why most estimates miss" },
    { href: "#h-four-methods", label: "Four estimation methods and their real accuracy" },
    { href: "#h-what-actually-drives-cost", label: "What actually drives cost" },
    { href: "#h-the-ai-shift", label: "What AI tooling changes about the math" },
    { href: "#h-sample-breakdown", label: "A sample estimate, broken down" },
    { href: "#h-red-flags", label: "Red flags in a vendor's estimate" },
    { href: "#h-getting-a-number-you-can-trust", label: "Getting a number you can actually trust" },
  ],

  body: [
    { type: "heading", level: 2, id: "h-why-estimates-miss", text: "Why most estimates miss" },
    {
      type: "paragraph",
      text: [
        t("Most software cost estimates aren't wrong because the estimator was bad at math. They're wrong because they were produced before enough was known about the project to estimate it accurately — a number given in a first sales call, based on a one-paragraph description, treated with the same confidence as a number produced after two weeks of discovery. The gap between those two numbers is rarely small."),
      ],
    },

    { type: "heading", level: 2, id: "h-four-methods", text: "Four estimation methods and their real accuracy" },
    {
      type: "table",
      headers: ["Method", "How it works", "Typical accuracy", "Best for"],
      rows: [
        ["Bottom-up", "Break the project into individual tasks, estimate each, sum them", "Most accurate of the four, but requires a defined scope to apply", "Well-scoped projects post-discovery"],
        ["Parametric (COCOMO II)", "Statistical model based on estimated lines of code and complexity factors", "10–15% variance with calibration; 20–25% without", "Large enterprise platforms (1M+ lines of code)"],
        ["Top-down / analogous", "Compare to similar past projects", "Fast but rough — best as a sanity check, not a commitment", "Early-stage budget conversations"],
        ["Three-point (PERT)", "Optimistic, most likely, and pessimistic scenarios combined into a weighted estimate", "Accounts for uncertainty explicitly rather than hiding it", "Projects with real unknowns going in"],
      ],
    },
    {
      type: "paragraph",
      text: [
        t("No single method should be trusted alone. The estimates that hold up in practice combine an early top-down number for the initial budget conversation with a bottom-up or three-point estimate once discovery has scoped the work — and treat the gap between those two numbers as informative, not as a mistake to hide."),
      ],
    },

    { type: "heading", level: 2, id: "h-what-actually-drives-cost", text: "What actually drives cost" },
    {
      type: "tick-list",
      items: [
        [b("Scope clarity."), t(" A vague requirement doesn't just risk rework — it makes the estimate itself unreliable before a line of code is written.")],
        [b("Integration depth."), t(" Connecting to legacy systems, third-party APIs, or regulated data sources adds cost that's easy to under-scope from the outside.")],
        [b("Compliance requirements."), t(" HIPAA, PCI DSS, and similar frameworks add audit trails, access controls, and testing overhead that a generic estimate won't capture.")],
        [b("Team composition."), t(" A senior-heavy team costs more per hour and often less in total, because rework and defect rates scale with experience gaps, not just headcount.")],
        [b("AI-specific components, where relevant."), t(" Data preparation, evaluation pipeline setup, and projected token consumption are real cost lines a traditional software estimate has no category for.")],
      ],
    },

    { type: "heading", level: 2, id: "h-the-ai-shift", text: "What AI tooling changes about the math" },
    {
      type: "detail",
      lead: "The biggest shift in 2026 estimation",
      text: [
        t(" isn't a new formula — it's what AI coding tools do to the underlying assumptions an estimate is built on. Teams using AI assistants complete some tasks up to 55% faster, which shortens the writing phase of a task without proportionally shortening review, integration, and testing. An estimate that applies AI's speedup uniformly across the whole project timeline, instead of just to the writing phase, will consistently under-estimate."),
      ],
    },

    { type: "heading", level: 2, id: "h-sample-breakdown", text: "A sample estimate, broken down" },
    {
      type: "paragraph",
      text: [t("A bottom-up estimate for a mid-sized web application, post-discovery, typically breaks into categories roughly like this — the exact split shifts by project, but the shape holds:")],
    },
    {
      type: "table",
      headers: ["Category", "Share of total effort", "Notes"],
      rows: [
        ["Core feature development", "40–50%", "The work most estimates focus on almost exclusively"],
        ["Integration (APIs, third-party systems)", "10–20%", "Grows sharply with each additional legacy or third-party system"],
        ["QA and testing", "15–20%", "Often under-scoped when squeezed to protect a deadline"],
        ["UX/UI design", "10–15%", "Front-loaded — most of this happens before development starts"],
        ["Project management and discovery", "10–15%", "The category most likely to be missing from a rough first quote"],
      ],
    },
    {
      type: "paragraph",
      text: [t("Estimates that only price \"core feature development\" and treat the rest as overhead are the ones most likely to be revised upward mid-project.")],
    },

    { type: "heading", level: 2, id: "h-red-flags", text: "Red flags in a vendor's estimate" },
    {
      type: "tick-list",
      items: [
        [b("A single fixed number with no range,"), t(" delivered before any discovery conversation — precision that specific this early is manufactured, not measured.")],
        [b("No breakdown by category or phase,"), t(" just a total — makes it impossible to tell what's actually included.")],
        [b("No mention of testing, deployment, or post-launch support"), t(" as separate line items — these are common places where scope quietly gets assumed rather than agreed.")],
        [b("A quote that doesn't change regardless of how much you tell them about the project,"), t(" which suggests the number wasn't really derived from your requirements in the first place.")],
      ],
    },

    { type: "heading", level: 2, id: "h-getting-a-number-you-can-trust", text: "Getting a number you can actually trust" },
    {
      type: "paragraph",
      text: [
        t("A number worth planning a budget around comes from a real discovery phase — requirements workshops, technical architecture review, and, where AI is involved, a token-consumption model — not from a single meeting. We use three-point estimation to build honest buffers into every proposal, and separate the writing-time savings AI tooling provides from the review and integration time it doesn't automatically shrink. The estimate that survives contact with the actual project is the one built on what's genuinely known at the time it was given, with the uncertainty stated rather than hidden."),
      ],
    },
  ],

  faq: [
    {
      question: "Why do two vendors give wildly different estimates for the same project?",
      answer:
        "Usually because they're estimating different things — one may have priced a rough scope from a single conversation, while the other priced a scope defined after a discovery phase. Comparing the numbers without comparing how much was actually known when each was produced is misleading.",
    },
    {
      question: "Is a fixed-price quote more reliable than an hourly estimate?",
      answer:
        "A fixed-price quote is only as reliable as the scope it's based on. A meaningful fixed price requires either a complete technical specification or a paid discovery phase first — a fixed price given against a vague scope just moves the estimation risk onto whichever party absorbs the difference.",
    },
    {
      question: "How much should we budget for compliance requirements like HIPAA or PCI DSS?",
      answer:
        "It varies by how much of the system touches regulated data, but audit trails, access controls, and additional testing typically add a meaningful percentage on top of a comparable non-regulated project — and it should be scoped explicitly rather than assumed to be covered by general development budget.",
    },
    {
      question: "Should we expect AI tooling to make our project meaningfully cheaper?",
      answer:
        "It can reduce the writing-code portion of the timeline substantially, but total project cost also includes review, integration, testing, and architecture decisions that AI assistants speed up much less. A realistic estimate accounts for AI's actual measured impact on your specific process, not the full speedup reported for code generation alone.",
    },
  ],

  summary: [
    t(
      "Software cost estimates go wrong most often because they're produced before enough is known to estimate accurately, not because the math is bad. Bottom-up, parametric (COCOMO II), top-down, and three-point estimation each have a real, different accuracy range and a different right moment to use them — combining an early top-down number with a bottom-up estimate after discovery is what holds up in practice. Scope clarity, integration depth, compliance requirements, and team composition drive cost more than location does, and AI coding tools change the math further by shortening the writing phase without proportionally shortening review and integration. The estimate worth planning around is the one that states its uncertainty honestly rather than hiding it behind false precision."
    ),
  ] as RichText,

  tags: ["Enterprise", "Guides", "Development"],
};

export default article;
