import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

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

// Rate limiting map
const ipRequestMap = new Map<string, { count: number; timestamp: number }>()

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown"

    // Check rate limit
    const now = Date.now()
    const ipData = ipRequestMap.get(ip)

    if (ipData) {
      // Reset count if window has passed
      if (now - ipData.timestamp > RATE_LIMIT_WINDOW) {
        ipRequestMap.set(ip, { count: 1, timestamp: now })
      } else if (ipData.count >= MAX_REQUESTS_PER_WINDOW) {
        // Too many requests
        return NextResponse.json({ error: "Too many requests, please try again later" }, { status: 429 })
      } else {
        // Increment count
        ipRequestMap.set(ip, { count: ipData.count + 1, timestamp: ipData.timestamp })
      }
    } else {
      // First request from this IP
      ipRequestMap.set(ip, { count: 1, timestamp: now })
    }

    // Parse request body
    const body = await request.json()

    // Sanitize input data
    const sanitizedBody = {
      name: (body.name || "")
        .toString()
        .trim()
        .replace(/<[^>]*>/g, ""),
      email: (body.email || "")
        .toString()
        .trim()
        .toLowerCase()
        .replace(/<[^>]*>/g, ""),
      message: (body.message || "")
        .toString()
        .trim()
        .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, ""),
    }

    // Validate form data
    const validatedData = contactFormSchema.parse(sanitizedBody)

    // Here you would typically send an email or store the contact request
    // For example, using a service like SendGrid, Mailgun, or storing in a database

    // For now, we'll just simulate a successful response
    return NextResponse.json({ success: true, message: "Message received successfully" })
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Validation error
      return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 })
    }

    // Generic error
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

