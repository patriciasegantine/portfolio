'use client'

import React from 'react'
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { Section } from "@/components/ui/Section/Section";
import { TextContent } from "@/components/ui/TextContent/TextContent";
import { aboutContent } from "@/data/about";
import { contentClientService } from "@/services/content/contentClientService";
import { useRemoteContent } from "@/hook/useRemoteContent";
import type { AboutContent } from "@/types/about";

const About: React.FC = () => {
  const { data: content } = useRemoteContent<AboutContent>(
    contentClientService.getAboutContent,
    aboutContent
  );

  return (
    <Section
      id="about"
      variant="primary"
      aria-label="About"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto prose dark:prose-dark mb-16">
          
            <SectionTitle title={content.title} />
            
            <div className="text-lg text-secondary dark:text-zinc-300 leading-relaxed space-y-4">
              {content.paragraphs.map((paragraph, index) => (
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
