import styles from "./PrivacyPolicyPage.module.css";

const CONTENTS = [
  { id: "overview", label: "Overview" },
  { id: "information", label: "Information we collect" },
  { id: "use", label: "How we use information" },
  { id: "ai-data", label: "Software and AI project data" },
  { id: "sharing", label: "Sharing and subprocessors" },
  { id: "security", label: "Security" },
  { id: "rights", label: "Your rights" },
  { id: "retention", label: "Retention" },
  { id: "contact", label: "Contact" },
];

const Tick = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="m4 10 4 4 8-9" />
  </svg>
);

export default function PrivacyPolicyPage() {
  return (
    <section className={styles.page}>
      <div className={styles.shell}>
        <article className={styles.article}>
          <p className={styles.eyebrow}>Privacy Policy</p>
          <h1>Privacy Policy for Nexterse LLC</h1>
          <p className={styles.updated}>Last updated: August 10, 2026</p>
          <p className={styles.lead}>
            Nexterse LLC is a software and AI development company. This Privacy Policy
            explains how we collect, use, protect, and disclose information when you use
            our website, contact us, request services, apply for a role, or work with us
            on software, data, and AI initiatives.
          </p>

          <section id="overview" className={styles.section}>
            <h2>Overview</h2>
            <p>
              We process personal information to communicate with prospects, customers,
              partners, candidates, and website visitors. We also process project-related
              information to design, build, modernize, and support custom software, cloud,
              data, machine learning, generative AI, agentic AI, and integration systems.
            </p>
            <ul>
              <li><Tick /><span>We collect only information that is relevant to our business relationship.</span></li>
              <li><Tick /><span>We use data to provide services, respond to requests, improve operations, and meet legal obligations.</span></li>
              <li><Tick /><span>We apply administrative, technical, and organizational safeguards to protect information.</span></li>
            </ul>
          </section>

          <section id="information" className={styles.section}>
            <h2>Information we collect</h2>
            <p>Depending on how you interact with Nexterse LLC, we may collect:</p>
            <ul>
              <li><Tick /><span>Contact details such as name, company, email address, phone number, and job title.</span></li>
              <li><Tick /><span>Project details such as business goals, technical requirements, files, messages, estimates, and meeting notes.</span></li>
              <li><Tick /><span>Website usage data such as pages visited, device information, browser type, approximate location, and referral source.</span></li>
              <li><Tick /><span>Career information such as resume details, portfolio links, work history, skills, and application responses.</span></li>
            </ul>
          </section>

          <section id="use" className={styles.section}>
            <h2>How we use information</h2>
            <p>
              We use personal and business information to operate our website, evaluate
              requests, deliver services, and maintain trustworthy customer relationships.
            </p>
            <ul>
              <li><Tick /><span>Respond to inquiries, schedule calls, and prepare estimates or proposals.</span></li>
              <li><Tick /><span>Plan, design, develop, test, deploy, support, and improve software and AI systems.</span></li>
              <li><Tick /><span>Manage contracts, billing, security reviews, compliance requests, and vendor relationships.</span></li>
              <li><Tick /><span>Review job applications and communicate with candidates.</span></li>
              <li><Tick /><span>Improve website performance, content, analytics, and user experience.</span></li>
            </ul>
          </section>

          <section id="ai-data" className={styles.section}>
            <h2>Software and AI project data</h2>
            <p>
              For AI, machine learning, RAG, GenAI, agents, analytics, and integration
              projects, customers may provide documents, datasets, workflows, logs, source
              code, system diagrams, API specifications, or sample records. We use this
              information only to evaluate, build, test, secure, and support the agreed
              project.
            </p>
            <p>
              We do not sell customer project data. We do not use confidential customer
              data to train public AI models unless a customer explicitly authorizes that
              use in a written agreement.
            </p>
          </section>

          <section id="sharing" className={styles.section}>
            <h2>Sharing and subprocessors</h2>
            <p>
              We may share information with trusted service providers that help us operate
              our business, such as hosting, analytics, communications, recruiting,
              collaboration, security, and project delivery tools. These providers are
              expected to process information only for authorized purposes.
            </p>
            <p>
              We may also disclose information when required by law, to protect rights and
              safety, to prevent fraud or abuse, or as part of a business transaction such
              as a merger, acquisition, or asset transfer.
            </p>
          </section>

          <section id="security" className={styles.section}>
            <h2>Security</h2>
            <p>
              Nexterse LLC uses reasonable safeguards designed to protect information from
              unauthorized access, misuse, loss, alteration, or disclosure. Measures may
              include access controls, least-privilege permissions, encrypted transfer,
              secure development practices, environment separation, monitoring, and vendor
              review.
            </p>
            <ul>
              <li><Tick /><span>Project access is limited to team members who need it to deliver the work.</span></li>
              <li><Tick /><span>Security practices are adapted to the project scope, data sensitivity, and customer requirements.</span></li>
              <li><Tick /><span>No method of transmission or storage is completely secure, but we work to reduce practical risk.</span></li>
            </ul>
          </section>

          <section id="rights" className={styles.section}>
            <h2>Your rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete,
              restrict, object to, or receive a copy of personal information we hold about
              you. You may also withdraw consent where processing is based on consent.
            </p>
            <p>
              To exercise privacy rights, contact us using the details below. We may need
              to verify your identity before completing a request.
            </p>
          </section>

          <section id="retention" className={styles.section}>
            <h2>Retention</h2>
            <p>
              We keep information for as long as needed to provide services, manage our
              relationship, comply with legal obligations, resolve disputes, enforce
              agreements, and maintain business records. Retention periods vary based on
              the type of information, project requirements, and applicable law.
            </p>
          </section>

          <section id="contact" className={styles.section}>
            <h2>Contact</h2>
            <p>
              If you have questions about this Privacy Policy or how Nexterse LLC handles
              personal information, contact us at{" "}
              <a href="mailto:info@nexterse.com">info@nexterse.com</a>.
            </p>
          </section>
        </article>

        <aside className={styles.aside} aria-label="Privacy policy contents">
          <div className={styles.contentsCard}>
            <h2>Contents</h2>
            <nav>
              {CONTENTS.map((item) => (
                <a href={`#${item.id}`} key={item.id}>{item.label}</a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
}
