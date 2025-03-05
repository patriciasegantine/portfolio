import { act, fireEvent, render, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import MobileMenu from '@/components/ui/MobileMenu/MobileMenu';
import { PanInfo } from "framer-motion";

interface MotionDivProps extends PropsWithChildren {
  onPanEnd?: (event: unknown, info: PanInfo) => void;
  
  [key: string]: unknown;
}

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({children, onPanEnd, ...props}: MotionDivProps) => (
      <div
        {...props}
        data-testid="motion-div"
        onPointerUp={() => {
          const mockEvent = {
            type: 'pointerup',
            clientX: 0,
            clientY: 0,
            preventDefault: () => {
            },
            stopPropagation: () => {
            }
          };
          
          const mockPanInfo: PanInfo = {
            point: {x: 0, y: 0},
            delta: {x: 0, y: 0},
            offset: {x: 0, y: -60},
            velocity: {x: 0, y: 0}
          };
          
          onPanEnd?.(mockEvent, mockPanInfo);
        }}
      >
        {children}
      </div>
    ),
  },
  AnimatePresence: ({children}: PropsWithChildren) => <>{children}</>,
}));

const navItemsMock = [
  {href: '/home', label: 'Home'},
  {href: '/about', label: 'About'},
  {href: '/contact', label: 'Contact'},
];
const mockSetIsMobileMenuOpen = jest.fn();

describe('MobileMenu Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  
  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
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
  
  it('calls setIsMobileMenuOpen(false) when the close button is clicked', () => {
    render(
      <MobileMenu
        navItems={navItemsMock}
        isMobileMenuOpen={true}
        setIsMobileMenuOpen={mockSetIsMobileMenuOpen}
      />
    );
    const closeButton = screen.getByRole('button', {name: /close menu/i});
    
    act(() => {
      fireEvent.click(closeButton);
    });
    
    expect(mockSetIsMobileMenuOpen).toHaveBeenCalledTimes(1);
    expect(mockSetIsMobileMenuOpen).toHaveBeenCalledWith(false);
  });
  
  it('handles swipe up gesture correctly', () => {
    render(
      <MobileMenu
        navItems={navItemsMock}
        isMobileMenuOpen={true}
        setIsMobileMenuOpen={mockSetIsMobileMenuOpen}
      />
    );
    
    const menuElement = screen.getByTestId('motion-div');
    
    act(() => {
      fireEvent.pointerUp(menuElement);
    });
    
    expect(mockSetIsMobileMenuOpen).toHaveBeenCalledWith(false);
  });
  
  it('handles quick close on link click', async () => {
    render(
      <MobileMenu
        navItems={navItemsMock}
        isMobileMenuOpen={true}
        setIsMobileMenuOpen={mockSetIsMobileMenuOpen}
      />
    );
    
    const link = screen.getByText(navItemsMock[0].label);
    
    await act(async () => {
      fireEvent.click(link);
      jest.advanceTimersByTime(200);
    });
    
    expect(mockSetIsMobileMenuOpen).toHaveBeenCalledWith(false);
  });
  
  it('renders the chevron up icon', () => {
    render(
      <MobileMenu
        navItems={navItemsMock}
        isMobileMenuOpen={true}
        setIsMobileMenuOpen={mockSetIsMobileMenuOpen}
      />
    );
    
    const chevronIcon = screen.getByTestId('motion-div').querySelector('.animate-bounce');
    expect(chevronIcon).toBeInTheDocument();
  });
  
  it('applies quick animation when closing via link click', async () => {
    render(
      <MobileMenu
        navItems={navItemsMock}
        isMobileMenuOpen={true}
        setIsMobileMenuOpen={mockSetIsMobileMenuOpen}
      />
    );
    
    const link = screen.getByText(navItemsMock[0].label);
    const menuElement = screen.getByTestId('motion-div');
    
    expect(menuElement).toBeInTheDocument();
    
    await act(async () => {
      fireEvent.click(link);
      jest.advanceTimersByTime(200);
    });
    
    expect(mockSetIsMobileMenuOpen).toHaveBeenCalledWith(false);
  });
});
