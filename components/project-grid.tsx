"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  tags: string[]
}

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)

  // Handle keyboard navigation within the grid
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const rowSize = 3 // 3 columns per row
    const totalItems = projects.length

    switch (e.key) {
      case "ArrowRight":
        if (index % rowSize < rowSize - 1 && index + 1 < totalItems) {
          setFocusedIndex(index + 1)
          document.getElementById(`project-${index + 1}`)?.focus()
        }
        break
      case "ArrowLeft":
        if (index % rowSize > 0) {
          setFocusedIndex(index - 1)
          document.getElementById(`project-${index - 1}`)?.focus()
        }
        break
      case "ArrowDown":
        if (index + rowSize < totalItems) {
          setFocusedIndex(index + rowSize)
          document.getElementById(`project-${index + rowSize}`)?.focus()
        }
        break
      case "ArrowUp":
        if (index - rowSize >= 0) {
          setFocusedIndex(index - rowSize)
          document.getElementById(`project-${index - rowSize}`)?.focus()
        }
        break
      default:
        break
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={project.id}
          id={`project-${index}`}
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(null)}
          className={`group flex flex-col bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100 ${
            focusedIndex === index ? "ring-2 ring-cyan-400 ring-offset-2" : ""
          }`}
        >
          {/* Project image */}
          <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-cyan-100 to-cyan-200">
            {project.imageUrl ? (
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                  {project.title.charAt(0)}
                </div>
              </div>
            )}

            {/* Crystalline overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Project info */}
          <div className="flex flex-col flex-grow p-5">
            <h3 className="text-xl font-bold text-cyan-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-cyan-700 hover:text-cyan-500 transition-colors"
              >
                <Github className="w-4 h-4 mr-1" />
                View Code
              </Link>

              <Link
                href={`/projects/${project.id}`}
                className="flex items-center text-sm text-cyan-700 hover:text-cyan-500 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Details
              </Link>
            </div>
          </div>

          {/* Crystalline hover effect */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-400/5 to-cyan-600/5 backdrop-blur-[1px]"></div>
        </div>
      ))}

      {/* Fill empty spaces with placeholder cards to maintain grid layout */}
      {projects.length % 3 !== 0 &&
        Array.from({ length: 3 - (projects.length % 3) }).map((_, i) => (
          <div key={`placeholder-${i}`} className="hidden lg:block bg-transparent" />
        ))}
    </div>
  )
}

