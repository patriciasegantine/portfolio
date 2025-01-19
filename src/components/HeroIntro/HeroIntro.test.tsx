import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroIntro from './HeroIntro';

describe('HeroIntro Component', () => {
  it('should render the introduction text', () => {
    render(<HeroIntro/>);
    const introText = screen.getByTestId('hero-intro');
    expect(introText).toBeInTheDocument();
    expect(introText).toHaveTextContent("Hi there, I'm");
  });
  
  it('should render the main heading with the name', () => {
    render(<HeroIntro/>);
    const heading = screen.getByRole('heading', {level: 1});
    expect(heading).toHaveTextContent('Patricia Segantine');
  });
  
  it('should render the profession description and summary', () => {
    render(<HeroIntro/>);
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(
      screen.getByText(/Building modern front-end applications with React, Next\.js, and TypeScript/i)
    ).toBeInTheDocument();
  });
});
