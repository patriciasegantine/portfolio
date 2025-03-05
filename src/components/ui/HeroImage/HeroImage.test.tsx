import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  it('should render the HeroImage component', () => {
    render(<HeroImage/>);
    const heroImage = screen.getByTestId('hero-image');
    expect(heroImage).toBeInTheDocument();
  });
  
  it('should render the profile image with correct attributes', () => {
    render(<HeroImage/>);
    const imgElement = screen.getByAltText('Profile picture of Patricia Segantine');
    expect(imgElement.getAttribute('src')).toContain('patriciasegantine.png');
  });
  
  it('should have a valid alt text for the image', () => {
    render(<HeroImage/>);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('alt');
    expect(imgElement.getAttribute('alt')?.length).toBeGreaterThan(0);
  });
});
