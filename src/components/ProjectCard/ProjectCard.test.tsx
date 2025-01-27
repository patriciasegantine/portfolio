import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const mockProject = {
  image: '/test-image.png',
  title: 'Test Project',
  description: 'This is a test project description.',
  technologies: [{icon: "FaReact", name: 'React'}],
  github: 'https://github.com/test',
  website: 'https://test.com',
};

describe('ProjectCard Component', () => {
  it('should render the project title', () => {
    render(<ProjectCard {...mockProject} />);
    const title = screen.getByText('Test Project');
    expect(title).toBeInTheDocument();
  });
  
  it('should render the project description', () => {
    render(<ProjectCard {...mockProject} />);
    const description = screen.getByText('This is a test project description.');
    expect(description).toBeInTheDocument();
  });
  
  it('should render the GitHub link', () => {
    render(<ProjectCard {...mockProject} />);
    const githubLink = screen.getByRole('link', {name: 'GitHub'});
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test');
  });
  
  it('should render the website link', () => {
    render(<ProjectCard {...mockProject} />);
    const websiteLink = screen.getByRole('link', {name: 'Visit Site'});
    expect(websiteLink).toHaveAttribute('href', 'https://test.com');
  });
  
  it('should render the technology icons with correct titles', () => {
    render(<ProjectCard {...mockProject} />);
    
    const techIcon = screen.getByTitle('React');
    expect(techIcon).toBeInTheDocument();
  });
  
  it('should render the image if provided', () => {
    render(<ProjectCard {...mockProject} />);
    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
  });
  
  it('should render the placeholder if no image is provided', () => {
    const projectWithoutImage = {...mockProject, image: undefined};
    render(<ProjectCard {...projectWithoutImage} />);
    const placeholder = screen.getByTestId('image-placeholder');
    expect(placeholder).toBeInTheDocument();
  });
  
  it('should apply the correct classes for styling', () => {
    render(<ProjectCard {...mockProject} />);
    const card = screen.getByTestId('project-card');
    expect(card).toHaveClass('group relative rounded-xl overflow-hidden transition-colors-custom');
  });
});
