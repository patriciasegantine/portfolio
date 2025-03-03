import { IconType } from "react-icons";
import clsx from "clsx";

interface SkillCardProps {
  name: string;
  icon: IconType;
  className?: string;
}

export function SkillCard({name, icon: Icon, className}: SkillCardProps) {
  return (
    <div
      className={clsx(
        "group flex flex-col items-center p-6",
        "bg-zinc-50 dark:bg-zinc-700/30",
        "rounded-lg",
        "transition-all duration-300 shadow-md",
        "hover:-translate-y-1 hover:scale-105",
        "hover:bg-zinc-100 dark:hover:bg-zinc-700/50",
        "hover:shadow-lg",
        className
      )}
    >
      <div className="relative mb-4">
        <Icon
          className={clsx(
            "w-8 h-8",
            "text-secondary dark:text-zinc-300",
            "transition-transform duration-500",
            "group-hover:scale-125 group-hover:rotate-45"
          )}
        />
      </div>
      
      <span className={clsx(
        "text-primary-dark dark:text-zinc-100",
        "font-medium text-sm text-center"
      )}>
        {name}
      </span>
    </div>
  );
}
