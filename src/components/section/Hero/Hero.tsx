'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import SocialLinks from "@/components/ui/SocialLinks/SocialLinks";
import HeroImage from "@/components/ui/HeroImage/HeroImage";
import { Section } from "@/components/ui/Section/Section";
import type { HeroContent } from "@/types/hero";

export const HERO_CONTENT: HeroContent = {
  tagline: {
    main: "Interfaces that hold up",
    accent: "as products grow.",
  },
  subtitle: "I turn complex product requirements into accessible, maintainable frontend experiences, with a close eye on the details and the system behind them.",
};

const HERO_HIGHLIGHTS = [
  { value: '6 years', label: 'building products' },
  { value: 'B2B + B2C', label: 'SaaS experience' },
  { value: 'React ecosystem', label: 'core expertise' },
];

const Hero: React.FC = () => {

  return (
    <Section
      id="home"
      variant="primary"
      aria-label="Home"
      className="hero-viewport relative isolate flex  items-center overflow-hidden md:min-h-[calc(100svh-5rem)] md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent opacity-[0.08] blur-3xl" />
        <div className="absolute inset-y-0 left-[4.5%] hidden w-px bg-line xl:block" />
        <span className="absolute left-[4.5%] top-[70%] hidden -translate-x-1/2 -translate-y-1/2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-subtle [writing-mode:vertical-rl] xl:block">
          Portfolio · 2026
        </span>
      </div>

      <div className="container mx-auto px-5 sm:px-8">
        <div className="hero-layout mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-20">
          <div className="order-1 flex min-w-0 flex-col items-start text-left">
            <div className="eyebrow flex items-center gap-3" data-testid="hero-intro">
              <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
              <span>Senior Frontend Engineer</span>
            </div>

            <h1 className="hero-heading mt-7 max-w-4xl font-display text-5xl font-semibold leading-[0.94] tracking-[-0.065em] text-primary sm:text-6xl md:text-7xl xl:text-[5.5rem]">
              Patricia Segantine
            </h1>

            <p className="hero-tagline mt-7 max-w-3xl font-display text-2xl font-medium leading-tight tracking-[-0.035em] text-primary sm:text-3xl md:text-4xl">
              {HERO_CONTENT.tagline.main} <span className="text-accent-strong">{HERO_CONTENT.tagline.accent}</span>
            </p>

            <p className="hero-description mt-6 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
              {HERO_CONTENT.subtitle}
            </p>

            <div className="hero-actions mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="#projects" className="button-primary group">
                Explore selected work
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
              <Link
                href="#about"
                className="group inline-flex items-center justify-center gap-2 rounded-control border border-line bg-surface px-5 py-2.5 font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent-strong focus-ring"
              >
                More about me
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="hero-socials mt-5 flex min-h-11 items-center">
              <SocialLinks showLabel={true}/>
            </div>

            <dl className="hero-highlights mt-10 grid w-full grid-cols-3 border-y border-line sm:max-w-2xl sm:py-5">
              {HERO_HIGHLIGHTS.map(({value, label}) => (
                <div key={value} className="border-t border-line py-3 first:border-t-0 sm:border-l sm:border-t-0 sm:px-5 sm:py-0 sm:first:border-l-0 sm:first:pl-0">
                  <dt className="font-display text-sm font-semibold text-primary sm:text-base">{value}</dt>
                  <dd className="mt-1 text-[0.68rem] leading-tight text-ink-subtle sm:text-xs">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="order-2">
            <HeroImage/>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
