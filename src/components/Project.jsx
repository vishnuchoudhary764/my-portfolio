import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../utils/data";
import { Reveal, FigureLabel } from "./Ui";

function ProjectThumb({ img, github, demo }) {
  return (
    <div 
    className="relative w-full rounded-4xl h-66 flex items-center justify-center overflow-hidden "
    
    >
      <img
        src={img}
        alt=""
        className="max-w-full rounded-4xl max-h-full object-fill transition-all duration-300 hover:scale-105"
      />

      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        {github && (
          
         <a   href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/80 text-white backdrop-blur-sm hover:bg-black transition-colors"
            aria-label="View code on GitHub"
          >
            <Github size={16} />
          </a>
        )}
        {demo && (
          
          <a  href={demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/80 text-white backdrop-blur-sm hover:bg-black transition-colors"
            aria-label="View live demo"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, delay }) {
  return (
    <Reveal delay={delay} className="group relative transition-transform duration-500 hover:-translate-y-1.5">
      <ProjectThumb img={project.img} github={project.github} demo={project.demo} />
      <div className="pt-5">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-2xl ink-text">{project.title}</h3>
          <span className="mono text-xs ink-soft">{project.fig}</span>
        </div>
        <p className="text-sm ink-soft mt-2 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((t) => (
            <span
              key={t}
              className="mono text-[10px] uppercase tracking-[0.08em] px-2 py-1 border grid-line-border rounded-sm ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 grid-line-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <FigureLabel n="03" title="Projects" />
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-14">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}