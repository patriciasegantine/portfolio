import React from 'react'
import { coreSkills, toolingSkills, type SkillItem } from "@/data/skills";
import { Section } from "@/components/ui/Section/Section";
import RevealOnScroll from "@/components/ui/RevealOnScroll/RevealOnScroll";
import type { IconType } from "react-icons";

const SkillIcon = ({icon: Icon}: {icon: IconType}) => (
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-accent-soft text-accent-strong">
    <Icon className="h-5 w-5" aria-hidden="true" />
  </span>
);

type SkillGroupProps = {
  label: string;
  skills: SkillItem[];
  gridClassName: string;
  titleClassName?: string;
};

const SkillGroup = ({
  label,
  skills,
  gridClassName,
  titleClassName = "text-sm",
}: SkillGroupProps) => (
  <div className="grid gap-6 border-b border-line py-8 md:grid-cols-[11rem_1fr] md:gap-10">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">{label}</p>
    <div className={gridClassName}>
      {skills.map(({name, subtitle, icon: Icon}, index) => (
        <RevealOnScroll key={name} delay={index * 0.04} yOffset={12}>
          <div className="group flex gap-4 items-start" data-testid="skill-item">
            <div className="transition-transform duration-300 group-hover:-rotate-6">
              <SkillIcon icon={Icon} />
            </div>
            <div>
              <h3 className={`font-display font-semibold text-primary ${titleClassName}`}>{name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-secondary">{subtitle}</p>
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const primarySkills = coreSkills.slice(0, 4);
  const practiceSkills = coreSkills.slice(4);
  
  return (
    <Section
      id="skills"
      variant="secondary"
      aria-label="Skills"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 border-b border-line pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-12">
            <div>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
                04 · Skills
              </p>
              <h2 className="mt-4 font-display text-5xl font-semibold tracking-[-0.055em] text-primary md:text-6xl">
                Skills
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-secondary md:justify-self-end md:text-lg">
              A frontend toolkit shaped by product scale, shared ownership, and the need to keep complex systems understandable.
            </p>
          </div>

          <div className="mt-12">
            <SkillGroup
              label="Core stack"
              skills={primarySkills}
              gridClassName="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4"
              titleClassName="text-lg"
            />

            <SkillGroup
              label="Engineering practice"
              skills={practiceSkills}
              gridClassName="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            />

            <div className="grid gap-6 py-8 md:grid-cols-[11rem_1fr] md:items-center md:gap-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Tooling</p>
              <div className="flex flex-wrap gap-2.5">
                {toolingSkills.map(({name, icon: Icon}) => (
                  <span key={name} className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-3.5 py-2 font-display text-sm font-semibold text-primary">
                    <Icon className="h-4 w-4 text-accent-strong" aria-hidden="true" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Skills
