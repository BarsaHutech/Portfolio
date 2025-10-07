"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS = [
  {
    quote: "Delivered beyond expectations and ahead of schedule.",
    name: "A. Singh",
    role: "Founder, FinTech",
  },
  {
    quote: "Clean, fast, and accessible. Our metrics improved immediately.",
    name: "R. Patel",
    role: "VP Product",
  },
  {
    quote: "A pleasure to work with; thoughtful design and solid engineering.",
    name: "S. Rao",
    role: "CTO",
  },
];

export function Testimonials() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % ITEMS.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <div className="relative h-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl">“{ITEMS[i].quote}”</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {ITEMS[i].name} — {ITEMS[i].role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {ITEMS.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full ${i === idx ? "bg-foreground" : "bg-foreground/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
