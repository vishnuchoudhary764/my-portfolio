import React from "react";
import { GraduationCap, Award } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "../utils/data";
import { Reveal, Eyebrow, FigureLabel } from "./Ui";

export function Education() {
  return (
    <section id="education" className="py-20 grid-line-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <FigureLabel n="05" title="Education & Certifications" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <Eyebrow className="ink-soft mb-6">Education</Eyebrow>
            {EDUCATION.map((ed) => (
              <div key={ed.school} className="border-l-2 accent-border pl-5">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap size={16} className="ink-soft" />
                  <h3 className="font-display text-xl ink-text">{ed.degree}</h3>
                </div>
                <p className="text-sm ink-text">{ed.school}</p>
                <p className="mono text-xs ink-soft mt-1">{ed.period}</p>
                <p className="text-sm ink-soft mt-2">{ed.note}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow className="ink-soft mb-6">Certifications</Eyebrow>
            <ul className="space-y-4">
              {CERTIFICATIONS.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start gap-3 border-b grid-line-border pb-4 transition-colors duration-300 hover:border-b-[var(--amber)]"
                >
                  <Award size={16} className="ink-soft mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm ink-text font-medium">{c.name}</p>
                    <p className="mono text-xs ink-soft mt-0.5">
                      {c.org} · {c.year}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}