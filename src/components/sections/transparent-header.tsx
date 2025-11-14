"use client"

import { motion } from "framer-motion"

type TransparentHeaderProps = {
  sections: string[];
  activeSection: string;
};

export default function TransparentHeader({ sections, activeSection }: TransparentHeaderProps) {
  const activeIndex = sections.indexOf(activeSection);

  return (
    <header className="sticky top-0 z-[999] w-full bg-gray/0.5)] backdrop-blur-lg rounded-3xl">
      <div className="container px-4 mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">nostango</div>

          <div className="flex-grow flex flex-col items-center justify-center">
            <motion.div
              className="h-8 text-sm justify-center"
              key={activeSection}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {activeSection}
            </motion.div>
          </div>

          <button className="group relative overflow-hidden rounded-full border-2 px-6 py-2 font-medium transition-all duration-300 hover:text-black">
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10">Get in touch</span>
          </button>
        </div>
      </div>
    </header>
  );
}
