import React from "react";
import { useReveal } from "../utils/hooks";
import {
  FolderKanban,
  Code2,
  BriefcaseBusiness,
  Cpu,
} from "lucide-react";

export const STATS = [
  {
    value: "7+",
    label: "Projects",
    color: "text-cyan-400",
  },
  {
    value: "60+",
    label: "DSA Solved",
    color: "text-green-400",
  },
  {
    value: "3+",
    label: "Internship",
    color: "text-yellow-400",
  },
  {
    value: "10+",
    label: "Technologies",
    color: "text-pink-400",
  },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
   value: "http://www.linkedin.com/in/vishnuchoudhary764",
    className: "bg-[#0A66C2] hover:bg-[#004182] text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    value:  "https://leetcode.com/u/vishnu_choudhary764/",
    className: "bg-white/90 hover:bg-white/70 text-black/70",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          fill="#FFA116"
          d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.132 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"
        />
        <path
          fill="#B3B3B3"
          d="M9.708 15.222a1.374 1.374 0 0 0 1.374 1.374h9.53a1.374 1.374 0 0 0 0-2.748h-9.53a1.374 1.374 0 0 0-1.374 1.374z"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
 value:  "https://github.com/vishnuchoudhary764",
    className: "bg-gray-800 hover:bg-gray-900 border text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.955-.266 1.98-.399 3-.404 1.02.005 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "HackerRank",
    value: "https://www.hackerrank.com/profile/vasanaram162",
    className: "bg-[#2EC866] hover:bg-[#25a854] text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm5.568 6.271c.53 0 .96.43.96.96v9.539c0 .53-.43.96-.96.96h-.744a.96.96 0 0 1-.96-.96v-2.938h-2.16v2.938c0 .53-.43.96-.96.96h-.744a.96.96 0 0 1-.96-.96V6.271l.001-.043h1.7v3.964h2.16V6.228h1.667zm-8.977 0c.53 0 .96.43.96.96v3.043l1.474-3.397a.96.96 0 0 1 .88-.573h.938a.427.427 0 0 1 .39.602l-1.923 4.379 2.017 4.598a.427.427 0 0 1-.39.602h-.985a.96.96 0 0 1-.883-.582l-1.518-3.554v3.176c0 .53-.43.96-.96.96h-.744a.96.96 0 0 1-.96-.96V7.188c0-.507.394-.917.899-.955L6.591 6.271z" />
      </svg>
    ),
  },
   {
    label: "Resume",
    value: "https://drive.google.com/file/d/1XrTk5UrhiMVk5zkv8-yI0Z_QWKbNFB92/view?usp=drive_link",
    className: "bg-gray-800 hover:bg-gray-900 border text-white",
  
  },
];

export  function SocialButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-6">
      {SOCIAL_LINKS.map((f) => (
        <a
          key={f.label}
          href={f.value}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-light transition-transform duration-300 hover:-translate-y-0.5 ${f.className}`}
        >
          {f.icon}
          {f.label}
        </a>
      ))}
    </div>
  );
}
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <div className={`mono uppercase tracking-[0.2em] text-xs flex items-center gap-2 ${className}`}>
      <span className="inline-block w-4 h-px bg-current opacity-60" />
      {children}
    </div>
  );
}

export function FigureLabel({ n, title }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="h-px flex-1 grid-line-bg" />
      <h2 className="font-display text-2xl sm:text-3xl ink-text">{title}</h2>
      <span className="h-px flex-1 grid-line-bg" />
    </div>
  );
}

export function CornerFrame({ className = "" }) {
  return (
    <>
      <span className={`corner corner-tl ${className}`} />
      <span className={`corner corner-tr ${className}`} />
      <span className={`corner corner-bl ${className}`} />
      <span className={`corner corner-br ${className}`} />
    </>
  );
}
export function Stat() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="group text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40"
        >
      
             
          <h3 className="text-2xl font-bold text-white">
            {stat.value}
          
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}