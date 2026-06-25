import { notFound } from "next/navigation";
import type { Project } from "@/types/project";
import ProjectOverviewSection from "./components/ProjectOverviewSection";
import ProjectDetailsSection from "./components/ProjectDetailsSection";
import { getProjectsContent } from "./projectsServerContent";
import ProjectDetailsHero from "@/app/projects/[slug]/components/ProjectDetailsHero";

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
    <div className="bg-canvas transition-colors-custom">
      <div className="container mx-auto px-5 py-8 sm:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <ProjectDetailsHero
            title={project.title}
            category={project.category}
            description={project.description}
            status={project.status}
            image={project.image}
            github={project.links.github}
            liveDemo={project.links.liveDemo}
          />

          <ProjectOverviewSection caseStudy={project.caseStudy} />

          <ProjectDetailsSection caseStudy={project.caseStudy} />
        </div>
      </div>
    </div>
  );
}
