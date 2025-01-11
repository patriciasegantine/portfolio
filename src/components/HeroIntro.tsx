import React from 'react'

const HeroIntro: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-secondary dark:text-zinc-400">
        <span className="w-6 h-[2px] bg-zinc-300 dark:bg-zinc-600"/>
        <span>Hi there, I&apos;m</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold
                   text-primary-dark dark:text-zinc-50">
        Patricia Segantine
      </h1>
      
      <p className="text-xl md:text-2xl lg:text-3xl text-secondary dark:text-zinc-300 h-[40px] lg:h-[48px]">
        Frontend Developer
      </p>
      
      <p className="text-lg text-secondary dark:text-zinc-300 leading-relaxed max-w-2xl">
        Crafting sophisticated digital solutions while transforming complexity into seamless experiences.
      </p>
    </>
  )
}

export default HeroIntro
