'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Code, Menu } from 'lucide-react'
import ToggleTheme from '@/components/ToggleTheme'
import { useTheme } from 'next-themes'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { resolvedTheme } = useTheme()
  
  const navItems = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#projects', label: 'projects' },
    { href: '#skills', label: 'skills' },
    { href: '#contact', label: 'contact' }
  ]
  
  return (
    <header
      className={`bg-white dark:bg-zinc-900 shadow-sm fixed w-full z-50 top-0 border-b border-zinc-100 dark:border-zinc-800 transition-colors duration-700 ${resolvedTheme === 'dark' ? 'dark' : ''}`}>
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5 text-secondary dark:text-zinc-300" />
          <h3 className="text-xl font-medium text-primary-dark dark:text-zinc-50">
            PS
          </h3>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-secondary hover:text-primary transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {label}
            </Link>
          ))}
          
          <ToggleTheme />
        </div>
        
        <div className="flex items-center gap-4 md:hidden">
          <ToggleTheme />
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-secondary hover:text-primary transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block py-2 text-secondary hover:text-primary transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
