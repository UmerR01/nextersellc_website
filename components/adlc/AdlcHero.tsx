import styles from "./AdlcHero.module.css";
import AboutNavHeroBackground from "@/components/AboutNavHeroBackground";

const CheckIcon = () => (
  <svg
    className={styles.checkIcon}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      stroke="#3CC4E5"
      strokeLinecap="square"
      strokeWidth="1.5"
      d="m20.25 6.75-10.5 10.5L4.5 12"
    />
  </svg>
);

export default function AdlcHero() {
  return (
    <section className={styles.section}>
      <div className={styles.bgWrapper} aria-hidden>
        <div className={styles.desktopBg}>
          <svg
            preserveAspectRatio="xMidYMid slice"
            width="375"
            height="529"
            viewBox="0 0 375 529"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.bgSvg}
          >
            <g clipPath="url(#adlc-hero-clip-desktop)">
              <rect width="375" height="529" fill="url(#adlc-hero-grad0-desktop)" />
              <g opacity="0.48" filter="url(#adlc-hero-f0-desktop)">
                <circle cx="254" cy="560" r="200" fill="#3CC4E5" />
              </g>
              <g opacity="0.48" filter="url(#adlc-hero-f1-desktop)">
                <circle cx="450" cy="432" r="200" fill="#3CC4E5" />
              </g>
              <g opacity="0.04">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M494.865 245.841L245.422 267.352L178.087 524.544L42.2236 524.544L175.023 177.568L573.681 128L701.805 524.545L556.589 524.545L494.865 245.841ZM329.309 335.713L294.706 524.632L439.922 524.632L404.384 327.295L329.309 335.713ZM77.0156 187.083L-13.9575 201.112L-201 524.707L-73.5534 524.707L77.0156 187.083Z"
                  fill="url(#adlc-hero-grad1-desktop)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M556.589 524.773L485.513 908.225L573.681 922.253L701.805 524.773L556.589 524.773ZM208.945 702.473L178.083 524.776L42.2202 524.776L104.879 691.25L208.945 702.473ZM439.93 524.779L384.752 899.813L-13.9052 849.309L-200.947 524.778L-73.501 524.778L33.1131 754.849L311.548 779.166L294.714 524.778L439.93 524.779Z"
                  fill="url(#adlc-hero-grad2-desktop)"
                />
              </g>
            </g>
            <defs>
              <filter
                id="adlc-hero-f0-desktop"
                x="-146"
                y="160"
                width="800"
                height="800"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
              </filter>
              <filter
                id="adlc-hero-f1-desktop"
                x="50"
                y="32"
                width="800"
                height="800"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient
                id="adlc-hero-grad0-desktop"
                x1="375"
                y1="-16.0303"
                x2="-65.8335"
                y2="43.781"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <linearGradient
                id="adlc-hero-grad1-desktop"
                x1="336.885"
                y1="328.194"
                x2="339.508"
                y2="88.0503"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.325638" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="adlc-hero-grad2-desktop"
                x1="372.843"
                y1="987.415"
                x2="376.298"
                y2="535.486"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0301665" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <clipPath id="adlc-hero-clip-desktop">
                <rect width="375" height="529" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.mobileBg}>
          <svg
            preserveAspectRatio="xMidYMid slice"
            width="375"
            height="853"
            viewBox="0 0 375 853"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.bgSvg}
          >
            <g clipPath="url(#adlc-hero-clip-mobile)">
              <rect width="375" height="853" fill="url(#adlc-hero-grad0-mobile)" />
              <g opacity="0.48" filter="url(#adlc-hero-f0-mobile)">
                <circle cx="254" cy="665" r="200" fill="#3CC4E5" />
              </g>
              <g opacity="0.48" filter="url(#adlc-hero-f1-mobile)">
                <circle cx="450" cy="537" r="200" fill="#3CC4E5" />
              </g>
              <g opacity="0.04">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M494.865 577.841L245.422 599.352L178.087 856.544L42.2236 856.544L175.023 509.568L573.681 460L701.805 856.545L556.589 856.545L494.865 577.841ZM329.309 667.713L294.706 856.632L439.922 856.632L404.384 659.295L329.309 667.713ZM77.0156 519.083L-13.9575 533.112L-201 856.707L-73.5534 856.707L77.0156 519.083Z"
                  fill="url(#adlc-hero-grad1-mobile)"
                />
              </g>
            </g>
            <defs>
              <filter
                id="adlc-hero-f0-mobile"
                x="-146"
                y="265"
                width="800"
                height="800"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
              </filter>
              <filter
                id="adlc-hero-f1-mobile"
                x="50"
                y="137"
                width="800"
                height="800"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient
                id="adlc-hero-grad0-mobile"
                x1="375"
                y1="-25.8486"
                x2="-70.7924"
                y2="11.6616"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#02102C" />
                <stop offset="1" stopColor="#112244" />
              </linearGradient>
              <linearGradient
                id="adlc-hero-grad1-mobile"
                x1="336.885"
                y1="660.194"
                x2="339.508"
                y2="420.05"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.325638" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <clipPath id="adlc-hero-clip-mobile">
                <rect width="375" height="853" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <AboutNavHeroBackground />
      <div className="container">
        <div className={styles.wrapper}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className={styles.breadcrumbSep}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path stroke="rgba(255,255,255,0.5)" strokeLinecap="square" d="m6 4 4 4-4 4" />
              </svg>
            </span>
            <span>Agentic development lifecycle (ADLC)</span>
          </nav>

          <h1 className={styles.title}>
            Engineering certainty for AI Era: Agentic development lifecycle (
            <span className={styles.titleAccent}>ADLC</span>)
          </h1>

          <div className={styles.description}>
            <p>
              Autonomous agents and generative AI require a new engineering approach. At Nexterse,
              we build secure, predictable AI systems using the Agentic Development Lifecycle
              (ADLC) &mdash; a structured framework that controls risk, manages costs, and delivers
              measurable ROI.
            </p>
          </div>

          <div className={styles.points}>
            <div className={styles.pointCol}>
              <div className={styles.point}>
                <CheckIcon />
                Predictable AI implementation timelines
              </div>
            </div>
            <div className={styles.pointCol}>
              <div className={styles.point}>
                <CheckIcon />
                Controlled token and infrastructure costs
              </div>
            </div>
            <div className={styles.pointCol}>
              <div className={styles.point}>
                <CheckIcon />
                Enterprise-grade security and data isolation
              </div>
            </div>
          </div>

          <div className={styles.buttons}>
            <a href="#contact" className={styles.btnPrimary}>
              Calculate your AI ROI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
