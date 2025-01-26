import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorComponent from "./ErrorComponent";

describe("ErrorComponent", () => {
  it("renders the error message correctly", () => {
    const errorMessage = "An error occurred!";
    render(<ErrorComponent message={errorMessage}/>);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
  
  it("applies the default testId to the root div", () => {
    render(<ErrorComponent message="Test error"/>);
    const errorDiv = screen.getByTestId("error");
    expect(errorDiv).toBeInTheDocument();
  });
  
  it("allows overriding the testId", () => {
    const customTestId = "custom-error";
    render(<ErrorComponent message="Test error" testId={customTestId}/>);
    const errorDiv = screen.getByTestId(customTestId);
    expect(errorDiv).toBeInTheDocument();
  });
  
  it("includes the icon with correct classes", () => {
    render(<ErrorComponent message="Test error"/>);
    const icon = screen.getByTestId("error-icon");
    expect(icon).toHaveClass("icon w-6 h-6 text-red-600 dark:text-red-400");
  });
  
  it("displays the message with correct styles", () => {
    const errorMessage = "Another error occurred!";
    render(<ErrorComponent message={errorMessage}/>);
    const message = screen.getByText(errorMessage);
    expect(message).toHaveClass("text-red-600 dark:text-red-400");
  });
});
