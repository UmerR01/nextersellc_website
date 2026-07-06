"use client";

import { useState } from "react";
import Image from "next/image";
import s from "./MvpPage.module.css";

/* ── Tab data ─────────────────────────────────────────────────────────────── */
const ourServicesTabs = [
  {
    icon: "/mvp/03_Data-exposure-risks-02.svg",
    label: "Technical risk",
    title: "Technical risk",
    body: "For AI products, the first question is whether the model can perform reliably in your actual environment. Before you invest in a larger build, an MVP shows whether the system can work with your data, your workflows, and your quality threshold.",
    image: "/mvp/03_Energy-Efficiency-and-Cost-Reduction.jpg",
    alt: "Energy Efficiency and Cost Reduction",
  },
  {
    icon: "/mvp/04_Model-development-aligned-with-business-metrics-02.svg",
    label: "Market risk",
    title: "Market risk",
    body: "An MVP puts the core use case in front of real users before the team spends time on secondary features. That early release helps validate demand, expose weak assumptions, and show what deserves further investment.",
    image: "/mvp/03_5da7102758568a0c89f97f33_Top-4-Marketing-Automation-Software-for-SMBs_-Pros-and-Cons.jpg",
    alt: "The dashboard of key metrics on the laptop",
  },
  {
    icon: "/mvp/04_Security-embedded-in-delivery-01.svg",
    label: "Security risk",
    title: "Security risk",
    body: "For enterprise MVPs, security cannot wait until a later phase. The first release should establish the access model, environment boundaries, and data-handling rules from the start. When AI is involved, that includes role-based access, controlled retrieval, and an isolated deployment path where needed.",
    image: "/mvp/03_61eea108d5f74d7b034fb83d_thumbnails-website-9-min.png",
    alt: "A rocket launching",
  },
];

const devAboutTabs = [
  {
    label: "Nexterse LLC AI MVP",
    points: [
      "Product logic, retrieval layer, caching, permissions, and business rules sit inside the system",
      "Domain data pipelines and workflow design create the moat",
      "Cost is shaped through caching, routing, retrieval design, and monitoring",
      "Tenant isolation, RBAC, private hosting options, and bounded access rules",
      "You own the codebase, architecture, and delivery assets",
    ],
  },
  {
    label: "Thin model wrapper",
    points: [
      "Raw prompts go straight to a model",
      "Easy to copy",
      "Usage spikes are hard to predict",
      "Weak separation by default",
      "The hard part lives with the vendor stack",
    ],
  },
];

const cases = [
  {
    href: "#",
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    logo: "/mvp/12_nika_logo.svg",
    logoAlt: "Nika logo",
    tech: "Traditional tech stack",
    title: "Dexai Robotics: graphical user interface for robot operation",
    desc: "A GUI that freed Dexai Robotics' restaurant staff from engineer dependency – cutting robot setup time per shift by ~65% and reducing interaction errors by ~50% through real-time visual state monitoring and offline operation.",
    tags: ["IoT", "Startups"],
    imgRight: "/mvp/02_Frame-1787-1.png",
  },
  {
    href: "#",
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    logo: null,
    logoAlt: "",
    tech: "Traditional tech stack",
    title: "A media buying system for a leading US-based advertising agency",
    desc: "50x faster ad operations and data processing cut from hours to under a minute – we replaced a 20-year-old FileMaker system with a custom platform covering 100+ operational workflows.",
    tags: ["Enterprise"],
    imgRight: "/mvp/01_Cover.png",
  },
  {
    href: "#",
    bg: "linear-gradient(281.09deg, #36185F 2.55%, #7349AC 72.04%)",
    logo: null,
    logoAlt: "",
    tech: "AI-powered stack",
    title: "Platform for vital farm animals signs monitoring",
    desc: "An IoT platform connecting a matchbox-sized farm animal wearable to a real-time visualization and diagnostics dashboard – reducing monitoring setup time by ~55% and eliminating invasive multi-device procedures.",
    tags: ["IoT", "Startups"],
    imgRight: "/mvp/01_cover-2-1.png",
  },
  {
    href: "#",
    bg: "linear-gradient(280.31deg, #780013 -2.24%, #B31E35 76.47%)",
    logo: null,
    logoAlt: "",
    tech: "Traditional tech stack",
    title: "Event platform for indie organizers across Europe",
    desc: "A platform for indie event organizers that drove 8,000+ ticket sales in four months, with 54% of attendees completing post-event feedback — replacing a 4–5 tool workflow with a single dashboard.",
    tags: ["Startups"],
    imgRight: "/mvp/06_Cover-1.png",
  },
  {
    href: "#",
    bg: "linear-gradient(259.16deg, #02102C -0.49%, #112244 100%)",
    logo: null,
    logoAlt: "",
    tech: "Traditional tech stack",
    title: "MVP development of Q&A and voting service",
    desc: "A 2-month MVP delivery for Harmony Park covering all 7 planned feature modules – yes/no questions, social sharing, statistics, and time management – shipped on a bi-weekly sprint cadence with investor demos at each stage.",
    tags: ["Startups"],
    imgRight: "/mvp/01_Right-3.png",
  },
];

