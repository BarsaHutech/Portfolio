"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/hero/HeroCanvas";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Designer & Frontend Engineer crafting delightful web experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-muted-foreground text-lg"
          >
            I help startups and brands ship fast, accessible, and beautiful
            websites that convert.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-3"
          >
            <Button asChild>
              <Link href="/work">View my work</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/contact">Start a project</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="aspect-video rounded-xl border border-black/10 dark:border-white/10 overflow-hidden"
        >
          <HeroCanvas />
        </motion.div>
      </div>
      <LogoMarquee />
      <Testimonials />
    </section>
  );
}
