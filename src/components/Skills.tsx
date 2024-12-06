import React from 'react'

const Skills: React.FC = () => {
  const skills = [
    'React', 'Next.js', 'TypeScript',
    'Node.js', 'Tailwind CSS', 'Git',
    'Docker', 'GraphQL', 'MongoDB'
  ]
  
  return (
    <section id="skills" className="py-16">
  <div className="container mx-auto">
  <h2 className="text-3xl font-bold text-center mb-8 text-dark">
    Habilidades
    </h2>
    <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
    {skills.map((skill, index) => (
        <div
          key={index}
      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
      >
      {skill}
      </div>
))}
  </div>
  </div>
  </section>
)
}

export default Skills
