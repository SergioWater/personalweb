"use client"

import Link from "next/link"
import Image from "next/image"
import NeonMaze from "@/components/neon-maze"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { featuredProjects } from "@/lib/projects"
import { Github, ExternalLink } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Neon Maze background */}
      <div className="relative w-full h-[280px] overflow-hidden">
        <NeonMaze />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ textShadow: "0 0 20px rgba(0,255,255,0.6)" }}>
              Sergio Aguilar
            </h1>
            <p className="text-cyan-200 text-lg">CS Student &middot; Builder &middot; San Jose, CA</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main */}
      <section className="py-16 bg-gradient-to-b from-white to-cyan-50">
        <div className="container mx-auto px-4">
          {/* About Section */}
          <section id="about" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-cyan-900">About Me</h2>
            <div className="max-w-3xl">
              <p className="text-gray-600 mb-4 leading-relaxed">
                I&apos;m a Computer Science student at San Francisco State University with a focus on building things that work in the real world — from algorithmic trading systems and AI-powered sports analytics to Roblox games and full-stack web apps.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I work across Python, C, JavaScript, TypeScript, Lua, and React/Next.js. My recent projects include a gold futures trading algorithm with Monte Carlo simulation, a computer vision pipeline for soccer match analysis, and STATBOARD — an AI-powered leaderboard system for indoor sports facilities.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "JavaScript", "TypeScript", "Luau", "React", "Next.js", "Machine Learning", "Computer Vision", "Algorithmic Trading"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section id="projects" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-cyan-900">Featured Projects</h2>
              <Link
                href="/projects"
                className="text-cyan-600 hover:text-cyan-500 font-medium text-sm transition-colors flex items-center gap-1"
              >
                View all <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-3px] border border-gray-100"
                >
                  <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-cyan-100 to-cyan-200">
                    {project.imageUrl && (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-cyan-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/projects"
                className="inline-block px-8 py-3 text-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-md hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View All Projects
              </Link>
            </div>
          </section>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-cyan-900">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Feel free to reach out if you want to collaborate on a project or just say hello.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-md hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
