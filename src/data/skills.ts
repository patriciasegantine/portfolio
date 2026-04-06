import { IconType } from "react-icons";
import { FaMicrosoft, FaUniversalAccess } from "react-icons/fa";
import { LuWorkflow } from "react-icons/lu";
import {
  SiAmazonwebservices,
  SiGit,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiStorybook,
  SiSwagger,
  SiTestinglibrary,
  SiTypescript
} from "react-icons/si";

export type SkillItem = {
  name: string;
  subtitle?: string;
  icon: IconType;
};

export const coreSkills: SkillItem[] = [
  { name: "React", subtitle: "UI library", icon: SiReact },
  { name: "TypeScript", subtitle: "Static typing", icon: SiTypescript },
  { name: "Next.js", subtitle: "React framework",icon: SiNextdotjs },
  { name: "Micro-frontends", subtitle: "Single-SPA + Module Federation", icon: LuWorkflow },
  { name: "State Management", subtitle: "React Query + Zustand", icon: SiReactquery },
  { name: "Testing & Quality", subtitle: "Jest + React Testing Library", icon: SiTestinglibrary },
  { name: "Accessibility", subtitle: "WCAG", icon: FaUniversalAccess },
  { name: "Design Systems", subtitle: "Consistency at scale", icon: SiStorybook },
];

export const toolingSkills: SkillItem[] = [
  { name: "AWS", subtitle: "S3 + CloudFront", icon: SiAmazonwebservices },
  { name: "Azure DevOps", subtitle: "CI/CD workflows", icon: FaMicrosoft },
  { name: "Swagger / OpenAPI", subtitle: "Practical API integration", icon: SiSwagger },
  { name: "Git", subtitle: "Version control", icon: SiGit },
];