const reviews = [
  {
    text: "From the early stages of the project, Nexterse LLC demonstrated a proactive attitude, actively seeking opportunities to enhance the solution and anticipate our needs. They consistently took the initiative to address any potential issues, provide timely updates, and offer solutions to challenges that arose during development. This proactiveness greatly contributed to the project's success and exceeded our expectations.",
    logo: "/mvp/08_protech_solutions_inc_logo.jpg",
    photo: null,
    name: "Dave Alce",
    role: "COO",
  },
  {
    text: "Working with Nexterse LLC has been an outstanding experience. Their team is not only highly skilled but also incredibly responsive, collaborative, and committed to delivering quality results. I can't recommend them enough! Thank you team Nexterse for bringing my vision to life.",
    logo: null,
    photo: "/mvp/08_Julia-C-300x300.jpg",
    name: "Julie Crawford",
    role: "Founder",
  },
  {
    text: "The system has produced a significant competitive advantage in the industry thanks to Nexterse LLC's well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
    logo: null,
    photo: "/mvp/01_photo.png",
    name: "Alexander McCaig",
    role: "Co-Founder & CEO, Tartle",
  },
  {
    text: "I was impressed by Nexterse LLC's prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies. Also, their communication skills were great; it never felt like a long-distance project. It felt like Nexterse was working next door because their project manager was always keeping me updated.",
    logo: null,
    photo: "/mvp/12_5cc8378b669af259c74ec736_b_dorsinvil-2-1-1.jpg",
    name: "Benjamin Dorsinvil",
    role: "Founder, SellBig",
  },
  {
    text: "We tried another company that one of our partners had used but they didn't work out. I feel that Nexterse LLC does a better investigation of what we're asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    logo: null,
    photo: "/mvp/01_photo6.png",
    name: "Damian Gevertz",
    role: "Founder & CEO, Widgety",
  },
  {
    text: "Nexterse LLC is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality. Important, they help you think with the business logic of your application and they don't blindly follow what you are saying. Which is super important.",
    logo: null,
    photo: "/mvp/01_photo2.png",
    name: "Domien Van Eynde",
    role: "Team Lead, Daiokan.com",
  },
  {
    text: "Together with the team, we have turned the MVP version of the service into a modern full-featured platform for online marketers. We are very satisfied with the work the Nexterse LLC team has performed, and we would like to highlight the high level of technical expertise, coherence and efficiency of communication and flexibility in work.",
    logo: null,
    photo: "/mvp/01_photo7.png",
    name: "Katerina Bromberg",
    role: "Co-Founder, MyMediAds.com",
  },
  {
    text: "We are absolutely convinced that cooperation between companies is only successful when based on effective teamwork. But the teams may vary on the degree of their cohesion.",
    logo: null,
    photo: "/mvp/01_photo10.png",
    name: "Maria Duyunova",
    role: "Director, Simplimagine LLC",
  },
  {
    text: "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done. I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions.",
    logo: null,
    photo: "/mvp/01_photo11.png",
    name: "Michael Karbushev",
    role: "Senior Director of Engineering, Evolv",
  },
  {
    text: "Nexterse LLC succeeded in building a more manageable solution that is much easier to maintain.",
    logo: null,
    photo: "/mvp/01_photo3.png",
    name: "Yevgeniy Rozenblat",
    role: "Program Manager, TL Nika",
  },
  {
    text: "Thanks to Nexterse LLC's can-do attitude, amazing work ethic, and willingness to tackle clients' problems as their own, they've become an integral part of our team. We've been truly impressed with their professionalism and performance and continue to work with the team on developing new applications. We are completely satisfied with the results of our cooperation.",
    logo: "/mvp/01_logo.svg",
    photo: null,
    name: "Yury Haverman",
    role: "Founder, BoxForward",
  },
  {
    text: "Nexterse LLC is flexible, efficient, and extremely good at planning and being proactive. They have also been very proactive in their approach throughout the project, seeking to understand the needs and the reasons behind them before launching into development.",
    logo: null,
    photo: "/mvp/08_639b8502f91be05f5bf099be_Paul-276x300.png",
    name: "Paul Fardoe",
    role: "Director",
  },
  {
    text: "We brought in Nexterse LLC to help us reduce unexpected turbine failures, and the result met our expectations.",
    logo: null,
    photo: "/mvp/01_Markus-Keller-300x300.png",
    name: "Markus Keller",
    role: "Head of Operations",
  },
];

