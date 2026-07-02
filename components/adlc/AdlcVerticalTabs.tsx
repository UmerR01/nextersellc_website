"use client";

import { useState } from "react";
import styles from "./AdlcVerticalTabs.module.css";

interface Phase {
  id: number;
  label: string;
  title: string;
  description: React.ReactNode;
  points: string[];
  icon: React.ReactNode;
}

const Phase1Icon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#vtab-clip1)">
      <mask id="vtab-mask1" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="56">
        <path d="M0 3.8147e-06H56V56H0V3.8147e-06Z" fill="white" />
      </mask>
      <g mask="url(#vtab-mask1)">
        <path d="M28 22.9688C27.0939 22.9688 26.3594 22.2342 26.3594 21.3281C26.3594 20.4221 27.0939 19.6875 28 19.6875C28.9061 19.6875 29.6406 20.4221 29.6406 21.3281C29.6406 22.2342 28.9061 22.9688 28 22.9688Z" fill="#3CC4E5" />
        <path d="M27.998 8.20312V14.7656" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M41.125 8.20312L34.5625 1.64062H21.4375L14.875 8.20312V21.3281L21.4375 27.8906H34.5625L41.125 21.3281V8.20312Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3281 41.2344H1.64062V34.6719H21.3281V41.2344Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.20312 54.3594H1.64062V47.7969H8.20312V54.3594Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3281 54.3594H14.7656V47.7969H21.3281V54.3594Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M54.3594 41.2344H34.6719V34.6719H54.3594V41.2344Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M41.2344 54.3594H34.6719V47.7969H41.2344V54.3594Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M54.3594 54.3594H47.7969V47.7969H54.3594V54.3594Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.4844 34.6719V21.3281H14.875" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M41.125 21.3281H44.5156V34.6719" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.92188 47.7969V41.2344" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.0469 41.2344V47.7969" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M51.0781 41.2344V47.7969" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M37.9531 47.7969V41.2344" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>
    <defs>
      <clipPath id="vtab-clip1">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Phase2Icon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#vtab-clip2)">
      <path d="M37.4062 1.64062H18.5938V8.20312H37.4062V1.64062Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37.625 4.92188H48.5625V54.3594H7.4375V4.92188H18.375" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48.5625 43.3125H37.8438V54.359L48.5625 43.3125Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 38.6094C33.4366 38.6094 37.8438 34.2022 37.8438 28.7656C37.8438 23.3291 33.4366 18.9219 28 18.9219C22.5634 18.9219 18.1562 23.3291 18.1562 28.7656C18.1562 34.2022 22.5634 38.6094 28 38.6094Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33.7969 28.7656H42" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.2031 28.7656H14" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 34.5625V42.7656" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 22.9688V14.7656" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="vtab-clip2">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Phase3Icon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#vtab-clip3)">
      <path d="M28.0001 22.7281C28.0001 24.6682 26.4255 26.2427 24.4855 26.2427C22.6975 26.2427 21.2196 24.9045 20.9991 23.1762C20.8744 23.1894 20.7477 23.1965 20.6196 23.1965C18.6796 23.1965 17.105 21.6219 17.105 19.6819C17.105 18.7461 17.4714 17.8956 18.0689 17.2656C16.6903 16.7903 15.6992 15.481 15.6992 13.9417C15.6992 12.4024 16.6904 11.0931 18.0689 10.6178C17.4714 9.9878 17.105 9.1373 17.105 8.20148C17.105 6.26139 18.6796 4.68694 20.6196 4.68694C20.7479 4.68694 20.8744 4.69394 20.9991 4.70717C21.2196 2.97883 22.6975 1.64062 24.4855 1.64062C26.4255 1.64062 28.0001 3.21519 28.0001 5.15517V22.7281Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 22.7281C28 24.6682 29.5746 26.2427 31.5145 26.2427C33.3026 26.2427 34.7805 24.9045 35.001 23.1762C35.1257 23.1894 35.2523 23.1965 35.3805 23.1965C37.3205 23.1965 38.8951 21.6219 38.8951 19.6819C38.8951 18.7461 38.5287 17.8956 37.9311 17.2656C39.3098 16.7903 40.3009 15.481 40.3009 13.9417C40.3009 12.4024 39.3097 11.0931 37.9311 10.6178C38.5287 9.9878 38.8951 9.1373 38.8951 8.20148C38.8951 6.26139 37.3205 4.68694 35.3805 4.68694C35.2522 4.68694 35.1257 4.69394 35.001 4.70717C34.7805 2.97883 33.3026 1.64062 31.5145 1.64062C29.5746 1.64062 28 3.21519 28 5.15517V22.7281Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38.6504 6.91298H45.5724L49.087 3.39844H54.3588" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38.6504 20.9707H45.5724L49.087 24.4854H54.3588" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.3491 6.91298H10.427L6.9125 3.39844H1.64062" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.3491 20.9707H10.427L6.9125 24.4854H1.64062" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M54.3591 13.9414H40.3008" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.64062 13.9414H15.6989" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27.9998 31.5139L20.9707 38.543L27.9998 45.5721L35.0289 38.543L27.9998 31.5139Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.2136 45.5742H1.64062V54.3606H19.2136V45.5742Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M54.3581 45.5742H36.7852V54.3606H54.3581V45.5742Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.4258 45.5722V38.543H20.9695" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45.573 45.5722V38.543H35.0293" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 31.5149V22.7285" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="vtab-clip3">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Phase4Icon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32.8628 39.9432H2.23438V2.23438H45.9138V32.6501" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.75781 11.6641H45.3897" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M41.2024 6.94922H31.4609" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M24.0745 35.2375L32.2448 30.5204V21.0862L24.0745 16.3691L15.9043 21.0862V30.5204L24.0745 35.2375Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24.0763 25.2773L24.0762 16.8906" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.1211 30.3945L24.0741 25.8027L32.1545 30.4679" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M53.7694 43.4366C53.8475 37.6524 49.2218 32.9001 43.4376 32.822C37.6534 32.7439 32.9011 37.3696 32.823 43.1538C32.7449 48.938 37.3706 53.6903 43.1548 53.7684C48.939 53.8464 53.6913 49.2208 53.7694 43.4366Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M39.2246 42.8306L43.2979 47.9509L47.3713 38.6406" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Phase5Icon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#vtab-clip5)">
      <path d="M12.5117 3.19727L16.5322 4.26312L15.4664 8.28364" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M43.4873 52.8032L39.4668 51.7373L40.5327 47.7168" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M39.7035 51.6141C44.451 49.2661 48.5385 45.4691 51.2301 40.4446C58.1032 27.6146 53.2743 11.642 40.4443 4.76888C35.4198 2.07716 29.9133 1.18072 24.6602 1.85611" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.2958 4.38477C11.5483 6.73283 7.46085 10.5298 4.76924 15.5542C-2.10389 28.3843 2.72502 44.3568 15.555 51.23C20.5795 53.9217 26.086 54.8181 31.3392 54.1426" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M43.1492 27.9997C43.1492 26.799 43.0089 25.6312 42.7449 24.5112L45.9269 21.9223L42.291 15.6247L38.4552 17.0367C36.7507 15.4106 34.6671 14.179 32.3511 13.4856L31.7001 9.43555H24.4283L23.7336 13.4601C21.4127 14.14 19.3229 15.3601 17.6094 16.9755L13.7728 15.5129L10.1368 21.8105L13.2754 24.4247C12.998 25.5712 12.85 26.7681 12.85 27.9998C12.85 29.2004 12.9903 30.3682 13.2543 31.4882L10.0723 34.0771L13.7082 40.3747L17.544 38.9628C19.2485 40.5888 21.3321 41.8205 23.6481 42.5138L24.2991 46.5639H31.5709L32.2655 42.5393C34.5865 41.8594 36.6764 40.6394 38.3898 39.0239L42.2264 40.4866L45.8624 34.189L42.7238 31.5747C43.0011 30.4283 43.1492 29.2313 43.1492 27.9997Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23.6211 28.0474L26.5078 30.9342L32.3774 25.0645" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="vtab-clip5">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Phase6Icon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#vtab-clip6)">
      <circle cx="34.6113" cy="8.30859" r="1.64062" fill="#3CC4E5" />
      <path d="M53.2656 1.65234H2.73438C2.1303 1.65234 1.64062 2.14202 1.64062 2.74609V14.9662H54.3594V2.74609C54.3594 2.14202 53.8697 1.65234 53.2656 1.65234Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.0332 8.30859H21.2856" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="47.748" cy="8.30859" r="1.64062" fill="#3CC4E5" />
      <circle cx="41.1816" cy="8.30859" r="1.64062" fill="#3CC4E5" />
      <path d="M53.2656 54.3481H2.73438C2.1303 54.3481 1.64062 53.8584 1.64062 53.2544V14.9434H54.3594V53.2545C54.3594 53.8584 53.8697 54.3481 53.2656 54.3481Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33.9825 21.8496H22.019C21.0342 23.9853 18.8749 25.4676 16.3691 25.4676V35.1904C16.3691 45.6521 27.3413 47.903 28.0006 47.903C28.6599 47.903 39.6322 46.1098 39.6322 34.9158V25.4675C37.1265 25.4677 34.9673 23.9853 33.9825 21.8496Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.1719 35.6225L26.3685 37.819L31.8281 32.3594" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="vtab-clip6">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Phase7Icon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M51.0781 43.75H4.92187C3.10975 43.75 1.64062 42.2809 1.64062 40.4688V8.53125C1.64062 6.71913 3.10975 5.25 4.92187 5.25H51.0781C52.8902 5.25 54.3594 6.71913 54.3594 8.53125V40.4688C54.3594 42.2809 52.8902 43.75 51.0781 43.75Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33.25 50.75H22.75L24.5 43.75H31.5L33.25 50.75Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.25 50.75H36.75" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1.64062 36.75H54.3594" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24.5 21C24.5 25.3493 20.9743 28.875 16.625 28.875C12.2757 28.875 8.75 25.3493 8.75 21C8.75 16.6507 12.2757 13.125 16.625 13.125C20.9743 13.125 24.5 16.6507 24.5 21Z" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.6249 13.1251V21.0001L11.0566 26.5684" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M31.5 21H47.25" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33.25 21V15.75" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M39.375 21V14" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45.5 21V12.25" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38.5 28H31.5" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M47.25 28H45.5" stroke="#3CC4E5" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PHASES: Phase[] = [
  {
    id: 1,
    label: "Phase 1: Hypothesis & Guardrails",
    title: "Phase 1: Hypothesis & Guardrails",
    description: (
      <>
        <p>Every AI initiative begins with a clear business hypothesis. We define expected ROI, operational boundaries, and measurable success criteria.</p>
        <p><strong>Business benefit</strong>: These guardrails ensure the AI system operates within strict cost and security limits from the very beginning.</p>
        <p>At this stage we also establish core safety controls:</p>
      </>
    ),
    points: [
      "Token budget modelling.",
      "Data access policies.",
      "Security classification of company data.",
      "Model selection criteria.",
    ],
    icon: <Phase1Icon />,
  },
  {
    id: 2,
    label: "Phase 2: Intent & Scope",
    title: "Phase 2: Intent & Scope",
    description: (
      <>
        <p>Next, we define exactly what the AI system is allowed to do.</p>
        <p>This includes mapping knowledge sources, defining allowed actions, and identifying system integrations.</p>
        <p><strong>Business benefit</strong>: This step prevents uncontrolled agent behavior and ensures the AI operates within a clearly defined mission.</p>
        <p>Typical elements include:</p>
      </>
    ),
    points: [
      "Internal knowledge bases and documentation.",
      "APIs and enterprise systems the AI may access.",
      "Restrictions on sensitive operations.",
    ],
    icon: <Phase2Icon />,
  },
  {
    id: 3,
    label: "Phase 3: Agentic Architecture",
    title: "Phase 3: Agentic Architecture",
    description: (
      <>
        <p>Our engineers design the orchestration layer that enables agents to reason, plan, and execute complex workflows.</p>
        <p><strong>Business benefit</strong>: The goal is to transform a language model into a reliable decision system, not just a chatbot.</p>
        <p>The architecture typically includes:</p>
      </>
    ),
    points: [
      "Agent orchestration frameworks.",
      "Memory and context management systems.",
      "Retrieval pipelines for enterprise knowledge.",
      "Multi-step task execution flows.",
    ],
    icon: <Phase3Icon />,
  },
  {
    id: 4,
    label: "Phase 4: Simulation & Proof of Value",
    title: "Phase 4: Simulation & Proof of Value",
    description: (
      <>
        <p>Before deploying an AI system into production, we test it in a controlled sandbox environment.</p>
        <p><strong>Business benefit:</strong> This step allows organizations to confirm business value before scaling development.</p>
        <p>This phase simulates real business scenarios to validate:</p>
      </>
    ),
    points: [
      "Token consumption and cost projections.",
      "Response accuracy and reasoning quality.",
      "System latency under load.",
      "Expected operational ROI.",
    ],
    icon: <Phase4Icon />,
  },
  {
    id: 5,
    label: "Phase 5: Implementation & Continuous Evaluation",
    title: "Phase 5: Implementation & Continuous Evaluation",
    description: (
      <>
        <p>Once validated, we implement the AI solution and integrate it with your systems.</p>
        <p><strong>Business benefit</strong>: These evaluations ensure the system maintains quality as it evolves.</p>
        <p>At the same time, we introduce continuous evaluation pipelines that monitor:</p>
      </>
    ),
    points: [
      "Reasoning accuracy.",
      "Hallucination rates.",
      "Response consistency.",
      "Task completion success.",
    ],
    icon: <Phase5Icon />,
  },
  {
    id: 6,
    label: "Phase 6: Red-Teaming",
    title: "Phase 6: Red-Teaming",
    description: (
      <>
        <p>AI systems must be tested against adversarial scenarios before production deployment.</p>
        <p><strong>Business benefit</strong>: This process helps identify vulnerabilities and strengthen the system&apos;s security posture.</p>
        <p>Our teams actively attempt to break or manipulate the system using techniques such as:</p>
      </>
    ),
    points: [
      "Prompt injection attacks.",
      "Jailbreak attempts.",
      "Adversarial queries.",
      "Data exfiltration simulations.",
    ],
    icon: <Phase6Icon />,
  },
  {
    id: 7,
    label: "Phase 7: Activation & AgentOps",
    title: "Phase 7: Activation & AgentOps",
    description: (
      <>
        <p>After validation, the AI system is deployed with full operational oversight.</p>
        <p><strong>Business benefit</strong>: This ensures AI agents remain reliable, transparent, and aligned with business goals over time.</p>
        <p>AgentOps infrastructure enables long-term stability through:</p>
      </>
    ),
    points: [
      "Token cost monitoring.",
      "Prompt version control.",
      "Performance dashboards.",
      "Human-in-the-loop oversight.",
    ],
    icon: <Phase7Icon />,
  },
];

