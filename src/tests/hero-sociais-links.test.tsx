import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSocialLinks from "@/components/HeroSocialLinks";

describe('HeroSocialLinks Component', () => {
  it('renders all social links', () => {
    render(<HeroSocialLinks/>);
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
  
  it('ensures all links have the correct attributes', () => {
    render(<HeroSocialLinks/>);
    const links = screen.getAllByRole('link');
    
    links.forEach(link => {
      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
  
  it('renders icons for each social link', () => {
    render(<HeroSocialLinks/>);
    expect(screen.getByText('LinkedIn').previousSibling).toBeInTheDocument();
    expect(screen.getByText('GitHub').previousSibling).toBeInTheDocument();
  });
});
