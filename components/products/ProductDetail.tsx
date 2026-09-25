"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, type Product } from "./productsData";
import ProductWireframe from "./ProductWireframe";
import XorrisCallingWireframe from "./XorrisCallingWireframe";
import XorrisVoiceCloningWireframe from "./XorrisVoiceCloningWireframe";
import XorrisMultilingualWireframe from "./XorrisMultilingualWireframe";
import XorrisCrmWireframe from "./XorrisCrmWireframe";
import XorrisKnowledgeBaseWireframe from "./XorrisKnowledgeBaseWireframe";
import XorrisCampaignsWireframe from "./XorrisCampaignsWireframe";
import SalesHubSetupWireframe from "./SalesHubSetupWireframe";
import SalesHubFamilyQuoteWireframe from "./SalesHubFamilyQuoteWireframe";
import SalesHubRatesWireframe from "./SalesHubRatesWireframe";
import SalesHubAiLeadsWireframe from "./SalesHubAiLeadsWireframe";
import SalesHubAnalyticsWireframe from "./SalesHubAnalyticsWireframe";
import SalesHubCallLogsWireframe from "./SalesHubCallLogsWireframe";
import JoblynkTalentDiscoveryWireframe from "./JoblynkTalentDiscoveryWireframe";
import JoblynkMultiChannelWireframe from "./JoblynkMultiChannelWireframe";
import JoblynkAiInterviewsWireframe from "./JoblynkAiInterviewsWireframe";
import JoblynkQualificationWireframe from "./JoblynkQualificationWireframe";
import JoblynkWorkflowWireframe from "./JoblynkWorkflowWireframe";
import JoblynkAtsWireframe from "./JoblynkAtsWireframe";
import {
  CroquisCodingAgentWireframe,
  CroquisLivePreviewWireframe,
  CroquisResourceWireframe,
  CroquisSkillsWireframe,
  CroquisGitWireframe,
  CroquisSupervisionWireframe,
} from "./CroquisFeatureWireframes";
import {
  KoadicPosterWireframe,
  KoadicCulturalWireframe,
  KoadicWebsiteWireframe,
  KoadicProductWireframe,
  KoadicLogoWireframe,
  KoadicEditingWireframe,
} from "./KoadicFeatureWireframes";
import Faq from "@/components/home/Faq";
import LetsStart from "@/components/home/LetsStart";
import styles from "./ProductDetail.module.css";

// Order matches Xorris's own `features` array in productsData.ts (AI
// Calling, Voice Cloning, Multilingual, CRM, Knowledge Basis, Campaigns).
const XORRIS_FEATURE_WIREFRAMES = [
  <XorrisCallingWireframe key="calling" />,
  <XorrisVoiceCloningWireframe key="voice" />,
  <XorrisMultilingualWireframe key="lang" />,
  <XorrisCrmWireframe key="crm" />,
  <XorrisKnowledgeBaseWireframe key="kb" />,
  <XorrisCampaignsWireframe key="campaigns" />,
];

// Order matches SalesHub's own `features` array (Easy company & product
// setup, Easy Family Quotes, Updated rates and TOBs, AI voice agent for
// leads, Analytics, Call logs & transcripts).
const SALESHUB_FEATURE_WIREFRAMES = [
  <SalesHubSetupWireframe key="setup" />,
  <SalesHubFamilyQuoteWireframe key="quote" />,
  <SalesHubRatesWireframe key="rates" />,
  <SalesHubAiLeadsWireframe key="ai" />,
  <SalesHubAnalyticsWireframe key="analytics" />,
  <SalesHubCallLogsWireframe key="calllogs" />,
];

// Order matches Joblynk's own `features` array (Autonomous Talent
// Discovery, AI Voice/SMS/Email, AI Interviews, Qualification &
// Validation, Workflow Automation, ATS Integration).
const JOBLYNK_FEATURE_WIREFRAMES = [
  <JoblynkTalentDiscoveryWireframe key="discovery" />,
  <JoblynkMultiChannelWireframe key="channels" />,
  <JoblynkAiInterviewsWireframe key="interviews" />,
  <JoblynkQualificationWireframe key="qualification" />,
  <JoblynkWorkflowWireframe key="workflow" />,
  <JoblynkAtsWireframe key="ats" />,
];

