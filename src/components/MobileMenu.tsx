import React, { useEffect } from 'react';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import { X } from 'lucide-react';
import NavMenu from './NavMenu';

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
  const handleSwipe = (_event: PointerEvent, info: PanInfo) => {
    if (info.offset.y > 50) {
      setIsMobileMenuOpen(false);
    }
  };
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);
  
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-6"
          initial={{y: '-100%'}}
          animate={{y: 0}}
          exit={{y: '-100%'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          onPanEnd={handleSwipe}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-secondary hover:text-primary dark:text-zinc-50 dark:hover:text-zinc-400"
            aria-label="Close menu"
          >
            <X className="w-6 h-6"/>
          </button>
          
          <NavMenu
            isMobile
            onItemClick={() => setIsMobileMenuOpen(false)}
            navItems={navItems}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
