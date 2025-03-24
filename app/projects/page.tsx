"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronLeft, Github, Linkedin, Twitter } from "lucide-react"
import NeonMaze from "@/components/neon-maze"
import ProjectGrid from "@/components/project-grid"

// Updated project data with the new project and updated descriptions
const allProjects = [
  {
    id: "police-data-with-threads",
    title: "Police Data with Threads",
    description:
      "A multi-threaded C program that analyzes police response times, utilizing mutex locks to protect critical sections during statistical calculations on 500K+ records.",
    imageUrl: "/images/thread-police.png",
    githubUrl: "https://github.com/SergioWater/Police-Data-with-Threads",
    tags: ["C", "Multi-threading", "Data Analysis", "Performance Optimization"],
  },
  {
    id: "discord-clone",
    title: "Discord Clone",
    description:
      "A faithful recreation of the popular Discord chat application, demonstrating my skills in frontend development and real-time communication.",
    imageUrl: "/images/discord-clone.png",
    githubUrl: "https://github.com/SergioWater/Discord-Clone",
    tags: ["React", "Socket.io", "Tailwind CSS"],
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    description:
      "A replica of the Netflix user interface, showcasing my ability to create responsive layouts and integrate with movie databases.",
    imageUrl: "/images/netflix-clone.png",
    githubUrl: "https://github.com/SergioWater/NetflixClone",
    tags: ["React", "API Integration", "CSS"],
  },
  {
    id: "crypto-price",
    title: "Crypto Price",
    description:
      "A real-time cryptocurrency price tracker, demonstrating my skills in working with APIs and creating dynamic, data-driven applications.",
    imageUrl: "/images/crypto-price.png",
    githubUrl: "https://github.com/SergioWater/cryptoPrice",
    tags: ["JavaScript", "API", "Chart.js"],
  },
  {
    id: "autonomous-vehicle-simulation",
    title: "Advanced Autonomous Vehicle Simulation",
    description:
      "A sophisticated simulation environment for testing autonomous vehicle algorithms with realistic physics and sensor models, featuring NEAT algorithms for neural network performance.",
    imageUrl: "/images/ai_neat_car.png",
    githubUrl: "https://github.com/SergioWater/ai_neat_car",
    tags: ["Python", "Machine Learning", "Computer Vision", "Simulation"],
  },
  {
    id: "automatic-note",
    title: "Automatic Note",
    description:
      "An innovative application using Python and whisper API to transcribe audio and print it to a text file with multi-threaded audio capture system.",
    imageUrl: "/images/real-time-audio-recorder.png",
    githubUrl: "https://github.com/SergioWater/real-time-audio-recorder",
    tags: ["JavaScript", "React", "Natural Language Processing", "AI"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my projects and skills, built with modern web technologies.",
    imageUrl: "/images/personalweb.png",
    githubUrl: "https://github.com/SergioWater/personalweb",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A weather application that provides real-time weather data for any location, with a clean and intuitive user interface.",
    imageUrl: "/images/weather-app.png",
    githubUrl: "https://github.com/SergioWater/WeatherApp",
    tags: ["React", "OpenWeather API", "Geolocation"],
  },
]

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 9
  const totalPages = Math.ceil(allProjects.length / projectsPerPage)

  // Get current page projects
  const getCurrentProjects = () => {
    const start = currentPage * projectsPerPage
    const end = start + projectsPerPage
    return allProjects.slice(start, end)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentPage < totalPages - 1) {
        setCurrentPage((prev) => prev + 1)
      } else if (e.key === "ArrowLeft" && currentPage > 0) {
        setCurrentPage((prev) => prev - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentPage, totalPages])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50">
      {/* Header with Neon Maze background */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <NeonMaze />
        <div className="absolute top-0 left-0 w-full pt-5 z-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between w-full">
              <Link
                href="/"
                className="flex items-center text-white hover:text-cyan-300 transition-colors duration-300"
              >
                <ChevronLeft className="mr-1" />
                <span>Back to Home</span>
              </Link>
            </div>
            <h1 className="text-3xl font-bold mt-4 text-white shadow-[0_0_10px_rgba(0,255,255,0.8)]">All Projects</h1>
          </div>
        </div>
      </div>

      {/* Contact Button - Added at the top of the page */}
      <div className="bg-gradient-to-b from-cyan-50 to-white py-6 text-center">
        <Link
          href="/contact"
          className="inline-block px-8 py-3 text-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-md hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Contact Me
        </Link>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        {/* Project grid */}
        <ProjectGrid projects={getCurrentProjects()} />

        {/* Crystalline navigation */}
        <div className="mt-12 flex justify-center items-center gap-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden ${
              currentPage === 0
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
            }`}
            aria-label="Previous page"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 to-cyan-500/30 backdrop-blur-sm border border-white/20"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/40 to-cyan-600/40 transition-opacity duration-300"></div>
            <ArrowLeft className="relative z-10 text-white" />
          </button>

          <div className="px-4 py-2 rounded-full bg-gradient-to-br from-cyan-300/30 to-cyan-500/30 backdrop-blur-sm border border-white/20 text-white">
            Page {currentPage + 1} of {totalPages}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden ${
              currentPage === totalPages - 1
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
            }`}
            aria-label="Next page"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 to-cyan-500/30 backdrop-blur-sm border border-white/20"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/40 to-cyan-600/40 transition-opacity duration-300"></div>
            <ArrowRight className="relative z-10 text-white" />
          </button>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          Use arrow keys or buttons to navigate between pages
        </div>
      </div>

      {/* Footer with Social Icons */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://github.com/SergioWater"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
                aria-label="GitHub Profile"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 to-cyan-500/30 backdrop-blur-sm border border-white/20"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/40 to-cyan-600/40 transition-opacity duration-300"></div>
                <Github className="relative z-10 text-white w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/sergiowater/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
                aria-label="LinkedIn Profile"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 to-cyan-500/30 backdrop-blur-sm border border-white/20"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/40 to-cyan-600/40 transition-opacity duration-300"></div>
                <Linkedin className="relative z-10 text-white w-5 h-5" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
                aria-label="Twitter Profile"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 to-cyan-500/30 backdrop-blur-sm border border-white/20"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/40 to-cyan-600/40 transition-opacity duration-300"></div>
                <Twitter className="relative z-10 text-white w-5 h-5" />
              </a>
            </div>

            <p className="text-gray-400">&copy; Sergio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

