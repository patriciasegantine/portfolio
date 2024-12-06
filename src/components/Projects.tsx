import React from 'react'
import { FaExternalLinkAlt, FaGithub, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { ImageIcon } from 'lucide-react'

const Projects: React.FC = () => {
  const featuredProject = {
    title: "Featured Project Name",
    description: "A comprehensive web application that showcases modern development practices and elegant user experiences. Built with performance and scalability in mind.",
    image: "",
    technologies: [
      {icon: FaReact, name: 'React'},
      {icon: SiNextdotjs, name: 'Next.js'},
      {icon: SiTypescript, name: 'TypeScript'},
      {icon: SiTailwindcss, name: 'Tailwind'},
    ],
    github: "https://github.com/username/project",
    website: "https://project-url.com"
  }
  
  const projects = [
    {
      title: "Project One",
      description: "Clean and modern e-commerce platform with seamless user experience and robust backend integration.",
      image: "",
      technologies: [
        {icon: FaReact, name: 'React'},
        {icon: SiStyledcomponents, name: 'Styled Components'},
      ],
      github: "https://github.com/username/project1",
      website: "https://project1-url.com"
    },
    {
      title: "Project Two",
      description: "Real-time dashboard application with dynamic data visualization and interactive features.",
      image: "",
      technologies: [
        {icon: SiNextdotjs, name: 'Next.js'},
        {icon: SiTailwindcss, name: 'Tailwind'},
      ],
      github: "https://github.com/username/project2",
      website: "https://project2-url.com"
    },
  ]
  
  return (
    <section id="projects"
             className="py-20 bg-zinc-50 dark:bg-zinc-900/95 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-primary-dark dark:text-zinc-50 text-center mb-16 mt-8">
          Projects
        </h2>
        
        <div className="max-w-6xl mx-auto mb-20">
          <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-zinc-800/50
                         shadow-sm hover:shadow-md transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              {featuredProject.image ? (
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <ImagePlaceholder/>
              )}
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-medium text-primary-dark dark:text-zinc-50 mb-4">
                {featuredProject.title}
              </h3>
              <p className="text-secondary dark:text-zinc-300 mb-6">
                {featuredProject.description}
              </p>
              
              {/* Technologies */}
              <div className="flex items-center gap-4 mb-6">
                {featuredProject.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <tech.icon className="w-5 h-5 text-secondary dark:text-zinc-300"/>
                    <span className="text-sm text-secondary dark:text-zinc-300">{tech.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={featuredProject.github}
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
                  href={featuredProject.website}
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
        </div>
        
        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-white dark:bg-zinc-800/50
                         shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <ImagePlaceholder/>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-primary-dark dark:text-zinc-50 mb-3">
                  {project.title}
                </h3>
                <p className="text-secondary dark:text-zinc-300 mb-4 text-sm">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex items-center gap-3 mb-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <tech.icon className="w-4 h-4 text-secondary dark:text-zinc-300"/>
                      <span className="text-xs text-secondary dark:text-zinc-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                             text-secondary dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80
                             transition-colors text-sm"
                  >
                    <FaGithub className="w-4 h-4"/>
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                             text-secondary dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80
                             transition-colors text-sm"
                  >
                    <FaExternalLinkAlt className="w-3 h-3"/>
                    <span>Visit Site</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ImagePlaceholder = ({className = ""}: { className?: string }) => (
  <div className={`relative group-hover:opacity-90 transition-opacity ${className}`}>
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
    <div className="pt-[56.25%]"/>
  </div>
)

export default Projects
