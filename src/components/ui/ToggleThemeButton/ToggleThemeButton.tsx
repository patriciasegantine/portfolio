'use client'

import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const ToggleThemeButton: React.FC = () => {
  const {setTheme, resolvedTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const currentTheme = mounted ? (resolvedTheme ?? 'light') : 'light';
  
  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };
  
  const Icon = currentTheme === 'dark' ? Sun : Moon;
  
  return (
    <button
      data-testid="toggle-theme-button"
      onClick={toggleTheme}
      className="group rounded-lg p-2 text-secondary transition-all duration-300 hover:text-zinc-900 dark:hover:text-zinc-50 hover:scale-105 focus-ring"
      aria-label={`Activate ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Icon
        className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
        data-testid={currentTheme === 'dark' ? 'sun-icon' : 'moon-icon'}
      />
    </button>
  );
};

export default ToggleThemeButton;
