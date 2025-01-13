import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from "@/components/About";

jest.mock('@/data/personalInterests', () => ({
  personalInterests: [
    {label: 'Coffee', icon: () => <span>Coffee Icon</span>},
    {label: 'Music', icon: () => <span>Music Icon</span>},
  ],
}));

describe('About Component', () => {
  it('renders the About component without crashing', () => {
    render(<About/>)
    const aboutSection = screen.getByTestId('about')
    expect(aboutSection).toBeInTheDocument()
  })
  
  it('renders section with the class transition-colors-custom', () => {
    render(<About/>);
    const aboutSection = screen.getByTestId('about');
    expect(aboutSection).toHaveClass('transition-colors-custom');
  });
  
  it('renders all personal interests dynamically from the mock array', () => {
    render(<About/>)
    
    const interests = ['Coffee', 'Music']
    interests.forEach((interest) => {
      expect(screen.getByText(interest)).toBeInTheDocument()
    })
  })
  
})
