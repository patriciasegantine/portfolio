'use client'

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ImageIcon } from "lucide-react";
import { ProjectStatus } from "@/types/project";

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
    <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700">
      <div className="absolute inset-0 opacity-20 dark:opacity-30"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.1) 1px, transparent 0)`,
             backgroundSize: '20px 20px'
           }}
      />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <ImageIcon className="w-10 h-10 text-zinc-400 dark:text-zinc-500 opacity-50" />
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

  React.useEffect(() => {
    setShowImage(Boolean(image));
  }, [image]);

  return (
    <div
      data-testid="project-card"
      className="group relative rounded-xl overflow-hidden transition-colors-custom bg-white dark:bg-zinc-800/50 shadow-sm hover:shadow-md border border-gray-200 dark:border-zinc-700 flex flex-col"
    >
      <div className="aspect-video overflow-hidden relative">
        {showImage && image
          ? <Image
            className="transition-transform duration-500 group-hover:scale-105"
            src={image}
            alt={title}
            fill
            onError={() => setShowImage(false)}
          />
          : <ImagePlaceholder />}
      </div>

      <div className="flex flex-col flex-grow p-8">
        <div className="flex-grow">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h3 className="text-2xl font-medium text-primary-dark dark:text-zinc-50">
              {title}
            </h3>
            {status && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-700/50 dark:text-zinc-300">
                {status}
              </span>
            )}
          </div>
          <p className="text-secondary dark:text-zinc-300 mb-6">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {stackPreview.map((item) => (
              <span
                key={item}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-700/50 dark:text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/projects/${slug}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-white
                       hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200
                       transition-colors"
            >
              <span>View Details</span>
            </Link>

            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                       text-secondary dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80
                       transition-colors"
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
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                       text-secondary dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80
                       transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
