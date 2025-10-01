import ScrollReveal from '@/components/scroll-reveal';
import StickySection from '@/components/sticky-section';
import TransparentHeader from "@/components/transparent-header"
import { DotSpiral } from '@/components/dot-spiral'
import { ScrollBubble } from '@/components/scroll-bubble';

export default function Home() {
  return (
    <main>
      {/* TODO: Here is how I would break down the website, thinking about each stickysection:
        1) The introduction or landing page that essentially just says Hello, I am Ale and I am a Full-Stack and AI Engineer that likes to build */}
      <DotSpiral></DotSpiral>
      <ScrollBubble></ScrollBubble>
      <StickySection className="text-white flex items-center justify-center">
        <TransparentHeader></TransparentHeader>
        <div className="text-center">
          <ScrollReveal>
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="mt-4 text-xl">Scroll down to see my work</p>
          </ScrollReveal>
        </div>
      </StickySection>

      <StickySection className="text-white flex items-center justify-center">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold">Project 1</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="mt-4 max-w-2xl">
              This is a description of my first project. It was a challenging
              but rewarding experience. I learned a lot about...
            </p>
          </ScrollReveal>
        </div>
      </StickySection>

      <StickySection className=" text-white flex items-center justify-center">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold">About Me</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="mt-4 max-w-2xl">
              I am a passionate developer with a love for creating beautiful and
              functional web applications.
            </p>
          </ScrollReveal>
        </div>
      </StickySection>
    </main>
  )
}
