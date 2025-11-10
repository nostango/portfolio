export function IntroSection() {
return (
    <section className="min-h-screen flex items-center justify-center px-60 py-12">
    <div className="w-full max-w-6xl">
        {/* 2x3 Grid Layout */}
        <div className="grid grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Row 1, Col 1: Name Introduction */}
        <div className="flex items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Hello, my name is{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
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
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-3xl blur-xl"></div>

            {/* Main content box */}
            <div className="relative bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-3xl p-8 md:p-10">
                <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                I'm Alejandro Vega, a hands-on engineer who builds full-stack web applications and develops practical, AI-driven solutions. I combine research experience with real-world engineering, creating tools that automate workflows, enhance data understanding, and bring intelligent systems to life.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
)
}