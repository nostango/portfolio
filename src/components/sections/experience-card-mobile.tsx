"use client"

import type { Experience } from "./work-experience";
import { LiquidCard } from "@/components/ui/liquid-card";

interface ExperienceCardMobileProps {
    experience: Experience;
}

export function ExperienceCardMobile({ experience }: ExperienceCardMobileProps) {
    return (
        <div className="relative flex flex-col gap-6 p-4">
            {/* Title Section */}
            <div className="title-section">
                <LiquidCard>
                    <div className="flex flex-col justify-start">
                        <h3 className="text-2xl font-bold leading-tight">{experience.role}</h3>
                        <p className="mt-1 text-lg">{experience.company}</p>
                        <span className="mt-2 text-sm">{experience.period}</span>
                    </div>
                </LiquidCard>
            </div>

            {/* Technology Stack Section */}
            <div className="tech-stack-section flex flex-col justify-start">
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

            {/* Description box */}
            <div className="description-section relative w-full">
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
    );
}
