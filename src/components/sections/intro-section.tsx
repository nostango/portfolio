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
            <div className="relative w-full">
            {/* Liquid gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--custom-primary)/0.1)] via-[hsl(var(--custom-third)/0.1)] to-[hsl(var(--custom-fourth)/0.1)] rounded-3xl blur-xl"></div>

            {/* Main content box */}
            <div className="relative bg-gradient-to-br from-[hsl(var(--card)/0.4)] to-[hsl(var(--card)/0.1)] backdrop-blur-md border border-[hsl(var(--border)/0.3)] rounded-3xl p-8 md:p-10">
                <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
                I'm Alejandro Vega, and I am an engineer who builds full-stack web applications and develops practical, AI-driven solutions. I combine research experience with real-world engineering, creating tools that automate workflows, enhance data understanding, and bring intelligent systems to life.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
)
}