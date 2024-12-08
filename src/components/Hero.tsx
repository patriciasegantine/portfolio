import React from 'react'

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen pt-16 bg-white dark:bg-zinc-900/95 transition-colors"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div
            className="absolute inset-0 bg-zinc-100/50 dark:bg-zinc-700/30 rounded-full -rotate-6 transform transition-all group-hover:rotate-6"/>
          
          <div
            className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-zinc-200/60 via-zinc-300/40 to-transparent dark:from-zinc-600/40 dark:via-zinc-700/20 dark:to-transparent">
            <div className="w-full h-full rounded-full bg-white dark:bg-zinc-800 p-[2px]">
              <img
                src="/assets/img/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full ring-1 ring-zinc-100 dark:ring-zinc-700"
              />
            </div>
          </div>
          
          <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-zinc-200/80 dark:bg-zinc-600/50"/>
          <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-zinc-100/80 dark:bg-zinc-700/50"/>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-medium text-primary-dark dark:text-zinc-50 mb-4">
            Hi, I'm <span className="text-secondary dark:text-zinc-300">Patricia Segantine</span>
          </h2>
          
          <p className="flex items-center justify-center md:justify-start gap-2 text-secondary dark:text-zinc-300">
            Desenvolvedor Front-end
          </p>
          
          <p className="text-lg text-secondary dark:text-zinc-300 my-6 leading-relaxed max-w-2xl">
            Crafting sophisticated digital solutions while transforming complexity into seamless experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
