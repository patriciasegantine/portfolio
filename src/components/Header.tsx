'use client'

import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  const navItems = [
    {href: '#home', label: 'home'},
    {href: '#about', label: 'about'},
    {href: '#projects', label: 'projects'},
    {href: '#skills', label: 'skills'},
    {href: '#contact', label: 'contact'}
  ]
  
  return (
    <header className="bg-white shadow-sm fixed w-full z-50 top-0">
      <nav className="container mx-auto flex justify-between items-center py-6 px-4">
        <div className="text-2xl font-bold text-primary flex">
          PS
        </div>
        
        <div className="flex space-x-6">
          {navItems.map(({label, href}) => (
            <Link key={label} href={href} className="text-primary hover:text-secondary transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
