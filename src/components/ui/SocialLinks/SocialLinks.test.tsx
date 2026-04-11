import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';

describe('SocialLinks Component', () => {
  it('renders without crashing', () => {
    render(<SocialLinks/>);
    expect(screen.getByTestId('social-links')).toBeInTheDocument();
  });

  it('renders social links from local data', () => {
    render(<SocialLinks/>);

    expect(screen.getByLabelText(/Visit GitHub profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Visit LinkedIn profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Visit GitHub profile/i)).toHaveAttribute('href', 'https://github.com/patriciasegantine');
    expect(screen.getByLabelText(/Visit LinkedIn profile/i)).toHaveAttribute('href', 'https://linkedin.com/in/patriciasegantine');
  });

  it('handles `showLabel` prop correctly', () => {
    render(<SocialLinks showLabel={true}/>);

    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
  });
});
