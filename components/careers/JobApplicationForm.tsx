"use client";

import { useRef, useState } from "react";
import styles from "./JobDetailPage.module.css";

type Status = "idle" | "loading" | "success" | "error";

export default function JobApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
    const fields = formRef.current?.querySelectorAll<HTMLInputElement>("[data-step-one] input[required]");
    const invalid = Array.from(fields ?? []).find((field) => !field.checkValidity());
    if (invalid) {
      invalid.reportValidity();
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

      <form ref={formRef} onSubmit={submit} className={styles.form}>
        <div className={styles.formPage} data-step-one hidden={step !== 1}>
          <div className={styles.twoColumns}>
            <label>
              <span>First name <b>*</b></span>
              <input name="firstName" placeholder="First name" autoComplete="given-name" required />
            </label>
            <label>
              <span>Last name <b>*</b></span>
              <input name="lastName" placeholder="Last name" autoComplete="family-name" required />
            </label>
          </div>
          <label>
            <span>Email address <b>*</b></span>
            <input name="email" type="email" placeholder="Email" autoComplete="email" required />
          </label>
          <label>
            <span>Phone number <b>*</b></span>
            <input name="phone" type="tel" placeholder="+1 555 000 0000" autoComplete="tel" required />
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
            <button className={styles.submitButton} type="button" onClick={goToSecondStep}>Continue <span aria-hidden="true">→</span></button>
          </div>
        </div>

        <div className={styles.formPage} hidden={step !== 2}>
          <label>
            <span>LinkedIn profile URL <b>*</b></span>
            <input name="linkedinUrl" type="url" placeholder="https://linkedin.com/in/your-profile" required />
          </label>
          <label>
            <span>GitHub URL <b>*</b></span>
            <input name="githubUrl" type="url" placeholder="https://github.com/your-profile" required />
          </label>
          <label>
            <span>Portfolio URL</span>
            <input name="portfolioUrl" type="url" placeholder="https://yourportfolio.com" />
          </label>
          <label>
            <span>Tell us about a relevant project you’re proud of <b>*</b></span>
            <textarea name="projectAnswer" placeholder="Describe the project, your role, and its impact" rows={3} required />
          </label>
          <label>
            <span>Describe a difficult technical decision you made <b>*</b></span>
            <textarea name="technicalAnswer" placeholder="What trade-offs did you consider?" rows={3} required />
          </label>
          <label>
            <span>Why would you like to join Nexterse? <b>*</b></span>
            <textarea name="motivationAnswer" placeholder="Tell us what interests you about this role" rows={3} required />
          </label>
          <label className={styles.consent}>
            <input name="privacyAccepted" type="checkbox" required />
            <span>I accept the Nexterse <a href="/privacy-policy">privacy policy</a> and terms.</span>
          </label>
          <div className={styles.formFooter}>
            <button className={styles.backButton} type="button" onClick={() => setStep(1)}>← Back</button>
            <button className={styles.submitButton} type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Submitting…" : "Submit application"}<span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {error && <p className={styles.formError} role="alert">{error}</p>}
      </form>
    </aside>
  );
}
