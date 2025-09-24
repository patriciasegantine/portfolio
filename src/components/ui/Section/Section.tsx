import { FC, ReactNode } from 'react'
import { cn } from "@/utils/classNamesUtility";

type ThemeVariant = 'primary' | 'secondary'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  variant?: ThemeVariant
  'data-testid'?: string
  'aria-label'?: string
}

const themeVariants: Record<ThemeVariant, string> = {
  primary: 'bg-zinc-100 dark:bg-bg-dark',
  secondary: 'bg-bg-light dark:bg-zinc-900/95'
}

export const Section: FC<SectionProps> = ({
                                            id,
                                            children,
                                            className = '',
                                            variant = 'primary',
                                            'data-testid': dataTestId,
                                            'aria-label': ariaLabel
                                          }) => {
  return (
    <section
      id={id}
      data-testid={dataTestId || id}
      aria-label={ariaLabel}
      className={cn(
        'py-20 transition-colors-custom',
        themeVariants[variant],
        className
      )}
    >
      {children}
    </section>
  )
}
