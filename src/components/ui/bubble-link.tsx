"use client"

import Image from "next/image"
import Link from "next/link"

interface BubbleLinkProps {
    link: string
    icon: string
    name?: string
}

export default function BubbleLink({ link, icon, name = "Social Link" }: BubbleLinkProps) {
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="group block">
        <div className="relative w-16 h-16 rounded-full bg-gray-500/20 backdrop-blur-sm border-2 border-transparent hover:border-purple-400/60 transition-all duration-300 flex items-center justify-center overflow-hidden bubble-effect">
            {/* Bubble reflection effect */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 group-hover:border-purple-500/60 transition-colors duration-300" />
            <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full blur-sm" />

            {/* Icon */}
            <div className="relative w-8 h-8 z-10">
            <Image
                src={icon || "/placeholder.svg"}
                alt={name}
                fill
                className="object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
            />
            </div>
        </div>
        </Link>
    )
}
