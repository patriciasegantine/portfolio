'use client'

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ArrowRight, ImageIcon, Loader2, Maximize2 } from "lucide-react";
import { ProjectStatus } from "@/types/project";
import { getProjectStackIcon } from "@/data/projectStackIcons";
import { PROJECT_STATUS_BADGE_STYLE, PROJECT_STATUS_DOT_STYLES } from "@/data/projectStatusStyles";
import ImageLightbox from "@/components/ui/ImageLightbox/ImageLightbox";

interface ProjectCardProps {
  imagePosition?: 'left' | 'right';
  slug: string;
  image?: string | null;
  title: string;
  category?: string;
  description: string;
  stackPreview: string[];
  status?: ProjectStatus;
  github?: string;
  liveDemo?: string;
}

const ImagePlaceholder = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-full h-full ${className}`} data-testid="image-placeholder">
    <div className="absolute inset-0 bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-800 dark:to-zinc-700">
      <div className="absolute inset-0 opacity-20 dark:opacity-30"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.1) 1px, transparent 0)`,
             backgroundSize: '20px 20px'
           }}
      />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <ImageIcon className="w-10 h-10 text-zinc-600 dark:text-zinc-500 opacity-50" />
    </div>
  </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                   imagePosition = 'left',
                                                   slug,
                                                   image,
                                                   title,
                                                   description,
                                                   stackPreview,
                                                   category,
                                                   status,
                                                   github,
                                                   liveDemo
                                                 }) => {
  const [showImage, setShowImage] = React.useState(Boolean(image));
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [isNavigatingToDetails, setIsNavigatingToDetails] = React.useState(false);
  const detailsHref = `/projects/${slug}`;

  React.useEffect(() => {
    setShowImage(Boolean(image));
  }, [image]);

  React.useEffect(() => {
    if (!isNavigatingToDetails) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsNavigatingToDetails(false);
    }, 2000);

    return () => window.clearTimeout(timeout);
  }, [isNavigatingToDetails]);

  const handleDetailsClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }
    setIsNavigatingToDetails(true);
  };

  return (
    <article
      data-testid="project-card"
      className="group relative grid min-w-0 overflow-visible rounded-panel border border-line bg-surface shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift lg:grid-cols-12"
    >
      <div className={`relative self-center lg:col-span-7 ${imagePosition === 'right' ? 'lg:order-2 lg:pr-6' : 'lg:pl-6'}`}>
        <div className="relative aspect-video w-full overflow-hidden rounded-t-[1.2rem] bg-canvas lg:rounded-none">
          {showImage && image ? (
            <button
              className="group/img relative h-full w-full cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
              aria-label={`Preview image for ${title}`}
            >
              <Image
                className="object-cover object-center"
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                onError={() => setShowImage(false)}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover/img:bg-ink/30">
                <Maximize2 className="h-7 w-7 text-white opacity-0 drop-shadow-md transition-opacity duration-300 group-hover/img:opacity-100" />
              </div>
            </button>
          ) : (
            <ImagePlaceholder />
          )}
        </div>

      </div>

      <div className={`flex flex-col p-6 sm:p-8 lg:col-span-5 lg:p-8 xl:p-10 ${imagePosition === 'right' ? 'lg:order-1' : ''}`}>
        <div className="flex flex-wrap items-center gap-3">
          {category && <span className="eyebrow text-[0.65rem]">{category}</span>}
          {category && status && <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />}
          {status && (
            <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[0.65rem] font-medium ${PROJECT_STATUS_BADGE_STYLE}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${PROJECT_STATUS_DOT_STYLES[status]}`} aria-hidden="true" />
              {status}
            </span>
          )}
        </div>

        <h3 className="mt-4 break-words font-display text-4xl font-semibold tracking-[-0.045em] text-primary">
          {title}
        </h3>

        <p className="mt-4 break-words text-base leading-relaxed text-secondary">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {stackPreview.map((item) => {
            const Icon = getProjectStackIcon(item);

            return (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-secondary"
              >
                {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                {item}
              </span>
            );
          })}
        </div>

        <div className="mt-auto pt-7">
          <Link
            href={detailsHref}
            onClick={handleDetailsClick}
            aria-busy={isNavigatingToDetails}
            aria-label={
              isNavigatingToDetails
                ? `Opening details for ${title}`
                : `View details for ${title}`
            }
            className="button-primary group/link w-full sm:w-auto"
            style={{opacity: isNavigatingToDetails ? 0.85 : 1}}
          >
            {isNavigatingToDetails && <Loader2 className="h-4 w-4 animate-spin" />}
            <span>{isNavigatingToDetails ? 'Opening...' : 'View case study'}</span>
            {!isNavigatingToDetails && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />}
          </Link>

          {(liveDemo || github) && (
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-4">
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-accent-strong focus-ring"
                >
                  <FaExternalLinkAlt className="h-3.5 w-3.5" />
                  <span>Live Demo</span>
                </a>
              )}

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-accent-strong focus-ring"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      {showImage && image && (
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

export default ProjectCard;
