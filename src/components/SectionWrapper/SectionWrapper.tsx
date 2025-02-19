import clsx from 'clsx';
import React from "react";

export type SectionVariant = 'primary' | 'secondary';

export interface SectionWrapperProps {
  id: string;
  variant?: SectionVariant;
  children: React.ReactNode;
  className?: string;
  'data-testid'?: string;
  'aria-label'?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
                                                                id,
                                                                variant = 'primary',
                                                                children,
                                                                className,
                                                                'data-testid': dataTestId,
                                                                'aria-label': ariaLabel,
                                                              }) => {
  const baseStyles = "py-20 transition-colors-custom";
  const variantStyles = {
    primary: "bg-zinc-100 dark:bg-zinc-900",
    secondary: "bg-zinc-50 dark:bg-zinc-900/95"
  };
  
  return (
    <section
      id={id}
      data-testid={dataTestId || id}
      aria-label={ariaLabel}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};
