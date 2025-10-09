"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/hero/HeroCanvas";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { Testimonials } from "@/components/home/Testimonials";
import {
  ScrollReveal,
  GradientText,
  GlowCard,
} from "@/components/animations/ScrollReveal";
import { ArrowRight, Code, Zap, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with GitHub-style gradient background */}
      <section className="relative mx-auto max-w-6xl px-4 py-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent opacity-50" />

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-card/50 backdrop-blur-sm text-sm"
            >
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span>Available for freelance work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
            >
              Building <GradientText>beautiful & functional</GradientText> web
              experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              I'm a freelance developer who turns ideas into reality with clean
              code and stunning design. Specialized in Next.js, React, and
              modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/work" className="flex items-center gap-2">
                  View my work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Let's talk</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-6 pt-4"
            >
              <div>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-square md:aspect-video rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient" />
            <HeroCanvas />
          </motion.div>
        </div>
      </section>

      {/* What I Do Section - GitHub Style */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I Do Best
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I specialize in creating high-performance web applications that
              users love
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1}>
            <GlowCard>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Code className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold">Clean Code</h3>
              </div>
              <p className="text-muted-foreground">
                Writing maintainable, scalable code following best practices and
                modern patterns
              </p>
            </GlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlowCard>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold">Fast Performance</h3>
              </div>
              <p className="text-muted-foreground">
                Optimizing every aspect for lightning-fast load times and smooth
                interactions
              </p>
            </GlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <GlowCard>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Sparkles className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold">Beautiful UI</h3>
              </div>
              <p className="text-muted-foreground">
                Crafting pixel-perfect interfaces that are both stunning and
                intuitive
              </p>
            </GlowCard>
          </ScrollReveal>
        </div>
      </section>

      <LogoMarquee />
      <Testimonials />

      {/* CTA Section - GitHub Style */}
      <ScrollReveal>
        <section className="mx-auto max-w-4xl px-4 py-20">
          <div className="relative rounded-2xl border bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to build something amazing?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's turn your vision into reality. I'm currently available for
                new projects.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
