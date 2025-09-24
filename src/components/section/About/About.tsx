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
        <div className="max-w-6xl mx-auto">
          <div className="prose dark:prose-dark mb-16">
            <SectionTitle title="About Me" />
            
            <div className="text-lg text-secondary dark:text-zinc-300 leading-relaxed space-y-4">
              <TextContent>
                Building <strong>scalable, user-friendly applications</strong> with React, Next.js, and TypeScript for <strong>millions of users</strong>.
                I focus on creating <strong>smooth, intuitive interfaces</strong> that deliver real impact and great user experiences.
              </TextContent>
              
              <TextContent>
                Experienced in <strong>microfrontends, design systems, and CI/CD workflows</strong>, I write clean, maintainable code
                while collaborating in agile, cross-functional teams.
              </TextContent>
              
              <TextContent>
                I value <strong>clear communication, teamwork, and continuous learning</strong>, always exploring new tools and approaches
                to build better products and grow as a developer.
              </TextContent>
            </div>
          </div>
          
          <AboutInterests />
        </div>
      </div>
    </Section>
  )
}

export default About
