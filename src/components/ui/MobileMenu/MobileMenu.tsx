'use client'

import React, { useState } from 'react';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import { Code, X } from 'lucide-react';
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
            className="fixed inset-0 z-[60] bg-canvas/90 backdrop-blur-3xl dark:bg-canvas/[0.96]"
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
            className="fixed inset-0 z-[70] flex min-h-svh flex-col overflow-hidden border border-white/40 px-6 py-6 shadow-2xl shadow-black/30 backdrop-blur-3xl [background:color-mix(in_srgb,var(--color-surface)_97%,transparent)] dark:border-white/10 dark:shadow-black/60 dark:[background:color-mix(in_srgb,var(--color-surface)_98%,transparent)]"
            initial={{opacity: 0, y: 24, scale: 0.98}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 16, scale: 0.98}}
            transition={{
              duration: closeQuickly ? 0.1 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            onPanEnd={handleSwipe}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-control px-2 py-1 text-primary">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent-strong">
                  <Code className="h-4 w-4"/>
                </span>
                <span className="font-display text-lg font-semibold">PS</span>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-control border border-line bg-canvas/80 p-2 text-secondary shadow-soft transition-colors hover:text-primary focus-ring dark:bg-surface/80"
                aria-label="Close menu"
              >
                <X className="h-6 w-6"/>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center pb-16">
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
