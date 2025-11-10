import BubbleBackground from '@/components/sections/bubble-background';
import ScrollReveal from '@/components/scroll-behavior/scroll-reveal';
import StickySection from '@/components/scroll-behavior/sticky-section';
import TransparentHeader from "@/components/sections/transparent-header"
import SocialBubbleGrid from '@/components/sections/social-bubble-grid';
import { WorkExperience } from "@/components/sections/work-experience";
import { IntroSection } from "@/components/sections/intro-section"

export default function Home() {
  return (
        <main>
          <BubbleBackground
            interactive
            colors={{
              first: '115, 82, 144', // --background
              second: '215, 182, 244', // --card
              third: '54, 52, 87', // --background
              fourth: '158, 183, 229', // --card
              fifth: '152, 168, 134', // --background
              sixth: '152, 168, 134', // --card
            }}
          ></BubbleBackground>
          {/* TODO: Here is how I would break down the website, thinking about each stickysection:
            1) The introduction or landing page that essentially just says Hello, I am Ale and I am a Full-Stack and AI Engineer that likes to build
            2) Technologies I like to use and have experience with
            3) Work Experience with the technology attached to it
            4) Demo space
            5) How to get in touch (the final slide where the logo is there and then all the buttons for github, ) */}
          {/*<DotSpiral></DotSpiral>*/}
          <StickySection className="text-white flex items-center justify-center">
            <TransparentHeader />
            <IntroSection />
          </StickySection>
    
          <WorkExperience></WorkExperience>
    
          <StickySection className="bg-transparent items-center">
            <ScrollReveal>
              <SocialBubbleGrid></SocialBubbleGrid>
            </ScrollReveal>
          </StickySection>
        </main>  )
}
