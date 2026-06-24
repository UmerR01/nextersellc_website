export interface FAQItem { q: string; a: string }
export interface FAQPanel { id: number; tab: string; title: string; questions: FAQItem[] }

export const FAQ_PANELS: FAQPanel[] = [
  {
    id: 1,
    tab: "About Nexterse & dual-engine approach",
    title: "About Nexterse & dual-engine approach",
    questions: [
      {
        q: "How would you briefly describe Nexterse?",
        a: `<p>Nexterse is an AI-powered custom software development company. We operate as a dual-engine engineering firm: we build stable, scalable custom software under a structured SDLC, and we engineer governed AI systems under our Agentic Development Lifecycle (ADLC). Our focus is on engineering you can audit – predictable timelines, clean architectures, and AI that operates inside enterprise guardrails. We have delivered 350+ custom software products across 20+ industries over 14+ years on the market.</p>
<p><a href="/portfolio">View our case studies</a></p>
<p><a href="/testimonials">Read Clients' testimonials</a></p>`,
      },
      {
        q: `What does "dual-engine engineering firm" mean in practice?`,
        a: `<p>It means we run two engineering disciplines under one roof and pick the one that fits the system being built. The first engine is the traditional SDLC for deterministic systems – rule-based logic, manually controlled QA cycles, static infrastructure, versioned releases. The second engine is the ADLC for probabilistic AI systems – context-driven generation, algorithmic AI evaluation (RAGAS, LLM scoring), token consumption forecasting and continuous guardrail tuning. Some projects use only one engine; many enterprise engagements use both, with the AI layer integrated into modernized software through controlled APIs. We build whichever combination delivers ROI.</p>`,
      },
      {
        q: "We need a standard web or legacy application – do we have to use AI?",
        a: `<p>No. If AI does not create measurable value for your business case, we will build traditional software using proven engineering practices. AI is applied when it supports ROI, not as a default.</p>`,
      },
      {
        q: "What is your track record – projects, industries, satisfaction, geography?",
        a: `<p>We have been on the market for 14+ years and have delivered 350+ custom software products across 20+ industries, with a 98% Client satisfaction rate and Clients in 26 countries. Our deepest experience is in healthcare, education, retail and ecommerce, manufacturing and energy, logistics and transportation, professional services, and marketing. You can browse <a href="/portfolio">case studies</a> and <a href="/testimonials">Client testimonials</a> for examples in your sector.</p>`,
      },
      {
        q: "Where is your team located and how do time zones work?",
        a: `<p>Our headquarters is in the USA, MA, Boston. Most of the production team is located in Poland. Other team members are located in different locations, including Georgia, Austria and other countries. We have been working with US-based Clients for over 14 years and structure each engagement with overlapping working hours for daily or weekly stand-ups, plus asynchronous collaboration via Slack, Jira, and email, so progress continues across time zones.</p>`,
      },
      {
        q: "How many employees does Nexterse have, and how is the team structured?",
        a: `<p>Currently, our team counts more than 100 employees, with a strong concentration of senior engineers. A typical engagement includes a dedicated Project Manager, Business Analyst, Solution Architect, UX/UI designers, AI developers, QA engineers, and – for AI scope – an ADLC lead or AI architect. Our size lets us ramp resources up or down quickly when a project's scope or pace changes.</p>`,
      },
      {
        q: "What makes Nexterse different from other development agencies?",
        a: `<p>Three things.</p>
<ul>
<li><strong>People</strong> – a strong concentration of senior European engineers with formal technical education.</li>
<li><strong>Processes</strong> – ISO 27001 and ISO 9001 certified delivery, with a documented dual-engine discipline (SDLC for deterministic systems, ADLC for AI) rather than ad-hoc methodology.</li>
<li><strong>Posture</strong> – we are an engineering partner, not a code factory or freelancer marketplace.</li>
</ul>
<p>We challenge assumptions during discovery, scope honestly, and stay accountable through full delivery. Compared to micro-shops and freelancer platforms, we provide a managed team with PM, QA, and architecture coverage; compared to large offshore vendors, your project gets senior attention instead of being deprioritized behind enterprise accounts.</p>`,
      },
      {
        q: "How do you measure the success of the developed software?",
        a: `<p>That's a very complex question, discussed with each Client separately at the beginning of cooperation. Usually, success is measured against initial project objectives, including performance metrics, user satisfaction and ROI. For the AI scope, we also track evaluation metrics (accuracy, faithfulness, and retrieval precision), token cost per interaction, and adoption against the business KPIs defined during discovery.</p>`,
      },
    ],
  },
  {
    id: 2,
    tab: "Engagement, cost & timeline",
    title: "Engagement, cost & timeline",
    questions: [
      {
        q: "What pricing models do you offer?",
        a: `<p>Yes, we offer various pricing models, including <strong>Fixed price, Time &amp; Materials (T&amp;M), T&amp;M with budget cap, dedicated team models</strong>, to fit different budgets and project scopes.</p>
<p>More about <a href="/engagement-models-process">engagement models you can find here</a>.</p>`,
      },
      {
        q: "Can you give a fixed-price bid for the whole project?",
        a: `<p>Yes, but a meaningful fixed-price bid requires a complete, validated scope. There are two paths: either you provide a comprehensive technical specification for us to review and bid against, or, more commonly, we run a paid Discovery Phase first. Our team builds the blueprint with you (user stories, wireframes, high-level architecture), and at the end of that phase, we can issue an accurate fixed price for development against a finalized scope.</p>`,
      },
      {
        q: "Why is your Discovery Phase paid?",
        a: `<p>A paid Discovery Phase is a serious engagement, not a sales pitch. Our senior BAs, designers and architects dedicate 4-6 weeks to building a comprehensive blueprint for your project. You walk away with tangible deliverables – a Vision &amp; Scope document, SRS, wireframes, interactive prototypes, WBS, cost estimate, and project roadmap – that are yours to keep whether you continue with us or not. "Free" discovery is usually a shallow sales-driven exercise that doesn't produce usable artifacts.</p>`,
      },
      {
        q: "What does the discovery phase include, and how long does it take?",
        a: `<p>A typical discovery phase combines business analysis (5-8 weeks depending on project scale) with UX/UI design (3-6 weeks, usually in parallel). The dedicated team includes a Business Analyst, Project Manager, Solution Architect, UX/UI designer, QA engineer and an AI architect for AI-scoped engagements. Activities include requirements workshops, stakeholder interviews, system mapping and risk assessment using techniques like three-point estimation. For the AI scope, we leverage data and infrastructure audits and token consumption modeling. Deliverables culminate in a detailed proposal with a precise budget, timeline, and recommended team structure.</p>`,
      },
      {
        q: "How are project estimates and timelines determined during the presale process?",
        a: `<p>During our presale process, we thoroughly <strong>analyze your project requirements, goals and any existing documentation to define a clear scope.</strong></p>
<p>Then, our experts create a detailed estimate and timeline by breaking down the project into smaller tasks and leveraging data from past projects for accuracy. We use three-point estimation to build realistic buffers and, for the AI scope, model expected token consumption and infrastructure cost under realistic usage scenarios.</p>
<p>This results in a comprehensive proposal outlining the project scope, a precise budget and a clear development roadmap.</p>`,
      },
      {
        q: "How much does a custom software project cost?",
        a: `<p>Final costs vary widely depending on:</p>
<ul>
<li>Project's scope</li>
<li>Complexity</li>
<li>Technologies</li>
<li>Timeline</li>
<li>Integration depth and compliance requirements</li>
<li>And, for AI projects, data preparation, token consumption, and evaluation overhead.</li>
</ul>
<p>The average band for projects we deliver is around <strong>$100,000-500,000+</strong>, with enterprise AI engagements often sitting above that range. Smaller MVPs and pilots can be scoped below it – see the question on small starter budgets for what is realistically possible.</p>`,
      },
      {
        q: "How much does AI development cost compared to traditional software?",
        a: `<p>AI engagements have the same engineering cost components as traditional software – analysis, design, build, QA – plus AI-specific components that must be planned in advance: data preparation and indexing, evaluation pipeline setup, guardrail tuning, projected token consumption, and ongoing infrastructure for the model and vector layer. Most enterprise AI initiatives start with a structured pilot to define those cost boundaries before scaling.</p>`,
      },
      {
        q: "What ongoing monthly AI/cloud infrastructure costs should we expect?",
        a: `<p>Monthly cost depends on usage volume, model choice, infrastructure topology, and how much data flows through the system. During discovery, we model projected monthly token consumption, infrastructure cost under different load scenarios, and the cost per interaction so leadership receives a total cost of ownership projection before committing to rollout. Costs are then controlled in production through prompt optimization, model selection (smaller models or private SLMs, where appropriate), caching strategies, and architectural decisions such as edge filtering for IoT use cases.</p>`,
      },
      {
        q: "Are there hidden costs we should expect (support, deployment, third-party tools)?",
        a: `<p>We believe in 100% transparency. Our <strong>pricing</strong> typically includes:</p>
<ul>
<li>The full development cycle, from planning and UX/UI design to development and testing.</li>
<li>Deployment.</li>
<li>Initial support.</li>
<li>3rd party tools cost estimations.</li>
</ul>
<p>For AI engagements, our scope also includes pilot phases, token modeling, guardrail tuning, and evaluation framework setup. Post-launch support and maintenance are handled under a separate, flexible plan that we discuss and agree on up front, so you know exactly what to expect from start to finish.</p>`,
      },
      {
        q: "What happens if costs overrun the original estimate?",
        a: `<p>We emphasize transparency from day one. We use Agile methodologies with 2-week sprints, so you see the progress and budget burn-down in real time. If scope changes or unforeseen challenges arise, you are the first to know, and we will discuss options together before any extra costs are incurred. For Clients who need a firm budget ceiling, we can include a Not-to-Exceed (NTE) cap directly in the contract, giving you the flexibility of Agile delivery with a hard stop on cost. Three-point estimation during discovery also builds realistic buffers into the original number.</p>`,
      },
      {
        q: "What can we realistically build with a small starter budget?",
        a: `<p>We try to be honest about what the budget can deliver. For $8-15k, we cannot build a functional production application with backend, GPS, social features, or geolocation – but we can build a high-fidelity clickable prototype that looks like the real app and can be used to pitch investors and raise the capital needed to build it properly. For a leaner MVP, we can configure a smaller dedicated squad rather than a full standard pod. We will scope what your budget can responsibly support and tell you what it cannot.</p>`,
      },
      {
        q: "Since AI now writes code, why should we still pay full development rates?",
        a: `<p>We use AI tools internally to make our engineering teams more efficient, and we pass those efficiency gains on to you through faster delivery. But AI generates code; it does not engineer secure, scalable systems or understand the nuances of your business logic. You are paying for the expertise that turns AI-assisted code into a production-ready system that scales, integrates cleanly, and stays maintainable. Under our ADLC, AI-augmented engineering is wrapped in evaluation, governance, and architectural discipline – which is where the real engineering value lives.</p>`,
      },
      {
        q: "How long does development typically take?",
        a: `<p>Timeline depends on:</p>
<ul>
<li>Product complexity.</li>
<li>Quality and compliance requirements.</li>
<li>Integration dependencies.</li>
</ul>
<p>After discovery, we provide a clear roadmap with delivery milestones. As a rough guide, lean MVPs typically land in 3-6 months, full custom enterprise builds in 6-12+ months, and AI initiatives move from pilot (weeks) to production-grade systems (months) depending on data complexity and integration depth.</p>`,
      },
      {
        q: "Can you commit to a fixed launch date (e.g., for a trade show)?",
        a: `<p>Yes. We build the plan backward from the date you need to hit and prioritize a stable, demo-ready version of the application above non-essential features. QA runs in parallel to ensure the release is polished for the event. We have delivered for Clients with hard external deadlines – the trade-off is usually scope: we agree on what makes the launch and what moves to phase two.</p>`,
      },
      {
        q: "What happens if you miss a project deadline?",
        a: `<p>Our project managers actively mitigate that risk. We provide a detailed project plan with clear milestones, use sprint demos and daily syncs to surface blockers, and communicate any risk to the schedule as soon as it appears. If a deadline is at risk, we propose options – re-prioritizing features, adding resources, or moving non-critical scope to a later release – and you decide how to respond. Change-order mechanics keep the financial side transparent.</p>`,
      },
    ],
  },
  {
    id: 3,
    tab: "Working with us – team, locations, process",
    title: "Working with us – team, locations, process",
    questions: [
      {
        q: "What development methodologies do you use?",
        a: `<p>For traditional systems, we use modern Agile frameworks within a structured SDLC – Scrum for full-cycle delivery, Kanban, where the work is operational or maintenance-driven. For autonomous AI systems, we apply the Agentic Development Lifecycle (ADLC), which adds hallucination control, token cost forecasting, red-teaming, and continuous AI evaluation. We select the appropriate lifecycle based on the system being built. Waterfall is reserved for smaller projects with a rigidly defined scope and known requirements upfront.</p>`,
      },
      {
        q: "How do you ensure code and product quality?",
        a: `<p>Quality is built into the lifecycle, not bolted on at the end. We engage QA engineers from the requirements analysis stage, conduct mandatory peer code reviews, perform a comprehensive mix of manual and automated testing, and run thorough regression testing before each release. For AI systems, we add a probabilistic QA layer – RAGAS-style evaluation, LLM scoring, red-teaming, and pre-production accuracy thresholds. Releases happen only when the percentage of acceptance criteria agreed in the QA strategy is met.</p>`,
      },
      {
        q: "How do you handle scope creep and change requests?",
        a: `<p>We use <strong>change management processes</strong> that allow for scope adjustments with minimal disruptions, ensuring changes are systematically evaluated and implemented. New ideas don't just get added to the build – we estimate the effort and ask you to make a business decision: is the new idea more important than something already planned for the sprint? Feature prioritization uses <strong>MoSCoW</strong> (Must have, Should have, Could have, Won't have this time), and the backlog is re-prioritized at the start of each sprint as feedback and business needs evolve.</p>`,
      },
      {
        q: "How do you keep Clients informed about progress?",
        a: `<p>During the development process, you have a dedicated Project Manager as your primary point of contact, ensuring a seamless flow of information within our Agile framework.</p>
<p>We schedule <strong>regular sprint review meetings (virtual or in-person)</strong> where our team demonstrates tangible progress, allowing you to provide direct feedback and guide the project's evolution.</p>
<p>For complete transparency, we provide <strong>direct access to project management tools like Jira</strong> for real-time tracking and use channels like Slack and email for daily communication.</p>
<p>Other general communication points are the following:</p>
<ul>
<li>Demos</li>
<li>Retrospectives</li>
<li>Syncups with Leads of Competencies</li>
<li>QBRs</li>
<li>Business trips</li>
</ul>`,
      },
      {
        q: "How involved can Clients be in the development process – what's possible and what's required?",
        a: `<p>Client involvement is adaptable. Some organizations require turnkey execution and minimal touchpoints; others prefer close managerial participation with daily standups. Both modes work – we integrate into your governance framework rather than imposing ours. The minimum commitment is usually 2-4 hours per week during discovery (workshops to capture vision), a 30-60-minute weekly sync, and a bi-weekly demo during development. Clients can also have direct Jira access, sprint demo participation, retrospective visibility, and any reporting cadence you want.</p>`,
      },
      {
        q: "What is the typical process for developing custom software (end-to-end steps)?",
        a: `<p>Our software development process typically involves the following steps:</p>
<ul>
<li>Project Kickoff</li>
<li>Discovery</li>
<li>Project Iterations Begin</li>
<li>Sprint Acceptance</li>
<li>Sprint Retrospective (Internal Activity)</li>
<li>Product Stabilization</li>
<li>UAT</li>
<li>Deployment or Release</li>
<li>Post Deploy Support</li>
</ul>`,
      },
      {
        q: "Can you provide a detailed breakdown of project milestones?",
        a: `<p>Yes, we provide a detailed project plan with clearly defined milestones, deliverables, and timelines to keep the project on track. Procurement-driven buyers typically see milestones structured as phase gates (discovery sign-off, architecture sign-off, MVP release, UAT, go-live), sprint demos, and acceptance-criteria checkpoints – all visible in Jira.</p>`,
      },
      {
        q: "How do you handle project documentation throughout development?",
        a: `<p>Project documentation is meticulously maintained throughout the development process, ensuring all aspects of the project are <strong>well-documented for future reference and maintenance.</strong></p>
<p>We manage all project documentation in a centralized wiki using <strong>Confluence</strong>, creating a single source of truth that evolves alongside the project. This repository contains everything from the initial Software Requirements Specification (SRS) and architectural diagrams to all user stories and meeting notes. We also use <strong>Google Workplace tools.</strong></p>
<p>As our Client, you receive direct access to this living documentation, ensuring full transparency and continuous alignment throughout the development lifecycle. At handover, we deliver runbooks and architectural docs that allow any qualified team to operate or take over the system.</p>`,
      },
      {
        q: "I'm not technical – how will you communicate with me?",
        a: `<p>That's exactly what the Project Manager and Business Analyst roles are for. We translate technical concepts into business-focused terms and use visual artifacts – wireframes, prototypes, architecture diagrams, sprint demos – so you can review the work without reading code. You see what is being built and what it does for your business, while we handle the technical complexity behind it.</p>`,
      },
      {
        q: "What happens if a key developer leaves mid-project?",
        a: `<p>This is a reality in any engineering organization, and we mitigate it through process rather than personal heroics. We mandate comprehensive documentation, peer code reviews, and shared knowledge in Confluence so no critical understanding is held by one person. With a strong concentration of senior engineers and a deep bench, we can rotate in another experienced developer with minimal downtime, fully managed by our internal processes.</p>`,
      },
      {
        q: "What if an assigned developer isn't a good fit?",
        a: `<p>If there is a mismatch in skills or working style, we handle it directly. We can rotate in another qualified developer from our team, with a structured knowledge-transfer period to keep the project moving. Our average Client engagement runs 3+ years, so we prioritize long-term fit over short-term continuity.</p>`,
      },
      {
        q: "Can our in-house team take over support after launch?",
        a: `<p>Yes – we build for a smooth handover from day one. We provide comprehensive technical documentation, clean and well-commented code, architectural diagrams, runbooks, and a defined transition SOP. We also offer knowledge-transfer sessions and training so your team can take ownership with confidence. Continuing with our support is an option, not a lock-in.</p>`,
      },
      {
        q: "How easy is it to switch vendors if we want to part ways?",
        a: `<p>We operate on a work-for-hire basis – you own every line of code the moment you pay for it, including AI artifacts (prompts, fine-tunes, vector indexes, evaluation datasets). We use mainstream, well-known frameworks rather than proprietary tooling, document the system to industry standards, and any qualified developer can pick up the codebase from our documentation. Exit clauses, repo handover, and runbook delivery are explicit parts of the Master Agreement, not afterthoughts.</p>`,
      },
      {
        q: "How do you reduce risk for Clients burned by previous vendors?",
        a: `<p>We hear this story often, and we built our process around the things that usually go wrong: opacity, scope drift, and unclear ownership. We start with a paid Discovery Phase with fixed deliverables so you can evaluate our work before committing to development. You get direct Jira access, sprint demos, and a dedicated PM – not a weekly email. For projects that need rescuing, we run a technical audit first to identify what is salvageable before recommending fix or rebuild. Many of our long-term Clients started this way.</p>`,
      },
      {
        q: "Will your team challenge requirements or just execute?",
        a: `<p>We challenge – that is part of what you are hiring. Our BAs, architects, and PMs actively suggest better technical or UX solutions, push back on requirements that won't scale, and treat your old system as a reference for what to keep and what to replace. We aren't a code factory. The point is to deliver software that serves your business goals, which sometimes means disagreeing with the original brief.</p>`,
      },
      {
        q: "Do you provide support and maintenance after launch – what does it include?",
        a: `<p>Yes. Support plans are flexible, not one-size-fits-all. We can provide an on-demand model where you pay only for hours used, or a dedicated monthly retainer that includes proactive monitoring, security patches, OS and framework updates, and small feature enhancements. For AI systems, support also covers continuous evaluation, prompt and model tuning, and token cost monitoring. The exact scope is defined in a Statement of Work so there are no surprises. If you'd rather move support in-house after stabilization, we provide the documentation and training to make that handover clean.</p>`,
      },
      {
        q: "Do you provide training for our team on the new software?",
        a: `<p>Yes, we offer comprehensive training sessions for end-users and administrators to ensure smooth adoption and operation of the software.</p>`,
      },
      {
        q: "What happens if I'm not satisfied with the final product?",
        a: `<p>We always prioritize Client satisfaction, offering several rounds of revisions and adjustments during the planning and development process to align the software with your goals and expectations. We only release the software when the percentage of acceptance criteria agreed in the QA strategy is met, so satisfaction is structured into delivery rather than left to the end.</p>`,
      },
      {
        q: "Do you offer a warranty for the software developed?",
        a: `<p>Yes, we may offer a warranty period post-deployment during which any defects discovered are addressed at no additional cost to you if the engagement is based on Fixed price engagement model.</p>`,
      },
    ],
  },
  {
    id: 4,
    tab: "AI development & ADLC",
    title: "AI development & ADLC",
    questions: [
      {
        q: "What is the Agentic Development Lifecycle (ADLC) and how is it different from SDLC?",
        a: `<p>Standard software development (SDLC) manages deterministic systems with predictable outputs. The Agentic Development Lifecycle governs probabilistic AI systems and adds structured controls such as hallucination evaluation, token cost forecasting, red-teaming, and continuous AI monitoring. The two lifecycles differ on five dimensions:</p>
<ul>
<li><strong>System logic:</strong> rule-based (SDLC) vs context-driven probabilistic generation (ADLC).</li>
<li><strong>QA method:</strong> manually controlled cycles vs algorithmic AI evaluation (RAGAS, LLM scoring).</li>
<li><strong>Cost governance:</strong> static infrastructure cost vs token consumption forecasting.</li>
<li><strong>Release model:</strong> versioned releases vs continuous evaluation &amp; guardrail tuning.</li>
<li><strong>Input–output behavior:</strong> input – fixed output vs input – context retrieval – controlled output.</li>
</ul>
<p>We select the appropriate lifecycle based on the system being built – many enterprise engagements use both.</p>`,
      },
      {
        q: "When do you apply SDLC, and when do you apply ADLC?",
        a: `<p>SDLC governs deterministic systems where the same input must always produce the same output – transactional core systems, ERPs, web apps, IoT control logic, anything where reliability comes from rules. ADLC governs probabilistic AI systems where outputs are generated from context – copilots, RAG, agentic workflows and custom models. In mixed projects, the AI layer runs under ADLC and connects to the deterministic core (built under SDLC) through controlled APIs and middleware. The choice is per component, not per project.</p>`,
      },
      {
        q: "What are the four AI ROI tiers and which one fits us?",
        a: `<p>We structure AI engagements around four tiers based on your data readiness, compliance exposure, and operational complexity:</p>
<ul>
<li><strong>Tier 1 – AI readiness &amp; consulting:</strong> before building anything, we audit whether AI is economically justified for your use case (data, infrastructure, compliance, projected token cost).</li>
<li><strong>Tier 2 – RAG systems &amp; copilots:</strong> securely connect AI to internal documents, ERP, CRM, knowledge bases, with citations, traceability, and vector-level RBAC. Where most enterprises start production AI.</li>
<li><strong>Tier 3 – Agentic workflows:</strong> multi-agent systems that retrieve data, reason over business rules, interact with APIs, trigger actions, and escalate to humans when confidence thresholds drop.</li>
<li><strong>Tier 4 – Custom AI models development:</strong> fine-tuning SLMs and LLMs, domain-specific adaptation, private model hosting (AWS / Azure / on-prem), and hybrid model routing for regulated environments.</li>
</ul>
<p>We start with the lowest tier that produces measurable value and scale only after the previous tier is proven.</p>`,
      },
      {
        q: "How do you decide if an AI use case is economically justified before building?",
        a: `<p>Through a Tier 1 AI readiness audit. Before writing any code, we evaluate data availability and quality, infrastructure and integration constraints, security and compliance exposure, operational workflow impact, and projected token consumption and cloud costs. The output is a clear recommendation: build, don't build, or build differently. If a deterministic SDLC solution delivers the required result faster and at lower cost, we recommend it – we won't push AI where it doesn't create business value.</p>`,
      },
      {
        q: "What is your AI Pilot & Prove program?",
        a: `<p>Our Pilot &amp; Prove program is a structured 4-6 week engagement designed to validate technical feasibility, operational readiness, and economic viability before full deployment. Instead of experimenting in isolation, we build a secure, production-realistic AI environment using a controlled slice of your actual data and infrastructure. You see how the system performs under real operating conditions, with measured accuracy, projected costs, and a defined rollout roadmap – before committing to a full build.</p>`,
      },
      {
        q: "What deliverables does the Pilot & Prove engagement produce?",
        a: `<p>At the end of the pilot phase, you receive:</p>
<ul>
<li>A validated technical architecture blueprint.</li>
<li>Documented security and governance controls.</li>
<li>Measured retrieval accuracy and response benchmarks.</li>
<li>A production token consumption forecast.</li>
<li>A defined rollout roadmap with cost projections.</li>
<li>A clear investment model for scaling.</li>
</ul>
<p>Your leadership team can evaluate the initiative using structured data, projected costs, and measurable outcomes – and compare our deliverables to any other vendor's pilot output.</p>`,
      },
      {
        q: "What is RAG, and how is it different from fine-tuning?",
        a: `<p>Retrieval-augmented generation (RAG) keeps your data outside the model: documents and structured data are indexed into a vector database, the model retrieves the relevant context at query time, and answers are grounded in your verified sources with citations. Fine-tuning embeds knowledge directly into the model's weights through additional training. RAG is the right tool when your knowledge changes frequently, traceability matters, or proprietary data must remain in your environment. Fine-tuning fits when you need consistent stylistic, domain-specific, or behavioral patterns that retrieval can't enforce. Many systems use both layers.</p>`,
      },
      {
        q: "How do you build agentic workflows, and how do they differ from a chatbot?",
        a: `<p>A chatbot answers questions. An agentic workflow executes a multi-step process.</p>
<p>We design multi-agent systems that retrieve data, reason over business rules, interact with APIs, trigger downstream actions, and escalate to humans when confidence thresholds drop. Each workflow is governed through evaluation pipelines, adversarial testing, and cost simulations before deployment, with role-based access at every step. The result is automation that operates inside your governance structure rather than a black box that acts on its own.</p>`,
      },
      {
        q: "Do you fine-tune small language models (SLMs) and deploy them on-premise?",
        a: `<p>Yes, under Tier 4. For organizations processing large data volumes or operating in regulated environments (healthcare, defense, finance) we fine-tune SLMs and LLMs for domain-specific tasks, host them privately on AWS, Azure, or on-prem infrastructure, and design hybrid routing where some queries go to private models and others to public APIs based on sensitivity. This is also the path when regulations may shift – building model-agnostic architectures means you can swap providers without rewriting the application.</p>`,
      },
      {
        q: "Do you have real AI/ML delivery experience, or is this just marketing?",
        a: `<p>Real experience. We have been delivering custom software for 14+ years and have moved beyond AI as a buzzword into governed AI engineering – RAG copilots, agentic workflows, fine-tuned SLMs, and custom ML for predictive analytics across healthcare, fintech, manufacturing, retail, and logistics. We can share specific case studies during discovery that match your industry and tier.</p>`,
      },
      {
        q: "How do you integrate AI with our legacy systems without replacing them?",
        a: `<p>Integration is engineered through secure APIs, middleware, and structured data pipelines. AI components are embedded into your existing workflows without disrupting core systems. We never connect an LLM directly to a transactional legacy database – heavy AI querying will destabilize the system. Instead, we sync the legacy database to a modern decoupled vector database, place the AI behind controlled middleware, and apply access controls and audit logging at the integration layer. This is also a natural place for the Model Context Protocol (MCP), with enterprise tooling supporting it.</p>`,
      },
      {
        q: "How long does it take to move an AI initiative from idea to production?",
        a: `<p>A focused pilot can be delivered within weeks. Production-grade systems follow validation, integration planning, and performance evaluation. Timelines scale with system complexity and number of integrations.</p>`,
      },
      {
        q: "How do you ensure AI model quality and reliability?",
        a: `<p>Every AI system is evaluated against defined performance metrics before release. We use structured evaluation pipelines – RAG evaluation frameworks (RAGAS), LLM scoring, golden datasets, and pre-production thresholds – to measure faithfulness, retrieval precision, response consistency, and accuracy. Before production, we run structured red-teaming and prompt-injection simulations. Continuous monitoring, structured testing, and controlled iteration maintain output quality over time.</p>`,
      },
    ],
  },
  {
    id: 5,
    tab: "AI governance & data security",
    title: "AI governance & data security",
    questions: [
      {
        q: "Will our proprietary data be used to train public AI models?",
        a: `<p>No. Enterprise deployments operate within private infrastructure. Your data remains isolated and is never used to train external foundational models. All processing occurs within isolated environments where strict access controls, encryption in transit and at rest, and zero-retention policies ensure your intellectual property remains fully protected at every stage of the AI workflow.</p>`,
      },
      {
        q: "Can you deploy AI inside our VPC / on-prem so data never leaves our environment?",
        a: `<p>Yes. We deploy AI systems inside secure, VPC-isolated cloud environments (Azure OpenAI, AWS Bedrock) or privately hosted open-source models. Your documents, databases, ERP records, and internal knowledge bases are indexed into private vector databases under strict role-based access control. The language model processes your context with zero data retention. For regulated industries, we support fully private or hybrid deployments.</p>`,
      },
      {
        q: `What does "zero data retention" mean in practical terms?`,
        a: `<p>Zero data retention applies to the LLM call layer – the model provider does not retain your prompts or completions for training, logging, or any other purpose beyond serving the request. Application-layer retention (your vector database, your audit logs, your operational backups) is governed separately by your data policies. The exact defaults vary by provider (Azure OpenAI, AWS Bedrock, private SLM deployments each have different settings), and we configure each to align with your compliance posture.</p>`,
      },
      {
        q: "What is vector-level RBAC and how is it different from application-level RBAC?",
        a: `<p>Application-level RBAC controls what a user can see or do in the UI. Vector-level RBAC enforces those same permissions at the retrieval layer – before the model ever generates a response. We tag every chunk in the vector database with access metadata and filter retrieval by the user's identity and role, so a query can only surface content the user is authorized to see. We also support attribute-based access control (ABAC), where attributes like region, project, or clearance level govern retrieval. The result: the model literally cannot generate from data that the user shouldn't access.</p>`,
      },
      {
        q: "How do you handle PII in AI pipelines?",
        a: `<p>Sensitive data is processed through automated PII detection and redaction pipelines before indexing or model interaction. We apply entity recognition, masking, and tokenization techniques to ensure protected data remains isolated from unintended system layers. PII policies are enforced at ingestion, retrieval, and generation – not as a single check.</p>`,
      },
      {
        q: `What does "zero-hallucination architecture" mean, and how do you achieve it?`,
        a: `<p>It's a design target, not a marketing absolute. We engineer AI systems to ground every response in verified retrieved context, cite the source, and respond with "insufficient information" rather than fabricating when the context doesn't support an answer. We achieve this with deterministic grounding, role-based permission layers, confidence scoring and evaluation frameworks, human approval workflows for sensitive actions, and red-teaming before production. The result is dramatically reduced hallucination rates measured against agreed thresholds, not a promise of zero.</p>`,
      },
      {
        q: "How do you red-team an AI system before production?",
        a: `<p>We run structured adversarial testing – prompt injection simulations, jailbreak attempts, edge-case query patterns, and probes against the guardrails we've defined. We measure behavioral integrity under load, cost per interaction stability, and cross-system impact. The system proceeds to production only once reliability is demonstrated under realistic operational conditions, with results documented and compared against thresholds set during the pilot phase.</p>`,
      },
      {
        q: "How do you forecast token costs and prevent runaway AI spending?",
        a: `<p>During ADLC, we simulate expected usage volume, calculate projected monthly token consumption, model infrastructure costs under different load scenarios, and optimize prompts and architecture for cost efficiency. Leadership teams receive a clear total cost of ownership projection before committing to rollout, and we set per-interaction cost ceilings, rate limits, and alerting in production. Cost predictability is treated as an engineering requirement, not an afterthought.</p>`,
      },
      {
        q: "How do you control operational cloud costs (beyond token forecasting)?",
        a: `<p>Operational cost is shaped during architecture, not optimized later. We model expected usage in the early phases, choose the right model size for each task (often a smaller or private SLM where a frontier model isn't needed), apply caching and embedding reuse, design retrieval to minimize context size, and use edge or pre-processing layers to suppress noise before it reaches the model. The result is a predictable monthly cost – closer to deterministic infrastructure economics than open-ended LLM spending.</p>`,
      },
      {
        q: "What audit logging and traceability do you provide for AI interactions?",
        a: `<p>Every interaction – retrieval, generation, and system call – is logged and traceable. Structured audit trails provide operational transparency, support regulated-industry use, and let compliance teams reconstruct what the system saw, what it retrieved, what it generated, and which user triggered the interaction. Log retention is configurable to match your policy.</p>`,
      },
      {
        q: "What steps do you take if a data breach occurs?",
        a: `<p>In case of a data breach, we follow an <strong>incident response plan</strong> that includes the following steps:</p>
<ul>
<li>Immediate containment</li>
<li>Investigation</li>
<li>Notification to affected parties as per compliance requirements</li>
<li>Remedial actions to prevent future breaches</li>
</ul>`,
      },
      {
        q: "How do you train your staff on data security?",
        a: `<p>We provide <strong>regular training on data security</strong> practices such as secure coding, data handling, awareness of the latest cybersecurity threats and how to mitigate them and more. Training is aligned with our ISO 27001 information security management system and is mandatory for all engineering and delivery staff.</p>`,
      },
    ],
  },
  {
    id: 6,
    tab: "Legacy modernization",
    title: "Legacy modernization",
    questions: [
      {
        q: "What is the strangler fig approach to legacy modernization?",
        a: `<p>The strangler fig pattern modernizes a legacy system incrementally rather than rebuilding it. We isolate a single workflow or system boundary, redesign it as an independent service, and run it alongside the existing system. Each new component is self-contained, observable, and validated before moving further. Over time the legacy system's role narrows as new services take on more responsibility, and older parts are phased out naturally – no big-bang rewrite, no extended freeze on the business.</p>`,
      },
      {
        q: "Can we modernize without operational downtime?",
        a: `<p>Yes. Changes are introduced through phased releases, parallel environments, and controlled traffic routing. Components are updated incrementally, allowing new and existing logic to operate side by side while behavior is continuously observed and validated. Each release includes predefined rollback paths and recovery procedures, validated before deployment so the system state stays consistent throughout the transition.</p>`,
      },
      {
        q: "Rehost, refactor, replatform, rearchitect, or rebuild – which do we need?",
        a: `<p>It depends on the system's structural health, the business outcome you need, and your AI roadmap. Rehost (lift-and-shift to cloud) is fastest but carries the technical debt forward. Refactor improves internal structure without changing behavior. Replatform moves to a modern runtime with limited changes. Rearchitect restructures the system into API-first services suitable for AI integration. Rebuild starts fresh when the existing codebase is unrecoverable. Our assessment phase produces a decision matrix that shows the cost, risk, and AI-readiness of each strategy for your specific system.</p>`,
      },
      {
        q: `What is "AI-ready modernization" and how is it different from "lift and shift"?`,
        a: `<p>"Lift and shift" moves your old, inefficient code from a local server to the cloud and leaves technical debt unchanged. "AI-ready modernization" refactors the code into API-first microservices, allowing your system to securely transmit data payloads to AI orchestration layers such as LangChain or LlamaIndex without latency or security issues.</p>`,
      },
      {
        q: "How do you modernize undocumented legacy code or systems in outdated languages (COBOL, Delphi)?",
        a: `<p>We use a combination of static code analysis and AI-assisted context mapping. We deploy secure LLMs to analyze your legacy codebase, reverse-engineer the undocumented business logic, and generate comprehensive architectural diagrams. We then use AI-assisted code refactoring – fine-tuned large language models read your legacy codebase (like COBOL, Delphi, or early Java), map the undocumented business rules, and translate the logic into modern, secure frameworks (like Node.js or modern Java/Python). Our architects validate and optimize the new codebase, and on engagements with strong data quality we have seen modernization timelines reduced significantly compared to manual line-by-line translation.</p>`,
      },
      {
        q: "How do you safely connect an AI copilot to a fragile legacy SQL database?",
        a: `<p>We never connect an LLM directly to a legacy transactional database, as heavy AI querying will cause the system to crash. We build a secure read-replica architecture. We sync your legacy database to a modern, decoupled vector database. The AI queries the vector database, keeping your core legacy system stable and secure.</p>`,
      },
      {
        q: "Do we need to migrate legacy on-prem to cloud before integrating AI?",
        a: `<p>Not necessarily. While cloud migration (AWS/Azure) offers the best scalability, highly regulated industries (defense, healthcare) cannot move data to the public cloud. We can modernize your on-premise architecture by containerizing your legacy app (Docker/Kubernetes) and deploying locally hosted, quantized small language models (SLMs) directly onto your private servers.</p>`,
      },
    ],
  },
  {
    id: 7,
    tab: "IoT / AIoT",
    title: "IoT / AIoT",
    questions: [
      {
        q: "What is AIoT and how is it different from traditional IoT?",
        a: `<p>Traditional IoT collects sensor data and routes it to dashboards for human interpretation. AIoT combines IoT with embedded AI – predictive maintenance, anomaly detection, automated decision-making – so the system can react in real time without waiting for a person to look at a chart. Edge AI runs models close to the device for low-latency response, and the cloud layer handles training, retraining, and cross-fleet analytics. The result is a proactive, intelligent system rather than a reactive monitoring tool.</p>`,
      },
      {
        q: "Should we go edge computing or cloud for our IoT deployment?",
        a: `<p>Most asset-heavy deployments are hybrid. Edge handles latency-sensitive logic, offline operation, and bandwidth control – process telemetry close to the source, run lightweight inference, and only push events and aggregated signals upstream. Cloud handles training, fleet-wide analytics, long-term storage, and orchestration. The split depends on connectivity reliability, latency requirements, and the payback math on edge hardware. We typically validate the architecture against your specific deployment profile during discovery before committing to a topology.</p>`,
      },
      {
        q: "How do you connect LLMs to live IoT telemetry without unreliable answers?",
        a: `<p>We do not let an LLM infer answers from raw sensor streams alone. First, telemetry is filtered, structured, validated, and mapped to trusted records, time-series storage, asset metadata, and operational context. Then we place retrieval and validation layers between the model and the data source, so each answer remains tied to system facts rather than relying solely on pattern matching.</p>`,
      },
      {
        q: "How do you run ML models on low-power IoT devices?",
        a: `<p>We adapt models for constrained environments through compression and quantization. The final model may run on a gateway or a more capable embedded device, depending on memory limits, power budget, response-time targets, and available compute resources.</p>`,
      },
      {
        q: "What happens if the IoT site loses internet connectivity?",
        a: `<p>Critical logic can continue running locally. We design offline-capable architectures in which edge or gateway components keep processing telemetry and applying local rules even when cloud access is unavailable. Once connectivity returns, buffered data syncs upstream.</p>`,
      },
      {
        q: "How do you integrate IoT into existing ERP / SCADA / MES?",
        a: `<p>Integration with existing enterprise systems, such as ERP or CRM, is achieved through <strong>APIs, middleware, or custom integration services,</strong> ensuring seamless connectivity and data flow between IoT solutions and these systems.</p>
<p>This approach creates a data pipeline that collects, filters and transforms information from IoT devices into a format compatible with your core business software. For example, sensor data indicating a machine needs service can automatically trigger a maintenance ticket in your ERP system. For brownfield environments, we add gateway integration and protocol translation (Modbus, RS-232, Siemens, Fanuc) so legacy equipment participates without being replaced.</p>
<p>The goal is to seamlessly enrich your enterprise workflows with real-time operational data, automating processes as well as enabling smarter decision-making.</p>`,
      },
      {
        q: "Can AIoT work with legacy industrial equipment?",
        a: `<p>Yes. In many projects, replacing the equipment is not the first step. We connect legacy assets through gateways and protocol translation layers, then normalize their data into a modern software stack. This allows older machines to take part in monitoring, prediction, automation, and alerting flows.</p>`,
      },
      {
        q: "Will cloud processing make high-frequency IoT too expensive?",
        a: `<p>Not if the architecture filters data before it reaches the cloud. High-frequency telemetry should not be pushed upstream raw. We design edge pipelines that filter noise, normalize, compress, and process data at the edge – only events that matter, state changes, aggregated summaries, and system signals move to the cloud. This reduces cloud traffic, storage load, and latency, and keeps operational cost predictable as fleets scale.</p>`,
      },
      {
        q: "How do you protect the IoT system from spoofed devices and false telemetry?",
        a: `<p>We build device trust into the architecture. Every device or gateway authenticates with a unique identity, typically backed by certificate-based authentication; communication is signed and encrypted in transit; and ingestion layers enforce trust rules so the platform only accepts data from authenticated, registered devices. Suspicious or unsigned telemetry is rejected or quarantined for review rather than entering the analytics pipeline.</p>`,
      },
    ],
  },
  {
    id: 8,
    tab: "IP, legal & compliance",
    title: "IP, legal & compliance",
    questions: [
      {
        q: "Who owns the source code and IP after the project is done?",
        a: `<p>You do. 100%. Our agreement is a work-for-hire: all intellectual property, source code, and documentation created for your project are your exclusive property, transferred upon project completion and full payment. This explicitly extends to AI artifacts – prompts, fine-tuned models, embeddings, vector indexes, and evaluation datasets – created during the engagement. The transfer is clearly stated in the Agreement we sign before the project kickoff.</p>`,
      },
      {
        q: "Will you sign an NDA before we share project details?",
        a: `<p>Yes, we encourage our Clients to sign an <strong>NDA</strong> even before the project discussion. Also, an NDA clause is a must in our Master Agreement. All of our employees have strict confidentiality clauses in their contracts, so confidentiality is enforced at both the company level and within the delivery team.</p>`,
      },
      {
        q: "What security certifications does Nexterse hold, and how do they apply to AI engagements?",
        a: `<p>We hold ISO 27001 (information security management) and ISO 9001 (quality management) certifications. Our delivery processes – including AI engagements under the ADLC – operate under these certified processes: documented access controls, audit trails, incident response, secure coding standards, and continuous internal auditing. We can share scope documentation and certificate details during procurement review.</p>`,
      },
      {
        q: "How do you ensure compliance with GDPR, HIPAA, and the EU AI Act?",
        a: `<p>We build compliance into the architecture from day one through Privacy by Design, conduct regular compliance audits, and implement policies that meet specific legal requirements. For HIPAA, compliance follows a shared-responsibility model – we engineer the application layer (encryption, access controls, audit trails, BAA-friendly deployments), while you and your cloud/model providers own the underlying infrastructure obligations. Our delivery processes align with ISO 27001 standards and support regulatory frameworks such as GDPR and the EU AI Act where applicable, with documentation, audit trails, and model lifecycle transparency incorporated into the development process.</p>`,
      },
      {
        q: "Can the software be audited by external parties?",
        a: `<p>Yes, we welcome audits by external parties to ensure compliance and quality standards are met, facilitating transparent evaluations at your request. Engineering you can audit is part of how we operate, not a special arrangement.</p>`,
      },
      {
        q: "How is my IP legally protected when developers are in Poland but I contract with your US entity?",
        a: `<p>You contract directly with our US entity, which means your contract is governed effectively by US law. To bridge the gap, our US entity has strict, legally binding invention assignment agreements with every developer in Poland. Furthermore, Poland is part of the EU, which has some of the strictest IP and data protection laws in the world (GDPR), closely aligned with US standards. You have a double layer of protection: the US contract you sign, and the EU legal framework that governs our employees.</p>`,
      },
    ],
  },
  {
    id: 9,
    tab: "Industries & references",
    title: "Industries & references",
    questions: [
      {
        q: "Which industries do you have the deepest AI and IoT experience in?",
        a: `<p>We have delivered software across 20+ industries; our deepest AI and IoT experience is in:</p>
<ul>
<li><strong>Healthcare</strong> – clinical platforms, patient portals, IoT-enabled monitoring, HIPAA-aware AI assistants for clinical documentation and trial matching.</li>
<li><strong>Fintech and insurance</strong> – secure platforms with governed AI for underwriting support, regulatory document retrieval, fraud analytics, and policy summarization.</li>
<li><strong>Manufacturing and energy</strong> – IoT and predictive maintenance platforms with AI for sensor analysis and anomaly detection in industrial environments.</li>
<li><strong>Logistics and transportation</strong> – TMS and supply chain platforms with AI-driven forecasting, document retrieval, and ERP-integrated agents.</li>
<li><strong>Retail and ecommerce</strong> – commerce platforms with AI-powered forecasting, customer service automation, and behavioral analytics.</li>
<li><strong>Education, professional services, engineering &amp; construction, marketing</strong> – additional verticals with specific AI and platform engagements.</li>
</ul>
<p>We can share case studies in your vertical during discovery.</p>`,
      },
      {
        q: "Can we talk to a reference Client – including a project that didn't go to plan?",
        a: `<p>Yes. We can introduce you to past Clients with similar scope, industry, or challenges, subject to their confidentiality preferences. We are also willing to share lessons from engagements that didn't go to plan – what we learned, what changed in our process. Honest references are more useful to you than curated ones, and they tend to be more useful to us too.</p>`,
      },
      {
        q: "Can you rescue a project that another vendor failed to deliver?",
        a: `<p>Yes, and we approach rescues with a technical audit before any commitment. Our senior architects review the existing codebase, infrastructure, and documentation to assess what is salvageable. If the foundation is solid, we keep it and fix the issues. If the code is fundamentally broken or insecure, we are honest that rebuilding is cheaper than patching. Either way, you receive a written assessment with options, effort estimates, and trade-offs so you can decide with data.</p>`,
      },
      {
        q: "How do you ensure modernization doesn't just replicate the flaws of the old system?",
        a: `<p>We start with discovery, not coding. Our Business Analysts and UX/UI designers interview you about what's missing, not just what's there, and challenge current assumptions before we propose an architecture. The old system is treated as a reference for what to keep and what to replace. We map user flows that fit your business goals today – not the ones that fit five years ago – so the modernized version is a true upgrade rather than a re-implementation of the same constraints.</p>`,
      },
    ],
  },
];
