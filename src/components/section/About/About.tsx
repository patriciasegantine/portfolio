'use client'

import React from 'react'
import { Section } from "@/components/ui/Section/Section";
import { ABOUT_ME, ABOUT_PRINCIPLES } from "@/data/aboutMe";

const About: React.FC = () => {
  return (
    <Section
      id="about"
      variant="secondary"
      aria-label="About"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-24">
            <div>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
                02 · About
              </p>

              <h2 className="mt-5 font-display text-5xl font-semibold tracking-[-0.055em] text-primary md:text-6xl">
                About
              </h2>

              <p className="mt-8 max-w-md font-display text-2xl font-medium leading-tight tracking-[-0.035em] text-primary md:text-3xl">
                The frontend is where product decisions <span className="text-accent-strong">become real.</span>
              </p>
            </div>

            <div className="flex flex-col justify-end lg:pb-1">
              <p className="text-xl leading-relaxed text-primary md:text-2xl">
                {ABOUT_ME[0].text}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-secondary md:text-lg">
                {ABOUT_ME[1].text}
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-line pt-8 lg:mt-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
              How I work
            </p>
            <div className="grid gap-8 md:grid-cols-3 md:gap-0">
              {ABOUT_PRINCIPLES.map(({number, title, description}) => (
                <div key={number} className="border-t border-line pt-5 md:border-l md:border-t-0 md:px-8 md:pt-0 md:first:border-l-0 md:first:pl-0 md:last:pr-0">
                  <h3 className="mt-3 font-display text-xl font-semibold text-primary">{title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-secondary">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
