import React, { useState } from "react";
import { NAV_ITEMS } from "../utils/data";
import { Menu, X } from "lucide-react";


export function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm ">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate("top")} className="flex items-center gap-2 group">
          VR
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="mono text-xs uppercase ink-text tracking-0.12em pb-1 hover:border-b-2 hover:border-orange-400 transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center ink-text"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`md:hidden  border-t grid-line-border overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-80" : "max-h-0"
          }`}
      >
        <div className="px-5 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setOpen(false);
              }}
              className="mono text-sm  tracking-[0.12em] text-right text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

      </div>
    </header>

  );
}

/** Desktop-only dot rail on the right edge, mirrors nav for quick jumping while scrolling. */
export function SideRuler({ active, onNavigate }) {
  return (
    <div className="hidden lg:flex flex-col items-end gap-5 fixed right-6 top-1/2 -translate-y-1/2 z-30">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className="flex items-center gap-2 group"
          aria-label={item.label}
        >
          <span
            className={`mono text-[10px] tracking-0.1em transition-opacity duration-300 ${active === item.id ? "opacity-100 ink-text" : "opacity-0 group-hover:opacity-60 ink-soft"
              }`}
          >
            {item.label}
          </span>
          <span
            className={`h-px transition-all duration-300 ${active === item.id ? "w-8 accent-bg" : "w-4 grid-line-bg group-hover:w-6"
              }`}
          />
        </button>
      ))}
    </div>
  );
}