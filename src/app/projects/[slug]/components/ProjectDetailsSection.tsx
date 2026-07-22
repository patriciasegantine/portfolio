import type { ProjectCaseStudy } from "@/types/project";
import { hasItems } from "../utils/caseStudyHelpers";
import ProjectItem from "./ProjectItem";

interface ProjectDetailsSectionProps {
  caseStudy: ProjectCaseStudy;
}

const ProjectDetailsSection = ({ caseStudy }: ProjectDetailsSectionProps) => {
  const sections = [
    {
      label: "Decisions",
      title: "Why this stack",
      items: caseStudy.whyThisStack,
    },
    {
      label: "Product",
      title: "What shipped",
      items: caseStudy.keyFeatures,
      columns: true,
    },
    {
      label: "Trade-offs",
      title: "The hard choices",
      items: caseStudy.challengesTradeoffs,
    },
    {
      label: "Learnings",
      title: "What I learned",
      items: caseStudy.whatILearned,
    },
    {
      label: "Next",
      title: "Where it goes next",
      items: caseStudy.nextSteps,
      columns: true,
    },
  ].filter(({ items }) => hasItems(items));

  const hasProjectDetails = sections.length > 0;

  if (!hasProjectDetails) {
    return null;
  }

  return (
    <div className="mt-8 pb-16 md:pb-24">
      {sections.map(({ label, title, items, columns }, index) => (
        <ProjectItem
          key={label}
          number={`${String(index + 2).padStart(2, "0")} · ${label}`}
          title={title}
          items={items}
          columns={columns}
        />
      ))}
    </div>
  );
};

export default ProjectDetailsSection;
