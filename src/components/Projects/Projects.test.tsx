import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Projects from "@/components/Projects/Projects";
import fetchMock from "jest-fetch-mock";

const generateMockProjects = () => {
  return [
    {
      key: "FirstProject",
      title: "First Project - Task Dashboard",
      description: "First Project is a web platform...",
      image: "",
      technologies: [
        {icon: "SiReact", name: "React"},
        {icon: "SiNextdotjs", name: "Next.js"},
      ],
      github: "https://github.com/example/first-project",
      website: "https://web.com/example/first-project",
    },
    {
      key: "SecondProject",
      title: "Second Project - Collaboration Hub",
      description: "Second Project is designed for teamwork...",
      image: "",
      technologies: [
        {icon: "SiVue", name: "Vue.js"},
        {icon: "SiNuxtdotjs", name: "Nuxt.js"},
      ],
      github: "https://github.com/example/second-project",
      website: "https://web.com/example/second-project",
    },
  ];
};

describe("Projects Component", () => {
  beforeEach(() => fetchMock.enableMocks());
  afterEach(() => fetchMock.resetMocks());
  
  it("renders the section title", () => {
    render(<Projects/>);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
  
  it('applies the "transition-colors-custom" class to the section', () => {
    render(<Projects/>);
    const sectionElement = screen.getByTestId('projects-section');
    expect(sectionElement).toHaveClass('transition-colors-custom');
  });
  
  it('fetches and renders all projects', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(generateMockProjects()));
    
    render(<Projects/>);
    
    await waitFor(() => {
      expect(screen.getByText('First Project - Task Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Second Project - Collaboration Hub')).toBeInTheDocument();
    });
  });
  
  it('renders technologies for each project', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(generateMockProjects()));
    
    render(<Projects/>);
    
    await waitFor(() => {
      expect(screen.getByTitle('React')).toBeInTheDocument();
      expect(screen.getByTitle('Next.js')).toBeInTheDocument();
    });
  });
  
  it('renders GitHub and Website links for each project', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(generateMockProjects()));
    
    render(<Projects/>);
    
    await waitFor(() => {
      const links = screen.getAllByRole('link');
      
      expect(links[0]).toHaveAttribute('href', 'https://github.com/example/first-project');
      expect(links[1]).toHaveAttribute('href', 'https://web.com/example/first-project');
    });
  });
  
  it("displays the loading state while loading projects", async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]))
    
    render(<Projects/>);
    
    expect(screen.getByText(/loading projects.../i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.queryByText(/loading projects.../i)).not.toBeInTheDocument();
    });
  });
  
  it('shows error message when fetching projects fails', async () => {
    fetchMock.mockRejectOnce(new Error("Failed to fetch projects"));
    
    render(<Projects/>);
    
    await waitFor(() =>
      expect(screen.getByText(/failed to fetch projects/i)).toBeInTheDocument()
    );
  });
  
  it("renders the featured project if it exists", async () => {
    const mockProjects = generateMockProjects();
    mockProjects.push({
      key: "Nexus",
      title: "Featured Project",
      description: "This is a featured project.",
      image: "/featured-image.png",
      technologies: [{icon: "SiReact", name: "React"}],
      github: "https://github.com/example/featured-project",
      website: "https://web.com/example/featured-project",
    });
    fetchMock.mockResponseOnce(JSON.stringify(mockProjects));
    
    render(<Projects/>);
    
    await waitFor(() => {
      expect(screen.getByText("Featured Project")).toBeInTheDocument();
      expect(screen.getByText("This is a featured project.")).toBeInTheDocument();
    });
  });
  
  it("handles empty projects gracefully", async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));
    
    render(<Projects/>);
    
    await waitFor(() => {
      expect(screen.queryByText(/loading projects.../i)).not.toBeInTheDocument();
      expect(screen.queryByTestId("project-card")).not.toBeInTheDocument();
    });
  });
  
  it("renders projects without technologies", async () => {
    const mockProjects = generateMockProjects();
    mockProjects[0].technologies = [];
    fetchMock.mockResponseOnce(JSON.stringify(mockProjects));
    
    render(<Projects/>);
    
    await waitFor(() => {
      expect(screen.getByText('First Project - Task Dashboard')).toBeInTheDocument();
      expect(screen.queryByTitle('React')).not.toBeInTheDocument(); // No tooltip for missing tech
    });
  });
  
  it("displays loading state while fetching projects", async () => {
    fetchMock.mockResponse(() => new Promise(() => {
    }));
    
    render(<Projects/>);
    
    expect(screen.getByText(/loading projects.../i)).toBeInTheDocument();
  });
  
  it("renders project cards and technology icons as accessible elements", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(generateMockProjects()));
    
    render(<Projects/>);
    
    await waitFor(() => {
      const projectTitles = screen.getAllByRole('heading', {level: 3});
      expect(projectTitles.length).toBe(2)
      
      const techIcons = screen.getAllByRole('img');
      expect(techIcons.length).toBeGreaterThan(0)
    });
  });
  
});
