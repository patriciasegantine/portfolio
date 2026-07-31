'use client'

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import LoadingComponent from "@/components/ui/LoadingComponent/LoadingComponent";
import ErrorComponent from "@/components/ui/ErrorComponent/ErrorComponent";
import { Section } from "@/components/ui/Section/Section";
import { contentClientService } from "@/services/content/contentClientService";
import { useRemoteContent } from "@/hook/useRemoteContent";
import { Project } from "@/types/project";
import RevealOnScroll from "@/components/ui/RevealOnScroll/RevealOnScroll";

const HOME_PROJECTS_LIMIT = 3;

const Projects: React.FC = () => {
  const { data, isLoading, error } = useRemoteContent<Project[]>(
    contentClientService.getProjectsContent
  );
  const projects = data ?? [];
  const selectedProjects = projects
    .filter((project) => project.featured)
    .sort((firstProject, secondProject) =>
      (firstProject.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
      (secondProject.featuredOrder ?? Number.MAX_SAFE_INTEGER)
    )
    .slice(0, HOME_PROJECTS_LIMIT);
  
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
        
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:gap-14">
            {selectedProjects.map((project, index) => (
              <RevealOnScroll key={project.slug} delay={index * 0.08} className="h-full">
                <ProjectCard
                  imagePosition={index % 2 === 0 ? "left" : "right"}
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

          <div className="mt-12 flex justify-center lg:mt-16">
            <Link
              href="/all-projects"
              className="group inline-flex items-center gap-2 rounded-control px-2 py-1 text-sm font-medium text-secondary transition-colors duration-300 hover:text-accent-strong focus-ring"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
