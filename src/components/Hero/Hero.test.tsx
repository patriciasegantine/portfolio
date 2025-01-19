import { render, screen } from '@testing-library/react';
import Hero from "@/components/Hero/Hero";

jest.mock('../SociaisLinks/SocialLinks', () => () => <div data-testid="social-links"/>);

describe('Hero Component', () => {
  it('should render a section with the ID "home"', () => {
    render(<Hero/>);
    const section = screen.getByTestId('hero');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('id', 'home');
  });
  
  it('should render the SocialLinks component', () => {
    render(<Hero/>);
    expect(screen.getByTestId('social-links')).toBeInTheDocument();
  });
});
