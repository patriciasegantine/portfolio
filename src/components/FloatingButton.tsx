'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const FloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    
    window.addEventListener('scroll', toggleVisibility)
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  
  const scrollToTop = useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])
  
  if (!isVisible) {
    return null
  }
  
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3
                 bg-white dark:bg-zinc-800
                 shadow-lg dark:shadow-zinc-800/20
                 rounded-full
                 text-secondary dark:text-zinc-300
                 hover:-translate-y-1 hover:shadow-xl
                 focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700
                 transition-all duration-300
                 group
                 z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"/>
    </button>
  )
}

export default FloatingButton
