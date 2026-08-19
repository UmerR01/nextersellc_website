"use client";

import { useState } from "react";
import Image from "next/image";
import s from "./MvpPage.module.css";
import CaseCards from "@/components/home/CaseCards";
import MvpReviewSlider from "./MvpReviewSlider";
import MvpAchievements from "./MvpAchievements";
import MvpFaqBlock from "./MvpFaqBlock";
import AwesomeStories from "@/components/blog/AwesomeStories";

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
const techStackRows = [
  {
    label: "AI foundational models",
    tools: [
      { src: "/adlc/03_OpenAI.svg",                     alt: "OpenAI GPT-4o" },
      { src: "/ai-consulting/tech-logos/claude.svg",     alt: "Claude 3.5 Sonnet" },
      { src: "/ai-consulting/tech-logos/gemini.svg",     alt: "Gemini 1.5 Pro" },
      { src: "/adlc/03_Meta-Llama-1.svg",               alt: "Llama 3.1" },
      { src: "/adlc/03_mistral-ai-2.svg",               alt: "Mistral Large" },
    ],
  },
  {
    label: "AI orchestration",
    tools: [
      { src: "/ai-consulting/tech-logos/langchain.svg",  alt: "LangChain" },
      { src: "/ai-consulting/tech-logos/llamaindex.svg", alt: "LlamaIndex" },
      { src: "/ai-consulting/tech-logos/crewai.svg",     alt: "CrewAI" },
      { src: "/ai-consulting/tech-logos/autogen.svg",    alt: "AutoGen" },
    ],
  },
  {
    label: "Vector & search",
    tools: [
      { src: "/ai-consulting/tech-logos/pinecone.svg",   alt: "Pinecone" },
      { src: "/ai-consulting/tech-logos/weaviate.svg",   alt: "Weaviate" },
      { src: "/ai-consulting/tech-logos/qdrant.svg",     alt: "Qdrant" },
      { src: "/ai-consulting/tech-logos/chroma.svg",     alt: "Chroma" },
    ],
  },
  {
    label: "Software development",
    tools: [
      { src: "/custom-software/tech/tool_15.svg",        alt: "Python" },
      { src: "/custom-software/tech/tool_16.svg",        alt: "Node.js" },
      { src: "/custom-software/tech/tool_11.svg",        alt: "Java" },
      { src: "/custom-software/tech/tool_12.svg",        alt: ".NET" },
      { src: "/custom-software/tech/tool_13.svg",        alt: "PHP" },
      { src: "/custom-software/tech/tool_17.svg",        alt: "JavaScript" },
    ],
  },
  {
    label: "Cloud & DevOps",
    tools: [
      { src: "/ai-consulting/tech-logos/aws.svg",        alt: "AWS" },
      { src: "/ai-consulting/tech-logos/gcp.svg",        alt: "GCP" },
      { src: "/ai-consulting/tech-logos/azure.svg",      alt: "Azure" },
      { src: "/ai-consulting/tech-logos/docker.svg",     alt: "Docker" },
    ],
  },
  {
    label: "Mobile",
    tools: [
      { src: "/custom-software/tech/tool_18.svg",        alt: "React Native" },
      { src: "/custom-software/tech/tool_19.svg",        alt: "iOS" },
      { src: "/custom-software/tech/tool_20.svg",        alt: "Android" },
    ],
  },
];

