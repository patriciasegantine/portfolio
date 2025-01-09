import React from 'react'
import { Coffee, Music, Plane, Tent, Users } from 'lucide-react'

const About: React.FC = () => {
  const personalInterests = [
    {icon: <Coffee className="w-6 h-6 md:w-7 md:h-7"/>, label: 'Coffee'},
    {icon: <Music className="w-6 h-6 md:w-7 md:h-7"/>, label: 'Music'},
    {icon: <Plane className="w-6 h-6 md:w-7 md:h-7"/>, label: 'Travel'},
    {icon: <Tent className="w-6 h-6 md:w-7 md:h-7"/>, label: 'Camping'},
    {icon: <Users className="w-6 h-6 md:w-7 md:h-7"/>, label: 'Family Time'},
  ]
  
  return (
    <section id="about" className="py-20 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-custom">
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-primary-dark dark:text-zinc-50 mb-6 mt-8">
              About Me
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-secondary dark:text-zinc-300 leading-relaxed">
                Experienced remote web developer with over 4 years of expertise in crafting innovative web solutions.
                Specializing in front-end technologies and microservices architecture, I&apos;m passionate about
                creating
                seamless user experiences through clean, efficient code.
              </p>
              <p className="text-lg text-secondary dark:text-zinc-300 leading-relaxed">
                Proficient in modern JavaScript frameworks and design systems implementation, with extensive
                experience in agile development and CI/CD practices. My focus is on delivering sophisticated
                digital solutions while maintaining code quality and performance.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-primary-dark dark:text-zinc-50 mb-8 text-center">
              When I&apos;m Not Coding
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
              {personalInterests.map((interest, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-5 rounded-lg
                           bg-zinc-50 dark:bg-zinc-700/30
                           transition-all duration-custom
                           hover:-translate-y-1
                           hover:bg-zinc-100 dark:hover:bg-zinc-700/50
                           group"
                >
                  <span className="text-secondary dark:text-zinc-300 mb-3
                                transition-transform duration-300
                                group-hover:scale-110">
                    {interest.icon}
                  </span>
                  <span className="text-primary-dark dark:text-zinc-100 text-sm text-center">
                    {interest.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
