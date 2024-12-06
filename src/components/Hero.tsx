import React from 'react'

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen pt-16"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div
            className="absolute inset-0 bg-zinc-100 rounded-full -rotate-6 transform transition-transform group-hover:rotate-6"/>
          
          <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-zinc-200 to-white">
            <div className="w-full h-full rounded-full p-0.5 bg-white">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full shadow-[0_0_15px_rgba(0,0,0,0.05)]"
              />
            </div>
          </div>
          
          <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-zinc-200"/>
          <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-zinc-100"/>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-medium text-primary-dark mb-4">
            Hello, I'm <span className="text-secondary">Patricia Segantine</span>
          </h2>
          
          <p className="flex items-center justify-center md:justify-start gap-2">
            Desenvolvedor Front-end
          </p>
          
          <p className="text-lg text-secondary my-6 leading-relaxed max-w-2xl">
            Crafting sophisticated digital solutions while transforming complexity into seamless experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
