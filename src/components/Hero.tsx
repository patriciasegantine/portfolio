import React from 'react'
import HeroImage from './HeroImage'
import HeroIntro from './HeroIntro'
import HeroSocialLinks from './HeroSocialLinks'

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      data-testid="hero"
      className="flex items-center justify-center min-h-screen pt-16 bg-white dark:bg-zinc-900/95 transition-colors-custom"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <HeroImage/>
        
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <HeroIntro/>
          <HeroSocialLinks/>
        </div>
      </div>
    </section>
  )
}

export default Hero
