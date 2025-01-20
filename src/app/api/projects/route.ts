import { NextResponse } from 'next/server';

const projects = [
  {
    key: "Nexus",
    title: "Nexus - Task Dashboard",
    description: "Nexus is a web platform...",
    image: null,
    technologies: [
      {icon: "SiReact", name: "React"},
      {icon: "SiNextdotjs", name: "Next.js"},
      {icon: "SiTypescript", name: "TypeScript"},
      {icon: "SiTailwindcss", name: "Tailwind CSS"}
    ],
    github: "https://github.com/patriciasegantine/dashboard-analytics-frontend.git",
    website: "https://github.com/patriciasegantine/dashboard-analytics-frontend.git"
  },
  {
    key: "SimpleEcommerce",
    title: "Simple E-commerce",
    description: "A fictional e-commerce...",
    image: "https://via.placeholder.com/600x400?text=Coming+Soon",
    technologies: [
      {icon: "SiReact", name: "React"},
      {icon: "SiNextdotjs", name: "Next.js"},
      {icon: "SiStyledcomponents", name: "Styled Components"}
    ],
    github: "https://github.com/patriciasegantine/",
    website: "https://github.com/patriciasegantine/"
  },
  {
    key: "InteractiveQuiz",
    title: "Interactive Quiz",
    description: "A quiz app with API integration...",
    image: "https://via.placeholder.com/600x400?text=Coming+Soon",
    technologies: [
      {icon: "SiReact", name: "React Native"},
      {icon: "SiTypescript", name: "TypeScript"},
      {icon: "SiExpo", name: "Expo"}
    ],
    github: "https://github.com/patriciasegantine/",
    website: "https://github.com/patriciasegantine/"
  }
];

export async function GET() {
  return NextResponse.json(projects);
}
