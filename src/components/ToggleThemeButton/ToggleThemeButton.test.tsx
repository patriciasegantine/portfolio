import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useTheme } from 'next-themes';
import ToggleThemeButton from './ToggleThemeButton';

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('ToggleThemeButton', () => {
  let mockSetTheme: jest.Mock;
  
  beforeEach(() => {
    mockSetTheme = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({
      setTheme: mockSetTheme,
      resolvedTheme: 'light',
      systemTheme: 'system',
    });
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should render the button with the Moon icon (light mode)', () => {
    render(<ToggleThemeButton/>);
    
    const button = screen.getByTestId('toggle-theme-button');
    const moonIcon = screen.getByTestId('moon-icon');
    
    expect(button).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Activate dark mode');
  });
  
  it('should render the button with the Sun icon (dark mode)', () => {
    (useTheme as jest.Mock).mockReturnValueOnce({
      setTheme: mockSetTheme,
      resolvedTheme: 'dark',
      systemTheme: 'dark',
    });
    
    render(<ToggleThemeButton/>);
    
    const button = screen.getByTestId('toggle-theme-button');
    const sunIcon = screen.getByTestId('sun-icon');
    
    expect(button).toBeInTheDocument();
    expect(sunIcon).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Activate light mode');
  });
  
  it('should default to the system theme (dark mode)', () => {
    (useTheme as jest.Mock).mockReturnValueOnce({
      setTheme: mockSetTheme,
      resolvedTheme: 'system',
      systemTheme: 'dark',
    });
    
    render(<ToggleThemeButton/>);
    
    const button = screen.getByTestId('toggle-theme-button');
    const sunIcon = screen.getByTestId('sun-icon');
    
    expect(button).toBeInTheDocument();
    expect(sunIcon).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Activate light mode');
  });
  
  it('should switch to dark mode when the current theme is light', () => {
    render(<ToggleThemeButton/>);
    
    const button = screen.getByTestId('toggle-theme-button');
    
    fireEvent.click(button);
    
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });
  
  it('should switch to light mode when the current theme is dark', () => {
    (useTheme as jest.Mock).mockReturnValueOnce({
      setTheme: mockSetTheme,
      resolvedTheme: 'dark',
      systemTheme: 'dark',
    });
    
    render(<ToggleThemeButton/>);
    
    const button = screen.getByTestId('toggle-theme-button');
    
    fireEvent.click(button);
    
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });
});
