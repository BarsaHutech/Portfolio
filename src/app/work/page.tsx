"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects"

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Selected Work</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link href={`/work/${p.slug}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-200 will-change-transform hover:-translate-y-0.5">
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {p.tags.map(t => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


