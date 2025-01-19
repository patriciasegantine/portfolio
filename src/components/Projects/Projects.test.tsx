import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Projects from "@/components/Projects/Projects";

const generateMockProjects = () => {
  return [
    {
      key: "FirstProject",
      title: "First Project - Task Dashboard",
      description: "First Project is a web platform...",
      image: null,
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
      image: null,
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
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  
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
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Next.js')).toBeInTheDocument();
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
  
  it("displays the loading state while loading projects", () => {
    fetchMock.mockResponseOnce(() => new Promise(() => {
    }));
    
    render(<Projects/>);
    
    expect(screen.getByText("Loading projects...")).toBeInTheDocument();
  });
  
  it('shows error message when fetching projects fails', async () => {
    fetchMock.mockRejectOnce(new Error("Failed to fetch projects"));
    
    render(<Projects/>);
    
    await waitFor(() =>
      expect(screen.getByText(/failed to fetch projects/i)).toBeInTheDocument()
    );
  });
});
