import React from 'react';
import ProjectCard from "@/components/ProjectCard";
import { ProjectKey, projects } from "@/data/projects";

const Projects: React.FC = () => {
  const featuredProjectKey = ProjectKey.Nexus
  const featuredProject = projects?.find(project => project?.key === featuredProjectKey)
  const filteredProjects = projects?.filter(project => project?.key !== featuredProjectKey)
  
  return (
    <section id="projects" data-testid="projects-section" className="py-20 bg-zinc-50 dark:bg-zinc-900/95 transition-colors-custom">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-primary-dark dark:text-zinc-50 text-center mb-16 mt-8">
          Projects
        </h2>
        
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
              image={project?.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              website={project.website}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
