// PLACEHOLDER CONTENT: copied verbatim from the SumatoSoft reference article for
// template-replication purposes only. Must be rewritten with our own article
// content before this page goes live.

const fadeUp = { "data-animate": "fade-up" } as const;

export default function ArticleBody() {
  return (
    <>
      <h2 {...fadeUp} id="h-tl-dr">
        TL;DR
      </h2>
      <ul {...fadeUp}>
        <li>
          <strong>Most &ldquo;AI legacy modernization&rdquo; lists describe the wrong thing.</strong>{" "}They mean using AI
          to <em>rewrite old code</em>. The harder, more valuable job is <em>embedding AI into the system that&rsquo;s
          still running</em>. Far fewer firms actually do it.
        </li>
        <li>
          <strong>The business case is not subtle.</strong>{" "}The US federal government alone spent about{" "}
          <a href="https://www.gao.gov/products/gao-25-107795" target="_blank" rel="noreferrer noopener nofollow">
            $83 billion — 79% of its 2025 IT budget
          </a>{" "}
          just keeping existing systems running (GAO). And roughly 5% of enterprise AI pilots reach real value (MIT).
        </li>
        <li>
          <strong>The market is loud and low-trust.</strong>{" "}Almost every &ldquo;top modernization companies&rdquo; list
          is published by a vendor that ranks itself first, with no disclosed method. We did the opposite below.
        </li>
        <li>
          <strong>This list is grouped by fit, not ranked to flatter anyone.</strong>{" "}You get a transparent weighted
          scorecard, an honest caveat on every firm (including ours), and a section on how to vet a partner yourself.
        </li>
        <li>
          <strong>Match the firm to the job:</strong> mid-market AI-plus-legacy specialists for focused,
          business-critical modernization; global system integrators for eight-figure, multi-year programs.
        </li>
      </ul>

      <hr />

      <p {...fadeUp}>
        <strong>AI legacy modernization</strong>{" "}means adding modern AI capability, such as machine learning, LLMs,
        retrieval, or agents, to an existing production system rather than rewriting it from scratch. It&rsquo;s
        distinct from AI-assisted code migration, which uses AI tools to help <em>rewrite</em>{" "}legacy code. This guide
        is about the former: extending the value of systems you can&rsquo;t switch off.
      </p>

      <h2 {...fadeUp} id="h-why-this-is-worth-getting-right">
        Why this is worth getting right
      </h2>
      <p {...fadeUp}>
        First, the scale. Legacy systems are where most IT money already goes. The US Government Accountability
        Office found that about{" "}
        <a href="https://www.gao.gov/products/gao-25-107795" target="_blank" rel="noreferrer noopener nofollow">
          $83 billion — 79% of planned 2025 IT spending
        </a>{" "}
        across the major federal agencies went to operating and maintaining existing systems. And only three of ten
        critical systems flagged for modernization back in 2019 had been modernized by early 2025. Private industry
        isn&rsquo;t far off. McKinsey has estimated that{" "}
        <a
          href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/tech-debt-reclaiming-tech-equity"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          technical debt amounts to 20–40% of the value of an entire technology estate
        </a>{" "}
        before depreciation. On top of that, companies pay an extra 10–20% on new projects just to work around it.
      </p>
      <p {...fadeUp}>
        Meanwhile, the AI most firms want to add keeps stalling — and it usually stalls at the seam with old systems.
        MIT&rsquo;s 2025 research found that only about 5% of integrated AI pilots were extracting real value. But the
        rest showed no measurable impact on the bottom line. Deloitte reported that nearly 60% of AI leaders name
        legacy integration, plus risk and compliance, as their primary obstacle to adopting agentic AI. The pattern
        behind our own line to clients: the reason your ML pilot failed usually isn&rsquo;t the model. It&rsquo;s that
        the model was never wired into the system where the work actually happens.
      </p>
      <p {...fadeUp}>That&rsquo;s the job this list is about — and the reason the distinction below matters more than any ranking.</p>

      <h2 {...fadeUp} id="h-the-distinction-most-lists-blur-enablement-vs-migration">
        The distinction most lists blur: enablement vs migration
      </h2>
      <p {...fadeUp}>
        Search &ldquo;AI legacy modernization&rdquo; and most results describe <strong>AI-assisted code migration</strong>.
        That means using AI to translate COBOL to Java, generate tests, or map undocumented dependencies. That&rsquo;s
        real and useful, and the big platforms (Deloitte&rsquo;s innoWake, SoftServe&rsquo;s agentic modernization, and
        others) do it well.
      </p>
      <p {...fadeUp}>
        But it&rsquo;s not the same as <strong>AI enablement of a legacy system</strong>. That means adding an ML
        model, an LLM assistant, retrieval over your own documents, or an agent <em>into</em> the aging ERP, mainframe,
        or monolith, so it does more than it did before. One rewrites the old thing faster; the other makes the old
        thing smarter without ripping it out. The firms that can do the second are rarer. It demands both AI
        engineering and deep legacy-integration skill in the same team. Keep the distinction in mind as you read. In
        practice, a vendor strong at code migration is not automatically strong at enablement, and vice versa.
      </p>

      <h2 {...fadeUp} id="h-how-we-evaluated-these-companies">
        How we evaluated these companies
      </h2>
      <p {...fadeUp}>
        No ranking is worth much without a disclosed method, so here&rsquo;s ours. We scored firms against eight
        weighted criteria, modeled on the transparency of the Forrester Wave and Clutch&rsquo;s review-based approach.
        Importantly, each is built for the AI-plus-legacy problem rather than generic development.
      </p>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Criterion</th>
            <th>Weight</th>
            <th>What a strong signal looks like</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Proven legacy + AI integration track record</td>
            <td>20%</td>
            <td>Named case studies embedding ML/LLM/RAG/agents into aging systems, with before/after metrics</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Technical depth in ML/GenAI</td>
            <td>15%</td>
            <td>In-house data scientists and engineers; RAG, orchestration, MLOps — not subcontracted</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Integration expertise with legacy stacks</td>
            <td>15%</td>
            <td>COBOL, VB6, .NET Framework, mainframe connectors, API modernization, strangler-fig patterns</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Data &amp; security certifications</td>
            <td>15%</td>
            <td>Current, verifiable ISO 27001, SOC 2, ISO 9001</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Regulatory competence</td>
            <td>10%</td>
            <td>GDPR, EU AI Act, HIPAA, PCI DSS processes with audit trails</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Industry experience</td>
            <td>10%</td>
            <td>Named references in your vertical</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Transparency &amp; independent reviews</td>
            <td>10%</td>
            <td>Verified Clutch/GoodFirms reviews; willingness to say no</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Post-launch / MLOps support</td>
            <td>5%</td>
            <td>Model monitoring, cost governance, human-in-the-loop review</td>
          </tr>
        </tbody>
      </table>

      <p {...fadeUp}>
        A note on evidence. Clutch and GoodFirms ratings, team sizes, and even founding years shift over time, and
        sometimes conflict between sources. So treat the figures in each entry as a starting point, and confirm the
        current numbers on each firm&rsquo;s live profile before you shortlist. Where sources disagreed, we&rsquo;ve
        said so.
      </p>

      <h2 {...fadeUp} id="h-the-companies-grouped-by-fit">
        The companies, grouped by fit
      </h2>
      <p {...fadeUp}>
        We&rsquo;ve grouped rather than ranked. A numbered list on our own blog, with us at the top, wouldn&rsquo;t
        earn your trust. So two groups follow. So the first is mid-market specialists who embed AI into
        business-critical systems; the second is global integrators for the largest programs.
      </p>

      <h3 {...fadeUp} id="h-group-1-mid-market-ai-legacy-specialists">
        Group 1 — Mid-market AI + legacy specialists
      </h3>
      <p {...fadeUp}>
        These firms fit focused, business-critical modernization. Picture an aging system that runs real operations, a
        defined budget, and a need for both AI and integration skill in one team.
      </p>

      <h4 {...fadeUp}>SumatoSoft</h4>
      <p {...fadeUp}>
        <em>Full disclosure: this is our blog, and we&rsquo;re holding our own entry to the same criteria and caveats
        as everyone else.</em>
      </p>
      <ul {...fadeUp}>
        <li>
          <strong>Founded:</strong> 2012
        </li>
        <li>
          <strong>HQ:</strong> Boston, MA (US) + Warsaw R&amp;D
        </li>
        <li>
          <strong>Team:</strong> 50–249
        </li>
        <li>
          <strong>Rate:</strong> $50–99/hr
        </li>
        <li>
          <strong>Reviews:</strong> Clutch 4.8; GoodFirms 5.0
        </li>
        <li>
          <strong>Best for:</strong> mid-market manufacturing, logistics, and data-heavy businesses adding governed AI
          to existing systems.
        </li>
        <li>
          <strong>Why here:</strong> ISO 27001 and ISO 9001 certified, with a proprietary{" "}
          <a href="https://sumatosoft.com/adlc-agentic-software-development-lifecycle" target="_blank" rel="noreferrer noopener">
            Agentic Development Lifecycle (ADLC)
          </a>{" "}
          for governed AI. For example, a documented manufacturer case —{" "}
          <a
            href="https://sumatosoft.com/portfolio/ai-powered-predictive-maintenance-for-a-large-industrial-manufacturer"
            target="_blank"
            rel="noreferrer noopener"
          >
            predictive maintenance on an existing platform
          </a>{" "}
          — improved early fault detection 35%, cut downtime roughly 50%, and returned 2.5× in eight months. A
          third-party-verified NLP chatbot automated 90% of queries.
        </li>
        <li>
          <strong>Caveat:</strong> a 50–249 team is built for focused, mid-market programs, not eight-figure
          multi-year transformations. Team size is published only as a range, and third-party directory listings show
          the HQ inconsistently.
        </li>
      </ul>

      <h4 {...fadeUp}>DICEUS</h4>
      <ul {...fadeUp}>
        <li>
          <strong>Founded:</strong> 2011
        </li>
        <li>
          <strong>HQ:</strong> Wilmington, DE (US), with EU delivery in Poland and Lithuania
        </li>
        <li>
          <strong>Team:</strong> ~200–250
        </li>
        <li>
          <strong>Reviews:</strong> Clutch 4.9 (49 reviews)
        </li>
        <li>
          <strong>Best for:</strong> insurers and banks modernizing core policy, claims, underwriting, or banking
          systems, where domain and regulatory depth matter as much as engineering.
        </li>
        <li>
          <strong>Why here:</strong> deep insurance/financial-services specialization (Solvency II, IFRS 17);
          documented core-platform work, including cutting product-change time from 8–16 weeks to a few days.
        </li>
        <li>
          <strong>Caveat:</strong> that specialization is also the limit — outside insurance and financial services
          it&rsquo;s less of a fit, and a ~200–250 team caps very-large-enterprise capacity. HQ is listed
          inconsistently across sources.
        </li>
      </ul>

      <h4 {...fadeUp}>Devox Software</h4>
      <ul {...fadeUp}>
        <li>
          <strong>Founded:</strong> 2018
        </li>
        <li>
          <strong>HQ:</strong> Lviv, Ukraine, with US presence
        </li>
        <li>
          <strong>Team:</strong> 100+
        </li>
        <li>
          <strong>Rate:</strong> $50–99/hr
        </li>
        <li>
          <strong>Reviews:</strong> Clutch 5.0 (43 reviews)
        </li>
        <li>
          <strong>Best for:</strong> mid-market fintech and operations-heavy businesses wanting phased, zero-downtime
          modernization with ISO-certified security.
        </li>
        <li>
          <strong>Why here:</strong> ISO 9001 and ISO/IEC 27001; a documented zero-downtime methodology (incremental
          module extraction, blue-green deploys) and AI-assisted refactoring; long client relationships.
        </li>
        <li>
          <strong>Caveat:</strong> founded more recently, so a smaller reference pool for very large regulated
          environments; clients have noted time-zone friction.
        </li>
      </ul>

      <h4 {...fadeUp}>ModLogix (a branch of Langate)</h4>
      <ul {...fadeUp}>
        <li>
          <strong>Founded:</strong> 2014
        </li>
        <li>
          <strong>HQ:</strong> New York City
        </li>
        <li>
          <strong>Team:</strong> ~50
        </li>
        <li>
          <strong>Rate:</strong> $25–49/hr
        </li>
        <li>
          <strong>Reviews:</strong> Clutch 4-star-range but only 3 reviews
        </li>
        <li>
          <strong>Best for:</strong> organizations on Visual Basic 6, Visual FoxPro, .NET Framework, or MS Access that
          need a genuine specialist rather than a generalist.
        </li>
        <li>
          <strong>Why here:</strong> Microsoft Gold partner with rare depth in exactly the aging Microsoft stacks most
          generalists avoid; documented gradual .NET Core migrations with cost reductions.
        </li>
        <li>
          <strong>Caveat:</strong> only about three third-party reviews, so thin independent validation; a narrow
          stack focus and small team mean limited capacity outside its niche.
        </li>
      </ul>

      <h4 {...fadeUp}>Innowise</h4>
      <ul {...fadeUp}>
        <li>
          <strong>Founded:</strong> 2007
        </li>
        <li>
          <strong>HQ:</strong> Warsaw, Poland (global delivery)
        </li>
        <li>
          <strong>Team:</strong> 1,000+
        </li>
        <li>
          <strong>Reviews:</strong> verify current Clutch profile
        </li>
        <li>
          <strong>Best for:</strong> larger, multi-technology modernization programs needing scale across ERP, cloud,
          data, and AI.
        </li>
        <li>
          <strong>Why here:</strong> ISO 9001, ISO 27001, and ISO 13485; broad engineering bench and a high
          repeat-client rate; capacity to staff sizable programs.
        </li>
        <li>
          <strong>Caveat:</strong> breadth over specialization — a large generalist rather than an AI-legacy boutique,
          and larger than a focused mid-market buyer usually needs.
        </li>
      </ul>

      <h3 {...fadeUp} id="h-group-2-global-system-integrators-for-the-largest-programs">
        Group 2 — Global system integrators (for the largest programs)
      </h3>
      <p {...fadeUp}>
        When the program is eight figures, multi-year, and spans dozens of interconnected systems, the calculus
        changes. These firms bring scale, methodology, and regulated-industry track records that mid-market
        specialists can&rsquo;t match — at a price and pace to match.
      </p>
      <p {...fadeUp}>
        <strong>Accenture, Deloitte, EPAM, N-iX, SoftServe</strong> and their peers (IBM, Infosys, TCS, Cognizant,
        Capgemini) lead the enterprise application-modernization market. Deloitte embeds generative and agentic AI
        across its lifecycle and runs the innoWake platform for automated legacy-language conversion. SoftServe&rsquo;s
        agentic modernization claims to cut modernization effort substantially. EPAM (NYSE: EPAM, ~55 countries) pairs
        app modernization with AI/ML on Azure.
      </p>
      <p {...fadeUp}>
        <strong>Best for:</strong> Fortune 500-scale transformation with the budget and governance to match.
      </p>
      <p {...fadeUp}>
        <strong>Caveat:</strong> explicitly <em>not</em> built for smaller companies or tight budgets — as the big
        SIs&rsquo; own marketing says. If your program is focused rather than sprawling, a mid-market specialist will
        usually be faster and closer to the work. (Figures for this group are directional; confirm current size,
        revenue, and ratings on each firm&rsquo;s own pages.)
      </p>

      <h2 {...fadeUp} id="h-how-to-vet-a-modernization-partner-yourself">
        How to vet a modernization partner yourself
      </h2>
      <p {...fadeUp}>
        Still, the list is a starting point; the shortlist is yours to test. Five questions separate firms that
        modernize in production from firms that added &ldquo;modernization&rdquo; to a services page:
      </p>
      <ol {...fadeUp}>
        <li>
          <strong>&ldquo;Show me a legacy system you added AI to — not one you rewrote.&rdquo;</strong> Ask for the
          system type, the integration problem, and a measured outcome. Enablement experience sounds different from
          migration experience.
        </li>
        <li>
          <strong>&ldquo;How do you keep our system running during the work?&rdquo;</strong> Strong answers volunteer
          phased rollouts, parallel running, rollback plans, and automated behavior-parity testing. A vendor who only
          discusses the end state is a risk.
        </li>
        <li>
          <strong>&ldquo;Who&rsquo;s on the team — data scientists and integration engineers both?&rdquo;</strong> The
          failure mode is a model that never connects to the legacy data. You want both skills in one team, not AI
          subcontracted.
        </li>
        <li>
          <strong>&ldquo;What certifications and compliance processes do you hold?&rdquo;</strong> ISO 27001, SOC 2,
          and — for regulated systems — GDPR, HIPAA, or EU AI Act processes. Legacy data migration creates short-term
          exposure; uncertified is a hard no for regulated buyers.
        </li>
        <li>
          <strong>&ldquo;What happens after launch?&rdquo;</strong> AI drifts and token costs balloon. Look for
          monitoring, cost governance, and human-in-the-loop review, not a hand-off.
        </li>
      </ol>
      <p {...fadeUp}>
        For a deeper version of this interview, our{" "}
        <a href="https://sumatosoft.com/blog/questions-to-ask-ai-development-company" target="_blank" rel="noreferrer noopener">
          questions to ask an AI development company
        </a>{" "}
        covers the full vetting script.
      </p>

      <h2 {...fadeUp} id="h-when-not-to-modernize-and-when-to-pick-a-big-si-instead">
        When <em>not</em> to modernize — and when to pick a big SI instead
      </h2>
      <p {...fadeUp}>Two honest counterpoints most lists skip.</p>
      <p {...fadeUp}>
        <strong>Sometimes you shouldn&rsquo;t modernize yet.</strong> If a system is stable, cheap to run, and not
        blocking anything, &ldquo;leave it alone&rdquo; is a valid answer. Adding an AI layer to a system nobody needs
        to change is spending for its own sake. The trigger for action is a system that&rsquo;s <em>blocking</em>{" "}
        something. Specifically, that means growth, integration, compliance, or an AI capability you can prove is
        worth it. We&rsquo;d rather tell you that than sell an unfeasible project.
      </p>
      <p {...fadeUp}>
        <strong>Sometimes a global integrator is the right call, not a firm like us.</strong> Say the program is eight
        figures, spans dozens of systems, and needs hundreds of people under one governance model. Then a large SI is
        built for that, and a mid-market specialist isn&rsquo;t. The reverse is also true. For a focused,
        business-critical modernization with a defined budget, a specialist is usually faster, cheaper, and closer to
        your system. Match the firm to the shape of the work.
      </p>

      <h2 {...fadeUp} id="h-how-we-approach-it-at-sumatosoft">
        How we approach it at SumatoSoft
      </h2>
      <p {...fadeUp}>
        Since this is our blog, here&rsquo;s our answer to our own criteria, briefly. We at SumatoSoft{" "}
        <a href="https://sumatosoft.com/services/legacy-software-modernization" target="_blank" rel="noreferrer noopener">
          modernize legacy systems into API-first architectures
        </a>{" "}
        that can support AI. Then we{" "}
        <a href="https://sumatosoft.com/services/ai-integration" target="_blank" rel="noreferrer noopener">
          add the AI itself
        </a>{" "}
        — governed, monitored, and wired into your data rather than bolted alongside it. Our{" "}
        <a href="https://sumatosoft.com/services/ai-software-development" target="_blank" rel="noreferrer noopener">
          AI development
        </a>{" "}
        runs under ADLC, with readiness assessment as a gate. Our own{" "}
        <a href="https://sumatosoft.com/blog/research-business-ai-readiness" target="_blank" rel="noreferrer noopener">
          readiness research
        </a>{" "}
        shows most AI stalls on data and integration foundations, not models. That&rsquo;s 350+ products over 14+
        years across 25+ countries, ISO 27001- and ISO 9001-certified, with a 98% satisfaction rate. Have an aging
        system you want to make smarter without switching it off?{" "}
        <a href="https://sumatosoft.com/contacts" target="_blank" rel="noreferrer noopener">
          Talk to us
        </a>{" "}
        — and if we think you shouldn&rsquo;t modernize it, we&rsquo;ll say so.
      </p>

      <h2 {...fadeUp} id="h-frequently-asked-questions">
        Frequently asked questions
      </h2>

      <h3 {...fadeUp}>What is AI legacy modernization?</h3>
      <p {...fadeUp}>
        It&rsquo;s adding modern AI capability — machine learning, LLMs, retrieval, or agents — to an existing
        production system, so it does more than before without a full rewrite. It differs from AI-assisted code
        migration, which uses AI tools to help rewrite legacy code. One extends a running system; the other replaces
        old code faster.
      </p>

      <h3 {...fadeUp}>Which company is best for AI legacy modernization?</h3>
      <p {...fadeUp}>
        There&rsquo;s no single best — it depends on the shape of the work. Mid-market specialists (such as
        SumatoSoft, DICEUS, or Devox) fit focused, business-critical modernization with defined budgets, while global
        integrators (Accenture, Deloitte, EPAM) fit eight-figure, multi-year programs. Match the firm to your
        system&rsquo;s size, industry, and budget rather than to a ranking.
      </p>

      <h3 {...fadeUp}>How much does legacy modernization cost?</h3>
      <p {...fadeUp}>
        It varies widely by scope and stack. Mid-market specialists commonly bill $25–99 per hour with project
        minimums from roughly $10,000–50,000, while global integrators run large fixed programs. The bigger cost
        driver is usually approach: phased modernization of a running system versus a full rewrite. Insist on a
        scoped assessment before committing.
      </p>

      <h3 {...fadeUp}>Is it better to modernize a legacy system or replace it?</h3>
      <p {...fadeUp}>
        Often modernizing is lower-risk, because a rewrite of a system that runs your operations can fail
        catastrophically. Adding an AI or API layer to a stable system extends its life at a fraction of the risk.
        Replacement makes sense when the system is genuinely blocking growth, integration, or compliance and
        can&rsquo;t be extended.
      </p>

      <h3 {...fadeUp}>What&rsquo;s the difference between AI legacy modernization and AI code migration?</h3>
      <p {...fadeUp}>
        AI code migration uses AI to help rewrite or translate legacy code — for example, COBOL to Java — faster. AI
        legacy modernization embeds AI capability into the existing system to make it smarter. Most &ldquo;AI
        modernization&rdquo; content means the first; the harder, rarer skill is the second, and a vendor strong at
        one isn&rsquo;t automatically strong at the other.
      </p>

      <h3 {...fadeUp}>How do I choose a legacy modernization company?</h3>
      <p {...fadeUp}>
        Score candidates on proven AI-plus-legacy track record, ML and integration depth in one team, security and
        regulatory certifications, relevant industry references, verified independent reviews, and post-launch
        support. Then interview the shortlist: ask for a system they added AI to (not one they rewrote), how they keep
        systems running during the work, and what happens after launch.
      </p>

      <h2 {...fadeUp} id="h-summary">
        Summary
      </h2>
      <p {...fadeUp}>
        The market for &ldquo;AI legacy modernization&rdquo; is crowded, loud, and mostly self-serving. And it blurs
        the one distinction that matters: rewriting old code with AI is not the same as making an old system smarter
        with AI. Fewer firms do the second, and it&rsquo;s the one that extends the value of systems you can&rsquo;t
        turn off. Match the firm to the work: mid-market specialists for focused, business-critical modernization,
        global integrators for the largest programs. Score them on a real method, and interview the shortlist
        yourself. Be willing to hear that the right answer is to leave a working system alone. That honesty is the
        thing worth hiring for.
      </p>
    </>
  );
}
