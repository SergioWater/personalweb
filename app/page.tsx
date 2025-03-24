"use client"
import Link from "next/link"
import NeonMaze from "@/components/neon-maze"
import ProjectCard from "@/components/project-card"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function HomePage() {
  // Project data
  const projects = [
    {
      title: "Police Data with Threads",
      description:
        "A multi-threaded C program that analyzes police response times, utilizing mutex locks to protect critical sections during statistical calculations on 500K+ records.",
      imageUrl: "/images/thread-police.png",
      imageAlt: "Police Data with Threads",
      githubUrl: "https://github.com/SergioWater/Police-Data-with-Threads",
    },
    {
      title: "Advanced Autonomous Vehicle Simulation",
      description:
        "A sophisticated simulation environment for testing autonomous vehicle algorithms with realistic physics and sensor models, featuring NEAT algorithms for neural network performance.",
      imageUrl: "/images/ai_neat_car.png",
      imageAlt: "Advanced Autonomous Vehicle Simulation",
      githubUrl: "https://github.com/SergioWater/ai_neat_car",
    },
    {
      title: "Automatic Note",
      description:
        "An innovative application using Python and whisper API to transcribe audio and print it to a text file with multi-threaded audio capture system.",
      imageUrl: "/images/real-time-audio-recorder.png",
      imageAlt: "Automatic Note",
      githubUrl: "https://github.com/SergioWater/real-time-audio-recorder",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Neon Maze background */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <NeonMaze />
        <div className="absolute top-0 left-0 w-full pt-5 z-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">
              <Link href="#" className="text-white no-underline shadow-[0_0_10px_rgba(0,255,255,0.8)]">
                Sergio <em className="font-normal">Personal Projects</em>
              </Link>
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation - Crystal glass effect */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm border-b border-white/20">
        <div className="container mx-auto px-4">
          <nav className="py-4">
            <ul className="flex space-x-12 justify-center">
              <li>
                <Link
                  href="/projects"
                  className="text-cyan-600 hover:text-cyan-500 font-medium text-lg transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-500 after:transition-all after:duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-cyan-600 hover:text-cyan-500 font-medium text-lg transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-500 after:transition-all after:duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main */}
      <section className="py-12 bg-gradient-to-b from-white to-cyan-50">
        <div className="container mx-auto px-4" id="content">
          {/* About Section */}
          <section id="about" className="mb-16">
            <header className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-cyan-900">About Me</h2>
              <p className="text-gray-600 max-w-3xl">
                My journey combines disciplined athleticism, a passion for continuous growth, and a keen focus on
                empowerment and purpose. Always seeking new challenges, I aim to build meaningful connections and leave
                a lasting impact.
              </p>
            </header>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-16">
            <header className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-cyan-900">My GitHub Projects</h2>
              <p className="text-gray-600 max-w-3xl">A selection of some things I've built.</p>
            </header>
            <div className="space-y-10">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  imageAlt={project.imageAlt}
                  githubUrl={project.githubUrl}
                  isEven={index % 2 === 1}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
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
      <section id="contact" className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <header className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-cyan-900">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Feel free to reach out if you want to collaborate on a project or just say hello!
            </p>
          </header>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-md hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Footer - Updated to match projects page footer */}
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

