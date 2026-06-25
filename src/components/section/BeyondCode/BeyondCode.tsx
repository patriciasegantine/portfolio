import React from "react";
import { Section } from "@/components/ui/Section/Section";
import RevealOnScroll from "@/components/ui/RevealOnScroll/RevealOnScroll";
import { beyondCodeInterests } from "@/data/beyondCodeInterests";

const BeyondCode: React.FC = () => {
  return (
    <Section
      id="beyond-code"
      variant="secondary"
      aria-label="Beyond the Code"
      className="py-14"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-12">
            <div>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
                06 · Beyond the code
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-primary md:text-5xl">
                A little life outside the screen.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-secondary md:justify-self-end">
              A few simple things that help me slow down, recharge, and return to the work with a wider perspective.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 overflow-hidden rounded-panel bg-surface shadow-soft md:grid-cols-4">
          {beyondCodeInterests.map(({ name, icon: Icon, subtitle }, index) => (
            <RevealOnScroll key={name} delay={index * 0.04} yOffset={10} className="h-full">
              <div className={`group flex h-full min-h-28 items-center gap-4 border-line p-5 md:p-6 ${index % 2 === 1 ? 'border-l' : ''} ${index >= 2 ? 'border-t md:border-t-0' : ''} ${index > 0 ? 'md:border-l' : ''}`}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-accent-soft text-accent-strong transition-transform duration-300 group-hover:-rotate-6">
                  <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-primary">{name}</h3>
                  <p className="mt-1 text-xs text-secondary">{subtitle}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BeyondCode;
