"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const SERVICES = [
  { title: "Website Design & Build", desc: "End-to-end design and development with Next.js." },
  { title: "UI Audit & Performance", desc: "Improve UX, accessibility, and Core Web Vitals." },
  { title: "Design Systems", desc: "Scalable components and tokens with shadcn/ui + Tailwind." },
]

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-5xl font-bold tracking-tight mb-8"
      >
        Services
      </motion.h1>
      <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i*0.05 }}>
            <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription>{s.desc}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


