"use client";

import { useEffect, useState, type ReactNode } from "react";
import CroquisFeatureCard from "./CroquisFeatureCard";
import { PhosphorIcon } from "./phosphorPaths";
import { useReplay } from "./useReplay";
import styles from "./CroquisFeatureWireframes.module.css";

// Six Croquis AI feature wireframes. Each runs a short scripted timeline
// (a `stage` counter stepped by timeouts) and replays while on screen.
// Content follows how the real agent works: brief review with minimal
// questions, build + self-checked preview, web/image research, skill
// based agents, git, and the Draft to Live human review pipeline.

function useStages(total: number, stepMs: number | ((s: number) => number)) {
  const { ref, cycle } = useReplay<HTMLDivElement>(total > 8 ? 13000 : 11000);
  const [stage, setStage] = useState(0);
  useEffect(() => setStage(0), [cycle]);
  useEffect(() => {
    if (stage >= total) return;
    const id = setTimeout(() => setStage((s) => s + 1), typeof stepMs === "function" ? stepMs(stage) : stepMs);
    return () => clearTimeout(id);
  }, [stage, total, stepMs]);
  return { ref, cycle, stage };
}

const Tick = ({ on }: { on: boolean }) => (
  <span className={`${styles.tick} ${on ? styles.tickOn : ""}`}>{on && <PhosphorIcon name="CheckCircle" />}</span>
);

const Show = ({ when, children, className = "" }: { when: boolean; children: ReactNode; className?: string }) => (
  <div className={`${styles.show} ${when ? styles.shown : ""} ${className}`}>{children}</div>
);

/* 1. Coding Agent ─────────────────────────────────────────────── */
const BUILD_STEPS = ["Scaffold the project", "Build pages and booking form", "Connect the calendar", "Run and check the preview"];

export function CroquisCodingAgentWireframe() {
  const { ref, cycle, stage } = useStages(10, 800);
  return (
    <div ref={ref}>
      <CroquisFeatureCard key={cycle} title="Coding Agent" cta={<span className={styles.cta}>No code needed</span>}>
        <div className={styles.twoCol}>
          <div className={styles.chat}>
            <Show when={stage >= 1} className={styles.right}>
              <span className={`${styles.bubble} ${styles.bubbleUser}`}>I want a booking website for my yoga studio.</span>
            </Show>
            <Show when={stage >= 2}>
              <span className={styles.bubble}>Great idea. Just two quick questions before I start.</span>
            </Show>
            <Show when={stage >= 3} className={styles.chips}>
              <span className={styles.chip}>Use React?</span>
              <span className={styles.chip}>Take online payments?</span>
            </Show>
            <Show when={stage >= 4} className={styles.right}>
              <span className={`${styles.bubble} ${styles.bubbleUser}`}>Yes to both.</span>
            </Show>
            <Show when={stage >= 5}>
              <span className={styles.bubble}>Perfect. I'm going to create the project files now.</span>
            </Show>
          </div>
          <Show when={stage >= 5} className={styles.panel}>
            <div className={styles.panelHead}>
              <PhosphorIcon name="FileText" />
              Approved brief
            </div>
            {BUILD_STEPS.map((s, i) => (
              <div key={s} className={styles.stepRow}>
                <Tick on={stage >= 6 + i} />
                {s}
              </div>
            ))}
          </Show>
        </div>
      </CroquisFeatureCard>
    </div>
  );
}

/* 2. Live Preview ─────────────────────────────────────────────── */
const LOG = ["npm install", "npm run build", "Build passed", "Render check: 1 layout issue", "Fixing hero spacing", "Preview ready"];

