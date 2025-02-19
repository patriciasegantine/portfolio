import React from "react";

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({title}) => (
  <h2 className="text-3xl font-medium text-primary-dark dark:text-zinc-50 text-center mb-16 mt-8">
    {title}
  </h2>
);
