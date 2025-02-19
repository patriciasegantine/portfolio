import React from 'react'
import { skills } from "@/data/skills";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";

const Skills: React.FC = () => {
  
  return (
    <section id="skills" data-testid="skills" className="py-20 bg-zinc-100  dark:bg-zinc-900 transition-colors-custom">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title={"Skills"}/>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map(({name, icon: Icon}, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-6
           bg-zinc-50 dark:bg-zinc-700/30
           rounded-lg
           transition-all duration-300 shadow-md
           hover:-translate-y-1 hover:scale-105
           hover:bg-zinc-100 dark:hover:bg-zinc-700/50
           hover:shadow-lg"
              >
                <div className="relative mb-4">
                  <Icon
                    className="w-8 h-8 text-secondary dark:text-zinc-300 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-45"
                  />
                </div>
                
                <span className="text-primary-dark dark:text-zinc-100 font-medium text-sm text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
