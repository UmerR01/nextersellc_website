export type WireframeKind = "kanban" | "dashboard" | "quotes" | "workspace" | "studio" | "placeholder";

export type Product = {
  slug: string;
  name: string;
  /** Accent word in the title: "{name} {suffix}" */
  suffix: string;
  category: string;
  /** Short one-line for cards ("More from Nexterse") */
  short: string;
  description: string;
  chips: [string, string, string];
  logo: string;
  website: string;
  /** "Book a demo" target. Defaults to the site's own contact modal
   * (#get-modal-popup) when omitted. */
  bookDemoUrl?: string;
  wireframe: WireframeKind;
  /** Screenshots instead of wireframes: a hero image plus one phone
   * screenshot per feature (same order as `features`). */
  images?: { hero: string; features: string[] };
  /** Light tint for text on dark, solid for buttons — taken from each product's own UI */
  colors: { accent: string; solid: string };
  /** onAccent (optional) is the text colour on solid accent buttons, for
   * accents too light for white text.
   * Overrides the sitewide --color-accent for this product's own page
   * only (white surfaces stay the sitewide default). accentDark is optional
   * and only overrides --color-accent-dark when a product has its own real
   * dark/black brand colour worth using instead of the sitewide navy.
   * onAccentDark is the text color used on top of accentDark — only needed
   * when accentDark is light enough that the sitewide white text on it
   * would be unreadable. */
  theme: { accent: string; accentDark?: string; onAccentDark?: string; onAccent?: string };
  features: { title: string; text: string }[];
  ctaText: string;
  faqs: { q: string; a: string[] }[];
  // Placeholder quote until a real customer review is supplied.
  quote: { text: string; name: string; role: string };
};

