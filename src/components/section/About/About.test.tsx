import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from "@/components/section/About/About";
import fetchMock from "jest-fetch-mock";

describe('About Component', () => {
  beforeEach(() => fetchMock.enableMocks());
  afterEach(() => fetchMock.resetMocks());

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
  
  it('renders external about content from API', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({
      title: "About Me",
      paragraphs: ["Paragraph one", "Paragraph two"]
    }));

    render(<About/>)

    await waitFor(() => {
      expect(screen.getByText('Paragraph one')).toBeInTheDocument();
      expect(screen.getByText('Paragraph two')).toBeInTheDocument();
    });
  })

})
