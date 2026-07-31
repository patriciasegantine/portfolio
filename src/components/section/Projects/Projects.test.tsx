import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Projects from "@/components/section/Projects/Projects";
import fetchMock from "jest-fetch-mock";

jest.mock("@/components/ui/RevealOnScroll/RevealOnScroll", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const generateMockProjects = () => {
  return [
    {
      slug: "first-project",
      title: "First Project - Task Dashboard",
      category: "Web",
      description: "First Project is a web platform...",
      image: null,
      stackPreview: ["React", "Next.js"],
      status: "Completed",
      featured: true,
      featuredOrder: 1,
      technologies: [{icon: "SiReact", name: "React"}],
      links: {
        github: "https://github.com/example/first-project",
        liveDemo: "https://web.com/example/first-project",
      },
      caseStudy: {
        projectOverview: "",
        techStack: [],
        whyThisStack: [],
        keyFeatures: [],
        challengesTradeoffs: [],
        whatILearned: [],
        nextSteps: [],
      },
    },
    {
      slug: "second-project",
      title: "Second Project - Collaboration Hub",
      category: "Web",
      description: "Second Project is designed for teamwork...",
      image: null,
      stackPreview: ["Vue.js", "Nuxt.js"],
      status: "InProgress",
      featured: true,
      featuredOrder: 2,
      technologies: [{icon: "SiVue", name: "Vue.js"}],
      links: {
        github: "https://github.com/example/second-project",
        liveDemo: "https://web.com/example/second-project",
      },
      caseStudy: {
        projectOverview: "",
        techStack: [],
        whyThisStack: [],
        keyFeatures: [],
        challengesTradeoffs: [],
        whatILearned: [],
        nextSteps: [],
      },
    },
  ];
};

describe("Projects Component", () => {
  beforeEach(() => fetchMock.enableMocks());
  afterEach(() => fetchMock.resetMocks());
  
  it("renders featured projects in their configured order", async () => {
    const projects = generateMockProjects();
    projects.push({
      ...projects[0],
      slug: "archived-project",
      title: "Archived Project",
      featured: false,
      featuredOrder: 3,
    });
    fetchMock.mockResponseOnce(JSON.stringify(projects.reverse()));
    
    render(<Projects/>);
    
    await waitFor(() => {
      expect(screen.getByText("First Project - Task Dashboard")).toBeInTheDocument();
      expect(screen.getByText("Second Project - Collaboration Hub")).toBeInTheDocument();
      expect(screen.queryByText("Archived Project")).not.toBeInTheDocument();
      const detailsLinks = screen.getAllByRole("link", {name: /View details for/i});
      expect(detailsLinks).toHaveLength(2);
      expect(detailsLinks[0]).toHaveAttribute("href", "/projects/first-project");
      expect(detailsLinks[1]).toHaveAttribute("href", "/projects/second-project");
      expect(screen.getByRole("link", {name: /view all projects/i})).toHaveAttribute("href", "/all-projects");
    });
  });
  
  it("displays the loading state while loading projects", async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));
    
    render(<Projects/>);
    
    expect(screen.getByText(/loading projects.../i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.queryByText(/loading projects.../i)).not.toBeInTheDocument();
    });
  });
  
  it("shows an error message when fetching projects fails", async () => {
    fetchMock.mockRejectOnce(new Error("Failed to fetch projects"));
    
    render(<Projects/>);
    
    await waitFor(() =>
      expect(screen.getByText(/failed to fetch projects/i)).toBeInTheDocument()
    );
  });
  
  it("handles empty projects gracefully", async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));
    
    render(<Projects/>);
    
    await waitFor(() => {
      expect(screen.queryByText(/loading projects.../i)).not.toBeInTheDocument();
      expect(screen.queryByTestId("project-card")).not.toBeInTheDocument();
    });
  });
});
