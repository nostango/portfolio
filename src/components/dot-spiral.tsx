"use client"

import { useEffect, useRef } from "react"

export function DotSpiral() {
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

    // Handle scroll for spiral animation
    const handleScroll = () => {
      const scrollProgress =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spiralCenterX = canvas.width / 2;
      const spiralCenterY = canvas.height / 2;
      const maxRotations = 5;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;
      const dotsPerRotation = 20;
      const totalDots = Math.floor(
        scrollProgress * maxRotations * dotsPerRotation
      );

      if (totalDots < 1) return; // No dots or lines to draw

      const coordinates = [];
      for (let i = 0; i < totalDots; i++) {
        const progress = i / (maxRotations * dotsPerRotation);
        const spiralAngle = progress * Math.PI * 2 * maxRotations;
        const spiralRadius = progress * maxRadius;
        coordinates.push({
          x: spiralCenterX + Math.cos(spiralAngle) * spiralRadius,
          y: spiralCenterY + Math.sin(spiralAngle) * spiralRadius,
          progress: progress,
        });
      }

      // --- Draw the connecting line ---
      if (coordinates.length > 1) {
        ctx.beginPath();
        ctx.moveTo(coordinates[0].x, coordinates[0].y);
        for (let i = 1; i < coordinates.length; i++) {
          ctx.lineTo(coordinates[i].x, coordinates[i].y);
        }
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // --- Draw the dots on top of the line ---
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      for (const coord of coordinates) {
        const dotSize = 3 + coord.progress * 2;
        ctx.beginPath();
        ctx.arc(coord.x, coord.y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    handleScroll() // Initial render
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
