'use client';

import React, { useEffect, useState } from 'react';
import { FaExclamationCircle, FaGithub, FaLink, FaLinkedin, FaSpinner } from 'react-icons/fa';

type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

type SocialLinksProps = {
  showLabel?: boolean;
};

const SocialLinks: React.FC<SocialLinksProps> = ({showLabel = false}) => {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const icons: Record<string, React.ElementType> = {
    FaGithub,
    FaLinkedin,
    default: FaLink,
  };
  
  const fetchSocialLinks: () => Promise<void> = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/social-links');
      if (!response.ok) {
        throw new Error('Failed to fetch social links.');
      }
      const data: SocialLink[] = await response.json();
      setSocialLinks(data);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchSocialLinks();
  }, []);
  
  if (isLoading) {
    return (
      <div className="loading flex justify-center items-center gap-2" data-testid="loading">
        <FaSpinner className="icon w-6 h-6 animate-spin text-zinc-700 dark:text-zinc-200"/>
        <span className="text-zinc-700 dark:text-zinc-200">Loading social links...</span>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="error flex justify-center items-center gap-2 text-center" data-testid="error">
        <FaExclamationCircle className="icon w-6 h-6 text-red-600 dark:text-red-400"/>
        <span className="text-red-600 dark:text-red-400">{error}</span>
      </div>
    );
  }
  
  return (
    <div className="flex gap-4" data-testid="social-links">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors text-secondary bg-zinc-100 dark:bg-zinc-700/50 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80"
          aria-label={`Visit ${social.name} profile`}
        >
          {React.createElement(icons[social.icon] || icons.default, {className: "w-5 h-5 dark:text-zinc-300"})}
          {showLabel && <span>{social.name}</span>}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
