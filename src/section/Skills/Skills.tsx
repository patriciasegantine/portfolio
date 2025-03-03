import React from 'react'
import { skills } from "@/data/skills";
import { SkillCard } from "@/components/SkillCard";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

const Skills: React.FC = () => {
  return (
    <section id="skills" data-testid="skills" className="py-20 bg-zinc-100 dark:bg-zinc-900 transition-colors-custom">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title={"Tech Skills"}/>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5">
            
            {skills.map(({name, icon: Icon}) => (
              <SkillCard
                key={name}
                name={name}
                icon={Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
