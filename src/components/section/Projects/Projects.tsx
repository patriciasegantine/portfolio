'use client'

import React from "react";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import LoadingComponent from "@/components/ui/LoadingComponent/LoadingComponent";
import ErrorComponent from "@/components/ui/ErrorComponent/ErrorComponent";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
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
      <div className="container mx-auto px-4">
        <SectionTitle title={"Projects"}/>
        
        {isLoading && <LoadingComponent message="Loading projects..."/>}
        
        {error && <ErrorComponent message={error}/>}
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={index * 0.08}>
              <ProjectCard
                slug={project.slug}
                image={project.image}
                title={project.title}
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
