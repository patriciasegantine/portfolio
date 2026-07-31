'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ImageIcon, Maximize2 } from "lucide-react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Project } from "@/types/project";
import { getProjectStackIcon } from "@/data/projectStackIcons";
import ProjectStatusBadge from "@/components/ui/ProjectStatusBadge/ProjectStatusBadge";
import ImageLightbox from "@/components/ui/ImageLightbox/ImageLightbox";

type CompactProjectCardProps = Pick<
  Project,
  "slug" | "image" | "title" | "category" | "description" | "stackPreview" | "status" | "links"
>;

const CompactProjectCard = ({
  slug,
  image,
  title,
  category,
  description,
  stackPreview,
  status,
  links,
}: CompactProjectCardProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-panel border border-line bg-surface shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-video overflow-hidden border-b border-line bg-canvas">
        {image ? (
          <button
            type="button"
            className="group/image relative h-full w-full cursor-zoom-in"
            onClick={() => setIsLightboxOpen(true)}
            aria-label={`Preview image for ${title}`}
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 100vw"
              className="object-cover object-center transition-transform duration-500 group-hover/image:scale-[1.02]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover/image:bg-ink/30">
              <Maximize2 className="h-6 w-6 text-white opacity-0 drop-shadow-md transition-opacity duration-300 group-hover/image:opacity-100" />
            </span>
          </button>
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-800 dark:to-zinc-700">
            <ImageIcon className="h-10 w-10 text-zinc-600 opacity-50 dark:text-zinc-500" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <span className="eyebrow text-[0.65rem]">{category}</span>
        <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />
        <ProjectStatusBadge status={status} />
      </div>

      <h2 className="mt-4 break-words font-display text-3xl font-semibold tracking-[-0.04em] text-primary">
        {title}
      </h2>
      <p className="mt-3 line-clamp-3 break-words text-base leading-relaxed text-secondary">{description}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {stackPreview.slice(0, 3).map((item) => {
          const Icon = getProjectStackIcon(item);

          return (
            <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-secondary">
              {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
              {item}
            </span>
          );
        })}
      </div>

      <div className="mt-auto pt-7">
        {(links.liveDemo || links.github) && (
          <div className="mb-5 flex flex-wrap gap-x-5 gap-y-3 border-b border-line pb-5">
            {links.liveDemo && (
              <a href={links.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-accent-strong focus-ring">
                <FaExternalLinkAlt className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-accent-strong focus-ring">
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        )}

        <Link href={`/projects/${slug}?from=all-projects`} className="group/link inline-flex items-center gap-2 rounded-control font-semibold text-primary transition-colors hover:text-accent-strong focus-ring">
          View case study
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
      </div>

      {image && (
        <ImageLightbox
          src={image}
          alt={title}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </article>
  );
};

export default CompactProjectCard;
