import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactInfo from './ContactInfo';

describe('ContactInfo Component', () => {
  it('renders contact information from local data', () => {
    render(<ContactInfo/>);

    const contactItems = screen.getAllByTestId('contact-info-item');
    expect(contactItems).toHaveLength(2);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('pnsegantine@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('England - UK')).toBeInTheDocument();
    expect(screen.queryByTestId('no-contact-info')).not.toBeInTheDocument();
  });
});
