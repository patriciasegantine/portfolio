import { FC, ReactNode } from 'react'

interface SectionTitleProps {
  title: ReactNode
}

export const SectionTitle: FC<SectionTitleProps> = ({title}) => {
  return (
    <h2 className={`text-3xl text-center font-medium text-primary-dark dark:text-zinc-50 mb-16 mt-8`}>
      {title}
    </h2>
  )
}
