import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '@/section/Contact/Contact';

describe('Contact Component', () => {
  it('should render the Contact section', async () => {
    await waitFor(() => {
      render(<Contact/>);
      const contactSection = screen.getByTestId('contact');
      expect(contactSection).toBeInTheDocument();
    });
  });
  
  it('should display the heading "Let\'s Connect"', async () => {
    await waitFor(() => {
      render(<Contact/>);
      const heading = screen.getByRole('heading', {name: /Let's Connect/i});
      expect(heading).toBeInTheDocument();
    });
  });
  
  it('should display the descriptive text', async () => {
    await waitFor(() => {
      render(<Contact/>);
      const text = screen.getByText(/Feel free to reach out for collaborations or just a friendly hello/i);
      expect(text).toBeInTheDocument();
    });
  });
});
