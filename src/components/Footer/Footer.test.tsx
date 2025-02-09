import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer/Footer";

describe("Footer component", () => {
  test("renders main text", () => {
    render(<Footer/>);
    const copyrightText = screen.getByText(/© \d{4} All rights reserved/i);
    const createdByText = screen.getByText(/Developed with/i);
    const authorName = screen.getByText(/Patricia Segantine/i);
    
    expect(copyrightText).toBeInTheDocument();
    expect(createdByText).toBeInTheDocument();
    expect(authorName).toBeInTheDocument();
  });
  
  test("renders technology icons", () => {
    render(<Footer/>);
    const icons = screen.getAllByRole("img", {hidden: true});
    expect(icons.length).toBeGreaterThan(0);
  });
  
  test("renders a GitHub repository link", () => {
    render(<Footer/>);
    const githubLink = screen.getByRole("link", {name: /GitHub/i});
    
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/patriciasegantine/portfolio"
    );
  });
  
  test("matches snapshot", () => {
    const {asFragment} = render(<Footer/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
