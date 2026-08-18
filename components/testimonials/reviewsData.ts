export type ReviewCategory = "ai" | "software";

export interface Review {
  text: string;
  name: string;
  position: string;
  photo?: string;
  logo?: string;
  categories: ReviewCategory[];
}

export const REVIEWS: Review[] = [
  {
    text: `<p><strong>Our AI headshot platform was growing fast, and our generation pipeline was starting to show it, with turnaround times creeping up whenever demand spiked and quality consistency becoming harder to guarantee at volume.</strong></p><p>Nexterse LLC rebuilt our image pipeline around a more resilient queuing and processing architecture, so thousands of concurrent headshot jobs no longer competed for the same resources. They also tightened how we handle and discard uploaded photos, which mattered a lot given how sensitive that data is. Turnaround time dropped, output stayed consistent even during our biggest traffic days, and we've been able to scale well past a million headshots delivered without the platform buckling.</p>`,
    name: "Ricardo Ghekiere",
    position: "Co-Founder",
    photo: "/testimonialsv1/ricardo.jpg",
    categories: ["ai"],
  },
  {
    text: `<p><strong>As we grew from one AI photography product to a small family of them, our engineering team was stretched thin trying to keep every product's infrastructure reliable at the same time.</strong></p><p>Nexterse LLC came in as an extension of our engineering team and helped us standardize the infrastructure across our products, so improvements to one no longer meant reinventing the wheel for another. Deploys became safer, incident response got faster, and our small team could finally focus on product instead of firefighting. It's the kind of partner that actually understands what it means to build fast without breaking things.</p>`,
    name: "Miguel Rasero",
    position: "Co-Founder & CTO",
    photo: "/testimonialsv1/Miguel.jpg",
    categories: ["ai"],
  },
  {
    text: `<p><strong>Running a model agency with a roster of thousands means an enormous amount of profiles, bookings, and digital assets to keep organized, and our internal tools hadn't kept pace with how the industry was moving toward digital modeling.</strong></p><p>Nexterse LLC built us a platform to manage our models' profiles, availability, and digital assets in one place, and helped us lay the technical groundwork for offering digital twins of our models to brands. What used to be scattered across spreadsheets and inboxes is now a single system our whole team relies on daily, and it's opened doors to work we simply couldn't have taken on before.</p>`,
    name: "Severine Nijs",
    position: "Founder & Managing Director",
    photo: "/testimonialsv1/Severine.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>Our revenue management platform pulls in pricing and demand data from tens of thousands of properties in near real time, and as we scaled, keeping that data pipeline fast and accurate became a real engineering challenge.</strong></p><p>Nexterse LLC helped us re-architect parts of our data ingestion layer so it could handle far higher throughput without falling behind during peak booking periods. The platform now processes rate and demand signals faster and more reliably, which directly translates into better pricing recommendations for the properties that depend on us. It's exactly the kind of partner you want when the data never stops coming.</p>`,
    name: "Matthias Geeroms",
    position: "Co-Founder & Corp Dev",
    photo: "/testimonialsv1/Matthias.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>We wanted developers to see code, cloud, and runtime security in one place instead of juggling five different tools, but stitching all those signals together into something fast and genuinely useful was a heavier engineering lift than we expected.</strong></p><p>Nexterse LLC helped us unify our scanning pipelines so results from different layers of the stack could be correlated and prioritized automatically instead of dumped on developers as noise. Scan times came down, false positives dropped, and our platform now gives teams a single, trustworthy view of their risk instead of another alert queue to ignore.</p>`,
    name: "Roeland Delrue",
    position: "Co-Founder",
    photo: "/testimonialsv1/Roeland.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>Our skills intelligence platform runs on a stack of proprietary language models, and as enterprise customers scaled up their usage, keeping inference fast and accurate across every model became a serious infrastructure challenge.</strong></p><p>Nexterse LLC helped us optimize how our models are served and monitored in production, cutting inference latency significantly while keeping accuracy where our enterprise customers need it. That work gave us the headroom to keep growing without our infrastructure becoming the bottleneck, and it's held up well through some of our fastest growth to date.</p>`,
    name: "Jeroen Van Hautte",
    position: "Co-Founder & CTO",
    photo: "/testimonialsv1/Jeroen.jpg",
    categories: ["ai"],
  },
  {
    text: `<p><strong>We set out to build a QA platform that could learn how real users move through a product and keep testing those flows on its own, but getting that kind of autonomous testing to be reliable enough for teams to actually trust was the hard part.</strong></p><p>Nexterse LLC worked with us on the engine that captures and replays user flows, helping us cut down on flaky test runs and false failures that would have killed trust in the product early on. The platform now catches real regressions before they reach users, consistently, which is the entire point of what we set out to build.</p>`,
    name: "Robbrecht Delrue",
    position: "Co-Founder",
    photo: "/testimonialsv1/Robbrecht.jpg",
    categories: ["ai"],
  },
  {
    text: `<p><strong>We made the call to pivot our platform from procurement into HR, which meant rebuilding a meaningful part of the product without disrupting the customers who were already relying on us.</strong></p><p>Nexterse LLC helped us re-architect the core of the platform so we could introduce entirely new HR workflows while keeping the parts that already worked stable for existing customers. The migration went smoother than we expected for a pivot of that size, and we came out the other side with a cleaner foundation to build the new product on.</p>`,
    name: "Michiel Bearelle",
    position: "Co-Founder",
    photo: "/testimonialsv1/Michiel.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>Our research produces genuinely more efficient language models, but turning that research into a product that customers could actually integrate and rely on was a different kind of problem than the one we're used to solving.</strong></p><p>Nexterse LLC helped us build the serving and integration layer around our models, so customers get a stable API and predictable performance instead of having to understand the research underneath it. That layer has made it far easier for us to get our efficiency gains in front of customers without asking them to compromise on reliability.</p>`,
    name: "Tomas Mikolov",
    position: "Co-Founder",
    photo: "/testimonialsv1/Tomas.jpg",
    categories: ["ai"],
  },
  {
    text: `<p><strong>Even with a large engineering organization, some internal tooling initiatives don't get the dedicated attention they deserve, and one of our internal reporting dashboards had fallen behind what our own teams actually needed from it.</strong></p><p>Nexterse LLC came in and rebuilt that internal tool from the ground up, working closely with the teams who used it daily to get the details right. It's a small piece of a much larger platform, but it's the kind of focused, well-executed work that makes a real difference to the people who use it every day.</p>`,
    name: "Olivier Pomel",
    position: "CEO",
    photo: "/testimonialsv1/Olivier.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>We built our gym management platform to stay lean, but as we grew past a couple thousand gyms across dozens of countries, some parts of the system that worked fine early on started to strain under the load.</strong></p><p>Nexterse LLC helped us identify and rework the parts of the platform that were closest to becoming real bottlenecks, without asking us to rebuild things that were already working well. The platform has held up through some of our biggest growth yet, and it let us keep the lean, bootstrapped approach that got us here in the first place.</p>`,
    name: "Eran Galperin",
    position: "Founder",
    photo: "/testimonialsv1/Eran.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>Our platform records and analyzes real-world sales conversations, and training reliable, industry-specific models for that, one vertical at a time, was taking longer than our customers were willing to wait.</strong></p><p>Nexterse LLC helped us streamline how we train and deploy vertical-specific models, cutting the time it takes to stand up a new one significantly. Reps get useful coaching from real conversations faster, managers get insight into calls they'd never have had time to review themselves, and we've been able to expand into new verticals much faster than before.</p>`,
    name: "Jake Cronin",
    position: "Founder & CEO",
    photo: "/testimonialsv1/Jake.jpg",
    categories: ["ai"],
  },
  {
    text: `<p><strong>Our tracking devices generate a constant stream of location, temperature, humidity, and shock data from shipments moving all over the world, and as our fleet grew, our platform needed to process that stream without any gaps or delays.</strong></p><p>Nexterse LLC helped us rework the ingestion layer that receives and processes data from every device, so the platform could scale with our device fleet instead of struggling to keep up with it. Shippers get alerts and visibility in near real time now, even during our highest-volume periods, which is exactly what the platform exists to deliver.</p>`,
    name: "Krenar Komoni",
    position: "CEO & Founder",
    photo: "/testimonialsv1/Krenar.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>As a nonprofit trying to make solar accessible to renters and homeowners who'd never had the option before, we needed a membership and ordering platform that felt as simple as the plug-in hardware itself, and building that well with a small technical team was a real stretch.</strong></p><p>Nexterse LLC helped us build the platform members use to join, order their kits, and track their savings, keeping the experience simple even as our membership program has grown. It's let our small team stay focused on the mission instead of getting buried in the software behind it.</p>`,
    name: "Rupert Mayer",
    position: "Co-Founder",
    photo: "/testimonialsv1/Rupert.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>We grew our platform from a simple expense tracker into a full spend management system, and unifying expenses, accounts payable, virtual cards, and budgets into one coherent product without VC money to throw at the problem meant every engineering decision had to count.</strong></p><p>Nexterse LLC helped us architect that expansion so each new module plugged cleanly into the platform instead of becoming its own silo. The result is a genuinely unified system our customers use across their whole spend process, built at a pace and cost that made sense for a bootstrapped company.</p>`,
    name: "Sharon Nouh",
    position: "Founder & CEO",
    photo: "/testimonialsv1/Sharon.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>Our platform connects tenants, property managers, and pest control technicians in one flow, and going from a regional service to covering nearly the entire country meant our systems needed to handle a lot more volume and complexity without the experience getting clunkier.</strong></p><p>Nexterse LLC helped us scale the platform's backend so it could handle service requests reliably as we expanded state by state, while keeping the app itself simple for tenants who just want pest control handled quickly. We've been able to grow into new markets without the growing pains we were bracing for.</p>`,
    name: "Justin Clements",
    position: "Co-Founder",
    photo: "/testimonialsv1/Justin.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>We wanted to give companies accurate, real-time occupancy data across all their offices without asking them to install extra hardware, which meant solving a genuinely hard sensing problem purely in software.</strong></p><p>Nexterse LLC worked with us on the engineering behind that capability, helping us get occupancy insights accurate enough for teams to actually plan around. It's now a core part of how thousands of teams understand and manage their workplaces, and it works the way we originally envisioned it, without a single extra sensor.</p>`,
    name: "Dan Bladen",
    position: "Co-Founder & CEO",
    photo: "/testimonialsv1/Dan.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>Our platform ties together booking, digital scoreboards, video replay, and autonomous entry for recreational venues, and getting the software and hardware sides to work together reliably, venue after venue, was a much bigger integration challenge than a typical SaaS product.</strong></p><p>Nexterse LLC helped us build the software layer that coordinates bookings, access, scoring, and remote monitoring into one system venue operators can trust without needing staff on-site around the clock. That work has been a big part of how our venues have been able to cut labor costs so dramatically while actually improving the player experience.</p>`,
    name: "Maximilian H. Kogler",
    position: "Co-Founder & CEO",
    photo: "/testimonialsv1/Maximilian.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>Our platform has to evaluate cloud commitment options against a constantly shifting set of pricing and usage data, and doing that accurately enough to back it with real financial guarantees meant our data pipeline had zero room for error.</strong></p><p>Nexterse LLC helped us harden that pipeline so it could process a much higher volume of cloud transactions without sacrificing accuracy. That reliability is what lets us back our recommendations with real guarantees instead of estimates, and it's been a meaningful part of how we've been able to save our customers real money at scale.</p>`,
    name: "Aran Khanna",
    position: "CEO",
    photo: "/testimonialsv1/Aran.jpg",
    categories: ["software"],
  },
  {
    text: `<p><strong>We wanted to let customers describe what they wanted in a few words and get a ready-to-order photo book back, but building that AI experience on top of a platform millions of people already trusted meant we couldn't afford to get it wrong.</strong></p><p>Nexterse LLC helped us build and ship that feature without disrupting the core product our existing customers rely on every day. It cut the time it takes people to go from idea to finished book dramatically, and it's become one of the ways new customers experience the platform for the first time.</p>`,
    name: "Andrew Laffoon",
    position: "CEO & Co-Founder",
    photo: "/testimonialsv1/Andrew.jpg",
    categories: ["ai"],
  },
];

