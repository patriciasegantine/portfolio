'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ProjectStatus } from "@/types/project";

interface ProjectDetailsHeroProps {
  title: string;
  category: string;
  description: string;
  status?: ProjectStatus;
  image?: string | null;
  github?: string;
  liveDemo?: string;
}

const ImagePlaceholder = () => (
  <div className="relative w-full h-full" data-testid="project-details-image-placeholder">
    <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700" />
    <div className="absolute inset-0 flex items-center justify-center">
      <ImageIcon className="w-10 h-10 text-zinc-400 dark:text-zinc-500 opacity-50" />
    </div>
  </div>
);

const ProjectDetailsHero = ({ title, category, description, status, image, github, liveDemo }: ProjectDetailsHeroProps) => {
  const [showImage, setShowImage] = useState(Boolean(image));

  useEffect(() => {
    setShowImage(Boolean(image));
  }, [image]);

  return (
    <header>
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-2 rounded-control text-sm text-secondary transition-colors hover:text-accent-strong focus-ring"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        <span>Back to projects</span>
      </Link>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">Case study · {category}</span>
          {status && (
              <span className="rounded-full border border-line bg-surface px-2.5 py-1 text-[0.68rem] font-medium text-secondary">
              {status}
            </span>
          )}
        </div>
          <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.9] tracking-[-0.065em] text-primary sm:text-7xl md:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-secondary md:text-xl">{description}</p>
        </div>

        {(liveDemo || github) && (
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            {liveDemo && (
              <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="button-primary group whitespace-nowrap">
                View live project
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-control border border-line bg-surface px-5 py-2.5 font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent-strong focus-ring">
                <FaGithub className="h-4 w-4" />
                View source
              </a>
            )}
          </div>
        )}
      </div>

      <div className="mt-12 overflow-hidden rounded-panel border border-line bg-surface shadow-soft">
        {showImage && image ? (
          <div className="relative aspect-video w-full overflow-hidden bg-canvas">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(min-width: 1280px) 80rem, 100vw"
              className="object-cover object-center"
              onError={() => setShowImage(false)}
            />
          </div>
        ) : (
          <div className="aspect-video">
            <ImagePlaceholder />
          </div>
        )}
      </div>
    </header>
  );
};

export default ProjectDetailsHero;
