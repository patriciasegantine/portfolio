import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '@/components/ui/Header/Header';
import '@testing-library/jest-dom';
import { useTheme } from 'next-themes';

jest.mock('@/components/ui/ToggleThemeButton/ToggleThemeButton', () => {
  const MockToggleThemeButton = () => (
    <div data-testid="toggle-theme">ToggleTheme</div>
  );
  MockToggleThemeButton.displayName = 'MockToggleThemeButton';
  return MockToggleThemeButton;
});

jest.mock('@/components/ui/NavMenu/NavMenu', () => {
  const MockNavMenu = () => (
    <div data-testid="nav-menu">NavMenu</div>
  );
  MockNavMenu.displayName = 'MockNavMenu';
  return MockNavMenu;
});

jest.mock('@/components/ui/MobileMenu/MobileMenu', () => {
  const MockMobileMenu = ({isMobileMenuOpen}: { isMobileMenuOpen: boolean }) => (
    <div data-testid="mobile-menu">
      {isMobileMenuOpen ? 'MobileMenu Open' : 'MobileMenu Closed'}
    </div>
  );
  MockMobileMenu.displayName = 'MockMobileMenu';
  return {
    __esModule: true,
    default: MockMobileMenu,
  };
});

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('Header Component', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({resolvedTheme: 'light'});
  });
  
  it('renders the header with all elements', () => {
    render(<Header/>);
    
    expect(screen.getByText('PS')).toBeInTheDocument();
    
    const navMenu = screen.getByTestId('nav-menu');
    const toggleThemeButtons = screen.getAllByTestId('toggle-theme');
    
    expect(navMenu).toBeInTheDocument();
    expect(toggleThemeButtons).toHaveLength(2);
    
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveClass('text-secondary');
  });
  
  it('opens and closes the mobile menu', () => {
    render(<Header/>);
    
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeInTheDocument();
    
    const mobileMenu = screen.getByTestId('mobile-menu');
    expect(mobileMenu).toHaveTextContent('MobileMenu Closed');
    
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveTextContent('MobileMenu Open');
  });
});
