import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Image from 'next/image'

const Hero: React.FC = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/patriciasegantine",
      icon: FaLinkedin
    },
    {
      name: "GitHub",
      href: "https://github.com/patriciasegantine",
      icon: FaGithub
    }
  ]
  
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen pt-16 bg-white dark:bg-zinc-900/95 transition-colors duration-custom"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div
            className="absolute inset-0 bg-zinc-100/50 dark:bg-zinc-700/30 rounded-full -rotate-6 transform transition-all duration-custom group-hover:rotate-6"/>
          
          <div
            className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-zinc-200/60 via-zinc-300/40 to-transparent dark:from-zinc-600/40 dark:via-zinc-700/20 dark:to-transparent">
            <div className="w-full h-full rounded-full bg-white dark:bg-zinc-800 p-[2px]">
              <Image
                src="/assets/img/hero.jpg"
                alt="Profile"
                fill
                style={{objectFit: 'cover'}}
                className="rounded-full ring-1 ring-zinc-100 dark:ring-zinc-700"
              />
            </div>
          </div>
          
          <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-zinc-200/80 dark:bg-zinc-600/50"/>
          <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-zinc-100/80 dark:bg-zinc-700/50"/>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-2 text-secondary dark:text-zinc-400 mb-4">
            <span className="w-6 h-[2px] bg-zinc-300 dark:bg-zinc-600"/>
            <span>Hi there, I&apos;m</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold
                       text-primary-dark dark:text-zinc-50 mb-6">
            Patricia Segantine
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-secondary
                        dark:text-zinc-300 mb-4 h-[40px] lg:h-[48px]">
            Frontend Developer
          </p>
          
          <p className="text-lg text-secondary dark:text-zinc-300 my-6 leading-relaxed max-w-2xl">
            Crafting sophisticated digital solutions while transforming complexity into seamless experiences.
          </p>
          
          <div className="flex gap-4 mb-12 ">
            {socialLinks.map((link) => (
              <div key={link.name} className="flex gap-3">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                             text-secondary dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80
                             transition-colors text-sm duration-custom"
                >
                  {React.createElement(link.icon, {className: "w-4 h-4"})}
                  <span>{link.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
