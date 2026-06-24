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
        "font-display text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl",
        className
      )}>
        {title}
      </h2>
      <div className="mx-auto mt-5 flex w-fit items-center gap-2" aria-hidden="true">
        <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
        <span className="h-px w-12 bg-line" />
      </div>
    </div>
  )
}
