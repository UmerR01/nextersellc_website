import type { BlogArticleData, RichSpan, RichText } from "../types";

const b = (text: string): RichSpan => ({ text, bold: true });
const i = (text: string): RichSpan => ({ text, italic: true });
const t = (text: string): RichSpan => ({ text });

export const article: BlogArticleData = {
  slug: "deliver-software-on-time-agile-release-planning-ai-era",
  relatedId: "3547",
  title: "How to Deliver Software on Time with Agile and Release Planning in the AI Era",
  metaDescription:
    "AI coding assistants changed what a sprint can realistically hold. Here's how release planning has to change with it to still ship on time.",
  categories: [
    { label: "AI", slug: "ai" },
    { label: "Guides", slug: "guides" },
    { label: "Development", slug: "development" },
  ],
  readTime: "10 mins",
  dateDisplay: "June 22, 2026",
  dateISO: "2026-06-22",
  heroImage: {
    src: "/blog/deliver-software-on-time-agile-release-planning-ai-era.jpg",
    alt: "How to Deliver Software on Time with Agile and Release Planning in the AI Era",
    width: 1600,
    height: 900,
  },

  contents: [
    { href: "#h-what-changed", label: "What AI actually changed in a sprint" },
    { href: "#h-trust-gap", label: "The trust gap nobody planned for" },
    { href: "#h-release-readiness", label: "A release-readiness framework that accounts for AI" },
    { href: "#h-replanning-the-sprint", label: "Re-planning the sprint itself" },
    { href: "#h-measuring-the-bottleneck", label: "Measuring the real bottleneck" },
    { href: "#h-tooling", label: "Tooling that supports the new workflow" },
    { href: "#h-what-doesnt-change", label: "What doesn't change" },
  ],

  body: [
    { type: "heading", level: 2, id: "h-what-changed", text: "What AI actually changed in a sprint" },
    {
      type: "paragraph",
      text: [
        t("The headline numbers are real: developers using AI coding assistants complete some tasks "),
        b("up to 55% faster"),
        t(", and teams using them have seen pull-request turnaround drop from "),
        b("9.6 days to 2.4 days"),
        t(" — a 75% reduction. Roughly "),
        b("85% of professional developers"),
        t(" now use AI tools regularly, and over "),
        b("70% of Agile teams"),
        t(" use them daily. On paper, that should make every release date easier to hit."),
      ],
    },
    {
      type: "paragraph",
      text: [
        t("In practice, teams that just plug AI assistants into an unchanged sprint process often see the same release dates slip anyway — because the bottleneck moved. Code generation got faster; review, integration, and trust in what the tool produced did not move at the same rate. Planning against the old bottleneck while a new one has quietly taken its place is the most common way AI adoption fails to translate into on-time releases."),
      ],
    },

    { type: "heading", level: 2, id: "h-trust-gap", text: "The trust gap nobody planned for" },
    {
      type: "detail",
      lead: "Developer trust in AI-generated code",
      text: [
        t(" has fallen even as usage has risen — from over 70% positive sentiment a few years ago to under 30% in the most recent surveys. Usage and trust are moving in opposite directions, which means more code is being generated per sprint by a source reviewers trust less than they did before, not more."),
      ],
    },
    {
      type: "paragraph",
      text: [
        t("That gap has a direct planning consequence: if code generation time drops but review time per line doesn't drop proportionally — because reviewers are reading more carefully, not less — the total time from \"code written\" to \"code merged\" doesn't shrink by the same 55% the generation step did. Sprints planned on the old ratio of write-time to review-time overcommit."),
      ],
    },

    { type: "heading", level: 2, id: "h-release-readiness", text: "A release-readiness framework that accounts for AI" },
    {
      type: "paragraph",
      text: [t("We use four gates to decide whether a release is actually ready, regardless of how much of the code was AI-assisted:")],
    },
    {
      type: "numbered-list",
      items: [
        [b("Provenance."), t(" Every non-trivial AI-generated change is flagged in review, so reviewers know where to apply extra scrutiny instead of spreading attention evenly.")],
        [b("Behavior-parity testing."), t(" Automated tests validate that AI-assisted refactors and rewrites preserve existing behavior, not just that they compile and pass a happy-path check.")],
        [b("Review-time budgeting."), t(" Sprint capacity accounts for review and integration time separately from generation time, instead of assuming AI's speedup applies to the whole pipeline.")],
        [b("Rollback readiness."), t(" Every release, AI-assisted or not, ships with a tested rollback path — the discipline that matters most when trust in a change is lower than usual.")],
      ],
    },

    { type: "heading", level: 2, id: "h-replanning-the-sprint", text: "Re-planning the sprint itself" },
    {
      type: "tick-list",
      items: [
        [b("Re-baseline velocity after adoption, not before."), t(" Measure actual cycle time for a few sprints post-adoption instead of assuming published productivity averages apply directly to your team.")],
        [b("Move code review into the estimate, explicitly."), t(" If AI cuts writing time but review stays constant, the story's total effort didn't shrink by the same percentage — size it accordingly.")],
        [b("Keep humans on architecture decisions."), t(" AI assistants are strongest inside a well-scoped task; let engineers keep owning the decisions that determine whether the task was scoped correctly in the first place.")],
        [b("Track defect rate by source."), t(" Teams combining AI assistance with disciplined review report up to 25% fewer post-release defects — but only when the review step is funded, not skipped.")],
      ],
    },

    { type: "heading", level: 2, id: "h-measuring-the-bottleneck", text: "Measuring the real bottleneck" },
    {
      type: "paragraph",
      text: [
        t("Most teams already track velocity; few track the specific stage-by-stage breakdown that reveals where AI actually helped. Four numbers, tracked separately instead of blended into one cycle-time average, tell the real story:"),
      ],
    },
    {
      type: "numbered-list",
      items: [
        [b("Time to first draft."), t(" How long from starting a task to having a reviewable pull request — this is the number AI assistants move the most.")],
        [b("Time in review."), t(" How long a pull request sits waiting for and undergoing review — the stage most likely to have grown even as drafting shrank.")],
        [b("Time to integrate."), t(" How long from approval to merged and deployed — where flaky tests or manual deployment steps still gate the pipeline regardless of how the code was written.")],
        [b("Post-release defect rate, split by AI-assisted vs. not."), t(" The number that tells you whether faster is actually costing quality, rather than assuming either way.")],
      ],
    },
    {
      type: "paragraph",
      text: [
        t("Teams that only track the blended average often conclude AI \"isn't really helping\" when in fact drafting time dropped substantially but got absorbed by an unchanged review stage — the improvement is real, it's just invisible until the four numbers are separated.")],
    },

    { type: "heading", level: 2, id: "h-tooling", text: "Tooling that supports the new workflow" },
    {
      type: "tick-list",
      items: [
        [b("Provenance tagging in the PR template,"), t(" so a reviewer sees at a glance which lines were AI-drafted without needing to guess from style alone.")],
        [b("Automated behavior-parity test suites"), t(" wired into CI, so a refactor's pass/fail signal doesn't rely on a human remembering to check for regressions.")],
        [b("Backlog and sprint-planning tools with AI-assisted estimation"), t(" (several teams use Jira's built-in assistance for this) to help size stories against real historical cycle time rather than gut feel.")],
        [b("A visible dashboard of the four cycle-time numbers above,"), t(" reviewed at retro, so the team adjusts the plan based on its own measured data instead of a published industry average.")],
      ],
    },

    { type: "heading", level: 2, id: "h-what-doesnt-change", text: "What doesn't change" },
    {
      type: "paragraph",
      text: [
        t("Agile's core discipline — small increments, honest sprint reviews, a backlog re-prioritized against real feedback — is still what keeps a release date credible. AI assistants change how fast a task can be written; they don't change whether the team agreed on the right scope, or whether \"done\" was defined clearly enough to avoid rework. Teams that keep those fundamentals and re-plan around the new bottleneck ship measurably faster. Teams that expect the old process to automatically go faster because a new tool is in it usually don't."),
      ],
    },
  ],

  faq: [
    {
      question: "Do AI coding assistants actually shorten release timelines?",
      answer:
        "They can, but only when the sprint plan accounts for where the new bottleneck moved. Code generation speeding up doesn't automatically speed up review, integration, and testing — teams that re-plan around all three stages see real gains; teams that don't often see the same release dates slip for a different reason than before.",
    },
    {
      question: "Should we budget less review time because AI writes the code faster?",
      answer:
        "No — usually the opposite. Developer trust in AI-generated code has fallen even as usage has risen, and reviewers are, correctly, applying more scrutiny to AI-assisted changes, not less. Budget review time based on actual measured cycle time, not on the assumption that it shrinks in proportion to writing time.",
    },
    {
      question: "How do we know if our team is actually shipping faster with AI, or just writing code faster?",
      answer:
        "Track cycle time from \"code written\" to \"merged and released,\" not just time-to-first-draft. If that full-cycle number hasn't moved even though drafting got faster, the bottleneck shifted to review or integration and the sprint plan needs to change there.",
    },
    {
      question: "Is it safe to let AI assistants handle refactoring of existing production code?",
      answer:
        "It's safe when paired with behavior-parity testing that validates the refactor preserves existing behavior, not just that it compiles. Without that safety net, AI-assisted refactors are exactly the kind of change most likely to pass a shallow review and fail in production.",
    },
  ],

  summary: [
    t(
      "AI coding assistants make writing code faster — up to 55% faster on some tasks — but developer trust in AI-generated output has fallen as usage has risen, and that trust gap shows up as extra review time most sprint plans don't account for. Teams that keep shipping on time re-baseline velocity after adoption instead of before it, budget review and integration time separately from generation time, add provenance flags and behavior-parity testing to their release-readiness checks, and keep Agile's core discipline — small increments, honest reviews, a rollback plan — intact underneath the new tooling. The teams that miss their release dates are usually the ones that expected the old process to go faster automatically, rather than re-planning around where the bottleneck actually moved."
    ),
  ] as RichText,

  tags: ["AI", "Guides", "Development"],
};

export default article;
