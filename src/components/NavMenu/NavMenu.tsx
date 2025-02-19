import React from 'react';
import Link from 'next/link';

interface NavMenuProps {
  navItems?: { href: string; label: string }[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

const defaultNavItems = [
  {href: '#hero', label: 'home'},
  {href: '#about', label: 'about'},
  {href: '#projects', label: 'projects'},
  {href: '#skills', label: 'skills'},
  {href: '#contact', label: 'contact'},
];

const NavMenu: React.FC<NavMenuProps> = ({
                                           navItems = defaultNavItems,
                                           isMobile = false,
                                           onItemClick,
                                         }) => {
  const mobileClasses = 'mobile-menu-class block md:hidden py-4 px-4';
  const desktopClasses = 'hidden md:flex items-center space-x-6';
  
  return (
    <div
      data-testid="nav-menu"
      className={isMobile ? mobileClasses : desktopClasses}
    >
      {navItems.map(({label, href}) => (
        <Link
          key={label}
          href={href}
          className={`${
            isMobile ? 'block py-2' : 'text-secondary hover:text-primary'
          } transition-colors duration-custom dark:text-zinc-400 dark:hover:text-zinc-100`}
          onClick={onItemClick}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
