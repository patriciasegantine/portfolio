import React from 'react'
import SocialLinks from "@/components/SociaisLinks/SocialLinks";
import HeroImage from "@/components/HeroImage/HeroImage";
import HeroIntro from "@/components/HeroIntro/HeroIntro";
import { SectionWrapper } from "@/components/SectionWrapper/SectionWrapper";

const Hero: React.FC = () => {
  return (
    <SectionWrapper id="hero" data-testid="hero" aria-label="Hero section" variant="secondary"
                    className="flex items-center justify-center min-h-screen pt-16">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <HeroImage/>
        
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <HeroIntro/>
          <SocialLinks showLabel={true}/>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Hero
