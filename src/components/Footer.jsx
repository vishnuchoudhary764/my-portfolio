import React from "react";
import { MapPin } from "lucide-react";
import { PROFILE } from "../utils/data";

export function Footer() {
  return (
    <footer className="border-t grid-line-border py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="mono text-[11px] ink-soft uppercase tracking-0.1em">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <div className="flex items-center gap-1.5 mono text-[11px] ink-soft">
          <MapPin size={12} /> {PROFILE.location}
        </div>
      </div>
    </footer>
  );
}