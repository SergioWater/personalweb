import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/SergioWater"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
              aria-label="GitHub Profile"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 to-cyan-500/30 backdrop-blur-sm border border-white/20"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/40 to-cyan-600/40 transition-opacity duration-300"></div>
              <Github className="relative z-10 text-white w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/sergiowater/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
              aria-label="LinkedIn Profile"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 to-cyan-500/30 backdrop-blur-sm border border-white/20"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/40 to-cyan-600/40 transition-opacity duration-300"></div>
              <Linkedin className="relative z-10 text-white w-4 h-4" />
            </a>

            <a
              href="mailto:sergiowater@gmail.com"
              className="group relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
              aria-label="Email"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 to-cyan-500/30 backdrop-blur-sm border border-white/20"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/40 to-cyan-600/40 transition-opacity duration-300"></div>
              <Mail className="relative z-10 text-white w-4 h-4" />
            </a>
          </div>

          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Sergio Aguilar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
