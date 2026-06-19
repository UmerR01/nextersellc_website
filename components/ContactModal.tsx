"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ContactModal.module.css";

const CLIENT_LOGOS = [
  { src: "/logos/toyota.svg",     alt: "Toyota",         w: 110 },
  { src: "/logos/beiersdorf.svg", alt: "Beiersdorf",     w: 130 },
  { src: "/logos/dexai.svg",      alt: "DEXAI Robotics", w: 75  },
  { src: "/logos/climeco.svg",    alt: "ClimeCo",        w: 130 },
  { src: "/logos/smi.svg",        alt: "SMI",            w: 90  },
];

const BADGES = [
  { src: "/badges/iso.svg",              alt: "ISO",               w: 81, h: 84 },
  { src: "/badges/clutch-ai.svg",        alt: "Clutch Top AI",     w: 81, h: 84 },
  { src: "/badges/techreviewer-top.svg", alt: "Techreviewer Top",  w: 81, h: 80 },
  { src: "/badges/rightfirms.svg",       alt: "RightFirms",        w: 81, h: 84 },
  { src: "/badges/custom-web.svg",       alt: "Custom Web Design", w: 81, h: 84 },
  { src: "/badges/goodfirms-soft.svg",   alt: "GoodFirms Top",     w: 81, h: 84 },
];

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M18.75 5.25L5.25 18.75" stroke="#899FB6" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
      <path d="M18.75 18.75L5.25 5.25" stroke="#899FB6" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
    </svg>
  );
}

function ClipIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.5"
        d="M17.25 14.916V8.5a5.25 5.25 0 1 0-10.5 0v8.75a3.5 3.5 0 1 0 7 0V8.5a1.75 1.75 0 1 0-3.5 0v7.583" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4.5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" d="M3 9h18M8 2.5v4M16 2.5v4" />
    </svg>
  );
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (open) { setSent(false); setFileName(""); }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      {/* Dark backdrop — click to close */}
      <div className={styles.backdrop} onClick={onClose} aria-hidden />

      <div className={styles.wrapper} onClick={onClose}>
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label="Contact us"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>

          {/* ── Left panel ── */}
          <div className={styles.left}>
            {/* Brand */}
            <div className={styles.brand}>
              <span className={styles.logoMark}>N</span>
              <span className={styles.logoText}>
                Nexterse<span className={styles.dot}>.</span>
              </span>
            </div>

            {/* Email description */}
            <p className={styles.emailDesc}>
              If you have any questions, email us{" "}
              <a href="mailto:hello@nexterse.com">hello@nexterse.com</a>
            </p>

            {/* Success state */}
            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <svg width="81" height="80" viewBox="0 0 81 80" fill="none">
                    <path
                      d="M70.5008 36.4774V39.3031C70.497 45.9264 68.3524 52.3711 64.3866 57.6759C60.4209 62.9807 54.8466 66.8615 48.4951 68.7394C42.1436 70.6173 35.3553 70.3918 29.1424 68.0965C22.9296 65.8012 17.6251 61.559 14.0202 56.0027C10.4153 50.4464 8.70305 43.8736 9.13884 37.2647C9.57464 30.6557 12.1351 24.3647 16.4384 19.3299C20.7417 14.295 26.5572 10.7861 33.0177 9.32646C39.4781 7.86681 46.2374 8.53462 52.2873 11.2303"
                      stroke="#112244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                    <path
                      d="M71.887 12.5088L39.1659 45.2626L29.3496 35.4463"
                      stroke="#112244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Thank you!</h3>
                <p className={styles.successSub}>
                  We&apos;ve received your message and will get back to you within 24 hours.
                  <br />
                  Do you want to book a call?{" "}
                  <a href="https://calendly.com" target="_blank" rel="noreferrer" className={styles.successLink}>
                    Book now
                  </a>
                </p>
                <div className={styles.successFooter}>
                  <p className={styles.successFooterText}>
                    Find out more about Nexterse and our services
                  </p>
                  <ul className={styles.successFooterNav}>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#insights">Guides &amp; insights</a></li>
                  </ul>
                </div>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>My Name*</span>
                  <input type="text" name="name" placeholder="John Smith" required />
                </label>
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>Email Address*</span>
                  <input type="email" name="email" placeholder="name@company.com" required />
                </label>
                <label className={`${styles.field} ${styles.fieldTextarea}`}>
                  <span className={styles.fieldLabel}>Message*</span>
                  <textarea name="message" rows={3} placeholder="Describe your idea" required />
                </label>

                <p className={styles.privacy}>
                  Please be informed that when you click the Send button Nexterse will process
                  your personal data in accordance with our{" "}
                  <a href="#">Privacy notice</a> for the purpose of providing you with
                  appropriate information.
                </p>

                <div className={styles.formBottom}>
                  <label className={styles.attach}>
                    <ClipIcon />
                    {fileName || "Attach file"}
                    <input
                      type="file"
                      hidden
                      onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                    />
                  </label>
                  <button type="submit" className={styles.sendBtn}>Send</button>
                </div>

                <div className={styles.manager}>
                  <div className={styles.managerInfo}>
                    <Image
                      src="/cases/woman.jpg"
                      alt="Account manager"
                      width={56}
                      height={56}
                      className={styles.avatar}
                    />
                    <div>
                      <div className={styles.managerName}>Alex Morgan</div>
                      <div className={styles.managerRole}>Account Manager</div>
                    </div>
                  </div>
                  <a href="https://calendly.com" target="_blank" rel="noreferrer" className={styles.bookBtn}>
                    <CalendarIcon /> Book a consultation
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* ── Right panel ── */}
          <div className={styles.right}>
            <p className={styles.rightHeading}>Clients who trust us</p>

            <div className={styles.clientLogos}>
              {CLIENT_LOGOS.map((logo) => (
                <div key={logo.alt} className={styles.clientLogoRow}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w}
                    height={38}
                    className={styles.clientLogo}
                  />
                </div>
              ))}
            </div>

            <hr className={styles.divider} />

            <div className={styles.badgeGrid}>
              {BADGES.map((b) => (
                <div key={b.alt} className={styles.badgeWrap}>
                  <Image src={b.src} alt={b.alt} width={b.w} height={b.h} className={styles.badge} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
