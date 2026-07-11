import React from "react";
import { Briefcase, ChevronRight } from "lucide-react";
import { EXPERIENCE } from "../utils/data";
import { Reveal, FigureLabel } from "./Ui";

export function Experience() {
  return (
    <section id="experience" className="py-20 grid-line-border ">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <FigureLabel n="04" title="Experience" />
        </Reveal>
        <div className="relative pl-8 sm:pl-10">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={i * 100} className="relative mb-12 last:mb-0">
              <span className="absolute -left-8 sm:-left-10 top-1.5 w-2.5 h-2.5 rounded-full accent-bg ring-4 ring-[#E4E7EE]" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <h3 className="font-display text-md ink-text">{e.role}</h3>
                <span className="mono text-xs ink-soft">— {e.company}</span>
                <span className="mono text-xs accent-text ml-auto">{e.period}</span>
              </div>
              {/* <ul className="space-y-1.5 mt-3">
                {e.points.map((pt) => (
                  <li key={pt} className="text-sm ink-soft leading-relaxed flex gap-2">
                    <ChevronRight size={14} className="ink-soft mt-0.5 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul> */}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}