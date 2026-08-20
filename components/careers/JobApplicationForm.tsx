"use client";

import { useRef, useState } from "react";
import styles from "./JobDetailPage.module.css";
import {
  isValidName,
  isValidEmail,
  isValidPhone,
  isValidUrl,
  isValidGithubUrl,
  isValidLinkedinUrl,
  VALIDATION_MESSAGES,
} from "@/lib/formValidation";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Record<string, string>;

export default function JobApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const clearError = (field: string) => setErrors((current) => ({ ...current, [field]: "" }));

  const selectFile = (nextFile?: File) => {
    if (!nextFile) return;
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(nextFile.type) || nextFile.size > 10 * 1024 * 1024) {
      setError("Upload a PDF, DOC, or DOCX file up to 10 MB.");
      return;
    }
    setFile(nextFile);
    setError("");
  };

  const goToSecondStep = () => {
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    const nextErrors: Errors = {};
    if (!firstName) nextErrors.firstName = VALIDATION_MESSAGES.required;
    else if (!isValidName(firstName)) nextErrors.firstName = VALIDATION_MESSAGES.name;

    if (!lastName) nextErrors.lastName = VALIDATION_MESSAGES.required;
    else if (!isValidName(lastName)) nextErrors.lastName = VALIDATION_MESSAGES.name;

    if (!email) nextErrors.email = VALIDATION_MESSAGES.required;
    else if (!isValidEmail(email)) nextErrors.email = VALIDATION_MESSAGES.email;

    if (!phone) nextErrors.phone = VALIDATION_MESSAGES.required;
    else if (!isValidPhone(phone)) nextErrors.phone = VALIDATION_MESSAGES.phone;

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setError("");
      return;
    }
    if (!file) {
      setError("Please attach your resume or CV.");
      return;
    }
    setError("");
    setStep(2);
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const linkedinUrl = String(formData.get("linkedinUrl") ?? "").trim();
    const githubUrl = String(formData.get("githubUrl") ?? "").trim();
    const portfolioUrl = String(formData.get("portfolioUrl") ?? "").trim();
    const projectAnswer = String(formData.get("projectAnswer") ?? "").trim();
    const technicalAnswer = String(formData.get("technicalAnswer") ?? "").trim();
    const motivationAnswer = String(formData.get("motivationAnswer") ?? "").trim();
    const privacyAccepted = formData.get("privacyAccepted") === "on";

    const nextErrors: Errors = {};
    if (!linkedinUrl) nextErrors.linkedinUrl = VALIDATION_MESSAGES.required;
    else if (!isValidLinkedinUrl(linkedinUrl)) nextErrors.linkedinUrl = VALIDATION_MESSAGES.linkedin;

    if (!githubUrl) nextErrors.githubUrl = VALIDATION_MESSAGES.required;
    else if (!isValidGithubUrl(githubUrl)) nextErrors.githubUrl = VALIDATION_MESSAGES.github;

    if (portfolioUrl && !isValidUrl(portfolioUrl)) nextErrors.portfolioUrl = VALIDATION_MESSAGES.url;

    if (!projectAnswer) nextErrors.projectAnswer = VALIDATION_MESSAGES.required;
    if (!technicalAnswer) nextErrors.technicalAnswer = VALIDATION_MESSAGES.required;
    if (!motivationAnswer) nextErrors.motivationAnswer = VALIDATION_MESSAGES.required;
    if (!privacyAccepted) nextErrors.privacyAccepted = VALIDATION_MESSAGES.checkbox;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setError("");
      return;
    }

    formData.set("name", `${formData.get("firstName") ?? ""} ${formData.get("lastName") ?? ""}`.trim());
    formData.set("position", jobTitle);
    formData.set(
      "message",
      [
        formData.get("coverLetter"),
        `Project example: ${formData.get("projectAnswer")}`,
        `Technical decision: ${formData.get("technicalAnswer")}`,
        `Why Nexterse: ${formData.get("motivationAnswer")}`,
      ].filter(Boolean).join("\n\n"),
    );
    if (file) formData.set("resume", file);

    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/careers", { method: "POST", body: formData });
      if (!response.ok) throw new Error();
      setStatus("success");
      form.reset();
      setFile(null);
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <aside className={`${styles.formCard} ${styles.successCard}`}>
        <span className={styles.successMark}>✓</span>
        <h2>Application received</h2>
        <p>Thank you for applying. Our team will review your application and contact you if there’s a match.</p>
      </aside>
    );
  }

  return (
    <aside className={styles.formCard}>
      <div className={styles.formHeading}>
        <div>
          <h2>Apply for this job</h2>
          <p>Step {step} of 2</p>
        </div>
        <div className={styles.stepProgress} aria-label={`Step ${step} of 2`}>
          <span className={styles.stepActive} />
          <span className={step === 2 ? styles.stepActive : ""} />
        </div>
      </div>

      <form ref={formRef} onSubmit={submit} className={styles.form} noValidate>
        <div className={styles.formPage} data-step-one hidden={step !== 1}>
          <div className={styles.twoColumns}>
            <label>
              <span>First name <b>*</b></span>
              <input name="firstName" placeholder="First name" autoComplete="given-name" onChange={() => clearError("firstName")} />
              {errors.firstName && <span className={styles.fieldErrorText}>{errors.firstName}</span>}
            </label>
            <label>
              <span>Last name <b>*</b></span>
              <input name="lastName" placeholder="Last name" autoComplete="family-name" onChange={() => clearError("lastName")} />
              {errors.lastName && <span className={styles.fieldErrorText}>{errors.lastName}</span>}
            </label>
          </div>
          <label>
            <span>Email address <b>*</b></span>
            <input name="email" type="email" placeholder="Email" autoComplete="email" onChange={() => clearError("email")} />
            {errors.email && <span className={styles.fieldErrorText}>{errors.email}</span>}
          </label>
          <label>
            <span>Phone number <b>*</b></span>
            <input name="phone" type="tel" placeholder="+1 555 000 0000" autoComplete="tel" onChange={() => clearError("phone")} />
            {errors.phone && <span className={styles.fieldErrorText}>{errors.phone}</span>}
          </label>
          <div>
            <span className={styles.fieldLabel}>Resume or CV <b>*</b></span>
            <input ref={inputRef} className={styles.hiddenInput} type="file" accept=".pdf,.doc,.docx" onChange={(event) => selectFile(event.target.files?.[0])} />
            <button
              type="button"
              className={styles.dropZone}
              onClick={() => inputRef.current?.click()}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => { event.preventDefault(); selectFile(event.dataTransfer.files[0]); }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4M7 9l5-5 5 5M5 14v5h14v-5" /></svg>
              {file ? <strong>{file.name}</strong> : <span>Drop your file or <u>upload</u></span>}
            </button>
            <small>Accepted formats: PDF, DOC, DOCX. Maximum 10 MB.</small>
          </div>
          <label>
            <span>Cover letter</span>
            <textarea name="coverLetter" placeholder="Tell us why you’d be a great fit" rows={4} />
          </label>
          <div className={styles.singleAction}>
            <button className={styles.submitButton} type="button" onClick={goToSecondStep}>Continue</button>
          </div>
        </div>

        <div className={styles.formPage} hidden={step !== 2}>
          <label>
            <span>LinkedIn profile URL <b>*</b></span>
            <input name="linkedinUrl" type="url" placeholder="https://linkedin.com/in/your-profile" onChange={() => clearError("linkedinUrl")} />
            {errors.linkedinUrl && <span className={styles.fieldErrorText}>{errors.linkedinUrl}</span>}
          </label>
          <label>
            <span>GitHub URL <b>*</b></span>
            <input name="githubUrl" type="url" placeholder="https://github.com/your-profile" onChange={() => clearError("githubUrl")} />
            {errors.githubUrl && <span className={styles.fieldErrorText}>{errors.githubUrl}</span>}
          </label>
          <label>
            <span>Portfolio URL</span>
            <input name="portfolioUrl" type="url" placeholder="https://yourportfolio.com" onChange={() => clearError("portfolioUrl")} />
            {errors.portfolioUrl && <span className={styles.fieldErrorText}>{errors.portfolioUrl}</span>}
          </label>
          <label>
            <span>Tell us about a relevant project you’re proud of <b>*</b></span>
            <textarea name="projectAnswer" placeholder="Describe the project, your role, and its impact" rows={3} onChange={() => clearError("projectAnswer")} />
            {errors.projectAnswer && <span className={styles.fieldErrorText}>{errors.projectAnswer}</span>}
          </label>
          <label>
            <span>Describe a difficult technical decision you made <b>*</b></span>
            <textarea name="technicalAnswer" placeholder="What trade-offs did you consider?" rows={3} onChange={() => clearError("technicalAnswer")} />
            {errors.technicalAnswer && <span className={styles.fieldErrorText}>{errors.technicalAnswer}</span>}
          </label>
          <label>
            <span>Why would you like to join Nexterse? <b>*</b></span>
            <textarea name="motivationAnswer" placeholder="Tell us what interests you about this role" rows={3} onChange={() => clearError("motivationAnswer")} />
            {errors.motivationAnswer && <span className={styles.fieldErrorText}>{errors.motivationAnswer}</span>}
          </label>
          <label className={styles.consent}>
            <input name="privacyAccepted" type="checkbox" onChange={() => clearError("privacyAccepted")} />
            <span>I accept the Nexterse <a href="/privacy-policy">privacy policy</a> and terms.</span>
          </label>
          {errors.privacyAccepted && <span className={styles.fieldErrorText}>{errors.privacyAccepted}</span>}
          <div className={styles.formFooter}>
            <button className={styles.backButton} type="button" onClick={() => setStep(1)}>Back</button>
            <button className={styles.submitButton} type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Submitting…" : "Submit application"}
            </button>
          </div>
        </div>

        {error && <p className={styles.formError} role="alert">{error}</p>}
      </form>
    </aside>
  );
}
