"use client"

import { ExperienceCard } from "./experience-card"
import StickySection from "@/components/scroll-behavior/sticky-section"

export interface Experience {
    id: string
    company: string
    role: string
    period: string
    description: string
    technologies: string[]
    website?: string
    achievements: string[]
    previewImage?: string
}

interface WorkExperienceProps {
    experiences?: Experience[]
}

const defaultExperiences: Experience[] = [
    {
        id: "1",
        company: "Independent",
        role: "Freelance Developer",
        period: "August 2023 – Present",
        description:
        "Built and deployed custom web and automation solutions for small businesses using cloud-native infrastructure and modern frameworks.",
        technologies: ["Next.js", "AWS Lambda", "AWS DynamoDB", "Twilio", "GitHub Actions", "SonarCloud", "Google Apps Script"],
        achievements: [
        "Karate School Website: Built and maintained a Next.js website that syncs class schedules from Google Calendar using Google Apps Script and AWS Lambda. Integrated AWS DynamoDB as a backup cache layer to ensure reliability during Google service interruptions. Deployed via AWS Amplify with CI/CD through GitHub, managing test and production branches",
        "Client Messaging System: Created a group SMS platform with AWS Lambda, Twilio, and API Gateway for streamlined outreach",
        "CI/CD Automation: Integrated SonarCloud with GitHub Actions for continuous deployment on AWS Lambda-hosted applications",
        ],
        previewImage: "/images/experience-images/vhk.png",
    },
    {
        id: "2",
        company: "Oxbridge Health Inc.",
        role: "Large Language Model Engineer",
        period: "January 2024 - July 2025",
        description:
        "Developing LLM-driven applications to streamline healthcare episode management and member support utilizing AWS Bedrock, embeddings, and NLP pipelines to optimize knowledge retrieval and contextual understanding",
        technologies: ["AWS Bedrock", "LLMs", "Streamlit", "AWS S3", "Graph Neural Networks", "NeptuneDB", "DynamoDB", "PostgreSQL"],
        achievements: [
        "Synthetic Claims Generator: Engineered a rule-verified system to produce structured medical claim data using LLMs and embeddings",
        "Document Generation App: Created a Streamlit-based tool using LLM-powered analysis and AWS S3 to automate contract and form generation that matches existing company cadence and language",
        "Knowledge Graph R&D: Initiated and led a healthcare episode prediction project after independently researching and pitching the concept to the CTO in response to a founder's question. Brought in a clinical leader to join the team and earned direct recognition from the founder for driving collaboration between clinical and engineering teams on data-driven episode-of-care insights using Graph Neural Networks and NeptuneDB.",
        ],
        previewImage: "/images/experience-images/oxb_health.png",
    },
    {
        id: "3",
        company: "Teaching Assistant Program in France; Collège International de l'Est Parisien",
        role: "English Teaching Assistant",
        period: "September 2022 - May 2023",
        description:
        "Selected among 1500 American citizens to teach English in public schools across France to students of all ages",
        technologies: [],
        achievements: [
        "Selected among 1500 American citizens to teach English in public schools across France to students of all ages",
        "Prepared and taught 12 hours a week of lessons in English to classes of 12 students between 6th and 9th grade",
        ],
        previewImage: "/images/experience-images/tapif.jpg",
    },
    ]

export function WorkExperience({ experiences = defaultExperiences }: WorkExperienceProps) {
    return (
        <div className="relative w-full py-20 z-50">
        <div className="mx-auto max-w-4xl space-y-32 px-4">
            {experiences.map((experience, index) => (
            <StickySection key={experience.id}>
                <ExperienceCard
                experience={experience}
                index={index}
                />
            </StickySection>
            ))}
        </div>
        </div>
    )
}
