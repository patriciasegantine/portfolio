import { FC } from 'react'
import { cn } from "@/utils/classNamesUtility"
import { IconType } from 'react-icons'

interface SkillCardProps {
  icon: IconType
  name: string
  className?: string
}

export const SkillCard: FC<SkillCardProps> = ({
                                                icon: Icon,
                                                name,
                                                className
                                              }) => {
  return (
    <div
      data-testid="skill-card"
      className={cn(
        "group flex flex-col items-center p-6",
        "bg-zinc-50 dark:bg-zinc-700/30",
        "rounded-lg",
        "transition-all duration-300 shadow-md",
        "hover:-translate-y-1 hover:scale-105",
        "hover:bg-zinc-100 dark:hover:bg-zinc-700/50",
        "hover:shadow-lg",
        className
      )}>
      <div className="relative mb-4">
        <Icon
          data-testid="skill-card-icon"
          className={cn(
            "w-8 h-8 text-secondary dark:text-zinc-300",
            "transition-transform duration-500",
            "group-hover:scale-125 group-hover:rotate-45"
          )}
        />
      </div>
      
      <span
        data-testid="skill-card-name"
        className="text-primary-dark dark:text-zinc-100 font-medium text-sm text-center">
        {name}
      </span>
    </div>
  )
}
