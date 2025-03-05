import React from 'react'
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { Section } from "@/components/ui/Section/Section";
import { TextContent } from "@/components/ui/TextContent/TextContent";
import { AboutInterests } from "@/components/ui/AboutInterests/AboutInterests";

const About: React.FC = () => {
  
  return (
    <Section
      id="about"
      variant="primary"
      aria-label="About"
    >
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto ">
          <div className="prose dark:prose-dark mb-16">
            <SectionTitle title="About Me"/>
            
            <div className="text-lg text-secondary dark:text-zinc-300 leading-relaxed space-y-4">
              <TextContent>
                With over 4 years of hands-on experience, I’ve been building scalable, user-focused web applications
                while leveraging modern technologies like React, Next.js, and TypeScript. I’m passionate about enhancing
                user experiences and delivering maintainable code through effective collaboration within agile teams.
              </TextContent>
              
              <TextContent>
                Alongside front-end development, I’ve also worked in environments with microservices architecture,
                contributing to front-end integrations and supporting modern practices such as implementing design
                systems and CI/CD workflows. My focus is always on balancing code quality, performance, and scalability
                to create applications that drive impactful results and solve real-world challenges.
              
              </TextContent>
              
              <TextContent>
                Beyond technical skills, I value clear communication, teamwork, and a growth-oriented mindset. I excel
                in collaborating across cross-functional teams to align on goals, promote efficient workflows, and
                continuously learn new technologies to improve both as a developer and a team contributor.
              
              </TextContent>
            </div>
          </div>
          
          <AboutInterests/>
        </div>
      </div>
    </Section>
  )
}

export default About
