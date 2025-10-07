"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

type FormValues = z.infer<typeof schema>

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(values: FormValues) {
    const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) })
    if (res.ok) {
      toast.success("Thanks! I’ll get back to you shortly.")
      reset()
    } else {
      toast.error("Something went wrong. Please try again.")
    }
  }

  return (
    <section className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input placeholder="Your name" {...register("name")} />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Input placeholder="Your email" type="email" {...register("email")} />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Textarea placeholder="Tell me about your project" rows={6} {...register("message")} />
          {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
        </div>
        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send message"}</Button>
      </form>
    </section>
  )
}


