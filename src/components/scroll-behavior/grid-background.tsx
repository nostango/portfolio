"use client"

import { useEffect, useRef } from "react"

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let scrollOffset = 0

    const handleScroll = () => {
      scrollOffset = window.scrollY * 0.5 // Adjust speed multiplier
    }
    window.addEventListener("scroll", handleScroll)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Perspective settings
      const vanishingX = canvas.width / 2
      const vanishingY = canvas.height / 2
      const gridSize = 50
      const depth = 20

      ctx.strokeStyle = "rgba(229, 231, 235, 0.2)"
      ctx.lineWidth = 1

      // Draw horizontal lines (floor and ceiling)
      for (let i = -depth; i <= depth; i++) {
        const z = i * gridSize + (scrollOffset % gridSize)
        const scale = 1000 / (1000 + z)

        if (scale <= 0) continue

        // Floor lines
        const y1 = vanishingY + (canvas.height / 2) * scale
        const y2 = vanishingY + (canvas.height / 2) * scale

        // Draw horizontal line
        ctx.beginPath()
        ctx.moveTo(0, y1)
        ctx.lineTo(canvas.width, y2)
        ctx.stroke()

        // Ceiling lines
        const y3 = vanishingY - (canvas.height / 2) * scale
        const y4 = vanishingY - (canvas.height / 2) * scale

        ctx.beginPath()
        ctx.moveTo(0, y3)
        ctx.lineTo(canvas.width, y4)
        ctx.stroke()
      }

      // Draw vertical lines (walls)
      for (let i = -10; i <= 10; i++) {
        ctx.beginPath()
        const x = vanishingX + i * gridSize

        // Start from far away
        const startZ = -depth * gridSize + (scrollOffset % gridSize)
        const startScale = 1000 / (1000 + startZ)
        const startX = vanishingX + (x - vanishingX) * startScale
        const startYTop = vanishingY - (canvas.height / 2) * startScale
        const startYBottom = vanishingY + (canvas.height / 2) * startScale

        // End at near
        const endZ = depth * gridSize + (scrollOffset % gridSize)
        const endScale = 1000 / (1000 + endZ)
        const endX = vanishingX + (x - vanishingX) * endScale
        const endYTop = vanishingY - (canvas.height / 2) * endScale
        const endYBottom = vanishingY + (canvas.height / 2) * endScale

        // Draw left and right wall lines
        ctx.moveTo(startX, startYTop)
        ctx.lineTo(endX, endYTop)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(startX, startYBottom)
        ctx.lineTo(endX, endYBottom)
        ctx.stroke()
      }

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />
}
