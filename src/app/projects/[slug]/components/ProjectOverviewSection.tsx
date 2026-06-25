import type { ProjectCaseStudy } from "@/types/project";
import { hasItems, hasText } from "../utils/caseStudyHelpers";

interface ProjectOverviewSectionProps {
  caseStudy: ProjectCaseStudy;
}

const ProjectOverviewSection = ({ caseStudy }: ProjectOverviewSectionProps) => {
  const hasOverview = hasText(caseStudy.projectOverview);
  const hasPurpose = hasText(caseStudy.problemPurpose);
  const hasStack = hasItems(caseStudy.techStack);

  if (!hasOverview && !hasPurpose && !hasStack) {
    return null;
  }

  return (
    <section className="mt-20 border-t border-line pt-12 md:mt-24 md:pt-16">
      <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16 xl:gap-24">
        <div>
          <p className="eyebrow">01 · Context</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.045em] text-primary md:text-5xl">
            From idea to product.
          </h2>
        </div>

        <div>
          {hasOverview && (
            <p className="text-xl leading-relaxed text-primary md:text-2xl">
              {caseStudy.projectOverview}
            </p>
          )}

          {hasPurpose && (
            <div className="mt-10 border-t border-line pt-7">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">The challenge</h3>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-secondary md:text-lg">
                {caseStudy.problemPurpose}
              </p>
            </div>
          )}

          {hasStack && (
            <div className="mt-10 border-t border-line pt-7">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-subtle">Technical foundation</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {caseStudy.techStack.map((item) => (
                  <span key={item} className="rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-medium text-secondary">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverviewSection;
