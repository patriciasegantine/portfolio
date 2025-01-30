import { NextResponse } from "next/server";

const projects = [
  {
    key: "Nexus",
    title: "Nexus - Task Dashboard",
    description:
      "Nexus is a task management platform designed to help users organize and track their daily tasks and projects efficiently. The system provides a clear overview of tasks, deadlines, and priorities to boost productivity.",
    image: "https://raw.githubusercontent.com/patriciasegantine/nexus-dashboard-frontend/main/public/screenshot.png",
    technologies: [
      {icon: "SiReact", name: "React"},
      {icon: "SiNextdotjs", name: "Next.js"},
      {icon: "SiTypescript", name: "TypeScript"},
      {icon: "SiTailwindcss", name: "Tailwind CSS"},
    ],
    github: "https://github.com/patriciasegantine/nexus-dashboard-frontend.git",
    website: "https://ps-nexus.vercel.app/",
  },
  {
    key: "SmartNotes",
    title: "SmartNotes - Voice & Text Note-Taking App",
    description:
      "SmartNotes is an application for creating, editing, and managing notes using text or voice input. It helps users capture their ideas and organize their thoughts with ease and simplicity.",
    image:
      "https://raw.githubusercontent.com/patriciasegantine/smart-notes/main/src/assets/screenshot.png",
    technologies: [
      {icon: "SiReact", name: "React"},
      {icon: "SiTypescript", name: "TypeScript"},
      {icon: "SiVite", name: "Vite"},
      {icon: "SiTailwindcss", name: "Tailwind CSS"},
      {icon: "SiShadcnui", name: "Shadcn"},
    ],
    github: "https://github.com/patriciasegantine/smart-notes.git",
    website: "https://ps-smartnotes.vercel.app/",
  },
  {
    key: "harmony-shop",
    title: "Harmony Shop - Natural Products & Workshops",
    description:
      "Harmony Shop is an online store offering natural products and workshops focused on self-care and well-being. It helps customers find quality products and learn effective practices for body care.",
    image:
      "https://raw.githubusercontent.com/patriciasegantine/harmony-shop/main/public/screenshot.png",
    technologies: [
      {icon: "SiReact", name: "React"},
      {icon: "SiRedux", name: "Redux"},
      {icon: "SiMui", name: "Material-UI"},
      {icon: "SiStyledcomponents", name: "Styled Components"},
      {icon: "SiTypescript", name: "TypeScript"},
    ],
    github: "https://github.com/patriciasegantine/harmony-shop.git",
    website: "https://ps-harmony-shop.vercel.app/",
  },
  {
    key: "dojo-ticket",
    title: "Dojo Help Desk - Ticket Management App",
    description:
      "Dojo Help Desk is a platform for managing customer support tickets. It enables teams to efficiently create, track, and resolve tickets, improving productivity and service quality.",
    image:
      "https://raw.githubusercontent.com/patriciasegantine/dojo-ticket/main/public/screenshot.png.jpg",
    technologies: [
      {icon: "SiReact", name: "React"},
      {icon: "SiNextdotjs", name: "Next.js"},
      {icon: "SiTypescript", name: "TypeScript"},
      {icon: "SiTailwindcss", name: "Tailwind CSS"},
    ],
    github: "https://github.com/patriciasegantine/dojo-ticket.git",
    website: "https://ps-dojoticket.vercel.app",
  },
  {
    key: "recipe-nest",
    title: "RecipeNest - Find, Organize, and Create Recipes",
    description:
      "RecipeNest is an application that allows users to explore, organize, and save their favorite recipes. It provides a seamless and intuitive experience for managing a personal recipe library.",
    image:
      "https://raw.githubusercontent.com/patriciasegantine/recipe-nest/main/public/screenshot.jpg",
    technologies: [
      {icon: "SiReact", name: "React"},
      {icon: "SiNextdotjs", name: "Next.js"},
      {icon: "SiTailwindcss", name: "Tailwind CSS"},
      {icon: "SiShadcnui", name: "Shadcn/UI"},
      {icon: "SiRedux", name: "Redux Toolkit"},
      {icon: "SiZod", name: "Zod"},
    ],
    github: "https://github.com/patriciasegantine/recipe-nest.git",
    website: "https://ps-recipe-nest.vercel.app/",
  },
];

export async function GET() {
  return NextResponse.json(projects);
}
