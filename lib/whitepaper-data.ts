// ═══════════════════════════════════════════════════════════
// Whitepaper Data — types + content for all whitepapers
//
// Flags / identifiers used to drive dynamic rendering:
//
//   RichText.accent   → render segment in accent color (#3CC4E5)
//
//   DescriptionParagraph:
//     string               → plain text paragraph
//     DescriptionSegment[] → paragraph with mixed text + inline links;
//                            set href on a segment to render it as <a>
//
//   hero.note         → optional { strong, text } rendered as
//                        <p><strong>…</strong>…</p> after description
//
//   AnswerBlock.kind:
//     "p"  → plain paragraph
//     "ol" → numbered ordered list
//     "ul" → tick-mark unordered list
//            UlItem variants:
//              { text: string; strong?: string }           plain text, opt. bold prefix
//              { segments: UlItemSegment[]; strong?: string } body with inline links
//
//   WhitepaperData.overview → omit key to hide the section
//   WhitepaperData.faq      → omit key to hide the section
//   faq.title               → custom heading (defaults to "Frequently asked questions")
//   faq.defaultOpen         → indices open on load (default [0])
//   faq.initialCount        → how many items to show before "Load more" button;
//                             omit to show all items at once
// ═══════════════════════════════════════════════════════════

/** A piece of inline text, optionally highlighted in accent color. */
export type RichText = {
  text: string;
  accent?: true;
};

/**
 * One segment of a description paragraph.
 * Set `href` to render it as a link; omit for plain text.
 */
export type DescriptionSegment = { text: string; href?: string };

/**
 * A description paragraph — either a plain string or an array of
 * segments (used when the paragraph contains inline links).
 */
export type DescriptionParagraph = string | DescriptionSegment[];

/** A title composed of multiple inline segments. */
export type RichTitle = RichText[];

/**
 * One item inside a FAQ "ul" block.
 * Use `text` for plain items; use `segments` when the item contains inline links.
 * Either way, `strong` renders a bold prefix before the body.
 */
export type UlItemSegment = { text: string; href?: string };
export type UlItem =
  | { strong?: string; text: string }
  | { strong?: string; segments: UlItemSegment[] };

/** A single block inside a FAQ answer. */
export type AnswerBlock =
  | { kind: "p"; text: string }
  | { kind: "ol"; items: string[] }
  | { kind: "ul"; items: UlItem[] };

export type FaqItem = {
  question: string;
  answer: AnswerBlock[];
};

export type WhitepaperData = {
  /** URL segment — matches the [slug] in /whitepapers/[slug] */
  slug: string;

  meta: {
    title: string;
    description: string;
  };

  /** Label shown as the last crumb: Home > Whitepapers > {breadcrumb} */
  breadcrumb: string;

  hero: {
    /** Title segments; mark accent: true on the coloured words */
    title: RichTitle;
    /** One entry per paragraph in the left column */
    description: DescriptionParagraph[];
    /** Absolute path to the PDF asset */
    pdfUrl: string;
    /** Card heading — defaults to "Get the guide" */
    formTitle?: string;
    /** Submit button label — defaults to "Download PDF" */
    submitLabel?: string;
    /**
     * Optional highlighted note rendered after description paragraphs.
     * `strong` is bolded, `text` follows inline.
     * Example: { strong: "Bonus inside:", text: " Software Developers Comparison Template" }
     */
    note?: { strong: string; text: string };
  };

  /** Omit to hide the overview section entirely */
  overview?: {
    title: RichTitle;
    /** Every item renders with a tick checkmark prefix */
    items: string[];
  };

  /** Omit to hide the FAQ section entirely */
  faq?: {
    /** Section heading — defaults to "Frequently asked questions" */
    title?: string;
    /** Accordion indices open on first render — defaults to [0] */
    defaultOpen?: number[];
    /**
     * How many items to display before the "Load more" button.
     * Omit to show all items immediately.
     */
    initialCount?: number;
    items: FaqItem[];
  };
};

