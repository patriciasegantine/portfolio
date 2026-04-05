import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import Hero from "@/components/section/Hero/Hero";

jest.mock("@/components/ui/HeroImage/HeroImage", () => {
  const MockHeroImage = () => <div data-testid="hero-image"/>;
  MockHeroImage.displayName = "MockHeroImage";
  return MockHeroImage;
});

jest.mock("@/components/ui/SociaisLinks/SocialLinks", () => {
  const MockSocialLinks = () => <div data-testid="social-links"/>;
  MockSocialLinks.displayName = "MockSocialLinks";
  return {
    __esModule: true,
    default: MockSocialLinks,
  };
});

describe("Hero Component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("renders static hero structure", () => {
    fetchMock.mockImplementationOnce(() => new Promise(() => {
    }));

    render(<Hero/>);

    expect(screen.getByTestId("hero-image")).toBeInTheDocument();
    expect(screen.getByTestId("social-links")).toBeInTheDocument();
    expect(screen.getByTestId("hero-intro")).toHaveTextContent("Hi there, I'm");
    expect(screen.getByRole("heading", {level: 1})).toHaveTextContent("Patricia Segantine");
  });

  it("shows loading state while fetching hero content", () => {
    fetchMock.mockImplementationOnce(() => new Promise(() => {
    }));

    render(<Hero/>);

    expect(screen.getByText(/loading hero content.../i)).toBeInTheDocument();
  });

  it("renders title and subtitle from API when request succeeds", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({
      title: "Frontend Engineer",
      subtitle: "Building reliable applications for scalable SaaS products.",
    }));

    render(<Hero/>);

    await waitFor(() => {
      expect(screen.getByText("Frontend Engineer")).toBeInTheDocument();
      expect(
        screen.getByText("Building reliable applications for scalable SaaS products.")
      ).toBeInTheDocument();
    });
  });

  it("renders error message when request fails", async () => {
    fetchMock.mockRejectOnce(new Error("Failed to fetch hero content"));

    render(<Hero/>);

    await waitFor(() => {
      expect(screen.getByTestId("error")).toHaveTextContent("Failed to fetch hero content");
    });
  });
});
