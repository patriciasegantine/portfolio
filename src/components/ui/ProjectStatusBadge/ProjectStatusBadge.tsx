import type { ProjectStatus } from "@/types/project";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

const badgeStyles: Record<ProjectStatus, string> = {
  Completed: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  InProgress: "border-blue-500/25 bg-blue-500/10 text-blue-700 dark:text-blue-300",
  Ongoing: "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  Paused: "border-zinc-500/25 bg-zinc-500/10 text-zinc-700 dark:text-zinc-300",
  Planned: "border-slate-500/25 bg-slate-500/10 text-slate-700 dark:text-slate-300",
};

const dotStyles: Record<ProjectStatus, string> = {
  Completed: "bg-emerald-500",
  InProgress: "bg-blue-500",
  Ongoing: "bg-amber-500",
  Paused: "bg-zinc-400",
  Planned: "bg-slate-400",
};

const statusLabels: Record<ProjectStatus, string> = {
  Completed: "Completed",
  InProgress: "In Progress",
  Ongoing: "Ongoing",
  Paused: "Paused",
  Planned: "Planned",
};

const ProjectStatusBadge = ({ status }: ProjectStatusBadgeProps) => (
  <span
    className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.015em] shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] ${badgeStyles[status]}`}
  >
    <span
      className={`h-1.5 w-1.5 rounded-full shadow-[0_0_0_3px_rgb(255_255_255/0.06)] ${dotStyles[status]}`}
      aria-hidden="true"
    />
    {statusLabels[status]}
  </span>
);

export default ProjectStatusBadge;
