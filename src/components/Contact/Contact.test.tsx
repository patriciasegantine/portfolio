import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from "@/components/Contact/Contact";

describe('Contact Component', () => {
  it('should render the Contact section', () => {
    render(<Contact/>);
    const contactSection = screen.getByTestId('contact');
    expect(contactSection).toBeInTheDocument();
  });
  
  it('should display the heading "Let\'s Connect"', () => {
    render(<Contact/>);
    const heading = screen.getByRole('heading', {name: /Let's Connect/i});
    expect(heading).toBeInTheDocument();
  });
  
  it('should display the descriptive text', () => {
    render(<Contact/>);
    const text = screen.getByText(/Feel free to reach out for collaborations or just a friendly hello/i);
    expect(text).toBeInTheDocument();
  });
});
