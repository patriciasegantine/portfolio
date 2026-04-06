import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";

const mockProject = {
  slug: 'test-project',
  image: '/test-image.png',
  title: 'Test Project',
  description: 'This is a test project description.',
  stackPreview: ['React'],
  github: 'https://github.com/test',
  liveDemo: 'https://test.com',
};

describe('ProjectCard Component', () => {
  it('renders core content and details link', () => {
    render(<ProjectCard {...mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description.')).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'View Details'})).toHaveAttribute('href', '/projects/test-project');
  });
  
  it('renders optional links when provided', () => {
    render(<ProjectCard {...mockProject} />);
    expect(screen.getByRole('link', {name: 'GitHub'})).toHaveAttribute('href', 'https://github.com/test');
    expect(screen.getByRole('link', {name: 'Live Demo'})).toHaveAttribute('href', 'https://test.com');
  });
  
  it('does not render optional links when not provided', () => {
    render(<ProjectCard {...mockProject} github={undefined} liveDemo={undefined} />);
    expect(screen.queryByRole('link', {name: 'GitHub'})).not.toBeInTheDocument();
    expect(screen.queryByRole('link', {name: 'Live Demo'})).not.toBeInTheDocument();
  });

  it('renders stack preview and handles empty list', () => {
    const {rerender} = render(<ProjectCard {...mockProject} />);
    expect(screen.getByLabelText('React')).toBeInTheDocument();

    rerender(<ProjectCard {...mockProject} stackPreview={[]} />);
    expect(screen.queryByLabelText('React')).not.toBeInTheDocument();
  });

  it('renders image placeholder when image is missing', () => {
    render(<ProjectCard {...mockProject} image={null} />);
    expect(screen.getByTestId('image-placeholder')).toBeInTheDocument();
  });
});
