import React from 'react'
import SocialLinks from "@/components/ui/SociaisLinks/SocialLinks";
import HeroImage from "@/components/ui/HeroImage/HeroImage";
import HeroIntro from "@/components/ui/HeroIntro/HeroIntro";
import { Section } from "@/components/ui/Section/Section";

const Hero: React.FC = () => {
  return (
    <Section
      id="home"
      variant="secondary"
      className="flex items-center justify-center min-h-screen pt-16 bg-white"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <HeroImage/>
        
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <HeroIntro/>
          <SocialLinks showLabel={true}/>
        </div>
      </div>
    </Section>
  )
}

export default Hero
