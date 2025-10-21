"use client"

import { ExternalLink } from "lucide-react"
import type { Experience } from "../sections/work-experience"
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
            className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-8"
            style={{
            borderRadius: "var(--radius)",
            }}
        >
            {/* Top Left - Title (appears first, 12 o'clock) */}
            <div
            className="flex flex-col justify-start order-1"
            >
            <h3 className="text-2xl font-bold leading-tight text-foreground">{experience.role}</h3>
            <p className="mt-1 text-lg text-muted-foreground">{experience.company}</p>
            <span className="mt-2 text-sm text-muted-foreground">{experience.period}</span>
            {experience.website && (
                <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary/20"
                >
                <span>Visit Site</span>
                <ExternalLink className="h-3 w-3" />
                </a>
            )}
            </div>

            {/* Top Right - Description box (appears second, 3 o'clock) */}
            <div
            className="flex flex-col justify-start rounded-lg bg-[var(--color-primary)] p-6 text-primary-foreground order-2"
            style={{
                borderRadius: "var(--radius)",
            }}
            >
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

            {/* Bottom Left - Preview Image (appears fourth, 9 o'clock) */}
            <div
            className="flex items-center justify-center overflow-hidden rounded-lg bg-muted order-4 md:order-4"
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
                <div className="flex h-full w-full items-center justify-center p-8 text-center text-sm text-muted-foreground">
                Preview Image
                </div>
            )}
            </div>

            {/* Bottom Right - Technology Stack (appears third, 6 o'clock) */}
            <div
            className="flex flex-col justify-center order-3 md:order-3"
            >
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                    style={{ borderRadius: "calc(var(--radius) * 0.5)" }}
                >
                    {tech}
                </span>
                ))}
            </div>
            </div>
        </div>


        </div>
    )
}
