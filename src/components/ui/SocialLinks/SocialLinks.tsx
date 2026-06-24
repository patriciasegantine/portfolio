'use client';

import React from 'react';
import { FaGithub, FaLink, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from "@/data/socialLinks";

type SocialLinksProps = {
  showLabel?: boolean;
};

const SocialLinks: React.FC<SocialLinksProps> = ({showLabel = false}) => {
  const icons: Record<string, React.ElementType> = {
    FaGithub,
    FaLinkedin,
    default: FaLink,
  };
  
  return (
    <div className="flex flex-wrap gap-3" data-testid="social-links">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-control border border-line bg-transparent px-3 py-2 text-sm text-secondary transition-all duration-300 hover:border-accent hover:bg-accent-soft hover:text-accent-strong focus-ring"
          aria-label={`Visit ${social.name} profile`}
        >
          {React.createElement(icons[social.icon] || icons.default, {className: "h-4 w-4 transition-transform duration-300 group-hover:-rotate-6"})}
          {showLabel && <span>{social.name}</span>}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
