import React from 'react'
import { personalInterests } from "@/data/personalInterests";

const About: React.FC = () => {
  
  return (
    <section id="about" data-testid="about" className="py-20 bg-zinc-100 dark:bg-zinc-900 transition-colors-custom">
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto ">
          <div className="prose dark:prose-dark mb-16">
            <h2 className="text-3xl text-center font-medium text-primary-dark dark:text-zinc-50 mb-16 mt-8">
              About Me
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-secondary dark:text-zinc-300 leading-relaxed">
                With over 4 years of hands-on experience, I’ve been building scalable, user-focused web applications
                while leveraging modern technologies like React, Next.js, and TypeScript. I’m passionate about enhancing
                user experiences and delivering maintainable code through effective collaboration within agile teams.
              
              </p>
              
              <p className="text-lg text-secondary dark:text-zinc-300 leading-relaxed">
                Alongside front-end development, I’ve also worked in environments with microservices architecture,
                contributing to front-end integrations and supporting modern practices such as implementing design
                systems and CI/CD workflows. My focus is always on balancing code quality, performance, and scalability
                to create applications that drive impactful results and solve real-world challenges.
              
              </p>
              
              <p className="text-lg text-secondary dark:text-zinc-300 leading-relaxed">
                Beyond technical skills, I value clear communication, teamwork, and a growth-oriented mindset. I excel
                in collaborating across cross-functional teams to align on goals, promote efficient workflows, and
                continuously learn new technologies to improve both as a developer and a team contributor.
              
              </p>
            </div>
          </div>
          
          <div className="prose dark:prose-dark mb-16">
            <h3 className="text-xl font-medium text-primary-dark dark:text-zinc-50 text-center mt-8 mb-16">
              When I&apos;m Not Coding
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
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
                    {React.createElement(interest.icon, {className: "w-6 h-6 md:w-7 md:h-7"})}
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
