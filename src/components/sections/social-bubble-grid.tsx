"use client"

import Image from "next/image"
import BubbleLink from "../ui/bubble-link"

interface SocialLink {
    name: string
    url: string
    icon: string // path to icon in images folder
}

export default function SocialBubbleGrid() {
  // Replace these with your actual social links and icon paths
    const firstHalfLinks: SocialLink[] = [
        { name: "GitHub", url: "https://github.com/nostango", icon: "/images/logos/github-icon.svg" },
        { name: "LinkedIn", url: "https://linkedin.com/in/rudy-vega", icon: "/images/logos/linkedin-icon.svg" },
        { name: "Email", url: "mailto:rudyalevega@gmail.com", icon: "/images/logos/gmail-icon.svg" },
        { name: "UpWork", url: "https://www.upwork.com/freelancers/~01d11ee8966bfbce8e?mp_source=share", icon: "/images/logos/upwork-icon.svg" }
    ]
    const secondHalfLinks: SocialLink[] = [
        { name: "Liminal Collectors", url: "https://www.tcgplayer.com/search/all/product?seller=4260b734&view=grid", icon: "/images/logos/tcgplayer-logo.svg" }
    ]

    // Split each half into rows of 4
    const firstHalfRows: SocialLink[][] = []
    for (let i = 0; i < firstHalfLinks.length; i += 4) {
        firstHalfRows.push(firstHalfLinks.slice(i, i + 4))
    }

    const secondHalfRows: SocialLink[][] = []
    for (let i = 0; i < secondHalfLinks.length; i += 4) {
        secondHalfRows.push(secondHalfLinks.slice(i, i + 4))
    }

    return (
        <div className="min-h-screen flex flex-col justify-center w-full max-w-2xl mx-auto p-8 pt-20 z-10">
        <div className="flex flex-col items-center gap-6">
            {/* Logo */}
            <div className="w-80 h-80 relative">
            <Image src="/images/logos/nostango-logo(white).svg" alt="Logo" fill className="object-contain" />
            </div>

            {/* Name */}
            <h1 className="text-2xl font-bold text-[hsl(var(--foreground))] text-center">Ways to get in touch with me</h1>

            {firstHalfRows.map((row, rowIndex) => (
            <div key={`first-row-${rowIndex}`} className="flex gap-6 justify-center">
                {row.map((socialLink) => (
                <BubbleLink key={socialLink.name} link={socialLink.url} icon={socialLink.icon} name={socialLink.name} />
                ))}
            </div>
            ))}

            {/* Text */}
            <p className="text-sm text-[hsl(var(--muted-foreground))] text-center mt-2">Some other things I'm involved in:</p>

            {secondHalfRows.map((row, rowIndex) => (
            <div key={`second-row-${rowIndex}`} className="flex gap-6 justify-center">
                {row.map((socialLink) => (
                <BubbleLink key={socialLink.name} link={socialLink.url} icon={socialLink.icon} name={socialLink.name} />
                ))}
            </div>
            ))}
        </div>
        </div>
    )
}
