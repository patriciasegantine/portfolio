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
    <div className="flex gap-4" data-testid="social-links">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors text-secondary bg-zinc-100 border border-zinc-200 dark:border-zinc-700/50 dark:bg-zinc-700/50 hover:bg-zinc-200 dark:hover:bg-zinc-700/80"
          aria-label={`Visit ${social.name} profile`}
        >
          {React.createElement(icons[social.icon] || icons.default, {className: "w-5 h-5"})}
          {showLabel && <span>{social.name}</span>}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
