"use client";

import { useState } from "react";
import styles from "@/components/home/Faq.module.css";

const faqs = [
  {
    q: "What is Nexterse's software development process?",
    a: "Nexterse's SDLC runs in six sequential phases: Discovery, Design, Development, Testing, Deployment, and Maintenance. Each phase has documented deliverables, defined team roles, and an explicit exit condition – the next phase does not start until the current one is signed off. The process applies to custom software projects of all sizes, from initial builds to ongoing maintenance contracts.",
  },
  {
    q: "How long does each SDLC phase take?",
    a: "Phase durations depend on project scope and complexity. Reference ranges for a mid-size custom software project: Discovery – 2 to 4 weeks; Design – 2 to 6 weeks; Development – 2 to 12 months; Testing – runs in parallel with Development, with final acceptance taking 2 to 4 weeks; Deployment – 1 to 5 days; Maintenance – ongoing. Nexterse provides specific timeline estimates during Project Analysis, before any contract is signed.",
  },
  {
    q: "When does Nexterse use Agile vs. Waterfall?",
    a: "Nexterse uses Scrum or Kanban for projects where requirements evolve, Client involvement is continuous, and scope can adjust between delivery cycles. Waterfall is used for projects with clearly defined and stable requirements, projects requiring formal phase approvals – government contracts, large corporate procurement – and projects with strict compliance requirements. The methodology is selected during Discovery based on the project's documented constraints.",
  },
  {
    q: "What deliverables does Nexterse produce at each phase?",
    a: "Discovery produces the Software Requirements Specification, product backlog, risk register, and project plan. Design produces high-level and low-level design documents and UI/UX specifications. Development produces reviewed and tested code increments and API documentation. Testing produces the QA report and acceptance sign-off. Deployment produces the production release and monitoring report. Maintenance produces bug-fix releases, updates, and periodic health reports.",
  },
  {
    q: "How does Nexterse's SDLC differ from its ADLC?",
    a: "Nexterse's SDLC governs projects where human teams execute structured phases with documented requirements and formal sign-offs. The Agentic Software Development Lifecycle (ADLC) governs projects where AI agents take active roles in planning, code generation, or testing – with different governance frameworks, hallucination controls, and cost-modeling requirements. Most projects run under the SDLC. Projects where AI agents perform significant delivery work are scoped under the ADLC from the outset.",
  },
  {
    q: "Who owns the code after the project is delivered?",
    a: "The Client owns all source code, documentation, and intellectual property produced during the engagement. Full ownership transfers upon delivery and final payment. Nexterse retains no rights to the code or any derivatives. An NDA and IP-ownership clause are standard in every engagement contract.",
    hidden: true,
  },
];

export default function SdlcFaq() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.filter((f) => !f.hidden);

  const toggle = (index: number) => {
    setOpenItems((previous) => {
      const next = new Set(previous);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className={styles.section} id="faq">
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>
          Frequently asked questions about Nexterse&apos;s SDLC
        </h2>
        <div className={styles.cards}>
          {visibleFaqs.map((faq, index) => {
            const isOpen = openItems.has(index);
            return (
              <div key={faq.q} className={`${styles.card} ${isOpen ? styles.active : ""}`}>
                <button
                  className={styles.question}
                  onClick={() => toggle(index)}
                  type="button"
                  aria-expanded={isOpen}
                >
                  <span className={styles.bullet} aria-hidden />
                  <span>{faq.q}</span>
                </button>
                <div className={styles.answer} aria-hidden={!isOpen}>
                  <div className={styles.answerInner}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className={styles.loadMore}>
            <button className={styles.loadMoreLink} onClick={() => setShowAll(true)}>
              Load more <span className={styles.loadMoreArrow} aria-hidden />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