export function CroquisLivePreviewWireframe() {
  const { ref, cycle, stage } = useStages(9, 750);
  return (
    <div ref={ref}>
      <CroquisFeatureCard
        key={cycle}
        title="Live Preview"
        cta={<span className={`${styles.cta} ${stage >= 8 ? styles.ctaGreen : ""}`}>{stage >= 8 ? "Ready" : "Building"}</span>}
      >
        <div className={styles.twoCol}>
          <div className={styles.log}>
            {LOG.map((l, i) => (
              <Show key={l} when={stage > i} className={styles.logRow}>
                <Tick on={stage > i + (i === 3 ? 1 : 0)} />
                {l}
              </Show>
            ))}
          </div>
          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <span />
              <span />
              <span />
              <em>localhost:5173</em>
            </div>
            <div className={styles.page}>
              {stage < 3 ? (
                <>
                  <span className={styles.skel} style={{ width: "60%" }} />
                  <span className={styles.skel} style={{ width: "85%" }} />
                  <span className={styles.skel} style={{ width: "40%", height: 26 }} />
                </>
              ) : (
                <>
                  <span className={`${styles.pageTitle} ${stage >= 4 && stage < 6 ? styles.glitch : ""}`}>Find your calm</span>
                  <span className={styles.pageText}>Book yoga classes online in seconds.</span>
                  <span className={styles.pageBtn}>Book a class</span>
                </>
              )}
              <Show when={stage >= 6 && stage < 9} className={styles.toast}>
                <PhosphorIcon name="CheckCircle" />
                Fixed 1 visual issue
              </Show>
            </div>
          </div>
        </div>
      </CroquisFeatureCard>
    </div>
  );
}

/* 3. Resource Intelligence ────────────────────────────────────── */
const TILES = ["#3b6fd4", "#e9a15b", "#4fb39a", "#8b6fd4"];
const QUERY = "calm yoga studio hero images";

export function CroquisResourceWireframe() {
  const { ref, cycle, stage } = useStages(9, 700);
  const typed = QUERY.slice(0, Math.min(QUERY.length, stage * 6));
  return (
    <div ref={ref}>
      <CroquisFeatureCard key={cycle} title="Resource Intelligence" cta={<span className={styles.cta}>Web search</span>}>
        <div className={styles.search}>
          <PhosphorIcon name="MagnifyingGlass" />
          <span>{typed}</span>
          <i className={styles.caret} />
        </div>
        <div className={styles.tileGrid}>
          {TILES.map((c, i) => (
            <Show key={c} when={stage >= 4} className={styles.tileWrap}>
              <span className={`${styles.tile} ${stage >= 6 && i === 2 ? styles.tilePicked : ""}`} style={{ background: `linear-gradient(135deg, ${c}, #0b1330)`, animationDelay: `${i * 0.1}s` }}>
                {stage >= 6 && i === 2 && <PhosphorIcon name="CheckCircle" />}
              </span>
              <em>Reference {i + 1}</em>
            </Show>
          ))}
        </div>
        <div className={styles.fetchRow}>
          <Show when={stage >= 6} className={styles.fetchChip}>
            <Tick on />
            Fetched 3 images and a colour palette
          </Show>
          <Show when={stage >= 8} className={styles.fetchChip}>
            <Tick on />
            Generated logo.svg for the project
          </Show>
        </div>
      </CroquisFeatureCard>
    </div>
  );
}

/* 4. Skills ───────────────────────────────────────────────────── */
const SKILLS = [
  { name: "Frontend Agent", text: "Polished, responsive interfaces", hue: 215 },
  { name: "Backend Agent", text: "APIs, databases and auth", hue: 160 },
  { name: "QA Agent", text: "Tests and bug reports", hue: 30 },
  { name: "Data Agent", text: "Dashboards and analysis", hue: 275 },
  { name: "Mobile Agent", text: "iOS and Android apps", hue: 340 },
  { name: "Docs Agent", text: "Guides and READMEs", hue: 190 },
];

export function CroquisSkillsWireframe() {
  const { ref, cycle, stage } = useStages(7, 850);
  const chosen = (i: number) => (i === 0 && stage >= 2) || (i === 2 && stage >= 4);
  return (
    <div ref={ref}>
      <CroquisFeatureCard key={cycle} title="Skills Marketplace" cta={<span className={styles.cta}>Pick your agent</span>}>
        <div className={styles.skillGrid}>
          {SKILLS.map((s, i) => (
            <div key={s.name} className={`${styles.skill} ${chosen(i) ? styles.skillOn : ""}`} style={{ animationDelay: `${i * 0.07}s` }}>
              <span className={styles.skillDot} style={{ background: `hsl(${s.hue} 70% 60%)` }} />
              <strong>{s.name}</strong>
              <span>{s.text}</span>
              <em className={chosen(i) ? styles.added : ""}>{chosen(i) ? "Added" : "Add"}</em>
            </div>
          ))}
        </div>
        <Show when={stage >= 2} className={styles.agentBar}>
          <PhosphorIcon name="UsersThree" />
          Your agent:
          <b>Frontend</b>
          {stage >= 4 && <b>+ QA</b>}
          <span className={styles.agentReady}>{stage >= 6 ? "Ready to build" : "Configuring"}</span>
        </Show>
      </CroquisFeatureCard>
    </div>
  );
}

