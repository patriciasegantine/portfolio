'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import clsx from 'clsx'

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 500)
  }, [])
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [toggleVisibility])
  
  const scrollToTop = useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])
  
  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        'fixed bottom-8 right-8 p-3 bg-white dark:bg-zinc-800 shadow-lg dark:shadow-zinc-800/20 rounded-full',
        'text-secondary dark:text-zinc-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2',
        'focus:ring-zinc-300 dark:focus:ring-zinc-700 transition-all duration-300 group z-50',
        {
          'opacity-0 pointer-events-none': !isVisible,
          'opacity-100': isVisible,
        }
      )}
      style={{transition: 'opacity 0.3s ease'}}
      aria-label="Scroll to top"
      role="button"
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"/>
    </button>
  )
}

export default ScrollToTopButton
