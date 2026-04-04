import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailsHero from "@/components/ui/ProjectDetailsHero/ProjectDetailsHero";
import type { Project } from "@/types/project";
import { CONTENT_ENDPOINTS } from "@/config/content";
import { fetchExternalContent } from "@/services/content/contentServerService";
import ProjectLinks from "@/components/ui/ProjectLinks/ProjectLinks";

interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const getProjectsContent = async () =>
  fetchExternalContent<Project[]>({
    url: CONTENT_ENDPOINTS.projects
  });

export async function generateStaticParams() {
  try {
    const projects = await getProjectsContent();

    return projects.map((project) => ({
      slug: project.slug
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: ProjectDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const projects = await getProjectsContent();
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
      return {
        title: "Project Not Found"
      };
    }

    return {
      title: `${project.title} | Projects`,
      description: project.description
    };
  } catch {
    return {
      title: "Project Not Found"
    };
  }
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
    <div className="bg-bg-light dark:bg-zinc-900/95 transition-colors-custom">
      <div className="container mx-auto px-4 py-28">
        <div className="max-w-5xl mx-auto space-y-8">
          <ProjectDetailsHero
            title={project.title}
            description={project.description}
            status={project.status}
            image={project.image}
          />
          
          <ProjectLinks
            github={project.links.github}
            liveDemo={project.links.liveDemo}
          />
        </div>
      </div>
    </div>
  );
}
