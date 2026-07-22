import { SiEslint, SiFramer, SiJest, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
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
      className="border-t border-line bg-canvas py-8 transition-colors-custom">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} title={tech.name}>
                {React.createElement(tech.icon as React.ComponentType<{ className: string }>, {
                  className: "h-5 w-5 text-ink-subtle transition-colors duration-300 hover:text-accent-strong",
                })}
              </div>
            ))}
          </div>
          
          <div className="my-6 w-full border-t border-line"></div>
          
          <div
            className="flex flex-col items-center justify-center gap-2 text-sm text-secondary md:flex-row">
            <span>© {currentYear} All rights reserved</span>
            <span className="hidden md:inline">•</span>
            <span>Designed &amp; built by <strong>Patricia Segantine</strong></span>
            <span className="hidden md:inline">•</span>
            
            <a
              href="https://github.com/patriciasegantine/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-secondary transition-colors hover:text-accent-strong focus-ring"
              title="GitHub Repository"
            >
              <FaGithub className="h-4 w-4"/>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
