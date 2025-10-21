"use client"

import { useEffect, useRef } from "react"

export function ScrollBubble() {
  const bubbleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bubble = bubbleRef.current
    if (!bubble) return

    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)

      // TODO: Change the behavior such that it goes slower as time goes on
      // Animate bubble in circular path
      const angle = scrollProgress * Math.PI * 2
      const radius = 150
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      const bubbleX = centerX + Math.cos(angle) * radius - 100 // -100 to center the bubble
      const bubbleY = centerY + Math.sin(angle) * radius - 100

      bubble.style.transform = `translate(${bubbleX}px, ${bubbleY}px)`
    }

    handleScroll() // Initial render
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      <div
        ref={bubbleRef}
        className="absolute w-[400px] h-[400px] rounded-full bg-[var(--color-primary)]/30 blur-3xl"
        style={{ willChange: "transform" }}
      />
    </div>
  )
}
