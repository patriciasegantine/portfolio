import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ScrollToTopButton from './ScrollToTopButton'

describe('ScrollToTopButton', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn()
    
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0
    })
  })
  
  const setScrollY = (value: number) => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value,
    })
  }
  
  it('should render button with correct visibility classes when scroll position is less than 500px', async () => {
    const {getByTestId} = render(<ScrollToTopButton/>)
    
    await act(async () => {
      setScrollY(100)
      window.dispatchEvent(new Event('scroll'))
    })
    
    const button = getByTestId('scrollToTop')
    expect(button).toHaveClass('opacity-0')
    expect(button).toHaveClass('pointer-events-none')
  })
  
  it('should render the visible button when scroll position exceeds 500px', async () => {
    const {getByTestId} = render(<ScrollToTopButton/>)
    
    await act(async () => {
      setScrollY(501)
      window.dispatchEvent(new Event('scroll'))
    })
    
    const button = getByTestId('scrollToTop')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('opacity-100')
    expect(button).not.toHaveClass('opacity-0')
    expect(button).not.toHaveClass('pointer-events-none')
  })
  
  it('should scroll to the top when button is clicked', async () => {
    const {getByTestId} = render(<ScrollToTopButton/>)
    
    await act(async () => {
      setScrollY(501)
      window.dispatchEvent(new Event('scroll'))
    })
    
    const button = getByTestId('scrollToTop')
    fireEvent.click(button)
    
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    })
  })
})
