'use client'

import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Sobre' },
    { href: '#projects', label: 'Projetos' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#contact', label: 'Contato' }
  ]
  
  return (
    <header className="bg-white shadow-md fixed w-full z-50 top-0">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-2xl font-bold text-primary">
          Seu Nome
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-dark hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
