import { FC } from 'react'
import { IconType } from 'react-icons'

interface InterestCardProps {
  icon: IconType
  label: string
}

export const InterestCard: FC<InterestCardProps> = ({icon: Icon, label}) => {
  return (
    <div className="flex flex-col items-center p-5 rounded-lg
                    bg-zinc-50 dark:bg-zinc-700/30
                    transition-all duration-custom
                    hover:-translate-y-1
                    hover:bg-zinc-100 dark:hover:bg-zinc-700/50
                    group">
      <span className="text-secondary dark:text-zinc-300 mb-3
                      transition-transform duration-300
                      group-hover:scale-110">
        <Icon className="w-6 h-6 md:w-7 md:h-7"/>
      </span>
      <span className="text-primary-dark dark:text-zinc-100 text-sm text-center">
        {label}
      </span>
    </div>
  )
}