const techStackRows = [
  {
    label: "AI foundational models",
    techs: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "Llama 3.1", "Mistral Large"],
  },
  {
    label: "AI orchestration",
    techs: ["LangChain", "LlamaIndex", "Haystack", "CrewAI", "AutoGen"],
  },
  {
    label: "Vector & search",
    techs: ["Pinecone", "Weaviate", "Qdrant", "pgvector", "Elasticsearch"],
  },
  {
    label: "Backend & APIs",
    techs: ["Node.js", "Python", "FastAPI", "NestJS", "GraphQL"],
  },
  {
    label: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Vue.js", "React Native"],
  },
  {
    label: "Cloud & DevOps",
    techs: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    label: "Databases",
    techs: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Supabase"],
  },
];

const achievementBadges = [
  { src: "/mvp/06_techreviewer_badge_2026-13.svg", alt: "techreviewer.co 2026 — Top MVP Development Companies" },
  { src: "/mvp/06_top-software-development-companies.svg", alt: "GoodFirms — Top Software Development Company" },
  { src: "/mvp/06_techreviewer_badge_2026-12.svg", alt: "techreviewer.co 2026 — Top Software Development Companies" },
  { src: "/mvp/12_5ca49c9f6cb37e33319e1162_Goodfirms.svg", alt: "Goodfirms badge" },
  { src: "/mvp/12_5ca49c9f8ff5ad26d13b6845_TDA.svg", alt: "TDA badge" },
  { src: "/mvp/12_5ca49c9f6cb37e49a79e1163_changed.svg", alt: "AWS partner badge" },
  { src: "/mvp/12_Responsive-Design-Development-2025.svg", alt: "Responsive Design Development 2025" },
  { src: "/mvp/12_Mobile-Software-Development-2025.svg", alt: "Mobile Software Development 2025" },
  { src: "/mvp/12_Machine-Learning-Development-2024.svg", alt: "Machine Learning Development 2024" },
  { src: "/mvp/12_IoT-Services-2025.svg", alt: "IoT Services 2025" },
  { src: "/mvp/12_Data-Mining-Development-2024.svg", alt: "Data Mining Development 2024" },
  { src: "/mvp/12_Data-Migration-Services-2025.svg", alt: "Data Migration Services 2025" },
  { src: "/mvp/12_Branding-Services-2024.svg", alt: "Branding Services 2024" },
];

const faqs = [
  {
    q: "What is the difference between a PoC and an MVP for an AI product?",
    a: "A PoC answers the technical question: Can this model or retrieval setup do the job inside your data and workflow constraints? An MVP answers the market and product question: will users adopt and pay for this workflow once it is packaged as software?",
  },
  {
    q: "How do you estimate AI operating costs before launch?",
    a: "We test model usage on a bounded dataset, estimate token and retrieval patterns, and decide where caching, routing, or smaller models should sit. The result is an operating-cost model based on the intended workflow, not guesswork.",
  },
  {
    q: "Can you build an AI MVP with HIPAA-aligned handling or SOC 2-ready controls?",
    a: "Yes. We can design the MVP around private hosting options, role-based access, logging, retention rules, tenant separation, and stricter model-provider terms. Formal audits and attestations still happen outside the product build itself.",
  },
  {
    q: "How do you test an AI MVP if outputs vary?",
    a: "We combine normal QA with dataset-based AI evaluation. The system is scored on retrieval quality, faithfulness, latency, refusal behavior, and failure modes. We also test prompt injection and other abuse scenarios before release.",
  },
  {
    q: "How do you avoid building a thin wrapper with no moat?",
    a: "By putting your value in the product logic, the data flow, the retrieval layer, the permission model, and the workflow.",
  },
  {
    q: "How do you keep tenant data separated in a B2B AI MVP?",
    a: "By separating data at the storage and retrieval level, attaching tenant metadata to indexed content, and enforcing access rules before any generation step happens. The model only receives context that the user can access.",
  },
  {
    q: "Should we start with OpenAI or Claude, or move straight to an open-source model?",
    a: "That depends on speed, quality, hosting constraints, and budget. Many teams start with a strong hosted model to validate the product faster, then revisit routing or self-hosted options once real usage data exists.",
  },
  {
    q: "Will we need to rewrite the MVP when the product grows?",
    a: "Not if the MVP is scoped well and built on a stable architecture. The first release should stay lean, but the codebase, deployment model, and data layer should still support the next stage instead of forcing a reset.",
  },
];

const crosslinks = [
  { label: "Full software product development" },
  { label: "Web MVP development" },
  { label: "Mobile MVP development" },
  { label: "MVP in Scrum methodology" },
  { label: "Top MVP development companies" },
  { label: "SaaS MVP development" },
  { label: "AI product development" },
  { label: "Startup software development" },
];

