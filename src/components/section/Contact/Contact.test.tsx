import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '@/components/section/Contact/Contact';

jest.mock('@/components/ui/ContactForm/ContactForm', () => () => <div data-testid="mock-contact-form" />);
jest.mock('@/components/ui/ContactInfo/ContactInfo', () => () => <div data-testid="mock-contact-info" />);
jest.mock('@/components/ui/ContactSocialLinks/ContactSocialLinks', () => () => <div data-testid="mock-contact-social-links" />);

describe('Contact Component', () => {
  it('should render the Contact section', () => {
    render(<Contact/>);
    const contactSection = screen.getByTestId('contact');
    expect(contactSection).toBeInTheDocument();
  });
  
  it('should display the heading "Let\'s Contact"', () => {
    render(<Contact/>);
    const heading = screen.getByRole('heading', {name: /Let's Contact/i});
    expect(heading).toBeInTheDocument();
  });
  
  it('should display the descriptive text', () => {
    render(<Contact/>);
    const text = screen.getByText(/Feel free to reach out for collaborations or just a friendly hello/i);
    expect(text).toBeInTheDocument();
  });
});
