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
      className="sticky top-0 z-50 w-full border-b border-line bg-canvas backdrop-blur-xl transition-colors-custom"
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="group flex items-center gap-2 rounded-control p-2 transition-colors duration-custom focus-ring">
          
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent-strong transition-transform duration-300 group-hover:-rotate-6">
            <Code className="h-4 w-4"/>
          </span>
          <h3 className="font-display text-lg font-semibold text-primary transition-colors duration-custom group-hover:text-accent-strong">PS</h3>
        
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
