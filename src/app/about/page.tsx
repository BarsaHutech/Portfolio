"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
      >
        About
      </motion.h1>
      <div className="space-y-4 text-muted-foreground">
        <p>
          I’m Barsa Priyadarshini Jena, a frontend engineer and designer focused
          on building fast, accessible, and beautifully animated web
          experiences.
        </p>
        <p>
          Skilled in Next.js, Tailwind, and motion design. I partner with
          startups to ship results quickly and thoughtfully.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-3"
        >
          {[
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Framer Motion",
            "R3F",
            "Accessibility",
          ].map((s, i) => (
            <motion.div
              key={s}
              className="rounded-md border border-black/10 dark:border-white/10 px-3 py-2 text-sm hover:-translate-y-0.5 hover:shadow transition-all cursor-pointer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(147, 51, 234, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {s}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
