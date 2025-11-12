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
        <div className="relative w-16 h-16 rounded-full bg-[hsl(var(--muted))] backdrop-blur-sm border-2 border-transparent hover:border-[hsl(var(--primary)/0.6)] transition-all duration-300 flex items-center justify-center overflow-hidden bubble-effect">
            {/* Bubble reflection effect */}
            <div className="absolute inset-0 rounded-full border-2 border-[hsl(var(--secondary)/0.4)] group-hover:border-[hsl(var(--primary)/0.6)] transition-colors duration-300" />
            <div className="absolute top-2 left-2 w-4 h-4 bg-[hsl(var(--foreground)/0.3)] rounded-full blur-sm" />

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
