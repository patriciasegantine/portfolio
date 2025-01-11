import { fireEvent, render, screen } from '@testing-library/react';
import MobileMenu from '@/components/MobileMenu';

const navItemsMock = [
  {href: '/home', label: 'Home'},
  {href: '/about', label: 'About'},
  {href: '/contact', label: 'Contact'},
];
const mockSetIsMobileMenuOpen = jest.fn();

describe('MobileMenu Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('renders nothing if isMobileMenuOpen is false', () => {
    const {container} = render(
      <MobileMenu
        navItems={navItemsMock}
        isMobileMenuOpen={false}
        setIsMobileMenuOpen={mockSetIsMobileMenuOpen}
      />
    );
    expect(container.firstChild).toBeNull();
  });
  
  it('renders the menu correctly when isMobileMenuOpen is true', () => {
    render(
      <MobileMenu
        navItems={navItemsMock}
        isMobileMenuOpen={true}
        setIsMobileMenuOpen={mockSetIsMobileMenuOpen}
      />
    );
    
    navItemsMock.forEach(({label, href}) => {
      const linkElement = screen.getByText(label);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', href);
    });
  });
  
  it('calls setIsMobileMenuOpen(false) when a link is clicked', () => {
    render(
      <MobileMenu
        navItems={navItemsMock}
        isMobileMenuOpen={true}
        setIsMobileMenuOpen={mockSetIsMobileMenuOpen}
      />
    );
    const homeLink = screen.getByText('Home');
    
    fireEvent.click(homeLink);
    expect(mockSetIsMobileMenuOpen).toHaveBeenCalledTimes(1);
    expect(mockSetIsMobileMenuOpen).toHaveBeenCalledWith(false);
  });
  
  it('calls setIsMobileMenuOpen(false) when the close button is clicked', () => {
    render(
      <MobileMenu
        navItems={navItemsMock}
        isMobileMenuOpen={true}
        setIsMobileMenuOpen={mockSetIsMobileMenuOpen}
      />
    );
    const closeButton = screen.getByRole('button', {name: /close menu/i});
    
    fireEvent.click(closeButton);
    expect(mockSetIsMobileMenuOpen).toHaveBeenCalledTimes(1);
    expect(mockSetIsMobileMenuOpen).toHaveBeenCalledWith(false);
  });
});
