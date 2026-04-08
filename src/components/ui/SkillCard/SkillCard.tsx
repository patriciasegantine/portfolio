import { FC } from 'react'
import { cn } from "@/utils/classNamesUtility"
import { IconType } from 'react-icons'

interface SkillCardProps {
  icon: IconType
  name: string
  subtitle?: string
  className?: string
}

export const SkillCard: FC<SkillCardProps> = ({
                                                icon: Icon,
                                                name,
                                                subtitle,
                                                className
                                              }) => {
  return (
    <div
      data-testid="skill-card"
      className={cn(
        "group flex h-full min-h-[140px] flex-col items-center justify-between py-8 px-4",
        "bg-white dark:bg-zinc-700/30 border border-zinc-200 dark:border-zinc-700/60",
        "rounded-lg",
        "transition-all duration-300 shadow-md",
        "hover:-translate-y-1",
        "hover:bg-white dark:hover:bg-zinc-700/50",
        "hover:shadow-lg",
        className
      )}>
      <Icon
        data-testid="skill-card-icon"
        className={cn(
          "w-7 h-7 text-secondary dark:text-secondary",
          "transition-transform duration-500",
          "group-hover:scale-110"
        )}
      />

      <div className="flex w-full flex-col items-center text-center">
        <p
          data-testid="skill-card-name"
          className="min-h-[2rem] text-sm font-medium leading-tight text-primary flex items-center justify-center"
        >
          {name}
        </p>
        <p className="text-xs leading-snug text-secondary">
          {subtitle ?? "\u00A0"}
        </p>
      </div>
    </div>
  )
}