// Order matches Croquis AI's `features` array (Coding Agent, Live Preview,
// Resource Intelligence, Skills, Git Control, Human Supervision).
const CROQUIS_FEATURE_WIREFRAMES = [
  <CroquisCodingAgentWireframe key="agent" />,
  <CroquisLivePreviewWireframe key="preview" />,
  <CroquisResourceWireframe key="resource" />,
  <CroquisSkillsWireframe key="skills" />,
  <CroquisGitWireframe key="git" />,
  <CroquisSupervisionWireframe key="supervision" />,
];

// Order matches Koadic's `features` array (Poster and Social Media,
// Cultural and Occasion Posts, Landing Pages and Websites, Product and UI
// Design, Logo and Brand Design, Design Editing).
const KOADIC_FEATURE_WIREFRAMES = [
  <KoadicPosterWireframe key="poster" />,
  <KoadicCulturalWireframe key="cultural" />,
  <KoadicWebsiteWireframe key="web" />,
  <KoadicProductWireframe key="product" />,
  <KoadicLogoWireframe key="logo" />,
  <KoadicEditingWireframe key="editing" />,
];

/** Reviewer photo from /public/reviews/, falling back to initials until the file exists. */
function ReviewAvatar({ name, src }: { name: string; src?: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name === "Customer name" ? "" : name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <span className={styles.authorAvatar} aria-hidden>
      {src && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className={styles.authorPhoto} onError={() => setFailed(true)} />
      ) : (
        initials
      )}
    </span>
  );
}

/** Title split into plain and coloured parts ("Croquis" + "AI", "Koadic" + "Designer"). */
export function titleParts(p: Product): [string, string] {
  if (p.nameAccent && p.name.endsWith(p.nameAccent)) {
    return [p.name.slice(0, -p.nameAccent.length).trim(), p.nameAccent];
  }
  return [p.name, p.suffix];
}

