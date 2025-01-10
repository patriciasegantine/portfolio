// tests/Projects.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "@/components/Projects";

jest.mock('@/data/projects', () => ({
  ProjectKey: { Nexus: 'nexus' },
  projects: [
    {
      key: 'nexus',
      title: "Nexus - Task Dashboard",
      description:
        "Nexus is a web platform for task management that evolves from a personal system to a complete agile management tool. Focused on simplicity and efficiency, it allows users and small teams to manage their activities through intuitive Kanban boards.",
      image: null,
      technologies: [
        { icon: () => <span>Next.js Icon</span>, name: 'Next.js' },
        { icon: () => <span>TypeScript Icon</span>, name: 'TypeScript' },
      ],
      github: "https://github.com/patriciasegantine/dashboard-analytics-frontend.git",
      website: "https://github.com/patriciasegantine/dashboard-analytics-frontend.git",
    },
    {
      key: 'kanban-lite',
      title: "Kanban Lite",
      description:
        "Kanban Lite is a lightweight task management app designed for freelancers and small teams. It offers drag-and-drop functionality and supports project tracking with minimal setup.",
      image: "https://via.placeholder.com/400x300",
      technologies: [
        { icon: () => <span>React Icon</span>, name: 'React' },
        { icon: () => <span>Tailwind Icon</span>, name: 'Tailwind' },
      ],
      github: "https://github.com/patriciasegantine/kanban-lite.git",
      website: "https://kanban-lite-demo.com",
    },
  ],
}));

describe("Projects Component", () => {
  it("renders the section title", () => {
    render(<Projects />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
  
  it('applies the "transition-colors-custom" class to the section', () => {
    render(<Projects />);
    const sectionElement = screen.getByTestId('projects-section');
    expect(sectionElement).toHaveClass('transition-colors-custom');
  });
  
  it("renders the featured project", () => {
    render(<Projects />);
    expect(screen.getByText("Nexus - Task Dashboard")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Nexus is a web platform for task management that evolves from a personal system to a complete agile management tool. Focused on simplicity and efficiency, it allows users and small teams to manage their activities through intuitive Kanban boards."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
  
  it("renders the filtered projects", () => {
    render(<Projects />);
    expect(screen.getByText("Kanban Lite")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Kanban Lite is a lightweight task management app designed for freelancers and small teams. It offers drag-and-drop functionality and supports project tracking with minimal setup."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Tailwind")).toBeInTheDocument();
  });
  
  it("renders the GitHub link for the featured project", () => {
    render(<Projects />);
    const githubLink = screen.getAllByRole("link", { name: "GitHub" })[0]; // Seleciona o primeiro link "GitHub"
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/patriciasegantine/dashboard-analytics-frontend.git"
    );
  });
  
  it("renders the website link for the featured project", () => {
    render(<Projects />);
    const websiteLink = screen.getAllByRole("link", { name: "Visit Site" })[0]; // Seleciona o primeiro link "Visit Site"
    expect(websiteLink).toHaveAttribute(
      "href",
      "https://github.com/patriciasegantine/dashboard-analytics-frontend.git"
    );
  });
});