// ─────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────

export const whitepapers: WhitepaperData[] = [
  /* ── 1. Mastering Software Development Process ── */
  {
    slug: "mastering-software-development-process",
    meta: {
      title:
        "Mastering Software Development Process: Our Methodology | Nexterse LLC",
      description:
        "Download our whitepaper on the software development process — explore the 14-step lifecycle, Agile methodology in action, and deliverables at every stage.",
    },
    breadcrumb: "Mastering Software Development Process",
    hero: {
      title: [
        { text: "Mastering " },
        { text: "Software Development Process", accent: true },
        { text: ": Our Methodology" },
      ],
      description: [
        "The software development process has a well-defined methodology behind it, but the nuances differ from company to company. The gap between a professional and an unprofessional software provider lies in these differences. It's about the guidelines they follow, the quality standards they uphold, and the management practices they employ.",
        "Rather than overwhelming you with theoretical explanations, we invite you to explore a proven, practical approach to software development. This whitepaper outlines the process we use to deliver high-quality solutions through our software development services.",
      ],
      pdfUrl:
        "/whitepaper/Complete-Software-Development-Process-in-14-Steps-Nexterse.pdf",
    },
    overview: {
      title: [
        { text: "Overview.", accent: true },
        { text: "What's inside." },
      ],
      items: [
        "Key principles of our development process",
        "The 14-step software development lifecycle",
        "Visible to Client vs. Behind the Scenes activities",
        "Agile methodology in action",
        "Deliverables at every stage of development",
      ],
    },
    faq: {
      defaultOpen: [0],
      items: [
        {
          question:
            "What are the stages of the software development life cycle?",
          answer: [
            {
              kind: "p",
              text: "The software development life cycle includes the following stages:",
            },
            {
              kind: "ol",
              items: [
                "Project Kickoff",
                "Discovery Phase",
                "Development Iterations (Sprint Planning, Running, Stabilization, Demo, Acceptance)",
                "Testing",
                "Product Stabilization",
                "User Acceptance Testing (UAT)",
                "Deployment or Release",
                "Post-Deployment Support",
              ],
            },
          ],
        },
        {
          question: "What are software development process benefits?",
          answer: [
            {
              kind: "p",
              text: "A well-established development process acts like a precise tool with clear instructions — it enhances the way the professionals work and, as a result, improves the quality of deliverables. For a business, it means:",
            },
            {
              kind: "ul",
              items: [
                {
                  strong: "Better alignment with business goals",
                  text: ". A well-established process ensures no requirement is overlooked and no need is unmet.",
                },
                {
                  strong: "Effective risk management",
                  text: ". A project manager takes charge of risk management, and an effective development process provides enough space and tools to identify risks early on and implement proactive measures.",
                },
                {
                  strong: "Top quality",
                  text: ". A well-established development process requires systematic testing efforts and regular reviews from the beginning of the project, leading to a more reliable and robust product.",
                },
                {
                  strong: "Effective resource utilization.",
                  text: " Streamlined workflows help optimize the use of time, budget, and talent.",
                },
                {
                  strong: "Adaptability to changing requirements",
                  text: ". A well-structured process provides the flexibility to adapt to evolving requirements without compromising deadlines or budgets.",
                },
              ],
            },
          ],
        },
      ],
    },
  },

  /* ── 2. IoT 7 Components: Structure Overview ── */
  {
    slug: "iot-7-components-structure-overview",
    meta: {
      title: "IoT 7 Components: Structure Overview | Nexterse LLC",
      description:
        "Explore the 7 key components of an IoT ecosystem — from IoT devices and security to network, gateway, cloud, application, and users.",
    },
    breadcrumb: "IoT components",
    hero: {
      title: [
        { text: "IoT 7 " },
        { text: "Components", accent: true },
        { text: ": Structure Overview" },
      ],
      description: [
        "The Internet of Things concept became quite a discussible topic in recent years.",
        "People all over the world continue to connect to the internet of things either for professional use (manufacturers) or personal (smartwatches/bands). This, in turn, implies that more people become potentional enthusiasts about the IoT technology. For those people we prepared this guide. Newcomers will find the material simple to understand, while advanced enthusiast can benefit from the detailed information in the second part of the whitepaper.",
      ],
      pdfUrl: "/whitepaper/IoT-7-Components-Structure-Overview-Nexterse.pdf",
    },
    overview: {
      title: [
        { text: "Overview.", accent: true },
        { text: "What's inside." },
      ],
      items: [
        "How Ecosystems Look and What Lies Behind the Term IoT Ecosystem 2",
        "7 components of IoT ecosystem",
        "#1 Component: IoT Devices",
        "#2 Component: Security",
        "#3 Component: Network",
        "#4 Component: Gateway",
        "#5 Component: Cloud",
        "#6 Component: Application",
        "#7 Component: Users",
      ],
    },
    // No FAQ for this whitepaper
  },

  /* ── 3. Building SaaS Platforms. Trends, Challenges, Our Expertise ── */
  {
    slug: "building-saas-platforms-trends-challenges-our-expertise",
    meta: {
      title:
        "Building SaaS Platforms. Trends, Challenges, Our Expertise | Nexterse LLC",
      description:
        "Download our whitepaper on building SaaS platforms — SaaS benefits, development process, top trends, challenges, our tech stack, and quality approach.",
    },
    breadcrumb: "Building SaaS Platforms. Trends, Challenges, Our Expertise",
    hero: {
      title: [
        { text: "Building " },
        { text: "SaaS", accent: true },
        { text: " Platforms. Trends, Challenges, Our Expertise" },
      ],
      description: [
        [
          {
            text: "The whitepaper you are looking at contains information on how Nexterse LLC develops Software-as-a-Service (SaaS) applications. We strongly encourage you to read this guide if you are going to collaborate with Nexterse LLC in ",
          },
          {
            text: "building a SaaS application",
            href: "/services/saas-development",
          },
          {
            text: " or if you have doubts about whether you should develop a SaaS app or not.",
          },
        ],
      ],
      pdfUrl:
        "/whitepaper/Building-SaaS-Platforms-Trends-Challenges-Expertise-Nexterse.pdf",
    },
    overview: {
      title: [
        { text: "Overview.", accent: true },
        { text: "What's inside." },
      ],
      items: [
        "SaaS benefits for businesses",
        "SaaS development process",
        "Top trends in SaaS development",
        "SaaS development challenges",
        "The technological stack we use and why",
        "The way we develop apps – we chase quality",
      ],
    },
    // No FAQ for this whitepaper
  },

  /* ── 4. Software Development Cost Estimation — Process & Techniques ── */
  {
    slug: "software-development-cost-estimation-process-techniques",
    meta: {
      title:
        "Software Development Cost Estimation — Process & Techniques | Nexterse LLC",
      description:
        "Download our guide on software development cost estimation — types of requests, estimation process details, project analysis, and ideal business proposal structure.",
    },
    breadcrumb: "Software development cost estimation — process & techniques",
    hero: {
      title: [
        { text: "Software development " },
        { text: "cost estimation", accent: true },
        { text: " — process & techniques" },
      ],
      description: [
        "When you plan to develop software, no matter what type — an MVP for your startup or a corporate application — one of the first things you want to know is how much it will cost and how long it will take to develop.",
        "Download our guide about the best practices applied in software development cost estimation and see what happens under the hood of that process.",
      ],
      pdfUrl:
        "/whitepaper/Software-Development-Cost-Estimation-Process-Techniques-Nexterse.pdf",
    },
    overview: {
      title: [
        { text: "Overview.", accent: true },
        { text: "What's inside." },
      ],
      items: [
        "Types of requests and their difference",
        "Software development estimation process details",
        "Project analysis phase structure",
        "Important things to discuss with the software company",
        "Ideal business proposal overview",
      ],
    },
    faq: {
      title: "FAQ about Software Estimation",
      defaultOpen: [0],
      initialCount: 5,
      items: [
        {
          question: "What is an estimation process?",
          answer: [
            {
              kind: "p",
              text: "The estimation process is a series of predefined activities designed to analyze project details and predict the time, cost, and resources required for software development. It typically includes phases such as gathering project information, analyzing data, and creating a business proposal.",
            },
          ],
        },
        {
          question: "What is the purpose of software estimation?",
          answer: [
            {
              kind: "p",
              text: "The purpose is to calculate the required time, costs, and resources for software development. This clarity enables businesses to plan budgets and make informed investment decisions, while developers get a clear vision of the project scope and the effort required for successful development.",
            },
          ],
        },
        {
          question: "What are the key steps in the software estimation process?",
          answer: [
            { kind: "p", text: "5 Key steps of software estimation include:" },
            {
              kind: "ol",
              items: [
                "gathering initial requirements;",
                "conducting a call to clarify business goals;",
                "analyzing the project scope;",
                "creating a work breakdown structure and estimating it;",
                "preparing and presenting the business proposal.",
              ],
            },
          ],
        },
        {
          question: "What are some common software estimation techniques?",
          answer: [
            {
              kind: "p",
              text: "6 Common estimation techniques include:",
            },
            {
              kind: "ul",
              items: [
                { text: "expert judgment;" },
                { text: "analogous estimation;" },
                { text: "bottom-up estimation;" },
                { text: "expert judgment;" },
                { text: "three-point estimation;" },
                { text: "parametric estimation." },
              ],
            },
            {
              kind: "p",
              text: "In general, most estimation techniques rely on some form of consensus, as they refer to the inputs from multiple experts or average values in the historical data.",
            },
          ],
        },
        {
          question: "What are the challenges in software estimation?",
          answer: [
            {
              kind: "p",
              text: "Challenges imply factors that can hinder estimation accuracy during the estimation process. Core challenges include unclear requirements, limited initial project details, and unrealistic timelines.",
            },
          ],
        },
        {
          question: "How can we improve software estimation accuracy?",
          answer: [
            {
              kind: "p",
              text: "Assuming you are working with professional software developers with a solid estimation process, you can improve estimation accuracy with several actions:",
            },
            {
              kind: "ul",
              items: [
                { text: "provide detailed initial project requirements;" },
                { text: "be transparent with budget and timeline;" },
                { text: "engage in open communication from the beginning;" },
                { text: "allow time for requirements analysis;" },
                {
                  segments: [
                    { text: "request the " },
                    { text: "Discovery Phase", href: "/services/discovery-phase" },
                    { text: " to remove uncertainty in requirements." },
                  ],
                },
              ],
            },
          ],
        },
        {
          question:
            "What are 3 rules for estimating work in time in software development projects?",
          answer: [
            { kind: "p", text: "3 rules for software estimation:" },
            {
              kind: "ul",
              items: [
                { text: "define clear requirements;" },
                { text: "break down tasks into manageable components;" },
                { text: "consider team capacity." },
              ],
            },
          ],
        },
        {
          question: "What is the 50/90 estimation technique?",
          answer: [
            {
              kind: "p",
              text: "The 50/90 estimation predicts timelines or costs with two probabilities:",
            },
            {
              kind: "ul",
              items: [
                { text: "50% likelihood that the project meets the estimate." },
                {
                  text: "90% likelihood the project stays within a longer or higher estimate, accounting for uncertainties.",
                },
              ],
            },
          ],
        },
        {
          question:
            "What is the 40/20/40 rule of thumb in software engineering?",
          answer: [
            {
              kind: "p",
              text: "This rule allocates effort in software development projects as:",
            },
            {
              kind: "ul",
              items: [
                { text: "40% for planning and design;" },
                { text: "20% for coding;" },
                { text: "40% for testing and debugging." },
              ],
            },
          ],
        },
      ],
    },
  },

  /* ── 5. Discovery Phase: the Business Benefits It Brings ── */
  {
    slug: "discovery-phase-the-business-benefits-it-brings",
    meta: {
      title: "Discovery Phase: the Business Benefits It Brings | Nexterse LLC",
      description:
        "Download our whitepaper on the Discovery Phase — best practices in Business Analysis, requirements gathering, and the business benefits of a well-run discovery process.",
    },
    breadcrumb: "Discovery Phase: the business benefits it brings",
    hero: {
      title: [
        { text: "Discovery Phase:", accent: true },
        { text: " the business benefits it brings" },
      ],
      description: [
        "Requirements are the core of any software project. They determine the functionality, behavior, and, ultimately, the project's success. Unfortunately, most companies don't pay enough attention to the requirements-gathering process. This task is often left up to project managers or even developers, who are trained to implement the necessary features or functions, rather than gathering or analyzing requirements specifications.",
        [
          {
            text: "Download our guide about the best practices applied in Business Analysis, how ",
          },
          {
            text: "Discovery Phase",
            href: "/services/discovery-phase",
          },
          {
            text: " should be done in the right way, and the benefits businesses can get from Business Analysis.",
          },
        ],
      ],
      pdfUrl:
        "/whitepaper/Discovery-Phase-Business-Benefits-Nexterse.pdf",
    },
    overview: {
      title: [
        { text: "Overview.", accent: true },
        { text: "What's inside." },
      ],
      items: [
        "Why Do Software Development Projects Fail?",
        "Software Requirements Gathering Value",
        "Impact of Business Analysts",
        "Discovery Phase. What's this?",
        "Business Analysis Terms Definitions",
        "Top Benefits of Discovery Phase",
      ],
    },
    // No FAQ for this whitepaper
  },

  /* ── 6. Expert Guide Into UX/UI Design Process ── */
  {
    slug: "expert-guide-into-ux-ui-design-process",
    meta: {
      title: "Expert Guide Into UX/UI Design Process | Nexterse LLC",
      description:
        "Download our expert guide on the UX/UI design process — artifacts, process map, research, ideation, design, testing, and development handoff.",
    },
    breadcrumb: "Design Process Guide",
    hero: {
      title: [
        { text: "Expert Guide Into UX/UI " },
        { text: "Design Process", accent: true },
      ],
      description: [
        "Explore the key steps and artifacts of a user-centered design process with our expert guide. At Nexterse LLC, we blend creativity, strategy, and flexibility to deliver tailored solutions for your business goals. Discover how our design process—from research to development—ensures project success while empowering you to choose the most valuable elements for your needs. Let's create together, with clarity and collaboration at every step.",
      ],
      pdfUrl:
        "/whitepaper/Expert-Guide-UX-UI-Design-Process-Nexterse.pdf",
    },
    overview: {
      title: [
        { text: "Overview.", accent: true },
        { text: "What's inside" },
      ],
      items: [
        "How to Navigate the Artifacts",
        "Design Process Map",
        "Project Kickoff & Design Questionnaire",
        "Research and Discover",
        "Ideate and Define",
        "Design",
        "Testing",
        "Transition to Development",
        "Design Review",
      ],
    },
    faq: {
      title: "FAQ",
      defaultOpen: [0],
      items: [
        {
          question: "What is the user experience design process?",
          answer: [
            {
              kind: "p",
              text: "The user experience (UX) design process involves systematic steps to create a product that meets user needs. It includes research, ideation, prototyping, testing, and development handoff. Each stage focuses on ensuring usability, functionality, and emotional resonance with the target audience.",
            },
          ],
        },
        {
          question: "What are the 6 stages of the UX design process?",
          answer: [
            { kind: "p", text: "The six stages of the UX design process include:" },
            {
              kind: "ul",
              items: [
                { text: "Project kickoff" },
                { text: "Research and discovery" },
                { text: "Ideation and definition" },
                { text: "Design" },
                { text: "Testing" },
                { text: "Transition to development" },
              ],
            },
            {
              kind: "p",
              text: "These stages are iterative, meaning it's totally okay to revisit some steps if some insights emerge or refinements are required.",
            },
          ],
        },
        {
          question: "What are the 7 principles of user experience design?",
          answer: [
            {
              kind: "p",
              text: "7 principles a great user experience design should have are:",
            },
            {
              kind: "ul",
              items: [
                { text: "be useful;" },
                { text: "be desirable;" },
                { text: "be accessible;" },
                { text: "be credible;" },
                { text: "be findable;" },
                { text: "be usable;" },
                { text: "deliver value." },
              ],
            },
            {
              kind: "p",
              text: "However, the origin of design principles comes from Jakob Nielsen, who formulated the 10 Usability Heuristics.",
            },
          ],
        },
      ],
    },
  },

  /* ── 7. How to Find the Best Software Development Partner ── */
  {
    slug: "how-to-find-the-best-software-development-partner",
    meta: {
      title: "How to Find the Best Software Development Partner | Nexterse LLC",
      description:
        "Download our guide on how to find a reliable software development company — 6 steps, key factors to consider, and pitfalls to avoid.",
    },
    breadcrumb: "How to find the best software development partner",
    hero: {
      title: [
        { text: "How to find", accent: true },
        { text: " the best software development partner" },
      ],
      description: [
        "Looking for a software development company is complicated and challenging. There are no “real” things to touch or test compared to the situations when you buy some products.",
        "These are the peculiarities that you should know and keep in mind when you start looking for a team to work with. Having worked in the custom software development services industry for more than 10 years, our experts have prepared some advice for you on how to survive this journey and what pitfalls you may face.",
        "Download our guide about how to find a reliable software development company and what pitfalls to avoid.",
      ],
      note: {
        strong: "Bonus inside:",
        text: " Software Developers Comparison Template",
      },
      pdfUrl:
        "/whitepaper/How-to-Find-Best-Software-Development-Partner-Nexterse.pdf",
    },
    overview: {
      title: [
        { text: "Overview.", accent: true },
        { text: "What's inside." },
      ],
      items: [
        "Stop 1: Setting business goals and priorities",
        "Stop 2: Defining requirements to the vendor",
        "Stop 3: Making companies list",
        "Stop 4: Shortlisting companies to contact",
        "Stop 5: Contacting and getting a quote",
        "Stop 6: Choosing the best",
      ],
    },
    faq: {
      title: "FAQ",
      defaultOpen: [0, 1, 2],
      items: [
        {
          question:
            "How to choose the right custom software development company?",
          answer: [
            {
              kind: "ul",
              items: [
                {
                  text: "Choose a company with proven experience in your industry, a skilled team, and a transparent process.",
                },
                {
                  text: "Check their portfolio, Client reviews, and communication style. Ensure they understand your goals and fit your budget.",
                },
                {
                  text: "A professional partner will provide a free quote, aligning their offer with your vision and suggesting options for your budget without compromising quality.",
                },
              ],
            },
          ],
        },
        {
          question:
            "What are key factors to consider when selecting a software development company?",
          answer: [
            {
              kind: "p",
              text: "There are 5 key points to pay your attention to: focus on portfolio, years of experience, Client reviews, expertise in your business domain, communication style, and willingness to listen and find a solution that aligns with your needs.",
            },
            {
              kind: "p",
              text: "Request a free quote, ensure a company signs NDA, ask if it’s okay you have a technical specialist on your side, don’t rush with a decision and trust your gut.",
            },
          ],
        },
        {
          question: "How to find potential software development companies?",
          answer: [
            {
              kind: "p",
              text: "Explore platforms like Clutch and Techreviewer to make a first impression about companies, ask colleagues, partners, or industry peers for referrals, and do online research by browsing top companies in your industry. Shortlist companies with solid expertise, a good reputation, and relevant experience in your domain.",
            },
          ],
        },
      ],
    },
  },
];

export function getWhitepaper(slug: string): WhitepaperData | undefined {
  return whitepapers.find((wp) => wp.slug === slug);
}
