import type { ProjectStatus } from "@/types/project";

export const PROJECT_STATUS_BADGE_STYLE = 'inline-flex items-center gap-1.5 border border-line bg-canvas/70 text-secondary';

export const PROJECT_STATUS_DOT_STYLES: Record<ProjectStatus, string> = {
  'Completed': 'bg-emerald-500',
  'In Progress': 'bg-blue-500',
  'Ongoing': 'bg-amber-500',
  'Planned': 'bg-slate-400',
};
