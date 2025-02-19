import { render, screen } from '@testing-library/react';
import Hero from "@/section/Hero/Hero";

jest.mock('../../components/SociaisLinks/SocialLinks', () => {
  const MockSocialLinks = () => <div data-testid="social-links"/>;
  MockSocialLinks.displayName = 'MockSocialLinks';
  return MockSocialLinks;
});

describe('Hero Component', () => {
  it('should render a section with the ID "home"', () => {
    render(<Hero/>);
    const section = screen.getByTestId('hero');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('id', 'hero');
  });
  
  it('should render the SocialLinks component', () => {
    render(<Hero/>);
    expect(screen.getByTestId('social-links')).toBeInTheDocument();
  });
});
