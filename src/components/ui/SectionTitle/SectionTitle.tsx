import { FC } from 'react'

interface SectionTitleProps {
  title: string
  className?: string
}

export const SectionTitle: FC<SectionTitleProps> = ({title, className = ''}) => {
  return (
    <h2 className={`text-3xl text-center font-medium text-primary-dark dark:text-zinc-50 mb-12 mt-12 ${className}`}>
      {title}
    </h2>
  )
}
