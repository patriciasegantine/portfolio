import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/section/Hero/Hero";

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
    expect(screen.getByTestId("hero-intro")).toHaveTextContent("Hi there, I'm");
    expect(screen.getByRole("heading", {level: 1})).toHaveTextContent("Patricia Segantine");
    expect(screen.getByText("Frontend Engineer")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Building reliable applications for scalable SaaS products, with a strong focus on performance, accessibility, and maintainable front-end systems."
      )
    ).toBeInTheDocument();
  });
});
