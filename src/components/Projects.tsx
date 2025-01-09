import React from 'react'
import { ProjectList } from "@/components/ProjectList";
import { FeaturedProject } from "@/components/FeaturedProject";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";


const Projects: React.FC = () => {
  const featuredProject = {
    title: "Nexus - Task Dashboard",
    description: "Nexus is a web platform for task management that evolves from a personal system to a complete agile management tool. Focused on simplicity and efficiency, it allows users and small teams to manage their activities through intuitive Kanban boards..",
    image: "https://via.placeholder.com/600x400?text=Coming+Soon",
    technologies: [
      {icon: SiReact, name: 'React'},
      {icon: SiNextdotjs, name: 'Next.js'},
      {icon: SiTypescript, name: 'TypeScript'},
      {icon: SiTailwindcss, name: 'Tailwind'},
      {icon: SiShadcnui, name: 'Shadcn/ui'},
      {icon: SiReactquery, name: "React Query"},
      {icon: SiNodedotjs, name: "Node.js"}
    ],
    github: "https://github.com/patriciasegantine/dashboard-analytics-frontend.git",
    website: "https://github.com/patriciasegantine/dashboard-analytics-frontend.git"
  }
  
  return (
    <section id="projects"
             className="py-20 bg-zinc-50 dark:bg-zinc-900/95 transition-colors duration-custom">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-primary-dark dark:text-zinc-50 text-center mb-16 mt-8">
          Projects
        </h2>
        
        <div className="max-w-6xl mx-auto mb-20">
          <div
            className="group relative rounded-xl overflow-hidden bg-white dark:bg-zinc-800/50 shadow-sm hover:shadow-md transition-all duration-custom">
            <div className="aspect-video overflow-hidden relative">
              {featuredProject.image &&
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              }
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-medium text-primary-dark dark:text-zinc-50 mb-4">
                {featuredProject.title}
              </h3>
              <p className="text-secondary dark:text-zinc-300 mb-6">
                {featuredProject.description}
              </p>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  )
}

export default Projects
