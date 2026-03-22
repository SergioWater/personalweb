"use client"

import { useEffect, useRef } from "react"

export default function NeonMaze() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const x = canvas.getContext("2d")
    if (!x) return

    let t = 0
    let animationFrameId: number
    let lastTime = 0
    const targetFPS = 30 // Throttle to 30fps instead of 60+

    const resize = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const draw = () => {
      if (!canvas || !x) return
      const s = Math.min(canvas.width, canvas.height) / 12
      const g = Math.ceil(canvas.width / s)
      const h = Math.ceil(canvas.height / (s * 0.5))
      const w = canvas.width / 2
      const v = canvas.height / 2

      // Clear fully instead of partial alpha overlay (cleaner, less GPU work)
      x.clearRect(0, 0, canvas.width, canvas.height)
      x.fillStyle = "rgba(0,0,0,1)"
      x.fillRect(0, 0, canvas.width, canvas.height)

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
          l.addColorStop(0, `rgba(0,255,255,${0.7 * e})`)
          l.addColorStop(1, `rgba(255,0,255,${0.7 * e})`)
          x.fillStyle = l
          x.fill()
          x.strokeStyle = `rgba(255,255,0,${0.4 * e})`
          x.stroke()
        }
      }
    }

    const animate = (timestamp: number) => {
      if (!x || !canvas) return
      const elapsed = timestamp - lastTime

      if (elapsed > 1000 / targetFPS) {
        lastTime = timestamp - (elapsed % (1000 / targetFPS))
        draw()
        t += 0.04
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    resize()
    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="block w-full h-full bg-black" />
}
