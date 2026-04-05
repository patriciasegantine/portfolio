import LoadingComponent from "@/components/ui/LoadingComponent/LoadingComponent";

export default function ProjectDetailsLoading() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900/95 transition-colors-custom">
      <div className="container mx-auto px-4 py-28">
        <div className="max-w-5xl mx-auto">
          <LoadingComponent
            message="Loading project details..."
            testId="project-details-loading"
          />
        </div>
      </div>
    </div>
  );
}
