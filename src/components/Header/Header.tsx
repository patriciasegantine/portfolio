'use client';

import React, { useState } from 'react';
import { Code, Menu } from 'lucide-react';
import ToggleTheme from '@/components/ToggleThemeButton/ToggleThemeButton';
import { useTheme } from 'next-themes';
import NavMenu from '../NavMenu/NavMenu';
import Link from 'next/link';
import MobileMenu from "@/components/MobileMenu/MobileMenu";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {resolvedTheme} = useTheme();
  
  return (
    <header
      className={`bg-white dark:bg-zinc-900 shadow-sm fixed w-full z-50 top-0 border-b border-zinc-100 dark:border-zinc-800 transition-colors-custom ${
        resolvedTheme === 'dark' ? 'dark' : ''
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="#home" className="flex items-center gap-2">
          
          <Code className="w-5 h-5 text-secondary dark:text-zinc-300"/>
          <h3 className="text-xl font-medium text-primary-dark dark:text-zinc-50">PS</h3>
        
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <NavMenu/>
          <ToggleTheme/>
        </div>
        
        <div className="flex items-center gap-4 md:hidden">
          <ToggleTheme/>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-secondary hover:text-primary transition-colors-custom dark:text-zinc-400 dark:hover:text-zinc-100"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6"/>
          </button>
        </div>
      </nav>
      
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
