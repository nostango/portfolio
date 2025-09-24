import ScrollReveal from '@/components/ScrollReveal';
import StickySection from '@/components/StickySection';

export default function Home() {
  return (
    <main>
      <StickySection className="bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <ScrollReveal>
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="mt-4 text-xl">Scroll down to see my work</p>
          </ScrollReveal>
        </div>
      </StickySection>

      <StickySection className="bg-gray-800 text-white flex items-center justify-center">
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

      <StickySection className="bg-gray-900 text-white flex items-center justify-center">
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
  );
}