/* 5. Git Control ──────────────────────────────────────────────── */
const COMMITS = [
  { hash: "a41f9c2", msg: "Scaffold project structure" },
  { hash: "7be03d1", msg: "Add booking calendar" },
  { hash: "c92a6f8", msg: "Refine mobile layout" },
];

export function CroquisGitWireframe() {
  const { ref, cycle, stage } = useStages(9, 750);
  return (
    <div ref={ref}>
      <CroquisFeatureCard
        key={cycle}
        title="Git Control"
        cta={
          <span className={styles.cta}>
            <PhosphorIcon name="CheckCircle" />
            GitHub connected
          </span>
        }
      >
        <div className={styles.repo}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="6" cy="6" r="2.5" />
            <circle cx="6" cy="18" r="2.5" />
            <circle cx="18" cy="9" r="2.5" />
            <path d="M6 8.5v7M18 11.5c0 4-6 3-11 5" />
          </svg>
          <b>yoga-studio/site</b>
          <span className={styles.branch}>main</span>
        </div>
        <div className={styles.commits}>
          {COMMITS.map((c, i) => (
            <Show key={c.hash} when={stage >= 1 + i} className={styles.commit}>
              <code>{c.hash}</code>
              <span>{c.msg}</span>
              <em>Croquis AI</em>
            </Show>
          ))}
        </div>
        <div className={styles.actions}>
          <span className={`${styles.actionBtn} ${stage >= 4 && stage < 6 ? styles.actionBusy : ""}`}>
            Pull
            <i>{stage >= 4 ? "Up to date" : ""}</i>
          </span>
          <span className={`${styles.actionBtn} ${stage >= 6 && stage < 8 ? styles.actionBusy : ""}`}>
            Push
            <i>{stage >= 8 ? "3 commits pushed" : stage >= 6 ? "Pushing…" : ""}</i>
          </span>
          <Show when={stage >= 8} className={styles.revert}>
            Revert to "Add booking calendar"
          </Show>
        </div>
      </CroquisFeatureCard>
    </div>
  );
}

/* 6. Human Supervision ────────────────────────────────────────── */
const STATES = ["Draft", "In Progress", "In Review", "Pending Push", "Revising", "Live"];

export function CroquisSupervisionWireframe() {
  const { ref, cycle, stage } = useStages(8, 900);
  const state = stage < 1 ? 0 : stage < 2 ? 1 : stage < 3 ? 2 : stage < 5 ? 3 : stage < 6 ? 4 : stage < 7 ? 2 : 5;
  return (
    <div ref={ref}>
      <CroquisFeatureCard key={cycle} title="Human Supervision" cta={<span className={styles.cta}>Roles: Developer, QA</span>}>
        <div className={styles.stepper}>
          <span className={styles.stepTrack} />
          <span className={styles.stepFill} style={{ width: `${(state / 5) * 88}%` }} />
          {STATES.map((s, i) => (
            <div key={s} className={styles.stepNode}>
              <span className={`${styles.dot} ${i < state ? styles.dotDone : ""} ${i === state ? styles.dotNow : ""}`} />
              <em>{s}</em>
            </div>
          ))}
        </div>
        <div className={styles.thread}>
          <Show when={stage >= 2} className={styles.msg}>
            <span className={styles.role}>QA</span>
            <p>Button contrast is too low on mobile.</p>
          </Show>
          <Show when={stage >= 3} className={styles.msg}>
            <span className={`${styles.role} ${styles.roleDev}`}>Developer</span>
            <p>Approved.</p>
            <span className={`${styles.approve} ${stage >= 4 ? styles.approved : ""}`}>{stage >= 4 ? "Pushed to agent" : "Approve and push"}</span>
          </Show>
          <Show when={stage >= 5} className={styles.msg}>
            <span className={`${styles.role} ${styles.roleAgent}`}>Agent</span>
            <p>Fixed. Contrast raised to 4.5:1 on all buttons.</p>
          </Show>
          <Show when={stage >= 7} className={styles.liveNote}>
            <PhosphorIcon name="CheckCircle" />
            Deployed. The project is Live.
          </Show>
        </div>
      </CroquisFeatureCard>
    </div>
  );
}
