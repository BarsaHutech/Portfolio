"use client"

import { notFound } from "next/navigation"
import { getProject } from "@/lib/projects"
import { motion } from "framer-motion"

type PageProps = { params: { slug: string } }

export default function CaseStudyPage({ params }: PageProps) {
  const project = getProject(params.slug)
  if (!project) return notFound()
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
      >
        {project.title}
      </motion.h1>
      <p className="text-muted-foreground mb-8">{project.description}</p>
      <div className="prose dark:prose-invert">
        <p>
          Problem → process → results. Replace this with your detailed case study
          including metrics, screenshots, and learnings.
        </p>
      </div>
    </section>
  )
}