export default function AdlcVerticalTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleToggle = (id: number, isOpen: boolean) => {
    if (isOpen) {
      setActiveTab(id);
    } else if (activeTab === id) {
      setActiveTab(0);
    }
  };

  return (
    <section className={styles.section} id="adlc-phases">
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleGrid}>
          <div className={styles.articleMain}>
            <h2 className={styles.title}>7 phases of Nexterse ADLC</h2>
            <div className={styles.description}>
              <p>
                Building AI systems requires more than writing code. Autonomous agents interact with
                data, make decisions, and execute tasks. Without structured oversight, this can create
                security, cost, and reliability risks.
              </p>
              <p>
                Our Agentic Development Lifecycle (ADLC) provides a controlled framework for designing,
                testing, and deploying AI systems safely and predictably.
              </p>
            </div>

            <div className={styles.tabsLayout}>
          <div className={styles.menuDesktop}>
            {PHASES.map((phase) => (
              <div
                key={phase.id}
                className={`${styles.menuItem} ${activeTab === phase.id ? styles.menuItemActive : ""}`}
                onClick={() => setActiveTab(phase.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveTab(phase.id)}
              >
                <span className={styles.menuIcon}>{phase.icon}</span>
                <span>{phase.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.contentDesktop}>
            {PHASES.map((phase) =>
              activeTab === phase.id ? (
                <div key={phase.id} className={styles.contentPanel}>
                  <div className={styles.contentTitle}>
                    <h3>{phase.title}</h3>
                  </div>
                  <div className={styles.contentDescription}>{phase.description}</div>
                  <div className={styles.contentPoints}>
                    <div className={styles.pointsList}>
                      {phase.points.map((pt) => (
                        <div key={pt} className={styles.pointItem}>
                          {pt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
            </div>

            <div className={styles.accordionMobile}>
          {PHASES.map((phase) => (
            <details
              key={phase.id}
              className={styles.accordionItem}
              open={activeTab === phase.id}
              onToggle={(e) => handleToggle(phase.id, (e.target as HTMLDetailsElement).open)}
            >
              <summary className={styles.accordionSummary}>
                <span className={styles.summaryIcon}>{phase.icon}</span>
                <span className={styles.summaryLabel}>{phase.label}</span>
                <span className={styles.summaryArrow}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path stroke="#000" strokeLinecap="square" strokeWidth="1.5" d="m13 6-5 5-5-5" />
                  </svg>
                </span>
              </summary>
              <div className={styles.accordionContent}>
                <div className={styles.contentDescription}>{phase.description}</div>
                <div className={styles.contentPoints}>
                  <div className={styles.pointsList}>
                    {phase.points.map((pt) => (
                      <div key={pt} className={styles.pointItem}>
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