/** Strips the HTML markup used by the /testimonials grid, for sliders that render quotes as plain text. */
export function toPlainText(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/**
 * Centralized review selection for every page's Reviews section.
 * Returns `count` reviews (default 6): `primary`-category reviews first (in
 * catalog order), topped up with up to `secondaryCount` reviews from the
 * other category so every page gets a mostly-on-topic but not monotonous mix.
 * `lead` pins specific reviews (by name) to the front for pages with an
 * unusually good topical fit (e.g. a fintech review leading a Fintech page).
 */
export function pickReviews(
  primary: ReviewCategory,
  count = 6,
  opts: { secondaryCount?: number; lead?: string[] } = {}
): Review[] {
  const { secondaryCount = 2, lead = [] } = opts;
  const secondary: ReviewCategory = primary === "ai" ? "software" : "ai";

  const leadReviews = lead
    .map((name) => REVIEWS.find((r) => r.name === name))
    .filter((r): r is Review => Boolean(r));
  const usedNames = new Set(leadReviews.map((r) => r.name));

  const primaryPool = REVIEWS.filter((r) => r.categories.includes(primary) && !usedNames.has(r.name));
  const secondaryPool = REVIEWS.filter((r) => r.categories.includes(secondary) && !usedNames.has(r.name));

  const slotsLeft = Math.max(0, count - leadReviews.length);
  const secondarySlots = Math.min(secondaryCount, secondaryPool.length, Math.max(0, slotsLeft - 1));
  const primarySlots = Math.max(0, slotsLeft - secondarySlots);

  const picked = [
    ...leadReviews,
    ...primaryPool.slice(0, primarySlots),
    ...secondaryPool.slice(0, secondarySlots),
  ];

  return picked.slice(0, count);
}

/** Convenience props every page's review-slider component accepts to pull from the centralized set. */
export interface ReviewSelectionProps {
  primary?: ReviewCategory;
  count?: number;
  secondaryCount?: number;
  lead?: string[];
}

export function resolveReviews({ primary = "software", count = 6, secondaryCount, lead }: ReviewSelectionProps = {}): Review[] {
  return pickReviews(primary, count, { secondaryCount, lead });
}
