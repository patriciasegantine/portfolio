'use client'

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const ToggleThemeButton: React.FC = () => {
  const {setTheme, resolvedTheme, systemTheme} = useTheme();
  
  const currentTheme = resolvedTheme === 'system' ? systemTheme : resolvedTheme;
  
  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };
  
  const Icon = currentTheme === 'dark' ? Sun : Moon;
  
  return (
    <button
      data-testid="toggle-theme-button"
      onClick={toggleTheme}
      className="p-2 text-secondary hover:text-primary transition-colors duration-custom dark:text-zinc-400 dark:hover:text-zinc-100"
      aria-label={`Activate ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Icon className="w-5 h-5" data-testid={currentTheme === 'dark' ? 'sun-icon' : 'moon-icon'}/>
    </button>
  );
};

export default ToggleThemeButton;
