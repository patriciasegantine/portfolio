import React from 'react';
import Link from 'next/link';

interface NavMenuProps {
  navItems?: { href: string; label: string }[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

const defaultNavItems = [
  {href: '/', label: 'home'},
  {href: '/#about', label: 'about'},
  {href: '/#projects', label: 'projects'},
  {href: '/#skills', label: 'skills'},
  {href: '/#contact', label: 'contact'},
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
          className={`${isMobile ? 'block' : 'inline-block'}
          px-3 py-2 rounded-lg text-secondary hover:text-zinc-900 dark:hover:text-zinc-50
          hover:underline underline-offset-4 decoration-2 transition-colors duration-custom focus-ring`}
          onClick={onItemClick}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
