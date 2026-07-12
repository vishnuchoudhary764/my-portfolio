import React, { useCallback } from "react";
import { NAV_ITEMS } from "./utils/data";
import { useRef, useEffect } from "react";
import { useActiveSection } from "./utils/hooks";
import { Navbar, SideRuler } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Project";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import "./index.css";
import { MenuNav } from "./components/Ui";

export default function App() {
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  const handleNavigate = useCallback((id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="portfolio-root min-h-screen ink-text">

      <Navbar active={active} onNavigate={handleNavigate} />
      {/* <SideRuler active={active} onNavigate={handleNavigate} /> */}
      <MenuNav active={active} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}