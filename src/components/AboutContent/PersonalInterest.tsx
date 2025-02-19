import React from "react";

interface PersonalInterestProps {
  icon: React.ElementType;
  label: string;
}

export const PersonalInterest: React.FC<PersonalInterestProps> = ({icon: Icon, label}) => (
  <div
    className="flex flex-col items-center p-5 rounded-lg bg-zinc-50 dark:bg-zinc-700/30 transition-all duration-custom hover:-translate-y-1 hover:bg-zinc-100 dark:hover:bg-zinc-700/50 group">
    <span
      className="text-secondary dark:text-zinc-300 mb-3 transition-transform duration-300 group-hover:-translate-y-2 group-hover:opacity-75">
      <Icon className="w-6 h-6 md:w-7 md:h-7"/>
    </span>
    <span className="text-primary-dark dark:text-zinc-100 text-sm text-center">
      {label}
    </span>
  </div>
);
