import {
  SiAngular, SiChartdotjs,
  SiExpo, SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiShadcnui, SiStyledcomponents,
  SiTailwindcss,
  SiTypescript, SiVuedotjs
} from "react-icons/si";

export enum ProjectKey {
  Nexus = "Nexus",
  SimpleEcommerce = "SimpleEcommerce",
  InteractiveQuiz = "InteractiveQuiz",
  NewsPortal = "NewsPortal",
  DataAnalysisDashboard = "DataAnalysisDashboard"
}
  
  export const projects = [
  {
    key: ProjectKey.Nexus,
    title: "Nexus - Task Dashboard",
    description: "Nexus is a web platform for task management that evolves from a personal system to a complete agile management tool. Focused on simplicity and efficiency, it allows users and small teams to manage their activities through intuitive Kanban boards.",
    image: null,
    technologies: [
      {icon: SiReact, name: 'React'},
      {icon: SiNextdotjs, name: 'Next.js'},
      {icon: SiTypescript, name: 'TypeScript'},
      {icon: SiTailwindcss, name: 'Tailwind'},
      {icon: SiShadcnui, name: 'Shadcn/ui'},
      {icon: SiReactquery, name: "React Query"},
      {icon: SiNodedotjs, name: "Node.js"}
    ],
    github: "https://github.com/patriciasegantine/dashboard-analytics-frontend.git",
    website: "https://github.com/patriciasegantine/dashboard-analytics-frontend.git"
  },
  {
    key: ProjectKey.SimpleEcommerce,
    title: "Simple E-commerce",
    description: "A fictional e-commerce site with a shopping cart and product integration via a public API.",
    image: "https://via.placeholder.com/600x400?text=Coming+Soon",
    technologies: [
      {icon: SiReact, name: "React"},
      {icon: SiNextdotjs, name: "Next.js"},
      {icon: SiStyledcomponents, name: "Styled Components"}
    ],
    github: "https://github.com/patriciasegantine",
    website: "https://github.com/patriciasegantine/"
  },
  {
    key: ProjectKey.InteractiveQuiz,
    title: "Interactive Quiz",
    description: "A quiz app with API integration for dynamic questions and a scoring system.",
    image: "https://via.placeholder.com/600x400?text=Coming+Soon",
    technologies: [
      {icon: SiReact, name: "React Native"},
      {icon: SiTypescript, name: "TypeScript"},
      {icon: SiExpo, name: "Expo"}
    ],
    github: "https://github.com/patriciasegantine/",
    website: "https://github.com/patriciasegantine/"
  },
  {
    key: ProjectKey.NewsPortal,
    title: "News Portal",
    description: "A responsive news website with categories, search functionality, and integration with a public API.",
    image: "https://via.placeholder.com/600x400?text=Coming+Soon",
    technologies: [
      {icon: SiVuedotjs, name: "Vue.js"},
      {icon: SiTailwindcss, name: "Tailwind CSS"},
      {icon: SiJavascript, name: "JavaScript"}
    ],
    github: "https://github.com/patriciasegantine/",
    website: "https://github.com/patriciasegantine/"
  },
  {
    key: ProjectKey.DataAnalysisDashboard,
    title: "Data Analysis Dashboard",
    description: "A sales dashboard with interactive charts, tables, and dynamic filters using mock data.",
    image: "https://via.placeholder.com/600x400?text=Coming+Soon",
    technologies: [
      {icon: SiAngular, name: "Angular"},
      {icon: SiChartdotjs, name: "Chart.js"},
    ],
    github: "https://github.com/patriciasegantine/",
    website: "https://github.com/patriciasegantine/"
  }
];
