import React from 'react'
import { skills } from "@/data/skills";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { Section } from "@/components/ui/Section/Section";
import { SkillCard } from "@/components/ui/SkillCard/SkillCard";

const Skills: React.FC = () => {
  
  return (
    <Section
      id="skills"
      variant="primary"
      aria-label="Skills"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title={"Skills"}/>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map(({name, icon}) => (
              <SkillCard
                key={name}
                name={name}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Skills
