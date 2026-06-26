'use client'

import React, { useState } from 'react';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import { X } from 'lucide-react';
import NavMenu from '@/components/ui/NavMenu/NavMenu';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navItems?: { href: string; label: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
                                                 isMobileMenuOpen,
                                                 setIsMobileMenuOpen,
                                                 navItems,
                                               }) => {
  
  const [closeQuickly, setCloseQuickly] = useState<boolean>(false)
  
  const handleSwipe = (_event: PointerEvent, info: PanInfo) => {
    if (info.offset.x > 50) {
      setIsMobileMenuOpen(false);
    }
  };
  
  const handleLinkClick = () => {
    setCloseQuickly(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setCloseQuickly(false);
    }, 200);
  };
  
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-canvas/55 backdrop-blur-md"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{
              duration: closeQuickly ? 0.1 : 0.35,
              ease: 'easeInOut',
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <motion.aside
            data-testid="mobile-menu"
            className="fixed inset-y-0 right-0 z-[70] flex min-h-svh w-[min(82vw,22rem)] flex-col border-l border-line bg-surface px-6 py-6 shadow-2xl shadow-black/20"
            initial={{x: '100%'}}
            animate={{x: 0}}
            exit={{x: '100%'}}
            transition={{
              duration: closeQuickly ? 0.1 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            onPanEnd={handleSwipe}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="ml-auto rounded-control border border-line bg-canvas p-2 text-secondary transition-colors hover:text-primary focus-ring"
              aria-label="Close menu"
            >
              <X className="h-6 w-6"/>
            </button>

            <div className="mt-16 flex flex-1 items-start">
              <NavMenu
                isMobile
                onItemClick={handleLinkClick}
                navItems={navItems}
              />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
