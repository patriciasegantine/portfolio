import React from 'react'
import { skills } from "@/data/skills";
import { SkillCard } from "@/components/SkillCard";

const Skills: React.FC = () => {
  
  return (
    <section id="skills" data-testid="skills" className="py-20 bg-zinc-100  dark:bg-zinc-900 transition-colors-custom">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-medium text-primary-dark dark:text-zinc-50 text-center mb-16 mt-8">
            Tech Skills
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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
