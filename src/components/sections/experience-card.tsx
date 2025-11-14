"use client"

import { ExternalLink } from "lucide-react"
import type { Experience } from "../sections/work-experience"
import { LiquidCard } from "@/components/ui/liquid-card";
import { cn } from "@/lib/utils"

interface ExperienceCardProps {
    experience: Experience
    index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
    return (
        <div
        data-experience-id={experience.id}
        className="relative"
        >
        <div
            className="relative flex flex-col gap-6 p-8"
            style={{
            borderRadius: "var(--radius)",
            }}
        >
            {/* Top Row: Title and Tech Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title Section */}
                <LiquidCard>
                    <div className="flex flex-col justify-start">
                        <h3 className="text-2xl font-bold leading-tight">{experience.role}</h3>
                        <p className="mt-1 text-lg">{experience.company}</p>
                        <span className="mt-2 text-sm">{experience.period}</span>
                    </div>
                </LiquidCard>

                {/* Technology Stack Section */}
                <div className="flex flex-col justify-start">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[hsl(var(--muted-foreground))]">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-[hsl(var(--custom-fourth)/0.1)] px-3 py-1.5 text-xs font-medium text-[hsl(var(--custom-fourth))]"
                            style={{ borderRadius: "var(--radius-sm)" }}
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Row: Description and Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Description box */}
                <div className="relative w-full">
                    {/* Blurry background gradient */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[hsl(var(--custom-secondary)/0.1)] via-[hsl(var(--custom-third)/0.1)] to-[hsl(var(--custom-fifth)/0.1)] blur-xl" style={{ borderRadius: "var(--radius)" }}></div>
                    {/* Content */}
                    <div className="relative flex flex-col justify-start rounded-lg p-6 text-[hsl(var(--muted-foreground))]" style={{ borderRadius: "var(--radius)" }}>
                        <p className="text-sm leading-relaxed">{experience.description}</p>
                        {experience.achievements.length > 0 && (
                            <ul className="mt-4 space-y-2">
                            {experience.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs opacity-90">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                                <span>{achievement}</span>
                                </li>
                            ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Preview Image */}
                <div
                    className="flex items-center justify-center overflow-hidden rounded-lg bg-[hsl(var(--muted))]"
                    style={{
                        borderRadius: "var(--radius)",
                    }}
                >
                    {experience.previewImage ? (
                        <img
                        src={experience.previewImage || "/placeholder.svg"}
                        alt={`${experience.company} preview`}
                        className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center p-8 text-center text-sm text-[hsl(var(--muted-foreground))]">
                        Preview Image
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    )
}
