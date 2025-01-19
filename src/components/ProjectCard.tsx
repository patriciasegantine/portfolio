import Image from 'next/image';
import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaGlobe } from 'react-icons/fa';
import { ImageIcon } from "lucide-react";
import {
  SiExpo,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

interface Technology {
  icon: string;
  name: string;
}

interface ProjectCardProps {
  image?: string | null
  title: string;
  description: string;
  technologies: Technology[];
  github: string;
  website: string;
}

const ImagePlaceholder = ({className = ""}: { className?: string }) => (
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
      <ImageIcon className="w-10 h-10 text-zinc-400 dark:text-zinc-500 opacity-50"/>
    </div>
  </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({image, title, description, technologies, github, website}) => {
  
  const icons: Record<string, React.ElementType> = {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiShadcnui,
    SiReactquery,
    SiNodedotjs,
    SiStyledcomponents,
    SiExpo,
    default: FaGlobe,
  };
  
  return (
    <div data-testid="project-card"
         className="group relative rounded-xl overflow-hidden transition-colors-custom bg-white dark:bg-zinc-800/50 shadow-sm hover:shadow-md border border-gray-200 dark:border-zinc-700">
      <div className="aspect-video overflow-hidden relative">
        {image
          ? <Image
            className="transition-transform duration-500 group-hover:scale-105"
            src={image}
            alt={title}
            fill
          />
          : <ImagePlaceholder/>}
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-medium text-primary-dark dark:text-zinc-50 mb-4">
          {title}
        </h3>
        <p className="text-secondary dark:text-zinc-300 mb-6">
          {description}
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center gap-1">
              {React.createElement(icons[tech.icon] || icons.default, {
                className: "w-5 h-5 text-secondary dark:text-zinc-300",
              })}
              <span className="hidden lg:inline text-sm text-secondary dark:text-zinc-300">{tech.name}</span>
            </div>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                     text-secondary dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80
                     transition-colors"
          >
            <FaGithub className="w-5 h-5"/>
            <span>GitHub</span>
          </a>
          
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                     text-secondary dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80
                     transition-colors"
          >
            <FaExternalLinkAlt className="w-4 h-4"/>
            <span>Visit Site</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
