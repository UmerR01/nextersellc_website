import type { BlogArticleData, RichSpan, RichText } from "../types";

const b = (text: string): RichSpan => ({ text, bold: true });
const i = (text: string): RichSpan => ({ text, italic: true });
const t = (text: string): RichSpan => ({ text });

export const article: BlogArticleData = {
  slug: "ai-token-cost-calculation-framework",
  relatedId: "250436",
  title: "AI Token Cost Calculation: A Pricing-Independent Framework for Forecasting LLM Spend (2026)",
  metaDescription:
    "Model pricing changes constantly. A framework for forecasting LLM spend built on usage drivers instead of today's price sheet, so the forecast survives the next pricing change.",
  categories: [
    { label: "AI", slug: "ai" },
    { label: "Guides", slug: "guides" },
  ],
  readTime: "10 mins",
  dateDisplay: "June 10, 2026",
  dateISO: "2026-06-10",
  heroImage: {
    src: "/blog/06_Forecast-LLM-spend-before-you-build-v2.jpg",
    alt: "Forecast LLM spend before you build",
    width: 1600,
    height: 900,
  },

  contents: [
    { href: "#h-why-price-based-forecasts-break", label: "Why price-based forecasts break" },
    { href: "#h-the-five-drivers", label: "The five drivers that actually determine cost" },
    { href: "#h-the-framework", label: "A pricing-independent forecasting framework" },
    { href: "#h-worked-example", label: "A worked example" },
    { href: "#h-common-forecasting-errors", label: "Common forecasting errors" },
    { href: "#h-scenario-modeling", label: "Modeling best- and worst-case scenarios" },
    { href: "#h-keeping-the-forecast-honest", label: "Keeping the forecast honest after launch" },
  ],

  body: [
    { type: "heading", level: 2, id: "h-why-price-based-forecasts-break", text: "Why price-based forecasts break" },
    {
      type: "paragraph",
      text: [
        t("The standard way teams forecast AI spend is to take a per-token price, multiply by expected volume, and call it a budget. The problem is that both halves of that equation move. Model providers change pricing without much notice, and "),
        b("73% of enterprise AI projects"),
        t(" reviewed in one industry survey ran over budget — some by "),
        b("2.4×"),
        t(" — with unplanned costs averaging roughly "),
        b("$2.3 million"),
        t(" per affected project. A forecast anchored to a price sheet is only as good as that price sheet, and it's usually stale within a quarter."),
      ],
    },
    {
      type: "detail",
      lead: "A pricing-independent forecast",
      text: [
        t(" separates two questions that a price-based estimate collapses into one: how many tokens will this feature actually consume, and what will a token cost when it ships. The first question is stable — it's a property of your product's usage pattern. The second question changes constantly and should be re-plugged into the model, not re-derived from scratch, whenever it moves."),
      ],
    },

    { type: "heading", level: 2, id: "h-the-five-drivers", text: "The five drivers that actually determine cost" },
    {
      type: "numbered-list",
      items: [
        [b("Prompt length."), t(" System instructions, few-shot examples, and conversation history that get sent with every single call.")],
        [b("Retrieved context volume."), t(" How much a RAG pipeline pulls in per query — the single biggest lever most teams haven't tuned.")],
        [b("Reasoning depth."), t(" How much the model \"thinks\" before answering, which some reasoning-optimized models bill for as output tokens.")],
        [b("Call-chain length."), t(" How many model calls a single user action triggers — trivial for a simple chatbot, and easily 5–20× for a multi-step agent.")],
        [b("Usage volume and growth rate."), t(" The number of users or transactions, and — critically — how fast that number is expected to grow after launch.")],
      ],
    },
    {
      type: "paragraph",
      text: [
        t("The first four drivers determine tokens-per-interaction. The fifth determines how many interactions happen. Multiply them together and you get total token volume — the pricing-independent half of the forecast. Only then does the current price per token get applied, as the one input you should expect to re-check regularly."),
      ],
    },

    { type: "heading", level: 2, id: "h-the-framework", text: "A pricing-independent forecasting framework" },
    {
      type: "tick-list",
      items: [
        [b("Model the interaction, not the feature."), t(" Break the feature into its distinct call types (a classification call, a retrieval call, a generation call) and estimate tokens for each separately — they rarely cost the same.")],
        [b("Measure call-chain length empirically."), t(" For agentic features, instrument the pilot and measure actual calls-per-task; don't assume a single call per user action.")],
        [b("Forecast volume with a growth curve, not a flat number."), t(" Usage in month one and usage in month twelve are rarely the same order of magnitude — model both.")],
        [b("Keep the price input separate and swappable."), t(" Structure the model so a provider price change is a single variable update, not a full re-forecast.")],
        [b("Set a cost-per-interaction ceiling."), t(" Define the maximum acceptable cost for a single interaction up front, so a runaway call chain trips an alert instead of quietly compounding.")],
      ],
    },

    { type: "heading", level: 2, id: "h-worked-example", text: "A worked example" },
    {
      type: "table",
      headers: ["Call type", "Avg. tokens/call", "Calls per interaction", "Tokens per interaction"],
      rows: [
        ["Intent classification", "~300", "1", "~300"],
        ["Retrieval + context assembly", "~1,800", "1", "~1,800"],
        ["Answer generation", "~900", "1", "~900"],
        ["Escalation / re-plan (occurs on ~15% of interactions)", "~2,500", "0.15", "~375"],
        ["Total (weighted average)", "—", "—", "~3,375"],
      ],
    },
    {
      type: "paragraph",
      text: [
        t("That per-interaction token count is the durable output of the exercise. Multiply it by projected monthly interaction volume to get a token-volume forecast, and only at that final step apply the current market price per token — the number most likely to be different by the time the feature actually ships."),
      ],
    },

    { type: "heading", level: 2, id: "h-common-forecasting-errors", text: "Common forecasting errors" },
    {
      type: "tick-list",
      items: [
        [b("Estimating tokens from a demo prompt, not a representative one."), t(" A hand-picked demo query is usually shorter and cleaner than what real users actually send.")],
        [b("Ignoring the escalation path."), t(" The rare, expensive re-plan or retry case contributes more to the average than its low frequency suggests — it belongs in the model, not treated as noise.")],
        [b("Forecasting flat volume."), t(" Assuming month-one usage holds steady, when most features ramp for several months after launch as adoption spreads.")],
        [b("Mixing pricing tiers into the token count."), t(" Input tokens, output tokens, and cached tokens are often priced differently — folding them into one blended number hides where the real cost sits.")],
      ],
    },

    { type: "heading", level: 2, id: "h-scenario-modeling", text: "Modeling best- and worst-case scenarios" },
    {
      type: "paragraph",
      text: [
        t("A single point estimate invites false confidence. Modeling three scenarios against the same usage-driver framework — not three different frameworks — keeps the range honest:")],
    },
    {
      type: "numbered-list",
      items: [
        [b("Best case."), t(" Call-chain length and escalation rate at their observed pilot minimums, adoption ramping on the slower end of the growth curve.")],
        [b("Expected case."), t(" The weighted-average numbers from the worked example above, at the adoption curve's median projection.")],
        [b("Worst case."), t(" Escalation rate and call-chain length at their observed pilot maximums, adoption ramping faster than expected — the scenario a cost-per-interaction ceiling is specifically there to contain.")],
      ],
    },
    {
      type: "paragraph",
      text: [
        t("The gap between best and worst case is itself useful information — a narrow gap means the forecast is on solid ground; a wide one is a signal to instrument the pilot more before committing to a budget number leadership will hold the team to.")],
    },

    { type: "heading", level: 2, id: "h-keeping-the-forecast-honest", text: "Keeping the forecast honest after launch" },
    {
      type: "paragraph",
      text: [
        t("A forecast built this way keeps working after launch, because re-pricing it when a provider changes rates is a one-line update, not a re-derivation. Under our Agentic Development Lifecycle, we build this token-volume model during discovery, before committing to an architecture, and re-check it against real production telemetry once the feature is live — so the number that reaches the budget conversation is grounded in actual usage drivers, not a price sheet that may already be out of date."),
      ],
    },
  ],

  faq: [
    {
      question: "Why does a per-token price estimate usually turn out wrong?",
      answer:
        "Because it treats price as the only variable, when volume and per-call token consumption are just as important and much less visible up front. Provider pricing also changes independently of your usage, so a forecast anchored to today's price sheet starts drifting the moment pricing moves.",
    },
    {
      question: "What's the biggest single driver of unexpectedly high token spend?",
      answer:
        "Call-chain length in agentic features. A simple chatbot might make one model call per user message; a multi-step agent that re-plans and calls tools can make five to twenty calls for what looks like a single user action, and that multiplier is easy to underestimate before the pilot is instrumented.",
    },
    {
      question: "How often should a token cost forecast be updated?",
      answer:
        "The usage-driver half of the model — tokens per interaction, call-chain length — only needs updating when the feature itself changes. The price-per-token half should be re-checked whenever a model provider announces a pricing change, which in 2026 has been a recurring, not rare, event.",
    },
    {
      question: "Can this framework be used before a feature is built, or only after it's live?",
      answer:
        "It's most valuable before launch, during discovery — that's when a token-volume estimate can still influence architecture decisions like retrieval scoping or model tiering. It should then be re-validated against real telemetry once the feature is live, since actual usage patterns rarely match the pre-launch estimate exactly.",
    },
  ],

  summary: [
    t(
      "Forecasting AI spend by multiplying today's per-token price by expected volume breaks the moment either number moves — and both move constantly. A pricing-independent framework separates the two: model tokens-per-interaction from five concrete drivers (prompt length, retrieved context, reasoning depth, call-chain length, and usage volume), forecast total token volume from that, and only then apply the current market price as a single swappable input. Built this way, a re-pricing from a model provider is a one-line update instead of a full re-forecast — which is what keeps the number that reaches the budget conversation trustworthy months after it was first modeled."
    ),
  ] as RichText,

  tags: ["AI", "Guides"],
};

export default article;
