'use client'

import type { PropsWithChildren } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from "@/utils/classNamesUtility";

interface RevealOnScrollProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  yOffset?: number;
  once?: boolean;
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const RevealOnScroll = ({
  children,
  className,
  delay = 0,
  yOffset = 24,
  once = true,
}: RevealOnScrollProps) => {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { ...revealVariants.hidden, y: yOffset },
        visible: revealVariants.visible,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
