'use client';

import React, { useState } from 'react';
import { Code, Menu } from 'lucide-react';
import ToggleThemeButton from '@/components/ui/ToggleThemeButton/ToggleThemeButton';
import NavMenu from '@/components/ui/NavMenu/NavMenu';
import Link from 'next/link';
import MobileMenu from "@/components/ui/MobileMenu/MobileMenu";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header
      className="bg-white dark:bg-zinc-900 shadow-sm sticky w-full z-50 top-0 border-b border-zinc-100 dark:border-zinc-800 transition-colors-custom"
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="group p-2 rounded-lg flex items-center gap-2 transition-colors duration-custom focus-ring">
          
          <Code className="w-5 h-5 text-secondary dark:text-secondary transition-all duration-300 group-hover:text-primary group-hover:-rotate-6"/>
          <h3 className="text-xl font-medium text-primary transition-colors duration-custom group-hover:text-zinc-900 dark:group-hover:text-zinc-50">PS</h3>
        
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <NavMenu/>
          <ToggleThemeButton/>
        </div>
        
        <div className="flex items-center gap-4 md:hidden">
          <ToggleThemeButton/>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-secondary hover:text-primary transition-colors-custom focus-ring"
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
