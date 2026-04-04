'use client'

import React from 'react'
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { Section } from "@/components/ui/Section/Section";
import { TextContent } from "@/components/ui/TextContent/TextContent";
import { contentClientService } from "@/services/content/contentClientService";
import { useRemoteContent } from "@/hook/useRemoteContent";
import type { AboutContent } from "@/types/about";
import LoadingComponent from "@/components/ui/LoadingComponent/LoadingComponent";
import ErrorComponent from "@/components/ui/ErrorComponent/ErrorComponent";

const About: React.FC = () => {
  const { data: content, isLoading, error } = useRemoteContent<AboutContent>(
    contentClientService.getAboutContent
  );

  return (
    <Section
      id="about"
      variant="primary"
      aria-label="About"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto prose dark:prose-dark mb-16">
          {isLoading && <LoadingComponent message="Loading about content..." />}
          {error && <ErrorComponent message={error} />}

          {content && (
            <>
              <SectionTitle title={content.title} />

              <div className="text-lg text-secondary dark:text-zinc-300 leading-relaxed space-y-4">
                {content.paragraphs.map((paragraph, index) => (
                  <TextContent key={index}>
                    {paragraph}
                  </TextContent>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  )
}

export default About
