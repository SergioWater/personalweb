"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()

  const linkClass = (href: string) => {
    const isActive = pathname === href
    return `font-medium text-sm transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-500 after:transition-all after:duration-300 ${
      isActive ? "text-cyan-500 after:w-full" : "text-gray-700 hover:text-cyan-500"
    }`
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-lg font-bold text-cyan-800 hover:text-cyan-600 transition-colors">
            Sergio Aguilar
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/projects" className={linkClass("/projects")}>
              Projects
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/SergioWater"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sergiowater/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:sergiowater@gmail.com"
              className="text-gray-500 hover:text-cyan-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
