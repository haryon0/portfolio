"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function GradientGridHero({ mode = "section", className = "" }: { mode?: "section" | "background" | "fullscreen"; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let devicePixelRatio: number

    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      // reset transform so scaling doesn't compound on resize
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      canvas.width = Math.max(1, Math.floor(rect.width * devicePixelRatio))
      canvas.height = Math.max(1, Math.floor(rect.height * devicePixelRatio))
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    }
    window.addEventListener("mousemove", onMouseMove)

    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string
      distance: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = Math.random() * 5 + 2
        this.density = Math.random() * 30 + 1
        this.distance = 0

        const hue = Math.random() * 60 + 270
        this.color = `hsl(${hue}, 70%, 60%)`
      }

      update() {
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        this.distance = Math.sqrt(dx * dx + dy * dy)

        const forceDirectionX = dx / this.distance
        const forceDirectionY = dy / this.distance

        const maxDistance = 100
        const force = (maxDistance - this.distance) / maxDistance

        if (this.distance < maxDistance) {
          const directionX = forceDirectionX * force * this.density
          const directionY = forceDirectionY * force * this.density

          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            const dx2 = this.x - this.baseX
            this.x -= dx2 / 10
          }
          if (this.y !== this.baseY) {
            const dy2 = this.y - this.baseY
            this.y -= dy2 / 10
          }
        }
      }

      draw(ctx2: CanvasRenderingContext2D | null) {
        if (!ctx2) return
        ctx2.fillStyle = this.color
        ctx2.beginPath()
        ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx2.closePath()
        ctx2.fill()
      }
    }

    const particlesArray: Particle[] = []
    const gridSize = 30

    function init() {
      particlesArray.length = 0
      if (!canvas) return
      const canvasWidth = canvas.width / devicePixelRatio
      const canvasHeight = canvas.height / devicePixelRatio
      const numX = Math.floor(canvasWidth / gridSize)
      const numY = Math.floor(canvasHeight / gridSize)
      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2
          const posY = y * gridSize + gridSize / 2
          particlesArray.push(new Particle(posX, posY))
        }
      }
    }

    init()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Smooth mouse following
      mouseX += (targetX - mouseX) * 0.1
      mouseY += (targetY - mouseY) * 0.1

      // Draw connections
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw(ctx)

        // Draw connections
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 30) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(180, 120, 255, ${0.2 - distance / 150})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    window.addEventListener("resize", init)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", init)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  // Compute wrapper class based on mode
  let wrapperClass = ""
  if (mode === "fullscreen") {
    wrapperClass = "fixed inset-0 -z-10 w-screen h-screen pointer-events-none"
  } else if (mode === "background") {
    wrapperClass = "absolute inset-0 -z-10 w-full h-full pointer-events-none"
  } else {
    wrapperClass = "relative w-full h-[420px] sm:h-[460px] md:h-[520px]"
  }
  if (className) {
    wrapperClass += ` ${className}`
  }

  return (
    <motion.div
      className={wrapperClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full pointer-events-none" style={{ display: "block" }} />
    </motion.div>
  )
}