import type { BlogArticleData, RichSpan, RichText } from "../types";

const b = (text: string): RichSpan => ({ text, bold: true });
const i = (text: string): RichSpan => ({ text, italic: true });
const t = (text: string): RichSpan => ({ text });

export const article: BlogArticleData = {
  slug: "types-of-software-developer-roles-explained",
  relatedId: "972",
  title: "Explained by Experts: 18 Types of Software Developers Roles",
  metaDescription:
    "18 software developer roles explained in plain terms — what each one builds, where their code runs, and how to tell which one a project actually needs.",
  categories: [{ label: "Development", slug: "development" }],
  readTime: "10 mins",
  dateDisplay: "March 14, 2026",
  dateISO: "2026-03-14",
  heroImage: {
    src: "/blog/03_6061ffdfeab8019f2be1dea0_whitepapers-6000-×-4000px-Google-Chrome_210329192642.png",
    alt: "Programmer coding at desk with dual monitors",
    width: 1600,
    height: 900,
  },

  contents: [
    { href: "#h-why-titles-are-confusing", label: "Why developer titles are confusing" },
    { href: "#h-eighteen-roles", label: "18 roles, what they build" },
    { href: "#h-how-titles-are-really-decided", label: "How a title actually gets decided" },
    { href: "#h-team-composition", label: "How these roles combine on a real team" },
    { href: "#h-seniority-levels", label: "Seniority levels within each role" },
    { href: "#h-hardest-to-hire", label: "Which roles are hardest to hire for right now" },
    { href: "#h-hiring-for-the-role-not-the-title", label: "Hiring for the role, not the title" },
  ],

  body: [
    { type: "heading", level: 2, id: "h-why-titles-are-confusing", text: "Why developer titles are confusing" },
    {
      type: "paragraph",
      text: [
        t("There's no single universal system for software developer titles — a \"Backend Developer\" at one company and a \"Platform Engineer\" at another can own nearly identical responsibilities. A title usually reflects one of three things: "),
        b("what the developer builds"),
        t(", "),
        b("where their code runs"),
        t(", or "),
        b("which technical problem they specialize in solving"),
        t(". Knowing which axis a title is describing makes the whole taxonomy much easier to navigate — and makes it much easier to hire for the actual gap on a team instead of the title that sounds closest to it."),
      ],
    },

    { type: "heading", level: 2, id: "h-eighteen-roles", text: "18 roles, what they build" },
    {
      type: "table",
      headers: ["#", "Role", "What they build"],
      rows: [
        ["1", "Front-End Developer", "The interface users interact with directly — layout, interactivity, client-side logic"],
        ["2", "Back-End Developer", "Servers, databases, and business logic that power the interface from behind the scenes"],
        ["3", "Full-Stack Developer", "Both front-end and back-end, moving between the two as a project needs"],
        ["4", "Mobile Developer", "Native or cross-platform apps for iOS and Android"],
        ["5", "Desktop Developer", "Applications that run locally on a user's machine rather than in a browser"],
        ["6", "Embedded Developer", "Software running directly on hardware — firmware, IoT devices, industrial controllers"],
        ["7", "Database Developer", "Schema design, query optimization, and data integrity across an application's data layer"],
        ["8", "Cloud Developer", "Applications and infrastructure built to run on AWS, Azure, GCP, or similar platforms"],
        ["9", "DevOps Engineer", "CI/CD pipelines, deployment automation, and the bridge between development and operations"],
        ["10", "Platform Engineer", "Internal tooling and infrastructure that other engineering teams build on top of"],
        ["11", "Security Developer", "Application-layer security — authentication, encryption, vulnerability remediation"],
        ["12", "QA / SDET", "Automated and manual testing that verifies software behaves as intended before release"],
        ["13", "Data Science Developer", "Statistical models and data pipelines that turn raw data into decisions"],
        ["14", "Big Data Developer", "Systems that process and store data at a volume standard tooling can't handle"],
        ["15", "AI / ML Engineer", "Machine learning models and the pipelines that train, evaluate, and serve them"],
        ["16", "LLM / AI Engineer", "Applications built around large language models — prompting, retrieval, agent orchestration"],
        ["17", "Game Developer", "Interactive game logic, rendering, and the engines that run them"],
        ["18", "Integration / Customization Developer", "Connecting existing systems and platforms together, or adapting off-the-shelf software to a specific business"],
      ],
    },

    { type: "heading", level: 2, id: "h-how-titles-are-really-decided", text: "How a title actually gets decided" },
    {
      type: "tick-list",
      items: [
        [b("By what they build."), t(" Front-end, back-end, mobile, and game developers are named for the category of product they produce.")],
        [b("By where the code runs."), t(" Cloud, embedded, and desktop developers are named for the execution environment, regardless of what the software actually does.")],
        [b("By the problem they specialize in."), t(" Security, database, and QA roles are named for the concern they own across whatever product they're attached to.")],
      ],
    },
    {
      type: "paragraph",
      text: [
        t("AI-adjacent roles have grown the fastest of any category recently — requests for AI/ML roles have nearly tripled in the past two years — and they tend to blend all three axes at once: an LLM Engineer is defined by the technical problem (working with language models), but the role increasingly implies specific infrastructure (retrieval pipelines, orchestration) too."),
      ],
    },

    { type: "heading", level: 2, id: "h-team-composition", text: "How these roles combine on a real team" },
    {
      type: "paragraph",
      text: [t("A typical mid-sized product team doesn't hire one of each — it assembles a small combination sized to the product's actual technical surface area:")],
    },
    {
      type: "table",
      headers: ["Team type", "Typical role combination"],
      rows: [
        ["Early-stage web/mobile product", "Full-Stack, Mobile, QA/SDET"],
        ["Enterprise platform with legacy integration", "Back-End, Database, Integration/Customization, DevOps"],
        ["AI-forward product", "AI/ML Engineer, LLM/AI Engineer, Back-End, Data Science Developer"],
        ["Regulated industry (healthcare, finance)", "Back-End, Security Developer, QA/SDET, Database"],
        ["Consumer-scale platform", "Front-End, Back-End, Cloud Developer, Platform Engineer, DevOps"],
      ],
    },

    { type: "heading", level: 2, id: "h-seniority-levels", text: "Seniority levels within each role" },
    {
      type: "tick-list",
      items: [
        [b("Junior."), t(" Works within a well-defined task, needs review on architecture-level decisions, strongest in roles with clear conventions (front-end, QA).")],
        [b("Mid-level."), t(" Owns a feature end-to-end within an established architecture, makes most day-to-day technical decisions independently.")],
        [b("Senior."), t(" Makes the architecture decisions junior and mid-level engineers work within, and is usually who a project needs first regardless of specialization — the role's depth matters more early than its breadth.")],
        [b("Staff/Principal (where the role exists)."), t(" Sets technical direction across multiple teams, most common in Platform Engineer, Security Developer, and AI/ML Engineer tracks at larger organizations.")],
      ],
    },

    { type: "heading", level: 2, id: "h-hardest-to-hire", text: "Which roles are hardest to hire for right now" },
    {
      type: "paragraph",
      text: [
        t("AI/ML and LLM Engineer roles are the hardest to fill in 2026, not because too few people call themselves AI engineers, but because the role increasingly requires both machine learning fundamentals and production software engineering discipline — a combination that's rarer than either skill alone. Security Developers and experienced Platform Engineers are the next-hardest, both because the roles are relatively new as dedicated specializations and because the cost of a mistake in either is high enough that experience is weighted heavily in hiring.")],
    },

    { type: "heading", level: 2, id: "h-hiring-for-the-role-not-the-title", text: "Hiring for the role, not the title" },
    {
      type: "paragraph",
      text: [
        t("The practical lesson for anyone staffing a project: describe the problem first, and let the title follow. \"We need someone who can safely connect an AI copilot to a fragile legacy SQL database\" points to a very different hire than \"we need a Backend Developer\" — even though both descriptions could technically be satisfied by the same person. Matching the actual technical problem to the right combination of these 18 roles, rather than to whichever title sounds most senior, is what keeps a team correctly staffed as a project's technical needs shift."),
      ],
    },
  ],

  faq: [
    {
      question: "What's the difference between a Full-Stack Developer and separate Front-End and Back-End Developers?",
      answer:
        "A Full-Stack Developer works across both layers, which is efficient for smaller projects or early-stage products where one person needs to move fluidly between them. Larger, more complex products typically split the roles so each layer gets dedicated depth rather than divided attention.",
    },
    {
      question: "Is 'AI Engineer' the same role as 'Data Scientist'?",
      answer:
        "They overlap but aren't the same. Data scientists typically focus on building and validating models from data; AI/LLM engineers typically focus on building the production systems — retrieval, orchestration, evaluation — that put those models or foundation models to work inside an application.",
    },
    {
      question: "Do smaller companies need all 18 of these roles?",
      answer:
        "No — most smaller teams cover several of these responsibilities with generalist Full-Stack or DevOps hires, and only bring in a specialist (security, data, AI) once the problem in that specific area becomes large enough to justify dedicated ownership.",
    },
    {
      question: "How has the mix of these roles changed in the last two years?",
      answer:
        "AI and ML-adjacent role requests have grown the fastest by a wide margin, roughly tripling, while demand for narrowly-scoped legacy specializations has stayed comparatively flat — reflecting how much production software now includes some AI-driven component.",
    },
  ],

  summary: [
    t(
      "Software developer titles aren't governed by one universal system — they're usually describing what a developer builds, where their code runs, or which technical problem they specialize in, and the same title can mean different things at different companies. The 18 roles here span front-end through AI/LLM engineering, and the fastest-growing category by far is AI-adjacent work, which has nearly tripled in demand in two years. The most useful way to use a list like this isn't to memorize the titles — it's to describe the actual technical problem a project has and match it to the right combination of roles, rather than hiring for whichever title sounds most senior."
    ),
  ] as RichText,

  tags: ["Development"],
};

export default article;
