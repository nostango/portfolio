import { LiquidCard } from "@/components/ui/liquid-card";

export function IntroSection() {
return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 ">
    <div className="w-full max-w-6xl">
        {/* 2x3 Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-start">
        {/* Row 1, Col 1: Name Introduction */}
        <div className="flex items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hello, my name is{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--custom-primary))] via-[hsl(var(--custom-third))] to-[hsl(var(--custom-fourth))] bg-clip-text text-transparent">
                Alejandro Vega
            </span>
            </h1>
        </div>

        {/* Row 1, Col 2: Empty space */}
        <div></div>

        {/* Row 2, Col 1: Empty space */}
        <div></div>

        {/* Row 2, Col 2: Description Box with Liquid Background */}
        <div className="h-full flex items-center">
            <LiquidCard>
                <p className="text-base md:text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
                In order to understand the world, you gotta break some things and fix some things. That's what I am about, I love understanding how everyday things work, and make them into whatever the imagination can dream up.
                </p>
            </LiquidCard>
        </div>
        </div>
    </div>
    </section>
)
}