import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import SocialLinks from './SocialLinks';

const generateMockSocialLinks = () => [
  {name: 'Github', href: 'https://github.com', icon: 'FaGithub'},
  {name: 'LinkedIn', href: 'https://linkedin.com', icon: 'FaLinkedin'},
];

describe('SocialLinks Component', () => {
  
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  
  it('renders without crashing', () => {
    render(<SocialLinks/>);
    expect(screen.getByTestId('social-links')).toBeInTheDocument();
  });
  
  it('displays a loading state while fetching data', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(generateMockSocialLinks()));
    render(<SocialLinks/>);
    
    expect(screen.getByText(/Loading social links.../i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.queryByText(/Loading social links.../i)).not.toBeInTheDocument();
    });
  });
  
  it('displays an error state when fetching fails', async () => {
    fetchMock.mockRejectOnce(new Error('Failed to fetch social links'));
    
    render(<SocialLinks/>);
    
    await waitFor(() => {
      const errorElement = screen.getByTestId('error');
      expect(errorElement).toHaveTextContent('Failed to fetch social links');
    });
  });
  
  it('renders social links when the API call succeeds', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(generateMockSocialLinks()));
    
    render(<SocialLinks/>);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/Visit Github profile/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Visit LinkedIn profile/i)).toBeInTheDocument();
    });
    
    expect(screen.getByLabelText(/Visit Github profile/i)).toHaveAttribute('href', 'https://github.com');
    expect(screen.getByLabelText(/Visit LinkedIn profile/i)).toHaveAttribute('href', 'https://linkedin.com');
  });
  
  it('handles `showLabel` prop correctly', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(generateMockSocialLinks()));
    
    render(<SocialLinks showLabel={true}/>);
    
    await waitFor(() => {
      expect(screen.getByText(/Github/i)).toBeInTheDocument();
      expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
    });
  });
  
  it('uses the default icon for unknown icon types', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {name: 'Unknown', href: 'https://example.com', icon: 'UnknownIcon'},
      ])
    );
    
    render(<SocialLinks/>);
    
    await waitFor(() => {
      expect(
        screen.getByLabelText(/Visit Unknown profile/i)
      ).toBeInTheDocument();
    });
    
    expect(screen.getByTestId('social-links').querySelector('svg')).toBeTruthy();
  });
});