export default function ProductDetail({ product: p }: { product: Product }) {
  const [active, setActive] = useState(0);
  const others = PRODUCTS.filter((o) => o.slug !== p.slug);
  const bookDemoHref = p.bookDemoUrl ?? "#get-modal-popup";

  return (
    <>
      {/* Themed: hero through FAQ use this product's own colours. "More
         from Nexterse" and "Let's set you up" below stay outside this
         wrapper on purpose, so they keep the sitewide Nexterse theme
         (cyan accent / navy accent-dark) on every product page instead
         of switching per product. */}
      <div
        className={`${styles.themeWrap} ${p.theme.accentLight ? styles.hasLight : ""}`}
        style={
          {
            "--color-accent": p.theme.accent,
            ...(p.theme.onAccent ? { "--color-on-accent": p.theme.onAccent } : {}),
            "--color-accent-text": p.theme.accentText ?? p.theme.accent,
            "--color-accent-light": p.theme.accentLight ?? p.theme.accent,
            "--color-accent-hover": p.theme.accentLight ?? p.theme.accent,
            ...(p.theme.onAccentLight ? { "--color-on-accent-light": p.theme.onAccentLight } : {}),
            ...(p.theme.accentDark ? { "--color-accent-dark": p.theme.accentDark } : {}),
            ...(p.theme.onAccentDark ? { "--color-on-accent-dark": p.theme.onAccentDark } : {}),
          } as CSSProperties
        }
      >
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <span>{p.name}</span>
          </nav>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                {titleParts(p)[0]} <span className={styles.accent}>{titleParts(p)[1]}</span>
              </h1>
              <p className={styles.heroDesc}>{p.description}</p>
              <div className={styles.buttons}>
                <a
                  href={bookDemoHref}
                  {...(p.bookDemoUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="btn btn-accent"
                >
                  Book a demo
                </a>
                <a href={p.website} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Visit website
                </a>
              </div>
            </div>
            {p.images ? (
              <div className={styles.heroShot}>
                <Image src={p.images.hero} alt={`${p.name} app`} fill priority sizes="(max-width: 900px) 100vw, 60vw" className={styles.heroShotImg} />
              </div>
            ) : (
              <ProductWireframe kind={p.wireframe} name={p.name} colors={p.colors} />
            )}
          </div>
        </div>
      </section>

      {/* What you can do */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.h2}>
            What you can do with <span className={styles.accent}>{p.name}</span>
          </h2>
          <div className={styles.featureGrid}>
            <ul className={styles.featureList}>
              {p.features.map((f, i) => (
                <li key={f.title}>
                  <button
                    type="button"
                    className={`${styles.featureBtn} ${i === active ? styles.featureActive : ""}`}
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                  >
                    <span className={styles.featureTitle}>{f.title}</span>
                    {i === active && <span className={styles.featureText}>{f.text}</span>}
                  </button>
                </li>
              ))}
            </ul>
            {p.images?.features[active] ? (
              <div className={styles.shotFrame}>
                <div key={active} className={styles.shot}>
                  <Image src={p.images.features[active]} alt={p.features[active].title} fill sizes="(max-width: 900px) 70vw, 30vw" className={styles.shotImg} />
                </div>
              </div>
            ) : p.slug === "xorris" && XORRIS_FEATURE_WIREFRAMES[active] ? (
              // Per-feature wireframes, each recreated from the matching
              // real Xorris platform screen (see each component's own
              // header comment for which one).
              XORRIS_FEATURE_WIREFRAMES[active]
            ) : p.slug === "saleshub" && SALESHUB_FEATURE_WIREFRAMES[active] ? (
              SALESHUB_FEATURE_WIREFRAMES[active]
            ) : p.slug === "joblynk" && JOBLYNK_FEATURE_WIREFRAMES[active] ? (
              JOBLYNK_FEATURE_WIREFRAMES[active]
            ) : p.slug === "croquis" && CROQUIS_FEATURE_WIREFRAMES[active] ? (
              CROQUIS_FEATURE_WIREFRAMES[active]
            ) : p.slug === "koadic" && KOADIC_FEATURE_WIREFRAMES[active] ? (
              KOADIC_FEATURE_WIREFRAMES[active]
            ) : (
              <ProductWireframe key={active} kind={p.wireframe} name={p.name} colors={p.colors} />
            )}
          </div>
        </div>
      </section>

      {/* Review */}
      <section className={styles.sectionTight}>
        <div className="container">
          <figure className={styles.quoteCard}>
            <blockquote className={styles.quote}>&ldquo;{p.quote.text}&rdquo;</blockquote>
            <figcaption className={styles.author}>
              <ReviewAvatar name={p.quote.name} src={p.quote.avatar} />
              <span>
                <span className={styles.authorName}>{p.quote.name}</span>
                <span className={styles.authorRole}>{p.quote.role}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* See with your own data */}
      <section className={styles.sectionTight}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>
              See <span className={styles.accent}>{p.name}</span> with your own data
            </h2>
            <p className={styles.ctaText}>{p.ctaText}</p>
            <div className={styles.buttons}>
              <a
                href={bookDemoHref}
                {...(p.bookDemoUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="btn btn-accent"
              >
                Book a demo
              </a>
              <a href={p.website} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Visit website
              </a>
            </div>
          </div>
        </div>
      </section>

      <Faq items={p.faqs} title={`${p.name} FAQ`} />
      </div>

      {/* Untethemed: sitewide Nexterse theme, not this product's colours */}
      <section className={styles.more}>
        <div className="container">
          <h2 className={styles.h2}>
            More from <span className={styles.accent}>Nexterse</span>
          </h2>
          <div className={styles.moreGrid}>
            {others.map((o) => (
              <Link key={o.slug} href={`/products/${o.slug}`} className={styles.moreCard}>
                <h3 className={styles.moreName}>{o.name}</h3>
                <span className={styles.moreCat}>{o.category}</span>
                <p className={styles.moreText}>{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.letsStartWrap}>
        <LetsStart variant="product" />
      </div>
    </>
  );
}
