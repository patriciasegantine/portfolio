'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from "@/utils/classNamesUtility";

const SCROLL_THRESHOLD = 500
const SCROLL_OPTIONS = {top: 0, behavior: 'smooth' as const}

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > SCROLL_THRESHOLD)
  }, [])
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    toggleVisibility()
    
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [toggleVisibility])
  
  const scrollToTop = () => window.scrollTo(SCROLL_OPTIONS)
  
  const baseStyles = 'fixed bottom-8 right-8 p-3 bg-white dark:bg-zinc-800 shadow-lg dark:shadow-zinc-800/20 rounded-full text-secondary'
  const interactionStyles = 'hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700'
  const transitionStyles = 'transition-all duration-300 group z-50'
  const visibilityStyles = isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
  
  return (
    <button
      onClick={scrollToTop}
      className={cn(
        baseStyles,
        interactionStyles,
        transitionStyles,
        visibilityStyles
      )}
      aria-label="Scroll to top"
      data-testid="scrollToTop"
      aria-hidden={!isVisible}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"/>
    </button>
  )
}

export default ScrollToTopButton
