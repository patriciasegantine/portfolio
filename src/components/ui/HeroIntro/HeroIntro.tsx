'use client'

import React from 'react'
import { contentClientService } from "@/services/content/contentClientService";
import { useRemoteContent } from "@/hook/useRemoteContent";
import { HeroContent } from "@/types/hero";
import LoadingComponent from "@/components/ui/LoadingComponent/LoadingComponent";
import ErrorComponent from "@/components/ui/ErrorComponent/ErrorComponent";

const HeroIntro: React.FC = () => {
  const { data: content, isLoading, error } = useRemoteContent<HeroContent>(
    contentClientService.getHeroContent
  );

  return (
    <>
      <div className="flex items-center gap-2 text-secondary dark:text-zinc-400" data-testid="hero-intro">
        <span className="w-6 h-[2px] bg-zinc-300 dark:bg-zinc-600"/>
        <span>Hi there, I&apos;m</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold
                   text-primary-dark dark:text-zinc-50">
        Patricia Segantine
      </h1>

      {isLoading && <LoadingComponent message="Loading hero content..." />}
      {error && <ErrorComponent message={error} />}

      {content && (
        <>
          <p className="text-xl md:text-2xl lg:text-3xl text-secondary dark:text-zinc-300">
            {content.title}
          </p>

          <p className="text-lg text-secondary dark:text-zinc-300 leading-relaxed max-w-2xl">
            {content.subtitle}
          </p>
        </>
      )}
    </>
  )
}

export default HeroIntro