const crosslinks = [
  {
    heading: "MVP development",
    links: [
      { text: "Full software product ", last: "development", href: "/services/custom-software-development" },
      { text: "Web MVP ", last: "development", href: "/services/web-app-development" },
      { text: "Mobile MVP ", last: "development", href: "/services/mobile-app-development" },
    ],
  },
  {
    heading: "Related services",
    links: [
      { text: "AI ", last: "consulting", href: "/ai-consulting" },
      { text: "Big data ", last: "development", href: "/services/big-data-development" },
      { text: "ML ", last: "development", href: "/services/ml-development" },
    ],
  },
  {
    heading: "About Nexterse LLC",
    links: [
      { text: "About ", last: "us", href: "/about-us" },
      { text: "Contact ", last: "us", href: "/contact-us" },
      { text: "Get a free project ", last: "estimate", href: "/pricing" },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════════════════ */
export default function MvpPage() {
  const [serviceTab, setServiceTab] = useState(0);
  const [devTab, setDevTab] = useState(0);

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
              <a href="#get-modal-popup" className={`btn btn-accent ${s.btnPrimary}`}>Start your MVP</a>
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
                n: "1", title: "Discovery and scope",
                body: "Using business analysis for MVP scoping, we define the use case, user roles, workflows, success metrics, integrations, release scope, and hosting constraints. The output is a scoped first release, UI/UX design for MVP and an architecture direction.\n\nTypical duration: 2 to 4 weeks",
              },
              {
                n: "2", title: "AI pilot and prove program",
                body: "This phase applies when AI is central to the product or carries material delivery risk. Traditional software can move from discovery into build. AI products usually should not. Before we commit to the public MVP, we test the model on a bounded slice of real or sanitized data, estimate operating cost, define permissions, and set evaluation rules.\n\nTypical duration: 2 to 4 weeks",
              },
              {
                n: "3", title: "Architecture and delivery planning",
                body: "We lock the release scope, development environments, repo structure, integration plan, QA approach, rollout path, and reporting cadence. For AI products, we also define observability, abuse testing, and evaluation checkpoints.\n\nTypical duration: 1 to 2 weeks",
              },
              {
                n: "4", title: "MVP build",
                body: "We design and build the product, connect integrations, prepare the release environment, and test throughout the build. For AI products, this phase includes retrieval setup, model integration, prompt controls, tracing, and feedback mechanisms inside the UI.\n\nTypical duration: 8 to 12 weeks, depending on scope",
              },
              {
                n: "5", title: "Launch and next release",
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
      <section id="mvp-pipeline" className={`${s.servicesBlock} ${s.pipelineSection} ${s.ptMedium} ${s.pbSmall}`}>
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
      <section id="mvp-deliverables" className={`${s.servicesBlock} ${s.deliverablesSection} ${s.ptMedium} ${s.pbMedium}`}>
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
              <a href="#get-modal-popup" className={`btn btn-accent ${s.btnPrimary}`}>Book a call</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. CASES BLOCK ─────────────────────────────────────────────── */}
      <div id="mvp-cases">
        <CaseCards
          heading={<><span className={s.accent}>Case</span> studies</>}
          windowed
        />
      </div>

      {/* ── 12. REVIEW SLIDER ───────────────────────────────────────────── */}
      <MvpReviewSlider primary="software" count={7} secondaryCount={2} />

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
                  {row.tools.map((tool) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <span key={tool.src} className={s.tsLogoSlot}>
                      <img src={tool.src} alt={tool.alt} className={s.tsLogoImg} loading="lazy" />
                    </span>
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
              <a href="/contact" className={`btn btn-accent ${s.btnPrimary}`}>Get a free quote</a>
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
          <div className={s.csCopy}>
            <p>
              Buyers often worry that an MVP is only a temporary build and that real growth will require a rewrite. We avoid that problem by engineering the MVP on a production-ready foundation from day one.
            </p>
            <p>
              We use scalable cloud infrastructure, structured service architecture, stable APIs, and CI/CD so the product can grow without being rebuilt.
            </p>
          </div>
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
      <section className={`${s.servicesResults} ${s.entrustSection} ${s.ptSmall} ${s.pbSmall}`}>
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
      <MvpAchievements />

      {/* ── 18. FAQ BLOCK ───────────────────────────────────────────────── */}
      <MvpFaqBlock />

      {/* ── 19. CROSSLINKS BLOCK ────────────────────────────────────────── */}
      <section className={s.clSection}>
        <div className={s.clBg} />
        <div className={s.container}>
          <h2 className={s.clTitle}>
            More about <span className={s.accent}>Nexterse LLC</span> MVP development
          </h2>
          <div className={s.clGrid}>
            {crosslinks.map((col) => (
              <div key={col.heading}>
                <p className={s.clColTitle}>{col.heading}</p>
                <ul className={s.clList}>
                  {col.links.map((link) => (
                    <li key={link.text + link.last} className={s.clItem}>
                      <a href={link.href} className={s.clLink}>
                        {link.text}
                        <span className={s.clLinkLast}>
                          {link.last}
                          <span className={s.clArrow} />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 20. BLOG SECTION ────────────────────────────────────────────── */}
      <AwesomeStories category="guides" />

    </div>
  );
}
