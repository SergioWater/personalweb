"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, Globe, Calendar, Tag } from "lucide-react"
import NeonMaze from "@/components/neon-maze"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { allProjects, type Project } from "@/lib/projects"

export default function ProjectDetailPage() {
  const router = useRouter()
  const { id } = useParams()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundProject = allProjects.find((p) => p.id === id)

    if (foundProject) {
      setProject(foundProject)
    } else {
      router.push("/projects")
    }

    setLoading(false)
  }, [id, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-cyan-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-48 bg-cyan-200 rounded-md mb-4"></div>
          <div className="h-6 w-64 bg-cyan-100 rounded-md"></div>
        </div>
      </div>
    )
  }

  if (!project) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50">
      {/* Header with Neon Maze background */}
      <div className="relative w-full h-[140px] overflow-hidden">
        <NeonMaze />
      </div>

      <Navbar />

      {/* Project details */}
      <div className="container mx-auto px-4 py-10">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center text-cyan-700 hover:text-cyan-500 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Projects
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Project header image */}
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-cyan-400 to-cyan-600">
            {project.imageUrl && (
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-cyan-600" />
                <span>
                  {new Date(project.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-cyan-600 transition-colors"
              >
                <Github className="w-4 h-4 mr-1" />
                <span>View on GitHub</span>
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-cyan-600 transition-colors"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold text-cyan-900 mb-4">Project Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{project.longDescription}</p>

              <h2 className="text-xl font-semibold text-cyan-900 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <div key={tag} className="flex items-center px-3 py-2 rounded-lg bg-cyan-50 text-cyan-700">
                    <Tag className="w-4 h-4 mr-2" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project actions */}
          <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-cyan-700 border border-cyan-200 hover:bg-cyan-50 transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>

              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 transition-colors duration-300"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
