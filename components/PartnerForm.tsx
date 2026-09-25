"use client";

import { useState, type ReactNode } from "react";
import styles from "./ContactModal.module.css";
import SelectDropdown from "@/components/helpers/SelectDropdown";
import { isValidName, isValidEmail, isValidPhone, VALIDATION_MESSAGES } from "@/lib/formValidation";
import Honeypot from "@/components/Honeypot";
import TurnstileWidget from "@/components/Turnstile";
import { GENERIC_SUBMIT_ERROR, extractErrorMessage } from "@/lib/formErrors";
import { EMPLOYEES, PARTNERSHIP_TYPES, SOURCES, LIMITS, MIN_LENGTH } from "@/lib/partnerForm";

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyEmail: string;
  industry: string;
  employees: string;
  whyPartner: string;
  contribution: string;
  partnershipType: string;
  source: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyEmail: "",
  industry: "",
  employees: "",
  whyPartner: "",
  contribution: "",
  partnershipType: "",
  source: "",
};

function ClipIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.25 14.916V8.5a5.25 5.25 0 1 0-10.5 0v8.75a3.5 3.5 0 1 0 7 0V8.5a1.75 1.75 0 1 0-3.5 0v7.583"
      />
    </svg>
  );
}

function Section({ step, title, children }: { step: string; title: string; children: ReactNode }) {
  return (
    <fieldset className={styles.pSection}>
      <legend className={styles.pSectionHead}>
        <span className={styles.pStep}>{step}</span>
        <span className={styles.pSectionTitle}>{title}</span>
      </legend>
      <div className={styles.pGrid}>{children}</div>
    </fieldset>
  );
}

