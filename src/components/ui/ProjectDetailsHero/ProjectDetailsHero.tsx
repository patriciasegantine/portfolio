'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ImageIcon } from "lucide-react";
import { ProjectStatus } from "@/types/project";
import { getProjectStackIcon } from "@/data/projectStackIcons";

interface ProjectDetailsHeroProps {
  title: string;
  description: string;
  status?: ProjectStatus;
  image?: string | null;
  stackPreview: string[];
}

const ImagePlaceholder = () => (
  <div className="relative w-full h-full" data-testid="project-details-image-placeholder">
    <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700" />
    <div className="absolute inset-0 flex items-center justify-center">
      <ImageIcon className="w-10 h-10 text-zinc-400 dark:text-zinc-500 opacity-50" />
    </div>
  </div>
);

const ProjectDetailsHero = ({ title, description, status, image, stackPreview }: ProjectDetailsHeroProps) => {
  const [showImage, setShowImage] = useState(Boolean(image));

  useEffect(() => {
    setShowImage(Boolean(image));
  }, [image]);

  return (
    <header className="space-y-6">
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-primary focus-ring"
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        <span className="underline-offset-4 group-hover:underline">Back to Projects</span>
      </Link>

      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-4xl font-semibold text-primary">{title}</h1>
          {status && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-200 text-zinc-800 dark:bg-zinc-700/50 dark:text-zinc-300">
              {status}
            </span>
          )}
        </div>
        <p className="text-lg text-secondary max-w-3xl">{description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 pb-2">
        {stackPreview.map((item) => {
          const Icon = getProjectStackIcon(item);
          
          return (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full bg-zinc-200/70 border border-zinc-300 dark:border-zinc-700/50 text-zinc-800 dark:bg-zinc-700/50 dark:text-zinc-300"
            >
              {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
              <p>{item}</p>
            </span>
          );
        })}
      </div>

      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700">
        {showImage && image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-cover"
            onError={() => setShowImage(false)}
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>

      
    </header>
  );
};

export default ProjectDetailsHero;
