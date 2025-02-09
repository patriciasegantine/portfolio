import React from 'react'
import { render, screen } from '@testing-library/react'
import Skills from "@/components/Skills/Skills";

jest.mock('@/data/skills', () => ({
  skills: [
    {name: 'React', icon: () => <span>React Icon</span>},
    {name: 'TypeScript', icon: () => <span>TypeScript Icon</span>},
    {name: 'Tailwind', icon: () => <span>Tailwind Icon</span>},
  ],
}));

describe('Skills Component', () => {
  it('renders section with the class transition-colors-custom', () => {
    render(<Skills/>)
    
    const skillsSection = screen.getByTestId('skills')
    expect(skillsSection).toHaveClass('transition-colors-custom')
  })
  
  it('renders all skills dynamically from the mock array', () => {
    render(<Skills/>);
    
    const skills = ['React', 'TypeScript', 'Tailwind'];
    
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
