import React from 'react'
import { FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiGraphql, SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills: React.FC = () => {
  const skills = [
    {name: 'React', icon: FaReact},
    {name: 'Next.js', icon: SiNextdotjs},
    {name: 'TypeScript', icon: SiTypescript},
    {name: 'Node.js', icon: FaNodeJs},
    {name: 'Tailwind', icon: SiTailwindcss},
    {name: 'Styled Components', icon: SiStyledcomponents},
    {name: 'Git', icon: FaGitAlt},
    {name: 'GraphQL', icon: SiGraphql}
  ]
  
  return (
    <section id="skills" className="py-20 bg-white dark:bg-zinc-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-medium text-primary-dark dark:text-zinc-50 text-center mb-16 mt-8">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map(({name, icon: Icon}, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-6
                         bg-zinc-50 dark:bg-zinc-700/30
                         rounded-lg
                         transition-all duration-300
                         hover:-translate-y-1
                         hover:bg-zinc-100 dark:hover:bg-zinc-700/50"
              >
                <div className="relative mb-4">
                  <Icon
                    className="w-8 h-8 text-secondary dark:text-zinc-300
                             transition-transform duration-300
                             group-hover:scale-110"
                  />
                </div>
                
                <span className="text-primary-dark dark:text-zinc-100 font-medium text-sm text-center">
                  {name}
                </span>
                
                <div
                  className="absolute inset-0 rounded-lg bg-gradient-to-br from-zinc-200/0 to-zinc-200/20 dark:from-zinc-600/0 dark:to-zinc-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
