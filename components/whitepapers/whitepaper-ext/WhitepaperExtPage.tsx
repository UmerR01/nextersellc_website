"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import s from "./WhitepaperExtPage.module.css";
import type {
  WhitepaperData,
  RichText,
  AnswerBlock,
  DescriptionParagraph,
  UlItem,
} from "@/lib/whitepaper-data";

// ─── helpers ────────────────────────────────────────────────

/** Renders one description paragraph — plain string or inline-link segments. */
function DescPara({ para, index }: { para: DescriptionParagraph; index: number }) {
  if (typeof para === "string") return <p key={index}>{para}</p>;
  return (
    <p key={index}>
      {para.map((seg, j) =>
        seg.href ? (
          <a key={j} href={seg.href} className={s.descLink}>
            {seg.text}
          </a>
        ) : (
          <span key={j}>{seg.text}</span>
        )
      )}
    </p>
  );
}

/** Renders a RichTitle array: accent segments get the accent CSS class. */
function RichTitle({ parts, accentCls }: { parts: RichText[]; accentCls: string }) {
  return (
    <>
      {parts.map((part, i) =>
        part.accent ? (
          <span key={i} className={accentCls}>{part.text}</span>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </>
  );
}

/** Renders the body of a single ul list item (plain text or inline-link segments). */
function UlItemBody({ item }: { item: UlItem }) {
  if ("segments" in item) {
    return (
      <>
        {item.segments.map((seg, i) =>
          seg.href
            ? <a key={i} href={seg.href} className={s.descLink}>{seg.text}</a>
            : <span key={i}>{seg.text}</span>
        )}
      </>
    );
  }
  return <>{item.text}</>;
}

/** Renders a single FAQ answer block (paragraph | ordered list | tick list). */
function AnswerBlock({ block }: { block: AnswerBlock }) {
  if (block.kind === "p") return <p>{block.text}</p>;
  if (block.kind === "ol")
    return (
      <ol>
        {block.items.map((item, i) => <li key={i}>{item}</li>)}
      </ol>
    );
  // ul — tick list with optional bold prefix and/or inline links
  return (
    <ul>
      {block.items.map((item, i) => (
        <li key={i}>
          {item.strong && <strong>{item.strong}</strong>}
          <UlItemBody item={item} />
        </li>
      ))}
    </ul>
  );
}

// ─── form constants (shared by all whitepapers) ──────────────

const INTENTION_OPTIONS = [
  "Planning to develop an app",
  "Estimating my software",
  "Developing my software",
  "Marketing research",
  "Other",
];

const COMPANY_TYPE_OPTIONS = [
  "Small or medium-size company",
  "Enterprise",
  "Startup",
  "Other",
];

// ─── custom select ───────────────────────────────────────────

function CustomSelect({
  placeholder,
  options,
  value,
  onChange,
  hasError,
}: {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  hasError?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className={s.selectWrap} ref={ref}>
      <div
        className={`${s.selectSelected} ${open ? s.selectOpen : ""} ${hasError ? s.selectError : ""}`}
        onClick={() => setOpen((p) => !p)}
      >
        <p>
          <span className={value ? s.selectedValue : s.selectedPlaceholder}>
            {value || placeholder}
          </span>
        </p>
      </div>
      {hasError && (
        <div className={s.selectErrorMsg}>
          <p>The field is required</p>
        </div>
      )}
      {open && (
        <div className={s.selectOptionList}>
          <div className={s.selectOptionWrapper}>
            {options.map((opt) => (
              <div
                key={opt}
                className={s.selectOption}
                onClick={() => { onChange(opt); setOpen(false); }}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── main component ──────────────────────────────────────────

export default function WhitepaperExtPage({ data }: { data: WhitepaperData }) {
  const [heroForm, setHeroForm] = useState({
    name: "", email: "", intention: "", discuss: "",
    company: "", companyType: "", agreement: false,
  });
  const [heroErrors, setHeroErrors] = useState<Record<string, boolean>>({});
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  const [faqOpen, setFaqOpen] = useState<Set<number>>(
    new Set(data.faq?.defaultOpen ?? [0])
  );
  const [faqShowAll, setFaqShowAll] = useState(false);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, boolean> = {};
    if (!heroForm.name.trim())  errors.name      = true;
    if (!heroForm.email.trim()) errors.email     = true;
    if (!heroForm.intention)    errors.intention = true;
    if (!heroForm.discuss)      errors.discuss   = true;
    if (!heroForm.agreement)    errors.agreement = true;
    setHeroErrors(errors);
    if (Object.keys(errors).length === 0) {
      setHeroSubmitted(true);
      const a = document.createElement("a");
      a.href = data.hero.pdfUrl;
      a.target = "_blank";
      a.click();
    }
  };

  const toggleFaq = (i: number) => {
    setFaqOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className={`${s.hero} ${heroSubmitted ? s.heroSuccess : ""}`}>

        {/* Careers-style SVG background */}
        <div className={s.bgWrapper}>
          <div className={s.desktopBg}>
            <svg preserveAspectRatio="xMidYMid slice" className={s.heroBgSvg}
              width="1920" height="703" viewBox="0 0 1920 703" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="1920" height="703" fill="url(#wp_d_paint0)" />
              <g clipPath="url(#wp_d_clip0)">
                <rect width="1920" height="703" fill="url(#wp_d_paint0)" />
                <g opacity="0.08">
                  <path fillRule="evenodd" clipRule="evenodd" d="M-845.628 744.916L-688.82 -101.049L-883.335 -131.999L-1166 744.916L-845.628 744.916ZM-78.6641 352.883L-10.577 744.917L289.163 744.916L150.925 377.643L-78.6641 352.883ZM-588.25 744.917L-466.518 -82.4796L412.996 28.9404L825.646 744.916L544.475 744.916L309.265 237.337L-305.016 183.69L-267.877 744.916L-588.25 744.917Z" fill="#3CC4E5" />
                </g>
                <g opacity="0.08">
                  <path fillRule="evenodd" clipRule="evenodd" d="M874.988 -647.181L1388.56 -730.869L1655.22 -246.923L1928.98 -316.113L1484.69 -947.631L656.166 -844.49L599.943 19.784L892.548 -54.1681L874.988 -647.181ZM1254.33 -550.397L1420.26 -187.351L1127.66 -113.399L1098.77 -529.125L1254.33 -550.397ZM1687.01 -978.365L1877.46 -996.427L2419.14 -439.644L2162.34 -374.741L1687.01 -978.365Z" fill="#3CC4E5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M892.663 -53.7166L1231.16 682.73L1060.64 755.898L600.059 20.2355L892.663 -53.7166ZM1683.65 127.297L1655.34 -246.473L1929.1 -315.663L1887.62 51.6869L1683.65 127.297ZM1127.73 -113.128L1429.9 614.455L2207.46 309.673L2419.08 -439.5L2162.28 -374.597L2064.62 143.284L1515.96 334.075L1420.34 -187.08L1127.73 -113.128Z" fill="#3CC4E5" />
                </g>
                <g filter="url(#wp_d_f0)">
                  <ellipse cx="960" cy="401.5" rx="590" ry="289.5" fill="url(#wp_d_paint1)" />
                </g>
                <g opacity="0.32" filter="url(#wp_d_f1)">
                  <circle cx="2010" cy="205" r="460" fill="#3CC4E5" />
                </g>
                <g opacity="0.32" filter="url(#wp_d_f2)">
                  <circle cx="19" cy="691" r="460" fill="#3CC4E5" />
                </g>
              </g>
              <defs>
                <filter id="wp_d_f0" x="70" y="-188" width="1780" height="1179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="135" result="effect1_foregroundBlur" />
                </filter>
                <filter id="wp_d_f1" x="1050" y="-755" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
                </filter>
                <filter id="wp_d_f2" x="-941" y="-269" width="1920" height="1920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="136" result="effect1_foregroundBlur" />
                </filter>
                <linearGradient id="wp_d_paint0" x1="1920" y1="-21.3031" x2="114.684" y2="922.394" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <linearGradient id="wp_d_paint1" x1="1550" y1="94.4545" x2="323.866" y2="572.726" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <clipPath id="wp_d_clip0">
                  <rect width="1920" height="703" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={s.mobileBg}>
            <svg preserveAspectRatio="xMidYMid slice" className={s.heroBgSvg}
              width="375" height="559" viewBox="0 0 375 559" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#wp_m_clip0)">
                <rect width="375" height="559" fill="url(#wp_m_paint0)" />
                <g opacity="0.48" filter="url(#wp_m_f0)">
                  <circle cx="254" cy="592" r="200" fill="#3CC4E5" />
                </g>
                <g opacity="0.48" filter="url(#wp_m_f1)">
                  <circle cx="450" cy="464" r="200" fill="#3CC4E5" />
                </g>
                <g opacity="0.04">
                  <path fillRule="evenodd" clipRule="evenodd" d="M494.863 277.841L245.42 299.352L178.085 556.545L42.2216 556.545L175.021 209.568L573.679 160L701.803 556.545L556.587 556.545L494.863 277.841ZM329.311 367.713L294.708 556.633L439.924 556.633L404.386 359.296L329.311 367.713ZM77.0156 219.084L-13.9575 233.113L-201 556.708L-73.5534 556.708L77.0156 219.084Z" fill="url(#wp_m_paint1)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M556.585 556.774L485.509 940.226L573.677 954.254L701.801 556.774L556.585 556.774ZM208.943 734.474L178.082 556.777L42.2183 556.777L104.877 723.251L208.943 734.474ZM439.928 556.779L384.75 931.813L-13.9071 881.31L-200.949 556.779L-73.5029 556.779L33.1111 786.85L311.546 811.166L294.712 556.779L439.928 556.779Z" fill="url(#wp_m_paint2)" />
                </g>
              </g>
              <defs>
                <filter id="wp_m_f0" x="-146" y="192" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
                </filter>
                <filter id="wp_m_f1" x="50" y="64" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
                </filter>
                <linearGradient id="wp_m_paint0" x1="375" y1="-16.9394" x2="-66.6674" y2="39.7691" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#02102C" />
                  <stop offset="1" stopColor="#112244" />
                </linearGradient>
                <linearGradient id="wp_m_paint1" x1="336.884" y1="360.195" x2="339.506" y2="120.051" gradientUnits="userSpaceOnUse">
                  <stop offset="0.325638" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="wp_m_paint2" x1="372.84" y1="1019.42" x2="376.294" y2="567.487" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0301665" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="wp_m_clip0">
                  <rect width="375" height="559" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Hero content */}
        <div className={s.heroContent}>
          <div className={s.heroContainer}>
            <div className={s.heroInner}>

              {/* Breadcrumbs: Home > Whitepapers > {breadcrumb} */}
              <nav className={s.breadcrumbs} aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <Link href="/whitepapers">Whitepapers</Link>
                <span>{data.breadcrumb}</span>
              </nav>

              <div className={s.heroWrapper}>
                {/* Left */}
                <div className={s.heroLeft}>
                  <h1 className={s.heroTitle}>
                    <RichTitle parts={data.hero.title} accentCls={s.heroTitleAccent} />
                  </h1>
                  <div className={s.heroDescription}>
                    {data.hero.description.map((para, i) => (
                      <DescPara key={i} para={para} index={i} />
                    ))}
                    {data.hero.note && (
                      <p>
                        <strong>{data.hero.note.strong}</strong>
                        {data.hero.note.text}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right: form card */}
                <div className={s.heroForm}>
                  {!heroSubmitted ? (
                    <form onSubmit={handleHeroSubmit} noValidate>
                      <p className={s.formTitle}>
                        {data.hero.formTitle ?? "Get the guide"}
                      </p>

                      <div>
                        <label>
                          <input type="text" placeholder="Full name*"
                            value={heroForm.name}
                            onChange={(e) => setHeroForm((p) => ({ ...p, name: e.target.value }))}
                            className={heroErrors.name ? s.inputInvalid : ""}
                            aria-required="true"
                          />
                        </label>
                      </div>

                      <div>
                        <label>
                          <input type="email" placeholder="Email*"
                            value={heroForm.email}
                            onChange={(e) => setHeroForm((p) => ({ ...p, email: e.target.value }))}
                            className={heroErrors.email ? s.inputInvalid : ""}
                            aria-required="true"
                          />
                        </label>
                      </div>

                      <div className={s.selectIntentionWrapper}>
                        <CustomSelect
                          placeholder="Select interest intention*"
                          options={INTENTION_OPTIONS}
                          value={heroForm.intention}
                          onChange={(v) => setHeroForm((p) => ({ ...p, intention: v }))}
                          hasError={heroErrors.intention}
                        />
                      </div>

                      <div className={s.discussWrapper}>
                        <p>
                          <span className={s.discussLabel}>Want to discuss your project?*</span>
                          <span className={s.radioGroup}>
                            <span className={s.radioItem}>
                              <label>
                                <input type="radio" name="discuss" value="Yes"
                                  checked={heroForm.discuss === "Yes"}
                                  onChange={() => setHeroForm((p) => ({ ...p, discuss: "Yes" }))}
                                />
                                <span className={s.radioLabel}>Yes</span>
                              </label>
                            </span>
                            <span className={s.radioItem}>
                              <label>
                                <input type="radio" name="discuss" value="No"
                                  checked={heroForm.discuss === "No"}
                                  onChange={() => setHeroForm((p) => ({ ...p, discuss: "No" }))}
                                />
                                <span className={s.radioLabel}>No</span>
                              </label>
                            </span>
                          </span>
                          {heroErrors.discuss && (
                            <span className={s.fieldError}>The field is required</span>
                          )}
                        </p>
                      </div>

                      <div>
                        <label>
                          <input type="text" placeholder="Company name"
                            value={heroForm.company}
                            onChange={(e) => setHeroForm((p) => ({ ...p, company: e.target.value }))}
                          />
                        </label>
                      </div>

                      <div className={s.selectCompanyWrapper}>
                        <CustomSelect
                          placeholder="Select company type"
                          options={COMPANY_TYPE_OPTIONS}
                          value={heroForm.companyType}
                          onChange={(v) => setHeroForm((p) => ({ ...p, companyType: v }))}
                        />
                      </div>

                      <div className={s.agreementWrapper}>
                        <p>
                          <span className={s.checkboxWrap}>
                            <label>
                              <input type="checkbox"
                                checked={heroForm.agreement}
                                onChange={(e) => setHeroForm((p) => ({ ...p, agreement: e.target.checked }))}
                              />
                              <span className={s.checkboxLabel}>Agree with</span>
                            </label>
                          </span>
                          <Link href="/privacy-policy">Privacy policy</Link>
                        </p>
                        {heroErrors.agreement && (
                          <span className={s.fieldError}>The field is required</span>
                        )}
                      </div>

                      <div className={s.bottomSection}>
                        <div className={s.submitWrapper}>
                          <button type="submit" className={s.submitBtn}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.5 12V3.75C4.5 3.55 4.5 3 4.5 3S5.05 3 5.25 3H14.25L19.5 8.25V12" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                              <path d="M13.789 3V8.25H19.039" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                              <path d="M4.5 18.75H6a1.5 1.5 0 0 0 0-3H4.5v4.5" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                              <path d="M17.25 15.75h-3V20.25" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                              <path d="M16.875 18H13.875" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                              <path d="M9.375 20.25c1.657 0 3-1.343 3-3s-1.343-3-3-3H7.875v6h1.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                            </svg>
                            {data.hero.submitLabel ?? "Download PDF"}
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className={s.formSuccess}>
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M69.999 36.477V39.303C69.995 45.926 67.85 52.371 63.885 57.676C59.919 62.981 54.345 66.862 47.993 68.739C41.642 70.617 34.853 70.392 28.641 68.097C22.428 65.801 17.123 61.559 13.518 56.003C9.913 50.446 8.201 43.874 8.637 37.265C9.073 30.656 11.633 24.365 15.937 19.33C20.24 14.295 26.055 10.786 32.516 9.326C38.976 7.867 45.735 8.535 51.785 11.23" stroke="#112244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M71.389 12.509L38.668 45.263L28.852 35.446" stroke="#112244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className={s.formSuccessTitle}>Thank you!</div>
                      <a href={data.hero.pdfUrl} target="_blank" className={s.formSuccessBtn}>
                        Get your copy
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 18L17 7" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                          <path d="M8.25 6H18V15.75" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OVERVIEW — rendered only if data.overview exists
      ══════════════════════════════════════════════ */}
      {data.overview && (
        <section className={s.caseBusiness}>
          <div className={s.caseBusinessWrapper}>
            <div className={s.caseBusinessContainer}>
              <h2 className={s.caseBusinessTitle}>
                <RichTitle parts={data.overview.title} accentCls={s.caseBusinessAccent} />
              </h2>
              <div className={s.caseBusinessDescriptions}>
                <ul>
                  {data.overview.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          FAQ — rendered only if data.faq exists
      ══════════════════════════════════════════════ */}
      {data.faq && (
        <section className={s.faqSection}>
          <div className={s.faqContainer}>
            <h2 className={s.faqTitle}>
              {data.faq.title ?? "Frequently asked questions"}
            </h2>
            <div className={s.faqList}>
              {(data.faq.initialCount && !faqShowAll
                ? data.faq.items.slice(0, data.faq.initialCount)
                : data.faq.items
              ).map((item, i) => {
                const isOpen = faqOpen.has(i);
                return (
                  <div key={i} className={`${s.faqItem} ${isOpen ? s.faqActive : ""}`}>
                    <button
                      className={s.faqQuestion}
                      onClick={() => toggleFaq(i)}
                      aria-expanded={isOpen}
                    >
                      <span className={s.faqBullet} aria-hidden="true" />
                      <span>{item.question}</span>
                    </button>
                    <div className={s.faqAnswer} aria-hidden={!isOpen}>
                      <div className={s.faqAnswerInner}>
                        {item.answer.map((block, j) => (
                          <AnswerBlock key={j} block={block} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {data.faq.initialCount && !faqShowAll && (
              <button
                className={s.faqLoadMore}
                onClick={() => setFaqShowAll(true)}
              >
                Load more ›
              </button>
            )}
          </div>
        </section>
      )}

      <div className={s.postDivider} />
    </>
  );
}
