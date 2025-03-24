"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { ArrowLeft, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

// Define form schema for validation with sanitization
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50)
    .trim()
    .refine((val) => /^[a-zA-Z\s'-]+$/.test(val), {
      message: "Name can only contain letters, spaces, hyphens, and apostrophes",
    }),
  email: z.string().email({ message: "Please enter a valid email address" }).trim().toLowerCase(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(500)
    .trim()
    .refine((val) => !/<script\b[^>]*>([\s\S]*?)<\/script>/gi.test(val), {
      message: "Message contains invalid content",
    }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle input changes with sanitization
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // Basic sanitization before setting state
    const sanitizedValue = value
      .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, "") // Remove script tags
      .replace(/on\w+="[^"]*"/g, "") // Remove event handlers
      .replace(/javascript:/gi, "") // Remove javascript: protocol

    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }))

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate and sanitize form data
      const validatedData = contactFormSchema.parse(formData)

      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success toast
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      })

      // Reset form
      setFormData({ name: "", email: "", message: "" })

      // Redirect back to home after short delay
      setTimeout(() => router.push("/"), 2000)
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Extract and set validation errors
        const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormValues] = err.message
          }
        })
        setErrors(fieldErrors)

        toast({
          title: "Form validation failed",
          description: "Please check the form for errors and try again.",
          variant: "destructive",
        })
      } else {
        // Handle unexpected errors
        toast({
          title: "Something went wrong",
          description: "Your message couldn't be sent. Please try again later.",
          variant: "destructive",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Back button - now in a circular shape */}
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push("/")}
            className="rounded-full w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-cyan-200 shadow-md"
          >
            <ArrowLeft className="h-5 w-5 text-cyan-700" />
            <span className="sr-only">Back to home</span>
          </Button>
        </div>

        {/* Left panel - Contact form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-cyan-900 mb-2">Get in Touch</h1>
            <p className="text-gray-600">Have a question or want to work together? Send me a message!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                className={`border ${errors.name ? "border-red-500" : "border-gray-300"}`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-500 mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.smith@example.com"
                className={`border ${errors.email ? "border-red-500" : "border-gray-300"}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-500 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-700">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I'd like to discuss a potential collaboration on a web development project..."
                className={`min-h-[120px] border ${errors.message ? "border-red-500" : "border-gray-300"}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-red-500 mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Or connect with me on{" "}
              <Link href="https://github.com/SergioWater" className="text-cyan-600 hover:underline">
                GitHub
              </Link>
            </p>
          </div>
        </div>

        {/* Right panel - Rick image */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-cyan-400 to-cyan-600 relative hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/images/rick-sanchez.gif"
                alt="Rick Sanchez from Rick and Morty"
                width={400}
                height={400}
                className="object-contain max-w-full max-h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 to-transparent opacity-40"></div>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 text-white text-center">
            <p className="text-xl font-bold drop-shadow-md">
              "Wubba Lubba Dub Dub! Let's collaborate on something awesome!"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

