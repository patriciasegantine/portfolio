'use client'

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ImageIcon, Loader2 } from "lucide-react";
import { ProjectStatus } from "@/types/project";
import { getProjectStackIcon } from "@/data/projectStackIcons";

interface ProjectCardProps {
  slug: string;
  image?: string | null;
  title: string;
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
                                                   slug,
                                                   image,
                                                   title,
                                                   description,
                                                   stackPreview,
                                                 status,
                                                 github,
                                                 liveDemo
                                                 }) => {
  const [showImage, setShowImage] = React.useState(Boolean(image));
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
    <div
      data-testid="project-card"
      className="group relative min-w-0 h-full rounded-xl overflow-hidden transition-colors-custom bg-white dark:bg-zinc-800/50 shadow-md hover:shadow-lg border border-gray-200 dark:border-zinc-700 flex flex-col"
    >
      <div className="aspect-video overflow-hidden relative">
        {showImage && image
          ? <Image
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 32rem, (min-width: 768px) 48vw, 100vw"
            onError={() => setShowImage(false)}
          />
          : <ImagePlaceholder />}
      </div>

      <div className="flex flex-col flex-grow p-8">
        <div className="flex-grow">
          <div className="flex flex-col items-start gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <h3 className="text-2xl font-medium text-primary break-words">
              {title}
            </h3>
            {status && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-700/50 dark:text-zinc-300 whitespace-nowrap">
                {status}
              </span>
            )}
          </div>
          <p className="text-secondary dark:text-secondary mb-6 break-words">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {stackPreview.map((item) => {
              const Icon = getProjectStackIcon(item);

              if (!Icon) {
                return (
                  <span
                    key={item}
                    className="text-xs font-medium px-2 py-1 rounded-md bg-zinc-100 text-zinc-700 dark:bg-zinc-700/50 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                );
              }

              return (
                <span
                  key={item}
                  title={item}
                  className="text-secondary dark:text-secondary transition-colors hover:text-primary"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">{item}</span>
                </span>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap">
            <Link
              href={detailsHref}
              onClick={handleDetailsClick}
              aria-busy={isNavigatingToDetails}
              aria-label={
                isNavigatingToDetails
                  ? `Opening details for ${title}`
                  : `View details for ${title}`
              }
              className="flex w-full justify-center items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-white
                       hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-800 dark:hover:bg-zinc-200
                       focus-ring
                       transition-colors hover:-translate-y-0.5 active:scale-[0.99] lg:w-auto"
              style={{opacity: isNavigatingToDetails ? 0.85 : 1}}
            >
              {isNavigatingToDetails && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>{isNavigatingToDetails ? 'Opening...' : 'View Details'}</span>
            </Link>

            <div className="grid w-full grid-cols-2 gap-3 lg:flex lg:w-auto lg:flex-wrap">
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                       text-secondary dark:text-secondary hover:bg-zinc-200 dark:hover:bg-zinc-700/80
                       transition-colors lg:w-auto focus-ring"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                       text-secondary dark:text-secondary hover:bg-zinc-200 dark:hover:bg-zinc-700/80
                       transition-colors lg:w-auto focus-ring"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
