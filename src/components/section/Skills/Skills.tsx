import React from 'react'
import { coreSkills, toolingSkills } from "@/data/skills";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { Section } from "@/components/ui/Section/Section";
import { SkillCard } from "@/components/ui/SkillCard/SkillCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll/RevealOnScroll";

const Skills: React.FC = () => {
  
  return (
    <Section
      id="skills"
      variant="secondary"
      aria-label="Skills"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title={"Skills"}/>

          <div className="mb-12 grid grid-cols-2 auto-rows-fr gap-5 lg:grid-cols-4">
            {coreSkills.map(({name, subtitle, icon}, index) => (
              <RevealOnScroll key={name} delay={index * 0.04} yOffset={14} className="h-full">
                <SkillCard name={name} subtitle={subtitle} icon={icon} />
              </RevealOnScroll>
            ))}
          </div>

          <h3 className="mb-5 text-primary font-medium text-center">Tooling</h3>
          <div className="mx-auto grid max-w-4xl grid-cols-2 auto-rows-fr gap-5 lg:grid-cols-4">
            {toolingSkills.map(({name, subtitle, icon}, index) => (
              <RevealOnScroll key={name} delay={index * 0.04} yOffset={14} className="h-full">
                <SkillCard name={name} subtitle={subtitle} icon={icon} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Skills
