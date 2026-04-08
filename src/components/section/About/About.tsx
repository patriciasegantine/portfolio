'use client'

import React from 'react'
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { Section } from "@/components/ui/Section/Section";
import { TextContent } from "@/components/ui/TextContent/TextContent";
import { aboutMe } from "@/data/aboutMe";

const About: React.FC = () => {
  return (
    <Section
      id="about"
      variant="secondary"
      aria-label="About"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto prose dark:prose-dark">
          <SectionTitle title={"About"} />

          <div className="text-lg text-secondary dark:text-secondary leading-relaxed space-y-4">
            {aboutMe.paragraphs.map((paragraph, index) => (
              <TextContent key={index}>
                {paragraph}
              </TextContent>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
