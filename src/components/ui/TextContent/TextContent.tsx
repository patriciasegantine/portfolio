import { FC, ReactNode } from 'react'
import { cn } from "@/utils/classNamesUtility"

interface TextContentProps {
  children: ReactNode
  className?: string
}

export const TextContent: FC<TextContentProps> = ({
                                                    children,
                                                    className
                                                  }) => {
  return (
    <p className={cn(
      "text-lg text-secondary dark:text-zinc-300 leading-relaxed",
      className
    )}>
      {children}
    </p>
  )
}
