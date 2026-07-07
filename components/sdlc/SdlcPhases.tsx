import styles from "./SdlcPhases.module.css";

const phases = [
  {
    number: 1,
    title: "Phase 1 – Discovery",
    content: (
      <>
        <p><strong>Purpose: </strong>Define what gets built, for whom, and under what constraints – before design or development begins. <span className={styles.inlineAccent}>Discovery</span> converts business intent into documented requirements that the full team can build against.</p>
        <p><strong>Deliverables:</strong></p>
        <ul>
          <li>Product backlog with MoSCoW-prioritised requirements</li>
          <li>Software Requirements Specification (SRS)</li>
          <li>Risk register with identified risks and mitigation notes</li>
          <li>Timeline and resource plan</li>
          <li>Project scope document and stakeholder sign-off</li>
        </ul>
        <p><strong>Team roles active in this phase:</strong></p>
        <ul>
          <li>Account Manager</li>
          <li>Business Analyst (lead)</li>
          <li>Project Manager</li>
          <li>Solution Architect</li>
        </ul>
        <p><strong>Tools:</strong></p>
        <ul>
          <li>Jira – backlog and task management</li>
          <li>Confluence – requirements documentation and SRS</li>
          <li>Miro – stakeholder workshops and process mapping</li>
        </ul>
      </>
    ),
  },
  {
    number: 2,
    title: "Phase 2 – Design",
    content: (
      <>
        <p><strong>Purpose: </strong>Translate approved requirements into architecture and interface documentation that development teams can build against without ambiguity.</p>
        <p><strong>Deliverables:</strong></p>
        <ul>
          <li>High-level design (HLD): module descriptions and dependencies, database schema, architecture diagrams, technology selections</li>
          <li>Low-level design (LLD): functional module logic, detailed database tables, interface specifications, module inputs and outputs</li>
          <li>UI/UX wireframes and clickable prototype</li>
          <li>API contract specification</li>
          <li>Architecture decision records (ADRs)</li>
        </ul>
        <p><strong>Team roles active in this phase:</strong></p>
        <ul>
          <li>Solution Architect (lead)</li>
          <li>UX/UI Designer</li>
          <li>Project Manager</li>
          <li>Business Analyst (review and sign-off)</li>
        </ul>
        <p><strong>Tools:</strong></p>
        <ul>
          <li>Confluence – HLD and LLD documentation</li>
          <li>Figma – UI/UX wireframes and interactive prototypes</li>
          <li>draw.io / Lucidchart – architecture diagrams</li>
        </ul>
      </>
    ),
  },
  {
    number: 3,
    title: "Phase 3 – Development",
    content: (
      <>
        <p><strong>Purpose: </strong>Build the approved software in prioritised increments, with continuous integration and structured code review at each step.</p>
        <p><strong>Deliverables:</strong></p>
        <ul>
          <li>Working software increments, reviewed and merged per sprint</li>
          <li>Automated test coverage for completed modules</li>
          <li>Sprint demos – recorded or live</li>
          <li>Updated product backlog after each sprint</li>
          <li>API documentation (Swagger / OpenAPI)</li>
        </ul>
        <p><strong>Team roles active in this phase:</strong></p>
        <ul>
          <li>Developer (lead)</li>
          <li>Project Manager</li>
          <li>QA Engineer (running in parallel)</li>
          <li>Solution Architect (architecture governance)</li>
        </ul>
        <p><strong>Tools:</strong></p>
        <ul>
          <li>Jira – sprint management and task tracking</li>
          <li>GitHub / GitLab – version control and code review</li>
          <li>GitLab CI / GitHub Actions – CI/CD pipeline</li>
        </ul>
      </>
    ),
  },
  {
    number: 4,
    title: "Phase 4 – Testing",
    content: (
      <>
        <p><strong>Purpose: </strong>Verify that the delivered software meets the accepted requirements and operates correctly under the conditions defined in the test plan.</p>
        <p><strong>Deliverables:</strong></p>
        <ul>
          <li>Test plan and test case documentation</li>
          <li>Bug reports with priority and severity classification</li>
          <li>Regression test results</li>
          <li>Performance test report (where applicable)</li>
          <li>QA sign-off document</li>
        </ul>
        <p><strong>Team roles active in this phase:</strong></p>
        <ul>
          <li>QA Engineer (lead)</li>
          <li>Developer (bug resolution)</li>
          <li>Project Manager</li>
          <li>Business Analyst (acceptance review)</li>
        </ul>
        <p><strong>Tools:</strong></p>
        <ul>
          <li>Jira – bug tracking and status management</li>
          <li>Selenium / Playwright – UI and functional test automation</li>
          <li>Postman – API testing</li>
          <li>k6 / JMeter – performance testing (where applicable)</li>
        </ul>
      </>
    ),
  },
  {
    number: 5,
    title: "Phase 5 – Deployment",
    content: (
      <>
        <p><strong>Purpose: </strong>Release the verified build to production under a controlled plan, with a confirmed rollback path and monitored stability.</p>
        <p><strong>Deliverables:</strong></p>
        <ul>
          <li>Deployment plan and step-by-step runbook</li>
          <li>Production environment pre-deployment checklist</li>
          <li>Documented rollback plan</li>
          <li>Post-deployment monitoring report</li>
          <li>Go-live acceptance sign-off</li>
        </ul>
        <p><strong>Team roles active in this phase:</strong></p>
        <ul>
          <li>DevOps Engineer (lead)</li>
          <li>QA Engineer (production verification)</li>
          <li>Project Manager</li>
          <li>Developer (standby for hotfixes)</li>
        </ul>
        <p><strong>Tools:</strong></p>
        <ul>
          <li>GitLab CI / GitHub Actions – deployment pipelines</li>
          <li>Terraform / Ansible – infrastructure provisioning</li>
          <li>Grafana / Datadog – post-deployment monitoring</li>
        </ul>
      </>
    ),
  },
  {
    number: 6,
    title: "Phase 6 – Maintenance",
    content: (
      <>
        <p><strong>Purpose: </strong>Keep the delivered software stable, current, and aligned with evolving business requirements after launch.</p>
        <p><strong>Deliverables:</strong></p>
        <ul>
          <li>Bug-fix releases on the agreed response SLA</li>
          <li>Dependency and security updates</li>
          <li>New feature increments per the maintenance backlog</li>
          <li>Periodic maintenance and health reports</li>
          <li>Incident reports for P1 and P2 issues</li>
        </ul>
        <p><strong>Team roles active in this phase:</strong></p>
        <ul>
          <li>Developer</li>
          <li>QA Engineer</li>
          <li>Project Manager</li>
          <li>DevOps Engineer</li>
        </ul>
        <p><strong>Tools:</strong></p>
        <ul>
          <li>Jira – maintenance backlog and release tracking</li>
          <li>Grafana / Datadog – monitoring and alerting</li>
          <li>PagerDuty / Opsgenie – incident management (where applicable)</li>
        </ul>
      </>
    ),
  },
];

export default function SdlcPhases() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.content}>
            <h2 className={styles.title}>
              <span className={styles.accent}>Inside</span> each SDLC phase: purpose, deliverables, team roles
            </h2>
            <div className={styles.steps}>
              {phases.map((phase) => (
                <div key={phase.number} className={styles.step}>
                  <div className={styles.stepNumber}>
                    <span>{phase.number}</span>
                  </div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepTitle}>{phase.title}</div>
                    <div className={styles.stepDescription}>{phase.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
