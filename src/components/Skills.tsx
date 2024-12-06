import React from 'react'
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql, SiMongodb } from 'react-icons/si'

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-500' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-600' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' }
  ]
  
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,200,255,0.1),transparent_40%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-8 text-dark">
          Skills
        </h2>
        {/*<SectionTitle title={'Skills'} />*/}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-6xl mx-auto mt-16">
          {skills.map(({name, icon: Icon, color}, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center p-8
              bg-white/70 backdrop-blur-sm
              rounded-3xl
              border border-gray-100/50
              hover:border-gray-200/70
              shadow-[0_0_20px_rgba(0,0,0,0.03)]
              hover:shadow-[0_0_25px_rgba(0,0,0,0.07)]
              transform hover:-translate-y-1.5
              transition-all duration-300 ease-out"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 rounded-full"/>
                <Icon
                  className={`text-4xl ${color} relative z-10
                  transform group-hover:scale-110 group-hover:rotate-3
                  transition-all duration-300 ease-out`}
                />
              </div>
              <span className="font-medium mt-8 text-gray-800 tracking-wide text-sm">
                {name}
              </span>
              
              {/* Subtle decoration */}
              <div
                className="absolute -inset-0.5 bg-gradient-to-br from-transparent to-gray-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
