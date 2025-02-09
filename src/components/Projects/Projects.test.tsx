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
  
  it("fetches and renders all projects", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(generateMockProjects()));
    
    render(<Projects/>);
    
    await waitFor(() => {
      expect(screen.getByText("First Project - Task Dashboard")).toBeInTheDocument();
      expect(screen.getByText("Second Project - Collaboration Hub")).toBeInTheDocument();
    });
  });
  
  it("renders technologies for each project", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(generateMockProjects()));
    
    render(<Projects/>);
    
    await waitFor(() => {
      expect(screen.getByTitle("React")).toBeInTheDocument();
      expect(screen.getByTitle("Next.js")).toBeInTheDocument();
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
