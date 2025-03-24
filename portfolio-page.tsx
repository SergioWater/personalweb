"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const x = canvas.getContext("2d")
    if (!x) return

    let t = 0
    let animationFrameId: number

    const resize = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      draw()
    }

    const draw = () => {
      if (!canvas || !x) return
      const s = Math.min(canvas.width, canvas.height) / 15
      const g = Math.ceil(canvas.width / s) * 2
      const h = Math.ceil(canvas.height / (s * 0.5)) * 2
      const w = canvas.width / 2
      const v = canvas.height / 2

      for (let y = -h; y < h; y++) {
        for (let i = -g; i < g; i++) {
          const p = w + ((i - y) * s) / 2
          const q = v + ((i + y) * s) / 4
          const m = Math.sqrt(i * i + y * y)
          const n = Math.sqrt(g * g + h * h)
          const e = 1 - m / n
          const f = s * e * Math.abs(Math.sin(m * 0.5 + t))

          x.beginPath()
          x.moveTo(p, q - f)
          x.lineTo(p + s / 2, q - s / 2 - f)
          x.lineTo(p + s, q - f)
          x.lineTo(p + s, q)
          x.lineTo(p + s / 2, q + s / 2)
          x.lineTo(p, q)
          x.closePath()

          const l = x.createLinearGradient(p, q - f, p + s, q)
          l.addColorStop(0, "rgba(0,255,255,.8)")
          l.addColorStop(1, "rgba(255,0,255,.8)")
          x.fillStyle = l
          x.fill()
          x.strokeStyle = "rgba(255,255,0,.5)"
          x.stroke()

          x.beginPath()
          x.moveTo(p, q)
          x.lineTo(p, q - f)
          x.moveTo(p + s, q)
          x.lineTo(p + s, q - f)
          x.moveTo(p + s / 2, q + s / 2)
          x.lineTo(p + s / 2, q - s / 2 - f)
          x.strokeStyle = "rgba(255,255,255,.3)"
          x.stroke()
        }
      }
    }

    const animate = () => {
      if (!x || !canvas) return
      x.fillStyle = "rgba(0,0,0,.1)"
      x.fillRect(0, 0, canvas.width, canvas.height)
      draw()
      t += 0.05
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Neon Maze background */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <canvas ref={canvasRef} className="block w-full h-full bg-black" />
        <div className="absolute top-0 left-0 w-full pt-5 z-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">
              <Link href="#" className="text-white no-underline shadow-[0_0_10px_rgba(0,255,255,0.8)]">
                Sergio <em className="font-normal">Personal Projects</em>
              </Link>
            </h1>
            {/* Simple Nav */}
            <nav className="mt-4">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/projects" className="text-white no-underline shadow-[0_0_5px_rgba(255,0,255,0.8)]">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white no-underline shadow-[0_0_5px_rgba(255,0,255,0.8)]">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Main */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4" id="content">
          {/* About Section */}
          <section id="about" className="mb-12">
            <header className="mb-6">
              <h2 className="text-2xl font-bold mb-2">About Me</h2>
              <p className="text-gray-600">
                My journey combines disciplined athleticism, a passion for continuous growth, and a keen focus on
                empowerment and purpose. Always seeking new challenges, I aim to build meaningful connections and leave
                a lasting impact.
              </p>
            </header>
          </section>

          {/* Projects Section - Direction Inverted */}
          <section id="projects" className="mb-12">
            <header className="mb-6">
              <h2 className="text-2xl font-bold mb-2">My GitHub Projects</h2>
              <p className="text-gray-600">A selection of some things I've built.</p>
            </header>
            <div className="space-y-8">
              {/* Project cards with inverted direction (info on left, image on right) */}
              <div className="flex flex-col-reverse md:flex-row border border-gray-200 rounded-lg p-4 transition-all hover:translate-y-[-5px] hover:shadow-md">
                <div className="flex-1 md:pr-8">
                  <h3 className="text-xl font-bold mt-4 md:mt-0">Discord Clone</h3>
                  <p className="text-gray-600 my-2">
                    A faithful recreation of the popular Discord chat application, demonstrating my skills in frontend
                    development and real-time communication.
                  </p>
                  <Link
                    href="https://github.com/SergioWater/Discord-Clone"
                    className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    View on GitHub
                  </Link>
                </div>
                <div className="md:w-[300px]">
                  <div className="relative w-full aspect-video rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=169&width=300"
                      alt="Discord Clone"
                      fill
                      className="object-cover transition-all hover:brightness-90"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row border border-gray-200 rounded-lg p-4 transition-all hover:translate-y-[-5px] hover:shadow-md">
                <div className="flex-1 md:pr-8">
                  <h3 className="text-xl font-bold mt-4 md:mt-0">Netflix Clone</h3>
                  <p className="text-gray-600 my-2">
                    A replica of the Netflix user interface, showcasing my ability to create responsive layouts and
                    integrate with movie databases.
                  </p>
                  <Link
                    href="https://github.com/SergioWater/NetflixClone"
                    className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    View on GitHub
                  </Link>
                </div>
                <div className="md:w-[300px]">
                  <div className="relative w-full aspect-video rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=169&width=300"
                      alt="Netflix Clone"
                      fill
                      className="object-cover transition-all hover:brightness-90"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row border border-gray-200 rounded-lg p-4 transition-all hover:translate-y-[-5px] hover:shadow-md">
                <div className="flex-1 md:pr-8">
                  <h3 className="text-xl font-bold mt-4 md:mt-0">Crypto Price</h3>
                  <p className="text-gray-600 my-2">
                    A real-time cryptocurrency price tracker, demonstrating my skills in working with APIs and creating
                    dynamic, data-driven applications.
                  </p>
                  <Link
                    href="https://github.com/SergioWater/cryptoPrice"
                    className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    View on GitHub
                  </Link>
                </div>
                <div className="md:w-[300px]">
                  <div className="relative w-full aspect-video rounded-md overflow-hidden">
                    <Image
                      src="/images/crypto-price.png"
                      alt="Crypto Price"
                      fill
                      className="object-cover transition-all hover:brightness-90"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-block px-6 py-3 text-lg bg-primary text-white rounded-md hover:bg-primary/90"
              >
                View All Projects
              </Link>
            </div>
          </section>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <header className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
            <p className="text-gray-600">
              Feel free to reach out if you want to collaborate on a project or just say hello!
            </p>
          </header>
          <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <section>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://github.com/SergioWater" className="hover:underline">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/sergiowater/" className="hover:underline">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/" className="hover:underline">
                    Twitter
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm">&copy; Sergio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

