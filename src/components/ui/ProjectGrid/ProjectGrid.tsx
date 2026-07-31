import type { Project } from "@/types/project";
import CompactProjectCard from "@/components/ui/CompactProjectCard/CompactProjectCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll/RevealOnScroll";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => (
  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
    {projects.map((project, index) => (
      <RevealOnScroll key={project.slug} delay={index * 0.08} className="h-full">
        <CompactProjectCard {...project} />
      </RevealOnScroll>
    ))}
  </div>
);

export default ProjectGrid;
