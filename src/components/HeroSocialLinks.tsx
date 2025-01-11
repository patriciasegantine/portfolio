import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"

const HeroSocialLinks: React.FC = () => {
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
    <div className="flex flex-row gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                     text-secondary dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80
                     transition-colors text-sm duration-custom"
        >
          {React.createElement(link.icon, {className: "w-4 h-4"})}
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  )
}

export default HeroSocialLinks
