'use client'

import React from "react";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import LoadingComponent from "@/components/ui/LoadingComponent/LoadingComponent";
import ErrorComponent from "@/components/ui/ErrorComponent/ErrorComponent";
import { Section } from "@/components/ui/Section/Section";
import { contentClientService } from "@/services/content/contentClientService";
import { useRemoteContent } from "@/hook/useRemoteContent";
import { Project } from "@/types/project";
import RevealOnScroll from "@/components/ui/RevealOnScroll/RevealOnScroll";

const Projects: React.FC = () => {
  const { data, isLoading, error } = useRemoteContent<Project[]>(
    contentClientService.getProjectsContent
  );
  const projects = data ?? [];
  
  return (
    <Section
      id="projects"
      variant="primary"
      aria-label="Projects"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mx-auto mb-12 grid max-w-7xl gap-6 border-b border-line pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-12 lg:mb-16">
          <div>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
              03 · Selected work
            </p>
            <h2 className="mt-4 font-display text-5xl font-semibold tracking-[-0.055em] text-primary md:text-6xl">
              Projects
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-secondary md:justify-self-end md:text-lg">
            A selection of products where interface decisions, technical architecture, and real-world constraints meet.
          </p>
        </div>
        
        {isLoading && <LoadingComponent message="Loading projects..."/>}
        
        {error && <ErrorComponent message={error}/>}
        
        <div className="mx-auto grid max-w-7xl gap-10 lg:gap-14">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={index * 0.08} className="h-full">
              <ProjectCard
                imagePosition={index % 2 === 0 ? 'left' : 'right'}
                slug={project.slug}
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
                stackPreview={project.stackPreview}
                status={project.status}
                github={project.links.github}
                liveDemo={project.links.liveDemo}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
