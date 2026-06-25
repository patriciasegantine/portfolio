import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from "@/components/section/About/About";
import { ABOUT_ME } from "@/data/aboutMe";

describe('About Component', () => {
  it('renders about section', () => {
    render(<About/>)
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
  })

  it('renders all local about paragraphs', () => {
    render(<About/>)

    ABOUT_ME.forEach(({text}) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  })
})
