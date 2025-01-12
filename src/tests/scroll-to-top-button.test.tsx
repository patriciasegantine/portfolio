import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ScrollToTopButton from '../components/ScrollToTopButton'

describe('ScrollToTopButton', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn()
  })
  
  const setScrollY = (value: number) => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value,
    })
  }
  
  it('should not render the visible button when scroll position is less than 500px', () => {
    const {queryByRole} = render(<ScrollToTopButton/>)
    
    act(() => {
      setScrollY(100)
      window.dispatchEvent(new Event('scroll'))
    })
    
    const button = queryByRole('button', {name: /scroll to top/i})
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('opacity-0 pointer-events-none')
  })
  
  it('should render the visible button when scroll position exceeds 500px', () => {
    const {queryByRole} = render(<ScrollToTopButton/>)
    
    act(() => {
      setScrollY(501)
      window.dispatchEvent(new Event('scroll'))
    })
    
    const button = queryByRole('button', {name: /scroll to top/i})
    expect(button).toBeInTheDocument()
    expect(button).not.toHaveClass('opacity-0')
  })
  
  it('should scroll to the top when button is clicked', () => {
    const {getByRole} = render(<ScrollToTopButton/>)
    
    act(() => {
      setScrollY(501)
      window.dispatchEvent(new Event('scroll'))
    })
    
    const button = getByRole('button', {name: /scroll to top/i})
    fireEvent.click(button)
    expect(window.scrollTo).toHaveBeenCalledWith({top: 0, behavior: 'smooth'})
  })
})
