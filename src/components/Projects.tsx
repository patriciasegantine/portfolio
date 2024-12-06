import React from 'react'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  demoLink?: string
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Projeto 1',
      description: 'Descrição detalhada do projeto',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      githubLink: 'https://github.com/seunome/projeto1',
      demoLink: 'https://projeto1.vercel.app'
    },
    {
      title: 'Projeto 2',
      description: 'Outro projeto incrível',
      technologies: ['Node.js', 'TypeScript', 'GraphQL'],
      githubLink: 'https://github.com/seunome/projeto2'
    }
  ]
  
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-dark">
          Meus Projetos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:text-primary"
                >
                  GitHub
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark hover:text-primary"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
