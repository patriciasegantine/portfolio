import { SiEslint, SiFramer, SiJest, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"; // Ícones específicos para NextJS, TypeScript e TailwindCSS
import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const technologies = [
    {name: "React", icon: SiReact},
    {name: "Next.js", icon: SiNextdotjs},
    {name: "TypeScript", icon: SiTypescript},
    {name: "TailwindCSS", icon: SiTailwindcss},
    {name: "Framer Motion", icon: SiFramer},
    {name: "JavaScript/ESLint", icon: SiEslint},
    {name: "Jest", icon: SiJest}
  ];
  
  return (
    <footer
      className="py-8 bg-white dark:bg-zinc-800 border-t border-zinc-100 dark:border-zinc-700/50 transition-colors-custom">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} title={tech.name}>
                {React.createElement(tech.icon as React.ComponentType<{ className: string }>, {
                  className: "w-6 h-6 text-secondary dark:text-zinc-300",
                })}
              </div>
            ))}
          </div>
          
          <div className="my-6 border-t border-zinc-300 dark:border-zinc-600 w-full"></div>
          
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-secondary dark:text-zinc-400">
            <span>© {currentYear} All rights reserved</span>
            <span className="hidden md:inline">•</span>
            <span> Developed with ❤️ by <strong>Patricia Segantine</strong></span>
            <span className="hidden md:inline">•</span>
            
            <a
              href="https://github.com/patriciasegantine/portfolio"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              title="GitHub Repository"
            >
              <FaGithub className="w-5 h-5"/>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
