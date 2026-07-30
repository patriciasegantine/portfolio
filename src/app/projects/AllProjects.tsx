'use client'

import ErrorComponent from "@/components/ui/ErrorComponent/ErrorComponent";
import LoadingComponent from "@/components/ui/LoadingComponent/LoadingComponent";
import ProjectGrid from "@/components/ui/ProjectGrid/ProjectGrid";
import { contentClientService } from "@/services/content/contentClientService";
import { useRemoteContent } from "@/hook/useRemoteContent";
import type { Project } from "@/types/project";

const AllProjects = () => {
  const { data, isLoading, error } = useRemoteContent<Project[]>(
    contentClientService.getProjectsContent
  );

  return (
    <div className="mx-auto max-w-7xl">
      {isLoading && <LoadingComponent message="Loading projects..." />}
      {error && <ErrorComponent message={error} />}
      {data && <ProjectGrid projects={data} />}
    </div>
  );
};

export default AllProjects;
