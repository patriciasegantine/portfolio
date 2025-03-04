import { FC } from 'react'
import { cn } from "@/utils/classNamesUtility";

interface SectionTitleProps {
  title: string
  className?: string
}

export const SectionTitle: FC<SectionTitleProps> = ({title, className}) => {
  return (
    <h2 className={cn(
      "text-3xl text-center font-medium text-primary-dark dark:text-zinc-50 mb-12 mt-12",
      className
    )}>
      {title}
    </h2>
  )
}
