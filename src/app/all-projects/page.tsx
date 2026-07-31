import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AllProjects from "@/app/projects/AllProjects";

export const metadata: Metadata = {
  title: "Projects | Patricia Segantine",
  description: "Selected product work and frontend engineering projects by Patricia Segantine.",
};

export default function AllProjectsPage() {
  return (
    <div className="bg-canvas py-12 transition-colors-custom md:py-20">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-7xl border-b border-line pb-10 lg:mb-16">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-control text-sm text-secondary transition-colors hover:text-accent-strong focus-ring"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to selected work
          </Link>

          <p className="eyebrow mt-10 flex items-center gap-3">
            <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
            Project archive
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.055em] text-primary md:text-7xl">
            All projects
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
            A broader collection of product work, technical explorations, and reusable tools.
          </p>
        </div>

        <AllProjects />
      </div>
    </div>
  );
}