export const PRODUCTS: Product[] = [
  {
    slug: "xorris",
    name: "Xorris",
    suffix: "Calling",
    category: "AI Calling",
    short: "AI voice agents that run outbound calls end to end.",
    description:
      "An AI-powered calling platform that automates outbound calling, combining natural voices, real-time transcription and a knowledge base your agents can draw on.",
    chips: ["Voice agents", "Live transcripts", "Call analytics"],
    logo: "/products/xorris/logo.png",
    website: "https://xorris.com",
    bookDemoUrl: "https://xorris.com/?book_demo=1",
    wireframe: "dashboard",
    colors: { accent: "#c77dd0", solid: "#812986" },
    // #000000 is the real background of xorris.com's own marketing site
    // (`bg-black` on its <body>), not a derived/approximated shade.
    theme: { accent: "#812986", accentDark: "#000000" },
    features: [
      {
        title: "AI Calling",
        text: "An AI agent makes and takes the call itself, holding a real conversation instead of playing a script. Launch calls immediately or schedule them by timezone, and every call is transcribed live so nothing said on the line goes unrecorded. It's built for volume: recruitment screens, sales outreach, and support calls all run through the same engine.",
      },
      {
        title: "Voice Cloning",
        text: "Beyond the preset voice library, Xorris can clone a real voice so an agent sounds like an actual person on your team, not a generic text-to-speech bot. Each cloned or preset voice keeps its own name, tone and personality, so different campaigns can sound distinctly different on purpose.",
      },
      {
        title: "Multilingual (Arabic/English)",
        text: "Agents can run calls in English or Arabic, matching the accent and phrasing a caller actually expects instead of a flat translated script. That makes the same platform usable for a US sales team and a Gulf-region support line without standing up separate tooling for each.",
      },
      {
        title: "CRM",
        text: "Numbers, contacts and call history live in one place instead of scattered spreadsheets, so every agent call updates a record you can actually act on. Reps and managers see the same up-to-date picture of who was called, when, and what happened, right alongside the transcripts.",
      },
      {
        title: "Knowledge Basis",
        text: "Upload your own PDFs, docs and FAQs, and agents answer from that material instead of guessing or going off-script. That keeps pricing, policy and product answers consistent across every call, and means updating one document updates what every agent says next.",
      },
      {
        title: "Campaigns",
        text: "Group calls into multi-stage campaigns, with follow-ups that fire automatically at the interval you set instead of manual reminders. A dropped or unanswered call retries into the next stage on its own, so leads don't fall through simply because a call didn't connect the first time.",
      },
    ],
    ctaText: "Book a short demo and we will show you how Xorris fits the way your team calls.",
    faqs: [
      {
        q: "What can Xorris be used for?",
        a: [
          "Recruitment calls, sales outreach, customer support, surveys, appointment setting and multi-stage follow-up campaigns.",
        ],
      },
      {
        q: "Which languages and voices are supported?",
        a: [
          "Xorris offers several preset voices, voice cloning, and multi-language support including English, Urdu and Arabic accents.",
        ],
      },
      {
        q: "Can the agent answer questions about our business?",
        a: [
          "Yes. Upload documents and connect your knowledge base, and the agent uses them to give context-aware answers on calls.",
        ],
      },
      {
        q: "How is access secured?",
        a: [
          "Accounts use token-based authentication with email and phone verification, and new accounts are approved by an admin before they go live.",
        ],
      },
      {
        q: "How much does it cost?",
        a: ["Book a demo and we will walk you through options that fit your call volume."],
      },
    ],
    quote: {
      text: "Xorris gave us one place to run and review every call. We stopped chasing updates and started making decisions.",
      name: "Daniel Brooks",
      role: "Head of Talent Acquisition",
    },
  },
  {
    slug: "saleshub",
    name: "SalesHub",
    suffix: "Quoting",
    category: "Sales",
    short: "Quote faster and manage brokers, rates and commissions in one place.",
    description:
      "A sales quoting and broker management platform for insurance brokers and agencies: centralised rate tables, automated premium calculation, and one home for brokers, quotes and commissions.",
    chips: ["Quote engine", "Broker CRM", "Rate tables"],
    logo: "/products/saleshub/logo.png",
    website: "https://saleshub.natroxai.com",
    bookDemoUrl: "https://saleshub.natroxai.com/?demo=1",
    wireframe: "quotes",
    colors: { accent: "#6f9bf0", solid: "#0b3ea8" },
    // accentDark is white, so onAccentDark switches the CTA/"Let's set you
    // up" block's text to dark navy (--color-text) instead of the sitewide
    // white, which would otherwise be invisible on white.
    theme: { accent: "#0b3ea8", accentDark: "#ffffff", onAccentDark: "#0a1530" },
    features: [
      {
        title: "Easy company & product setup",
        text: "Add an insurance company once, with its branding, contact details, broker commission and the policy types it writes, then build products under it with visa holders, TPAs and visa types attached. Every quote and rate table downstream pulls from that same setup, so nothing gets re-entered per quote.",
      },
      {
        title: "Easy Family Quotes",
        text: "Pick a company and product, choose Self, Family, or Self + Family, and enter each person's details. SalesHub calculates the premium for you: base premium plus add-ons and tax, less any discount, down to a final number with its own quote ID. The principal person's visa emirate and visa type drive which rate charts apply, dependents are automatically priced off the universal charts, and the quote exports straight to PDF or email, ready to send.",
      },
      {
        title: "Updated rates and TOBs",
        text: "Rates are set by plan and age band, with separate male/female pricing and co-pay variants, per company, so a rate change updates every quote that touches it. Table-of-benefits rows live alongside the rates, per plan, visa and TPA, so pricing and coverage never drift apart.",
      },
      {
        title: "AI voice agent for leads",
        text: "Turn on the built-in Xorris integration and an AI agent starts calling your leads for you, with its own assigned number per language. Set a daily calling rule: call a set number of leads from a given status at a set time, and follow-ups happen on schedule without anyone dialing manually.",
      },
      {
        title: "Analytics",
        text: "A live dashboard tracks total, active, converted and closed leads alongside call volume, answer rate and a stage-by-stage conversion funnel, with a team performance table showing conversion rate per agent. It's the same data your calling and quoting already produce, just surfaced where you can act on it.",
      },
      {
        title: "Call logs & transcripts",
        text: "Every call against a lead is logged with its duration and outcome, and each one opens into a full conversation transcript, message by message with timestamps, so a rep can catch up on a lead's history in seconds instead of re-asking what was already covered.",
      },
    ],
    ctaText: "Book a short demo and we will show you how SalesHub fits the way your team sells.",
    faqs: [
      {
        q: "Who is SalesHub for?",
        a: ["Insurance brokers, agencies and financial services teams that quote and manage brokers at volume."],
      },
      {
        q: "How are premiums calculated?",
        a: [
          "Premiums are built from the base premium, add-ons and tax, less any discount, using the rate tables you maintain in the platform.",
        ],
      },
      {
        q: "Can we share quotes with clients?",
        a: ["Yes. Quotes can be exported as PDF or sent by email, and each one is saved with its own quote ID."],
      },
      {
        q: "How is access controlled?",
        a: [
          "Role-based access (admin, agent, viewer), encrypted passwords, HTTPS, CSRF protection and audit logs.",
        ],
      },
      {
        q: "How much does it cost?",
        a: ["Book a demo and we will walk you through options that fit your team."],
      },
    ],
    quote: {
      text: "SalesHub gave us one place to see every quote and broker. We stopped rebuilding rate sheets and started closing.",
      name: "Rachel Turner",
      role: "Sales Director",
    },
  },
  {
    slug: "joblynk",
    name: "Joblynk",
    suffix: "Recruiting",
    category: "Recruiting",
    short: "Hire faster with one pipeline from job post to offer.",
    description:
      "An AI recruiting platform that automates interviews and candidate evaluation, with job posting, applicant pipelines and scheduling in a single hiring workflow your whole team can see.",
    chips: ["Job posting", "Candidate pipeline", "Interviews"],
    logo: "/products/joblynk/icon.png",
    website: "https://www.joblynk.ai",
    bookDemoUrl: "https://app.joblynk.ai/book-demo",
    wireframe: "kanban",
    colors: { accent: "#31b1ef", solid: "#0f6fb8" },
    // #005BA0 is Joblynk's real logo blue.
    theme: { accent: "#005BA0", accentDark: "#ffffff", onAccentDark: "#0a1530" },
    features: [
      {
        title: "Autonomous Talent Discovery",
        text: "AI scans 750M+ profiles globally to surface active and passive candidates that match your exact criteria, not just keyword matches on a resume, but people who fit the role, the seniority, and the requirements you actually set. It keeps working in the background across every open req, so a pipeline never sits empty waiting for someone to go searching.",
      },
      {
        title: "AI Voice, SMS & Email",
        text: "AI places outbound calls, sends texts, and crafts emails, all personalized, autonomous, and running around the clock. Candidates hear back the same day they apply instead of waiting on a recruiter's schedule, and every touch is logged against their profile so nothing gets sent twice or missed.",
      },
      {
        title: "AI Interviews",
        text: "Structured first-round interviews conducted by AI that validate skills, availability, and fit at scale, so your team only spends time on candidates who've already cleared the bar. Every interview follows the same structure, which means results are comparable across candidates instead of depending on who happened to run the call.",
      },
      {
        title: "Qualification & Validation",
        text: "Verifies compensation expectations, work authorization, availability, and role-specific requirements before a candidate ever reaches a hiring manager. That turns the pipeline into a shortlist of people who are actually eligible and ready to move, instead of a list that still needs manual vetting.",
      },
      {
        title: "Workflow Automation",
        text: "End-to-end orchestration from job intake to candidate delivery, with no manual steps required. Once a job is posted, sourcing, outreach, interviews and qualification all run on their own, and a recruiter steps in at the point that actually needs a human decision.",
      },
      {
        title: "ATS Integration",
        text: "Connect Joblynk to the applicant tracking system your team already uses. Qualified candidates, their contact details and interview results sync automatically, so nothing is ever entered twice. Recruiters keep working in their existing ATS while Joblynk handles sourcing, outreach and screening in the background. Every record shows whether it is synced or needs a refresh, so your data stays current.",
      },
    ],
    ctaText: "Book a short demo and we will show you how Joblynk fits the way your team hires.",
    faqs: [
      {
        q: "What does Joblynk do?",
        a: ["It posts jobs, tracks candidates through a pipeline, and schedules interviews, with an AI recruiter that automates interviews and evaluation."],
      },
      {
        q: "Who is it for?",
        a: ["In-house recruiters, recruiting agencies and job seekers."],
      },
      {
        q: "Does it work with our existing tools?",
        a: ["Joblynk connects with common applicant tracking systems and resume parsers."],
      },
      {
        q: "How is candidate access verified?",
        a: ["Accounts use OTP verification and role-based access, so people only see what they should."],
      },
      {
        q: "How much does it cost?",
        a: ["Book a demo and we will walk you through options that fit your hiring volume."],
      },
    ],
    quote: {
      text: "Joblynk gave us one pipeline from job post to offer. We stopped chasing candidates and started hiring.",
      name: "Michael Reyes",
      role: "Recruiting Manager",
    },
  },
  // Croquis AI, Koadic and Fittsy: real one-line descriptions supplied,
  // but no source codebase to research yet, so features/FAQs are kept to
  // what was actually said rather than invented specifics. wireframe is
  // intentionally "placeholder" (generic skeleton, not a real screen) —
  // swap for a dedicated wireframe once each product's real UI is
  // available to recreate. Logo wordmarks and accent colours below are
  // stand-ins pending real branding.
  {
    slug: "croquis",
    name: "Croquis AI",
    suffix: "",
    category: "AI Development",
    short: "Describe your idea and watch an AI developer build it, with your team in control.",
    description: "An AI developer workspace for people with an idea and teams with a backlog. Share what you want to build in plain language, and Croquis AI reviews the requirements, writes the code, runs it and shows you a live preview. No development background is needed, and developers keep full visibility and control.",
    chips: ["AI coding agent", "Live preview", "Git control"],
    logo: "/products/croquis/logo.svg",
    website: "#",
    wireframe: "workspace",
    // Real Croquis AI palette (AI_Developer frontend): #264f9e is its deep
    // brand blue (readable on white, sits well beside the dark dashboard)
    // and #050a1e its dark navy background.
    colors: { accent: "#bbdcfd", solid: "#264f9e" },
    theme: { accent: "#264f9e", accentDark: "#050a1e" },
    features: [
      {
        title: "Coding Agent",
        text: "Share your idea in plain language, or upload a written brief, and the agent reviews it before any code is written. It asks only the minimum questions needed to get started, such as the preferred tech stack, then turns your answers into an approved project brief. From there it builds the project step by step, explaining each action as it goes. Non-coders can follow along easily, and developers get a clear record of every decision.",
      },
      {
        title: "Live Preview",
        text: "Croquis AI builds your project and runs it using the stack it was written in, then shows you a live preview you can open right away. The agent inspects its own output, catches visual and build errors, and fixes them before handing the result back. You see a working product instead of a folder of files. If something looks wrong, you can upload a screenshot and the agent will diagnose and correct it.",
      },
      {
        title: "Resource Intelligence",
        text: "Great projects depend on good references, so the agent researches them for you. It searches the web for design references, images and technical documentation, then uses what it finds to build more accurately. When a project needs an asset, it can fetch one or create one itself. This keeps the result close to what you had in mind without you hunting for resources.",
      },
      {
        title: "Skills",
        text: "Choose an agent that fits the job from a marketplace of skills. Need a polished interface? Pick a frontend specialist. Need something else? Select the skills that match your needs and shape the agent you want. It gives non-coders a simple way to get expert-level results, and gives developers a way to tailor the agent to their workflow.",
      },
      {
        title: "Git Control",
        text: "Connect your GitHub account and let the agent handle version control. It can push, pull, upload and refine builds on your behalf, so you never have to remember a command. Every change is tracked, and you can revert to an earlier point in the conversation if a direction does not work out. Developers keep a clean history, and non-coders never have to touch Git.",
      },
      {
        title: "Human Supervision",
        text: "Work as a team with defined roles, so the agent stays accountable. Projects move through Draft, In Progress, In Review, Pending Push, Revising and Live. QA files comments on the agent's output, a Developer approves them and pushes them to the agent, and the agent revises and replies in the thread. Automation does the heavy lifting while people stay in charge of quality.",
      },
    ],
    ctaText: "Book a short demo and we will show you Croquis AI turning an idea into a working project.",
    faqs: [
      {
        q: "Do I need to know how to code?",
        a: ["No. You describe what you want in plain language and the agent reviews your requirements, asks only what it needs, and builds the project. Developers can still inspect every file and change."],
      },
      {
        q: "What does the agent ask before it starts?",
        a: ["Only the bare minimum, such as your preferred tech stack if you have not mentioned one. It then prepares a final brief for you to approve before building begins."],
      },
      {
        q: "Can I see the result while it is being built?",
        a: ["Yes. The agent builds and runs the project, then shows a live preview. It checks its own output for visual and build errors and fixes them before you review."],
      },
      {
        q: "Does it work with GitHub?",
        a: ["Yes. Connect your GitHub account and the agent can push, pull and upload changes for you, with a full history you can revert through."],
      },
      {
        q: "Can my team review the agent's work?",
        a: ["Yes. Teams use roles such as Developer and QA. QA files comments, a Developer approves and pushes them to the agent, and the project moves through each stage until it is live."],
      },
      {
        q: "Is a live demo available yet?",
        a: ["We are still finishing the product page and demo flow. Get in touch and we will follow up directly."],
      },
    ],
    quote: {
      text: "Croquis AI took our idea straight to a working preview. We stopped stitching build steps together and started reviewing results.",
      name: "Priya Nair",
      role: "Product Founder",
    },
  },
  {
    slug: "koadic",
    name: "Koadic",
    suffix: "",
    category: "AI Design",
    short: "An AI designer that creates images and wireframes from a prompt.",
    description: "An AI design platform that generates images, UI wireframes and other visual designs from a prompt: a design partner that produces real graphical output, not just written specs.",
    chips: ["Image generation", "UI wireframes", "AI design"],
    logo: "/products/koadic/logo.svg",
    website: "#",
    wireframe: "studio",
    // Koadic UI: near-black #0a0a0a background, pink accent #eaa6d6
    // (sampled from its "Open Projects" text). Dark text on the pale
    // pink buttons keeps them legible.
    colors: { accent: "#eaa6d6", solid: "#eaa6d6" },
    theme: { accent: "#eaa6d6", accentDark: "#0a0a0a", onAccent: "#0a0a0a" },
    features: [
      {
        title: "Poster and Social Media Design",
        text: "Describe the message and Koadic designs the poster or social post for you. You get several layout options at once, so you can pick the one that fits your campaign. Once you choose, resize it for a square post, a story or a banner without starting over. Text, imagery and colour are handled together, so the result looks like one finished design.",
      },
      {
        title: "Cultural and Occasion Posts",
        text: "Stay present on every important date without booking a designer each time. Koadic creates greetings and announcements for cultural events and national occasions, with imagery, colours and typography that suit the moment. Choose the occasion, add your brand details and get a post that is ready to share. It keeps your communication timely, respectful and consistent.",
      },
      {
        title: "Landing Pages and Websites",
        text: "Describe your business and Koadic lays out a landing page section by section, from the hero and features to pricing and contact. Need more than one page? The same design extends across a multipage site with consistent style and navigation. You see a real layout to react to instead of a blank canvas, which makes decisions faster.",
      },
      {
        title: "Product and UI Design",
        text: "Turn a product idea into screens your team can build from. Start with wireframes to agree the structure, then move to polished UI with consistent components, spacing and colour. It suits apps, dashboards and internal tools, and it gives developers and stakeholders a shared picture early. Changes are quick, so you can explore options before committing.",
      },
      {
        title: "Logo and Brand Design",
        text: "Generate logo directions from a short description of your brand. Compare several options side by side, choose the one that feels right and see it with a matching colour palette. You can preview the logo on everyday applications such as a business card or an app icon. It is a fast way for a new business to find a look and start using it.",
      },
      {
        title: "Design Editing",
        text: "Change an existing design with plain instructions. Select an element, say what should be different, and Koadic updates it while leaving the rest untouched. Keep refining with follow-up prompts until it is right, without losing earlier work. It turns small edits and repeated variations into a task of seconds instead of a full redesign.",
      },
    ],
    ctaText: "Want to see Koadic turn a prompt into a real design? Get in touch and we'll set up a walkthrough.",
    faqs: [
      {
        q: "What does Koadic do?",
        a: ["It's an AI designer that generates images, UI wireframes and other visual designs from a prompt, so you get real graphical output to start from instead of a blank canvas."],
      },
      {
        q: "What can I design with Koadic?",
        a: ["Posters and social media posts, cultural and occasion posts, landing pages and multipage websites, product and UI designs, logos and brand looks, and edits to existing designs."],
      },
      {
        q: "Is a live demo available yet?",
        a: ["We're still finishing the product page and demo flow. Get in touch and we'll follow up directly."],
      },
    ],
    quote: {
      text: "Koadic gave us real wireframes and images from a prompt. We stopped starting from a blank canvas.",
      name: "Emily Carter",
      role: "Creative Director",
    },
  },
  {
    slug: "fittsy",
    name: "Fittsy",
    suffix: "",
    category: "Fashion Tech",
    short: "An AI stylist that plans your outfits around your calendar and weather.",
    description:
      "Fittsy builds a personal avatar from your measurements and photo, then turns your wardrobe into daily outfit recommendations. It reads your calendar and the weather, learns your style, and lets you try every look on your avatar before you wear it.",
    chips: ["Avatar try on", "Smart wardrobe", "AI stylist"],
    logo: "/products/fittsy/logo.svg",
    website: "#",
    wireframe: "placeholder",
    images: {
      hero: "/products/fittsy/dashboard-fitsy.png",
      features: [
        "/products/fittsy/schedular.jpg",
        "/products/fittsy/preferences.jpg",
        "/products/fittsy/chatbot.jpg",
        "/products/fittsy/customise-control.jpg",
        "/products/fittsy/try_on.jpg",
      ],
    },
    // Orange sampled from the app's own "No, Cancel" button (#ff9501),
    // with black and white as the supporting colours.
    colors: { accent: "#ff9501", solid: "#ff9501" },
    theme: { accent: "#ff9501", accentDark: "#0a0a0a", onAccent: "#0a0a0a" },
    features: [
      {
        title: "Calendar and Weather Recommendations",
        text: "Fittsy connects to your live calendar and the local forecast every day. It reads each event and the temperature, then suggests what to wear for that specific plan. A morning meeting on a warm day and an evening dinner in the cold get different outfits, so you always dress for the moment.",
      },
      {
        title: "Saved Style Preferences",
        text: "Tell Fittsy the colours, cloth types and style tags you love, such as minimal streetwear or elegant. It remembers them and uses them behind every suggestion. You can update your preferences at any time, and the recommendations keep improving as your taste evolves.",
      },
      {
        title: "AI Stylist Chatbot",
        text: "Talk to your stylist in plain language. Describe the event, the place or the mood and the chatbot weighs the temperature, the occasion and your preferences before it answers. You can even share a photo of an outfit and ask it to save the look to your wardrobe or calendar.",
      },
      {
        title: "Customised Controls",
        text: "Make the app work the way you do. Fittsy gives you personalised controls over your profile, your avatar and how recommendations are shaped, so the experience stays creative and yours. Adjust what matters to you and leave the rest on autopilot.",
      },
      {
        title: "Virtual Try On",
        text: "See any outfit on your own avatar before you commit. Swap tops, bottoms and shoes and compare full looks for a much better sense of colour and fit. It takes the guesswork out of getting dressed and out of shopping.",
      },
    ],
    ctaText: "Want to see Fittsy style an outfit for your day? Get in touch and we'll set up a walkthrough.",
    faqs: [
      {
        q: "What does Fittsy do?",
        a: ["It creates an avatar of you, organises your wardrobe and recommends outfits based on your calendar, the weather and your personal style."],
      },
      {
        q: "How is my avatar created?",
        a: ["You share basics such as height, weight, age, facial features and a photo of yourself. Fittsy builds the avatar from these and your wardrobe is ready to use straight away."],
      },
      {
        q: "How does Fittsy decide what to recommend?",
        a: ["It looks at the events on your calendar, the temperature for each day and the colours, cloth types and style tags you have saved, then suggests outfits that fit all three."],
      },
      {
        q: "Is a live demo available yet?",
        a: ["We're still finishing the product page and demo flow. Get in touch and we'll follow up directly."],
      },
    ],
    quote: {
      text: "Fittsy checks my calendar and the weather and simply tells me what to wear. Trying it on my avatar first means I no longer change three times before leaving.",
      name: "Sara Mitchell",
      role: "Marketing Manager",
    },
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
