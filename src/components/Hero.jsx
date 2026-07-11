import React , { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "../utils/data";
import { Reveal, Eyebrow } from "./Ui";

export function Hero({ onNavigate }) {
  const videoRef = useRef(null);
  const specs = [
    { k: "Location", v: PROFILE.location },
    { k: "Experience", v: PROFILE.experience },
    { k: "Focus", v: PROFILE.focus },
    { k: "Availability", v: PROFILE.availability },
  ];

  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <div className="flex justify-evenly items-center flex-col md:flex-row md:gap-10 gap-20 ">
          <div className="text-center md:text-start">
            <Eyebrow className="ink-soft text-center text-xs  mb-4">Final Year B.Tech CSE student</Eyebrow>
            
            <Reveal delay={80}>
              <h1 className="font-display text-5xl sm:text-7xl leading-[1.02] ink-text max-w-3xl">
                {PROFILE.name}
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mono text-sm sm:text-base uppercase tracking-[0.15em] accent-text mt-4">
                {PROFILE.role}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg ink-soft max-w-xl leading-relaxed">{PROFILE.tagline}</p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap justify-center md:justify-start gap-4">
                <button
                  onClick={() => onNavigate("projects")}
                  className="mono text-xs uppercase tracking-[0.12em] px-6 py-3 accent-bg text-paper rounded-sm flex items-center gap-2 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
                >
                  View Work <ArrowUpRight size={14} />
                </button>
                <button
                  onClick={() => onNavigate("contact")}
                  className="mono text-xs uppercase tracking-[0.12em] px-6 py-3 border-2 ink-border ink-text rounded-sm hover:accent-border hover:accent-text hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get in Touch
                </button>
              </div>
            </Reveal>
          </div>
             
        <Reveal delay={524}>
         
            <div className="md:w-100 w-80 h-60 md:h-80 rounded-[25px] overflow-hidden backdrop-blur-[10px] bg-white/10 border border-white/15 shadow-2xl "
            onMouseEnter={() => videoRef.current?.pause()}
            onMouseLeave={() => videoRef.current?.play()}

          >
            

            
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/intro2.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
        </div>

        <Reveal delay={320}>
          <dl className="mt-16 text-center grid grid-cols-2 sm:grid-cols-4 gap-6 border-t grid-line-border pt-6 w-full">
            {specs.map((s) => (
              <div key={s.k}>
                <dt className="mono text-[10px] uppercase tracking-[0.15em] ink-soft mb-1">{s.k}</dt>
                <dd className="text-sm ink-text font-medium">{s.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
