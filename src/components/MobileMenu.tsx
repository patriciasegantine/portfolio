import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  navItems: { href: string; label: string }[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({navItems, isOpen, onClose}) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden py-4 px-4 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
      {navItems.map(({label, href}) => (
        <Link
          key={label}
          href={href}
          className="block py-2 text-secondary hover:text-primary transition-colors duration-custom dark:text-zinc-400 dark:hover:text-zinc-100"
          onClick={onClose}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;
