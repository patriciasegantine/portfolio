'use client'

import React, { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import LoadingComponent from "@/components/LoadingComponent/LoadingComponent";
import ErrorComponent from "@/components/ErrorComponent/ErrorComponent";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { SectionWrapper } from "@/components/SectionWrapper/SectionWrapper";

interface Technology {
  icon: string;
  name: string;
}

interface Project {
  key: string;
  title: string;
  description: string;
  image: string | null;
  technologies: Technology[];
  github: string;
  website: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchProjects = async () => {
    setIsLoading(true)
    setError(null);
    
    try {
      const response = await fetch("/api/projects");
      
      if (!response.ok) {
        throw new Error("Failed to fetch projects.");
      }
      
      const data: Project[] = await response.json();
      setProjects(data)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch projects.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchProjects()
  }, []);
  
  const featuredProjectKey = "Nexus";
  const featuredProject = projects.find(
    (project) => project.key === featuredProjectKey
  );
  const filteredProjects = projects.filter(
    (project) => project.key !== featuredProjectKey
  );
  
  return (
    <SectionWrapper id="projects" data-testid="projects-section" aria-label="Projects section" variant="secondary"
    >
      <div className="container mx-auto px-4">
        <SectionHeader title={"Projects"}/>
        
        {isLoading && <LoadingComponent message="Loading projects..."/>}
        
        {error && <ErrorComponent message={error}/>}
        
        {featuredProject && (
          <div className="max-w-6xl mx-auto mb-20">
            <ProjectCard
              image={featuredProject.image}
              title={featuredProject.title}
              description={featuredProject.description}
              technologies={featuredProject.technologies}
              github={featuredProject.github}
              website={featuredProject.website}
            />
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.key}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              website={project.website}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
