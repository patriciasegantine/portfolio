import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NavMenu from "@/components/NavMenu/NavMenu";

describe('NavMenu Component', () => {
  const mockOnItemClick = jest.fn();
  
  it('renders correctly', () => {
    render(<NavMenu isMobile={false} onItemClick={mockOnItemClick}/>);
    const menu = screen.getByTestId('nav-menu');
    expect(menu).toBeInTheDocument();
  });
  
  it('displays all navigation links', () => {
    render(<NavMenu isMobile={false} onItemClick={mockOnItemClick}/>);
    const navItems = screen.getAllByRole('link');
    expect(navItems.length).toBeGreaterThan(0);
  });
  
  it('triggers onItemClick callback when a nav item is clicked', () => {
    render(<NavMenu isMobile={false} onItemClick={mockOnItemClick}/>);
    const navItems = screen.getAllByRole('link');
    fireEvent.click(navItems[0]);
    expect(mockOnItemClick).toHaveBeenCalledTimes(1);
  });
  
  it('renders with mobile-specific styles when isMobile is true', () => {
    const {container} = render(<NavMenu isMobile={true} onItemClick={mockOnItemClick}/>);
    expect(container.firstChild).toHaveClass('mobile-menu-class');
  });
});
