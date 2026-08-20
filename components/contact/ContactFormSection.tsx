"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ContactFormSection.module.css";
import { isValidName, isValidEmail, VALIDATION_MESSAGES } from "@/lib/formValidation";

const CalendarSVG = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.30773 21.5C4.8026 21.5 4.37503 21.325 4.02503 20.975C3.67503 20.625 3.50003 20.1974 3.50003 19.6923V6.30772C3.50003 5.80259 3.67503 5.37502 4.02503 5.02502C4.37503 4.67502 4.8026 4.50002 5.30773 4.50002H6.69236V3.15384C6.69236 2.93463 6.76576 2.75162 6.91256 2.60482C7.05934 2.45804 7.24235 2.38464 7.46158 2.38464C7.6808 2.38464 7.86381 2.45804 8.01061 2.60482C8.15739 2.75162 8.23078 2.93463 8.23078 3.15384V4.50002H15.8077V3.13462C15.8077 2.9218 15.8795 2.7436 16.0231 2.60002C16.1666 2.45643 16.3448 2.38464 16.5577 2.38464C16.7705 2.38464 16.9487 2.45643 17.0923 2.60002C17.2359 2.7436 17.3077 2.9218 17.3077 3.13462V4.50002H18.6923C19.1974 4.50002 19.625 4.67502 19.975 5.02502C20.325 5.37502 20.5 5.80259 20.5 6.30772V19.6923C20.5 20.1974 20.325 20.625 19.975 20.975C19.625 21.325 19.1974 21.5 18.6923 21.5H5.30773ZM5.30773 20H18.6923C18.7692 20 18.8397 19.9679 18.9039 19.9038C18.968 19.8397 19 19.7692 19 19.6923V10.3077H5.00001V19.6923C5.00001 19.7692 5.03206 19.8397 5.09616 19.9038C5.16027 19.9679 5.2308 20 5.30773 20ZM5.00001 8.80774H19V6.30772C19 6.23079 18.968 6.16026 18.9039 6.09614C18.8397 6.03204 18.7692 5.99999 18.6923 5.99999H5.30773C5.2308 5.99999 5.16027 6.03204 5.09616 6.09614C5.03206 6.16026 5.00001 6.23079 5.00001 6.30772V8.80774Z" fill="currentColor"/>
  </svg>
);

