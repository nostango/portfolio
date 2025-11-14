'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import BubbleBackground from '@/components/sections/bubble-background';
import StickySection from '@/components/scroll-behavior/sticky-section';
import TransparentHeader from "@/components/sections/transparent-header"
import SocialBubbleGrid from '@/components/sections/social-bubble-grid';
import { WorkExperience } from "@/components/sections/work-experience";
import { WorkExperienceMobile } from "@/components/sections/work-experience-mobile";
import { IntroSection } from "@/components/sections/intro-section"
import { useIsMobile } from '@/lib/use-is-mobile';

const sections = ['Welcome!', 'Work Experience', 'Contact Me'];

function Section({ children, id }: { children: React.ReactNode, id: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const { activeSection, setActiveSection } = useSectionContext();

  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  return <section ref={ref}>{children}</section>;
}

// A simple context to pass activeSection state down
const SectionContext = React.createContext<{
  activeSection: string;
  setActiveSection: (id: string) => void;
} | null>(null);

const useSectionContext = () => {
  const context = React.useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
};


export default function Home() {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const isMobile = useIsMobile();

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      <main>
        <BubbleBackground
          interactive
        ></BubbleBackground>

        <TransparentHeader sections={sections} activeSection={activeSection} />
        <Section id="Welcome!">
          <StickySection className="text-white flex flex-col items-center justify-center">
            <IntroSection />
          </StickySection>
        </Section>

        <Section id="Work Experience">
          {isMobile ? <WorkExperienceMobile /> : <WorkExperience />}
        </Section>

        <Section id="Contact Me">
          <StickySection className="bg-transparent items-center">
            <SocialBubbleGrid />
          </StickySection>
        </Section>
      </main>
    </SectionContext.Provider>
  );
}
