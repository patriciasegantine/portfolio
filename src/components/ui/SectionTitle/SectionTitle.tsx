import { FC } from 'react'
import { cn } from "@/utils/classNamesUtility";

interface SectionTitleProps {
  title: string
  className?: string
}

export const SectionTitle: FC<SectionTitleProps> = ({title, className}) => {
  return (
    <div className="text-center pb-12">
      <h2 className={cn(
        "text-3xl font-medium text-primary-dark dark:text-zinc-50",
        className
      )}>
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-16 bg-zinc-400/90 dark:bg-zinc-600" aria-hidden="true" />
    </div>
  )
}
