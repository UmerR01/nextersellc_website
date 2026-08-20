import type { BlogArticleData, RichSpan, RichText } from "../types";

const b = (text: string): RichSpan => ({ text, bold: true });
const i = (text: string): RichSpan => ({ text, italic: true });
const t = (text: string): RichSpan => ({ text });

export const article: BlogArticleData = {
  slug: "what-is-adlc-agentic-development-lifecycle",
  relatedId: "245049",
  title: "What Is ADLC? A 2026 Guide to Governing Probabilistic AI Systems",
  metaDescription:
    "SDLC governs deterministic software. It wasn't built for systems that reason probabilistically. ADLC is the lifecycle that was — here's what it actually governs and why.",
  categories: [
    { label: "AI", slug: "ai" },
    { label: "Guides", slug: "guides" },
  ],
  readTime: "10 mins",
  dateDisplay: "May 12, 2026",
  dateISO: "2026-05-12",
  heroImage: {
    src: "/blog/what-is-adlc-agentic-development-lifecycle.jpg",
    alt: "What Is ADLC? Agentic Development Lifecycle",
    width: 1600,
    height: 900,
  },

  contents: [
    { href: "#h-why-sdlc-isnt-enough", label: "Why SDLC isn't enough for AI systems" },
    { href: "#h-seven-phases", label: "The 7 phases of ADLC" },
    { href: "#h-three-pillars", label: "The three pillars running alongside every phase" },
    { href: "#h-sdlc-vs-adlc", label: "SDLC vs. ADLC, side by side" },
    { href: "#h-roles", label: "Who's involved across the seven phases" },
    { href: "#h-adoption-mistakes", label: "Common ADLC adoption mistakes" },
    { href: "#h-when-you-need-both", label: "When a system needs both" },
  ],

  body: [
    { type: "heading", level: 2, id: "h-why-sdlc-isnt-enough", text: "Why SDLC isn't enough for AI systems" },
    {
      type: "paragraph",
      text: [
        t("The Software Development Lifecycle was built for deterministic systems: give the same input, get the same output, every time. Its controls — versioned releases, manual QA cycles, static infrastructure budgets — assume that behavior once tested stays constant in production. That assumption breaks the moment a system reasons over context instead of executing fixed logic."),
      ],
    },
    {
      type: "detail",
      lead: "The Agentic Development Lifecycle",
      text: [
        t(" (ADLC) governs probabilistic AI systems — copilots, RAG pipelines, and agentic workflows — where the same input can produce a different, context-dependent output, and where cost, not just correctness, scales with usage in ways deterministic systems never had to plan for. It adds the controls SDLC never needed: hallucination evaluation, token cost forecasting, adversarial red-teaming, and continuous monitoring of behavior that can drift after launch."),
      ],
    },

    { type: "heading", level: 2, id: "h-seven-phases", text: "The 7 phases of ADLC" },
    {
      type: "numbered-list",
      items: [
        [b("Hypothesis & guardrails."), t(" Set the ROI target, the token budget, and the operational policies the system must respect before any architecture decision is made.")],
        [b("Intent & scope definition."), t(" Define exactly what actions the system is allowed to take and which knowledge sources it's allowed to draw from — the boundary that prevents scope creep once building starts.")],
        [b("Agentic architecture design."), t(" Design the agents, memory, and orchestration layer against the guardrails set in phase one, not around them.")],
        [b("Simulation & proof of value."), t(" Test the design against realistic scenarios before it touches real users, measuring the same metric defined in phase one.")],
        [b("Implementation & continuous evaluation."), t(" Build the system with accuracy and reasoning-quality monitoring wired in from the first deployment, not added after a problem surfaces.")],
        [b("Red-teaming."), t(" Adversarial testing — prompt injection attempts, jailbreak attempts — run before the system reaches production, not discovered by an actual attacker after.")],
        [b("Activation & AgentOps."), t(" Go live with monitoring, cost control, and human-in-the-loop review built into normal operations, not bolted on after an incident.")],
      ],
    },

    { type: "heading", level: 2, id: "h-three-pillars", text: "The three pillars running alongside every phase" },
    {
      type: "tick-list",
      items: [
        [b("AI Governance."), t(" Data policies, access control, compliance requirements, and operational guardrails apply across all seven phases, not as a final compliance review before launch.")],
        [b("Continuous Evaluation."), t(" Accuracy, cost, and performance monitoring run continuously in production — a probabilistic system's behavior can drift months after it shipped clean.")],
        [b("Security & Resilience."), t(" Red-team testing, threat simulation, and vulnerability assessment aren't a one-time gate; they recur as the system's usage and integrations grow.")],
      ],
    },
    {
      type: "paragraph",
      text: [
        t("These three pillars are what make ADLC a lifecycle rather than a launch checklist — they're active before the first phase starts and after the seventh phase ships, which is the property that lets a governed AI system stay governed as it scales."),
      ],
    },

    { type: "heading", level: 2, id: "h-sdlc-vs-adlc", text: "SDLC vs. ADLC, side by side" },
    {
      type: "table",
      headers: ["Dimension", "SDLC", "ADLC"],
      rows: [
        ["System logic", "Rule-based, deterministic", "Context-driven, probabilistic"],
        ["QA method", "Manually controlled test cycles", "Algorithmic evaluation (RAGAS-style scoring, LLM-as-judge)"],
        ["Cost governance", "Static infrastructure budget", "Token consumption forecasting, per-interaction cost ceilings"],
        ["Release model", "Versioned releases", "Continuous evaluation and guardrail tuning"],
        ["Input–output behavior", "Fixed output for a given input", "Context retrieval, controlled but variable output"],
      ],
    },

    { type: "heading", level: 2, id: "h-roles", text: "Who's involved across the seven phases" },
    {
      type: "paragraph",
      text: [
        t("ADLC isn't a process engineers run alone in a corner. Each phase pulls in a different mix of roles, and knowing who owns what keeps the lifecycle from collapsing into \"the AI team's process\":")],
    },
    {
      type: "tick-list",
      items: [
        [b("Hypothesis & guardrails"), t(" needs a business stakeholder in the room, since the ROI target and policy boundaries are business decisions, not technical ones.")],
        [b("Intent & scope, and agentic architecture design"), t(" are led by AI engineers and solution architects, working from the guardrails set in phase one.")],
        [b("Simulation, red-teaming, and continuous evaluation"), t(" involve QA and, increasingly, a dedicated AI evaluation specialist role — distinct from traditional QA because the test cases are about reasoning quality, not just functional correctness.")],
        [b("Activation & AgentOps"), t(" is a shared responsibility between engineering and whichever operational team owns the process the AI system now supports.")],
      ],
    },

    { type: "heading", level: 2, id: "h-adoption-mistakes", text: "Common ADLC adoption mistakes" },
    {
      type: "numbered-list",
      items: [
        [b("Treating it as a compliance checklist bolted onto an existing SDLC process."), t(" ADLC's phases are sequential and interdependent — skipping straight to implementation because "), i("architecture felt obvious"), t(" undermines the guardrails the later phases depend on.")],
        [b("Running red-teaming once, at launch, instead of recurring."), t(" A system's attack surface changes as it gains integrations and users — a one-time red-team pass goes stale.")],
        [b("Assigning continuous evaluation to the same team that built the system."), t(" without some independence in how evaluation criteria are set, teams unconsciously grade their own work leniently.")],
        [b("Skipping the hypothesis phase's ROI target"), t(" because the use case \"obviously\" has value — this is the single most common reason a project can't later prove whether it worked.")],
      ],
    },

    { type: "heading", level: 2, id: "h-when-you-need-both", text: "When a system needs both" },
    {
      type: "paragraph",
      text: [
        t("Most enterprise platforms aren't purely one or the other. A transactional core system — an ERP, a billing engine, a patient record store — belongs under SDLC, because reliability there comes from rules executing the same way every time. An AI layer sitting on top of it — a copilot answering questions against that data, an agent triaging requests — belongs under ADLC. The two connect through controlled APIs and middleware, with the deterministic core staying deterministic even as the AI layer built on it operates probabilistically. Choosing the lifecycle per component, rather than per project, is what keeps a dual-engine system both stable and genuinely intelligent."),
      ],
    },
  ],

  faq: [
    {
      question: "Is ADLC a replacement for SDLC?",
      answer:
        "No — it's a parallel lifecycle for a different class of system. SDLC still governs deterministic components; ADLC governs the probabilistic ones. Most real platforms run both simultaneously, choosing the lifecycle per component based on whether that component's behavior is fixed or context-dependent.",
    },
    {
      question: "Why does ADLC include token cost forecasting as a formal phase?",
      answer:
        "Because probabilistic systems have a cost dimension deterministic systems don't: usage-driven inference cost that can scale unpredictably with adoption. Forecasting it during the hypothesis phase, before architecture decisions lock in, is what prevents the budget surprises common in ungoverned AI projects.",
    },
    {
      question: "What happens if red-teaming is skipped to hit a launch date?",
      answer:
        "The system reaches production with untested failure modes — prompt injection, jailbreak attempts, edge-case queries — that an adversarial tester would have caught in a controlled environment. Under ADLC, red-teaming is a gate before activation specifically because that risk is much cheaper to find internally than externally.",
    },
    {
      question: "Does every AI feature need the full seven-phase ADLC process?",
      answer:
        "The depth scales with the system's risk and reach — a low-stakes internal prototype moves through the phases faster than a customer-facing agent with access to sensitive data. What doesn't scale down is the sequence itself: guardrails still get set before architecture, and evaluation still gets wired in before launch, regardless of the project's size.",
    },
  ],

  summary: [
    t(
      "SDLC governs deterministic systems built on the assumption that tested behavior stays constant in production — an assumption that doesn't hold for AI systems that reason over context and can drift after launch. ADLC is the lifecycle built for that: seven phases from hypothesis and guardrails through red-teaming to AgentOps, wrapped in three continuous pillars — governance, evaluation, and security — that stay active before the first phase and after the last. Most real platforms need both lifecycles at once, applied per component rather than per project, with the deterministic core staying under SDLC while the AI layer built on top of it is governed under ADLC."
    ),
  ] as RichText,

  tags: ["AI", "Guides"],
};

export default article;
