import type { ProjectCaseStudy } from "@/types/project";
import { hasItems, hasText } from "../utils/caseStudyHelpers";
import ProjectItem from "./ProjectItem";

interface ProjectDetailsSectionProps {
  caseStudy: ProjectCaseStudy;
}

const ProjectDetailsSection = ({ caseStudy }: ProjectDetailsSectionProps) => {
  const hasProjectDetails =
    hasText(caseStudy.problemPurpose) ||
    hasItems(caseStudy.keyFeatures) ||
    hasItems(caseStudy.challengesTradeoffs) ||
    hasItems(caseStudy.nextSteps);

  if (!hasProjectDetails) {
    return null;
  }

  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 px-6">
      {hasText(caseStudy.problemPurpose) && (
        <ProjectItem
          title="Problem / Purpose"
          text={caseStudy.problemPurpose}
        />
      )}
      {hasItems(caseStudy.keyFeatures) && (
        <ProjectItem
          title="Key Features"
          items={caseStudy.keyFeatures}
        />
      )}
      {hasItems(caseStudy.challengesTradeoffs) && (
        <ProjectItem
          title="Challenges / Trade-offs"
          items={caseStudy.challengesTradeoffs}
        />
      )}
      {hasItems(caseStudy.nextSteps) && (
        <ProjectItem
          title="Next Steps / Improvements"
          items={caseStudy.nextSteps}
        />
      )}
    </section>
  );
};

export default ProjectDetailsSection;
