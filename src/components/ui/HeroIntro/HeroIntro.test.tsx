import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HeroIntro from './HeroIntro';
import fetchMock from "jest-fetch-mock";

describe('HeroIntro Component', () => {
  beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.mockResponse(JSON.stringify({
      title: 'Frontend Engineer',
      subtitle: 'Default subtitle'
    }));
  });
  afterEach(() => fetchMock.resetMocks());

  it('should render the introduction text', async () => {
    render(<HeroIntro/>);
    const introText = screen.getByTestId('hero-intro');
    expect(introText).toBeInTheDocument();
    expect(introText).toHaveTextContent("Hi there, I'm");
    await waitFor(() => {
      expect(screen.getByText('Default subtitle')).toBeInTheDocument();
    });
  });
  
  it('should render the main heading with the name', async () => {
    render(<HeroIntro/>);
    const heading = screen.getByRole('heading', {level: 1});
    expect(heading).toHaveTextContent('Patricia Segantine');
    await waitFor(() => {
      expect(screen.getByText('Default subtitle')).toBeInTheDocument();
    });
  });
  
  it('should render title and subtitle from API', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({
      title: 'Frontend Engineer',
      subtitle: 'Building reliable applications for scalable SaaS products.'
    }));

    render(<HeroIntro/>);

    await waitFor(() => {
      expect(screen.getByText('Frontend Engineer')).toBeInTheDocument();
      expect(
        screen.getByText('Building reliable applications for scalable SaaS products.')
      ).toBeInTheDocument();
    });
  });
});
