import React from "react";
import { SKILLS } from "../utils/data";
import { useReveal } from "../utils/hooks";
import { Reveal, Eyebrow, FigureLabel, Stat } from "./Ui";

function SkillBar({ name, level, delay }) {
  const [ref, visible] = useReveal(0.4);
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-sm ink-text font-medium">{name}</span>
        <span className="mono text-xs ink-soft">{visible ? level : 0}%</span>
      </div>
      <div className="h-1.5 grid-line-bg rounded-full overflow-hidden relative">
        <div
          className="h-full accent-bg rounded-full transition-all ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDuration: "1100ms",
            transitionDelay: `${delay}ms`,
          }}
        />
        {[20, 40, 60, 80].map((tick) => (
          <span
            key={tick}
            className="absolute top-0 bottom-0 w-px bg-white/40"
            style={{ left: `${tick}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t grid-line-border ">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <FigureLabel n="02" title="Skills" />
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-x-10 gap-y-12  ">
          {SKILLS.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 100}>
              <Eyebrow className="ink-soft mb-6">{group.group}</Eyebrow>
              {group.items.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}