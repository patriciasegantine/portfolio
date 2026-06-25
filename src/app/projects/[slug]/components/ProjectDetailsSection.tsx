import type { ProjectCaseStudy } from "@/types/project";
import { hasItems } from "../utils/caseStudyHelpers";
import ProjectItem from "./ProjectItem";

interface ProjectDetailsSectionProps {
  caseStudy: ProjectCaseStudy;
}

const ProjectDetailsSection = ({ caseStudy }: ProjectDetailsSectionProps) => {
  const hasProjectDetails =
    hasItems(caseStudy.myFocus) ||
    hasItems(caseStudy.whyThisStack) ||
    hasItems(caseStudy.keyFeatures) ||
    hasItems(caseStudy.challengesTradeoffs) ||
    hasItems(caseStudy.whatILearned) ||
    hasItems(caseStudy.nextSteps);

  if (!hasProjectDetails) {
    return null;
  }

  return (
    <div className="mt-8 pb-16 md:pb-24">
      {hasItems(caseStudy.myFocus) && (
        <ProjectItem
          number="02 · Contribution"
          title="My focus"
          items={caseStudy.myFocus}
          columns
        />
      )}
      {hasItems(caseStudy.whyThisStack) && (
        <ProjectItem
          number="03 · Decisions"
          title="Why this stack"
          items={caseStudy.whyThisStack}
        />
      )}
      {hasItems(caseStudy.keyFeatures) && (
        <ProjectItem
          number="04 · Product"
          title="What shipped"
          items={caseStudy.keyFeatures}
          columns
        />
      )}
      {hasItems(caseStudy.challengesTradeoffs) && (
        <ProjectItem
          number="05 · Trade-offs"
          title="The hard choices"
          items={caseStudy.challengesTradeoffs}
        />
      )}
      {hasItems(caseStudy.whatILearned) && (
        <ProjectItem
          number="06 · Reflection"
          title="What I Learned"
          items={caseStudy.whatILearned}
        />
      )}
      {hasItems(caseStudy.nextSteps) && (
        <ProjectItem
          number="07 · Next"
          title="Where it goes next"
          items={caseStudy.nextSteps}
          columns
        />
      )}
    </div>
  );
};

export default ProjectDetailsSection;
