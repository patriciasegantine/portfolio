import React from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
  image: string
  title: string
  description: string
  technologies: { icon: React.ComponentType, name: string }[]
  github: string
  website: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, technologies, github, website }) => {
  
  return (
    <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-zinc-800/50 shadow-sm hover:shadow-md transition-all duration-custom">
      <div className="aspect-video overflow-hidden relative">
        {image &&
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
          />}
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-medium text-primary-dark dark:text-zinc-50 mb-4">
          {title}
        </h3>
        <p className="text-secondary dark:text-zinc-300 mb-6">
          {description}
        </p>
        
        <div className="flex items-center gap-4 mb-6">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-1">
              {React.createElement(tech.icon as React.ComponentType<{ className: string }>, { className: "w-5 h-5 text-secondary dark:text-zinc-300" })}
              <span className="text-sm text-secondary dark:text-zinc-300">{tech.name}</span>
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
            <FaGithub className="w-5 h-5" />
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
            <FaExternalLinkAlt className="w-4 h-4" />
            <span>Visit Site</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
