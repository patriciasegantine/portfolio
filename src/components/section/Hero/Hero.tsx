'use client'

import React from 'react'
import SocialLinks from "@/components/ui/SociaisLinks/SocialLinks";
import HeroImage from "@/components/ui/HeroImage/HeroImage";
import { Section } from "@/components/ui/Section/Section";
import { contentClientService } from "@/services/content/contentClientService";
import { useRemoteContent } from "@/hook/useRemoteContent";
import type { HeroContent } from "@/types/hero";
import LoadingComponent from "@/components/ui/LoadingComponent/LoadingComponent";
import ErrorComponent from "@/components/ui/ErrorComponent/ErrorComponent";

const Hero: React.FC = () => {
  const { data: content, isLoading, error } = useRemoteContent<HeroContent>(
    contentClientService.getHeroContent
  );

  return (
    <Section
      id="home"
      variant="primary"
      aria-label="Home"
      className="flex items-center justify-center min-h-screen"
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

          {isLoading && <LoadingComponent message="Loading hero content..." />}
          {error && <ErrorComponent message={error} />}

          {content && (
            <>
              <p className="text-xl md:text-2xl lg:text-3xl text-secondary dark:text-zinc-300">
                {content.title}
              </p>

              <p className="text-lg text-secondary dark:text-secondary leading-relaxed max-w-2xl">
                {content.subtitle}
              </p>
            </>
          )}
          <SocialLinks showLabel={true}/>
        </div>
      </div>
    </Section>
  )
}

export default Hero
