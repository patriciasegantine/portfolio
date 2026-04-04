import { CONTENT_ENDPOINTS } from "@/config/content";
import { fetchExternalContent } from "@/services/content/contentServerService";
import type { Project } from "@/types/project";

export const getProjectsContent = async () =>
  fetchExternalContent<Project[]>({
    url: CONTENT_ENDPOINTS.projects
  });
