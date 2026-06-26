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
  const mobileClasses = 'mobile-menu-class flex w-full flex-col items-center gap-3 md:hidden';
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
          className={`${isMobile ? 'block w-full max-w-xs text-center font-display text-4xl font-semibold sm:text-5xl' : 'inline-block'}
          rounded-lg px-3 py-2 text-secondary
          transition-colors duration-custom hover:bg-accent-soft hover:text-primary hover:underline
          decoration-2 underline-offset-4 focus-ring`}
          onClick={onItemClick}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
