"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import styles from "./PricingQuiz.module.css";

const OPTIONS = [
  { id: "ai-readiness", label: "Take AI readiness assessment" },
  { id: "custom-quote", label: "Get a quote for custom software development" },
];

const AI_STEPS = [
  {
    type: "choice",
    question: "What is the primary business problem you are trying to solve right now?",
    options: [
      "We need a reliable, highly secure core software platform (e.g., ERP, portal, or mobile app). (Score: 0)",
      "We need to unlock our internal knowledge and make our documents instantly searchable. (Score: 2)",
      "We want to automate complex, multi-step workflows that currently require human reasoning. (Score: 3)",
      "We aren't sure yet; we just know we need to explore AI before our competitors do. (Score: 1)",
    ],
  },
  {
    type: "choice",
    question: "AI is only as smart as the data it accesses. How would you describe the current state of your proprietary data?",
    options: [
      "Highly centralized, clean, and easily accessible via modern APIs or cloud databases. (Score: 3)",
      "Mostly digitized, but siloed across several different SaaS tools and legacy systems. (Score: 2)",
      "Fragmented, unstructured, highly manual, or trapped in legacy on-premise servers. (Score: 0)",
    ],
  },
  {
    type: "choice",
    question: "What level of security and regulatory compliance does your industry require?",
    options: [
      "Extremely strict (HIPAA, SOC2, FinServ). Data cannot ever leave our private environment. (Score: 3)",
      "Standard corporate privacy. We want to protect IP, but aren't heavily regulated. (Score: 2)",
      "Low risk. We are mostly dealing with public or non-sensitive data. (Score: 1)",
    ],
  },
  {
    type: "choice",
    question: "Where does your primary technology stack currently live?",
    options: [
      "Fully cloud-native (AWS, Azure, GCP). (Score: 3)",
      "A mix of cloud and off-the-shelf SaaS applications. (Score: 2)",
      "Heavily reliant on legacy, on-premise architecture. (Score: 0)",
    ],
  },
  {
    type: "choice",
    question: "How does your leadership team view the financial investment into new technology?",
    options: [
      "We need guaranteed, deterministic outcomes and exact budgets before starting. (Score: 0)",
      "We are willing to fund a short, structured Proof of Concept to calculate ROI before scaling. (Score: 3)",
      "We want immediate, plug-and-play AI features without custom engineering. (Score: 1)",
    ],
  },
  { type: "input", field: "name", placeholder: "Your name" },
  { type: "input", field: "email", placeholder: "Your email" },
] as const;

const CUSTOM_STEPS = [
  {
    kind: "radio",
    question: "What is the stage of your software development?",
    options: ["An idea", "A ready functional specification", "An MVP", "Active development", "A product in need of improvement/evolution"],
  },
  {
    kind: "checkbox",
    question: "What is your market?",
    options: ["Healthcare", "Banking and finance", "Insurance", "Wholesale/retail/ecommerce", "HoReCa", "Manufacturing", "Transportation", "Public services", "My product is not bound to a particular market"],
    other: true,
  },
  {
    kind: "checkbox",
    question: "What service(s) do you need?",
    options: ["Product planning", "UX research and design", "UI design", "Product architecture design/consulting", "Product software development", "Team augmentation", "API development", "Testing and QA"],
    other: true,
  },
  {
    kind: "checkbox",
    question: "Which platforms does your app need to support?",
    options: ["Web", "Mobile", "Desktop"],
    other: true,
  },
  {
    kind: "textarea",
    question: "What is the idea behind your product?",
    placeholder: "Please describe briefly",
  },
  {
    kind: "radio",
    question: "Does your product require any advanced techs?",
    options: ["AI / ML", "Blockchain", "Virtual reality", "Augmented reality"],
    other: true,
  },
  {
    kind: "radio",
    question: "Would you require any integrations?",
    options: ["No, I wouldn't"],
    other: true,
  },
  { kind: "organization", question: "Organizational questions" },
  { kind: "contact", question: "Contact Form" },
] as const;

type Flow = "goal" | "ai" | "custom";

