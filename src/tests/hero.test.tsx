import { render, screen } from '@testing-library/react';
import Hero from "@/components/Hero";

describe('Hero Component', () => {
  it('renders section with the class transition-colors-custom', () => {
    render(<Hero/>);
    const section = screen.getByTestId('hero');
    expect(section).toHaveClass('transition-colors-custom');
  });
  
  it('renders HeroImage component', () => {
    render(<Hero/>);
    expect(screen.getByTestId('hero-image')).toBeInTheDocument();
  });
  
  it('renders HeroIntro component', () => {
    render(<Hero/>);
    expect(screen.getByTestId('hero-intro')).toBeInTheDocument();
  });
  
  it('renders HeroSocialLinks component', () => {
    render(<Hero/>);
    expect(screen.getByTestId('hero-social-links')).toBeInTheDocument();
  });
});
