import React from "react";
import { render, screen } from "@testing-library/react";
import Hero, { HERO_CONTENT } from "@/components/section/Hero/Hero";

jest.mock("@/components/ui/HeroImage/HeroImage", () => {
  const MockHeroImage = () => <div data-testid="hero-image"/>;
  MockHeroImage.displayName = "MockHeroImage";
  return MockHeroImage;
});

jest.mock("@/components/ui/SocialLinks/SocialLinks", () => {
  const MockSocialLinks = () => <div data-testid="social-links"/>;
  MockSocialLinks.displayName = "MockSocialLinks";
  return {
    __esModule: true,
    default: MockSocialLinks,
  };
});

describe("Hero Component", () => {
  it("renders critical hero content and key UI blocks", () => {
    render(<Hero/>);

    expect(screen.getByTestId("hero-image")).toBeInTheDocument();
    expect(screen.getByTestId("social-links")).toBeInTheDocument();
    expect(screen.getByTestId("hero-intro")).toHaveTextContent("Senior Frontend Engineer");
    expect(screen.getByRole("heading", {level: 1})).toHaveTextContent("Patricia Segantine");
    expect(screen.getByText(/Interfaces that hold up/)).toBeInTheDocument();
    expect(screen.getByText(HERO_CONTENT.subtitle)).toBeInTheDocument();
    expect(screen.getByRole("link", {name: /Explore selected work/i})).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", {name: /More about me/i})).toHaveAttribute("href", "#about");
  });
});
