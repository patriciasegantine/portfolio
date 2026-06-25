import LoadingComponent from "@/components/ui/LoadingComponent/LoadingComponent";

export default function ProjectDetailsLoading() {
  return (
    <div className="bg-canvas transition-colors-custom">
      <div className="container mx-auto px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <LoadingComponent
            message="Loading project details..."
            testId="project-details-loading"
          />
        </div>
      </div>
    </div>
  );
}
