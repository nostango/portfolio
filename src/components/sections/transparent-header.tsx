"use client"

import { motion } from "framer-motion"

type TransparentHeaderProps = {
  sections: string[];
  activeSection: string;
};

export default function TransparentHeader({ sections, activeSection }: TransparentHeaderProps) {
  const activeIndex = sections.indexOf(activeSection);
  const progress = sections.length > 1 ? activeIndex / (sections.length - 1) : 0;

  return (
    <header className="sticky top-0 z-[999] w-full bg-[hsl(var(--card)/0.5)] backdrop-blur-lg rounded-3xl">
      <div className="container mx-auto px-4 py-4 max-w-5xl">
        <div className="flex justify-between items-center">
          <div className="text-[hsl(var(--foreground))] text-4xl font-bold">nostango</div>

          {/* Timeline */}
          <div className="flex-grow flex flex-col items-center justify-center mx-8">
            <motion.div
              className="h-8 text-[hsl(var(--foreground))] text-sm"
              key={activeSection}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {activeSection}
            </motion.div>
            <div className="w-full h-1 bg-[hsl(var(--foreground)/0.2)] rounded-full relative">
              {/* Progress Bar */}
              <motion.div
                className="h-1 bg-[hsl(var(--foreground))] rounded-full origin-left"
                animate={{ scaleX: progress }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              {/* Dots */}
              <div className="absolute inset-0 flex justify-between items-center">
                {sections.map((section) => (
                  <motion.div
                    key={section}
                    className="w-3 h-3 bg-[hsl(var(--foreground))] rounded-full"
                    animate={{ scale: activeSection === section ? 1.5 : 1 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>

          <button className="group relative overflow-hidden rounded-full border-2 border-[hsl(var(--foreground))] px-6 py-2 text-[hsl(var(--foreground))] font-medium transition-all duration-300 hover:text-[hsl(var(--background))]">
            <div className="absolute inset-0 bg-[hsl(var(--foreground))] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10">Get in touch</span>
          </button>
        </div>
      </div>
    </header>
  );
}
