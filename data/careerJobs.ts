export type JobSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CareerJob = {
  slug: string;
  title: string;
  category: string;
  location: "Lahore" | "Islamabad" | "Karachi";
  employmentType: "Remote" | "On-site";
  pay: string;
  summary: string;
  sections: JobSection[];
};

type JobInput = Omit<CareerJob, "sections"> & {
  responsibilities: string[];
  requirements: string[];
};

function createJob(input: JobInput): CareerJob {
  const { responsibilities, requirements, ...job } = input;
  return {
    ...job,
    sections: [
      { title: "What we expect from our new colleague", bullets: responsibilities },
      { title: `The wishlist for a ${job.title}`, bullets: requirements },
      {
        title: "What Nexterse has to offer",
        paragraphs: ["Join an international team building purposeful software and applied-AI solutions for ambitious businesses."],
        bullets: [
          `${job.employmentType} work based in ${job.location}.`,
          "Meaningful ownership across international client projects.",
          "A supportive team with room to learn, experiment, and grow.",
          "Competitive compensation based on experience and impact.",
        ],
      },
    ],
  };
}

const JOBS = [
  createJob({
    slug: "product-designer", title: "Product Designer", category: "Design", location: "Lahore", employmentType: "Remote", pay: "PKR 180,000–260,000/month",
    summary: "We’re looking for a Product Designer to turn complex business needs into clear, useful, and polished digital experiences.",
    responsibilities: ["Own product design from discovery through developer handoff.", "Create user flows, wireframes, prototypes, and production-ready interfaces.", "Use research and product data to validate design decisions.", "Collaborate closely with product managers and engineers."],
    requirements: ["3+ years of digital product design experience.", "A strong portfolio showing systems thinking and shipped work.", "Advanced Figma and prototyping skills.", "Knowledge of accessibility and responsive design."],
  }),
  createJob({
    slug: "engineering-manager", title: "Engineering Manager", category: "Management", location: "Islamabad", employmentType: "On-site", pay: "PKR 350,000–500,000/month",
    summary: "We’re looking for an Engineering Manager to guide delivery, grow engineers, and build a healthy high-performing technical team.",
    responsibilities: ["Lead multiple engineers across product engagements.", "Plan delivery, manage technical risks, and improve team processes.", "Coach engineers through regular feedback and career development.", "Partner with clients and product leaders on priorities."],
    requirements: ["6+ years in software engineering with 2+ years in leadership.", "Strong system-design and delivery-management experience.", "Excellent communication and stakeholder-management skills.", "A pragmatic, people-first leadership style."],
  }),
  createJob({
    slug: "customer-success-manager", title: "Customer Success Manager", category: "Customer Service", location: "Karachi", employmentType: "Remote", pay: "PKR 180,000–280,000/month",
    summary: "We’re looking for a Customer Success Manager to help clients realize lasting value from their partnership with Nexterse.",
    responsibilities: ["Own onboarding and ongoing relationships for key accounts.", "Translate client goals into clear success plans.", "Track satisfaction, adoption, risks, and growth opportunities.", "Coordinate timely resolutions across internal teams."],
    requirements: ["3+ years in customer success or account management.", "Strong presentation, negotiation, and relationship skills.", "Experience working with software or technology clients.", "Professional written and spoken English."],
  }),
  createJob({
    slug: "full-stack-developer", title: "Full-Stack Developer", category: "Development", location: "Lahore", employmentType: "Remote", pay: "PKR 250,000–400,000/month",
    summary: "We’re looking for a Full-Stack Developer with strong React, Node.js, and cloud experience to build reliable products from interface to infrastructure.",
    responsibilities: ["Build scalable applications across frontend and backend.", "Collaborate with designers, product managers, and engineers.", "Write clean, testable code and participate in code reviews.", "Own features through deployment and monitoring."],
    requirements: ["3+ years of professional software development experience.", "Strong TypeScript, React, Next.js, and modern CSS skills.", "Hands-on Node.js and API experience.", "Knowledge of databases, automated testing, CI/CD, and cloud deployments."],
  }),
  createJob({
    slug: "ui-ux-designer", title: "UI/UX Designer", category: "Design", location: "Karachi", employmentType: "On-site", pay: "PKR 160,000–240,000/month",
    summary: "We’re looking for a UI/UX Designer to craft accessible, consistent interfaces and intuitive journeys across web and mobile products.",
    responsibilities: ["Map user journeys and translate them into intuitive interfaces.", "Build wireframes, interactive prototypes, and visual specifications.", "Maintain reusable design-system components.", "Work with engineers to preserve design quality through launch."],
    requirements: ["2+ years of UI/UX design experience.", "A portfolio demonstrating web and mobile product work.", "Strong typography, layout, and interaction-design fundamentals.", "Working knowledge of usability testing and accessibility."],
  }),
  createJob({
    slug: "devops-engineer", title: "DevOps Engineer", category: "Operations", location: "Islamabad", employmentType: "Remote", pay: "PKR 280,000–450,000/month",
    summary: "We’re looking for a DevOps Engineer to make infrastructure, deployments, observability, and developer workflows dependable and secure.",
    responsibilities: ["Design and maintain cloud infrastructure and CI/CD pipelines.", "Improve monitoring, alerting, reliability, and incident response.", "Automate repeatable operational workflows.", "Partner with engineers on performance, security, and cost."],
    requirements: ["3+ years in DevOps, SRE, or cloud engineering.", "Hands-on AWS, Azure, or GCP experience.", "Strong Docker, infrastructure-as-code, and Linux skills.", "Experience with Kubernetes and observability tooling."],
  }),
  createJob({
    slug: "qa-engineer", title: "QA Engineer", category: "Development", location: "Lahore", employmentType: "On-site", pay: "PKR 150,000–240,000/month",
    summary: "We’re looking for a QA Engineer to own product quality through thoughtful manual testing, automation, and early collaboration.",
    responsibilities: ["Create test plans from product and technical requirements.", "Perform functional, regression, integration, and exploratory testing.", "Build and maintain reliable automated test suites.", "Document defects clearly and help teams prevent recurrence."],
    requirements: ["2+ years of software quality-assurance experience.", "Experience testing web applications and APIs.", "Knowledge of Playwright, Cypress, Selenium, or similar tools.", "Strong analytical thinking and attention to detail."],
  }),
  createJob({
    slug: "digital-marketing-specialist", title: "Digital Marketing Specialist", category: "Marketing", location: "Karachi", employmentType: "Remote", pay: "PKR 140,000–220,000/month",
    summary: "We’re looking for a Digital Marketing Specialist to grow awareness and qualified demand through measurable multi-channel campaigns.",
    responsibilities: ["Plan and execute SEO, content, email, and paid campaigns.", "Manage campaign calendars, budgets, and reporting.", "Improve conversion through testing and audience insights.", "Collaborate with design, sales, and subject-matter experts."],
    requirements: ["2+ years in B2B digital marketing.", "Strong analytics and campaign-reporting skills.", "Experience with Google Ads, LinkedIn, CRM, and SEO tools.", "Clear writing and project-management ability."],
  }),
  createJob({
    slug: "finance-operations-specialist", title: "Finance Operations Specialist", category: "Finance", location: "Islamabad", employmentType: "On-site", pay: "PKR 160,000–250,000/month",
    summary: "We’re looking for a Finance Operations Specialist to strengthen reporting, controls, forecasting, and day-to-day financial planning.",
    responsibilities: ["Maintain accurate operational and management reports.", "Support budgeting, forecasting, invoicing, and reconciliation.", "Improve finance workflows and internal controls.", "Partner with leadership on performance and planning insights."],
    requirements: ["3+ years in finance, accounting, or operations.", "A relevant degree or professional qualification.", "Advanced spreadsheet and financial-analysis skills.", "High integrity, accuracy, and attention to detail."],
  }),
];

export const CAREER_JOBS: Record<string, CareerJob> = Object.fromEntries(JOBS.map((job) => [job.slug, job]));

export function getCareerJob(slug: string) { return CAREER_JOBS[slug]; }
export function getCareerJobs() { return JOBS; }
export function getCareerJobSlugs() { return JOBS.map((job) => job.slug); }
