import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactInfo from './ContactInfo';
import fetchMock from "jest-fetch-mock";

const generateMockContactInfo = () => [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'example@example.com',
    href: 'mailto:example@example.com',
  },
  {
    icon: 'MapPin',
    label: 'Location',
    value: 'England',
    href: 'https://maps.example.com',
  },
];

describe('ContactInfo Component', () => {
  beforeEach(() => fetchMock.enableMocks());
  
  afterEach(() => fetchMock.resetMocks());
  
  it('renders loading state initially', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(generateMockContactInfo()));
    
    render(<ContactInfo/>);
    
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.queryByText(/Loading.../)).not.toBeInTheDocument();
    });
  });
  
  it('renders error message when fetch fails', async () => {
    fetchMock.mockRejectedValueOnce(new Error('Failed to fetch'));
    
    render(<ContactInfo/>);
    
    await waitFor(() => {
      const errorElement = screen.getByTestId('error');
      expect(errorElement).toHaveTextContent(/Failed to fetch/);
    });
  });
  
  it('renders contact information when fetch succeeds', async () => {
    const mockData = generateMockContactInfo();
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    
    render(<ContactInfo/>);
    
    await waitFor(() => {
      const contactItems = screen.getAllByTestId('contact-info-item');
      expect(contactItems.length).toBe(mockData.length);
    });
    
    mockData.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(item.value)).toBeInTheDocument();
    });
  });
  
  it('renders no items when API returns an empty array', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));
    
    render(<ContactInfo/>);
    
    await waitFor(() => {
      expect(screen.queryAllByTestId('contact-info-item')).toHaveLength(0);
      expect(screen.getByText(/No contact information available/i)).toBeInTheDocument();
    });
    
  });
});
