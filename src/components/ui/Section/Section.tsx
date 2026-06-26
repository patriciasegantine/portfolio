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
  primary: 'bg-canvas',
  secondary: 'bg-canvas-muted'
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
        'py-12 md:py-20 transition-colors-custom',
        themeVariants[variant],
        className
      )}
    >
      {children}
    </section>
  )
}