/** Partner enquiry form + its success state, rendered inside ContactModal's left panel. */
export default function PartnerForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState(GENERIC_SUBMIT_ERROR);
  const [sent, setSent] = useState(false);
  const loading = status === "loading";

  const set = (key: keyof Values) => (value: string) => {
    setValues((p) => ({ ...p, [key]: value }));
    setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    (Object.keys(values) as (keyof Values)[]).forEach((k) => {
      if (!values[k].trim()) e[k] = VALIDATION_MESSAGES.required;
    });
    if (!e.firstName && !isValidName(values.firstName)) e.firstName = VALIDATION_MESSAGES.name;
    if (!e.lastName && !isValidName(values.lastName)) e.lastName = VALIDATION_MESSAGES.name;
    if (!e.email && !isValidEmail(values.email)) e.email = VALIDATION_MESSAGES.email;
    if (!e.companyEmail && !isValidEmail(values.companyEmail)) e.companyEmail = VALIDATION_MESSAGES.email;
    if (!e.phone && !isValidPhone(values.phone)) e.phone = VALIDATION_MESSAGES.phone;
    if (!e.industry && values.industry.trim().length < MIN_LENGTH.industry)
      e.industry = `Please enter at least ${MIN_LENGTH.industry} characters.`;
    (["whyPartner", "contribution"] as const).forEach((k) => {
      if (!e[k] && values[k].trim().length < MIN_LENGTH.message)
        e[k] = `Please enter at least ${MIN_LENGTH.message} characters.`;
    });
    // Dropdown values must be one of the offered options
    if (!e.employees && !EMPLOYEES.includes(values.employees)) e.employees = VALIDATION_MESSAGES.required;
    if (!e.partnershipType && !PARTNERSHIP_TYPES.includes(values.partnershipType)) e.partnershipType = VALIDATION_MESSAGES.required;
    if (!e.source && !SOURCES.includes(values.source)) e.source = VALIDATION_MESSAGES.required;
    return e;
  };

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/partner-inquiry", { method: "POST", body: new FormData(ev.currentTarget) });
      if (!res.ok) {
        setErrorMessage(await extractErrorMessage(res));
        setStatus("error");
        return;
      }
      setSent(true);
      setStatus("idle");
    } catch {
      setErrorMessage(GENERIC_SUBMIT_ERROR);
      setStatus("error");
    }
  };

  if (sent) {
    return (
      <div className={styles.success}>
        <h3 className={styles.successTitle}>Thank you!</h3>
        <p className={styles.successSub}>
          We have received your partnership enquiry. Our partnerships team will review it and get
          back to you within two business days.
        </p>
      </div>
    );
  }

  const label = (text: string) => (
    <span className={styles.pLabel}>
      {text}
      <b className={styles.pReq}>*</b>
    </span>
  );
  const err = (key: keyof Values) =>
    errors[key] ? <span className={styles.pError}>{errors[key]}</span> : null;
  const cls = (key: keyof Values, full?: boolean) =>
    `${styles.pField} ${full ? styles.pFull : ""} ${errors[key] ? styles.pInvalid : ""}`;

  const input = (
    key: keyof Values,
    text: string,
    props: { type?: string; placeholder?: string; autoComplete?: string; full?: boolean; maxLength?: number }
  ) => (
    <label className={cls(key, props.full)}>
      {label(text)}
      <input
        type={props.type ?? "text"}
        name={key}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        maxLength={props.maxLength}
        value={values[key]}
        onChange={(e) => set(key)(e.target.value)}
        disabled={loading}
      />
      {err(key)}
    </label>
  );

  const select = (key: keyof Values, text: string, options: string[]) => (
    <div className={cls(key)}>
      <SelectDropdown label={text} required floating placeholder="Select an option" options={options} value={values[key]} onChange={set(key)} />
      <input type="hidden" name={key} value={values[key]} />
      {err(key)}
    </div>
  );

  const area = (key: keyof Values, text: string, placeholder: string) => (
    <label className={cls(key, true)}>
      {label(text)}
      <textarea
        name={key}
        rows={3}
        placeholder={placeholder}
        maxLength={LIMITS.message}
        value={values[key]}
        onChange={(e) => set(key)(e.target.value)}
        disabled={loading}
      />
      {err(key)}
    </label>
  );

  return (
    <form className={styles.pForm} noValidate onSubmit={onSubmit}>
      <Honeypot />

      <Section step="01" title="About you">
        {input("firstName", "First Name", { placeholder: "John", autoComplete: "given-name", maxLength: LIMITS.name })}
        {input("lastName", "Last Name", { placeholder: "Smith", autoComplete: "family-name", maxLength: LIMITS.name })}
        {input("email", "Email Address", { type: "email", placeholder: "name@email.com", autoComplete: "email", maxLength: LIMITS.email })}
        {input("phone", "Phone Number", { type: "tel", placeholder: "+1 555 000 0000", autoComplete: "tel", maxLength: LIMITS.phone })}
      </Section>

      <Section step="02" title="Your company">
        {input("companyEmail", "Company Email", { type: "email", placeholder: "name@company.com", full: true, maxLength: LIMITS.email })}
        {input("industry", "Industry", { placeholder: "e.g. Financial services", maxLength: LIMITS.industry })}
        {select("employees", "Number of Employees", EMPLOYEES)}
      </Section>

      <Section step="03" title="The partnership">
        {select("partnershipType", "Type of Partnership", PARTNERSHIP_TYPES)}
        {select("source", "How did you hear about us?", SOURCES)}
        {area("whyPartner", "Why would you like to partner with Nexterse LLC?", "Tell us what you hope to achieve together")}
        {area("contribution", "What can you bring to the partnership?", "Your expertise, network or resources")}
      </Section>

      <p className={styles.privacy}>
        Please be informed that when you click the Send button Nexterse LLC will process your
        personal data in accordance with our <a href="/privacy-policy">Privacy &amp; Policy</a> for
        the purpose of providing you with appropriate information.
      </p>

      <div className={styles.pBottom}>
        <label className={`${styles.attach} ${loading ? styles.attachDisabled : ""}`}>
          <ClipIcon />
          <span className={styles.attachText}>{fileName || "Attach file"}</span>
          <input
            type="file"
            name="file"
            hidden
            disabled={loading}
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </label>
        <div className={styles.pSend}>
          <TurnstileWidget />
          <button
            type="submit"
            className="btn btn-accent"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? <span className={styles.spinner} aria-hidden="true" /> : "Send"}
          </button>
        </div>
      </div>
      {status === "error" && <p className={styles.errorText}>{errorMessage}</p>}
    </form>
  );
}
