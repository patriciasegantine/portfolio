import type { Project } from "@/types/project";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll/RevealOnScroll";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => (
  <div className="grid gap-10 lg:gap-14">
    {projects.map((project, index) => (
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
);

export default ProjectGrid;