const blogPosts = [
  {
    featured: true,
    image: "/mvp/06_Agentic-RAG-The-Complete-Enterprise-Implementation-Guide-1024x578.jpg",
    title: "Agentic RAG: The Complete Enterprise Implementation Guide for 2026",
    readTime: "35 mins",
    date: "July 3, 2026",
    href: "#",
  },
  {
    featured: false,
    image: null,
    title: "The AI Cost Reduction Playbook – 9 Mechanisms, 7 Hidden Drivers, and Real-World Case Studies (2026 Edition)",
    readTime: "32 mins",
    date: "July 1, 2026",
    href: "#",
  },
  {
    featured: false,
    image: null,
    title: "How to modernize legacy systems with custom AI",
    readTime: "26 mins",
    date: "June 24, 2026",
    href: "#",
  },
  {
    featured: false,
    image: null,
    title: "How to Deliver Software on Time with Agile and Release Planning in the AI Era",
    readTime: "18 mins",
    date: "June 22, 2026",
    href: "#",
  },
];

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#5E6D8E" strokeWidth="1.5" strokeMiterlimit="10" />
    <path d="M8 4.98V8.48L10.33 10.65" stroke="#5E6D8E" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

/* ══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════════════════ */
export default function MvpPage() {
  const [serviceTab, setServiceTab] = useState(0);
  const [devTab, setDevTab] = useState(0);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showMoreFaq, setShowMoreFaq] = useState(false);

  const visibleFaqs = showMoreFaq ? faqs : faqs.slice(0, 5);

  return (
    <div className={s.page}>

      {/* ── 2. SERVICES RESULTS ─────────────────────────────────────────── */}
      <section id="mvp-services" className={`${s.servicesResults} ${s.ptSmall} ${s.pbMedium}`}>
        <div className={s.container}>
          <div className={s.srTitleWrap}>
            <h2 className={s.srTitle}>
              Our MVP development <span className={s.accent}>services </span>scope
            </h2>
            <p className={s.srDesc}>
              An MVP should validate the core workflow, demonstrate that the architecture can support the product, and outline the next release. Our MVP software development services cover product discovery, UX/UI design, backend and frontend engineering, cloud setup, QA, launch support, and post-launch iteration planning.
            </p>
          </div>
          <div className={s.srRow}>
            <div className={s.srList}>
              <p>When AI is part of the product, we add the work that many MVP vendors leave out:</p>
              <ul>
                <li>Data audit and source mapping</li>
                <li>Retrieval and permission design</li>
                <li>Model selection and routing logic</li>
                <li>Token and infrastructure cost modeling</li>
                <li>Evaluation rules, abuse testing, and output review paths</li>
              </ul>
            </div>
            <div className={s.srImage}>
              <Image
                src="/mvp/03_6065938ac5b1c3297aef5eaa_pexels-startup-stock-photos-7375-min-1024x731.jpg"
                alt="Programmer sitting at a desk"
                width={1024} height={731}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR SERVICES (TABS) ──────────────────────────────────────── */}
      <section id="mvp-why-mvp" className={`${s.ourServices} ${s.ptMedium} ${s.pbMedium}`}>
        <div className={s.container}>
          <h2 className={s.ourServicesTitle}>
            <span className={s.accent}>Why</span> leaders build MVPs first
          </h2>
          <p className={s.ourServicesDesc}>
            An MVP is a way to reduce risk before the product absorbs more budget, more integrations, and more operational exposure.
          </p>
          <div className={s.tabButtons} role="tablist">
            {ourServicesTabs.map((tab, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={serviceTab === i}
                className={`${s.tabBtn} ${serviceTab === i ? s.tabBtnActive : ""}`}
                onClick={() => setServiceTab(i)}
              >
                <img src={tab.icon} alt="" className={s.tabBtnIcon} width={56} height={56} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          <div className={s.tabContent} role="tabpanel">
            <div className={s.tabLeft}>
              <h3 className={s.tabTitle}>{ourServicesTabs[serviceTab].title}</h3>
              <p className={s.tabBody}>{ourServicesTabs[serviceTab].body}</p>
            </div>
            <div className={s.tabRight}>
              <div className={s.tabImage}>
                <Image
                  src={ourServicesTabs[serviceTab].image}
                  alt={ourServicesTabs[serviceTab].alt}
                  width={856} height={570}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DOWNLOAD CTA 1 ───────────────────────────────────────────── */}
      <section className={`${s.downloadCta} ${s.ptMedium} ${s.pbMedium}`}>
        <div className={s.container}>
          <div className={s.downloadCtaInner}>
            <div className={s.downloadCtaContent}>
              <h2 className={s.downloadCtaTitle}>Your idea deserves more than a pitch deck!</h2>
              <p className={s.downloadCtaDesc}>Turn it into a working MVP with our expert dev team.</p>
            </div>
            <div className={s.downloadCtaBtn}>
              <a href="/contact" className={s.btnPrimary}>Start your MVP</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE WAY WE DEVELOP ───────────────────────────────────────── */}
      <section id="mvp-process" className={`${s.wayWeDevelop} ${s.ptMedium}`}>
        <div className={s.container}>
          <h2 className={s.wdTitle}>
            <span className={s.accent}>How</span> we build an MVP
          </h2>
          <p className={s.wdDesc}>
            The path depends on the product. Standard software and AI-backed software should not be handled in the same way.
          </p>
          <div className={s.wdSteps}>
            {[
              {
                n: "1", title: "1. Discovery and scope",
                body: "Using business analysis for MVP scoping, we define the use case, user roles, workflows, success metrics, integrations, release scope, and hosting constraints. The output is a scoped first release, UI/UX design for MVP and an architecture direction.\n\nTypical duration: 2 to 4 weeks",
              },
              {
                n: "2", title: "2. AI pilot and prove program",
                body: "This phase applies when AI is central to the product or carries material delivery risk. Traditional software can move from discovery into build. AI products usually should not. Before we commit to the public MVP, we test the model on a bounded slice of real or sanitized data, estimate operating cost, define permissions, and set evaluation rules.\n\nTypical duration: 2 to 4 weeks",
              },
              {
                n: "3", title: "3. Architecture and delivery planning",
                body: "We lock the release scope, development environments, repo structure, integration plan, QA approach, rollout path, and reporting cadence. For AI products, we also define observability, abuse testing, and evaluation checkpoints.\n\nTypical duration: 1 to 2 weeks",
              },
              {
                n: "4", title: "4. MVP build",
                body: "We design and build the product, connect integrations, prepare the release environment, and test throughout the build. For AI products, this phase includes retrieval setup, model integration, prompt controls, tracing, and feedback mechanisms inside the UI.\n\nTypical duration: 8 to 12 weeks, depending on scope",
              },
              {
                n: "5", title: "5. Launch and next release",
                body: "After a thorough QA and testing, we ship the MVP, observe how it performs, fix what the first users expose, and define the next release based on usage data, support signals, and business goals.",
              },
            ].map((step) => (
              <div key={step.n} className={s.wdStep}>
                <div className={s.wdStepNumber}>{step.n}</div>
                <div className={s.wdStepContent}>
                  <div className={s.wdStepTitle}>{step.title}</div>
                  <div className={s.wdStepDesc}>
                    {step.body.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SERVICES BLOCK 1 (90-day pipeline header) ────────────────── */}
      <section id="mvp-pipeline" className={`${s.servicesBlock} ${s.ptMedium} ${s.pbSmall}`}>
        <div className={s.container}>
          <h2 className={s.sbTitle}>
            90-day <span className={s.accent}>AI vs traditional MVP </span>pipeline
          </h2>
          <p className={s.sbDesc}>
            Traditional MVPs can ship faster than this. AI-backed products often need a wider path because the data and evaluation layer must be built alongside the app.
          </p>
        </div>
      </section>

      {/* ── 7. COMPARISON TABLE ─────────────────────────────────────────── */}
      <div className={`${s.tableBlock} ${s.pbMedium}`}>
        <div className={s.container}>
          <div style={{ overflowX: "auto" }}>
            <table className={s.comparisonTable}>
              <thead>
                <tr>
                  <th scope="col">Timeline</th>
                  <th scope="col">Traditional MVP</th>
                  <th scope="col">AI-backed MVP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Days 1–14", "Discovery, user flows, release scope, architecture outline", "Discovery plus data audit, retrieval feasibility, model choice, token-cost testing, and guardrails"],
                  ["Days 15–45", "UX/UI, frontend and backend foundation, primary integrations, environments", "App foundation plus data cleanup, chunking, vector index, permission mapping, and pipeline setup"],
                  ["Days 46–75", "Feature build, QA, and release prep", "Model integration, prompt design, streaming UX, eval datasets, tracing, and user feedback hooks"],
                  ["Days 76–90", "UAT, hardening, release", "Red-team tests, prompt-injection testing, AI evals, rollout hardening, and release"],
                ].map(([period, trad, ai]) => (
                  <tr key={period}>
                    <td><strong>{period}</strong></td>
                    <td>{trad}</td>
                    <td>{ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── 8. SERVICES BLOCK 2 (MVP deliverables) ──────────────────────── */}
      <section id="mvp-deliverables" className={`${s.servicesBlock} ${s.ptMedium} ${s.pbMedium}`}>
        <div className={s.container}>
          <h2 className={s.sbTitle}>
            MVP <span className={s.accent}>deliverables</span> we prepare
          </h2>
          <p className={s.sbDesc}>
            Collaboration with us means full transparency in the way work is done. One of the key aspects is the tangible deliverables of our work produced at different stages during our collaboration.
          </p>
          <div className={s.sbCards}>
            {[
              {
                title: "Product Strategy & Planning",
                items: ["validated product concept and user needs analysis", "lean canvas or business model overview", "feature roadmap and MVP scope definition", "cost and timeline estimation", "regular detailed reports about project health and status", "risk assessment and mitigation analysis", "product limitation document"],
              },
              {
                title: "Design",
                items: ["wireframes, mockups, and clickable prototypes", "development-ready UI/UX designs", "UI-kit to simplify the development process", "style-guides"],
              },
              {
                title: "Engineering",
                items: ["technical architecture and tech stack recommendation", "scalable backend and API", "secure and optimized infrastructure setup", "fully functional MVP ready for deployment"],
              },
              {
                title: "Quality & Growth Readiness",
                items: ["QA reports and test documentation", "test cases for test automation", "post-launch performance metrics and next-step recommendations"],
              },
            ].map((card) => (
              <div key={card.title} className={s.sbCard}>
                <h3 className={s.sbCardTitle}>{card.title}</h3>
                <ul className={s.sbCardList}>
                  {card.items.map((item) => <li key={item}>{item};</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. DEVELOPMENT ABOUT (tabs) ─────────────────────────────────── */}
      <section className={`${s.devAbout} ${s.ptMedium} ${s.pbMedium}`}>
        <div className={s.container}>
          <div className={s.devAboutInner}>
            <div className={s.devAboutLeft}>
              <h2 className={s.devAboutTitle}>
                We build a <span className={s.accent}>product</span>, not a thin model wrapper
              </h2>
              <p className={s.devAboutDesc}>
                A stronger AI MVP is not defined solely by the model. It is defined by how your product handles data, permissions, context, workflows, and user outcomes.
              </p>
            </div>
            <div className={s.devAboutRight}>
              <div className={s.devTabBtns} role="tablist">
                {devAboutTabs.map((tab, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={devTab === i}
                    className={`${s.devTabBtn} ${devTab === i ? s.devTabBtnActive : ""}`}
                    onClick={() => setDevTab(i)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className={s.devPoints} role="tabpanel">
                {devAboutTabs[devTab].points.map((point) => (
                  <div key={point} className={s.devPoint}>{point}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. DOWNLOAD CTA 2 ──────────────────────────────────────────── */}
      <section className={`${s.downloadCta} ${s.ptMedium} ${s.pbMedium}`}>
        <div className={s.container}>
          <div className={s.downloadCtaInner}>
            <div className={s.downloadCtaContent}>
              <h2 className={s.downloadCtaTitle}>Got a vision? Let&apos;s build its first proof!</h2>
              <p className={s.downloadCtaDesc}>Book a free strategy call and get expert feedback on your MVP scope.</p>
            </div>
            <div className={s.downloadCtaBtn}>
              <a href="/contact" className={s.btnPrimary}>Book a call</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. CASES BLOCK ─────────────────────────────────────────────── */}
      <section id="mvp-cases" className={`${s.casesBlock} ${s.ptSmall} ${s.pbSmall}`}>
        <div className={s.container}>
          <h2 className={s.casesTitle}>
            Our recent <span className={s.accent}>works</span>
          </h2>
          <div className={s.casesSlider} id="cases-slider">
            {cases.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className={s.caseCard}
                style={{ background: c.bg }}
              >
                <div className={s.caseCardContent}>
                  {c.logo && (
                    <img src={c.logo} alt={c.logoAlt} className={s.caseCardLogo} />
                  )}
                  <span className={s.caseCardTechBadge}>{c.tech}</span>
                  <h3 className={s.caseCardTitle}>{c.title}</h3>
                  <p className={s.caseCardDesc}>{c.desc}</p>
                  <div className={s.caseCardTags}>
                    {c.tags.map((tag) => <span key={tag} className={s.caseTag}>{tag}</span>)}
                  </div>
                </div>
                <div className={s.caseCardImages} style={{ position: "relative", overflow: "hidden" }}>
                  <img src={c.imgRight} alt={c.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </a>
            ))}
          </div>
          <div className={s.casesNav}>
            <div className={s.casesNavBtns}>
              <button
                className={s.casesNavBtn}
                aria-label="Previous case"
                onClick={() => {
                  const slider = document.getElementById("cases-slider");
                  if (slider) slider.scrollBy({ left: -slider.clientWidth * 0.85, behavior: "smooth" });
                }}
              >
                ←
              </button>
              <button
                className={s.casesNavBtn}
                aria-label="Next case"
                onClick={() => {
                  const slider = document.getElementById("cases-slider");
                  if (slider) slider.scrollBy({ left: slider.clientWidth * 0.85, behavior: "smooth" });
                }}
              >
                →
              </button>
            </div>
            <a href="/portfolio" className={s.linkPrimary}>View all case studies</a>
          </div>
        </div>
      </section>

      {/* ── 12. REVIEW SLIDER ───────────────────────────────────────────── */}
      <section className={`${s.reviewSlider} ${s.ptMedium} ${s.pbMedium}`}>
        <div className={s.container}>
          <div className={s.reviewWrap}>
            <div className={s.reviewSlide}>
              <div
                className={s.reviewText}
                dangerouslySetInnerHTML={{ __html: `<p>${reviews[reviewIdx].text}</p>` }}
              />
              <div className={s.reviewMeta}>
                {reviews[reviewIdx].logo && (
                  <img src={reviews[reviewIdx].logo!} alt={reviews[reviewIdx].name} className={s.reviewLogo} />
                )}
                {reviews[reviewIdx].photo && (
                  <img src={reviews[reviewIdx].photo!} alt={reviews[reviewIdx].name} className={s.reviewPhoto} />
                )}
                <div className={s.reviewName}>{reviews[reviewIdx].name}</div>
                <div className={s.reviewPosition}>{reviews[reviewIdx].role}</div>
              </div>
            </div>
            <div className={s.reviewControls}>
              <div className={s.reviewNavBtns}>
                <button
                  className={s.reviewNavBtn}
                  aria-label="Previous review"
                  onClick={() => setReviewIdx((i) => (i === 0 ? reviews.length - 1 : i - 1))}
                >
                  ←
                </button>
                <button
                  className={s.reviewNavBtn}
                  aria-label="Next review"
                  onClick={() => setReviewIdx((i) => (i === reviews.length - 1 ? 0 : i + 1))}
                >
                  →
                </button>
              </div>
              <a href="/testimonials" className={s.linkPrimary}>All Reviews</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. TECH STACK BLOCK ────────────────────────────────────────── */}
      <section id="mvp-tech-stack" className={`${s.techStack} ${s.ptMedium} ${s.pbMedium}`}>
        <div className={s.container}>
          <h2 className={s.tsTitle}>
            <span className={s.accent}>Core tech stack</span> we work with
          </h2>
          <div className={s.tsRows}>
            {techStackRows.map((row) => (
              <div key={row.label} className={s.tsRow}>
                <div className={s.tsRowLabel}>{row.label}</div>
                <div className={s.tsLogos}>
                  {row.techs.map((tech) => (
                    <span key={tech} className={s.tsTechPill}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. DOWNLOAD CTA 3 ──────────────────────────────────────────── */}
      <section className={`${s.downloadCta} ${s.ptMedium} ${s.pbMedium}`}>
        <div className={s.container}>
          <div className={s.downloadCtaInner}>
            <div className={s.downloadCtaContent}>
              <h2 className={s.downloadCtaTitle}>Ready to launch your MVP?</h2>
              <p className={s.downloadCtaDesc}>Let&apos;s discuss your project and define the right scope for your first release.</p>
            </div>
            <div className={s.downloadCtaBtn}>
              <a href="/contact" className={s.btnPrimary}>Get a free quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 15. CASE SOLUTIONS FIRST ────────────────────────────────────── */}
      <section id="mvp-scale" className={`${s.caseSolutions} ${s.ptSmall} ${s.pbMedium}`}>
        <div className={s.container}>
          <h2 className={s.csTitle}>
            From MVP to enterprise <span className={s.accent}>scale</span>
          </h2>
          <p className={s.csDesc}>
            Buyers often worry that an MVP is only a temporary build and that real growth will require a rewrite. We avoid that problem by engineering the MVP on a production-ready foundation from day one.
          </p>
          <p className={s.csDesc}>
            We use scalable cloud infrastructure, structured service architecture, stable APIs, and CI/CD so the product can grow without being rebuilt.
          </p>
          <div className={s.csImage}>
            <Image
              src="/mvp/04_From-MVP-to-enterprise-scale-progression.png"
              alt="From MVP to enterprise scale progression"
              width={1560} height={699}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── 16. SERVICES RESULTS 2 (Why entrust MVP) ────────────────────── */}
      <section className={`${s.servicesResults} ${s.ptSmall} ${s.pbSmall}`}>
        <div className={s.container}>
          <div className={s.srTitleWrap} style={{ textAlign: "center" }}>
            <h2 className={s.srTitle}>
              <span className={s.accent}>Why</span> entrust MVP development to us
            </h2>
            <p className={s.srDesc} style={{ margin: "0 auto" }}>
              Since 2012, we know software development for startups inside out. So, we adjust our MVP software development services to provide everything needed to develop your MVP application, from building a Lean Canvas to the release of a fully functioning MVP.
            </p>
          </div>
          <div className={s.srRow}>
            <div className={s.srList}>
              <ul>
                <li><strong>You own the IP and source code</strong></li>
              </ul>
              <p>The MVP is your asset. The value should not sit in a vendor-controlled wrapper, internal platform, or hidden delivery shortcut.</p>
              <ul>
                <li><strong>The product is built on real infrastructure</strong></li>
              </ul>
              <p>We use delivery environments and cloud architecture that support growth.</p>
              <ul>
                <li><strong>AI guardrails are part of the build</strong></li>
              </ul>
              <p>If AI is in scope, the product ships with defined data access rules, evaluation checkpoints, logging, and abuse testing.</p>
              <ul>
                <li><strong>One team covers product engineering and AI delivery</strong></li>
              </ul>
              <p>You do not need one vendor for the app and another for the model layer. We handle the standard product stack and AI-specific work as a single delivery path.</p>
            </div>
            <div className={s.srImage}>
              <Image
                src="/mvp/01_image_starts.png"
                alt="Nexterse LLC team member"
                width={528} height={348}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 17. ACHIEVEMENTS BLOCK ──────────────────────────────────────── */}
      <section className={`${s.achievements} ${s.ptSmall} ${s.pbSmall}`}>
        <div className={s.container}>
          <h2 className={s.achTitle}>
            <span className={s.accent}>Awards</span> &amp; recognitions
          </h2>
          <p className={s.achDesc}>
            Nexterse LLC has been recognized by leading analytics agencies for its transparency, reliability, startup-centric mindset, and consistent ability to deliver value quickly. Our approach combines lean principles with senior-level technical expertise that helps us to provide the best MVP software development services for startups in the field.
          </p>
          <div className={s.achGrid}>
            {achievementBadges.map((badge) => (
              <img key={badge.src} src={badge.src} alt={badge.alt} className={s.achBadge} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 18. FAQ BLOCK ───────────────────────────────────────────────── */}
      <section id="mvp-faq" className={`${s.faqBlock} ${s.ptSmall} ${s.pbSmall}`}>
        <div className={s.container}>
          <h2 className={s.faqTitle}>FAQ</h2>
          <div className={s.faqList}>
            {visibleFaqs.map((faq, i) => (
              <div key={i} className={`${s.faqItem} ${openFaq === i ? s.faqItemOpen : ""}`}>
                <button
                  className={s.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                </button>
                <div className={s.faqAnswer}>
                  <div className={s.faqAnswerInner}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!showMoreFaq && faqs.length > 5 && (
            <button className={s.faqLoadMore} onClick={() => setShowMoreFaq(true)}>
              Load more
            </button>
          )}
        </div>
      </section>

      {/* ── 19. CROSSLINKS BLOCK ────────────────────────────────────────── */}
      <section className={`${s.crosslinks} ${s.ptSmall} ${s.pbSmall}`}>
        <div className={s.container}>
          <h2 className={s.crosslinksTitle}>More about Nexterse LLC MVP development</h2>
          <div className={s.crosslinksGrid}>
            {crosslinks.map((link) => (
              <div key={link.label} className={s.crosslinkItem}>
                <a href="#">{link.label}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 20. BLOG SECTION ────────────────────────────────────────────── */}
      <section className={`${s.blogSection} ${s.ptMedium} ${s.pbLarge}`}>
        <div className={s.container}>
          <h2 className={s.blogTitle}>
            We have awesome <span className={s.accent}>stories</span> to tell you
          </h2>
          <div className={s.blogGrid}>
            <a href={blogPosts[0].href} className={s.blogPostFeatured}>
              <div className={s.blogPostImage}>
                <Image
                  src={blogPosts[0].image!}
                  alt={blogPosts[0].title}
                  width={1024} height={578}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <div className={s.blogPostTitle}>{blogPosts[0].title}</div>
              <div className={s.blogPostMeta}>
                <ClockIcon />
                <span>{blogPosts[0].readTime}</span>
                <span>|</span>
                <span>{blogPosts[0].date}</span>
              </div>
            </a>
            <div className={s.blogSideList}>
              {blogPosts.slice(1).map((post) => (
                <a key={post.title} href={post.href} className={s.blogPostSmall}>
                  <div className={s.blogPostSmallTitle}>{post.title}</div>
                  <div className={s.blogPostSmallMeta}>
                    <ClockIcon />
                    <span>{post.readTime}</span>
                    <span>|</span>
                    <span>{post.date}</span>
                  </div>
                </a>
              ))}
              <div className={s.blogAllLink}>
                <a href="/blog" className={s.linkPrimary}>All articles</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
