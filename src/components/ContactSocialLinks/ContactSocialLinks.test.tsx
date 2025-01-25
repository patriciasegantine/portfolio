import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactSocialLinks from './ContactSocialLinks';

describe('ContactSocialLinks', () => {
  it('renders the component with correct elements and styles', async () => {
    render(<ContactSocialLinks/>);
    
    await waitFor(() => {
      const socialLinks = screen.getByTestId('social-links');
      expect(socialLinks).toBeInTheDocument();
    })
  });
});
