"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject } from "@/lib/projects";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Briefcase,
} from "lucide-react";
import { use } from "react";

type PageProps = { params: Promise<{ slug: string }> };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function CaseStudyPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = getProject(slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                View Live Project
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.year && (
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-sm text-muted-foreground">Year</div>
                  <div className="font-medium">{project.year}</div>
                </div>
              </div>
            )}
            {project.client && (
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-sm text-muted-foreground">Client</div>
                  <div className="font-medium">{project.client}</div>
                </div>
              </div>
            )}
            {project.role && (
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-sm text-muted-foreground">Role</div>
                  <div className="font-medium">{project.role}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {/* Overview */}
          {project.overview && (
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-4">📖 The Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </motion.div>
          )}

          <Separator />

          {/* Challenge */}
          {project.challenge && (
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-4">
                🎯 The Problem I Solved
              </h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed">{project.challenge}</p>
              </div>
            </motion.div>
          )}

          <Separator />

          {/* Solution */}
          {project.solution && (
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-4">
                💡 How I Built It & Challenges I Overcame
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {project.solution.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="text-lg leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-6">🛠️ Tech Stack & Tools</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full border-2 bg-card font-medium text-sm hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <Separator />

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <motion.div variants={item}>
              <h3 className="text-3xl font-bold mb-6">✨ What I Built</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-lg border bg-card hover:shadow-md hover:border-primary/50 transition-all"
                  >
                    <div className="text-xl mt-0.5">✓</div>
                    <p className="text-sm leading-relaxed">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <Separator />

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-6">🚀 Real-World Impact</h2>
              <div className="grid gap-4">
                {project.results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-lg border-2 bg-gradient-to-br from-green-50 to-transparent dark:from-green-950/20 hover:from-green-100 dark:hover:from-green-950/30 transition-colors"
                  >
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      ✓
                    </div>
                    <p className="text-lg pt-0.5">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a developer who solves real problems?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            I love tackling challenging projects and finding elegant solutions.
            Let&apos;s build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Let&apos;s Talk About Your Project
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border rounded-lg hover:bg-accent transition-colors font-medium"
              >
                View Live Project
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
