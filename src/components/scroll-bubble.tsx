"use client"

import { useEffect, useRef } from "react"

export function ScrollBubble() {
  const bubbleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bubble = bubbleRef.current
    if (!bubble) return

    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)

      // Animate bubble in circular path
      const angle = scrollProgress * Math.PI * 4 // 2 full circles
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
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div
        ref={bubbleRef}
        className="absolute w-[200px] h-[200px] rounded-full bg-purple-500/30 blur-3xl"
        style={{ willChange: "transform" }}
      />
    </div>
  )
}
