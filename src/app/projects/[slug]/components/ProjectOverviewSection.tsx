import type { ProjectCaseStudy } from "@/types/project";
import { hasText } from "./caseStudyHelpers";

interface ProjectOverviewSectionProps {
  caseStudy: ProjectCaseStudy;
}

const ProjectOverviewSection = ({ caseStudy }: ProjectOverviewSectionProps) => {
  if (!hasText(caseStudy.projectOverview)) {
    return null;
  }

  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 p-6">
      <h2 className="text-xl font-medium text-primary mb-3">Project Overview</h2>
      <p className="text-secondary dark:text-secondary leading-relaxed">{caseStudy.projectOverview}</p>
    </section>
  );
};

export default ProjectOverviewSection;
