'use client'

import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const ToggleTheme: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }
  
  if (!mounted) return null
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-secondary hover:text-primary transition-colors duration-custom dark:text-zinc-400 dark:hover:text-zinc-100"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark'
        ? <Sun className="w-5 h-5" />
        : <Moon className="w-5 h-5" />
      }
    </button>
  )
}

export default ToggleTheme
