export type ProjectStatus = 'Completed' | 'InProgress' | 'Ongoing' | 'Paused' | 'Planned';

export interface ProjectTechnology {
  icon: string;
  name: string;
}

export interface ProjectLinks {
  github?: string;
  liveDemo?: string;
}

export interface ProjectCaseStudy {
  projectOverview: string;
  techStack: string[];
  whyThisStack: string[];
  keyFeatures: string[];
  challengesTradeoffs: string[];
  whatILearned: string[];
  nextSteps: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string | null;
  stackPreview: string[];
  status: ProjectStatus;
  featured: boolean;
  featuredOrder?: number | null;
  technologies: ProjectTechnology[];
  links: ProjectLinks;
  caseStudy: ProjectCaseStudy;
}
