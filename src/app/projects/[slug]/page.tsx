import { notFound } from "next/navigation";
import type { Project } from "@/types/project";
import ProjectOverviewSection from "./components/ProjectOverviewSection";
import ProjectDetailsSection from "./components/ProjectDetailsSection";
import { getProjectsContent } from "./projectsServerContent";
import ProjectDetailsHero from "@/components/ui/ProjectDetailsHero/ProjectDetailsHero";
import ProjectLinks from "@/components/ui/ProjectLinks/ProjectLinks";

export { generateMetadata, generateStaticParams } from "./page.config";

interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  let projects: Project[];

  try {
    projects = await getProjectsContent();
  } catch {
    notFound();
  }

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900/95 transition-colors-custom">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <ProjectDetailsHero
            title={project.title}
            description={project.description}
            status={project.status}
            image={project.image}
            stackPreview={project.stackPreview}
          />

          <ProjectOverviewSection caseStudy={project.caseStudy} />

          <ProjectDetailsSection caseStudy={project.caseStudy} />

          <ProjectLinks
            github={project.links.github}
            liveDemo={project.links.liveDemo}
          />
        </div>
      </div>
    </div>
  );
}
