"use client";

import * as React from "react";

const LOGOS = ["Vercel", "Next.js", "Tailwind", "Framer", "Figma", "Stripe"];

export function LogoMarquee() {
  return (
    <div className="overflow-hidden py-6 border-y border-black/10 dark:border-white/10">
      <div className="flex gap-10 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
        {Array.from({ length: 2 }).map((_, r) => (
          <div key={r} className="flex gap-10">
            {LOGOS.map((l) => (
              <span
                key={l}
                className="text-muted-foreground text-sm tracking-wide"
              >
                {l}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