const SuccessCheckSVG = () => (
  <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70.5008 36.4774V39.3031C70.497 45.9264 68.3524 52.3711 64.3866 57.6759C60.4209 62.9807 54.8466 66.8615 48.4951 68.7394C42.1436 70.6173 35.3553 70.3918 29.1424 68.0965C22.9296 65.8012 17.6251 61.559 14.0202 56.0027C10.4153 50.4464 8.70305 43.8736 9.13884 37.2647C9.57464 30.6557 12.1351 24.3647 16.4384 19.3299C20.7417 14.295 26.5572 10.7861 33.0177 9.32646C39.4781 7.86681 46.2374 8.53462 52.2873 11.2303" stroke="#112244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M71.887 12.5088L39.1659 45.2626L29.3496 35.4463" stroke="#112244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string; agreed?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = VALIDATION_MESSAGES.required;
    else if (!isValidName(name)) nextErrors.name = VALIDATION_MESSAGES.name;
    if (!email.trim()) nextErrors.email = VALIDATION_MESSAGES.required;
    else if (!isValidEmail(email)) nextErrors.email = VALIDATION_MESSAGES.email;
    if (!message.trim()) nextErrors.message = VALIDATION_MESSAGES.required;
    if (!agreed) nextErrors.agreed = VALIDATION_MESSAGES.checkbox;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>

          {/* LEFT COLUMN */}
          <div className={styles.contentLeft}>
            <div className={styles.icons}>
              <div className={styles.iconItem}>
                <div className={styles.iconImg}>
                  <Image src="/contact/03_RD-Analysis.svg" alt="Ready to sign NDA" width={40} height={40} />
                </div>
                <p className={styles.iconDesc}>We&rsquo;re ready to sign NDA</p>
              </div>
              <div className={styles.iconItem}>
                <div className={styles.iconImg}>
                  <Image src="/contact/03_Analyze-data.svg" alt="RFP analysis is free" width={40} height={40} />
                </div>
                <p className={styles.iconDesc}>RFP analysis is absolutely free</p>
              </div>
              <div className={styles.iconItem}>
                <div className={styles.iconImg}>
                  <Image src="/contact/03_Time-estimates.svg" alt="Respond within 24h" width={40} height={40} />
                </div>
                <p className={styles.iconDesc}>We will respond to you within 24 hours</p>
              </div>
            </div>

            {status !== "success" ? (
              <>
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <label className={styles.formLabel}>
                    <span className={styles.formLabelText}>My Name*</span>
                    <span className={styles.formInputWrap}>
                      <input
                        type="text"
                        className={styles.formInput}
                        placeholder="John Smith"
                        value={name}
                        onChange={e => { setName(e.target.value); setErrors(p => ({ ...p, name: undefined })); }}
                      />
                    </span>
                    {errors.name && <span className={styles.fieldErrorText}>{errors.name}</span>}
                  </label>
                  <label className={styles.formLabel}>
                    <span className={styles.formLabelText}>Email Address*</span>
                    <span className={styles.formInputWrap}>
                      <input
                        type="email"
                        className={styles.formInput}
                        placeholder="name@company.com"
                        value={email}
                        onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: undefined })); }}
                      />
                    </span>
                    {errors.email && <span className={styles.fieldErrorText}>{errors.email}</span>}
                  </label>
                  <label className={`${styles.formLabel} ${styles.textareaLabel}`}>
                    <span className={styles.formLabelText}>Message*</span>
                    <span className={styles.formInputWrap}>
                      <textarea
                        className={`${styles.formInput} ${styles.formTextarea}`}
                        rows={3}
                        placeholder="Tell us about your projects"
                        value={message}
                        onChange={e => { setMessage(e.target.value); setErrors(p => ({ ...p, message: undefined })); }}
                      />
                    </span>
                    {errors.message && <span className={styles.fieldErrorText}>{errors.message}</span>}
                  </label>

                  <div className={styles.bottomSection}>
                    <div className={styles.bottomWrapper}>
                      <div className={styles.agreementWrapper}>
                        <p>
                          <label className={styles.checkboxLabel}>
                            <input
                              type="checkbox"
                              className={styles.checkboxHidden}
                              checked={agreed}
                              onChange={e => { setAgreed(e.target.checked); setErrors(p => ({ ...p, agreed: undefined })); }}
                            />
                            <span className={styles.checkboxCustom} />
                            <span className={styles.checkboxText}>Agree with</span>
                          </label>
                          <a href="/privacy-policy" className={styles.privacyLink}>Privacy policy</a>
                        </p>
                        {errors.agreed && <span className={styles.fieldErrorText}>{errors.agreed}</span>}
                      </div>
                      <div className={styles.submitWrapper}>
                        <button
                          type="submit"
                          className={`${styles.submitBtn} ${status === "loading" ? styles.submitBtnLoading : ""}`}
                          disabled={status === "loading"}
                        >
                          {status === "loading" ? (
                            <span className={styles.spinner} />
                          ) : (
                            "Get in Touch"
                          )}
                        </button>
                        {status === "error" && (
                          <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </form>

                <div className={styles.booking}>
                  <a
                    href="https://calendly.com/nexterse-meeting-schedule22/30min"
                    className={styles.bookBtn}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <CalendarSVG />
                    Book an intro call
                  </a>
                </div>
              </>
            ) : (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <SuccessCheckSVG />
                </div>
                <div className={styles.successTitle}>Thank you!</div>
                <div className={styles.successSubtitle}>Your form was successfully submitted!</div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.contentRight}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://maps.google.com/maps?q=7901+4th+St+N+St.+Petersburg+FL+33702+USA&z=15&output=embed"
                width="100%"
                height="385"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nexterse LLC office location"
              />
            </div>

            <div className={styles.addressCard}>
              <div className={styles.addressCardInner}>
                <h2 className={styles.addressTitle}>Headquarters</h2>
                <div className={styles.addressText}>
                  <p>7901 4th St N #27451<br />St. Petersburg, FL 33702, USA</p>
                </div>
              </div>
              <div className={styles.addressContact}>
                <div className={styles.addressEmail}>
                  <a href="mailto:info@nexterse.com">info@nexterse.com</a>
                  <a href="mailto:support@nexterse.com">support@nexterse.com</a>
                </div>
                <div className={styles.addressSocials}>
                  <a href="https://www.facebook.com/nexterse/" className={styles.socialLink} rel="nofollow" target="_blank">
                    <Image src="/footer/icons/facebook-app-round-icon.svg" alt="Facebook" width={20} height={20} />
                  </a>
                  <a href="https://www.instagram.com/nextersepakistan/" className={styles.socialLink} rel="nofollow" target="_blank">
                    <Image src="/footer/icons/instagram-icon.svg" alt="Instagram" width={20} height={20} />
                  </a>
                  <a href="https://www.linkedin.com/company/nexterse/" className={styles.socialLink} rel="nofollow" target="_blank">
                    <Image src="/footer/icons/linkedin-icon.svg" alt="LinkedIn" width={20} height={20} />
                  </a>
                  <a href="https://x.com/nexterseinfo" className={styles.socialLink} rel="nofollow" target="_blank">
                    <Image src="/footer/icons/x-social-media-logo-icon.svg" alt="X (Twitter)" width={20} height={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
