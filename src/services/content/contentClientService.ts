import type { AboutContent } from "@/types/about";
import type { HeroContent } from "@/types/hero";
import type { Project } from "@/types/project";

const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch content from ${url}.`);
  }

  return response.json() as Promise<T>;
};

export const contentClientService = {
  getAboutContent: () => fetchJson<AboutContent>("/api/about"),
  getHeroContent: () => fetchJson<HeroContent>("/api/hero"),
  getProjectsContent: () => fetchJson<Project[]>("/api/projects")
};
