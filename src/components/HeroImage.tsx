import React from 'react'
import Image from 'next/image'

const HeroImage: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80" data-testid="hero-image">
      <div
        className="absolute inset-0 bg-zinc-100/50 dark:bg-zinc-700/30 rounded-full -rotate-6 transform transition-all duration-custom group-hover:rotate-6"/>
      
      <div
        className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-zinc-200/60 via-zinc-300/40 to-transparent dark:from-zinc-600/40 dark:via-zinc-700/20 dark:to-transparent">
        <div className="w-full h-full rounded-full bg-white dark:bg-zinc-800 p-[2px]">
          <Image
            src="https://github.com/patriciasegantine.png"
            alt="Profile"
            fill
            className="rounded-full ring-1 ring-zinc-100 dark:ring-zinc-700 "
          />
        </div>
      </div>
      
      <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-zinc-200/80 dark:bg-zinc-600/50"/>
      <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-zinc-100/80 dark:bg-zinc-700/50"/>
    </div>
  )
}

export default HeroImage
