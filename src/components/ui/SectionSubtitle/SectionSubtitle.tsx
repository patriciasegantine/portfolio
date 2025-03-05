import { FC } from 'react'
import { cn } from "@/utils/classNamesUtility";

interface SectionSubtitleProps {
  subtitle: string
  className?: string
}

export const SectionSubtitle: FC<SectionSubtitleProps> = ({
                                                            subtitle,
                                                            className
                                                          }) => {
  return (
    <h3 className={cn(
      "text-xl font-medium text-primary-dark dark:text-zinc-50 text-center pt-8 pb-12",
      className
    )}>
      {subtitle}
    </h3>
  )
}
