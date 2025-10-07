"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
        Selected Work
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={`/work/${p.slug}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-200 will-change-transform hover:-translate-y-0.5 group cursor-pointer">
                <CardHeader>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100"
                  />
                  <CardTitle className="relative z-10">{p.title}</CardTitle>
                  <CardDescription className="relative z-10">
                    {p.description}
                  </CardDescription>
                  <div className="mt-3 flex gap-2 flex-wrap relative z-10">
                    {p.tags.map((t) => (
                      <motion.div
                        key={t}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge variant="secondary">{t}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
