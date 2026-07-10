import React from "react";
// import { ABOUT_FACTS } from "../utils/data";
import { Reveal, FigureLabel, CornerFrame, SocialButtons ,Stat } from "./UI";

export function About() {
  return (
    <section id="profile" className="py-20 sm:py-28 border-t grid-line-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <FigureLabel title="Profile" />
        </Reveal>
        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          <Reveal className="relative">
            <div className=" relative aspect-4/5  rounded-sm flex items-center justify-center shadow-2xl  ink-border transition-transform duration-500 hover:-translate-y-1">
              <CornerFrame />
              <img src="logo1.png"></img>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-lg">Building Modern & Responsive Web Experiences</h2>

            <p className=" ink-soft leading-relaxed w-full">
              Full Stack Developer specializing in MERN Stack, Next.js, and React Native. I build scalable, production-ready web applications with modern UI, secure backend systems, AI integrations, and cloud deployment. Passionate about solving real-world problems through clean, efficient code and continuously learning new technologies.
            </p>

              <Stat/>

            <div className="mt-10">
              <SocialButtons />

            </div>

          </Reveal>

        </div>


      </div>
    </section>
  );
}
