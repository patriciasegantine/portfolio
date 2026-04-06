import type { IconType } from "react-icons";
import { GiBearFace } from "react-icons/gi";
import {
  SiMdx,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod,
} from "react-icons/si";

const STACK_ICON_MAP: Record<string, IconType> = {
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "React Query": SiReactquery,
  "Node.js": SiNodedotjs,
  "Zod": SiZod,
  "MDX": SiMdx,
  "Zustand": GiBearFace,
  "Vite": SiVite
};

export const getProjectStackIcon = (stackName: string) => STACK_ICON_MAP[stackName];
