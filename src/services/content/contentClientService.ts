import { Project } from "@/types/project";

const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch content from ${url}.`);
  }

  return response.json() as Promise<T>;
};

export const contentClientService = {
  getProjectsContent: () => fetchJson<Project[]>("/api/projects"),
};
