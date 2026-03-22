"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import NeonMaze from "@/components/neon-maze"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { allProjects } from "@/lib/projects"

// Collect all unique tags
const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags))).sort()

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredProjects = useMemo(() => {
    if (!selectedTag) return allProjects
    return allProjects.filter((p) => p.tags.includes(selectedTag))
  }, [selectedTag])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50">
      {/* Header with Neon Maze background */}
      <div className="relative w-full h-[160px] overflow-hidden">
        <NeonMaze />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-3xl font-bold text-white" style={{ textShadow: "0 0 20px rgba(0,255,255,0.6)" }}>
            All Projects
          </h1>
        </div>
      </div>

      <Navbar />

      {/* Main content */}
      <div className="container mx-auto px-4 py-10">
        {/* Tag filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 text-sm rounded-full border transition-colors ${
              !selectedTag
                ? "bg-cyan-600 text-white border-cyan-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-cyan-300 hover:text-cyan-600"
            }`}
          >
            All ({allProjects.length})
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                selectedTag === tag
                  ? "bg-cyan-600 text-white border-cyan-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-cyan-300 hover:text-cyan-600"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100"
            >
              {/* Project image */}
              <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-cyan-100 to-cyan-200">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
              </div>

              {/* Project info */}
              <div className="flex flex-col flex-grow p-5">
                <h3 className="text-xl font-bold text-cyan-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-cyan-700 hover:text-cyan-500 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    View Code
                  </a>

                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center text-sm text-cyan-700 hover:text-cyan-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            No projects match that filter. Try a different tag.
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
