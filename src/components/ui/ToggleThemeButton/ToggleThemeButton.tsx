'use client'

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const ToggleThemeButton: React.FC = () => {
  const {setTheme, resolvedTheme} = useTheme();
  
  const currentTheme = resolvedTheme ?? 'light';
  
  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };
  
  const Icon = currentTheme === 'dark' ? Sun : Moon;
  
  return (
    <button
      data-testid="toggle-theme-button"
      onClick={toggleTheme}
      className="p-2 text-secondary hover:text-primary transition-colors duration-custom"
      aria-label={`Activate ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Icon className="w-5 h-5" data-testid={currentTheme === 'dark' ? 'sun-icon' : 'moon-icon'}/>
    </button>
  );
};

export default ToggleThemeButton;
