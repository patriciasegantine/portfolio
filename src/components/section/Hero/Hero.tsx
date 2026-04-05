'use client'

import React from 'react'
import SocialLinks from "@/components/ui/SociaisLinks/SocialLinks";
import HeroImage from "@/components/ui/HeroImage/HeroImage";
import { Section } from "@/components/ui/Section/Section";
import type { HeroContent } from "@/types/hero";

const HERO_CONTENT: HeroContent = {
  title: "Frontend Engineer",
  subtitle: "Building reliable applications for scalable SaaS products, with a strong focus on performance, accessibility, and maintainable front-end systems.",
};

const Hero: React.FC = () => {

  return (
    <Section
      id="home"
      variant="primary"
      aria-label="Home"
      className="flex items-center justify-center min-h-[calc(100svh-4rem)] md:min-h-screen py-0"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
        <HeroImage/>
        
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <div className="flex items-center gap-2 text-secondary dark:text-secondary" data-testid="hero-intro">
            <span className="w-6 h-[2px] bg-zinc-300 dark:bg-zinc-600"/>
            <span>Hi there, I&apos;m</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
            Patricia Segantine
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-secondary min-h-8 md:min-h-10">
            {HERO_CONTENT.title}
          </p>

          <p className="text-lg text-secondary leading-relaxed max-w-2xl min-h-32 md:min-h-24">
            {HERO_CONTENT.subtitle}
          </p>

          <div className="min-h-11 flex items-center">
            <SocialLinks showLabel={true}/>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
