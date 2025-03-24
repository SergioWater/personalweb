"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, Globe, Calendar, Tag, Linkedin, Twitter } from "lucide-react"
import NeonMaze from "@/components/neon-maze"

// Updated project data with the new project and updated descriptions
const allProjects = [
  {
    id: "police-data-with-threads",
    title: "Police Data with Threads",
    description:
      "A multi-threaded C program that analyzes police response times, utilizing mutex locks to protect critical sections during statistical calculations on 500K+ records.",
    longDescription:
      "This assignment required writing a C program to analyze police data, implementing multi-threaded processing of fixed-length records. The program processes a header file that specifies field sizes, reads data records, and then performs statistical analysis of police response times across different categories and districts. I designed and implemented a multi-threaded C program that analyzes police response times, utilizing mutex locks to protect critical sections during statistical calculations on 500K+ records. I engineered a data processing system with batch reading that effectively distributed workload across threads, reducing memory usage while maintaining thread safety through synchronization. Additionally, I developed statistical analysis functionality calculating min/max, quartiles, and standard deviation across police districts, implementing outlier detection using IQR methodology for accurate response time analysis.",
    imageUrl: "/images/thread-police.png",
    githubUrl: "https://github.com/SergioWater/Police-Data-with-Threads",
    demoUrl: null,
    tags: ["C", "Multi-threading", "Data Analysis", "Performance Optimization", "Mutex Locks"],
    date: "2023-09-15",
  },
  {
    id: "discord-clone",
    title: "Discord Clone",
    description:
      "A faithful recreation of the popular Discord chat application, demonstrating my skills in frontend development and real-time communication.",
    longDescription:
      "This Discord clone project was built to showcase my ability to create complex, interactive user interfaces with real-time functionality. The application features user authentication, channel creation, direct messaging, and voice chat capabilities. I implemented WebSocket connections for real-time updates and used React for the frontend interface. The project demonstrates my understanding of modern web development practices and my ability to recreate complex applications.",
    imageUrl: "/images/discord-clone.png",
    githubUrl: "https://github.com/SergioWater/Discord-Clone",
    demoUrl: "https://discord-clone.sergiowater.com",
    tags: ["React", "Socket.io", "Tailwind CSS", "Firebase"],
    date: "2023-05-15",
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    description:
      "A replica of the Netflix user interface, showcasing my ability to create responsive layouts and integrate with movie databases.",
    longDescription:
      "This Netflix clone project demonstrates my frontend development skills and my ability to work with external APIs. The application features a responsive design that mimics the Netflix user interface, with movie and TV show listings, search functionality, and user authentication. I integrated with The Movie Database (TMDB) API to fetch real movie data and implemented custom video players for trailers. The project showcases my attention to detail in recreating complex user interfaces and my ability to build responsive, interactive web applications.",
    imageUrl: "/images/netflix-clone.png",
    githubUrl: "https://github.com/SergioWater/NetflixClone",
    demoUrl: "https://netflix-clone.sergiowater.com",
    tags: ["React", "API Integration", "CSS", "TMDB API"],
    date: "2023-03-10",
  },
  {
    id: "crypto-price",
    title: "Crypto Price",
    description:
      "A real-time cryptocurrency price tracker, demonstrating my skills in working with APIs and creating dynamic, data-driven applications.",
    longDescription:
      "The Crypto Price project is a real-time cryptocurrency tracking application that provides users with up-to-date information on cryptocurrency prices, market caps, and trading volumes. I built this application to demonstrate my ability to work with real-time data and create dynamic, data-driven user interfaces. The application features interactive charts, price alerts, and portfolio tracking capabilities. I integrated with multiple cryptocurrency APIs to ensure accurate and comprehensive data. This project showcases my skills in working with complex data and creating intuitive visualizations.",
    imageUrl: "/images/crypto-price.png",
    githubUrl: "https://github.com/SergioWater/cryptoPrice",
    demoUrl: "https://crypto-price.sergiowater.com",
    tags: ["JavaScript", "API", "Chart.js", "CoinGecko API"],
    date: "2023-01-20",
  },
  {
    id: "autonomous-vehicle-simulation",
    title: "Advanced Autonomous Vehicle Simulation",
    description:
      "A sophisticated simulation environment for testing autonomous vehicle algorithms with realistic physics and sensor models.",
    longDescription:
      "The Advanced Autonomous Vehicle Simulation is a comprehensive platform I developed for testing and validating autonomous driving algorithms in a controlled virtual environment. I developed advanced collision detection and radar sensor capabilities and integrated NEAT algorithms to boost neural network performance—resulting in a 15% increase in autonomous driving accuracy. I enhanced an open-source vehicle simulator by upgrading its resolution to 4K (3840x2160) and refining vehicle dynamics for greater realism. The simulation features realistic physics simulations, accurate sensor models (including LIDAR, radar, and cameras), and various environmental conditions to test vehicle behavior. I integrated NEAT algorithm improvements for enhanced neural network efficiency in real-time decision-making. This project demonstrates my expertise in simulation development, computer vision, and artificial intelligence applied to autonomous systems.",
    imageUrl: "/images/ai_neat_car.png",
    githubUrl: "https://github.com/SergioWater/ai_neat_car",
    demoUrl: "https://autonomous-sim.sergiowater.com",
    tags: ["Python", "Machine Learning", "Computer Vision", "Simulation", "PyTorch"],
    date: "2022-12-10",
  },
  {
    id: "automatic-note",
    title: "Automatic Note",
    description:
      "An intelligent note-taking application that uses AI to organize, categorize, and summarize your notes automatically.",
    longDescription:
      "Automatic Note is an innovative application I created using Python and the Whisper API to transcribe audio and print it to a text file. I engineered a multi-threaded audio capture system using PyAudio and a custom Tee class to concurrently log real-time terminal output and session timestamps, ensuring streamlined debugging and session management. The application automatically organizes notes into categories, generates tags based on content, and can create concise summaries of lengthy notes. It features natural language processing capabilities to extract key information, identify important dates and tasks, and suggest related content from your note library. The application includes a clean, intuitive interface with real-time collaboration features and cross-platform synchronization. This project showcases my skills in developing practical AI applications that solve everyday problems and improve productivity.",
    imageUrl: "/images/real-time-audio-recorder.png",
    githubUrl: "https://github.com/SergioWater/real-time-audio-recorder",
    demoUrl: "https://auto-note.sergiowater.com",
    tags: ["JavaScript", "React", "Natural Language Processing", "AI", "Firebase"],
    date: "2022-10-05",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my projects and skills, built with modern web technologies.",
    longDescription:
      "My portfolio website serves as a showcase of my web development skills and projects. I designed and built this website to demonstrate my proficiency with modern web technologies and my eye for design. The site features a clean, responsive layout, smooth animations, and intuitive navigation. I implemented the site using Next.js for server-side rendering and optimal performance, Tailwind CSS for styling, and TypeScript for type safety. The project demonstrates my ability to create professional, polished web applications with attention to both functionality and aesthetics.",
    imageUrl: "/images/personalweb.png",
    githubUrl: "https://github.com/SergioWater/personalweb",
    demoUrl: "https://sergiowater.com",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    date: "2022-08-01",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A weather application that provides real-time weather data for any location, with a clean and intuitive user interface.",
    longDescription:
      "The Weather App is a responsive web application that provides users with accurate, real-time weather information for any location worldwide. I built this application to demonstrate my ability to create clean, intuitive user interfaces and work with external APIs. The app features current weather conditions, hourly and daily forecasts, and location-based weather detection. I implemented geolocation services to automatically detect the user's location and integrated with the OpenWeather API for reliable weather data. This project showcases my skills in creating practical, user-friendly applications with real-world utility.",
    imageUrl: "/images/weather-app.png",
    githubUrl: "https://github.com/SergioWater/WeatherApp",
    demoUrl: "https://weather-app.sergiowater.com",
    tags: ["React", "OpenWeather API", "Geolocation", "Responsive Design"],
    date: "2022-11-05",
  },
]

export default function ProjectDetailPage() {
  const router = useRouter()
  const { id } = useParams()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    const foundProject = allProjects.find((p) => p.id === id)

    if (foundProject) {
      setProject(foundProject)
    } else {
      // Redirect to projects page if project not found
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
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50">
      {/* Header with Neon Maze background */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <NeonMaze />
        <div className="absolute top-0 left-0 w-full pt-5 z-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between w-full">
              <Link
                href="/projects"
                className="flex items-center text-white hover:text-cyan-300 transition-colors duration-300"
              >
                <ArrowLeft className="mr-1" />
                <span>Back to Projects</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center text-white hover:text-cyan-300 transition-colors duration-300"
              >
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Project details */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Project header */}
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-cyan-400 to-cyan-600">
            {project.imageUrl ? (
              <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-contain" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-bold">
                  {project.title.charAt(0)}
                </div>
              </div>
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
              <p className="text-gray-700 mb-6">{project.longDescription}</p>

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

