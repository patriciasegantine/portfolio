import { render, screen } from '@testing-library/react';
import Hero from "@/components/Hero/Hero";

jest.mock('@/components/ui/SociaisLinks/SocialLinks', () => {
  const MockSocialLinks = () => <div data-testid="social-links"/>;
  MockSocialLinks.displayName = 'MockSocialLinks';
  return MockSocialLinks;
});

describe('Hero Component', () => {
  it('should render a section with the ID "home"', () => {
    render(<Hero/>);
    const section = screen.getByTestId('home');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('id', 'home');
  });
  
  it('should render the SocialLinks component', () => {
    render(<Hero/>);
    expect(screen.getByTestId('social-links')).toBeInTheDocument();
  });
});
