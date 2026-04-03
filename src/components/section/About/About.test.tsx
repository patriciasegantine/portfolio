import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from "@/components/section/About/About";
import fetchMock from "jest-fetch-mock";

describe('About Component', () => {
  beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.mockResponse(JSON.stringify({
      title: "About Me",
      paragraphs: ["Default paragraph"]
    }));
  });
  afterEach(() => fetchMock.resetMocks());

  it('renders section and fallback content', async () => {
    render(<About/>)
    const aboutSection = screen.getByTestId('about')
    expect(aboutSection).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.getByText('Default paragraph')).toBeInTheDocument();
    });
  })
  
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
