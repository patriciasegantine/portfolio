import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer
      className="py-8 bg-white dark:bg-zinc-800 border-t border-zinc-100 dark:border-zinc-700/50 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <div className="flex items-center gap-2 text-sm text-secondary dark:text-zinc-400">
            <span>© {currentYear} All rights reserved</span>
            <span>•</span>
            <span>Created with</span>
            <Heart
              className="w-4 h-4 text-red-500 animate-pulse"
              fill="currentColor"
            />
            <span>by</span>
            <span className="font-medium text-primary-dark dark:text-zinc-100">
              Patricia Segantine
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