function extractScore(option: string) {
  const match = option.match(/\(Score:\s*(\d+)\)/);
  return match ? Number(match[1]) : 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function PricingQuiz() {
  const [selected, setSelected] = useState<string | null>(null);
  const [flow, setFlow] = useState<Flow>("goal");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | string | string[]>>({});
  const [customAnswers, setCustomAnswers] = useState<Record<string, string | string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const isAi = flow === "ai";
  const totalSteps = isAi ? AI_STEPS.length : CUSTOM_STEPS.length;

  const buildAiFields = () => {
    const fields: { label: string; value: string }[] = [];
    let score = 0;
    let maxScore = 0;
    AI_STEPS.forEach((step, i) => {
      if (step.type !== "choice") return;
      const answerIndex = answers[i];
      const optionText = typeof answerIndex === "number" ? step.options[answerIndex] : undefined;
      fields.push({ label: `Q${i + 1}. ${step.question}`, value: optionText ?? "-" });
      if (optionText) score += extractScore(optionText);
      maxScore += Math.max(...step.options.map(extractScore));
    });
    fields.push({ label: "Total score", value: `${score} / ${maxScore}` });
    return fields;
  };

  const buildCustomFields = () => {
    const fields: { label: string; value: string }[] = [];
    CUSTOM_STEPS.forEach((step, i) => {
      const key = `custom-${i}`;
      if (step.kind === "radio") {
        let value = customAnswers[key] as string | undefined;
        if (value === "Other") value = (customAnswers[`${key}-other`] as string | undefined) || "Other";
        fields.push({ label: step.question, value: value || "-" });
      } else if (step.kind === "checkbox") {
        const picked = Array.isArray(customAnswers[key]) ? (customAnswers[key] as string[]) : [];
        const other = customAnswers[`${key}-other`] as string | undefined;
        const combined = [...picked, ...(other ? [other] : [])];
        fields.push({ label: step.question, value: combined.length ? combined.join(", ") : "-" });
      } else if (step.kind === "textarea") {
        fields.push({ label: step.question, value: (customAnswers[key] as string | undefined) || "-" });
      } else if (step.kind === "organization") {
        const priorities = Array.isArray(customAnswers.priorities) ? (customAnswers.priorities as string[]) : [];
        const priorityOther = customAnswers.prioritiesOther as string | undefined;
        const combinedPriorities = [...priorities, ...(priorityOther ? [priorityOther] : [])];
        fields.push({ label: "Company type", value: (customAnswers.companyType as string | undefined) || "-" });
        fields.push({ label: "Deadline", value: (customAnswers.deadline as string | undefined) || "-" });
        fields.push({ label: "Budget", value: (customAnswers.budget as string | undefined) || "-" });
        fields.push({ label: "Top priorities", value: combinedPriorities.length ? combinedPriorities.join(", ") : "-" });
      }
    });
    return fields;
  };

  const submitAi = async () => {
    const name = ((answers[5] as string | undefined) ?? "").trim();
    const email = ((answers[6] as string | undefined) ?? "").trim();
    if (!name || !email) {
      setSubmitError("Please fill in your name and email.");
      return;
    }
    setIsLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formName: "AI readiness assessment", name, email, fields: buildAiFields() }),
      });
      if (!res.ok) throw new Error("Request failed");
      setIsComplete(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const submitCustom = async () => {
    const name = ((customAnswers.contactName as string | undefined) ?? "").trim();
    const email = ((customAnswers.contactEmail as string | undefined) ?? "").trim();
    if (!name || !email) {
      setSubmitError("Please fill in your name and email.");
      return;
    }
    setIsLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formName: "Custom software development cost estimate", name, email, fields: buildCustomFields() }),
      });
      if (!res.ok) throw new Error("Request failed");
      setIsComplete(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoalNext = () => {
    if (!selected) return;
    setFlow(selected === "ai-readiness" ? "ai" : "custom");
    setCurrentStep(0);
    setAnswers({});
    setCustomAnswers({});
    setIsComplete(false);
    setIsLoading(false);
    setSubmitError("");
  };

  const goPrev = () => {
    if (currentStep === 0) {
      setFlow("goal");
      setIsComplete(false);
      setIsLoading(false);
      setSubmitError("");
      return;
    }
    setSubmitError("");
    setCurrentStep((value) => value - 1);
  };

  const getCurrentStepError = () => {
    if (isAi) {
      const step = AI_STEPS[currentStep];
      if (step.type === "choice" && typeof answers[currentStep] !== "number") {
        return "Please select an option to continue.";
      }
      if (step.type === "input") {
        const value = ((answers[currentStep] as string | undefined) ?? "").trim();
        if (!value) return step.field === "email" ? "Please enter your email." : "Please enter your name.";
        if (step.field === "email" && !isValidEmail(value)) return "Please enter a valid email.";
      }
      return "";
    }

    const step = CUSTOM_STEPS[currentStep];
    const key = `custom-${currentStep}`;
    if (step.kind === "radio") {
      const value = (customAnswers[key] as string | undefined) ?? "";
      const other = ((customAnswers[`${key}-other`] as string | undefined) ?? "").trim();
      if (!value) return "Please select an option to continue.";
      if (value === "Other" && !other) return "Please enter your other option.";
    }
    if (step.kind === "checkbox") {
      const picked = Array.isArray(customAnswers[key]) ? (customAnswers[key] as string[]) : [];
      const other = ((customAnswers[`${key}-other`] as string | undefined) ?? "").trim();
      if (!picked.length && !other) return "Please select at least one option to continue.";
    }
    if (step.kind === "textarea") {
      const value = ((customAnswers[key] as string | undefined) ?? "").trim();
      if (!value) return "Please enter your answer to continue.";
    }
    if (step.kind === "organization") {
      const priorities = Array.isArray(customAnswers.priorities) ? (customAnswers.priorities as string[]) : [];
      const priorityOther = ((customAnswers.prioritiesOther as string | undefined) ?? "").trim();
      if (!((customAnswers.companyType as string | undefined) ?? "").trim()) return "Please choose your company type.";
      if (!((customAnswers.deadline as string | undefined) ?? "").trim()) return "Please choose your deadline.";
      if (!((customAnswers.budget as string | undefined) ?? "").trim()) return "Please enter your budget range.";
      if (!priorities.length && !priorityOther) return "Please select at least one priority.";
    }
    if (step.kind === "contact") {
      const name = ((customAnswers.contactName as string | undefined) ?? "").trim();
      const email = ((customAnswers.contactEmail as string | undefined) ?? "").trim();
      if (!name) return "Please enter your name.";
      if (!email) return "Please enter your email.";
      if (!isValidEmail(email)) return "Please enter a valid email.";
    }
    return "";
  };

  const goNext = () => {
    const stepError = getCurrentStepError();
    if (stepError) {
      setSubmitError(stepError);
      return;
    }
    setSubmitError("");
    if (currentStep < totalSteps - 1) {
      setCurrentStep((value) => value + 1);
      return;
    }
    if (isAi) {
      submitAi();
    } else {
      submitCustom();
    }
  };

  const toggleCustom = (key: string, option: string) => {
    setSubmitError("");
    setCustomAnswers((current) => {
      const existing = Array.isArray(current[key]) ? current[key] as string[] : [];
      const next = existing.includes(option) ? existing.filter((item) => item !== option) : [...existing, option];
      return { ...current, [key]: next };
    });
  };

  const renderSuccess = () => {
    const custom = flow === "custom";
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.inner} ${styles.completeInner}`}>
            <div className={styles.assessmentCopy}>
              <div className={styles.eyebrow}>{custom ? "Custom software development cost" : "AI Readiness Assessment"}</div>
              <h2 className={styles.thankTitle}>
                {custom ? (
                  <>
                    Thanks! We'll be back with the estimate <span>within 24 hours!</span>
                    <br />
                    <br />
                    Meanwhile, check our research for <span>average development rates.</span>
                  </>
                ) : (
                  <>Thank you for submission! We'll calculate your score and be back <span>within 24 hours!</span></>
                )}
              </h2>
            </div>
            <div className={styles.successIcon} aria-hidden>
              <svg viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="42" stroke="currentColor" strokeWidth="2" />
                <path d="M43 61.5L56 74.5L83 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    );
  };

  if (isComplete) return renderSuccess();

  if (flow === "ai") {
    const step = AI_STEPS[currentStep];
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.inner} ${styles.assessmentInner} ${isLoading ? styles.loadingInner : ""}`}>
            <div className={styles.assessmentCopy}>
              <div className={styles.eyebrow}>AI Readiness Assessment</div>
              {step.type === "choice" ? (
                <h2 className={styles.assessmentTitle}>{step.question}</h2>
              ) : (
                <div className={styles.inputStep}>
                  <input
                    type={step.field === "email" ? "email" : "text"}
                    value={(answers[currentStep] as string | undefined) ?? ""}
                    onChange={(event) => { setSubmitError(""); setAnswers((current) => ({ ...current, [currentStep]: event.target.value })); }}
                    placeholder={step.placeholder}
                    aria-label={step.placeholder}
                  />
                </div>
              )}
            </div>
            {isLoading ? (
              <div className={styles.loadingPanel} aria-label="Loading assessment result"><span /><span /><span /></div>
            ) : (
              <div className={styles.assessmentPanel}>
                <div className={styles.progress}>Question {currentStep + 1} <span>/ {totalSteps}</span></div>
                {step.type === "choice" ? (
                  <fieldset className={styles.answerList}>
                    {step.options.map((option, index) => (
                      <label key={option} className={styles.answerOption}>
                        <input
                          type="radio"
                          name={`readiness-question-${currentStep}`}
                          value={index}
                          checked={answers[currentStep] === index}
                          onChange={() => { setSubmitError(""); setAnswers((current) => ({ ...current, [currentStep]: index })); }}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </fieldset>
                ) : null}
                <div className={styles.assessmentActions}>
                  <button type="button" className={`${styles.assessmentBtn} ${styles.prevBtn}`} onClick={goPrev}>Prev</button>
                  <button type="button" className={`${styles.assessmentBtn} ${styles.assessmentNext}`} onClick={goNext}>{currentStep === totalSteps - 1 ? "Finish" : "Next"}</button>
                </div>
                {submitError && <p className={styles.submitError}>{submitError}</p>}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (flow === "custom") {
    const step = CUSTOM_STEPS[currentStep];
    const key = `custom-${currentStep}`;
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.inner} ${styles.assessmentInner} ${step.kind === "organization" ? styles.orgInner : ""} ${isLoading ? styles.loadingInner : ""}`}>
            <div className={styles.assessmentCopy}>
              <div className={styles.eyebrow}>Custom software development cost</div>
              <h2 className={styles.assessmentTitle}>{step.question}</h2>
            </div>
            {isLoading ? (
              <div className={styles.loadingPanel} aria-label="Loading estimate result"><span /><span /><span /></div>
            ) : (
            <div className={styles.assessmentPanel}>
              <div className={styles.progress}>Question {currentStep + 1} <span>/ {totalSteps}</span></div>
              {step.kind === "radio" ? (
                <fieldset className={styles.answerList}>
                  {step.options.map((option) => (
                    <label key={option} className={styles.answerOption}>
                      <input type="radio" name={key} checked={customAnswers[key] === option} onChange={() => { setSubmitError(""); setCustomAnswers((current) => ({ ...current, [key]: option })); }} />
                      <span>{option}</span>
                    </label>
                  ))}
                  {"other" in step && step.other ? <OtherField type="radio" name={key} value={customAnswers[`${key}-other`] as string | undefined} onChange={(value) => { setSubmitError(""); setCustomAnswers((current) => ({ ...current, [`${key}-other`]: value, [key]: "Other" })); }} /> : null}
                </fieldset>
              ) : null}
              {step.kind === "checkbox" ? (
                <fieldset className={styles.answerList}>
                  {step.options.map((option) => (
                    <label key={option} className={styles.answerOption}>
                      <input type="checkbox" checked={Array.isArray(customAnswers[key]) && (customAnswers[key] as string[]).includes(option)} onChange={() => toggleCustom(key, option)} />
                      <span>{option}</span>
                    </label>
                  ))}
                  {"other" in step && step.other ? <OtherField type="checkbox" name={key} value={customAnswers[`${key}-other`] as string | undefined} onChange={(value) => { setSubmitError(""); setCustomAnswers((current) => ({ ...current, [`${key}-other`]: value })); }} /> : null}
                </fieldset>
              ) : null}
              {step.kind === "textarea" ? (
                <div className={styles.textAnswer}>
                  <textarea placeholder={step.placeholder} value={(customAnswers[key] as string | undefined) ?? ""} onChange={(event) => { setSubmitError(""); setCustomAnswers((current) => ({ ...current, [key]: event.target.value })); }} />
                </div>
              ) : null}
              {step.kind === "organization" ? <OrganizationFields customAnswers={customAnswers} setCustomAnswers={setCustomAnswers} /> : null}
              {step.kind === "contact" ? <ContactFields customAnswers={customAnswers} setCustomAnswers={setCustomAnswers} /> : null}
              <div className={styles.assessmentActions}>
                <button type="button" className={`${styles.assessmentBtn} ${styles.prevBtn}`} onClick={goPrev}>Prev</button>
                <button type="button" className={`${styles.assessmentBtn} ${styles.assessmentNext}`} onClick={goNext}>{currentStep === totalSteps - 1 ? "Finish" : "Next"}</button>
              </div>
              {submitError && <p className={styles.submitError}>{submitError}</p>}
            </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.copy}>
            <div className={styles.eyebrow}>Get a free analysis and estimation for your idea</div>
            <h2 className={styles.title}>What is your <span className={styles.accent}>goal</span>?</h2>
          </div>
          <fieldset className={styles.fieldset}>
            {OPTIONS.map((opt) => (
              <div key={opt.id} className={styles.option}>
                <input type="radio" id={opt.id} name="quiz" value={opt.id} checked={selected === opt.id} onChange={() => { setSubmitError(""); setSelected(opt.id); }} />
                <label htmlFor={opt.id}>{opt.label}</label>
              </div>
            ))}
            <div className={styles.actions}>
              <button type="button" className={styles.nextBtn} disabled={!selected} onClick={handleGoalNext}>Next</button>
            </div>
          </fieldset>
        </div>
      </div>
    </section>
  );
}

function OtherField({ type, name, value, onChange }: { type: "radio" | "checkbox"; name: string; value?: string; onChange: (value: string) => void }) {
  return (
    <label className={`${styles.answerOption} ${styles.otherOption}`}>
      <input type={type} name={type === "radio" ? name : undefined} checked={Boolean(value)} onChange={() => onChange(value ?? "")} />
      <span>Other:</span>
      <input className={styles.inlineInput} value={value ?? ""} onChange={(event) => onChange(event.target.value)} aria-label="Other" />
    </label>
  );
}

function OrganizationFields({ customAnswers, setCustomAnswers }: { customAnswers: Record<string, string | string[]>; setCustomAnswers: Dispatch<SetStateAction<Record<string, string | string[]>>> }) {
  const priorities = ["Cost of work", "Quality of work", "Speed of work", "Stick to timelines", "Robust processes", "Transparency in collaboration", "Proven by testimonials expertise"];
  const selectedPriorities = Array.isArray(customAnswers.priorities) ? customAnswers.priorities as string[] : [];
  const togglePriority = (priority: string) => {
    setCustomAnswers((current) => {
      const existing = Array.isArray(current.priorities) ? current.priorities as string[] : [];
      const next = existing.includes(priority) ? existing.filter((item) => item !== priority) : [...existing, priority];
      return { ...current, priorities: next };
    });
  };

  return (
    <div className={styles.orgFields}>
      <label className={styles.selectField}>
        <span>What's your company type?</span>
        <select value={(customAnswers.companyType as string | undefined) ?? ""} onChange={(event) => setCustomAnswers((current) => ({ ...current, companyType: event.target.value }))}>
          <option value="">Choose</option>
          <option>Startup</option>
          <option>Small or medium business</option>
          <option>Enterprise</option>
          <option>Non-profit</option>
        </select>
      </label>
      <label className={styles.selectField}>
        <span>Do you have a deadline for your project?</span>
        <select value={(customAnswers.deadline as string | undefined) ?? ""} onChange={(event) => setCustomAnswers((current) => ({ ...current, deadline: event.target.value }))}>
          <option value="">Choose</option>
          <option>As soon as possible</option>
          <option>1-3 months</option>
          <option>3-6 months</option>
          <option>No strict deadline</option>
        </select>
      </label>
      <label className={styles.selectField}>
        <span>Do you have any budget limits? If yes, please, specify the range.</span>
        <input value={(customAnswers.budget as string | undefined) ?? ""} onChange={(event) => setCustomAnswers((current) => ({ ...current, budget: event.target.value }))} placeholder="Your answer" />
      </label>
      <fieldset className={styles.answerList}>
        <legend>Define top 3 priorities for choosing a partner to work with</legend>
        {priorities.map((priority) => (
          <label key={priority} className={styles.answerOption}>
            <input type="checkbox" checked={selectedPriorities.includes(priority)} onChange={() => togglePriority(priority)} />
            <span>{priority}</span>
          </label>
        ))}
        <OtherField type="checkbox" name="priorities" value={customAnswers.prioritiesOther as string | undefined} onChange={(value) => setCustomAnswers((current) => ({ ...current, prioritiesOther: value }))} />
      </fieldset>
    </div>
  );
}

function ContactFields({ customAnswers, setCustomAnswers }: { customAnswers: Record<string, string | string[]>; setCustomAnswers: Dispatch<SetStateAction<Record<string, string | string[]>>> }) {
  return (
    <div className={styles.contactFields}>
      <label className={styles.selectField}>
        <span>Name</span>
        <input value={(customAnswers.contactName as string | undefined) ?? ""} onChange={(event) => setCustomAnswers((current) => ({ ...current, contactName: event.target.value }))} placeholder="Your name" required />
      </label>
      <label className={styles.selectField}>
        <span>Corporate email</span>
        <input type="email" value={(customAnswers.contactEmail as string | undefined) ?? ""} onChange={(event) => setCustomAnswers((current) => ({ ...current, contactEmail: event.target.value }))} placeholder="Your email" required />
      </label>
    </div>
  );
}


