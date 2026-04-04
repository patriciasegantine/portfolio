import { Metadata } from "next";
import { getProjectsContent } from "./projectsServerContent";

interface ProjectDetailsPageConfigProps {
  params: Promise<{
    slug: string;
  }>;
}

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

export async function generateMetadata({ params }: ProjectDetailsPageConfigProps): Promise<Metadata> {
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
